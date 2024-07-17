import React, { useState } from "react";
import { SiGooglemarketingplatform } from "react-icons/si";
import { Link } from "react-router-dom";
export default function MegaNavbar() {
  const [open, setOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMegaMenu1, setShowMegaMenu1] = useState(false);
  const [showMegaMenu2, setShowMegaMenu2] = useState(false);
  const [showMegaMenu3, setShowMegaMenu3] = useState(false);

  return (
    <header>
      <div className=" z-50 bg-white text-black w-full shadow-2xl">
        <div className="container mx-auto">
          <div className="relative items-right z-50">
            <div className="lg:pt-0 px-8">
              <div className="">
                <div className="flex flex-wrap justify-between ">
                  <img className="lg:hidden block w-30 h-20" src="/logo2.png" />

                  <button
                    onClick={() => setOpen(!open)}
                    id="navbarToggler"
                    className={`  ${
                      open && "navbarTogglerActive"
                    } absolute right-4 top-1/2  block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                  >
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-gray-900"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-gray-900"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-gray-900"></span>
                  </button>
                </div>
                <div
                  id="navbarCollapse"
                  className={`absolute w-full bg-white shadow lg:static lg:block ${
                    !open && "hidden"
                  }`}
                >
                  <ul className=" lg:flex justify-between item-center">
                    <li className="hover:bg-black hover:text-white p-4">
                      <Link
                        to="/"
                        className=""
                      >
                        HOME
                      </Link>
                    </li>

                    <li
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                     className="relative hover:bg-black hover:text-white p-4">
                      <button
                        
                        className="">
                        IT SERVICES
                        <span
                          className={`${
                            showMegaMenu ? "-scale-y-100" : ""
                          } duration-200`}
                        ></span>
                      </button>
                      <div
                        onMouseEnter={() => setShowMegaMenu(true)}
                        onMouseLeave={() => setShowMegaMenu(false)}
                        className={`w-full lg:absolute lg:top-full  left-0 lg:-left-[160px] lg:w-[800px]  lg:w-[800px] lg:rounded-xl lg:shadow-lg ${
                          showMegaMenu ? "block" : "hidden"
                        }`}
                      >
                        <div className="rounded-t-xl bg-white p-2 lg:p-4">
                          <div className="lg:flex justify-between z-50 ">
                            <div>
                              <div>
                                <div className=" text-center">
                                  <h4 className="mb-1 text-base font-medium text-gray-800">
                                    Development
                                  </h4>
                                  <div className="h-[2px] mt-2 bg-gray-800 px-4"></div>
                                </div>
                              </div>
                              <div>
                                <Link
                                  to="/service/fullstack"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      FullStack Development
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/service/mobiledevlopment"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Mobile Development
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/service/software"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Software Development
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/service/Metadev"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Metaverse Development
                                    </h3>
                                  </div>
                                </Link>
                              </div>
                            </div>

                            <div>
                              <div>
                                <div>
                                  <div className=" text-center">
                                    <h4 className="mb-1 text-base font-medium text-gray-800">
                                      Designing
                                    </h4>
                                    <div className="h-[2px] mt-2 bg-gray-800 px-4"></div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <Link
                                  to="/service/Graphic"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Graphic Designing
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/service/WebDesigning"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Web Designing
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/service/design"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      UI/UX Designing
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/service/SystemDesign"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      System Designing
                                    </h3>
                                  </div>
                                </Link>
                              </div>
                            </div>

                            <div>
                              <div>
                                <div>
                                  <div className=" text-center">
                                    <h4 className="mb-1 text-base font-medium text-gray-800">
                                      Security
                                    </h4>
                                    <div className="h-[2px] mt-2 bg-gray-800 px-4"></div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <Link
                                  to="/service/Cybersecurity"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Cyber Security
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/service/Networksecurity"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Network Security
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/service/Cloudsecurity"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Cloud Security
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/service/DevOps"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      DevOps
                                    </h3>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li 
                    onMouseEnter={() => setShowMegaMenu1(true)}
                    onMouseLeave={() => setShowMegaMenu1(false)}
                    className="relative hover:bg-black hover:text-white p-4">
                      <button
                        
                       >
                        AI SOLUTION
                        <span
                          className={`${
                            showMegaMenu1 ? "-scale-y-100" : ""
                          } duration-200`}
                        ></span>
                      </button>
                      <div
                        onMouseEnter={() => setShowMegaMenu1(true)}
                        onMouseLeave={() => setShowMegaMenu1(false)}
                        className={`w-full lg:absolute lg:left-0 lg:top-full lg:w-[300px] lg:rounded-xl lg:shadow-lg ${
                          showMegaMenu1 ? "block" : "hidden"
                        }`}
                      >
                        <div className="rounded-t-xl bg-white p-2 lg:p-4 dark:bg-dark">
                          <div className="flex justify-between">
                            <div>
                              <div>
                                <Link
                                  to="/AiService/genai"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Generative AI
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/AiService/ImageProcessing"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Image Processing
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/AiService/MachineLearning"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Machine Learning
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/AiService/DeepLearning"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Deep Learning
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/AiService/NaturalLearning"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Natural Processing Language
                                    </h3>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li onMouseEnter={() => setShowMegaMenu2(true)}
                        onMouseLeave={() => setShowMegaMenu2(false)}
                        className="relative hover:bg-black hover:text-white p-4">
                      <button
                        
                        >
                        WALLET
                        <span
                          className={`${
                            showMegaMenu2 ? "-scale-y-100" : ""
                          } duration-200`}
                        ></span>
                      </button>
                      <div
                        onMouseEnter={() => setShowMegaMenu2(true)}
                        onMouseLeave={() => setShowMegaMenu2(false)}
                        className={`w-full lg:absolute lg:left-0 lg:top-full lg:w-[300px] lg:rounded-xl lg:shadow-lg ${
                          showMegaMenu2 ? "block" : "hidden"
                        }`}
                      >
                        <div className="rounded-t-xl bg-white p-2 lg:p-4 dark:bg-dark">
                          <div className="flex justify-between">
                            <div>
                              <div>
                                <Link
                                  to="/wallet/cryptocurrency"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      CryptoCurrency
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/wallet/whitewallet"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      White Wallet
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/wallet/web3"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Web3
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/wallet/deFi"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      DeFi
                                    </h3>
                                  </div>
                                </Link>

                                <Link
                                  to="/wallet/blockchain"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Blockchain
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/wallet/P2Pwallet"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      P2P Wallet
                                    </h3>
                                  </div>
                                </Link>

                                <Link
                                  to="/wallet/centralizedwallet"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Centralized Wallet
                                    </h3>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li onMouseEnter={() => setShowMegaMenu3(true)}
                        onMouseLeave={() => setShowMegaMenu3(false)}
                         className="relative hover:bg-black hover:text-white p-4">
                      <button
                        
                        >
                        MARKETING
                        <span
                          className={`${
                            showMegaMenu3 ? "-scale-y-100" : ""
                          } duration-200`}
                        ></span>
                      </button>
                      <div
                        onMouseEnter={() => setShowMegaMenu3(true)}
                        onMouseLeave={() => setShowMegaMenu3(false)}
                        className={`w-full lg:absolute lg:left-0 lg:top-full lg:w-[300px] lg:rounded-xl lg:shadow-2xl  ${
                          showMegaMenu3 ? "block" : "hidden"
                        }`}
                      >
                        <div className="rounded-2xl bg-white p-2 lg:p-4 dark:bg-dark">
                          <div className="flex justify-between">
                            <div>
                              <div>
                                <Link
                                  to="/SeoMarketing/SEO"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Search Engine Optimization
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/SeoMarketing/SMM"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Social Media Management
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/SeoMarketing/Googleads"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Google Ads
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/SeoMarketing/Emailmarketing"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Email Marketing
                                    </h3>
                                  </div>
                                </Link>
                                <Link
                                  to="/SeoMarketing/SocialmediaAds"
                                  className="group hover:bg-gray-800 text-gray-800  hover:text-white flex flex-col gap-4 rounded-lg p-4 duration-200 lg:flex-row"
                                >
                                  <div className="text-primary">
                                    <SiGooglemarketingplatform />
                                  </div>
                                  <div className="">
                                    <h3 className="mb-1 text-base font-semibold  duration-200">
                                      Social Media Ads
                                    </h3>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="hover:bg-black hover:text-white p-4">
                      <Link
                        to="/about"
                        >
                        ABOUT
                      </Link>
                    </li>
                    <li className="hover:bg-black hover:text-white p-4">
                      <Link
                        to="/Contact/us"
                         >
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
