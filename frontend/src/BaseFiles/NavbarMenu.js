import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import {Link, useNavigate } from "react-router-dom"
import Notification from "./Notification"
import {logoutUser} from "../redux/userSlice"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Users', href: '/allusers', current: false },
  { name: 'Appointments', href: '/allappointments', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbarmenu() {
  const { user } = useSelector((state) => state.user);

  const [openNotification, setOpenNotification] = useState(false);
  console.log(openNotification)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function handleSingout() {
    dispatch(logoutUser());
  }
  useEffect(() => {
    if (user?.user_id == null) {
      navigate("/");
    }
  }, [user, navigate]); 

  return (
    <>
      <div className="">
        <Disclosure as="nav" className="bg-white text-black">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="/logo.png"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            to={item.href}
                            key={item.name}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-black hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                       
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex gap-x-10 items-center md:ml-6">
                      <button
                        type="button"
                        onClick={()=>{setOpenNotification(!openNotification)}}
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon  className="h-6 w-6" aria-hidden="true" />

                      </button>
                      <button onClick={handleSingout}
                            className='bg-gray-900 text-white text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                          >
                            Sign Out
                          </button>
                      {/* Profile dropdown */}
                   
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
                
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
       
      </div>
      {openNotification && 
        <Notification openNotification={openNotification} close={()=>setOpenNotification(false)}/>}
    </>
  )
}
