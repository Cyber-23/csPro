import React from "react";
 
const CryptoChoose = ({data}) => {
  console.log(data)
  return (
    <>
      <div class="bg-gray-50 px-4 mt-16">
      <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center sm:text-3xl pt-10">
           {data?.[3].main_title}
            </h2>
            </div>
        <div class="container mx-auto py-12 w-[93%]">
         
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
            {data?.[3]?.choose?.map((item) => (
              <div class="bg-white shadow-lg rounded-lg overflow-hidden border">
                <div class="p-6">
                  <h2 class="text-md font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h2>
                  <p class="text-gray-600 text-sm text-justify ">{item.desc}</p>
                </div>
                <div class="bg-gray-100 px-6 py-4">
                  <a
                    href="#"
                    class="text-blue-600 font-sm hover:text-blue-800"
                  >
                    {item.sub_btn}
                  </a>
                </div>
              </div>
              ))}
            </div>
          
        </div>
      </div>
    </>
  );
};

export default CryptoChoose;
