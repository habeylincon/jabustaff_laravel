import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { MdOutlineToggleOff } from 'react-icons/md'
import Searchbar from './Searchbar';

const TopbarMain = (props: any) => {
const[small, setSmall] = useState<boolean>(false);

  return (
    <div className='hidden md:flex'>
        {/* Logo Side */}
        <div className='bg-sidebar-bg p-3 w-56 text-white text-2xl relative'>
           <img src='/images/logo.png'  />
        </div>
         {/* Other SIde */}
         <div className='bg-slate-50 flex justify-between items-center flex-1  px-4'>
              <Searchbar />

              <MdOutlineToggleOff className={`absolute right-2 top-1/4 ${small && 'rotate-180'}`} onClick={() => setSmall(!small)} />

              <div className="hidden sm:flex sm:items-center sm:ms-6">
                <div className="ms-3 relative">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                >
                                    {props.user.name}

                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
              </div>
         </div>
    </div>
  )
}

export default TopbarMain