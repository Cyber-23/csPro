import React from 'react'
  
  // const features = [
  //   {
  //     name: 'Increased Visibility',
  //     description: ' Higher rankings in search results lead to increased visibility for your business.',
  //     icon: CloudArrowUpIcon,
  //   },
  //   {
  //     name: 'More Traffic.',
  //     description: 'Improved visibility means more organic traffic to your website.',
  //     icon: LockClosedIcon,
  //   },
  //   {
  //     name: 'Credibility and Trust',
  //     description: 'Websites that appear on the first page of search results are often perceived as more credible and trustworthy.',
  //     icon: ArrowPathIcon,
  //   },
  //   {
  //     name: 'Better User Experience',
  //     description: 'SEO involves optimizing the website s content and structure, leading to a better user experience.',
  //     icon: FingerPrintIcon,
  //   },
  //   {
  //     name: 'Cost-Effective Marketing',
  //     description: 'Unlike paid advertising, organic search traffic is free, providing a high return on investment over time.',
  //     icon: Cog6ToothIcon,
  //   },
  //   {
  //     name: 'Database backups.',
  //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
  //     icon: ServerIcon,
  //   },
  // ]
const SeoMater = ({data}) => {
  console.log(data);
  return (
   
    <>
    
 

    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600"> {data?.[1].small_text}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data?.[1].main_title}</p>
          <p className="mt-2 text-lg leading-8 text-gray-600">
         {data.sub_title}

          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src={data?.[1].main_image}
            width={2432}
            height={500}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          {data?.[1]?.features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 text-sm">
                <feature.icon aria-hidden="true" className="absolute text-md left-1 top-1 h-5 w-5 text-indigo-600" />
                {feature.name}
              </dt>{' '}
              <dd className="inline text-sm">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  

    </>
  )
}

export default SeoMater