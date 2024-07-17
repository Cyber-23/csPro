const experss = require("express");
const router = experss.Router();

// const {uploadProduct,getProduct,getSingleProduct,deleteProduct,updateProduct ,getSinglecompanyProduct,getSinglesellerProduct,getProductByCategory} = require("../controllers/productcontroller");
const {getTickets,updateTicket,deleteTicket, ticketAdd, getTicketsWithResponsesByRegistration} = require("../controllers/ticketController");


// const createFolderForRequest = (req, res, next) => {
//   req.productFolder = path.join(__dirname, `../../frontend/public/proimage`);
//   if (!fs.existsSync(req.productFolder)) {
//     fs.mkdirSync(req.productFolder, { recursive: true });
//   }
//   next();
// };


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, req.productFolder);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const uploadFile = multer({ storage: storage });



// router.post("/upload",createFolderForRequest,uploadFile.array('file', 5), uploadProduct);
router.get('/registration/:registration', getTicketsWithResponsesByRegistration);
router.post("/update/:ticket_id", updateTicket);
router.delete("/delete/:ticket_id", deleteTicket);
router.post("/add", ticketAdd);



// router.get("/singlecompanyproduct", getSinglecompanyProduct)


 
module.exports = router;
