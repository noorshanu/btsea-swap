import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";
import ConnectWalletBtn from "./ConnectWalletBtn";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

let navItems = [
  {
    label: "Bridge",
    route: "/bridge",
  },
  {
    label: "Swap",
    route: "/",
  },
  {
    label: "Launchpad",
    route: "launchpad",
  },
];

export default function Navbar() {
  const route = "/";
  return (
    // bg-[#14141f]
    <Popover className="relative bg-transparent z-10 bg-[#0E1128]">
      <div className="fixed top-0 left-0 right-0 bg-[#0E1128] w-screen">
        <div className=" max-w-[87rem] mx-auto font-orbitron flex items-center justify-between  py-4 md:justify-start md:space-x-10 animate-top-left px-5">
          <img src={logoImg} className="h-8 w-auto" alt="" />
          <div className=" flex items-center justify-center md:flex md:flex-1 space-x-4 lg:w-0">
            <Popover.Group as="nav" className="hidden space-x-10 md:flex mx-5">
              {navItems.map((nav, i) => {
                return (
                  <a
                    key={i}
                    href={nav.route}
                    className={`text-medium font-normal hover:text-[#fff]
                     
                     ${
                       route == nav.route
                         ? " text-[#fff] "
                         : "text-[#9292C5]"
                     }
                  `}
                  >
                    <div className=" flex justify-center items-center">
                      <span>{nav.label}</span>
                    </div>
                  </a>
                );
              })}
            </Popover.Group>

            <div className=" md:hidden">
              <Popover.Button className=" inline-flex items-center justify-center  rounded-md  p-2">
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="text-gray-300 h-6 w-6"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden sm:flex">

          <ConnectWalletBtn/>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed inset-0 transform transition md:hidden"
        >
          <div className="relative rounded-lg sm:bg-transparent bg-[#0E1128] h-screen w-screen ">
            <div className=" border-b  border-graytext-gray-300 border-opacity-50 px-5 py-3">
              <div className="flex items-center justify-between">
                <div className="focus:border:0 flex items-center justify-center space-x-1 focus:outline-0 focus:ring-0">
                  <img src={logoImg} alt="" />
                </div>
                <div className="mr-3">
                  <Popover.Button className=" inline-flex items-center justify-center rounded-md  p-2">
                    <XMarkIcon
                      className="h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className=" py-4 px-2">
              <div className="mb-2 grid grid-cols-1 gap-y-1 gap-x-1">
                {navItems.map((nav, i) => {
                  return (
                    <a
                      key={i}
                      href={nav.route}
                      className={`rounded-md py-2 px-2 text-base   text-gray-300 font-bold hover:text-[#fff]
                        ${
                          (!route && i === 0) || route === nav.label
                            ? "  text-[#fff] "
                            : "text-gray-300"
                        }
                        `}
                    >
                      {nav.label}
                    </a>
                  );
                })}
              </div>
            </div>
            {/* code here */}
            <ConnectWalletBtn/>
            {/* code here */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
