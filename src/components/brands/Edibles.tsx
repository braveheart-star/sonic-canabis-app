import React from "react";
import {
  brandMockData,
  concentrateMockData,
  flowerMockData,
  vapeMockData,
} from "../../utils/data";
import { renderBrands } from "./Discover";

export const Edibles = () => {
  return (
    <div>
      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Baked Goods</p>
        {renderBrands(concentrateMockData)}
      </div>

      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Beverages</p>
        {renderBrands(vapeMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Candy</p>
        </>
        {renderBrands(vapeMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Capsules</p>
        </>
        {renderBrands(flowerMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">
            Cooking Ingredients
          </p>
        </>
        {renderBrands(brandMockData)}
      </div>
    </div>
  );
};
