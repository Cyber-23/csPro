const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/cathAsyncErrorsMiddleware");
const asyncHandler = require("express-async-handler");
const { formatDistanceToNow, parseISO } = require('date-fns');

const dotenv = require("dotenv");
// const multer = require("multer");
const db = require("../config/database");

dotenv.config({ path: "backend/config/config.env" });

const formatRelativeDate = (dateString) => {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};

exports.ticketAdd = catchAsyncErrors(async (request, response, next) => {
  const { registration, ticket_to, reason } = request.body;
  const ticketnumber = Date.now();

  const checkRegistrationSql = `SELECT * FROM projects WHERE registration = ?`;
  const checkPendingTicketSql = `SELECT * FROM ticket WHERE registration = ? AND status = 'pending'`;

  // Check if the registration exists
  db.query(checkRegistrationSql, [registration], (err, result) => {
    if (err) {
      console.error("Error during registration check:", err);
      return next(new ErrorHandler("Error during registration check!", 500));
    }

    if (result.length > 0) {
      // Check if a pending ticket exists for the same registration
      db.query(checkPendingTicketSql, [registration], (err, pendingResult) => {
        if (err) {
          console.error("Error during pending ticket check:", err);
          return next(
            new ErrorHandler("Error during pending ticket check!", 500)
          );
        }

        if (pendingResult.length > 0) {
          // A pending ticket already exists
          return response
            .status(400)
            .json({
              success: false,
              message:
                "A ticket with status 'pending' already exists for this registration",
            });
        } else {
          // No pending ticket exists, proceed with inserting the new ticket
          const insertTicketSql = `INSERT INTO ticket (registration, ticket_no, ticket_to, reason) VALUES (?, ?, ?, ?)`;
          db.query(
            insertTicketSql,
            [registration, ticketnumber, ticket_to, reason],
            (err, result) => {
              if (err) {
                console.error("Error during ticket generation:", err);
                return next(
                  new ErrorHandler("Error during ticket generation!", 500)
                );
              }

              if (result.affectedRows > 0) {
                return response
                  .status(200)
                  .json({
                    success: true,
                    message: "Ticket generated successfully",
                  });
              } else {
                return response
                  .status(400)
                  .json({
                    success: false,
                    message: "Ticket could not be generated",
                  });
              }
            }
          );
        }
      });
    } else {
      return response
        .status(400)
        .json({ success: false, message: "Registration not valid" });
    }
  });
});

exports.getTicketsWithResponsesByRegistration = asyncHandler(async (req, res, next) => {
  const { registration } = req.params;

  if (!registration) {
    return next(new ErrorHandler('Registration parameter is missing', 400));
  }

  try {
    const [tickets] = await db.promise().query('SELECT * FROM ticket WHERE registration = ?', [registration]);

    if (tickets.length === 0) {
      return next(new ErrorHandler('No tickets found for the provided registration', 404));
    }

    for (const ticket of tickets) {
      const [responses] = await db.promise().query('SELECT * FROM responses WHERE ticket_id = ?', [ticket.ticket_id]);
      ticket.responses = responses;
    }

    const formattedTickets = tickets.map(ticket => ({
      ...ticket,
      recived_date: ticket.recived_date,
      complete_date: ticket.complete_date ? ticket.complete_date : null,
      responses: ticket.responses.map(response => ({
        ...response,
        response_date:response.response_date,
      })),
    }));

    res.status(200).json(formattedTickets);
  } catch (error) {
    console.error('Error during database query:', error);
    return next(new ErrorHandler('Database error', 500));
  }
});


exports.updateTicket = asyncHandler(async (req, res, next) => {
  const updatedFields = req.body;
  const { ticket_id } = req.params;
  const updateFieldsString = Object.keys(updatedFields)
    .map((key) => `${key}="${updatedFields[key]}"`)
    .join(", ");

  const sql = `UPDATE ticket SET ${updateFieldsString} WHERE ticket_id = ${Number(
    ticket_id
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

exports.deleteTicket = asyncHandler(async (req, res, next) => {
  const { ticket_id } = req.params;
  if (!ticket_id) {
    return next(new ErrorHandler("ticket number (ID) is required", 400));
  }

  const sql = `DELETE FROM ticket WHERE ticket_id = ?`;

  db.query(sql, [ticket_id], (err, result) => {
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

exports.ticketAction = catchAsyncErrors(async (request, response, next) => {
  const { id, action } = request.body;
  const sql = `update ticket set status='${action}' WHERE ticket_id = ${id}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error during ticket update:", err);
      return next(new ErrorHandler("Error during ticket update!", 500));
    } else {
      if (result.affectedRows > 0) {
        response
          .status(200)
          .json({ success: true, message: "ticket request update successful" });
      } else {
        return response
          .status(400)
          .json({ message: "Request could not be updated" });
      }
    }
  });
});
