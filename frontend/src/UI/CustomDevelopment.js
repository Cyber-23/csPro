import React from "react";
import { Link } from "react-router-dom";
const CustomDevelopment = () => {
  const items = [
    {
      id: 1,
      title: "Android App",
      imageUrl:
        "https://www.shutterstock.com/image-photo/panorama-shot-frontend-developer-team-260nw-2294268357.jpg",
      cols: "col-span-2 sm:col-span-1 md:col-span-2",
      bg: "bg-gray-50",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/019/799/598/small/businessman-hand-touch-with-code-html-and-programming-on-screen-laptop-programmer-development-computer-code-web-design-coding-technology-in-software-digital-software-technology-development-iot-photo.jpg",
      cols: "col-span-2 sm:col-span-1 md:col-span-2",
      bg: "bg-stone-50",
      subItems: [
        {
          id: 3,
          title: "Education",
          imageUrl:
            "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1717582603~exp=1717586203~hmac=f54effba435e466163a5699f166b9357d28c7bd1b952806a17c09493f60bce76",
        },
        {
          id: 4,
          title: "Cyber Store",
          imageUrl:
            "https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg",
        },
      ],
    },
    {
      id: 5,
      title: "AI App",
      imageUrl:
        "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-122084136.jpg",
      cols: "col-span-2 sm:col-span-1 md:col-span-1",
      bg: "bg-sky-50",
    },
  ];

  return (
    <>
      <section className="bg-white">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="relative max-w-screen-sm mx-auto mb-10">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white  text-3xl  px-4 font-bold leading-6 text-gray-900">
                {" "}
                Our Recent Projects
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {items.map((item) => (
              <div
                key={item.id}
                className={`${item.cols} ${item.bg} h-auto md:h-full flex flex-col`}
              >
                <Link
                  to="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-md font-medium text-white absolute top-0 left-0 p-4 ">
                    {item.title}
                  </h3>
                </Link>
                {item.subItems && (
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to="#"
                        className="group relative flex mt-4 flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                      >
                        <img
                          src={subItem.imageUrl}
                          alt={subItem.title}
                          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                        <h3 className="z-10  font-medium text-white absolute top-0 left-0 p-4  text-md">
                          {subItem.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomDevelopment;
