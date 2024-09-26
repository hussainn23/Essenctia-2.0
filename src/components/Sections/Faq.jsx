import React from "react";
import Button from "../Button";
import Bar from "../Bar";
import { motion, useInView } from "framer-motion";

const Faq = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const pFadeInVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  const h4FadeInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const barFadeInVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-[100px] lg:flex lg:flex-row justify-between pt-28 lg:gap-[30px] pb-[90px]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="text-[#FF8C32] font-lexend-deca text-[17px] font-semibold leading-[22.1px]"
          >
            Question And Answer
          </motion.p>
          <motion.h4
            className="text-[#06113C] font-lexend-deca text-[26px] md:text-[45px] font-bold sm:leading-[50.5px] md:leading-[58.5px] pt-[20px]"
            initial={{ opacity: 0, x: -400 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -400 }}
            transition={{ duration: 1 }}
          >
            Featured Frequently Asked <br /> Question Service
          </motion.h4>
          <motion.p
            className="text-[#6E6E6E] font-lexend-deca text-[17px] font-normal leading-[25.5px] pt-[20px]"
            initial={{ opacity: 0, x: -400 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -400 }}
            transition={{ duration: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
          <div className="pt-[30px]">
            <Button
              text={"View All"}
              padding="p-[4px_5px_4px_37px]"
              gap="gap-[14px]"
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
        >
          <Bar
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
          <Bar text={"Lorem ipsum dolor sit amet."} answer={"answe"} />
          <Bar text={"Lorem ipsum dolor sit amet, consectetur."} />
          <Bar text={"Lorem ipsum dolor."} />
          <Bar text={"Can I Get Free Sample ?"} />
          <Bar text={"How To Claim Guarantee ?"} />
          <Bar text={"How This Can Work ?"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
