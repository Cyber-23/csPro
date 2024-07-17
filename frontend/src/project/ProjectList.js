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
  getProjects,
  clearErrors,
  clearMessage,
  deleteProject,
  updateProject,
} from "../redux/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import ProjectProfile from "./ProjectProfile";
export default function ProjectList() {
  const currentUrl = window.location.href;
  const [editMode, setEditMode] = useState(false);
  const [editableProjects, seteditableProjects] = useState(null);
  const [modalopen, setModalopen] = useState(false);
  const [deleteID, setdeleteID] = useState();
  const { loading, error, message, projects } = useSelector(
    (state) => state.projects
  );
  const { user } = useSelector((state) => state.user);
  const [allproject, setAllproject] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [openProfile, setOpenProfile] = useState(false);
  const [profile, setProfile] = useState(false);

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

  let addProjecttValues = {
    c_name: "",
    email: "",
    product_name: "",
    total_payment: "",
    recived_payment: "",
    payment_date: "",
    project_status: "",
    project_complete_date: "",
  };

  useEffect(() => {
    setAllproject(projects);
    dispatch(getProjects());
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
    "id",
    "registration",
    "c_name",
    "phone",
    "product_name",
    "project_status",
    "Due_payment",
    "payment_date",
    "project_complete_date",
  ];
  const handleEdit = (pro) => {
    seteditableProjects(pro);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    seteditableProjects(null);
  };

  const formik = useFormik({
    initialValues: addProjecttValues,
    onSubmit: (values) => {
      const filteredData = Object.fromEntries(
        Object.entries(values).filter(
          ([key, value]) => value !== "" && value !== null
        )
      );

      if (Object.keys(filteredData).length > 0) {
        dispatch(
          updateProject({
            project_id: editableProjects.project_id,
            updatedData: filteredData,
          })
        );
      } else {
        alert("No Changes were made");
      }

      setEditMode(false);
      seteditableProjects(null);
    },
  });

  const handleSearch = (e) => {
    setAllproject(
      projects?.filter((p) => p.product_name?.includes(e.target.value))
    );
    setSearchQuery(e.target.value);
  };
  const handleProfile = (pro) => {
    setOpenProfile(!openProfile);
    setProfile(pro);
  };
  console.log(projects);
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Users
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link to="/add/project"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add project
            </Link>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              {message && <SuccessAlert message={message} />}
              {error && <ErrorAlert error={error} />}
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      id
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      registration
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      company name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      phone
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      product name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      project status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Due payment
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      payment date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Complete date
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allproject?.map((pro) => (
                    <tr key={pro.project_id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {pro?.project_id}
                      </td>
                      <td onClick={()=>{handleProfile(pro)}} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {pro?.registration}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {" "}
                        {editMode &&
                        editableProjects &&
                        editableProjects.project_id === pro?.project_id ? (
                          <input
                            id="c_name"
                            className="border-0 px-3 py-1 placeholder-gray-900  focus:bg-white text-gray-600  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150"
                            type="text"
                            onChange={formik.handleChange}
                            defaultValue={pro?.c_name}
                          />
                        ) : (
                          pro?.c_name
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {" "}
                        {editMode &&
                        editableProjects &&
                        editableProjects.project_id === pro?.project_id ? (
                          <input
                            id="phone"
                            className="border-0 px-3 py-1 placeholder-blueGray-300  focus:bg-white text-gray-600  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150"
                            type="text"
                            onChange={formik.handleChange}
                            defaultValue={pro?.phone}
                          />
                        ) : (
                          pro?.phone
                        )}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {" "}
                        {editMode &&
                        editableProjects &&
                        editableProjects.project_id === pro?.project_id ? (
                          <input
                            id="product_name"
                            className="border-0 px-3 py-1 placeholder-blueGray-300  focus:bg-white text-gray-600  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150"
                            type="text"
                            onChange={formik.handleChange}
                            defaultValue={pro?.product_name}
                          />
                        ) : (
                          pro?.product_name
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {editMode &&
                        editableProjects &&
                        editableProjects.project_id === pro?.project_id ? (
                          <input
                            id="project_status"
                            className="border-0 px-3 py-1 placeholder-blueGray-300  focus:bg-white text-gray-600  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150"
                            type="text"
                            onChange={formik.handleChange}
                            defaultValue={pro?.project_status}
                          />
                        ) : (
                          pro?.project_status
                        )}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {" "}
                        {pro?.total_payment - pro?.recived_payment}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {" "}
                        {editMode &&
                        editableProjects &&
                        editableProjects.project_id === pro?.project_id ? (
                          <input
                            id="payment_date"
                            className="border-0 px-3 py-1 placeholder-blueGray-300  focus:bg-white text-gray-600  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150"
                            type="text"
                            onChange={formik.handleChange}
                            defaultValue={pro?.payment_date}
                          />
                        ) : (
                          pro?.payment_date
                        )}
                      </td>

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {" "}
                        {editMode &&
                        editableProjects &&
                        editableProjects.project_id === pro?.project_id ? (
                          <input
                            id="project_complete_date"
                            className="border-0 px-3 py-1 placeholder-blueGray-300  focus:bg-white text-gray-600  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150"
                            type="text"
                            onChange={formik.handleChange}
                            defaultValue={pro?.project_complete_date}
                          />
                        ) : (
                          pro?.project_complete_date
                        )}
                      </td>

                      <td className="flex gap-x-4 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {" "}
                        {editMode &&
                        editableProjects &&
                        editableProjects.project_id === pro?.project_id ? (
                          <FaXmark
                            className="h-4 w-4 text-red-700 cursor-pointer"
                            onClick={handleCancelEdit}
                            title="cancel"
                          />
                        ) : (
                          <Link to={`/project/detail/${pro?.project_id}`}>
                            <FaEye
                              className="h-4 w-4 cursor-pointer"
                              title="details"
                            />
                          </Link>
                        )}
                        {editMode &&
                        editableProjects &&
                        editableProjects.project_id === pro?.project_id ? (
                          <FaCheck
                            className="h-4 w-4 text-green-700 cursor-pointer"
                            onClick={formik.handleSubmit}
                            title="Submit Changes"
                          />
                        ) : (
                          <BsPencilSquare
                            className="h-4 w-4 text-green-700 cursor-pointer"
                            onClick={() => handleEdit(pro)}
                            title="Edit"
                          />
                        )}
                        <FaRegTrashAlt
                          className="h-4 w-4 text-red-700 cursor-pointer"
                          onClick={() => handleDelete(pro?.project_id)}
                          title="Delete"
                        />
                      </td>

                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {modalopen && (
        <Confirmation
          isClose={isClose}
          deletefunction={deleteProject}
          id={deleteID}
        />
      )}
      {openProfile && (
        <ProjectProfile
          openProfile={openProfile}
          close={() => setOpenProfile(false)}
          profile={profile}
        />
      )}
      </div>
     
    </>
  );
}
