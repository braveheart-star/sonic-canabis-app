import React, { useState } from "react";
import { Layout } from "../../components/common/Layout";

export default function delivery() {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <Layout>
      <div className="w-full space-y-2">
        <div className="p-3 bg-green-50">
          <div className="w-full max-w-lg mx-auto space-x-4 ">
            <div className="grid grid-cols-2 text-center text-green-600">
              <button
                onClick={() => {
                  setActiveItem(0);
                }}
                className={`py-2 rounded focus:outline-none ${
                  activeItem === 0 ? "bg-green-100" : ""
                }`}
              >
                Delivery
              </button>
              <button
                onClick={() => {
                  setActiveItem(1);
                }}
                className={`py-2 rounded focus:outline-none ${
                  activeItem === 1 ? "bg-green-100" : ""
                }`}
              >
                Pick Up
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-2 mx-auto space-y-8 bg-white  sm:p-4 max-w-7xl">
          ere
        </div>
      </div>
    </Layout>
  );
}
