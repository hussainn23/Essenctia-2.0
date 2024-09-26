import React, { useState } from "react";
import Banner from "../components/Banner";
import app3 from "../images/app3.png";
import right from "../images/right.svg";
import Sidebar from "../components/Sidebar";
import Strip from "../components/Strip";
import { Link } from "react-router-dom";

const Ingredient = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const anotherPageItems = ["Acidity Regulators", "Anti-caking agents", "Leavening Agents", "Sweeteners", "Thickeners and Preservatives"];

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const contentMap = {
    0: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Acetic Acid" },
        { number: "02", name: "Citric Acid" },
        { number: "03", name: "Malic Acid" },
        { number: "04", name: "Tartaric Acid" },
        { number: "05", name: "Tri-Sodium Citrate" },
      ],
    },
    1: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Silicon Dioxide" },
      ],
    },
    2: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Baking Soda" },
      ],
    },
    3: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Corn syrup" },
        { number: "02", name: "Glucose" },
        { number: "03", name: "Sucrose (sugar)" }
      ],
    },
    4: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Calcium Propionate " },
        { number: "02", name: "Guar gum" },
        { number: "03", name: "Gelatin" },
        { number: "04", name: "Potassium Sorbate" },
        { number: "04", name: "Sodium Benzoate" },
        { number: "04", name: "Starch" },
        { number: "04", name: "Xanthan Gum" },
      ],
    },
  };

  const selectedContent = contentMap[selectedIndex];

  return (
    <div>
      <Banner title={"Ingredients"} bannerSrc={app3} />
      <div className="mb-28 px-[30px] lg:px-[120px]">
        <div className="flex lg:gap-4 gap-2 mt-14 mb-7 ">
          <h4 className="text-[#06113C] cursor-pointer font-lexend-deca lg:text-[26px] md:text-[20px] text-[15px] font-bold leading-[58.5px] text-left">
           <Link to="/">Home</Link>
          </h4>
          <div className="flex justify-center items-center">
            <img src={right} alt="arrow" className="lg:w-3 w-2" />
          </div>
          <h4 className="text-[#FEA821] font-lexend-deca lg:text-[26px] md:text-[20px] text-[15px] font-bold leading-[58.5px] text-left">
            Applications & Solutions
          </h4>
        </div>
        <div className="xl:flex-row xl:justify-between gap-6 flex flex-col ">
          <div>
            <Sidebar items={anotherPageItems} onSelect={handleSelect} />
          </div>
          <div className=" flex-1">
            <div className={`grid ${selectedContent.columns} gap-2`}>
              {selectedContent.items.map((strip, index) => (
                <div key={index}>
                  <Strip number={strip.number} name={strip.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
