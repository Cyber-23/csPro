import React from "react";
import { FaXmark, FaEye } from "react-icons/fa6";
import ErrorAlert from "../BaseFiles/ErrorAlert";
import SuccessAlert from "../BaseFiles/SuccessAlert";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Confirmation } from "../BaseFiles/Confirmation";
import { FaRegTrashAlt, FaCheck, FaSearch } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import {
  getTickets,
  clearErrors,
  clearMessage,
  deleteTicket,
  updateTicket,
} from "../redux/ticketSlice";
import { useDispatch, useSelector } from "react-redux";
export default function TicketList() {
  const currentUrl = window.location.href;
  const [editMode, setEditMode] = useState(false);
  const [editableTicket, seteditableTicket] = useState(null);
  const [modalopen, setModalopen] = useState(false);
  const [deleteID, setdeleteID] = useState();
  const { loading, error, message, tickets } = useSelector(
    (state) => state.tickets
  );
  const { user } = useSelector((state) => state.user);
  const [allticket, setAllticket] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [rotate, setRotate] = useState(false);

  function isClose() {
    setModalopen(false);
  }
  function handleDelete(id) {
    setdeleteID(id);
    if (deleteID) {
      console.log(id);
      setModalopen(true);
    }
  }

  let addTicketValues = {
    ticket_to: "",
    status: "",
    complete_date: "",
  };

  useEffect(() => {
    setAllticket(tickets);
    dispatch(getTickets());
    if (error) {
      const errorInterval = setInterval(() => {
        dispatch(clearErrors());
      }, 3000);
      return () => clearInterval(errorInterval);
    }
    if (message) {
      const messageInterval = setInterval(() => {
        dispatch(clearMessage());
      }, 3000);
      return () => clearInterval(messageInterval);
    }
  }, [dispatch, error, message]);

  const thds = [
    "ticket_id",
    "ticket_no",
    "registration",
    "ticket_to",
    "status",
    "recived_date",
    "complete_date",
  ];
  const handleEdit = (tik) => {
    seteditableTicket(tik);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    seteditableTicket(null);
  };

  const formik = useFormik({
    initialValues: addTicketValues,
    onSubmit: (values) => {
      const filteredData = Object.fromEntries(
        Object.entries(values).filter(
          ([key, value]) => value !== "" && value !== null
        )
      );

      if (Object.keys(filteredData).length > 0) {
        dispatch(
          updateTicket({
            ticket_id: editableTicket.ticket_id,
            updatedData: filteredData,
          })
        );
      } else {
        alert("No Changes were made");
      }

      setEditMode(false);
      seteditableTicket(null);
    },
  });

  const handleSearch = (e) => {
    setAllticket(tickets?.filter((t) => t.ticket_no?.includes(e.target.value)));
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <div className="pb-4 bg-white p-4">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              id="search"
              name="search"
              placeholder="search..."
              value={searchQuery}
              onChange={(e) => handleSearch(e)}
              type="text"
              className={`border-0 px-20 w-1/2 py-2 placeholder-blueGray-300  focus:bg-white text-gray-600 rounded-sm text-sm shadow-xl focus:outline-none  w-full ease-linear transition-all duration-150 border-red-500`}
            />
          </div>
        </div>
        {message && <SuccessAlert message={message} />}
        {error && <ErrorAlert error={error} />}
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              {thds.map((heading, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {heading}
                </th>
              ))}
              <th scope="col" className="py-2 px-2 text-xs border-b-2">
                <div className="flex items-center">Actions</div>
              </th>
            </tr>
          </thead>
          <tbody>
  {allticket?.map((tik) => (
    <tr
      key={tik.ticket_id}
      className="bg-white border-b  hover:bg-gray-50 "
    >
      <td className="px-4 py-2 text-gray-700">{tik.ticket_id}</td>
      <td className="px-4 py-2 text-gray-700">{tik?.ticket_no}</td>
      <td className="px-4 py-2 text-gray-700">{tik?.registration}</td>

      <td className="px-4 py-2 text-gray-700">
        {editMode && editableTicket && editableTicket.ticket_id === tik?.ticket_id ? (
          <input
            id="ticket_to"
            className="border-0 px-3 py-1 placeholder-gray-900 focus:bg-white text-gray-600 bg-gray-200 rounded-sm text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
            type="text"
            onChange={formik.handleChange}
            defaultValue={tik?.ticket_to}
          />
        ) : (
          tik?.ticket_to
        )}
      </td>

      <td className="px-4 py-2 text-gray-700">
  {editMode && editableTicket && editableTicket.ticket_id === tik?.ticket_id ? (
    <select
      id="status"
      className="border-0 px-3 py-1 placeholder-blueGray-300 focus:bg-white text-gray-600 bg-gray-200 rounded-sm text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
      onChange={formik.handleChange}
      defaultValue={tik?.status}
    >
      <option value="pending">Pending</option>
      <option value="complete">Complete</option>
      <option value="Decline">Decline</option>
      <option value="progess">In Progess</option>

      {/* Add more options as needed */}
    </select>
  ) : (
    tik?.status
  )}
</td>


      <td className="px-4 py-2 text-gray-700">
        {editMode && editableTicket && editableTicket.ticket_id === tik?.ticket_id ? (
          <input
            id="recived_date"
            className="border-0 px-3 py-1 placeholder-blueGray-300 focus:bg-white text-gray-600 bg-gray-200 rounded-sm text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
            type="date"
            onChange={formik.handleChange}
            defaultValue={tik?.recived_date}
          />
        ) : (
          tik?.recived_date
        )}
      </td>

      <td className="px-4 py-2 text-gray-700">
        {editMode && editableTicket && editableTicket.ticket_id === tik?.ticket_id ? (
          <input
            id="complete_date"
            className="border-0 px-3 py-1 placeholder-blueGray-300 focus:bg-white text-gray-600 bg-gray-200 rounded-sm text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
            type="date"
            onChange={formik.handleChange}
            defaultValue={tik?.complete_date}
          />
        ) : (
          tik?.complete_date
        )}
      </td>

      <td className="px-2 py-4 flex gap-3">
        {editMode && editableTicket && editableTicket.ticket_id === tik?.ticket_id ? (
          <FaXmark
            className="h-4 w-4 text-red-700 cursor-pointer"
            onClick={handleCancelEdit}
            title="Cancel"
          />
        ) : (
          <Link to={`/project/details/${tik?.ticket_id}`}>
            <FaEye
              className="h-4 w-4 cursor-pointer"
              title="Details"
            />
          </Link>
        )}
        {editMode && editableTicket && editableTicket.ticket_id === tik?.ticket_id ? (
          <FaCheck
            className="h-4 w-4 text-green-700 cursor-pointer"
            onClick={formik.handleSubmit}
            title="Submit Changes"
          />
        ) : (
          <BsPencilSquare
            className="h-4 w-4 text-green-700 cursor-pointer"
            onClick={() => handleEdit(tik)}
            title="Edit"
          />
        )}
        <FaRegTrashAlt
          className="h-4 w-4 text-red-700 cursor-pointer"
          onClick={() => handleDelete(tik?.ticket_id)}
          title="Delete"
        />
      </td>
    </tr>
  ))}
</tbody>

        </table>
        {modalopen && (
          <Confirmation
            isClose={isClose}
            deletefunction={deleteTicket}
            id={deleteID}
          />
        )}
      </div>
    </>
  );
}
