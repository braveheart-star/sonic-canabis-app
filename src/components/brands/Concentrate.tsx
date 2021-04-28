import React from "react";
import {
  brandMockData,
  concentrateMockData,
  flowerMockData,
  vapeMockData,
} from "../../utils/data";
import { renderBrands } from "./Discover";

export const Concentrate = () => {
  return (
    <div>
      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Budder</p>
        {renderBrands(vapeMockData)}
      </div>

      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Crumble</p>
        {renderBrands(flowerMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Crystalline</p>
        </>
        {renderBrands(concentrateMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Distillate</p>
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
