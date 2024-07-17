const experss = require("express");
const router = experss.Router();

// const {  isAuthenticatedUser } = require("../middlewares/authMiddleware");
const {login,signout} = require("../controllers/authcontroller")
router.post("/signin", login);
router.get("/signout", signout);
// router.get("/all/user",getAllUser);
// router.delete("/delete/:user_id", deleteUser);

module.exports = router;
