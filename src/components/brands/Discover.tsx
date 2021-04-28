import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { renderStar } from "../../pages/delivery";
import {
  brandMockData,
  concentrateMockData,
  flowerMockData,
  vapeMockData,
} from "../../utils/data";

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

export const Discover = () => {
  return (
    <div>
      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Featured Brands</p>
        {renderBrands(brandMockData)}
      </div>
      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Vape Pens</p>
          <p className="text-sm text-gray-500 ">
            A handheld, battery-powered device used to consume vaporized canabis
            concentrate.
          </p>
        </>
        {renderBrands(vapeMockData)}
      </div>
      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Flower</p>
          <p className="text-sm text-gray-500 ">
            Cannabis flower is the smokable or vapable, trichome-covered part of
            the cannabis plant.
          </p>
          {renderBrands(flowerMockData)}
        </>
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Concentrates</p>
          <p className="text-sm text-gray-500 ">
            Products from the canabis plant that have been processed to extract
            the cannabinoids and terpense.
          </p>
          {renderBrands(concentrateMockData)}
        </>
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Edibles</p>
          <p className="text-sm text-gray-500 ">
            Edibles are food items made with cannabis flower or concentrate
          </p>
          {renderBrands(flowerMockData)}
        </>
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">CBD/THC</p>
          <p className="text-sm text-gray-500 ">
            Find CBD-rich products that contain full-spectrum oil or ratios of
            CBD and THC
          </p>
          {renderBrands(vapeMockData)}
        </>
      </div>
    </div>
  );
};

function renderBrands(mockData: any) {
  return (
    <Carousel responsive={responsive} infinite={true}>
      {mockData.map((item: any, idx: number) => {
        return (
          <div className="w-full h-full p-2 mx-auto text-sm " key={idx}>
            <div className="h-full p-4 space-y-1 border rounded">
              <div className="w-full">
                <Image
                  src={item.imgUrl}
                  alt="slide"
                  width="1000"
                  height="800"
                  draggable="false"
                />
              </div>
              <p className="text-base font-bold text-gray-700 ">{item.title}</p>
              <div className="flex items-center space-x-2 text-gray-600 ">
                {renderStar(item.rate)}
                <p>{item.rate}</p>
                <p>({item.member})</p>
              </div>
              <p>{item.usage}</p>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
