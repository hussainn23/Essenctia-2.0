import React from "react";
import logo from "../images/logo.svg";
import fb from "../images/fb.svg";
import x from "../images/x.svg";
import tiktok from "../images/tiktok.svg";
import insta from "../images/insta.svg";
import usa from "../images/usa.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F8F1EC] xl:h-[504px] flex flex-col justify-between flex-shrink-0 rounded-[12px] px-[30px] 2xl:px-[120px] xl:px-[80px] lg:px-[50px]  pt-[89px]">
      <div class=" flex flex-col lg:flex lg:flex-row justify-between  ">
        <div class="flex pb-14 lg:pb-0 2xl:w-[481px] xl:w-[400px] lg:w-[300px] flex-col items-start  pr-[30px] gap-[40px] ">
          <img
            src={logo}
            alt="logo"
            className="lg:h-[50px] xl:h-[60px] md:w-[150px] lg:w-auto w-[130px]"
          />
          <span class="text-[#454545] font-normal text-[16.336px] leading-normal">
            Essenctia is dedicated to delivering exceptional flavor solutions
            that enhance our customers' products and brands. We leverage our
            expertise, creativity, and passion to craft unique and captivating
            flavor experiences that drive consumer preference and loyalty.
          </span>
        </div>
        <div class="flex flex-wrap lg:flex-none 2xl:w-[1021px] xl:w-[800px] lg:w-[600px] justify-between gap-[40px] pl-[20px]">
          <div class="flex flex-col items-start gap-[8px] self-stretch">
            <span class="text-[#262626] font-bold text-[16px] leading-normal font-dm-sans">
              Pages
            </span>
            <Link to="/about" class="text-[#454545] font-normal text-[16.336px] leading-normal font-dm-sans">
              About Us
            </Link>
            <Link  to="/flavor" class="text-[#454545] font-normal text-[16.336px] leading-normal font-dm-sans">
              Applications & <br className="hidden xl:block" /> Solutions
            </Link>
            <Link to="/contact" class="text-[#454545] font-normal text-[16.336px] leading-normal font-dm-sans">
              Contact
            </Link>
          </div>
          <div class="flex flex-col items-start gap-[8px] self-stretch">
            <span class="text-[#262626] font-bold text-[16px] leading-normal font-dm-sans">
              Categories
            </span>
            <Link to="/flavor" class="text-[#454545] font-normal text-[16.336px] leading-normal font-dm-sans">
              Flavors
            </Link>
            <Link to="/season" class="text-[#454545] font-normal text-[16.336px] leading-normal font-dm-sans">
              Seasoning
            </Link>
            <Link to="/ingredient" class="text-[#454545] font-normal text-[16.336px] leading-normal font-dm-sans">
              Ingredients
            </Link>
          </div>
          <div class="flex flex-col items-start gap-[8px] self-stretch">
            <span class="text-[#262626] font-bold text-[16px] leading-normal font-dm-sans">
              Extras
            </span>
            <Link class="text-[#454545] font-normal text-[16.336px] leading-normal font-dm-sans">
              Privacy Polict
            </Link>
            <Link class="text-[#454545] font-normal text-[16.336px] leading-normal font-dm-sans">
              Terms and <br /> Conditions
            </Link>
          </div>
          <div class="flex flex-col items-start gap-[8px] self-stretch">
            <span class="text-[#262626] font-bold text-[16px] leading-normal font-dm-sans ">
              Subscribe to our Newsletter
            </span>
            <div>
              <p class="text-[#454545] font-normal text-[16.336px] leading-normal font-dm-sans xl:w-[200px] 2xl:w-[300px]">
                Be the first to hear about new products, exclusive offers, and
                news.
              </p>
              <input
                type="email"
                placeholder="Your Email"
                className="border-b border-[#454545] bg-transparent  focus:outline-none text-[#747474] font-dm-sans text-[14px] font-normal leading-normal pt-[19.28px] pr-[5.25px] pb-[12.72px] pl-0"
              />
            </div>
            <div className="flex gap-[20px] pt-[15px] pb-[49.28px]">
              <img src={x} alt="twitter" />
              <img src={insta} alt="insta" />
              <img src={fb} alt="fb" />
              <img src={tiktok} alt="tiktok" />
            </div>
          </div>
        </div>
      </div>

      <div className=" pb-[35px]">
        <div className="flex h-[16px] gap-1 items-center justify-start flex-shrink-0 mb-4 ">
          <img src={usa} alt="usa" className="w-[20px] h-[20px] " />
          <span className="text-[#747474] text-center font-dm-sans text-[12.4px] font-normal leading-normal">
            United States (USD $)
          </span>
        </div>
        <div className="flex flex-col md:flex md:flex-row justify-between">
          <span className="text-[#747474] font-dm-sans text-[14px] font-normal leading-normal pb-3 md:pb-0">
            © 2024 All Rights Reserved By Essentia{" "}
          </span>
          <span className="text-[#747474] font-dm-sans text-[14px] font-bold leading-normal">
            Terms & Conditions | Privacy Policy | Cookies Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
