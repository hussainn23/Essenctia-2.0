import React from "react";
import arrow from "../images/arrow.svg";

const Button = ({ padding = "p-[4px_6px_4px_67px]", text, gap = "[41px]" }) => {
  return (
    <div>
      <button
        className={`inline-flex items-center justify-end ${gap} ${padding} rounded-[60px] bg-[#FEA821]`}
      >
        <span className="text-[#102B26] text-center font-syne text-[20px] md:text-[text-[16px]  lg:text-[26.5px] font-normal leading-[42.35px] tracking-[-0.385px]">
          {text}
        </span>
        <span className="bg-[#1B2D0C] w-[51px] h-[51px] flex justify-center items-center rounded-full">
          <img src={arrow} alt="arrow" />
        </span>
      </button>
    </div>
  );
};

export default Button;
