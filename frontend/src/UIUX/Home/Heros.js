import React from "react";
import Slider from "react-slick";
import MegaNavbar from "./MegaNavbar";
import {Link} from "react-router-dom"
export default function Heros() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
  };

  const images = [
    "/hero.jpg",
    "/hero2.jpg",
    "/hero1.jpg",
  ];

  return (
    <>
    <div>
      <div className="flex justify-between flex-wrap">
        <div className="hidden lg:block w-full h-screen sm:w-4/12">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="m-0 p-0 w-full h-auto object-cover"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className=" h-auto lg:w-2/3">
          <MegaNavbar />
          <div className="w-full sm:w-8/12 mb-10">
            <div className="container lg:mx-32 h-full sm:p-10">
              <nav className="flex lg:pt-12 px-4 justify-between items-center">
                <div className="text-4xl font-bold">
                Powering <span className="text-blue-600">.</span>
                </div>
              </nav>
              <header className="container px-4 lg:flex mt-2 items-center h-full lg:mt-0">
                <div className="w-full">
                  <h1 className="text-4xl lg:text-6xl font-bold">
                  Digital <span className="text-blue-600">Innovation </span>
                  with Expertise and Vision
                  </h1>
                  <div className="w-20 h-2 bg-blue-600 my-4"></div>
                  <p className="text-xl mb-10 text-justify">
                  At CyberSolvings, we offer best IT solutions to help your business thrive.
                   From full-stack development to cybersecurity, we've got everything you need.
                    Our expert team combines innovation and trust to help you advance in your digital journey.

                  </p>
                  <Link to="/contact/us" className="bg-blue-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  Contact Us Today
                  </Link>
                </div>
              </header>
            </div>
          </div>
        </div>
        {/* <div className="lg:hidden  w-full h-32 sm:h-[90vh] sm:w-4/12">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="m-0 p-0 w-full h-32 object-cover sm:h-[90vh]"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
      </div>
    </>
  );
}
