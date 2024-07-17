import Category from "./Category";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Swiper styles for autoplay
import { FreeMode, Pagination, Autoplay } from "swiper/modules"; // Import the Autoplay module
// const products = [
//   {
//     id: 1,
//     img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
//     name: "Web Application Development",
//     disc: "Build interactive and user-friendly web applications that cater to your specific business needs, improving efficiency and online presence."
//   },
//   {
//     id: 2,
//     img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
//     name: "Custom Software Development",
//     disc: "Tailor-made software solutions that perfectly match your unique workflows and processes, boosting productivity and streamlining operations."
  
//   },
//   {
//     id: 3,
//     img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
//     name: "E-commerce Development",
//     disc: "Create feature-rich and secure online stores that drive sales and enhance the customer shopping experience."
  
//   },
//   {
//     id: 4,
//     img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
//     name: "API Development",
//     disc: " Develop custom APIs (Application Programming Interfaces) to connect your web applications with other systems and data sources, enabling seamless data flow and automation."
  
//   },
//   {
//     id: 5,
//     img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
//     name: "Integration Services",
//     disc: "Expertly integrate existing systems and applications to break down data silos, improve communication, and optimize your technology stack."
  
//   },
//   {
//     id: 6,
//     img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
//     name: "Maintenance and Support",
//     disc: "Receive ongoing maintenance and technical support to ensure your web applications function smoothly, stay up-to-date, and address any issues promptly."
  
//   }
 
// ];

const Categories = ({data}) => {
  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-6 mx-auto sm:px-6">
      <div className="relative  mx-auto mb-10">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white  text-3xl  px-4 font-bold leading-6 text-gray-900">{data?.[1].section2_heading} </span>
      </div>
    </div>
      

      <div className="w-full flex">
        <Swiper
          slidesPerView={2}
          freeMode={true}
          autoplay={{
            delay: 2500, // Time between slides in milliseconds
            disableOnInteraction: false, // Autoplay will not be disabled after user interactions
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
          }}
          modules={[FreeMode, Pagination, Autoplay]} // Add Autoplay to the modules array
          className="mySwiper m-auto border-black"
        >
          {data?.[1].categories.map((item, index) => (
            <SwiperSlide key={index}>
              <Category category={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
