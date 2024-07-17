import React from "react";
import { Link } from "react-router-dom";
const Category = ({category}) => {
  return (
    <div className="w-full max-w-full mb-8 px-4 flex flex-col ">
      <img
        src={category?.img}
        alt=""
        className="object-cover object-center w-full h-48 rounded-t-lg"
      />
      <div className="flex flex-grow ">
        <div className="triangle" />
        <div className="rounded-b-lg flex flex-col px-4 py-6 h-48 bg-white border border-gray-400 text">
          <div> 
            <Link
              to="#"
              className="block mb-2 text-md font-bold  hover:underline hover:text-indigo-600"
            >
             {category?.name}
              </Link>
            <p className="mb-2 text-sm text-gray-500">
              {category?.disc}
            </p>
          </div>
          <div>
            {/* <a
              href="#"
              className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
            > */}
              {/* Read More -&gt; */}
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;