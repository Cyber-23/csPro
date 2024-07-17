const incentives = [
    {
      name: 'Comprehensive Expertise',
      imageSrc: '/expertise.png',
      description: "Our team is skilled in development, design, and security, providing complete solutions for your digital needs. From full-stack development to cybersecurity, we cover all aspects of your IT infrastructure",
    },
    {
      name: 'Innovative Approaches',
      imageSrc: '/creattive.png',
      description: "We use the latest technology and methods to deliver advanced solutions that give your business a competitive edge.",
    },
    {
      name: 'Client-Centric Focus',
      imageSrc: '/concentric.png',
      description:
        "Your success is our priority. We work closely with you to understand your challenges and goals, tailoring our services to fit your business perfectly.",
    },
    {
      name: 'Proven Track Record',
      imageSrc: '/trackrecord.png',
      description: "With a history of successful projects in various industries, we offer reliable and experienced service, ensuring high-quality results.",
    },
    {
      name: 'Scalable Solutions',
      imageSrc: '/inovative.png',
      description:
        "Our services are designed to grow with your business, providing flexible IT solutions that support your long-term success.",
    },
    {
      name: '24*7 Support',
      imageSrc: '/inovative.png',
      description:
        "We are always here for our customers for their support to tackel any technical ,marketing and development problem.",
    },
  ]
  
  export default function WhyUs() {
    return (
      <div className="border-t-2 border-b-2 border-gray-900  shadow-inner lg:mx-12 mx-4 mt-12">
        <div className="mx-auto max-w-7xl py-4 sm:px-2 sm:py-12 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Why Choose CyberSolvings ?
                </h2>
                <p className="mt-4 text-gray-500 text-justify">
                At CyberSolvings, we combine technical skills with creative ideas to provide 
                IT solutions that help your business grow. Our experts are dedicated to understanding your specific needs and delivering services that surpass your expectations.
                </p>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="/why.jpg"
                  alt=""
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500 text-justify">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  