import { useEffect, useState } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProjectProfile({openProfile,close,profile}) {

function closePopup (){
    close()
}
  return (
    <Dialog className="relative z-50" open={openProfile} onClose={close}>
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 id="slide-over-heading" className="text-base font-semibold leading-6 text-gray-900">
                      Project Profile ({profile?.registration})
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                        onClick={closePopup}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Main */}
                <div>
                  <div className="pb-1 sm:pb-6">
                    <div>
                      <div className="relative h-40 sm:h-56">
                        <img
                          className="absolute h-full w-full object-cover"
                          src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
                          alt=""
                        />
                      </div>
                      <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                        <div className="sm:flex-1">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{profile?.product_name}</h3>
                              <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                <span className="sr-only">Online</span>
                              </span>
                            </div>
                            <p className="text-sm text-gray-500">@{profile?.c_name}</p>
                          </div>
                          <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                            <button
                              type="button"
                              className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1"
                            >
                              Message
                            </button>
                            <button
                              type="button"
                              className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              Call
                            </button>
                            <div className="ml-3 inline-flex sm:ml-0">
                              <Menu as="div" className="relative inline-block text-left">
                                <MenuButton className="relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                  <span className="absolute -inset-1" />
                                  <span className="sr-only">Open options menu</span>
                                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                </MenuButton>
                                <MenuItems
                                  transition
                                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                  <div className="py-1">
                                    <MenuItem>
                                      {({ focus }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm',
                                          )}
                                        >
                                          View profile
                                        </a>
                                      )}
                                    </MenuItem>
                                    <MenuItem>
                                      {({ focus }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm',
                                          )}
                                        >
                                          Copy profile link
                                        </a>
                                      )}
                                    </MenuItem>
                                  </div>
                                </MenuItems>
                              </Menu>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
                    <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Detail</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                          <p>
                            {profile.product_detail}
                          </p>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Total Payment</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{profile.total_payment}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Recived Payment</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{profile.recived_payment}</dd>
                      </div>
                      <div>
                        {profile.project_complete_date=="" ? (
                            <>                             <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Payment Date</dt>
                             <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                               <time dateTime="1988-06-23">{profile.payment_date}</time>
                             </dd></>

                        ):(
                            <> <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Project Completetion Date</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                              <time dateTime="1988-06-23">{profile.project_complete_date}</time>
                            </dd></>)}
                       
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
