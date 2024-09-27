import React, { useState, useEffect } from "react";
import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider2.png";
import slider3 from "../../images/slider3.png";
import { motion } from "framer-motion";
import line from "../../images/line.svg";
import Button from "../Button";

const images = [slider1, slider2, slider3];
const titles = [
  "Unlocking the Taste\nof Tradition",
  "Unlocking the Taste\nof Tradition",
  "Unlocking the Modern\nInterpretation",
];
const descriptions = [
  [
    "Unlocking the Secrets of Flavor, Taste the Tradition, Classic Flavors, Modern Interpretation, When",
    "Flavors Collide, Magic Happens.",
  ],
  [
    "Unlocking the Secrets of Flavor, Taste the Tradition, Classic Flavors, Modern Interpretation, When",
    "Flavors Collide, Magic Happens.",
  ],
  [
    "Unlocking the Secrets of Flavor, Taste the Tradition, Classic Flavors, Modern Interpretation, When",
    "Flavors Collide, Magic Happens.",
  ],
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden relative h-64 md:h-[700px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="flex flex-col gap-2 md:gap-[22px]">
                <motion.h1
                  initial={{ opacity: 0, y: -200 }}
                  animate={
                    index === currentSlide
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -100 }
                  }
                  transition={{ duration: 0.7 }}
                  className="text-white text-center md:px-8 lg:px-0 dm-serif-display-regular text-[20.5px] md:text-[80.5px] lg:text-[108.5px] font-normal md:leading-[122.3px] tracking-[-0.385px]"
                >
                  {titles[index].split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </motion.h1>
                <div className="flex justify-center">
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, width: 0 }}
                    animate={
                      index === currentSlide
                        ? {
                            opacity: 1,
                            width: "198px",
                            transition: { duration: 1 },
                          }
                        : { opacity: 0, width: 0 }
                    }
                  >
                    <img
                      src={line}
                      alt="line"
                      className="h-[14px] md:h-[27px] flex-shrink-0 stroke-[5px]"
                    />
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 0 }}
                  animate={
                    index === currentSlide
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 0 }
                  }
                  transition={{ duration: 3 }}
                  className="text-white font-dm-sans px-2 md:px-8 lg:px-0 text-[10px] md:text-[16px] font-normal leading-[14px] md:leading-[24px] text-center"
                >
                  {descriptions[index].map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br className="hidden lg:block" />
                    </span>
                  ))}
                </motion.p>

                <div className="hidden md:block">
                  <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={
                      index === currentSlide
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 200 }
                    }
                    transition={{ duration: 0.7 }}
                    className="flex justify-center"
                  >
                    <Button
                      text={"Learn More"}
                      padding="p-[4px_6px_4px_67px]"
                      gap="gap-[41px]"
                    />
                  </motion.div>
                </div>

                <div className="block md:hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={
                      index === currentSlide
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 200 }
                    }
                    transition={{ duration: 0.7 }}
                    className="flex justify-center"
                  >
                    <p className="text-[#FEA821] font-dm-sans text-[12px]">
                      Learn More
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="absolute inset-x-0 bottom-4 flex justify-center ">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full mx-2 ${
              index === currentSlide ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
      <div className="hidden md:block">
        <motion.button
          key={currentSlide + totalSlides}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  flex justify-center items-center  rounded-full lg:w-[92px] md:w-[62px] lg:h-[92px] md:h-[62px] ml-5 border text-white border-white shadow-lg z-10 "
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="44"
            viewBox="0 0 23 44"
            fill="none"
          >
            <path
              d="M22.0501 1.30005L1.3501 22.0001L22.0501 42.7001"
              stroke="white"
              stroke-width="1.15"
              stroke-linecap="round"
            />
          </svg>
        </motion.button>
        <motion.button
          key={currentSlide + totalSlides}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full lg:w-[92px] md:w-[62px] lg:h-[92px] md:h-[62px] flex justify-center items-center mr-5 shadow-lg z-10 border text-white border-white"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="44"
            viewBox="0 0 23 44"
            fill="none"
          >
            <path
              d="M0.949901 1.30005L21.6499 22.0001L0.949901 42.7001"
              stroke="white"
              stroke-width="1.15"
              stroke-linecap="round"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default Carousel;
