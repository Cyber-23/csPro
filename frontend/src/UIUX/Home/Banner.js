import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {Link} from "react-router-dom"
export default function Banner() {
  return (
    <div>
    <section className=" reltive border-stroke bg-black text-white dark:border-dark-3 dark:bg-dark lg:block hidden">
      <div className=" pl-7 pr-5">
          <div className="flex flex-wrap justify-between items-center gap-5 md:flex-nowrap">
            <div>
            <a href="#">
              <img
                src="/logo.png"
                alt="logo"
                className=" dark:inline-block w-40 h-15"
              />
            </a>
            </div>
            <div>
            <p className=" flex inline-flex  items-center justify-center whitespace-nowrap rounded-lg bg-primary px-5  text-[12px] text-white duration-200 hover:bg-primary/90">
             <Link to="/Generate/ticket">E-mail : info@cybersolvings.com </Link>  
            </p></div>
          <div className="">
            <Link
              to="/login"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-primary px-5 py-2 text-[12px] text-white duration-200 hover:bg-primary/90"
            >
              Contact : +91-80534-30300
            </Link>
           
          </div>
          </div>

        </div>
    </section></div>
  );
}
