import React from "react";
import { ProductHeader } from "../../components/products/ProductHeader";

export default function mystore() {
  return (
    <div>
      <ProductHeader />
      <div className="container p-4 mx-auto mt-8 text-gray-600 border  max-w-7xl">
        <div className="flex items-center justify-between pb-2 border-b">
          <p className="text-2xl font-bold ">My Products</p>
          <button className="flex items-center p-2 px-4 space-x-1 text-white rounded-lg bg-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-white fill-current "
            >
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
            </svg>

            <span>Add Product</span>
          </button>
        </div>
      </div>
    </div>
  );
}
