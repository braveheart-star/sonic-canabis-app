import React from "react";
import { renderBrands } from "../brands/Discover";

interface CardProps {
  content: string;
  data: any;
}

export const Card = (props: CardProps) => {
  const { content, data } = props;
  return (
    <div className="w-full p-2 bg-white rounded-md shadow sm:px-8 sm:p-4">
      <div className="flex items-center justify-between ">
        <p className="p-4 text-lg font-bold tracking-wider">{content}</p>
        <div className="flex items-center space-x-1 ">
          <button className="text-gray-700 hover:underline focus:outline-none">
            View all
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5 text-gray-700 fill-current "
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
      {renderBrands(data)}
    </div>
  );
};
