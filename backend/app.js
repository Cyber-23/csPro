const experss = require("express");
const authRoutes = require("./routes/authRoutes");
const db = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config({ path: "backend/config/config.env" });
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errorMiddleware");
const projectRoutes=require("./routes/projectRoutes")
const ticketRoutes=require("./routes/ticketRoutes")
const blogRoutes=require("./routes/blogRoutes")


const app = experss();
app.use(experss.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());

app.use(cors("origin", "*"));

app.get('/home',(req, res)=>{
  res.send("hii")
})


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/project", projectRoutes);
app.use("/api/v1/ticket", ticketRoutes);
app.use("/api/v1/blog", blogRoutes);




app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server is starting on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
  });
  

