import React from "react";

const Strip = ({ number, name }) => {
  return (
    <div className="bg-[#FCFCFC] border-[0.95px] border-[#DADADA] pt-6 pr-28 pb-10 pl-10 rounded-[0.95px] group hover:border-[#FEA821] transition-all min-h-[160px]">
      <div className="flex flex-col items-start gap-2 flex-shrink-0 ">
        <span className="text-[#FEA821] font-segoe-ui font-semibold text-[23.87px] leading-[33.42px] ">
          {number}
        </span>
        <span className="text-[#000] font-lexend-deca font-normal text-[26px] leading-[27px] group-hover:text-[#FEA821] transition-all ">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Strip;
