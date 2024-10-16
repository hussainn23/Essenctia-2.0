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
        { number: "02", name: "Calcium Propionate" },
        { number: "03", name: "Folic Acid" },
        { number: "04", name: "Propylene glycol" },
        { number: "05", name: "Baking Powder" },
        { number: "06", name: "SAPP" },
        { number: "07", name: "KMS" },
        { number: "08", name: "Pectin" },
        { number: "09", name: "Bread Crumbs" },
        { number: "10", name: "Glycerin" },
        { number: "11", name: "Glucose" },
        { number: "12", name: "Fructose Powder" },
        { number: "13", name: "CMC" },
        { number: "14", name: "Sorbic Acid " },
        { number: "15", name: "BHA " },
        { number: "16", name: "Sodium lactate " },
        { number: "17", name: "Guar Gum " },
        { number: "18", name: "Sodium Benzoate " },
        { number: "19", name: "Citric Acid " },
        { number: "20", name: "Glycerin " },
        { number: "21", name: "SSL " },
        { number: "22", name: "Cocoa Powder " },
        { number: "23", name: " Cake Gel " },
        { number: "24", name: " Gelatin " },
        { number: "25", name: " Starch " },
        { number: "26", name: " Benzoic Acid " },
        { number: "27", name: " BHT " },
        { number: "28", name: " Agar " },
        { number: "29", name: " Xanthan Gum " },
        { number: "30", name: " Potassium Sorbate " },
        { number: "31", name: " Malic Acid " },
        { number: "32", name: " Sorbitol " },
      ],
    },
    1: {
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      items: [
        { number: "01", name: "Acesulfame-K" },
        { number: "02", name: "Citric Acid (Monohydrate)" },
        { number: "03", name: "Ethyl Vanillin " },
        { number: "04", name: "Mannitol" },
        { number: "05", name: "Aerosil-200(Pharma Grade)" },
        { number: "06", name: "Citric Acid (Anhydrous) " },
        { number: "07", name: "Glycine" },
        { number: "08", name: "Maltodextrin" },
        { number: "09", name: "Aeroperl-300(Pharma)" },
        { number: "10", name: "Cross Povidone XL" },
        { number: "11", name: "Inisitol" },
        { number: "12", name: "Maltodextrin (M580/M700)" },
        { number: "13", name: "Dextrose Anhydrous" },
        { number: "14", name: "Methanol Crystal Natural" },
        { number: "15", name: "Butyl Paraben" },
        { number: "16", name: "Injectable Grade" },
        { number: "17", name: "Lactose Anhydrous" },
        { number: "18", name: "Ascorbic Acid (Plain/Coated)" },
        { number: "19", name: "E.D.T.A.Di (Calcium Solitar)" },
        { number: "20", name: "Maltitol" },
        { number: "21", name: "Aspartame Powder" },
        { number: "22", name: "Citric Acid (Anhydrous)" },
        { number: "23", name: "Magnesium Sterate" },
        { number: "24", name: "Beta Carotin 10% CWS " },
        { number: "25", name: "Caffeine Anhydrous" },
        { number: "26", name: "F1600/N1560" },
        { number: "27", name: "Di Calcium Phos/Anhy" },
        { number: "28", name: "Cross Caremellos Sodium" },
        { number: "29", name: "Gran/DC" },
        { number: "30", name: "Fructose Powder" },
        { number: "31", name: "Glycerin" },
        { number: "32", name: "Lactose Monohydrate" },
        { number: "33", name: "PVPK-30" },
        { number: "34", name: "Primo Gel" },
        { number: "35", name: "PG (Propylene Glycol)" },
        { number: "36", name: "Avicel-200(Pharma)" },
        { number: "37", name: "Methocel" },
        { number: "38", name: "Menthol" },
        { number: "39", name: "IPA (Isopropylene Alcohol)" },
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
