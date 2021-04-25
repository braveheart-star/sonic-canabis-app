import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

import { Maybe } from "./Maybe";
import { MobileDrop } from "../MobileDrop";
import { AccountDrop } from "../AccountDrop";
import storage from "../../utils/storage";
import checkLogin from "../../utils/checkLogin";

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
  const { data: currentUser } = useSWR("user", storage);
  console.log(
    "🚀 ~ file: Header.tsx ~ line 26 ~ Header ~ currentUser",
    currentUser
  );
  const isLoggedIn = checkLogin(currentUser);

  const [dropdown, setDropdown] = useState(false);
  const [accountDrop, setAccountDrop] = useState(false);

  useEffect((): any => {
    if (dropdown) {
      document.body.style.position = "fixed";
    } else document.body.style.position = "inherit";
    return () => (document.body.style.position = "inherit");
  }, [dropdown]);

  return (
    <div className="bg-green-500 ">
      <div className="container p-4 mx-auto lg:p-2 max-w-7xl">
        <div className="grid space-y-4 text-sm lg:grid-flow-col lg:grid-cols-12 lg:grid-rows-2 lg:gap-2 xl:text-base">
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
            <div className="flex items-center space-x-5">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-gray-100 fill-current "
                >
                  <path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z" />
                </svg>
              </button>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-gray-100 fill-current "
                >
                  <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                </svg>
              </button>

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-gray-100 fill-current "
                >
                  <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>

              {isLoggedIn && (
                <div className="relative flex items-center">
                  <button onClick={() => setAccountDrop(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-gray-100 fill-current "
                    >
                      <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
                    </svg>
                  </button>
                  <Maybe condition={accountDrop}>
                    <AccountDrop />
                  </Maybe>
                </div>
              )}
            </div>
          </div>
          <div className="hidden w-full col-span-1 row-span-2 mx-auto lg:flex ">
            <Link href="/">
              <div className="flex-shrink-0 w-20 h-20 mx-auto cursor-pointer ">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={2000}
                  height={2000}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center lg:col-start-2 lg:col-end-13 ">
            <div className="w-full grid-cols-7 lg:grid gap-x-1">
              <div className="col-span-5 px-1">
                <div className="grid w-full max-w-3xl grid-cols-7 px-2 py-2 bg-gray-100 divide-x divide-green-500 rounded gap-x-1">
                  <div className="flex items-center col-span-4 px-2 space-x-3 ">
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
                <div className="flex items-center space-x-5">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-gray-100 fill-current "
                    >
                      <path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z" />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-gray-100 fill-current "
                    >
                      <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                    </svg>
                  </button>

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-gray-100 fill-current "
                    >
                      <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    </svg>
                  </button>

                  <Maybe condition={isLoggedIn}>
                    <div className="relative flex items-center">
                      <button
                        onClick={() => setAccountDrop(true)}
                        className="focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 text-gray-100 fill-current "
                        >
                          <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
                        </svg>
                      </button>
                      <Maybe condition={accountDrop}>
                        <AccountDrop />
                      </Maybe>
                    </div>
                  </Maybe>
                  <Maybe condition={!isLoggedIn}>
                    <Link href="/auth/login">
                      <button className="px-4 py-2 font-bold text-gray-100 rounded-lg focus:ring-1 focus:outline-none ring-green-600">
                        Log in
                      </button>
                    </Link>
                    <Link href="/auth/register">
                      <button className="px-4 py-2 font-bold text-gray-100 bg-green-700 rounded-lg focus:ring-1 focus:outline-none ring-green-600">
                        Sign up
                      </button>
                    </Link>
                  </Maybe>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center px-3 py-2 space-x-5 overflow-x-scroll border-t lg:overflow-auto sm:space-x-4 whitespace-nowrap lg:flex lg:col-start-2 lg:col-end-13 lg:space-x-7 text-gray-50 ">
            {providers.map((item, idx) => {
              return (
                <Link href={`/${item.toLowerCase()}`} key={idx}>
                  <button className="font-semibold tracking-wide focus:outline-none sm:tracking-normal">
                    {item}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <MobileDrop dropdown={dropdown} />
      <Maybe condition={dropdown}>
        <div
          onClick={() => setDropdown(false)}
          className="fixed inset-0 z-10 bg-black bg-opacity-40"
        />
      </Maybe>
      <Maybe condition={accountDrop}>
        <div
          onClick={() => setAccountDrop(false)}
          className="fixed inset-0 z-10 bg-black lg:bg-opacity-0 bg-opacity-5"
        />
      </Maybe>
    </div>
  );
};
