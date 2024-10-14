import React from "react";
import { motion, useInView } from "framer-motion";
import tick from "../../images/tick.svg";
import target from "../../images/target.svg";
import indus from "../../images/indus.png";
import container from "../../images/container.png";
import dots from "../../images/dots.png";
import plus from "../../images/plus.svg";

const Achievements = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="xl:flex xl:flex-row gap-10 flex flex-col-reverse xl:justify-between items-center 2xl:pb-44 py-20 2xl:pt-40"
    >
      {/* <div className="flex xl:flex-none justify-center xl:flex-auto"> */}
        <div className="flex w-full ">
          <div>
            <motion.img
              src={indus}
              alt="indus"
              className="rounded-lg w-[270px] md:w-auto"
              initial={{ opacity: 0, x: -200 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }
              }
              transition={{ duration: 1 }}
            />
            <img
              src={dots}
              alt="dots"
              className="md:mt-[50px] mt-[30px] w-[70px] md:w-auto"
            />
          </div>
          <div>
            <motion.div
              className="ml-[17px] md:ml-[30px] mb-[35px]"
              initial={{ opacity: 0, y: -100 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
              }
              transition={{ duration: 1 }}
            >
              <div className="flex gap-2 md:mb-2">
                <h4 className="text-[#FEA821] font-lexend text-[35px] md:text-[45px] font-bold leading-[38.5px] md:leading-[58.5px] mb-1 md:mb-0 text-center">
                  100
                </h4>
                <img
                  src={plus}
                  alt="plus"
                  className="mb-3 w-[8px] md:w-auto ml-[-5px]"
                />
              </div>
              <h6 className="text-[#2A2A2A] font-lexend md:text-[20px] font-bold leading-[16px] md:leading-[26px] text-left mb-1 md:mb-0">
                Trusted Clients
              </h6>
              <p className="text-[#6E6E6E] font-lexend text-[10px] md:text-[17px] font-normal leading-[15.5px] md:leading-[25.5px] text-left">
                Lorem ipsum dolor sit <br className="md:block hidden" /> amet.
              </p>
            </motion.div>
            <div className="ml-[-80px] md:ml-[-135px]">
              <motion.img
                src={container}
                alt="container"
                className="w-[170px] md:w-auto z-40"
                initial={{ opacity: 0, y: 100 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        {/* </div> */}
      </div>
      <div className="mb-20 w-full lg:mb-0 color-animation">
        <motion.p
          className="text-[#FEA821] font-lexend text-[17px] font-semibold leading-[22.1px] text-left"
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          Who We Are
        </motion.p>
        <motion.h3
          className="text-[#06113C] font-lexend text-[35px] md:text-[45px] font-bold leading-[48.5px] md:leading-[58.5px] text-left "
          initial={{ opacity: 0, x: 400 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 400 }}
          transition={{ duration: 1 }}
        >
          Essentia: Elevating Products with <br className="2xl:block hidden" />{" "}
          Exceptional Flavor Solutions
        </motion.h3>
        <p className="text-[#454545] font-lexend text-[16px] font-normal leading-[24px] text-left mt-2 ">
          Essenctia is dedicated to delivering exceptional flavor solutions that
          enhance our customers' products and brands. We{" "}
          <br className="2xl:block hidden" /> leverage our expertise,
          creativity, and passion to craft unique and captivating flavor
          experiences that drive consumer <br className="2xl:block hidden" />{" "}
          preference and loyalty.
        </p>
        <div>
          <div className="flex gap-1 mt-4">
            <img src={tick} alt="icon" />
            <p className="text-[#6E6E6E] font-lexend text-[17px] font-normal leading-[25.5px] text-left">
              Excellence in Flavor Innovation
            </p>
          </div>
          <div className="flex gap-1 mt-1">
            <img src={tick} alt="icon" />
            <p className="text-[#6E6E6E] font-lexend text-[17px] font-normal leading-[25.5px] text-left">
              Commitment
            </p>
          </div>
          <div className="flex gap-1 mt-1">
            <img src={tick} alt="icon" />
            <p className="text-[#6E6E6E] font-lexend text-[17px] font-normal leading-[25.5px] text-left">
              Integrity and Ethics
            </p>
          </div>
        </div>
        <div className="md:flex md:flex-row gap-5 flex flex-col items-center mt-6">
          <div className="bg-[#2A2A2A] rounded-[10px] shadow-[0_10px_25px_0_rgba(0,0,0,0.10)] p-8 md:p-10 w-[250px] lg:w-[349px]">
            <div className="flex justify-between ">
              <h5 className="text-white font-lexend-deca text-[20px] font-bold leading-[26px]">
                Our Vision
              </h5>
              <div className=" mt-[-20px] mb-2">
                <img src={target} alt="target" className="" />
              </div>
            </div>
            <p className="text-white/83 font-lexend-deca text-[17px] font-normal leading-[25.5px] text-[#FFFFFFD4]">
              {" "}
              Built on a strong foundation of trust and commitment to building
              long-term partnerships.
            </p>
          </div>
          <div className="md:w-[250px]">
            <h6 className="text-[#070606] font-lexend text-[20px] font-bold leading-[26px] text-left">
              Special <br /> Achievements
            </h6>
            <p className="text-[#454545] font-lexend text-[16px] font-normal leading-[24px] text-left mt-1">
              Established a state-of-the-art R&D lab for meticulous flavor
              refinement.
              <br className="2xl:block hidden" /> Fostered long-term
              partnerships with leading food, beverage, and{" "}
              <br className="2xl:block hidden" /> fragrance companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
