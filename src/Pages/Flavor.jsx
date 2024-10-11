import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import app1 from "../images/app1.png";
import right from "../images/right.svg";
import Sidebar from "../components/Sidebar";
import Strip from "../components/Strip";
import { Link } from "react-router-dom";

const Flavor = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const beverageItems = [
    "Beverage",
    "Bakery",
    "Confectionary",
    "Dairy",
    "Juices",
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const contentMap = {
    0: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Cola" },
        { number: "02", name: "Dew" },
        { number: "03", name: "Lemon" },
        { number: "04", name: "Mint" },
        { number: "05", name: "Orange" },
        { number: "06", name: "Pome" },
      ],
    },
    1: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Butter" },
        { number: "02", name: "Chocolate" },
        { number: "03", name: "Lemon" },
        { number: "04", name: "Orange" },
        { number: "05", name: "Vanilla Flavor" },
      ],
    },
    2: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Bubble Gum" },
        { number: "02", name: "Butter Scotch" },
        { number: "03", name: "Blue Berry" },
        { number: "04", name: "Chocolate" },
        { number: "05", name: "Cola" },
        { number: "06", name: "Caramel" },
        { number: "07", name: "Kulfa" },
        { number: "08", name: "Milky" },
        { number: "09", name: "Orange" },
        { number: "10", name: "Strawberry" },
        { number: "11", name: "Tutti Fruity" },
        { number: "12", name: "Watermelon" },
      ],
    },
    3: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Blue Berry" },
        { number: "02", name: "Cheese" },
        { number: "03", name: "Mango" },
        { number: "04", name: "Vanilla" },
      ],
    },
    4: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Apple" },
        { number: "02", name: "Guava" },
        { number: "03", name: "Mango" },
        { number: "04", name: "Pome" },
      ],
    },
  };

  const selectedContent = contentMap[selectedIndex];

  return (
    <div>
      <Banner title={"Flavor"} bannerSrc={app1} />
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
            <Sidebar items={beverageItems} onSelect={handleSelect} />
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

export default Flavor;
