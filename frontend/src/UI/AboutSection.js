import React from "react";
import { Link } from "react-router-dom";

const AboutSection = ({ data }) => {
  return (
    <>
      <div className="px-2 py-10 w-full flex justify-center">
        <div className="bg-white lg:flex w-[88%] lg:shadow-lg rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="lg:scale-110  bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
              // style={{
              //   backgroundImage:
              //    `url(${data[0].main_image})`,
              // }}
              
            >
              <img className="lg:scale-80  h-80 lg:h-full bg-cover" src={data?.[0].main_image}/>
            </div>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
            <h2 className="text-2xl text-gray-800 font-bold ">
              {data?.[0].main_title}
            </h2>
            <p className="mt-2 text-gray-500 text-sm ">{data?.[0].sub_title}</p>
            <ul>
              <li>
                <p className="mt-4 text-gray-900 ">
                  <span className="font-semibold text-sm">
                  {data?.[0].heading1}
                  </span>
                  <Link to="" className="text-indigo-600 text-sm italic">
                    {" "}
                    {data?.[0].sub_heading1}
                  </Link>
                </p>
              </li>
              <li>
                <p className="mt-4 text-gray-900 ">
                  <span className="font-semibold text-sm ">
                  {data?.[0].heading2}
                  </span>
                  <Link to="" className="text-indigo-600 text-sm italic">
                    {" "}
                    {data?.[0].sub_heading2}
                  </Link>
                </p>
              </li>
            </ul>
            {/* <div className="mt-8">
              <Link to="#"
                className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
              >
                contact Now
              </Link> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
