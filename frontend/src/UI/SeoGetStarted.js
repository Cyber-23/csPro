import React from 'react'

const SeoGetStarted = () => {
  return (
    <>
 
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-7">
        <div className="relative isolate overflow-hidden bg-gray-600 px-6 py-24 text-center shadow-2xl sm:rounded-xl sm:px-16">
          <h2 className="mx-auto  text-3xl font-bold tracking-tight text-white sm:text-3xl">
          Get Started
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-md leading-8 text-gray-300">
          Ready to boost your online presence? Contact us today to discuss how our SEO services can help your business grow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>



    </>
  )
}

export default SeoGetStarted