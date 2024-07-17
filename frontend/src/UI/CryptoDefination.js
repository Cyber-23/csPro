import React from "react";

const CryptoDefination = ({data}) => {
  console.log(data)
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
             {data?.[0].main_title}
              </h2>
              <p className="mt-4 text-gray-600 text-md">
              {data?.[0].sub_title}
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                 {data?.[0].learn_btn}
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={data?.[0].main_image}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CryptoDefination;
