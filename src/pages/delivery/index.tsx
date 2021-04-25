import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Layout } from "../../components/common/Layout";
import { FullStarIcon } from "../../components/icons/FullStarIcon";
import { HalfStarIcon } from "../../components/icons/HalfStarIcon";
import { EmptyStarIcon } from "../../components/icons/EmptyStarIcon";

const mockData = [
  {
    title: "KUSHAGRAM",
    rate: "4",
    count: "320",
    usage: "Medical & Recreational",
    price: "$50 minimum",
    availableOrder: false,
    img: "/images/brands/1.png",
  },

  {
    title: "Amuse Canabis Delivery",
    rate: "4.6",
    count: "235",
    usage: "Medical & Recreational",
    price: "$50 minimum",
    availableOrder: true,
    img: "/images/brands/2.png",
  },

  {
    title: "PAC LA - Downtown LA",
    rate: "4.7",
    count: "567",
    usage: "Medical & Recreational",
    price: "$5 fee, $50 minimum",
    availableOrder: true,
    img: "/images/brands/3.png",
  },

  {
    title: "HERB",
    rate: "4.9",
    count: "640",
    usage: "Medical & Recreational",
    price: "$50 minimum",
    availableOrder: false,
    img: "/images/brands/4.png",
  },

  {
    title: "BLAZE",
    rate: "4.6",
    count: "364",
    usage: "Medical & Recreational",
    price: "",
    availableOrder: false,
    img: "/images/brands/5.png",
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

export default function delivery() {
  const [activeItem, setActiveItem] = useState(0);
  const [recommendDrop, setDropdown] = useState(false);

  const filterOptions = [
    "Order online",
    "Open now",
    "Medical only",
    "Recreational only",
  ];

  const [clickedFilters, setFilterOptions] = useState<string[]>([]);

  const [clickedSort, setSortOptions] = useState("");

  function handleClickFilter(option: string) {
    if (clickedFilters.includes(option)) {
      clickedFilters.splice(clickedFilters.indexOf(option), 1);
      setFilterOptions([...clickedFilters]);
    } else {
      setFilterOptions([...clickedFilters, option]);
    }
  }

  function handleClickSort(option: string) {
    setSortOptions(option);
    setDropdown(false);
  }

  return (
    <Layout>
      <div className="container w-full p-4 mx-auto space-y-4 text-gray-700 bg-white max-w-7xl">
        <div className="w-full max-w-2xl mx-auto space-x-4 text-sm lg:text-base">
          <div className="grid grid-cols-2 text-center text-green-500 ">
            <button
              onClick={() => {
                setActiveItem(0);
              }}
              className={`py-2 focus:outline-none ${
                activeItem === 0
                  ? " text-green-700 border-b-2 border-green-400"
                  : ""
              }`}
            >
              Delivery
            </button>
            <button
              onClick={() => {
                setActiveItem(1);
              }}
              className={`py-2 focus:outline-none ${
                activeItem === 1
                  ? " text-green-700 border-b-2 border-green-400"
                  : ""
              }`}
            >
              Pick Up
            </button>
          </div>
        </div>
        <div className="items-center p-4 sm:flex">
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
        <div className="flex items-center p-1 space-x-2 overflow-x-scroll text-sm sm:overflow-auto whitespace-nowrap">
          {filterOptions.map((item: string, idx: number) => {
            return (
              <button
                onClick={() => handleClickFilter(item)}
                key={idx}
                className={`p-2 px-4 rounded-xl border  focus:outline-none ${
                  clickedFilters.includes(item)
                    ? "bg-green-400 text-white ring-2 ring-green-500 font-bold ring-opacity-50"
                    : ""
                }`}
              >
                <p>{item}</p>
              </button>
            );
          })}
        </div>
        <div className="p-3 space-y-4">
          <p className="text-lg font-bold tracking-wider ">Featured Brands</p>
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
                      {renderStar(item.rate)}
                      <p>{item.rate}</p>
                      <p>({item.count})</p>
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
          <div>
            <div className="flex pb-2 space-x-2 border-b">
              <p>Sort by </p>
              <div className="relative ">
                <div
                  onClick={() => setDropdown(true)}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <p className="font-bold text-teal-500">Recommended</p>

                  {!recommendDrop ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-3 h-3 text-teal-500 fill-current "
                    >
                      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-3 h-3 text-teal-500 fill-current "
                    >
                      <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                    </svg>
                  )}
                </div>
                {recommendDrop && (
                  <div className="absolute right-0 z-20 bg-white border rounded shadow top-7">
                    {["Recommended", "Top rated", "Largest menu"].map(
                      (item, idx) => {
                        return (
                          <p
                            onClick={() => handleClickSort(item)}
                            key={idx}
                            className="p-2 px-4 cursor-pointer hover:text-white hover:bg-teal-400"
                          >
                            {item}
                          </p>
                        );
                      }
                    )}
                  </div>
                )}

                {recommendDrop && (
                  <div
                    onClick={() => setDropdown(false)}
                    className="fixed inset-0 z-10"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function renderStar(rate: string) {
  return (
    <div className="flex space-x-1 ">
      {[...Array(Math.floor(Number(rate))).keys()].map((item) => {
        return (
          <FullStarIcon
            key={item}
            className="w-4 h-4 text-yellow-400 fill-current "
          />
        );
      })}
      {Number(rate) - Math.floor(Number(rate)) > 0.5 ? (
        Number(rate) - Math.floor(Number(rate)) > 0.8 ? (
          <FullStarIcon className="w-4 h-4 text-yellow-400 fill-current " />
        ) : (
          <HalfStarIcon className="w-4 h-4 text-yellow-400 fill-current " />
        )
      ) : (
        <EmptyStarIcon className="w-4 h-4 text-yellow-400 fill-current " />
      )}
    </div>
  );
}
