import Slider from "react-slick";
import {Link} from "react-router-dom";
export default function Service() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
  };

  const images = [
    { im: "/fullstack.jpg", heading: "FullStack Development", content: "We offer complete web application solutions from start to finish. We seamlessly connect front-end and back-end technologies to build powerful, scalable applications. Using modern frameworks and languages, we create systems that are strong and efficient. We ensure the best performance and user experience across all platforms." },
    { im: "/mobile.jpg", heading: "Mobile App Development", content: "We create apps for iOS, Android, and cross-platforms. Our apps provide engaging mobile experiences that connect with your target audience. We implement native features and intuitive interfaces to ensure users love your app. We also offer ongoing support and updates to keep your app relevant and high-performing." },
    { im: "/fullstack.jpg", heading: "Software Development", content: "We develop custom software tailored to your specific needs. Our bespoke solutions streamline operations and drive business growth. We use agile methodologies for flexibility and quick deployment. We can integrate with your existing systems to enhance your workflow seamlessly." },
    { im: "/system.jpg", heading: "Metaverse Development", content: "We build immersive virtual experiences and environments. Explore new ways of digital interaction and virtual reality applications with us. We create engaging 3D worlds and interactive elements for various industries. Using advanced technologies like AR and VR, we offer innovative solutions" },
    { im: "/graphic.jpg", heading: "Graphic Design", content: "We create branding, marketing materials, and visual content. Our compelling visuals communicate your brand's essence and message clearly. We develop comprehensive brand guidelines to ensure consistent representation across all mediums. Our eye-catching designs stand out in today's competitive digital landscape." },
    { im: "/webdesign.jpg", heading: "Web Design", content: "We design responsive and user-friendly websites. Our websites are attractive and functional, adapting seamlessly across all devices. We use modern design trends and follow accessibility standards to appeal to a broad audience. We optimize for search engines and conversions to help your business grow." },

  ];
  const images2 = [
    { im: "/uiux.jpg", heading: "UI/UX Design", content: "We create intuitive interfaces and seamless user experiences. Our thoughtful, user-focused design enhances satisfaction and engagement. We conduct user research and testing to refine and improve interface elements. Our cohesive design systems ensure consistent user experiences across products." },
    { im: "/system.jpg", heading: "System Design", content: "We design scalable and efficient system architectures. Our optimized digital infrastructure ensures performance, reliability, and future growth. We build robust systems that can handle increasing loads and complex operations. We follow best practices in modularity and maintainability for long-term success." },
    { im: "/networking.jpg", heading: "Network Security", content: "We secure your infrastructure and data transmission. Ensure the integrity and confidentiality of your network communications with us. We deploy advanced firewalls and intrusion detection systems for comprehensive protection. Secure access controls and encryption protect your data both in transit and at rest." },
    { im: "/webdesign.jpg", heading: "Cyber Security", content: "We offer strong protection against digital threats. Safeguard your assets and data with advanced security measures and protocols. We implement multi-layered security strategies to defend against evolving cyber threats. Regular security audits and penetration testing help us identify and fix vulnerabilities." },
    { im: "/cloud.jpg", heading: "Cloud Security", content: "We provide safe and compliant cloud computing solutions. Leverage cloud technologies confidently, knowing your data is protected. We use cloud-native security tools and best practices for robust protection. Ensure compliance with industry standards and regulations in cloud environments with our help." },
    { im: "/system.jpg", heading: "DevOps", content: "We streamline development and operations integration. Improve collaboration, accelerate delivery, and enhance overall operational efficiency with our solutions. Implement continuous integration and deployment pipelines for faster, more reliable releases. Utilize infrastructure as code and automated testing to reduce errors and improve quality." },
  ];
  return (
    <div className=" bg-white border-t-2 border-gray-900 shadow-inner lg:mx-12 mx-4 mt-12">

    <div className="md:flex md:items-center md:justify-between mt-12 ml-24">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Our Services
        </h2>
      </div>
    </div>




      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6  sm:py-8 lg:max-w-7xl">
        <div className="lg:flex justify-between gap-x-5">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative lg:w-1/2 overflow-hidden rounded-lg lg:h-96"
            >
              <div className="absolute inset-0">
                <img
                  src={image.im}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                aria-hidden="true"
                className="relative h-96 w-full lg:hidden"
              />
              <div
                aria-hidden="true"
                className="relative h-32 w-full lg:hidden"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-72 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {image.heading}
                  </h2>
                  <p className="mt-1 text-sm text-justify text-gray-300">{image.content}</p>
                </div>
                <Link to=
                  "/contact/us"
                  className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
                >
                  Get A Call Now
                </Link>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settings}>
          {images2.map((image, index) => (
            <div
              key={index}
              className="relative lg:w-1/2 overflow-hidden rounded-lg lg:h-96"
            >
              <div className="absolute inset-0">
                <img
                  src={image.im}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                aria-hidden="true"
                className="relative h-96 w-full lg:hidden"
              />
              <div
                aria-hidden="true"
                className="relative h-32 w-full lg:hidden"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-72 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {image.heading}
                  </h2>
                  <p className="mt-1 text-sm text-justify text-gray-300">{image.content}</p>
                </div>
                <Link to=
                  "/contact/us"
                  className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
                >
                  Get A Call Now
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}
