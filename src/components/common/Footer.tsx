import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-gray-100 ">
      {" "}
      test
      <div className="w-full h-10 bg-green-500 " />
      <div className="p-4 mx-auto max-w-7xl">
        <div className="flex-shrink-0 w-16 h-16 ">
          <Image src="/images/logo.svg" alt="logo" width={2000} height={2000} />
        </div>
        <p className="max-w-sm px-4 text-sm text-gray-500 lg:text-base">
          A community connecting cannabis consumers, patients, retailers,
          doctors, and brands.
        </p>
        <div className="flex p-4 space-x-4">
          <button className="flex items-center px-3 py-1 space-x-1 bg-gray-700 border rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white fill-current"
            >
              <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
            </svg>
            <p className="text-xs text-left text-gray-100">
              Download on the
              <br />
              <span className="text-sm font-bold">App Store</span>
            </p>
          </button>
          <button className="flex items-center px-3 py-1 space-x-1 bg-gray-700 border rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white fill-current"
            >
              <path d="M3 22v-20l18 10-18 10z" />
            </svg>
            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            <p className="text-xs text-left text-gray-100 ">
              Get it on
              <br />
              <span className="text-sm font-bold">Google Play</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
