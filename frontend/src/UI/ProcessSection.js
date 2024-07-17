import React from 'react'

const ProcessSection = ({data}) => {
  console.log(data?.[2])
    
  return (
   <>

    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src={data?.[2].section3_img}
          alt=""
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-14 ">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data?.[2].section3_heading}
          </h2>
          <p className="mt-4 text-gray-500">
          {data?.[2].section3_sub_heading}
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {data?.[2].features.map((items) => (
            <div key={items.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{items.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">{items.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
 



   </>
  )
}

export default ProcessSection