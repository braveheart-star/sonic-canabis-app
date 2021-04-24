import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export const Card = () => {
  return (
    <div className="w-full p-2 bg-white rounded-md shadow sm:px-8 sm:p-4">
      <div className="flex items-center justify-between ">
        <p className="p-4 text-lg font-bold tracking-wider">Hot Deals</p>
        <div className="flex items-center space-x-1 ">
          <button className="text-gray-700 hover:underline focus:outline-none">
            View all
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5 text-gray-700 fill-current "
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
      <Carousel responsive={responsive} arrows={false} infinite={true}>
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
                <p className="text-green-700 ">Medical and Recreational</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
