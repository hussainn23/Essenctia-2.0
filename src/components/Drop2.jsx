import React from "react";
import { Link } from "react-router-dom";

const Drop2 = () => {
  return (
    <div className="bg-white border shadow-lg p-4 rounded-md absolute z-50">
      <ul className="space-y-2">
        <li>
          <Link
            to="/flavor"
            className="flex items-center text-black font-poppins text-sm hover:bg-gray-200 p-2 rounded"
          >
            Flavors
          </Link>
        </li>
        <li>
          <Link
            to="/season"
            className="flex items-center text-black font-poppins text-sm hover:bg-gray-200 p-2 rounded"
          >
            Seasonings
          </Link>
        </li>
        <li>
          <Link
            to="/ingredient"
           className="flex items-center text-black font-poppins text-sm hover:bg-gray-200 p-2 rounded"
          >
            Ingredients
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drop2;
