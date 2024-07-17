import React from "react";


const SeoService = ({data}) => {
  console.log(data)
  return (
    <>
      <section class="bg-white">
        <div class="max-w-7xl mx-auto p-4 sm:p-3 lg:p-3">
          <div class="container mx-auto px-4 p-0 bg-white">
            <div class="mb-4 text-center">
              {/* <h4 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h4> */}
              <p class="mt-2 text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">
               {data?.[2]?.main_title}
              </p>
              {/* <p class="mt-2 text-md  text-gray-500">
               {data?.[2]?.sub_title}
              </p> */}
            </div>

            <div class="flex flex-wrap my-12">
                {
                    data?.[2].service.map((data) => (
                        <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8 ">
                        <div class="flex items-center mb-0 ">
                        {data.icon}
                          <div class="ml-4 text-md font-semibold inline">{data.title}</div>
                        </div>
                        <p class="leading-loose text-sm text-gray-500">
                         {data.disc}
                        </p>
                      </div>
                    ))
                }
             
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoService;
