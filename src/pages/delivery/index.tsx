import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { Layout } from "../../components/common/Layout";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

export default function delivery() {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <Layout>
      <div className="w-full space-y-4">
        <div className="p-3 bg-green-50 ">
          <div className="w-full max-w-2xl mx-auto space-x-4 text-sm lg:text-base">
            <div className="grid grid-cols-2 text-center text-green-500">
              <button
                onClick={() => {
                  setActiveItem(0);
                }}
                className={`py-2 rounded focus:outline-none ${
                  activeItem === 0 ? "bg-green-100 text-green-700" : ""
                }`}
              >
                Delivery
              </button>
              <button
                onClick={() => {
                  setActiveItem(1);
                }}
                className={`py-2 rounded focus:outline-none ${
                  activeItem === 1 ? "bg-green-100 text-green-700" : ""
                }`}
              >
                Pick Up
              </button>
            </div>
          </div>
        </div>

        <div className="container w-full px-2 mx-auto sm:p-4 max-w-7xl">
          <div className="items-center text-gray-600 sm:flex">
            <div className="flex space-x-2 ">
              <p>Showing result for</p>
              <span className="mx-2 font-bold">Los Angeles, CA</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 sm:mt-0 sm:mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-teal-600 fill-current "
              >
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
              <span className="mx-2 font-bold text-teal-500">
                Set Delivery Address
              </span>
            </div>
          </div>
          <div className="p-4 mt-4 space-y-4 bg-white rounded shadow">
            <div className="flex items-center space-x-2 overflow-x-scroll text-sm sm:overflow-auto whitespace-nowrap">
              <button className="p-2 px-4 border rounded-xl ">
                Order online
              </button>
              <button className="p-2 px-4 border rounded-xl ">Open now</button>
              <button className="p-2 px-4 border rounded-xl ">
                Medical only
              </button>
              <button className="p-2 px-4 border rounded-xl ">
                Recreational only
              </button>
            </div>
            <div className="">
              {/* <p className="text-lg font-bold tracking-wider lg:text-xl">
                Featured
              </p> */}
              <div className="flex items-center justify-between ">
                <p className="p-4 text-lg font-bold tracking-wider">
                  Featured Brands
                </p>
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  infinite={true}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                    return (
                      <div className="w-full p-2 mx-auto text-sm " key={item}>
                        <div className="p-2 space-y-1 border rounded">
                          <div className="w-full p-4 sm:p-2">
                            <Image
                              src="/images/home/hot.png"
                              alt="slide"
                              width="1200"
                              height="800"
                              draggable="false"
                            />
                          </div>

                          <p className="text-green-700 ">Storewide</p>
                          <p className="font-semibold text-black ">
                            25% Off In-store on 1000+ Items
                          </p>
                          <p className="text-gray-500 ">Storefront</p>
                          <p className="text-gray-500 ">Delivery</p>
                          <p className="text-green-700 ">
                            Medical and Recreational
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
