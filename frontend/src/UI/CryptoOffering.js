import React from "react";
// const crypto = [
//   {
//     id: "1",
//     title: "Cryptocurrency Trading",
//     desc: "Access global markets and trade a wide range of cryptocurrencies with ease and security.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-rocket"
//       >
//         <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
//         <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
//         <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
//         <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
//       </svg>
//     ),
//   },
//   {
//     id: "2",
//     title: "Wallet Integration",
//     desc: "Securely store and manage your digital assets with our robust wallet solutions.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-bookmark-plus"
//       >
//         <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//         <line x1={12} x2={12} y1={7} y2={13} />
//         <line x1={15} x2={9} y1={10} y2={10} />
//       </svg>
//     ),
//   },
//   {
//     id: "3",
//     title: "Blockchain Development",
//     desc: " Explore the potential of blockchain technology with our expert development services.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-file-question"
//       >
//         <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
//         <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
//         <path d="M12 17h.01" />
//       </svg>
//     ),
//   },
//   {
//     id: "4",
//     title: "Security Solutions",
//     desc: "Safeguard your investments with cutting-edge cybersecurity measures tailored for the crypto ecosystem.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-video"
//       >
//         <path d="m22 8-6 4 6 4V8Z" />
//         <rect width={14} height={12} x={2} y={6} rx={2} ry={2} />
//       </svg>
//     ),
//   },
//   {
//     id: "4",
//     title: "Consultancy Services",
//     desc: "Gain insights and strategies from our cryptocurrency experts to optimize your investments.",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width={24}
//         height={24}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="lucide lucide-bookmark-plus"
//       >
//         <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//         <line x1={12} x2={12} y1={7} y2={13} />
//         <line x1={15} x2={9} y1={10} y2={10} />
//       </svg>
//     ),
//   },
// ];
const CryptoOffering = ({data}) => {
  return (
    <>
      <section className>
        <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-2xl font-bold text-center sm:text-3xl">
           {data?.[1].main_title}
            </h2>
            <p className="max-w-3xl mx-auto mt-2 text-md text-center ">
              {data?.[1].sub_title}
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              {data?.[1]?.crypto?.map((data) => (
                <div className="mt-4 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        {data.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-semibold">
                        {data.title}
                      </h4>
                      <p className="mt-1 text-sm">{data.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                width={600}
                height={400}
                src={data?.[1].main_img}
                className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CryptoOffering;
