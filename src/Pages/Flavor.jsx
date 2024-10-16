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
    "CSD",
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
        { number: "02", name: "Lemon Lime" },
        { number: "03", name: "Carabao Energy" },
        { number: "04", name: "Multifruit Energy" },
        { number: "05", name: "Orange" },
        { number: "06", name: "Lemon Mint" },
        { number: "07", name: "Mix fruit Red Bull type" },
        { number: "08", name: "Alkozay Energy" },
        { number: "09", name: "Citrus Dew" }, 
        { number: "10", name: "Red Sting" },
        { number: "11", name: "Ginesing Energy" },
      ],
    },
    1: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Vanilla" },
        { number: "02", name: "Coffee" },
        { number: "03", name: "Orange" },
        { number: "04", name: "Caramel" },
        { number: "05", name: "Chocolate" },
        { number: "06", name: "Lemon" },
        { number: "07", name: "Strawberry" },
        { number: "08", name: "Butter" },
      ],
    },
    2: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Butter Scotch" },
        { number: "02", name: "Watermelon" },
        { number: "03", name: "Strawberry" },
        { number: "04", name: "Cola" },
        { number: "05", name: "Tutti Fruity" },
        { number: "06", name: "Lemon" },
        { number: "07", name: "Blueberry" },
        { number: "08", name: "Kulfa" },
        { number: "09", name: "Caramel Cream" },
        { number: "10", name: "Coconut" },
        { number: "11", name: "Guava" },
        { number: "12", name: "Bubble Gum" },
        { number: "13", name: "Coffee" },
        { number: "14", name: "Orange" },
        { number: "15", name: "Mango" },
        { number: "16", name: "Vanilla" },
      ],
    },
    3: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Cheese" },
        { number: "02", name: "Desi Ghee" },
        { number: "03", name: "EMDI" },
        { number: "04", name: "Almond" },
        { number: "05", name: "Butter" },
        { number: "06", name: "Milk Cream" },
        { number: "07", name: "Vanilla" },
        { number: "08", name: "Cardamom" },
      ],
    },
    4: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Mango" },
        { number: "02", name: "Pomegranate" },
        { number: "03", name: "Peach" },
        { number: "04", name: "Guava" },
        { number: "05", name: "Apple" },
        { number: "06", name: "Pineapple" },
        { number: "07", name: "Lychee" },
        { number: "08", name: "Mix fruit" },
        { number: "09", name: "Orange" },
        { number: "10", name: "Red grape" },
        { number: "11", name: "Cherry" },
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
