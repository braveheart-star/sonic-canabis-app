import React, { useState } from "react";
import { Layout } from "../../components/common/Layout";

export default function delivery() {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <Layout>
      <div className="w-full space-y-2">
        <div className="p-3 bg-green-50">
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
        <div className="container w-full p-1 mx-auto sm:p-4 max-w-7xl">
          <div className="p-2 bg-white rounded shadow">er</div>
        </div>
      </div>
    </Layout>
  );
}
