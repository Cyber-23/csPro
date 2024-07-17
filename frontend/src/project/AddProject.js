import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import Loader from "../BaseFiles/Loader";
import { FaAngleDown, FaArrowsRotate, FaXmark } from "react-icons/fa6";
import SuccessAlert from "../BaseFiles/SuccessAlert";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  UploadProject,
  clearErrors,
  clearMessage,
  
} from "../redux/projectSlice";
import ErrorAlert from "../BaseFiles/ErrorAlert";

export default function UploadProducts() {
  const { loading, user } = useSelector((state) => state.user);
  const { message, error } = useSelector((state) => state.projects);

  const [rotate, setRotate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    c_name: "",
    email: "",
    phone: "",
    product_name: "",
    product_detail: "",
    total_payment: "",
    recived_payment: "",
    payment_date: "",
    project_complete_date: "",
  };
  const validationSchema = Yup.object().shape({
    c_name: Yup.string().required("c_name is required"),
    email: Yup.string().required("email is required"),
    phone: Yup.string().required("phone is required"),
    product_name: Yup.string().required("product_name is required"),
    total_payment: Yup.string().required("total_payment is required"),
    recived_payment: Yup.string().required("recived_payment is required"),
    payment_date: Yup.string().required("payment_date is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
     console.log(values);
      dispatch(UploadProject(values));
    },
  });


  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (message) {
      const messageInterval = setInterval(() => {
        dispatch(clearMessage());
      }, 3000);
      return () => clearInterval(messageInterval);
    }
    if (user === null) {
      navigate("/");
    }
  }, [error, dispatch, navigate, message]);
  const handleRefresh = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1000);
  };

  return (
    <section className="py-1  w-full m-auto">
      <div className="flex flex-wrap justify-between bg-white py-2 mb-1">
        <h6 className="text-gray-700 text-xl font-semibold font-sans px-4 tracking-wider w-1/2">
          Add ProJect
        </h6>
        <div className="w-1/2 flex gap-5 justify-end px-4 items-center">
          <FaAngleDown className="text-yellow-700 cursor-pointer" />
          <FaArrowsRotate
            className={`text-green-700 cursor-pointer ${
              rotate
                ? "rotate-180 transition-transform duration-1000"
                : "transition-transform"
            }`}
            onClick={handleRefresh}
          />
          <FaXmark className="text-red-700 cursor-pointer" />
        </div>
      </div>
      {message && <SuccessAlert message={message} />} 
     {error && <ErrorAlert error={error} />} 
      <div
        className={`flex bg-white justify-center ${
          loading ? "h-[560px] items-center" : "h-full"
        }`}
      >
        {loading ? (
          <Loader />
        ) : (
          <div className="w-full  px-4 mx-auto mt-10 bg-white">
            <div className="flex-auto px-4 py-10 pt-0">
              <form className="py-3" onSubmit={formik.handleSubmit}>
                <h6 className="text-gray-800   text-sm px-2 mt-3 mb-6 font-bold uppercase">
                  Client Information
                  <div className="h-1 bg-gray-700 w-16 my-3"></div>
                </h6>
                <div className="flex flex-wrap mb-5">
                  <div className="w-full lg:w-3/12 px-2">
                    <div className="relative w-full mb-3">
                      <label
                        className="block capitalize tracking-widest text-gray-800  text-xs font-bold mb-2"
                        htmlFor="c_name"
                      >
                        Company name
                      </label>
                      <input
                        id="c_name"
                        type="text"
                        value={formik.values.c_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`border-0 px-3 py-2 placeholder-blueGray-800  focus:bg-white text-gray-800  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150 ${
                          formik.touched.c_name && formik.errors.c_name
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                    {formik.touched.c_name && formik.errors.c_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.c_name}
                      </p>
                    )}
                  </div>
                  <div className="w-full lg:w-3/12 px-2">
                    <div className="relative w-full mb-3">
                      <label
                        className="block capitalize tracking-widest text-gray-800  text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        E-Mail Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`border-0 px-3 py-2 placeholder-blueGray-800  focus:bg-white text-gray-800  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150 ${
                          formik.touched.email && formik.errors.email
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div className="w-full lg:w-3/12 px-2">
                    <div className="relative w-full mb-3">
                      <label
                        className="block capitalize tracking-widest text-gray-800  text-xs font-bold mb-2"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="number"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`border-0 px-3 py-2 placeholder-blueGray-800  focus:bg-white text-gray-800  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150 ${
                          formik.touched.phone && formik.errors.phone
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300 py-3" />

                <h6 className="text-gray-800   text-sm px-2 mt-3 mb-6 font-bold uppercase">
                  Product Information
                  <div className="h-1 bg-gray-700 w-16 my-3"></div>
                </h6>
                <div className="flex flex-wrap mb-5">
                  <div className="w-full lg:w-3/12 px-2">
                    <div className="relative w-full mb-3">
                      <label
                        className="block capitalize tracking-widest text-gray-800  text-xs font-bold mb-2"
                        htmlFor="product_name"
                      >
                        product_name
                      </label>
                      <input
                        id="product_name"
                        type="text"
                        value={formik.values.product_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`border-0 px-3 py-2 placeholder-blueGray-800  focus:bg-white text-gray-800  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150 ${
                          formik.touched.product_name &&
                          formik.errors.product_name
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                    {formik.touched.product_name &&
                      formik.errors.product_name && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.product_name}
                        </p>
                      )}
                  </div>
                  <div className="w-full lg:w-3/12 px-2">
                    <div className="relative w-full mb-3">
                      <label
                        className="block capitalize tracking-widest text-gray-800  text-xs font-bold mb-2"
                        htmlFor="product_detail"
                      >
                        product_detail
                      </label>
                      <input
                        id="product_detail"
                        type="text"
                        value={formik.values.product_detail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`border-0 px-3 py-2 placeholder-blueGray-800  focus:bg-white text-gray-800  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150 ${
                          formik.touched.product_detail &&
                          formik.errors.product_detail
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                    {formik.touched.product_detail &&
                      formik.errors.product_detail && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.product_detail}
                        </p>
                      )}
                  </div>

                  <div className="w-full lg:w-3/12 px-2">
                    <div className="relative w-full mb-3">
                      <label
                        className="block capitalize tracking-widest text-gray-800  text-xs font-bold mb-2"
                        htmlFor="total_payment"
                      >
                        total_payment
                      </label>
                      <input
                        id="total_payment"
                        type="number"
                        value={formik.values.total_payment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`border-0 px-3 py-2 placeholder-blueGray-800  focus:bg-white text-gray-800  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150 ${
                          formik.touched.total_payment &&
                          formik.errors.total_payment
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                    {formik.touched.total_payment &&
                      formik.errors.total_payment && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.total_payment}
                        </p>
                      )}
                  </div>
                </div>



                <h6 className="text-gray-800   text-sm px-2 mt-3 mb-6 font-bold uppercase">
                  Product Information
                  <div className="h-1 bg-gray-700 w-16 my-3"></div>
                </h6>
                <div className="flex flex-wrap mb-5">
                  <div className="w-full lg:w-3/12 px-2">
                    <div className="relative w-full mb-3">
                      <label
                        className="block capitalize tracking-widest text-gray-800  text-xs font-bold mb-2"
                        htmlFor="recived_payment"
                      >
                        recived_payment
                      </label>
                      <input
                        id="recived_payment"
                        type="text"
                        value={formik.values.recived_payment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`border-0 px-3 py-2 placeholder-blueGray-800  focus:bg-white text-gray-800  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150 ${
                          formik.touched.recived_payment &&
                          formik.errors.recived_payment
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                    {formik.touched.recived_payment &&
                      formik.errors.recived_payment && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.recived_payment}
                        </p>
                      )}
                  </div>
                  <div className="w-full lg:w-3/12 px-2">
                    <div className="relative w-full mb-3">
                      <label
                        className="block capitalize tracking-widest text-gray-800  text-xs font-bold mb-2"
                        htmlFor="payment_date"
                      >
                        payment_date
                      </label>
                      <input
                        id="payment_date"
                        type="text"
                        value={formik.values.payment_date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`border-0 px-3 py-2 placeholder-blueGray-800  focus:bg-white text-gray-800  bg-gray-200 rounded-sm text-sm shadow focus:outline-none  w-full ease-linear transition-all duration-150 ${
                          formik.touched.payment_date &&
                          formik.errors.payment_date
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                    </div>
                    {formik.touched.payment_date &&
                      formik.errors.payment_date && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.payment_date}
                        </p>
                      )}
                  </div>

                 
                </div>

                <div className="mx-3 flex justify-start">
                  <button
                    className="bg-green-500 text-white active:bg-yellow-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    onClick={formik.resetForm}
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
