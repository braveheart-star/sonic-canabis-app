import React from "react";
import {
  brandMockData,
  concentrateMockData,
  flowerMockData,
  vapeMockData,
} from "../../utils/data";
import { renderBrands } from "./Discover";

export const CbdThc = () => {
  return (
    <div>
      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Flower</p>
        {renderBrands(flowerMockData)}
      </div>

      <div className="p-4 space-y-2">
        <p className="text-lg font-bold text-gray-700 ">Edibles</p>
        {renderBrands(brandMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Concentrates</p>
        </>
        {renderBrands(concentrateMockData)}
      </div>

      <div className="p-4 space-y-2">
        <>
          <p className="text-lg font-bold text-gray-700 ">Vape pens</p>
        </>
        {renderBrands(vapeMockData)}
      </div>
    </div>
  );
};
