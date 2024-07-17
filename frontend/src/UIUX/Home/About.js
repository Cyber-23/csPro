import { useState } from "react";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
    <div className="z-0 bg-white lg:mt-12 ">
      <div className="border-2 xl:h-[500px]  shadow-inner border-gray-900 lg:mx-12 mx-4 rounded-2xl shadow-2xl  sm:mt-12 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 px-6 lg:px-8 xl:flex-row">
         
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto">
            <figure className=" isolate sm:pt-6">
              <div className="bg-white px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center  ">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                  Innovative IT Solutions for Your Digital Future
                  </p>  
                  <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  About CyberSolvings
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                  At CyberSolvings, we're an IT services company focused
                   on helping businesses thrive with cutting-edge technology solutions.
                    Our skilled team specializes in development, design, and security 
                    services, offering a wide range of digital solutions tailored for
                     today's businesses.

                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                  Our goal is to provide outstanding IT services that go
                   beyond our clients' expectations, building lasting
                    partnerships based on trust, expertise, 
                    and successful outcomes.


                  </p>
                </div>
              </div>
            </figure>
          </div>
          <div className="-mt-10 w-full max-w-2xl xl:w-96 xl:flex-none">
            <div className="">
              <img
                className=" inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src="/homeabout.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
