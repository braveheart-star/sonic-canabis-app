import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  brandMockData,
  concentrateMockData,
  flowerMockData,
  vapeMockData,
} from "../../utils/data";

import { Layout } from "../../components/common/Layout";
import { BrowseByCategory } from "../../components/common/BrowseByCategory";
import { renderBrands } from "../../components/brands/Discover";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    centerMode: true,
    paritialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 30,
  },

  mobile: {
    breakpoint: { max: 640, min: 300 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

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
            <Carousel responsive={responsive}>
              <PromoCode
                title=" Get 15% off your subtotal with code PROJCAN15"
                bgColor="bg-red-500"
              />
              <PromoCode
                title=" Get $11.00 off your subtotal with code 122RDR "
                bgColor="bg-purple-500"
              />

              <PromoCode
                title=" Get 10% off your subtotal with code FTP2021 "
                bgColor="bg-green-500"
              />

              <PromoCode
                title=" Get 30% off your subtotal with code WMD30 "
                bgColor="bg-teal-500"
              />

              <PromoCode
                title=" Get 25% off your subtotal with code TAG5 "
                bgColor="bg-yellow-500"
              />
            </Carousel>
          </div>

          <div className="p-4 space-y-2">
            <p className="text-lg font-bold text-gray-700 ">
              Retailers with free* delivery
            </p>
            {renderBrands(brandMockData)}
          </div>
          <div className="p-4 space-y-2 text-gray-700">
            <p className="text-lg font-bold ">
              Weedmaps Marijuana Deals & Savings
            </p>
            <p className="text-gray-600 ">
              Welcome to our Weedmaps Price Savings page, where we feature
              cannabis deals in your area. If you’re looking for some bud on a
              budget, taking advantage of various marijuana deals or clipping
              cannabis coupons can save you money in the long run. Whether
              you’re on the hunt for weed deals or have a promo code to use,
              you’ve come to the right place. Weedmaps Savings is where you’ll
              find cannabis sales events and promotions from your favorite
              dispensaries, deliveries, and brands.
            </p>
            <p className="text-gray-600 ">
              Our site is regularly updated with new marijuana sales, so keep an
              eye out for the latest weed coupons, discounts, and exclusive to
              Weedmaps deals.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface PromoProps {
  title: string;
  bgColor: string;
}

const PromoCode = (props: PromoProps) => {
  const { title, bgColor } = props;
  return (
    <div className="w-full max-w-xl p-2 text-white">
      <div className={`p-4 ${bgColor}`}>
        <p className="text-lg font-bold tracking-wider ">{title}</p>
        <div className="flex items-center justify-between mt-2 space-x-4 text-xs ">
          <button className="flex-shrink-0 p-2 font-semibold text-black bg-white rounded-lg sm:px-4 ">
            Order now
          </button>
          <div className="text-xs ">
            <p className="text-sm font-bold ">Project Canabis DTLA</p>
            <p className="text-sm ">Pickup | Los Angeles, California</p>
          </div>
        </div>
      </div>
    </div>
  );
};
