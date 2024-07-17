const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/cathAsyncErrorsMiddleware");
const sendToken = require("../utils/jwtToken");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
// const multer = require("multer");
const db = require("../config/database");

dotenv.config({ path: "backend/config/config.env" });

exports.addBlog = asyncHandler(async (req, res, next) => {
    const post = req.body;
    const sql = 'INSERT INTO blog SET ?';
    db.query(sql, post, (err, result) => {
      if (err) {
        console.error("Error during add blog:", err);
        return next(new ErrorHandler("Error during add blog!", 500));
      }
      if (result.affectedRows > 0) {
        response
          .status(200)
          .json({ success: true, message: "added into blog successful" });
      } else {
        return response.status(400).json({ message: "blog not added" });
      }
    });
});

exports.getBlog = asyncHandler(async (req, res, next) => {
    const sql = `select * from blog`;
    db.query(sql, (err, result) => {
        if (err) {
          console.error("Error during retrieval:", err);
          return next(new ErrorHandler("Error during retrieval", 500));
        }
        res.status(200).json({ success: true, blog: result });
      });
});


exports.getsingleBlog = asyncHandler(async (req, res, next) => {
    const { blog_id } = req.params;
    const sql = 'SELECT * FROM blog WHERE blog_id = ?';
    db.query(sql, [blog_id],(err, result) => {
        if (err) {
          console.error("Error during retrieval:", err);
          return next(new ErrorHandler("Error during retrieval", 500));
        }
        res.status(200).json({ success: true, singleblog: result });
      });
});