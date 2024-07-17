import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import {
  getProjectDetail,
  clearErrors,
  clearMessage,
} from "../redux/projectSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function ProjectDetail() {
  const { project_id } = useParams();
  const dispatch = useDispatch();

  const { loading, error, message, Detail } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(getProjectDetail(project_id));
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
  }, [dispatch, error, message,Detail]);

  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Project Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Project details and Ticket Detail.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Project_id / Registration Number
              </dt>
              <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{Detail?.ProDetail?.project_id} / {Detail?.ProDetail?.registration}</span>
                
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Company / Client Name 
              </dt>
              <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{Detail?.ProDetail?.c_name } ({Detail?.ProDetail?.email})</span>
                
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address / Phone number
              </dt>
              <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{Detail?.ProDetail?.email} / {Detail?.ProDetail?.phone}</span>
                
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Payment Detail (Total - Recieved = Due)
              </dt>
              <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{Detail?.ProDetail?.total_payment} - {Detail?.ProDetail?.recived_payment} = {Detail?.ProDetail?.total_payment - Detail?.ProDetail?.recived_payment}</span>
               
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
              (Product Name) Description
              </dt>
              <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">
                 ({Detail?.ProDetail?.product_name}), {Detail?.ProDetail?.product_detail}
                </span>
               
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Tickets for this project
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  {Detail?.ProTickets?.map((ticket, index) => (
  <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
    <div className="flex w-0 flex-1 items-center">
      <PaperClipIcon
        aria-hidden="true"
        className="h-5 w-5 flex-shrink-0 text-gray-400"
      />
      <div className="ml-4 flex min-w-0 flex-1 gap-2">
        <span className="truncate font-medium">
          Ticket Number {ticket?.ticket_no}
        </span>
        <span className="flex-shrink-0 text-gray-400">
          {ticket?.received_date}
        </span>
      </div>
    </div>
    <div className="ml-4 flex flex-shrink-0 space-x-4">
      <button
        type="button"
        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
      >
        {ticket?.status}
      </button>
      <span aria-hidden="true" className="text-gray-200">
        |
      </span>
      <button
        type="button"
        className="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800"
      >
        To: {ticket?.ticket_to}
      </button>
    </div>
  </li>
))}

                 
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
