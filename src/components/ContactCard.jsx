import React from "react";


const ContactCard = ({ title, numbers = [], imgUrl, className }) => {
  return (
    <div className={`w-auto h-[251px] flex justify-center ${className} items-center flex-shrink-0 rounded-[32.308px] border-[2.585px] border-dashed border-[#E6E6E6] bg-[#F5F4F5]`}>
      <div>
        <div className="flex justify-center items-center ">
          <div className="bg-[#FEA821] rounded-full flex w-[67.2px] h-[67.2px] p-[16.8px] justify-center items-center flex-shrink-0">
          <img src={imgUrl} alt="phone" />
          </div>
        </div>
        <p className="text-[#26202E] text-center font-open-sans text-[25.015px] md:text-[31.015px] font-semibold leading-[34.117px] capitalize pt-3">
          {title}
        </p>

        <div className="flex flex-col pt-[18px]">
          {numbers.map((number, index) => (
            <span key={index} className="text-[#26202E] text-center font-segoe-ui text-[18.677px] md:text-[20.677px] font-normal leading-[31.015px]">
              {number}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
