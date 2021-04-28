import React from "react";
import Image from "next/image";

const productItems = [
  { name: "Vape Pens", imgUrl: "/images/product/vapepen.png" },
  { name: "Flower", imgUrl: "/images/product/flower.png" },
  { name: "Concentrates", imgUrl: "/images/product/concentrates.png" },
  { name: "CBD", imgUrl: "/images/product/CBD.png" },
  { name: "Gear", imgUrl: "/images/product/gear.png" },
  { name: "Cultivation", imgUrl: "/images/product/Cultivation.png" },
  { name: "Topicals", imgUrl: "/images/product/topicals.png" },
  { name: "Pre Roll", imgUrl: "/images/product/preroll.png" },
];

export const BrowseByCategory = () => {
  return (
    <div className="p-4 space-y-4">
      <p className="text-xl font-bold tracking-wider ">Browse by Category</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    </div>
  );
};
