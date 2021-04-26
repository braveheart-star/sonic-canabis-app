import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Layout } from "../../components/common/Layout";
import { brandMockData } from "../../utils/data";
import { EmptyHeartIcon } from "../../components/icons/EmptyHeartIcon";

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    centerMode: true,
    paritialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
    partialVisibilityGutter: 30,
  },

  mobile: {
    breakpoint: { max: 640, min: 300 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

export default function brand() {
  return (
    <Layout>
      <div className="w-full ">
        <div className="flex justify-center w-full px-2 mx-auto ">
          <RenderProvider />
        </div>
        <div className="container w-full p-4 mx-auto mt-4 space-y-4 text-gray-700 bg-white rounded shadow-sm lg:mt-8 max-w-7xl">
          <p className="p-4 text-lg font-bold text-gray-700 ">
            Featured Brands
          </p>
          <Carousel responsive={responsive} infinite={true}>
            {brandMockData.map((item, idx) => {
              return (
                <div className="w-full h-full p-2 mx-auto text-sm " key={idx}>
                  <div className="relative h-full p-4 space-y-1 border rounded">
                    <div className="w-full">
                      <Image
                        src={item.img}
                        alt="slide"
                        width="1000"
                        height="800"
                        draggable="false"
                      />
                    </div>
                    <p className="text-base font-semibold text-gray-700 ">
                      {item.title}
                    </p>
                    <p className="p-1 ">
                      {item.flowerNumber}
                      <span className="mx-2">Followers</span>
                    </p>

                    <div className="absolute top-6 right-6">
                      <button className="p-1 bg-white border rounded-full w-7 h-7">
                        <EmptyHeartIcon className="w-full h-full" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
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
