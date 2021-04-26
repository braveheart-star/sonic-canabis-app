import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Layout } from "../../components/common/Layout";
import { FullStarIcon } from "../../components/icons/FullStarIcon";
import { HalfStarIcon } from "../../components/icons/HalfStarIcon";
import { EmptyStarIcon } from "../../components/icons/EmptyStarIcon";
import { ConcentrateIcon } from "../../components/icons/delivery/ConcentrateIcon";
import { EdibleIcon } from "../../components/icons/delivery/EdibleIcon";
import { FlowerIcon } from "../../components/icons/delivery/FlowerIcon";
import { VapePenIcon } from "../../components/icons/delivery/VapePenIcon";
import { OtherIcon } from "../../components/icons/delivery/OtherIcon";

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

const pickDistance = ["1 mile", "5miles", "20 miles", "50 miles", "100 miles"];

export default function delivery() {
  const [activeItem, setActiveItem] = useState(0);
  const [recommendDrop, setDropdown] = useState(false);

  const [distance, setDistance] = useState(pickDistance[0]);
  const [distanceDrop, setDistanceDrop] = useState(false);

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

  function handleClickDistance(distance: string) {
    setDistance(distance);
    setDistanceDrop(false);
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
              className={`py-2 focus:outline-none font-bold ${
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
              className={`py-2 focus:outline-none font-bold ${
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
        {activeItem === 1 && (
          <div className="relative">
            <button
              onClick={() => setDistanceDrop(true)}
              className="flex items-center justify-around w-32 p-2 px-4 space-x-2 border cursor-pointer "
            >
              <p className="text-sm font-bold text-gray-500">{distance}</p>

              {!distanceDrop ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-3 h-3 text-gray-500 fill-current "
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-3 h-3 text-gray-500 fill-current "
                >
                  <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                </svg>
              )}
            </button>

            {distanceDrop && (
              <div className="absolute left-0 z-20 w-32 bg-white border rounded shadow top-10 ">
                {pickDistance.map((item, idx) => {
                  return (
                    <p
                      onClick={() => {
                        handleClickDistance(item);
                      }}
                      key={idx}
                      className="p-2 px-4 text-sm cursor-pointer hover:text-white hover:bg-teal-400"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            )}

            {distanceDrop && (
              <div
                onClick={() => setDistanceDrop(false)}
                className="fixed inset-0 z-10"
              />
            )}
          </div>
        )}
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
        <div className="space-y-4 sm:p-3">
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
          <div>
            <div className="flex pb-2 mt-8 space-x-2 border-b">
              <p>Sort by </p>
              <div className="relative ">
                <div
                  onClick={() => setDropdown(true)}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <p className="font-bold text-teal-500">
                    {clickedSort ? clickedSort : "Recommended"}
                  </p>

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
            <div className="mt-4 space-y-4 divide-y ">
              {mockData.map((item, idx) => {
                return <DisplayItems product={item} key={idx} />;
              })}
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

interface DisplayProps {
  product: any;
}

const DisplayItems = (props: DisplayProps) => {
  const { product } = props;
  const [show, setShow] = useState(false);
  return (
    <div className="grid-cols-1 lg:grid lg:grid-cols-4 ">
      <div className="p-2 lg:p-4 lg:col-span-1 ">
        <div className="flex items-center space-x-4 ">
          <div className="relative flex-shrink-0 w-12 h-12 rounded ">
            <Image
              src={product.img}
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="" // just an example
            />
          </div>
          <div>
            <p className="font-bold truncate ">{product.title}</p>
            <p className="text-sm text-gray-500 truncate ">
              {product.deliveryTime}
            </p>
            <p className="text-sm text-gray-500 truncate ">{product.usage}</p>
            <div className="flex items-center space-x-2">
              {!!product.deliveryFee ? (
                <p className="text-sm text-gray-500 truncate ">
                  {product.deliveryFee} fee
                </p>
              ) : (
                <p className="text-sm font-semibold text-teal-500">
                  Free delivery
                </p>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="flex-shrink-0 w-1 h-1 text-gray-500 fill-current "
              >
                <circle cx="12" cy="12" r="12" />
              </svg>
              <p className="text-sm text-gray-600 ">{product.price}</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <FullStarIcon className="w-3 h-3 text-yellow-400 fill-current " />
              <span className="text-sm ">{product.rate}</span>
              <span className="text-gray-500 ">({product.member})</span>
            </div>
            {product.availableOrder && (
              <span className="p-1 text-sm font-semibold bg-gray-100 rounded">
                Order online
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 lg:hidden">
          <button
            onClick={() => setShow(!show)}
            className="p-2 px-4 text-sm text-green-500 border border-green-500 rounded "
          >
            see more
          </button>
        </div>
      </div>

      <div className="hidden p-2 lg:p-4 lg:col-span-2 lg:block">
        <div className="flex space-x-2">
          <p className="font-bold text-gray-700">Menu breakdown</p>

          <span className="text-sm text-gray-500 truncate">
            ({product.count} items)
          </span>
        </div>
        <div className="grid items-center grid-cols-5 mt-4 text-xs text-center gap-x-1">
          <div className="">
            <ConcentrateIcon className="w-8 h-8 mx-auto" />
            <p className="mt-2 text-gray-600 truncate ">Concentrates</p>
            <p className="text-sm text-gray-500 truncate ">
              ( {product.concentrateNumber} items)
            </p>
          </div>

          <div className="">
            <EdibleIcon className="w-8 h-8 mx-auto" />
            <p className="mt-2 text-gray-600 truncate">Edibles</p>
            <p className="text-sm text-gray-500 truncate">
              ( {product.edibleNumber} items)
            </p>
          </div>

          <div className="">
            <FlowerIcon className="w-8 h-8 mx-auto" />
            <p className="mt-2 text-gray-600 truncate">Flower</p>
            <p className="text-sm text-gray-500 truncate">
              ( {product.flowerNumber} items)
            </p>
          </div>

          <div className="">
            <VapePenIcon className="w-8 h-8 mx-auto" />
            <p className="mt-2 text-gray-600 truncate">Vape pens</p>
            <p className="text-sm text-gray-500 truncate">
              ( {product.vapeNumber} items)
            </p>
          </div>

          <div className="">
            <OtherIcon className="w-8 h-8 mx-auto" />
            <p className="mt-2 text-gray-600 truncate">Other</p>
            <p className="text-sm text-gray-500 truncate">
              ( {product.otherNumber} items)
            </p>
          </div>
        </div>
      </div>
      <div className="hidden p-2 lg:p-4 lg:col-span-1 lg:block">
        <p className="font-bold text-gray-700">Menu Genetics</p>
        <div className="flex items-center mt-4 space-x-2 ">
          <p className="text-gray-600 ">Hybrid</p>
          <span className="text-sm">(117 items)</span>
        </div>

        <div className="flex items-center space-x-2 ">
          <p className="text-gray-600 ">Indica</p>
          <span className="text-sm">(45 items)</span>
        </div>

        <div className="flex items-center space-x-2 ">
          <p className="text-gray-600 ">Sativa</p>
          <span className="text-sm">(415 items)</span>
        </div>
      </div>
      {show && (
        <div className=" lg:hidden">
          <div className="p-2 lg:p-4 lg:col-span-2 ">
            <div className="flex space-x-2">
              <p className="font-bold text-gray-700">Menu breakdown</p>

              <span className="text-sm text-gray-500 truncate">
                ({product.count} items)
              </span>
            </div>
            <div className="grid items-center grid-cols-5 mt-4 text-xs text-center gap-x-1">
              <div className="">
                <ConcentrateIcon className="w-8 h-8 mx-auto" />
                <p className="mt-2 text-gray-600 truncate ">Concentrates</p>
                <p className="text-sm text-gray-500 truncate ">
                  ( {product.concentrateNumber} items)
                </p>
              </div>

              <div className="">
                <EdibleIcon className="w-8 h-8 mx-auto" />
                <p className="mt-2 text-gray-600 truncate">Edibles</p>
                <p className="text-sm text-gray-500 truncate">
                  ( {product.edibleNumber} items)
                </p>
              </div>

              <div className="">
                <FlowerIcon className="w-8 h-8 mx-auto" />
                <p className="mt-2 text-gray-600 truncate">Flower</p>
                <p className="text-sm text-gray-500 truncate">
                  ( {product.flowerNumber} items)
                </p>
              </div>

              <div className="">
                <VapePenIcon className="w-8 h-8 mx-auto" />
                <p className="mt-2 text-gray-600 truncate">Vape pens</p>
                <p className="text-sm text-gray-500 truncate">
                  ( {product.vapeNumber} items)
                </p>
              </div>

              <div className="">
                <OtherIcon className="w-8 h-8 mx-auto" />
                <p className="mt-2 text-gray-600 truncate">Other</p>
                <p className="text-sm text-gray-500 truncate">
                  ( {product.otherNumber} items)
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:p-4 lg:col-span-1 ">
            <p className="font-bold text-gray-700">Menu Genetics</p>
            <div className="flex items-center mt-4 space-x-2 ">
              <p className="text-gray-600 ">Hybrid</p>
              <span className="text-sm">(117 items)</span>
            </div>

            <div className="flex items-center space-x-2 ">
              <p className="text-gray-600 ">Indica</p>
              <span className="text-sm">(45 items)</span>
            </div>

            <div className="flex items-center space-x-2 ">
              <p className="text-gray-600 ">Sativa</p>
              <span className="text-sm">(415 items)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
