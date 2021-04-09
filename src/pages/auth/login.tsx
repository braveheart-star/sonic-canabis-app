import React from "react";
import Image from "next/image";

export default function login() {
  return (
    <div className="container flex min-h-screen px-4 m-auto mx-auto border border-red-400">
      <div className="w-full max-w-6xl m-auto border border-blue-400">
        <div className="grid sm:grid-cols-2">
          <div className="p-4 "> content</div>
          <div>
            <Image
              src="/images/auth/authBack.png"
              alt="Picture of the author"
              width={3000}
              height={3000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
