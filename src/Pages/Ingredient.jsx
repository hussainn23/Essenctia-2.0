import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import app3 from "../images/app3.png";
import right from "../images/right.svg";
import Sidebar from "../components/Sidebar";
import Strip from "../components/Strip";
import { Link } from "react-router-dom";

const Ingredient = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const anotherPageItems = ["Food ingredients", " Pharmaceutical Ingredients"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const contentMap = {
    0: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Agar" },
        { number: "02", name: "BHA" },
        { number: "03", name: "Baking Powder" },
        { number: "04", name: "Benzoic Acid" },
        { number: "05", name: "BHT" },
        { number: "06", name: "Bread Crumbs" },
        { number: "07", name: "Cake Gel" },
        { number: "08", name: "Calcium Propionate" },
        { number: "09", name: "CMC" },
        { number: "10", name: "Cocoa Powder" },
        { number: "11", name: "Citric Acid" },
        { number: "12", name: "Fructose Powder" },
        { number: "13", name: "Folic Acid" },
        { number: "14", name: "Gelatin" },
        { number: "15", name: "Glycerin" },
        { number: "17", name: "Glucose" },
        { number: "18", name: "Guar Gum" },
        { number: "19", name: "KMS" },
        { number: "20", name: "Malic Acid" },
        { number: "21", name: "Pectin" },
        { number: "22", name: "Potassium Sorbate" },
        { number: "23", name: "Propylene glycol" },
        { number: "24", name: "SAPP" },
        { number: "25", name: "Sodium Benzoate" },
        { number: "26", name: "Sodium lactate" },
        { number: "27", name: "SSL" },
        { number: "28", name: "Sorbitol" },
        { number: "29", name: "Sorbic Acid" },
        { number: "30", name: "Starch" },
        { number: "31", name: "Xanthan Gum" },
        { number: "32", name: "Potassium Sorbate" },
      ],
    },
    1: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Acesulfame-K" },
        { number: "02", name: "Aerosil-200(Pharma Grade)" },
        { number: "03", name: "Aspartame Powder" },
        { number: "04", name: "Avicel-200(Pharma)" },
        { number: "05", name: "Beta Carotin 10% CWS" },
        { number: "06", name: "Butyl Paraben" },
        { number: "07", name: "Caffeine Anhydrous" },
        { number: "08", name: "Citric Acid (Anhydrous)" },
        { number: "09", name: "Citric Acid (Monohydrate)" },
        { number: "10", name: "Cross Caremellos Sodium" },
        { number: "11", name: "Cross Povidone XL" },
        { number: "12", name: "Dextrose Anhydrous" },
        { number: "13", name: "Di Calcium Phos/Anhy" },
        { number: "14", name: "E.D.T.A.Di (Calcium Solitar)" },
        { number: "15", name: "Ethyl Vanillin" },
        { number: "16", name: "F1600/N1560" },
        { number: "17", name: "Fructose Powder" },
        { number: "18", name: "Glycerin" },
        { number: "19", name: "Gran/DC" },
        { number: "20", name: "Lactose Anhydrous" },
        { number: "21", name: "Lactose Monohydrate" },
        { number: "22", name: "Maltodextrin" },
        { number: "23", name: "Maltodextrin (M580/M700)" },
        { number: "24", name: "Mannitol" },
        { number: "25", name: "Methanol Crystal Natural" },
        { number: "26", name: "Methocel" },
        { number: "27", name: "Menthol" },
        { number: "28", name: "Magnesium Sterate" },
        { number: "29", name: "PG (Propylene Glycol)" },
        { number: "30", name: "Primo Gel" },
        { number: "31", name: "PVPK-30" },
        { number: "32", name: "Injectable Grade" },
        { number: "33", name: "IPA (Isopropylene Alcohol)" },
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
