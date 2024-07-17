import React from "react";

const CryptoInformation = ({data}) => {
  console.log(data)
  return (
    <>
    <section  className="bg-gray-800 pt-10">
        <div>
            <h2 className="text-2xl font-bold text-white text-center sm:text-3xl">
            {data?.[2]?.main_title}
            </h2>
            </div>
      <div className="grid grid-cols-4 gap-8 p-8 md:p-16 ">
        {
          data?.[2]?.Info?.map((infoItem) => (
                <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300">
                <span className="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gray-800">
                  {infoItem.icon}
                </span>
                <h2 className="my-1 gradient-red text-base uppercase tracking-wide">
                 {infoItem.title}
                </h2>
                <p className="py-2 text-center text-sm">
                {infoItem.desc}
                </p>
              </div>
            ))
        }
      
        

      </div>
      </section>
    </>
  );
};

export default CryptoInformation;
