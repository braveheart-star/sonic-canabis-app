import Link from "next/link";
import React from "react";
import { mutate } from "swr";

interface AccountDropInterface {
  setAccountDrop: Function;
}

export const AccountDrop = (props: AccountDropInterface) => {
  const { setAccountDrop } = props;
  const handleLogout = async () => {
    window.localStorage.removeItem("accessToken");
    mutate("accessToken", "");
    setAccountDrop(false);
  };

  return (
    <div className="absolute right-0 z-20 top-8">
      <div className="w-56 text-gray-600 bg-white divide-y rounded shadow-md">
        <div className="flex items-center p-2">
          <div className="flex items-center w-full p-2 space-x-4 cursor-pointer hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="flex-shrink-0 text-gray-600 fill-current w-7 h-7"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
            </svg>
            <p>View account</p>
          </div>
        </div>

        <div className="p-2 ">
          <p className="p-2 rounded cursor-pointer hover:bg-gray-100 ">
            Account settings
          </p>
          <p className="p-2 rounded cursor-pointer hover:bg-gray-100">
            Favorites
          </p>
          <p className="p-2 rounded cursor-pointer hover:bg-gray-100">
            Recently viewed
          </p>
          <Link href="/products/mystore">
            <p className="p-2 rounded cursor-pointer hover:bg-gray-100">
              My products
            </p>
          </Link>
        </div>
        <div className="p-2 ">
          <button
            onClick={handleLogout}
            className="w-full p-2 text-left rounded cursor-pointer hover:bg-gray-100"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
