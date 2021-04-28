import React from "react";
import {
  brandMockData,
  concentrateMockData,
  flowerMockData,
  vapeMockData,
} from "../../utils/data";
import { renderBrands } from "./Discover";

export const Flower = () => {
  return (
    <div>
      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Bud</p>
        {renderBrands(flowerMockData)}
      </div>

      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Infused Flower</p>
        {renderBrands(brandMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Pre Roll</p>
        </>
        {renderBrands(concentrateMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Shake</p>
        </>
        {renderBrands(vapeMockData)}
      </div>
    </div>
  );
};
