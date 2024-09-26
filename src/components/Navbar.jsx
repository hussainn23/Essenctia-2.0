import React, { useState } from "react";
import logo from "../images/logo.svg";
import social from "../images/social.svg";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import yt from "../images/yt.png";
import contact from "../images/contact.svg";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const [activeDropdownLink, setActiveDropdownLink] = useState(null);

  const handleDropdownLinkClick = (linkPath) => {
    setActiveDropdownLink(linkPath);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownPaths = ["/season", "/flavor", "/ingredient"];
  const isApplicationsActive = dropdownPaths.includes(location.pathname);


  return (
    <header>
      <div className="bg-[#fff] w-full flex flex-col md:flex md:flex-row justify-between items-center 2xl:px-[120px] xl:px-[80px] lg:px-[50px] px-[30px]  py-[10px]">
        <div className="py-5 md:py-0">
          <img
            src={logo}
            alt="logo"
            className="w-[130px] md:w-[150px] lg:w-auto"
          />
        </div>
        <div>
          <input
            type="text"
            name=""
            placeholder="Search for"
            id=""
            className=" rounded-[40px] border border-[#A6A6A6] bg-[rgba(181,181,181,0.30)] mb-5 md:mb-0 2xl:w-[834px] xl:w-[500px] lg:w-auto h-[8px] md:h-[30px] lg:h-[42px] p-[21px_30px] text-[#717171] font-montserrat text-base font-medium leading-normal capitalize"
          />
        </div>

        {/*   <span className="absolute inset-y-0 right-16 flex items-center">  

    <span className="w-[1px] h-[29px] bg-[#A6A6A6]"></span>  
  </span>  
  <span className="absolute inset-y-0 right-3 flex items-center">  

    <svg   
      xmlns="http://www.w3.org/2000/svg"   
      class="h-5 w-5 text-[#717171]"   
      fill="none"   
      viewBox="0 0 24 24"   
      stroke="currentColor"   
      aria-hidden="true">  
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17a6 6 0 100-12 6 6 0 000 12zm0 0l6 6" />  
    </svg>   */}

        <div className="flex xl:gap-[50px] lg:gap-[40px] md:gap-[10px] gap-[20px] items-center mb-5 md:mb-0">
          <div>
            <span className="text-[#393939] font-poppins text-base font-normal xl:leading-[28px] xl:tracking-[5.46px] lg:tracking-[3px]  md:tracking-[1px] tracking-[0px] capitalize">
              Call us for details
            </span>
            <div className="flex gap-[10px]">
              <img src={contact} alt="phone" />
              <span class="text-[#393939] font-poppins lg:text-lg md:text-sm font-semibold xl:leading-[28px] xl:tracking-[6.24px] lg:tracking-[4px] md:tracking-[1px] tracking-[0px] capitalize">
                +111 11111 111
              </span>
            </div>
          </div>
          <span className="w-[1px] h-[29px] bg-[#A6A6A6]"></span>
          <div className="flex gap-1">
            <Link
              to="https://www.facebook.com/essenctia"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={fb} alt="social" className="w-[20px]  lg:w-auto" />
            </Link>
            <Link
              to="https://www.facebook.com/essenctia"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={insta} alt="social" className="w-[20px]   lg:w-auto" />
            </Link>
            <Link
              to="https://www.youtube.com/@Essenctia"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={yt} alt="social" className="w-[20px]  lg:w-auto" />
            </Link>
          </div>
        </div>
      </div>
      <nav className="bg-[#FEA821] flex h-[57px] 2xl:px-[600px] xl:px-[400px] lg:px-[200px] md:px-[100px] 2xl:py-[16px] justify-between items-center flex-shrink-0">
        <div className="flex md:hidden items-center  ">
          <button
            onClick={toggleMenu}
            className="flex items-center absolute right-10"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center justify-between space-x-4 w-full">
          <Link
            to="/"
            className={`text-black font-poppins text-sm hover:font-semibold font-normal leading-7 capitalize relative
    transition-all duration-150 ease-in 
    ${location.pathname === "/" ? "font-semibold" : ""}`}
          >
            Home
            <span
              className={`absolute block w-1 h-1 bg-black left-1/2 transform -translate-x-1/2 bottom-0 transition-opacity ${
                location.pathname === "/" ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          </Link>

          <span className="w-[1px] h-[29px] bg-[#000]"></span>
          <Link
            to="/about"
            className={`text-black font-poppins text-sm font-normal hover:font-semibold leading-7 capitalize relative
          ${location.pathname === "/about" ? "font-semibold" : ""}`}
          >
            About Us
            <span
              className={`absolute block w-1 h-1  bg-black left-1/2 transform -translate-x-1/2 bottom-0 transition-opacity ${
                location.pathname === "/about" ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          </Link>
          <span className="w-[1px] h-[29px] bg-[#000]"></span>
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="relative group"
          >
            <Link
              className={`text-black font-poppins text-sm font-normal hover:font-semibold leading-7 pb-4 capitalize relative ${
                isApplicationsActive ? "font-semibold" : ""
              }`}
            >
              Applications & Solutions
            </Link>
            {isApplicationsActive && (
              <span className="absolute block w-1 h-1 bg-black left-1/2 transform -translate-x-1/2 bottom-[-4px]"></span>
            )}
            {isDropdownOpen && (
              <div className="absolute left-[-960px] mt-3">
                <DropDown />
              </div>
            )}
          </div>
          <span className="w-[1px] h-[29px] bg-[#000]"></span>

          <Link
            to="/contact"
            className={`text-black font-poppins text-sm font-normal hover:font-semibold transition-all dura leading-7 capitalize relative
          ${location.pathname === "/contact" ? "font-semibold" : ""}`}
            style={{ width: "auto" }}
          >
            Contact Us
            <span
              className={`absolute block w-1 h-1  bg-black left-1/2 transform -translate-x-1/2 bottom-0 transition-opacity ${
                location.pathname === "/contact" ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          </Link>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center  bg-[#FEA821] p-4 absolute top-[270px] left-0 right-0 z-10">
            <Link
              to="/"
              className="text-black font-poppins  text-sm font-normal leading-7 capitalize"
              onClick={toggleMenu}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-black font-poppins text-sm font-normal leading-7 capitalize"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/flavor"
              className="text-black font-poppins text-sm font-normal leading-7 capitalize"
              onClick={toggleMenu}
            >
              Applications & Solutions
            </Link>
            <Link
              to="/contact"
              className="text-black font-poppins text-sm font-normal leading-7 capitalize"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
      {/* <DropDown className="absolute" /> */}
    </header>
  );
};

export default Navbar;
