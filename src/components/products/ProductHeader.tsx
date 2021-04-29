import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Maybe } from "../../components/common/Maybe";
import { AccountDrop } from "../../components/AccountDrop";

export const ProductHeader = () => {
  const isLoggedIn = true;
  const [accountDrop, setAccountDrop] = useState(false);

  return (
    <div className="bg-green-500 ">
      <div className="container p-2 px-4 mx-auto max-w-7xl">
        <div className="flex justify-between ">
          <Link href="/">
            <div className="flex-shrink-0 w-16 h-16 mx-auto cursor-pointer ">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={2000}
                height={2000}
              />
            </div>
          </Link>
          <div className="flex items-center justify-end w-full col-span-2 ">
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
                    <AccountDrop setAccountDrop={setAccountDrop} />
                  </Maybe>
                </div>
              </Maybe>
              <Maybe condition={!isLoggedIn}>
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
              </Maybe>
            </div>
          </div>
        </div>
      </div>
      <Maybe condition={accountDrop}>
        <div
          onClick={() => setAccountDrop(false)}
          className="fixed inset-0 z-10 bg-black lg:bg-opacity-0 bg-opacity-5"
        />
      </Maybe>
    </div>
  );
};
