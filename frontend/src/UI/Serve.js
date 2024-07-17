import React from "react";

const Serve = ({ data }) => {
  console.log(data[2]);
  return (
    <>
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <h2 className="mb-1 text-3xl font-semibold leading-tight text-gray-900 text-center mb-5">
          {data?.[2]?.main_title}
        </h2>
        {/* <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p> */}
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            {data?.[2]?.feature?.map((data) => (
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2  text-md font-bold text-gray-800">
                        {data.name}
                      </h3>
                    </div>
                    {/* <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p> */}
                    <p className="mb-2 text-gray-600 text-sm">{data.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            {data?.[2]?.product?.map((data) => (
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                  <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 text-md font-bold text-gray-800">
                        {data.name}
                      </h3>
                    </div>
                    {/* <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                    ------------
                  </p> */}
                    <p className="mb-2 text-gray-600 text-sm">{data.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Serve;
