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

  const beverageItems = ["CSD", "Bakery", "Confectionary", "Dairy", "Juices"];

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const contentMap = {
    0: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "1", name: "Alkozay Energy" },
        { number: "2", name: "Carabao Energy" },
        { number: "3", name: "Citrus Dew" },
        { number: "4", name: "Cola" },
        { number: "5", name: "Ginesing Energy" },
        { number: "6", name: "Lemon Lime" },
        { number: "7", name: "Lemon Mint" },
        { number: "8", name: "Mix fruit Red Bull type" },
        { number: "9", name: "Multifruit Energy" },
        { number: "10", name: "Orange" },
        { number: "11", name: "Red Sting" },
      ],
    },
    1: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "1", name: "Butter" },
        { number: "2", name: "Caramel" },
        { number: "3", name: "Chocolate" },
        { number: "4", name: "Coffee" },
        { number: "5", name: "Lemon" },
        { number: "6", name: "Orange" },
        { number: "7", name: "Strawberry" },
        { number: "8", name: "Vanilla" },
      ],
    },
    2: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "1", name: "Blueberry" },
        { number: "2", name: "Bubble Gum" },
        { number: "3", name: "Butter Scotch" },
        { number: "4", name: "Caramel Cream" },
        { number: "5", name: "Coconut" },
        { number: "6", name: "Coffee" },
        { number: "7", name: "Cola" },
        { number: "8", name: "Guava" },
        { number: "9", name: "Kulfa" },
        { number: "10", name: "Lemon" },
        { number: "11", name: "Mango" },
        { number: "12", name: "Orange" },
        { number: "13", name: "Strawberry" },
        { number: "14", name: "Tutti Fruity" },
        { number: "15", name: "Vanilla" },
        { number: "16", name: "Watermelon" },
      ],
    },
    3: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "1", name: "Almond" },
        { number: "2", name: "Butter" },
        { number: "3", name: "Cardamom" },
        { number: "4", name: "Cheese" },
        { number: "5", name: "Desi Ghee" },
        { number: "6", name: "EMDI" },
        { number: "7", name: "Milk Cream" },
        { number: "8", name: "Vanilla" },
      ],
    },
    4: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "1", name: "Apple" },
        { number: "2", name: "Cherry" },
        { number: "3", name: "Guava" },
        { number: "4", name: "Lychee" },
        { number: "5", name: "Mango" },
        { number: "6", name: "Mix fruit" },
        { number: "7", name: "Orange" },
        { number: "8", name: "Peach" },
        { number: "9", name: "Pineapple" },
        { number: "10", name: "Pomegranate" },
        { number: "11", name: "Red grape" },
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
