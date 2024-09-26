import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Bar = ({ margin = "mb-5", text, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`2xl:w-[938px] h-[76px] flex justify-between items-center ${margin} flex-shrink-0 bg-[#fff] cursor-pointer`}
        onClick={toggleAnswer}
      >
        <h3 className="text-[#06113C] font-lexend-deca text-[16px] md:text-[20px]  font-bold leading-[26px] pl-10">
          {text}
        </h3>
        <div className="pr-5">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#F8F8F8] p-5 2xl:w-[938px] text-[#454545] text-[17px] font-lexend-deca leading-[25.5px] mb-5">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Bar;
