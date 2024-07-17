import React from "react";

const AiSolution = ({data}) => {
  console.log(data)

  
  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl pt-16 pb-8 sm:px-2  lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                 {data?.[1].title_heading}
                </h2>
                <p className="mt-4 text-gray-500">
                {data?.[1].sub_heading}
                </p>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  alt=""
                  src={data?.[1]?.main_image}
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 ">
              {data?.[1].incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img
                      alt=""
                      src={incentive.imageSrc}
                      className="h-16 w-16"
                    />
                  </div>
                  <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 uppercase ">
                      {incentive.name}
                    </h3>
                    {/* <p className="mt-2 text-sm text-gray-500">{incentive.description}</p> */}
                    <ul className="">
                      <li className="list-disc italic mb-3 h-[85px] ">
                        <p>
                          <span className="text-sm font-semibold pe-2">
                            {incentive.title_text1}
                          </span>
                          <span className="text-sm">
                            {incentive.sub_title_text1}
                          </span>
                        </p>
                      </li>
                      <li className="list-disc italic mb-3">
                        <p>
                          <span className="text-sm font-semibold pe-2 list-disc">
                            {incentive.title_text2}
                          </span>
                          <span className="text-sm">
                            {incentive.sub_title_text2}
                          </span>
                        </p>
                      </li>
                      {/* <li className="list-disc italic">
                        <p>
                          <span className="text-sm font-semibold pe-2 ">
                            {incentive.title_text3}
                          </span>
                          <span className="text-sm">
                            {incentive.sub_title_text3}
                          </span>
                        </p>
                      </li> */}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSolution;
