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
  { name: "Vape Pens", imgUrl: "/images/product/vapepen.png" },
  { name: "Flower", imgUrl: "/images/product/flower.png" },
  { name: "Concentrates", imgUrl: "/images/product/concentrates.png" },
  // { name: "Edibles", imgUrl: "/images/product/product/flower.png" },
  { name: "CBD", imgUrl: "/images/product/CBD.png" },
  { name: "Gear", imgUrl: "/images/product/gear.png" },
  { name: "Cultivation", imgUrl: "/images/product/Cultivation.png" },
  { name: "Topicals", imgUrl: "/images/product/topicals.png" },
  { name: "Pre Roll", imgUrl: "/images/product/preroll.png" },
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

const flower = [
  {
    name: "Infused Flower",
    imgUrl: "/images/product/flower/1.png",
  },

  {
    name: "Pre Roll",
    imgUrl: "/images/product/flower/2.png",
  },

  {
    name: "Shake",
    imgUrl: "/images/product/flower/3.png",
  },
];

const concentrate = [
  {
    name: "Budder",
    imgUrl: "/images/product/concentrate/1.png",
  },

  {
    name: "Crumble",
    imgUrl: "/images/product/concentrate/2.png",
  },

  {
    name: "Crystalline",
    imgUrl: "/images/product/concentrate/3.png",
  },

  {
    name: "Distillate",
    imgUrl: "/images/product/concentrate/4.png",
  },

  {
    name: "Dry Sift",
    imgUrl: "/images/product/concentrate/5.png",
  },

  {
    name: "Ice Hash",
    imgUrl: "/images/product/concentrate/6.png",
  },

  {
    name: "Live Resin",
    imgUrl: "/images/product/concentrate/7.png",
  },

  {
    name: "Nug Run",
    imgUrl: "/images/product/concentrate/8.png",
  },
];

const edible = [
  { name: "Baked Goods", imgUrl: "/images/product/edible/1.png" },
  { name: "Beverages", imgUrl: "/images/product/edible/2.png" },
  { name: "Candy", imgUrl: "/images/product/edible/3.png" },
  { name: "Cooking Ingredients", imgUrl: "/images/product/edible/4.png" },
  { name: "Dairy Free", imgUrl: "/images/product/edible/5.png" },
  { name: "Edible Oils", imgUrl: "/images/product/edible/6.png" },
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
                      src={item.imgUrl}
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
            <ProductItem title="Vape Pens" imageInfo={vapePens} />
            <ProductItem title="Flower" imageInfo={flower} />
            <ProductItem title="Concentrates" imageInfo={concentrate} />
            <ProductItem title="Edibles" imageInfo={edible} />
            <ProductItem title="CBD" imageInfo={flower} />
            <ProductItem title="Gear" imageInfo={concentrate} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface ProductItemProps {
  title: string;
  imageInfo: any;
}

const ProductItem = (props: ProductItemProps) => {
  const { title, imageInfo } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="p-4 text-xl font-bold tracking-wider ">{title}</p>
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
      <Carousel responsive={responsive} infinite={true}>
        {imageInfo.map((item: any, idx: number) => {
          return (
            <div key={idx} className="p-8 mx-4 border rounded-md shadow-sm">
              <Image
                src={item.imgUrl}
                alt="Picture of the author"
                width="1000"
                height="800"
                draggable="false"
              />
              <p className="text-center text-gray-600">{item.name}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
