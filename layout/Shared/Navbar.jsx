'use client';
import { IoIosSearch, IoIosSettings } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { Popover } from "@headlessui/react";

function Navbar() {
  return (
    <nav className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr] 3xl:grid-cols-[81%,1fr]">
      <div className="flex justify-between w-full">
      {/* Title */}
        <div className="flex items-center">
          <h2 className="color-primary text-2xl">Duas Page</h2>
        </div>
        {/* Search area */}
        <div className="flex w-82 sm-max:w-full md:mr-6 md:w-72 lg:mr-6 items-center gap-4 rounded-[10px] overflow-hidden bg-white border-[0.5px] border-[#E2E2E2] relative">
          <input
            className="focus-visible:ring-[0.5px] ring-blue-500 rounded-[10px] overflow-hidden w-full py-3 px-4"
            type="search"
            placeholder="Search by Dua Name"
          />
          <button className="w-14 h-11 absolute right-1 flex rounded-md icon-primary items-center justify-center btn-secondary ">
            <IoIosSearch size={22} />
          </button>
        </div>
      </div>
      {/* user section */}
      <div className="flex items-center justify-end gap-3">
        <div className="flex items-center relative">
        <Popover className="relative">
        <Popover.Button className={'flex items-center gap-1'}>
          <div className="relative w-11 h-w-11 flex items-center gap-1">
            <img
              className="flex w-full h-full items-center justify-center rounded-full"
              src="https://duaruqyah.com/assets/settings/profile.svg"
              alt=""
            />
          </div>
          <FaCaretDown className="icon-primary" />
          </Popover.Button>
          {/* Menu */}
       
  
        <Popover.Panel className="absolute z-10 bg-white duration-300 transition-transform w-80 rounded-md px-6 pt-8 pb-5 right-0 mt-6">
        <div className="absolute right-7 -top-3 h-6 w-6 bg-white rotate-45"></div>
          <div className="flex flex-col gap-3">
            <a href="/analytics">Analytics</a>
            <a href="/engagement">Engagement</a>
            <a href="/security">Security</a>
            <a href="/integrations">Integrations</a>
          </div>
  
        </Popover.Panel>
      </Popover>
          {/* <div className="px-6 pt-8 pb-5 top-12 right-0 mt-4 absolute w-80 gap-8 bg-white">
            <div className="absolute -top-5 flex justify-end right-5">
              <img src="https://duaruqyah.com/assets/polygon.svg" />
            </div>
            <a href="#" class="hvf-dom-checked">
              <div class="-my-1 -mx-2 flex items-center rounded-2xl transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-dark-bg-dark cursor-pointer hvf-dom-checked">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 hvf-dom-checked">
                  <img
                    class="w-5 h-5"
                    src="https://duaruqyah.com/assets/settings/download.svg"
                    alt="settings/support"
                  />
                </div>
                <div class="hvf-dom-checked">
                  <p class="text-sm text-title ml-1 dark:text-dark-text hvf-dom-checked">
                    Support Us
                  </p>
                </div>
              </div>
            </a>
          </div> */}
        </div>
        <div className="">
          <IoIosSettings className="color-active" size={22} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
