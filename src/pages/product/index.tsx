import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Banner } from "../../components/common/Banner";
import { Layout } from "../../components/common/Layout";

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

const productItems = [
  { name: "Vape Pens", image: "/images/product/vapepen.png" },
  { name: "Flower", image: "/images/product/flower.png" },
  { name: "Concentrates", image: "/images/product/concentrates.png" },
  { name: "Edibles", image: "/images/product/edibles.png" },
  { name: "CBD", image: "/images/product/CBD.png" },
  { name: "Gear", image: "/images/product/gear.png" },
  { name: "Cultivation", image: "/images/product/Cultivation.png" },
  { name: "Topicals", image: "/images/product/topicals.png" },
  { name: "Pre Roll", image: "/images/product/preroll.png" },
];

const vapePens = [
  {
    name: "Batteries",
    imgUrl: "/images/product/vape/2.png",
  },

  {
    name: "Cartridge",
    imgUrl: "/images/product/vape/1.png",
  },

  {
    name: "Disposable",
    imgUrl: "/images/product/vape/3.png",
  },

  {
    name: "Pods",
    imgUrl: "/images/product/vape/4.png",
  },
];

export default function products() {
  return (
    <Layout>
      <div className="container px-2 mx-auto space-y-8 sm:px-4 max-w-7xl">
        <Banner content="Find your favorite products" />
        <div className="p-4 bg-white border rounded-lg shadow lg:py-8 ">
          <p className="p-4 text-xl font-bold tracking-wider ">
            Browse by Category
          </p>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
            {productItems.map((item, idx) => {
              return (
                <div key={idx} className="rounded ">
                  <div className="relative w-full h-40">
                    <Image
                      src={item.image}
                      alt="Picture of the author"
                      layout="fill" // required
                      objectFit="cover" // change to suit your needs
                      className="rounded shadow-sm " // just an example
                    />
                  </div>
                  <p className="p-2 text-center text-gray-600">{item.name}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-4 ">
            <div>
              <div className="flex items-center justify-between">
                <p className="p-4 text-xl font-bold tracking-wider ">
                  Vape Pens
                </p>
                <button className="flex items-center space-x-2 text-trueGray-600 group hover:underline">
                  <span>Discover</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-gray-700 fill-current "
                  >
                    <path d="M6.974 22.957c-10.957-11.421 2.326-20.865 10.384-13.309l-2.464 2.352h9.106v-8.947l-2.232 2.229c-14.794-13.203-31.51 7.051-14.794 17.675z" />
                  </svg>
                </button>
              </div>
              <Carousel responsive={responsive} arrows={false} infinite={true}>
                {vapePens.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-6 mx-4 border rounded-md shadow-sm"
                    >
                      <Image
                        src={item.imgUrl}
                        alt="Picture of the author"
                        width="1000"
                        height="800"
                      />
                      <p className="text-center text-gray-600">{item.name}</p>
                    </div>
                  );
                })}
              </Carousel>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <p className="p-4 text-xl font-bold tracking-wider ">Flower</p>
                <button className="flex items-center space-x-2 text-trueGray-600 group hover:underline">
                  <span>Discover</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-gray-700 fill-current "
                  >
                    <path d="M6.974 22.957c-10.957-11.421 2.326-20.865 10.384-13.309l-2.464 2.352h9.106v-8.947l-2.232 2.229c-14.794-13.203-31.51 7.051-14.794 17.675z" />
                  </svg>
                </button>
              </div>
              <Carousel responsive={responsive} arrows={false} infinite={true}>
                {vapePens.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-6 mx-4 border rounded-md shadow-sm"
                    >
                      <Image
                        src={item.imgUrl}
                        alt="Picture of the author"
                        width="1000"
                        height="800"
                      />
                      <p className="text-center text-gray-600">{item.name}</p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
