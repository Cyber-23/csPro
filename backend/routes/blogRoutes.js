const experss = require("express");
const router = experss.Router();
const {addBlog,getBlog,getsingleBlog} =require("../controllers/blogcontroller")

router.post('/add',addBlog);
router.delete('/single/:blog_id',getsingleBlog);
router.get('/',getBlog);

 
module.exports = router;
