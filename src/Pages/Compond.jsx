import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import app4 from "../images/app4.png";
import right from "../images/right.svg";
import Strip from "../components/Strip";
import { Link } from "react-router-dom";

const Compond = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const contentMap = {
    0: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      items: [
        { number: "01", name: "Cola" },
        { number: "02", name: "Ginesing" },
        { number: "03", name: "Mango" },
        { number: "04", name: "Pome" },
        { number: "05", name: "Chicken" },
        { number: "06", name: "Red Bull" },
      ],
    },
  };

  const selectedContent = contentMap[selectedIndex];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner title={"Compounds"} bannerSrc={app4} />
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

export default Compond;
