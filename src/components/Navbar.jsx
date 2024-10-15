import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import social from "../images/social.svg";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import yt from "../images/yt.png";
import contact from "../images/contact.svg";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import Drop1 from "./Drop1"; // Import Drop1 component
import Drop2 from "./Drop2";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 1903);
  const location = useLocation();
  const [activeDropdownLink, setActiveDropdownLink] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen); // Toggle dropdown on click
  };

  // Track window resize to update screen width
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  // Track window size to switch between DropDown and Drop1
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 1903);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className="bg-[#fff] w-full flex-end flex flex-col md:flex md:flex-row justify-between items-center 2xl:px-[120px] md:gap-5 lg:gap-10  xl:px-[80px] lg:px-[50px] px-[30px]  py-[10px]">
        <Link to="/" className="flex w-1/2 justify-center md:justify-start ">
          <div className="py-5 md:py-0">
            <img
              src={logo}
              alt="logo"
              className="w-[130px] md:w-[150px] lg:w-auto"
            />
          </div>
        </Link>
        <div className="w-full flex">
          <input
            type="text"
            placeholder="Search for"
            className="rounded-[40px] border border-[#A6A6A6] bg-[rgba(181,181,181,0.30)] mb-5 md:mb-0  w-full h-[8px] md:h-[30px] lg:h-[42px] p-[21px_30px] text-[#717171] font-montserrat text-base font-medium leading-normal capitalize"
          />
        </div>

        <div className="flex w-full justify-center md:justify-end gap-5 lg:gap-[50px] items-center mb-5 md:mb-0">
          <div className="">
            <span className="text-[#393939] font-poppins xl:text-base font-normal 2xl:leading-[28px] md:text-[13px] 2xl:tracking-[3px] capitalize">
              Call us for details
            </span>
            <div className="flex gap-[10px]">
              <img src={contact} alt="phone" />
              <span className="text-[#393939] font-poppins lg:text-md md:text-sm font-semibold 2xl:leading-[28px]  2xl:tracking-[4px] capitalize">
                +111 11111 111
              </span>
            </div>
          </div>
          <span className="w-[1px] h-[29px] bg-[#A6A6A6]"></span>
          <div className="flex justify-end gap-1 ">
            <Link
              to="https://www.facebook.com/essenctia"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={fb} alt="social" className="w-[20px] lg:w-auto" />
            </Link>
            <Link
              to="https://www.facebook.com/essenctia"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={insta} alt="social" className="w-[20px] lg:w-auto" />
            </Link>
            <Link
              to="https://www.youtube.com/@Essenctia"
              target="_blank"
              className="cursor-pointer"
            >
              <img src={yt} alt="social" className="w-[20px] lg:w-auto" />
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-[#FEA821] flex h-[57px] 2xl:px-[500px] xl:px-[400px] lg:px-[200px] md:px-[100px] 2xl:py-[16px] justify-between items-center flex-shrink-0">
        <div className="flex md:hidden items-center">
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
            className={`text-black font-poppins text-sm hover:font-semibold font-normal leading-7 capitalize relative transition-all duration-150 ease-in ${
              location.pathname === "/" ? "font-semibold" : ""
            }`}
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
            className={`text-black font-poppins text-sm font-normal hover:font-semibold leading-7 capitalize relative ${
              location.pathname === "/about" ? "font-semibold" : ""
            }`}
          >
            About Us
            <span
              className={`absolute block w-1 h-1 bg-black left-1/2 transform -translate-x-1/2 bottom-0 transition-opacity ${
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
            <Link className="text-black font-poppins text-sm font-normal hover:font-semibold leading-7 pb-4 capitalize relative">
              Applications & Solutions
            </Link>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-3">
                {/* Conditionally render DropDown, Drop1, or Drop2 based on screen width */}
                {screenWidth <= 983 ? (
                  <Drop2 /> // Show Drop2 if screen is 983px or less
                ) : screenWidth <= 1903 ? (
                  <div className="absolute left-[-490px]">
                    <Drop1 />
                  </div>
                ) : (
                  <div className="absolute  left-[-990px]">
                    <DropDown />
                  </div>
                )}
              </div>
            )}
          </div>
          <span className="w-[1px] h-[29px] bg-[#000]"></span>

          <Link
            to="/contact"
            className={`text-black font-poppins text-sm font-normal hover:font-semibold transition-all duration-150 leading-7 capitalize relative ${
              location.pathname === "/contact" ? "font-semibold" : ""
            }`}
          >
            Contact Us
            <span
              className={`absolute block w-1 h-1 bg-black left-1/2 transform -translate-x-1/2 bottom-0 transition-opacity ${
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
            <div className="w-full text-center flex justify-center flex-col">
            <button
              className={`flex justify-center items-center text-black font-poppins text-sm font-normal leading-7 capitalize ${
                isMobileDropdownOpen ? "bg-transparent" : ""
              }`} // Highlight button when dropdown is open
              onClick={toggleMobileDropdown}
            >
              Applications & Solutions
              <AiFillCaretDown
                className={`ml-1 transition-transform duration-300 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>


            {isMobileDropdownOpen && (
              <div className="bg-white shadow-lg mt-2 w-full rounded-md transition-all duration-300 ease-in-out transform opacity-100">
                <ul className="space-y-2 p-4">
                  <li>
                    <Link
                      to="/flavor"
                       className="text-black font-poppins text-sm leading-6 transition duration-200 hover:font-bold px-10"
                      onClick={toggleMenu}
                    >
                      Flavors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/season"
                      className="text-black font-poppins text-sm leading-6 transition duration-200 hover:font-bold px-10"
                      onClick={toggleMenu}
                    >
                      Seasonings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ingredient"
                      className="text-black font-poppins text-sm leading-6 transition duration-200 hover:font-bold px-10"
                      onClick={toggleMenu}
                    >
                      Ingredients
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

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
    </header>
  );
};

export default Navbar;
