import {Link} from "react-router-dom"
export default function Trusted() {
    return (
      <div className="bg-white py-8 sm:py-12 border-t-2 border-gray-800 mx-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trusted by Innovative Leaders in Tech   </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Leading digital change for top businesses and innovators.
              Shaping the future of tech with custom IT solutions.
              Your reliable partner in development, design, and security.

              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <Link to
                  ="/contact/us"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Quotation.
                </Link>
                <Link to="/contact/us" className="text-sm font-semibold text-gray-900">
                  Query Form <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={105}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                alt="Reform"
                width={104}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={140}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
                alt="Laravel"
                width={136}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={147}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  