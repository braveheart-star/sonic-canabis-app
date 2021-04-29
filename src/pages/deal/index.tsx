import React from "react";
import Image from "next/image";

import {
  brandMockData,
  concentrateMockData,
  flowerMockData,
  vapeMockData,
} from "../../utils/data";

import { Layout } from "../../components/common/Layout";
import { BrowseByCategory } from "../../components/common/BrowseByCategory";
import { renderBrands } from "../../components/brands/Discover";

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
        <div className="p-4 bg-white border rounded-lg shadow lg:py-8 ">
          <div className="p-4 space-y-2">
            <p className="text-lg font-bold text-gray-700 ">
              Featured deals nearby
            </p>
            {renderBrands(brandMockData)}
          </div>

          <BrowseByCategory />

          <div className="p-4 space-y-2">
            <p className="text-lg font-bold text-gray-700 ">Products on sale</p>
            {renderBrands(vapeMockData)}
          </div>

          <div className="p-4 space-y-2">
            <p className="text-lg font-bold text-gray-700 ">
              Products under $25
            </p>
            {renderBrands(flowerMockData)}
          </div>

          <div className="p-4 space-y-2">
            <p className="text-lg font-bold text-gray-700 ">Deals nearby</p>
            {renderBrands(concentrateMockData)}
          </div>

          <div className="p-4 space-y-2">
            <p className="text-lg font-bold text-gray-700 ">
              Online promo codes
            </p>
            {renderBrands(concentrateMockData)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
