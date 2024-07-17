import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import ErrorAlert from "../../BaseFiles/ErrorAlert";
import SuccessAlert from "../../BaseFiles/SuccessAlert";
import { AddTicket, clearErrors, clearMessage } from "../../redux/ticketSlice";
import { useFormik } from "formik";
import MegaNavbar from "../../UIUX/Home/MegaNavbar";
import TicketList from "../components/TicketList";
export default function GenerateTicket() {
  const { error, message } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error, message, dispatch]);

  const initialValues = {
    registration: "",
    ticket_to: "",
    reason: "",
  };

  const validationSchema = Yup.object({
    registration: Yup.string().required("Required"),
    ticket_to: Yup.string().required("Required"),
    reason: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(AddTicket(values));
    },
  });

  return (
    <>
      <div className=" relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          {/* <div className="z-10 relative px-6 pb-20 pt-4 sm:pt-8 lg:static lg:px-8 lg:py-12">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
             
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    545 Mavis Island
                    <br />
                    Chicago, IL 99191
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="tel:+1 (555) 234-5678"
                    >
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:hello@example.com"
                    >
                      hello@example.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div> */}
          <TicketList />
          <div className="isolate bg-white px-6 py-8 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Generate Ticket
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Aute magna irure deserunt veniam aliqua magna enim voluptate.
              </p>
            </div>
            {message && <SuccessAlert message={message} />}
            {error && <ErrorAlert error={error} />}
            <form
              onSubmit={formik.handleSubmit}
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Registration No of project
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="registration"
                      id="registration"
                      value={formik.values.registration}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {formik.touched.registration &&
                    formik.errors.registration && (
                      <p className="text-red-500 tracking-widest text-xs mt-2 text-left">
                        {formik.errors.registration}*
                      </p>
                    )}
                </div>
                <div>
                  <label
                    htmlFor="ticket-to"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Ticket To
                  </label>
                  <div className="mt-2.5">
                    <select
                      id="ticket_to"
                      name="ticket_to"
                      value={formik.values.ticket_to}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
                    >
                      <option value="" disabled selected>
                        Select a destination
                      </option>
                      <option value="technical">Technical</option>
                      <option value="support">Support</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
                  {formik.touched.ticket_to && formik.errors.ticket_to && (
                    <p className="text-red-500 tracking-widest text-xs mt-2 text-left">
                      {formik.errors.ticket_to}*
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Reason
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="reason"
                      value={formik.values.reason}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="reason"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {formik.touched.reason && formik.errors.reason && (
                    <p className="text-red-500 tracking-widest text-xs mt-2 text-left">
                      {formik.errors.reason}*
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Generate Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
