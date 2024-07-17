import React from "react";
import { TfiAgenda } from "react-icons/tfi";
import { AiOutlineSolution } from "react-icons/ai";
import { FaStaylinked } from "react-icons/fa";
import { MdBrowserNotSupported } from "react-icons/md";
const Product = [
  {
    id: "1",
    title: "Expertise and Experience",
    imageUrl: (<TfiAgenda/>),
    sub_title: "Our team of AI specialists has extensive experience in developing and implementing generative AI solutions.",
  },
  {
    id: "2",
    title: "Custom Solutions",
    imageUrl: (<AiOutlineSolution />),
    sub_title: "We tailor our AI solutions to meet the specific needs of your business.",
  },
  {
    id: "3",
    title: "Innovation-Driven",
    imageUrl: (<FaStaylinked/>),
    sub_title: "We stay ahead of the curve by continuously exploring and adopting the latest advancements in AI technology.",
  },
  {
    id: "4",
    title: "End-to-End Support",
    imageUrl: (<MdBrowserNotSupported />),
    sub_title: "From initial consultation to implementation and maintenance, we provide comprehensive support throughout your AI journey.",
  },
];

const Industries = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-4">
        <div className="mx-auto max-w-6xl">
            <div className="text-center py-8">
                
                <h4 className="sm:text-3xl font-semibold">Why Choose Cybersolvings for Image Processing Solutions?</h4>
            </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Product.map((data, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden bg-white px-2 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-6"
              >
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400 text-4xl text-white">
                    {data.imageUrl}
                  </span>
                  <div className="space-y-6 pt-5 text-base  text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p className=" mb-0 text-sm text-justify">
                        <span className="text-sm m-0 font-semibold block">{data.title}</span>
                        <span className="text-sm m-0 ">{data.sub_title}</span>
                        </p>
                  </div>
                  {/* <div className="align-text-bottom font-semibold ">
                  
                    <p className="align-text-bottom">
                      <a
                        href="#"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white text-sm"
                      >
                        Read the docs →
                      </a>
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
