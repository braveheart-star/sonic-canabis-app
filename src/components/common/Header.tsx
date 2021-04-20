import React, { useState } from "react";
import Image from "next/image";
import { MobileDrop } from "./MobileDrop";
import Link from "next/link";

const providers = [
  "Dispensaries",
  "Deliveries",
  "Maps",
  "Brands",
  "Products",
  "Deals",
  "Learn",
  "Strains",
  "Order online",
];

export const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="bg-green-500 ">
      <div className="container p-4 mx-auto max-w-7xl">
        <div className="grid space-y-3 text-sm lg:grid-flow-col lg:grid-cols-12 lg:grid-rows-2 lg:gap-2 xl:text-base">
          <div className="flex justify-between lg:hidden">
            <button
              className=" focus:outline-none"
              onClick={() => setDropdown(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-5 h-5 text-gray-100 fill-current "
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
            <div className="flex space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-5 h-5 text-gray-100 fill-current "
              >
                <path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-5 h-5 text-gray-100 fill-current "
              >
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-5 h-5 text-gray-100 fill-current "
              >
                <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </div>
          </div>
          <div className="hidden w-full col-span-1 row-span-2 mx-auto lg:flex ">
            <div className="flex-shrink-0 w-20 h-20 mx-auto ">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={2000}
                height={2000}
              />
            </div>
          </div>
          <div className="flex items-center lg:col-start-2 lg:col-end-13 ">
            <div className="w-full grid-cols-7 lg:grid gap-x-1">
              <div className="col-span-5 px-1">
                <div className="grid w-full max-w-3xl grid-cols-7 px-2 py-2 bg-gray-100 rounded gap-x-1">
                  <div className="flex items-center col-span-4 px-2 space-x-3 border-r border-green-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="flex-shrink-0 w-4 h-4 text-green-500 fill-current "
                    >
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>
                    <input
                      placeholder="Search for products, brands , and more"
                      className="w-full pr-2 text-green-500 placeholder-green-500 truncate bg-gray-100 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center col-span-3 px-2 space-x-3 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="flex-shrink-0 w-4 h-4 text-green-500 fill-current "
                    >
                      <path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                    <input
                      placeholder="Location"
                      className="w-full text-green-500 placeholder-green-500 bg-gray-100 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="items-center justify-end hidden w-full col-span-2 lg:flex ">
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-gray-100 fill-current "
                  >
                    <path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-gray-100 fill-current "
                  >
                    <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-gray-100 fill-current "
                  >
                    <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  <Link href="/auth/login">
                    <button className="px-4 py-1 font-bold text-gray-100 rounded-lg focus:ring-1 focus:outline-none ring-green-600">
                      Log in
                    </button>
                  </Link>
                  <Link href="/auth/register">
                    <button className="px-4 py-1 font-bold text-gray-100 bg-green-700 rounded-lg focus:ring-1 focus:outline-none ring-green-600">
                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center px-3 py-2 space-x-5 overflow-x-scroll border-t lg:overflow-auto sm:space-x-4 whitespace-nowrap lg:flex lg:col-start-2 lg:col-end-13 lg:space-x-7 text-gray-50 ">
            {providers.map((item, idx) => {
              return (
                <button
                  className="font-semibold tracking-wide sm:tracking-normal"
                  key={idx}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <MobileDrop dropdown={dropdown} />
      {dropdown && (
        <div
          onClick={() => setDropdown(false)}
          className="fixed inset-0 z-20 bg-black bg-opacity-40"
        />
      )}
    </div>
  );
};