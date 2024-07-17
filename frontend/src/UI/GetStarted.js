import React from 'react'

const GetStarted = () => {
  return (
   <>
   
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6  lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              alt=""
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 px-6 py-12 sm:px-12">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">Get Started with </span>
                <span className="block sm:inline">Image Processing Today</span>
              </h2>
              <p className="mt-3 text-sm text-white">
              Ready to unleash the power of image processing? Contact us today to learn more about how our solutions can transform your visual data and drive business innovation. Let us work together to create something extraordinary.

              </p>
              <a
                href="#"
                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Shop Workspace
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


   
   </>
  )
}

export default GetStarted