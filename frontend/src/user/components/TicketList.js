import { useSelector, useDispatch } from "react-redux";
import { getTickets } from "../../redux/ticketSlice";
import { useEffect, useState } from "react";
// dateUtils.js
import { formatDistanceToNow, parseISO } from 'date-fns';


import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function formatRelativeDate(dateString) {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
}

export default function TicketList() {
  const dispatch = useDispatch();
  const { loading, error, message, tickets } = useSelector(
    (state) => state.tickets
  );
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getTickets(user.registration));
  }, [dispatch]);

  return (
    <div className="flex">
       <div className="w-2/3 p-4">
        <ul role="list" className="-mb-8">
          {tickets.map((ticket, ticketIdx) => (
            <li key={ticket.ticket_no}>
              <div className="relative pb-8">
                {ticketIdx !== tickets.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div className="flex-shrink-0">
                    <span
                      className={classNames(
                        ticket.iconBackground,
                        "flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-white"
                      )}
                    >
                      {/* <ticket.icon aria-hidden="true" className="h-5 w-5 text-white" /> */}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 bg-white p-4 rounded-lg shadow-md border">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-900">{ticket.reason}</p>
                      <div className="text-right text-sm text-gray-500">
                        <time dateTime={ticket.recived_date}>
                          {formatRelativeDate(ticket.recived_date)}
                        </time>
                      </div>
                    </div>
                    <div className="mt-2">
                      <ul>
                        {ticket.responses?.length > 0 ? (
                          ticket.responses.map((response) => (
                            <li key={response.response_id} className="mt-2 p-2 bg-gray-50 rounded-lg shadow-sm border">
                              <div className="text-sm text-gray-700">{response.response_text}</div>
                              <div className="text-right text-xs text-gray-500">
                                <time dateTime={response.response_date}>
                                  {formatRelativeDate(response.response_date)}
                                </time>
                              </div>
                            </li>
                          ))
                        ) : (
                          <li className="text-sm text-gray-500 mt-2">No responses</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
