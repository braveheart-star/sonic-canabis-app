import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useSWR from "swr";

import { Banner } from "../../components/common/Banner";
import { Layout } from "../../components/common/Layout";
import { BrowseByCategory } from "../../components/common/BrowseByCategory";
import storage from "../../utils/storage";
import productApi from "../../lib/productApi";

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

export default function products() {
  const { data: token } = useSWR("accessToken", storage);

  const { data: vape } = useSWR(
    [`/api/product/vape/?page=${1}&limit=${10}`, token],
    productApi.getProductByCategory
  );

  const { data: flower } = useSWR(
    [`/api/product/flower/?page=${1}&limit=${10}`, token],
    productApi.getProductByCategory
  );

  const { data: concentrate } = useSWR(
    [`/api/product/concentrate/?page=${1}&limit=${10}`, token],
    productApi.getProductByCategory
  );

  const { data: edible } = useSWR(
    [`/api/product/edible/?page=${1}&limit=${10}`, token],
    productApi.getProductByCategory
  );

  return (
    <Layout>
      <div className="container px-2 mx-auto space-y-8 sm:px-4 max-w-7xl">
        <Banner content="Find your favorite products" />
        <div className="p-4 bg-white border rounded-lg shadow lg:py-8 ">
          <BrowseByCategory />
          <div className="space-y-4 ">
            <ProductItem title="Vape Pens" data={vape} />
            <ProductItem title="Flower" data={flower} />
            <ProductItem title="Concentrates" data={concentrate} />
            <ProductItem title="Edibles" data={edible} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface ProductItemProps {
  title: string;
  data: any;
}

export const ProductItem = (props: ProductItemProps) => {
  const { title, data } = props;

  // const { items } = data;
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
      {data?.data?.items.length > 0 && (
        <Carousel responsive={responsive}>
          {data?.data?.items?.map((item: any, idx: number) => {
            return (
              <div key={idx} className="p-8 mx-4 border rounded-md shadow-sm">
                <Image
                  src={`http://canabismap.imgix.net/${item.filename}`}
                  alt="Picture of the author"
                  width="1000"
                  height="800"
                  draggable="false"
                />
                <p className="text-sm text-center text-gray-600">
                  {item.title}
                </p>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};
