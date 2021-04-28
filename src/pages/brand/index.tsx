import React, { useState } from "react";
import Link from "next/link";
import { Layout } from "../../components/common/Layout";
import { Discover } from "../../components/brands/Discover";

const brands = [
  {
    name: "Discover",
    url: "",
  },
  {
    name: "Flower",
    url: "",
  },

  {
    name: "Concentrates",
    url: "",
  },

  {
    name: "Vape pens",
    url: "",
  },

  {
    name: "Edibles",
    url: "",
  },

  {
    name: "CBD/THC",
    url: "",
  },

  {
    name: "CBD",
    url: "",
  },

  {
    name: "All Brands",
    url: "",
  },
];

export default function brand() {
  return (
    <Layout>
      <div className="w-full ">
        <div className="flex justify-center w-full px-2 mx-auto ">
          <RenderProvider />
        </div>
        <div className="container w-full p-4 mx-auto mt-4 space-y-4 text-gray-700 bg-white rounded shadow-sm lg:mt-8 max-w-7xl">
          <Discover />
        </div>
      </div>
    </Layout>
  );
}

function RenderProvider() {
  const [clickedItem, setItem] = useState(brands[0]);
  return (
    <div className="flex w-full px-4 py-2 space-x-6 overflow-x-scroll text-center max-w-7xl lg:overflow-auto sm:space-x-4 whitespace-nowrap text-gray-50">
      {brands.map((item, idx) => {
        return (
          <Link href={item.url} key={idx}>
            <button
              onClick={() => setItem(item)}
              className={`lg:font-semibold w-full text-sm lg:text-base tracking-wide px-3 focus:outline-none sm:tracking-normal ${
                clickedItem === item
                  ? " text-green-500 border-b-2 border-green-400"
                  : " text-gray-500 "
              }`}
            >
              {item.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
