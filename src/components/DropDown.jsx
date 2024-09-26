import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/drop1.png";
import img2 from "../images/drop2.png";

const DropDown = ({ onLinkClick }) => {
  return (
    <div className="absolute w-[1910px] h-[494px] flex justify-between items-center flex-shrink-0 border-t border-t-[#41BA90] px-20  bg-white shadow-md z-50">
      <div className="inline-flex h-[398px] items-start gap-[66px] flex-shrink-0">
        <div className="flex w-[200px] flex-col items-start gap-[36px]">
          <h3 className="text-[#454545] font-dm-sans text-[24px] font-normal leading-normal">
            Flavors
          </h3>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Juices
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Beverages
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Bakery
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Confectionary
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Dairy
            </p>
            <Link className="cursor-pointer" to="/flavor" onClick={() => onLinkClick('/flavor')}>
              <span className="flex items-center gap-[16px] self-stretch">
                <p className="text-[#FEA821] font-dm-sans text-[16px] font-bold">
                  Explore All
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                  >
                    <path
                      d="M17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.79289L11.3431 0.428932C10.9526 0.0384078 10.3195 0.0384078 9.92893 0.428932C9.53841 0.819457 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM0 8.5H17V6.5H0V8.5Z"
                      fill="#FEA821"
                    />
                  </svg>
                </div>
              </span>
            </Link>
          </div>
        </div>
        <div className="bg-[#7C7C7C] w-[1px] h-[323px]"></div>
        <div className="flex w-[200px] flex-col items-start gap-[36px]">
          <h3 className="text-[#454545] font-dm-sans text-[24px] font-normal leading-normal">
            Seasonings
          </h3>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Cheese
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Achari
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Thai Chili
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Tikka
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Biryani
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Fajita
            </p>
            <Link className="cursor-pointer" to="/season" onClick={() => onLinkClick('/season')}>
              <span className="flex items-center gap-[16px] self-stretch">
                <p className="text-[#FEA821] font-dm-sans text-[16px] font-bold">
                  Explore All
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                  >
                    <path
                      d="M17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.79289L11.3431 0.428932C10.9526 0.0384078 10.3195 0.0384078 9.92893 0.428932C9.53841 0.819457 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM0 8.5H17V6.5H0V8.5Z"
                      fill="#FEA821"
                    />
                  </svg>
                </div>
              </span>
            </Link>
          </div>
        </div>
        <div className="bg-[#7C7C7C] w-[1px] h-[323px]"></div>
        <div className="flex w-[200px] flex-col items-start gap-[36px]">
          <h3 className="text-[#454545] font-dm-sans text-[24px] font-normal leading-normal">
            Ingredients
          </h3>
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Thickeners and Preservatives
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Acidity Regulators
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Sweeteners
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Leavening Agents
            </p>
            <p className="text-black font-dm-sans text-[16px] font-normal leading-normal">
              Anti-caking agents
            </p>
            <Link className="cursor-pointer" to="/ingredient" onClick={() => onLinkClick('/ingredient')}>
              <span className="flex items-center gap-[16px] self-stretch">
                <p className="text-[#FEA821] font-dm-sans text-[16px] font-bold">
                  Explore All
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                  >
                    <path
                      d="M17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.79289L11.3431 0.428932C10.9526 0.0384078 10.3195 0.0384078 9.92893 0.428932C9.53841 0.819457 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM0 8.5H17V6.5H0V8.5Z"
                      fill="#FEA821"
                    />
                  </svg>
                </div>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <img src={img1} alt="imjg" className="rounded-lg " />
        </div>
        <div>
          <img src={img2} alt="imjg" className="rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default DropDown;
// w-[780px] h-[440px]