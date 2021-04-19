import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function recover() {
  return (
    <div className="container flex min-h-screen p-4 m-auto ">
      <div className="w-full max-w-6xl m-auto border">
        <div className="grid lg:grid-cols-3">
          <div className="w-full p-2 lg:col-span-2 sm:p-4 ">
            <div className="flex-shrink-0 w-20 h-20 mx-auto lg:w-24 lg:h-24">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={2000}
                height={2000}
              />
            </div>
            <div className="w-full max-w-xl py-6 mx-auto ">
              <Link href="./login">
                <a className="flex items-center py-6 space-x-2">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400 fill-current "
                  >
                    <path d="M7.78 1.58002L6.6 0.400024L0 7.00002L6.6 13.6L7.78 12.42L2.36 7.00002L7.78 1.58002Z" />
                  </svg>
                  <span className="text-gray-500 ">Back</span>
                </a>
              </Link>
              <p className="text-3xl font-bold text-green-700 lg:text-4xl">
                Recover your account
              </p>

              <form
                onSubmit={() => {
                  console.log("hey");
                }}
                className="mt-8 space-y-4 "
              >
                <input
                  className="block w-full p-2 px-4 text-sm border rounded lg:text-base focus:border-green-300 focus:outline-none"
                  placeholder="Email"
                  required
                />

                <input
                  type="submit"
                  value="Recover Password"
                  className="w-full py-2 text-base font-bold text-white bg-green-500 rounded cursor-pointer"
                />
              </form>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src="/images/auth/authBack.png"
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
            />
          </div>
        </div>
      </div>
    </div>
  );
}
