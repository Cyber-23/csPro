import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const OurStateSection = () => {
  return (
    <>

    <div className="bg-gray-900 py-24 my-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl tracking-tight text-white  lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block mb-2 text-2xl font-bold sm:text-4xl ">Let's Build Something Great Together
          </h2>
          <p className="inline font-sm">Whether you are a new business needing your first website or a big company wanting to improve your online presence, our FullStack Development services can help you. Contact us today to talk about your project and see how we can help you succeed.
          </p>
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            We care about your data. Read our{' '}
            <Link to="#" className="font-semibold text-white">
              privacy&nbsp;policy
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
 


    </>
  );
};

export default OurStateSection;
