import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function mystore() {
  return (
    <div className="bg-green-500 ">
      <div className="container p-2 mx-auto max-w-7xl">
        <div className="flex justify-between ">
          <div>
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
          <div></div>
        </div>
      </div>
    </div>
  );
}
