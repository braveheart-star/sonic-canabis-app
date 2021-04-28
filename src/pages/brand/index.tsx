import React, { useState } from "react";
import Link from "next/link";
import { Layout } from "../../components/common/Layout";
import { Discover } from "../../components/brands/Discover";
import { Flower } from "../../components/brands/Flower";
import { Concentrate } from "../../components/brands/Concentrate";
import { Vapepens } from "../../components/brands/Vapepens";
import { Edibles } from "../../components/brands/Edibles";
import { CBD } from "../../components/brands/CBD";
import { THC } from "../../components/brands/Thc";
import { All } from "../../components/brands/All";

const brands = [
  {
    name: "Discover",
    url: "",
    component: Discover,
  },
  {
    name: "Flower",
    url: "",
    component: Flower,
  },

  {
    name: "Concentrates",
    url: "",
    component: Concentrate,
  },

  {
    name: "Vape pens",
    url: "",
    component: Vapepens,
  },

  {
    name: "Edibles",
    url: "",
    component: Edibles,
  },

  {
    name: "CBD/THC",
    url: "",
    component: THC,
  },

  {
    name: "CBD",
    url: "",
    component: CBD,
  },

  {
    name: "All Brands",
    url: "",
    component: All,
  },
];

export default function brand() {
  const [clickedItem, setItem] = useState(brands[0]);

  return (
    <Layout>
      <div className="w-full ">
        <div className="flex justify-center w-full px-2 mx-auto ">
          <div className="flex w-full px-4 py-2 space-x-6 overflow-x-scroll text-center max-w-7xl lg:overflow-auto sm:space-x-4 whitespace-nowrap text-gray-50">
            {brands.map((item, idx) => {
              return (
                <Link href={item.url} key={idx}>
                  <button
                    onClick={() => setItem(item)}
                    className={`lg:font-semibold w-full text-sm lg:text-base tracking-wide px-3 focus:outline-none sm:tracking-normal ${
                      clickedItem === item
                        ? " text-green-500 border-b-2 border-green-500"
                        : " text-gray-500 "
                    }`}
                  >
                    {item.name}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="container w-full p-4 mx-auto mt-4 space-y-4 text-gray-700 bg-white rounded shadow-sm lg:mt-8 max-w-7xl">
          <clickedItem.component />
        </div>
      </div>
    </Layout>
  );
}
