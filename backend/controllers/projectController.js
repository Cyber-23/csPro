const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/cathAsyncErrorsMiddleware");
const asyncHandler = require("express-async-handler");

const dotenv = require("dotenv");
// const multer = require("multer");
const db = require("../config/database");

dotenv.config({ path: "backend/config/config.env" });

exports.uploadProject = catchAsyncErrors(async (request, response, next) => {
  const {c_name,email,phone,product_name,product_detail,total_payment,recived_payment,payment_date,project_complete_date} = request.body;
  const registration = Date.now();
  const sql = `INSERT INTO projects (registration,c_name,email,phone,product_name,product_detail,total_payment,recived_payment,payment_date,project_complete_date) VALUES (?,?, ?, ?, ?,?, ?, ?,?,?)`;

  db.query(
    sql,
    [
      registration,c_name,email,phone,product_name,product_detail,total_payment,recived_payment,payment_date,project_complete_date
    ],
    (err, result) => {
      if (err) {
        console.error("Error during signup:", err);
        return next(new ErrorHandler("Error during signup!", 500));
      }
      if (result.affectedRows > 0) {
        response
          .status(200)
          .json({ success: true, message: "Project upload successful" });
      } else {
        return response
          .status(400)
          .json({ message: "Project could not be upload" });
      }
    }
  );
});

exports.getProjects = asyncHandler(async (req, res, next) => {
  let sql = "SELECT * FROM projects";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error during retrieval:", err);
      return next(new ErrorHandler("Error during retrieval", 500));
    }
    res.status(200).json({ success: true, projects: result });
  });
});
// exports.getProjectByCategory = asyncHandler(async (req, res, next) => {
//   const { category,gender,subcategory}=req.params;
//   let sql;
//   if( gender !== 'undefined' && subcategory !=='undefined'){
//   sql = `SELECT * FROM Projects where category='${category}' and gender='${gender}' and subcategory = '${subcategory}'`;
//   }
//   else if(subcategory!=="undefined"){
//     sql = `SELECT * FROM Projects where category='${category}' and subcategory = '${subcategory}'`;
//   }
//   else {
//     sql = `SELECT * FROM Projects where category='${category}'`;
//   }
//     db.query(sql,(err, result) => {
//       if (err) {
//         console.error("Error during retrieval:", err);
//         return next(new ErrorHandler("Error during retrieval", 500));
//       }
//       res.status(200).json({ success: true, Projectbycategory: result });
//     });
// });

// exports.getSingleProject = asyncHandler(async (req, res, next) => {
//   const {Project_id}= req.params;
//   let sql = `SELECT * FROM Projects where Project_id=${Project_id}`;
//     db.query(sql,(err, result) => {
//       if (err) {
//         console.error("Error during retrieval:", err);
//         return next(new ErrorHandler("Error during retrieval", 500));
//       }
//       res.status(200).json({ success: true, singleProject: result });
//     });
// });
exports.updateProject = asyncHandler(async (req, res, next) => {
  const updatedFields = req.body;
  const { project_id } = req.params;
  const updateFieldsString = Object.keys(updatedFields)
    .map((key) => `${key}="${updatedFields[key]}"`)
    .join(", ");

  const sql = `UPDATE projects SET ${updateFieldsString} WHERE project_id = ${Number(
    project_id
  )};`;
  console.log(sql);
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error during update:", err);
      next(new ErrorHandler("Error during update", 500));
    }

    if (result?.affectedRows > 0) {
      res.status(200).json({ success: true, message: "Update successful" });
    } else {
      next(new ErrorHandler("Project not found or no changes applied", 404));
    }
  });
});

exports.deleteProject = asyncHandler(async (req, res, next) => {
  const { project_id } = req.params;
  if (!project_id) {
    return next(new ErrorHandler("Project number (ID) is required", 400));
  }

  const sql = `DELETE FROM projects WHERE project_id = ?`;

  db.query(sql, [project_id], (err, result) => {
    if (err) {
      console.error("Error during deletion:", err);
      return next(new ErrorHandler("Error during deletion", 500));
    }

    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: "Deletion successful" });
    } else {
      return next(
        new ErrorHandler("company not found or no changes applied", 404)
      );
    }
  });
});
exports.getSingleProject = asyncHandler(async (req, res, next) => {
  const { project_id } = req.params;
  let sql = `SELECT * FROM Projects WHERE project_id = ${project_id}`;

  db.query(sql, async (err, projectResult) => {
    if (err) {
      console.error("Error during retrieval:", err);
      return next(new ErrorHandler("Error during retrieval", 500));
    }

    if (projectResult.length === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }

    const registration = projectResult[0].registration;
    let ticketSql = `SELECT * FROM ticket WHERE registration = '${registration}'`;

    db.query(ticketSql, (err, ticketResult) => {
      if (err) {
        console.error("Error retrieving tickets:", err);
        return next(new ErrorHandler("Error retrieving tickets", 500));
      }

      res.status(200).json({
        success: true,
        Detail: {
          ProDetail: projectResult[0],
          ProTickets: ticketResult,
        },
      });
    });
  });
});
