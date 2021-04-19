import React from "react";
import Link from "next/link";
import styles from "../../styles/styles.module.scss";

export const MobileDrop = (props: any) => {
  const { dropdown } = props;
  return (
    <div
      className={`fixed top-0 left-0 min-h-screen z-10 w-4/5 bg-white overflow-y-scroll lg:hidden ${
        dropdown ? `${styles.mobileOpen}` : `${styles.mobileClose}`
      }`}
    >
      <div className="max-h-screen overflow-y-scroll">
        <div className="p-5 py-8 text-gray-700">
          <div className="flex py-4 space-x-4 sm:space-x-8 ">
            <button className="font-bold ">Log in</button>
            <button className="px-4 py-1 font-bold text-white bg-green-500 rounded-lg sm:px-6 sm:py-2">
              Sign up
            </button>
          </div>
          <div className="py-3 border-t">
            <Link href="/">
              <p>Download the app</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>Dispensaries</p>
            </Link>
            <Link href="/shop">
              <p>Deliveries</p>
            </Link>
            <Link href="/support">
              <p>Map</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>Products</p>
            </Link>
            <Link href="/shop">
              <p>Deals</p>
            </Link>
            <Link href="/support">
              <p>Strains</p>
            </Link>
            <Link href="/support">
              <p>Brands</p>
            </Link>
            <Link href="/support">
              <p>Order online</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>Learn</p>
            </Link>
            <Link href="/shop">
              <p>News</p>
            </Link>
            <Link href="/support">
              <p>Help center</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>CBD Stores</p>
            </Link>
            <Link href="/shop">
              <p>Doctors</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>WM Business</p>
            </Link>
          </div>
          <div className="py-3 space-y-3 border-t ">
            <Link href="/shop">
              <p>Report a bug</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
