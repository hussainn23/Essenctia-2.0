import React from "react";
import { motion, useInView } from "framer-motion";
import Card from "../components/Card";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import Faq from "../components/Sections/Faq";
import Contact from "../components/Sections/Contact";
import Achievements from "../components/Sections/Achievements";
import Slider from "../components/Sections/Slider";
import { Link } from "react-router-dom";

const cardVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (isInView) => ({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 100,
    transition: { duration: 1 },
  }),
};

const CardWrapper = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      custom={isInView}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="bg-[#F3F3F3]">
        <div className="px-[30px] lg:px-[120px]">
          <Achievements />
        </div>
      </div>
      <div className="lg:px-[120px] px-[30px] pb-32">
        <p className="text-[#FF8C32] font-lexend-deca text-[17px] font-semibold leading-[22.1px] pt-[60px] text-center">
          Applications & Solutions
        </p>
        <h4 className="text-[#06113C] text-center font-lexend-deca text-[45px] font-bold leading-[58.5px] pt-[10px]">
          Our favourite menu & best
          <br className="md:block hidden" /> choices from clients
        </h4>

        <div className="flex flex-wrap md:justify-between justify-center pt-[160px]">
          <Link to="/flavor">
            <CardWrapper>
              <Card
                imgUrl={card1}
                category={"Category 1"}
                heading={"Flavors"}
                subHeading1={"Emulsions"}
                subHeading2={
                  <>
                    <div className="flex justify-center">
                      Liquid Flavors
                      <span className="hidden md:block">
                        (Water and Oil Soluble)
                      </span>
                    </div>
                  </>
                }
                subHeading3={"Powder Flavors"}
              />
            </CardWrapper>
          </Link>
          <Link to="/season">
            <CardWrapper>
              <Card
                imgUrl={card2}
                category={"Category 2"}
                heading={"Seasonings"}
                subHeading1={"Cheese Seasonings"}
                subHeading2={"Achari"}
                subHeading3={"Thai Chili"}
                className="md:pt-0 pt-32"
              />
            </CardWrapper>
          </Link>
          <Link to="/ingredient">
            <CardWrapper>
              <Card
                imgUrl={card3}
                category={"Category 3"}
                heading={"Ingredients"}
                subHeading1={"Thickeners and Preservatives"}
                subHeading2={"Acidity Regulators"}
                subHeading3={"Sweeteners"}  
                className="xl:pt-0 pt-32"
              />
            </CardWrapper>
          </Link>
         <Link to="/componds">
         <CardWrapper>
            <Card
              imgUrl={card4}
              category={"Category 4"}
              heading={"Compounds"}
              subHeading1={"Cola"}
              subHeading2={"Mango"}
              subHeading3={"Pome"}
              className=" mt-32 custom-margin"
            />
          </CardWrapper>
         </Link>
        </div>
      </div>
      <div className="bg-[#F3F3F3] px-[30px] lg:px-[120px]">
        <Faq />
      </div>
      <div className="px-[30px] lg:px-[120px]">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
