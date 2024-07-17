import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: " What range of IT services does Cybersolving offer?",
    answer:"Cybersolving provides comprehensive IT solutions including development (full-stack, mobile, software, and metaverse), design (graphic, web, UI/UX, and system), and security services (cyber, network, cloud, and DevOps). We offer end-to-end solutions tailored to meet your specific business needs.",
  }, {
    question: "How does Cybersolving ensure the security of our data and systems?",
    answer:
      "We use top security protocols and best practices. Our cybersecurity experts use advanced tools and techniques to protect your data, networks, and cloud systems. We also provide ongoing monitoring and updates to keep you safe from new threats.",
  }, {
    question: "Can Cybersolving scale its services as our business grows?",
    answer:
      "Yes, our solutions are designed to grow with your business. Whether you're a startup or a large company, we can adjust our services to fit your needs. We regularly review and update our solutions to support your business as it expands.",
  },
  // More questions...
]

export default function Faq() {
  return (
    <div className="bg-white flex w-full px-12 justify-between lg:py-8 py-8">
      <div className="sm:py-12 lg:w-2/3 w-full lg:px-8 lg:py-20">
        <div className="divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
      <div className='p-8 hidden lg:block'>
      <img className='rounded-2xl shadow-2xl' src='/faq.jpg'/>
      </div>
    </div>
  )
}
