import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import app2 from "../images/app2.png";
import right from "../images/right.svg";
import Strip from "../components/Strip";
import { Link } from "react-router-dom";

const Season = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contentMap = {
    0: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      items: [
        { number: "01", name: "Tomato" },
        { number: "02", name: "Mexican" },
        { number: "03", name: "Ketchup" },
        { number: "04", name: "Garlic Powder" },
        { number: "05", name: "Cheese" },
        { number: "06", name: "Green Ginger" },
        { number: "07", name: "Green Chili" },
        { number: "08", name: "Masala" },
        { number: "09", name: "Achari" },
        { number: "10", name: "Green Hatch Pepper" },
        { number: "11", name: "Flaming Hot" },
        { number: "12", name: "Smoked Paprika" },
        { number: "13", name: "Thai Chili" },
        { number: "14", name: "Chipotle" },
        { number: "15", name: "Paprika" },
        { number: "16", name: "Tamarind" },
        { number: "17", name: "Tikka" },
        { number: "18", name: "Chicken Powder" },
        { number: "19", name: "Salt n black Pepper" },
        { number: "20", name: "Biryani" },
        { number: "19", name: "Sweet Thai Chili" },
        { number: "21", name: "Smoked Flavoring" },
        { number: "22", name: "Fajita" },
        { number: "23", name: "BBQ" },
        { number: "24", name: "Curry Powder" },
      ],
    },
  };

  const selectedContent = contentMap[selectedIndex];

  return (
    <div>
      <Banner title={"Seasonings"} bannerSrc={app2} />
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

export default Season;
