import React from "react";
import {
  brandMockData,
  concentrateMockData,
  flowerMockData,
  vapeMockData,
} from "../../utils/data";
import { renderBrands } from "./Discover";

export const Vapepens = () => {
  return (
    <div>
      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Batteries</p>
        {renderBrands(vapeMockData)}
      </div>

      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Cartridge</p>
        {renderBrands(concentrateMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Disposable</p>
        </>
        {renderBrands(flowerMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Pods</p>
        </>
        {renderBrands(vapeMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Dry Sift</p>
        </>
        {renderBrands(brandMockData)}
      </div>
    </div>
  );
};
