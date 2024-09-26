import React from "react";
import arrow from "../images/arrow.svg";

const Card = ({ imgUrl, category, heading, subHeading1, subHeading2, subHeading3, className  }) => {
  return (
    <div className={`your-default-class ${className} `}>
      <div className=" group 2xl:w-[396px] w-[240px]  md:w-[350px] 2xl:h-[548px] h-[450px] md:h-[520px]  flex-shrink-0 rounded-[8.741px] bg-white shadow-[17.481px_26.222px_30.592px_rgba(0,0,0,0.10)] hover:border border-[#FF8C32] transition-all ease-in-out duration-300 ">
        <div className="flex justify-center ">
          <img
            src={imgUrl}
            alt="card"
            className="rounded-xl 2xl:h-[231px] md:h-[200px] h-[130px] mt-[-50px] transition-transform duration-300 group-hover:scale-[1.15]"
          />
        </div>
        <div>
          <p
            className="text-[#FF8C32] text-center font-lexend-deca text-[14.859px] font-semibold leading-[19.317px] pt-8 
        transition-all ease-in-out duration-300 delay-75 
transform group-hover:translate-y-14 group-hover:scale-105"
          >
            {category}
          </p>
          <h3
            className="text-[#06113C] text-center font-lexend-deca text-[30px] md:text-[48.073px] font-bold leading-[28.407px] 
pt-6 group-hover:text-[#FF8C32] transition-all ease-in-out duration-300 delay-75 
transform group-hover:translate-y-14 group-hover:scale-[1.15]"
          >
            {heading}
          </h3>
          <p
            className="text-[#454545] text-center font-lexend-deca text-[13.985px] font-normal leading-[20.978px] 
         pt-10 transition-all ease-in-out duration-300 delay-75 
transform group-hover:translate-y-14 group-hover:scale-[1.15]"
          >
            {subHeading1}
          </p>
          <div
            className="flex justify-center pt-3 transition-all ease-in-out duration-300 delay-75 
transform group-hover:translate-y-14 group-hover:scale-[1.15]"
          >
            <div className="bg-[#DADADA] w-[108px] h-[0.875px]"></div>
          </div>
          <h6
            className="text-[#454545] text-center font-lexend-deca text-[13.985px] font-normal leading-[20.978px] 
         flex-shrink-0 pt-3 transition-all ease-in-out duration-300 delay-75 
transform group-hover:translate-y-14 group-hover:scale-[1.15]"
          >
            {subHeading2}
          </h6>
          <div
            className="flex justify-center pt-3 transition-all ease-in-out duration-300 delay-75 
transform group-hover:translate-y-14 group-hover:scale-[1.15]"
          >
            <div className="bg-[#DADADA] w-[108px] h-[0.875px]"></div>
          </div>
          <p
            className="text-[#454545] text-center font-lexend-deca text-[13.985px] font-normal leading-[20.978px] 
        pt-3 transition-all ease-in-out duration-300 delay-75 
transform group-hover:translate-y-14 group-hover:scale-[1.15]"
          >
            {subHeading3}
          </p>
          <div className="flex justify-center pt-5">
            <div
              className="w-[63.807px] h-[63.807px] flex justify-center items-center flex-shrink-0 bg-[#1B2D0C] 
  rounded-full group-hover:bg-[#FF8C32]  transition-all ease-in-out duration-300 delay-75 
transform group-hover:translate-y-14 group-hover:scale-[1.15]"
            >
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
