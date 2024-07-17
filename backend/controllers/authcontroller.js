const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/cathAsyncErrorsMiddleware");
const sendToken = require("../utils/jwtToken");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const db = require("../config/database");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
dotenv.config({ path: "backend/config/config.env" });


exports.login = catchAsyncErrors(async (request, response, next) => {
  const { email, password, role } = request.body;

  let table;
  if (role === "admin") {
    table = "users";
  } else if (role === "user") {
    table = "projects";
  } else {
    return response.status(400).json({ message: "Invalid role provided" });
  }

  const sql = `SELECT * FROM ${table} WHERE email=? AND password=?;`;

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error during login:", err);
      return next(new ErrorHandler("Error during login!", 500));
    }
    if (result.length > 0) {
      const user = result[0];
      sendToken(user, 201, response);
    } else {
      return response
        .status(404)
        .json({ message: "User not found with provided credentials" });
    }
  });
});


exports.signout = catchAsyncErrors(async (request, response, next) => {
  console.log("logout")
  response.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  response.status(200).json({
    success: true,
    message: "Logout successfully !",
  });
});

// exports.getAllUser = asyncHandler(async (req, res, next) => {
//   let sql = ` SELECT * FROM users where role="user"`; 
//   db.query(sql,(err, result) => {
//     if (err) {
//       console.error("Error during retrieval:", err);
//       return next(new ErrorHandler("Error during retrieval", 500));
//     }
//     res.status(200).json({ success: true, alluser: result });
//   });
// });
// exports.deleteUser = asyncHandler(async (req, res, next) => {
//   const {user_id} = req.params;
//   if (!user_id) {
//     return next(new ErrorHandler("appointment id (ID) is required", 400));
//   }

//   const sql = `DELETE FROM users WHERE user_id = ?`;

//   db.query(sql, [user_id], (err, result) => {
//     if (err) {
//       console.error("Error during deletion:", err);
//       return next(new ErrorHandler("Error during deletion", 500));
//     }

//     if (result.affectedRows > 0) {
//       res.status(200).json({ success: true, message: "Deletion successful" });
//     } else {
//       return next(
//         new ErrorHandler("user not found or no changes applied", 404)
//       );
//     }
//   });
// });