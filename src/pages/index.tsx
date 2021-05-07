import React from "react";
import { Layout } from "../components/common/Layout";
import { Card } from "../components/common/Card";
import { Banner } from "../components/common/Banner";

import {
  brandMockData,
  concentrateMockData,
  flowerMockData,
  regions,
  vapeMockData,
} from "../utils/data";

import { BrowseByCategory } from "../components/common/BrowseByCategory";

export default function Home() {
  return (
    <Layout>
      <div className="container px-2 mx-auto space-y-8 sm:px-4 max-w-7xl">
        <Banner content="canabis products" />
        <div className="space-y-4 lg:space-y-8 ">
          <Card content="Featured brands" data={brandMockData} />
          <Card content="Dispensary storefronts" data={concentrateMockData} />
          <Card content="Deals nearby" data={flowerMockData} />
          <Card content="Doctors" data={vapeMockData} />
          <Card content="CBD stores" data={brandMockData} />
          <BrowseByCategory />
        </div>
        <div className="w-full p-2 text-gray-700 bg-white rounded-md shadow sm:px-8 sm:p-4">
          <p className="p-4 text-lg font-bold tracking-wider">
            Dispensary Regions
          </p>
          <div className="grid grid-cols-2 px-4 text-sm text-gray-500 lg:text-base sm:grid-cols-3 lg:space-y-2 lg:grid-cols-5">
            {regions.map((item, idx) => {
              return (
                <div key={idx} className="space-y-2 ">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
