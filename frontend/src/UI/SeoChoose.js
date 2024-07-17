import React from 'react'




const SeoChoose = ({data}) => {
  console.log(data)
  return (
    <>
   <section className="overflow-hidden bg-white py-4 sm:py-4">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{data?.[3]?.small_text}</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data?.[3]?.main_title}</p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">Our SEO experts have years of experience and a thorough understanding of search engine algorithms. */}
          {/* </p> */}
          <dl className="mt-4 max-w-xl space-y-8 text-base leading-3 text-gray-600 lg:max-w-none">
          {
                data?.[3].Choose.map((data) => (
                  <dl className="mt-3 max-w-xl  text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline text-md me-2 font-semibold text-gray-900">
                        {data.icon}
                      {data.title}
                      </dt>
                      <dd className="inline text-sm">
                      {data.desc}
                      </dd>
                    </div>
                  </dl>
                ))}
            
          </dl>
        </div>
        <div className="mt-10 flex items-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start
            for free
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-700">Schedule a demo
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div><img src={data?.[3]?.main_image_url} alt="Product screenshot" className="w-[38rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mt-10 sm:w-[38rem] md:-ml-4 lg:-ml-0" width={1000} height={1442} />
    </div>
  </div>
</section>

    </>
  )
}

export default SeoChoose