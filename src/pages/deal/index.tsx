import React from "react";
import Image from "next/image";
import { Layout } from "../../components/common/Layout";

export default function deal() {
  return (
    <Layout>
      <div className="container px-2 mx-auto space-y-8 sm:px-4 max-w-7xl">
        <div className="relative hidden w-full h-56 rounded shadow lg:flex">
          <Image
            src="/images/deal/AD.svg"
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded " // just an example
          />
        </div>
      </div>
    </Layout>
  );
}
