import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Layout } from "../../components/common/Layout";

const mockData = [
  {
    title: "KUSHAGRAM",
    rate: "4",
    member: "320",
    count: "270",
    usage: "Medical & Recreational",
    price: "$50 minimum",
    availableOrder: false,
    deliveryTime: "60-90min",
    deliveryFee: "",
    concentrateNumber: "123",
    edibleNumber: "323",
    flowerNumber: "212",
    vapeNumber: "115",
    otherNumber: "121",
    img: "/images/brands/1.png",
  },

  {
    title: "Amuse Canabis Delivery",
    rate: "4.6",
    member: "235",
    count: "250",
    usage: "Medical & Recreational",
    price: "$50 minimum",
    availableOrder: true,
    deliveryTime: "20-30min",
    deliveryFee: "5$",
    concentrateNumber: "167",
    edibleNumber: "124",
    flowerNumber: "213",
    vapeNumber: "215",
    otherNumber: "332",
    img: "/images/brands/2.png",
  },

  {
    title: "PAC LA - Downtown LA",
    rate: "4.7",
    member: "567",
    count: "643",
    usage: "Medical & Recreational",
    price: "$5 fee, $50 minimum",
    availableOrder: true,
    deliveryTime: "20-30min",
    deliveryFee: "5$",
    concentrateNumber: "417",
    edibleNumber: "211",
    flowerNumber: "442",
    vapeNumber: "421",
    otherNumber: "321",
    img: "/images/brands/3.png",
  },

  {
    title: "HERB",
    rate: "4.9",
    member: "640",
    count: "143",
    usage: "Medical & Recreational",
    price: "$50 minimum",
    availableOrder: false,
    deliveryTime: "20-30min",
    deliveryFee: "5$",
    concentrateNumber: "147",
    edibleNumber: "226",
    flowerNumber: "534",
    vapeNumber: "11",
    otherNumber: "21",
    img: "/images/brands/4.png",
  },

  {
    title: "BLAZE",
    rate: "4.6",
    member: "364",
    count: "213",
    usage: "Medical & Recreational",
    price: "",
    availableOrder: false,
    deliveryTime: "20-30min",
    deliveryFee: "",
    concentrateNumber: "237",
    edibleNumber: "111",
    flowerNumber: "42",
    vapeNumber: "155",
    otherNumber: "671",
    img: "/images/brands/5.png",
  },
];

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
          <p className="text-lg font-bold text-gray-700 ">Featured Brands</p>
          <Carousel responsive={responsive} arrows={false} infinite={true}>
            {mockData.map((item, idx) => {
              return (
                <div className="w-full h-full p-2 mx-auto text-sm " key={idx}>
                  <div className="h-full p-4 space-y-1 border rounded">
                    <div className="w-full">
                      <Image
                        src={item.img}
                        alt="slide"
                        width="1000"
                        height="800"
                        draggable="false"
                      />
                    </div>
                    <p className="text-base font-bold text-gray-700 ">
                      {item.title}
                    </p>
                    <div className="flex items-center space-x-2 text-gray-600 ">
                      <p>{item.rate}</p>
                      <p>({item.member})</p>
                    </div>
                    <p>{item.usage}</p>
                    <p>{item.price}</p>
                    {item.availableOrder && (
                      <p className="p-1 font-semibold rounded bg-gray-50">
                        Order online
                      </p>
                    )}
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
