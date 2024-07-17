const experss = require("express");
const router = experss.Router();

// const {uploadProduct,getProduct,getSingleProduct,deleteProduct,updateProduct ,getSinglecompanyProduct,getSinglesellerProduct,getProductByCategory} = require("../controllers/productcontroller");
const {getProjects,updateProject,deleteProject,getSingleProject,uploadProject} = require("../controllers/projectController");


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



router.post("/upload", uploadProject);
router.get("/", getProjects);
router.post("/update/:project_id", updateProject);
router.delete("/delete/:project_id", deleteProject);
router.get("/single/:project_id", getSingleProject);


// router.get("/singlecompanyproduct", getSinglecompanyProduct)



module.exports = router;
