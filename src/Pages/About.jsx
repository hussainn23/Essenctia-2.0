import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import about from "../images/about.png";
import Banner from "../components/Banner";
import Achievements from "../components/Sections/Achievements";

const About = () => {
  return (
    <>
      <Banner title={"About Us"} bannerSrc={about} />
      <div className="bg-[#F3F3F3]">
        <div className="px-[30px] lg:px-[120px]">
          <Achievements />
        </div>
      </div>
      <div className="px-[30px] lg:px-[120px]">
        <div className="pt-[110px] ">
          <p className="text-[#FEA821] font-lexend-deca text-[17px] font-semibold leading-[22.1px] text-center">
            OUR TEAM
          </p>
          <h3 className="text-black text-center font-inter text-[35px] md:text-[46px] font-bold leading-[45.2px] md:leading-[55.2px] pt-[2px] pb-24">
            Meet Our Professional Team
          </h3>

          <div className="flex flex-wrap lg:justify-between justify-center ">
            <div className="flex flex-col ">
              {/* <div className="md:w-[372.942px] md:h-[372px] w-[270.942px] h-[270px]  flex justify-center items-center flex-shrink-0 rounded-[47.089px] bg-[#FEA821]"> */}
                <img
                  src={img1}
                  alt="user1"
                  className=" "
                />
              {/* </div> */}
              <div className="pt-[50px] pb-[130px]">
                <h5 className="text-[#06113C] text-center font-lexend-deca text-[25px] md:text-[39px] font-bold leading-[2.5px] md:leading-[32.5px]">
                  Mujahid Khokhar
                </h5>
                <p className="text-[#454545] text-center font-lexend-deca text-[16px] md:text-[26px] font-normal leading-[14px] md:leading-[24px] pt-[30px]">
                  Co Founder
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              {/* <div className="md:w-[372.942px] md:h-[372px] w-[270.942px] h-[270px] flex justify-center items-center flex-shrink-0 rounded-[47.089px] bg-[#FEA821]"> */}
                <img
                  src={img4}
                  alt="user1"
                  className=""
                />
              {/* </div> */}
              <div className="pt-[50px] pb-[130px]">
                <h5 className="text-[#06113C] text-center font-lexend-deca text-[25px] md:text-[39px] font-bold leading-[2.5px] md:leading-[32.5px]">
                  Sheikh Usman Salem
                </h5>
                <p className="text-[#454545] text-center font-lexend-deca text-[16px] md:text-[26px] font-normal leading-[14px] md:leading-[24px] pt-[30px]">
                  General Manager
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              {/* <div className="md:w-[372.942px] md:h-[372px] w-[270.942px] h-[270px] flex justify-center items-center flex-shrink-0 rounded-[47.089px] bg-[#FEA821]"> */}
                <img
                  src={img2}
                  alt="user1"
                  className=""
                />
              {/* </div> */}
              <div className="pt-[50px] pb-[130px]">
                <h5 className="text-[#06113C] text-center font-lexend-deca text-[25px] md:text-[39px] font-bold leading-[2.5px] md:leading-[32.5px]">
                  Mudassar Ranjha
                </h5>
                <p className="text-[#454545] text-center font-lexend-deca text-[16px] md:text-[26px] font-normal leading-[14px] md:leading-[24px] pt-[30px]">
                Team Lead - Application<br /> & Development
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              {/* <div className="md:w-[372.942px] md:h-[372px] w-[270.942px] h-[270px] flex justify-center items-center flex-shrink-0 rounded-[47.089px] bg-[#FEA821]"> */}
                <img
                  src={img3}
                  alt="user1"
                  className=""
                />
              {/* </div> */}
              <div className="pt-[50px] pb-[130px]">
                <h5 className="text-[#06113C] text-center font-lexend-deca text-[25px] md:text-[39px] font-bold leading-[2.5px] md:leading-[32.5px]">
                  Kashif Mushtaq
                </h5>
                <p className="text-[#454545] text-center font-lexend-deca text-[16px] md:text-[26px] font-normal leading-[14px] md:leading-[24px] pt-[30px]">
                  Business Development <br /> Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <div className="px-[30px] lg:px-[120px]">
  <div className="pt-[110px] ">
    <p className="text-[#FEA821] font-lexend-deca text-[17px] font-semibold leading-[22.1px] text-center">
      OUR TEAM
    </p>
    <h3 className="text-black text-center font-inter text-[35px] md:text-[46px] font-bold leading-[45.2px] md:leading-[55.2px] pt-[2px] pb-24">
      Meet Our Professional Team
    </h3>

    <div className="flex flex-wrap lg:justify-between justify-center ">
      {[
        {
          img: person1,
          name: "Mujahid Khokhar",
          position: "Co Founder",
        },
        {
          img: person2,
          name: "Mudassar Ranjha",
          position: "Chief Executive Officer",
        },
        {
          img: person3,
          name: "Kashif Mushtaq",
          position: "Business Development Manager",
        },
        {
          img: person4,
          name: "Sheikh Usman Salem",
          position: "General Manager",
        },
      ].map((member, index) => (
        <motion.div
          key={index}
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}  
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="md:w-[372.942px] md:h-[372px] w-[270.942px] h-[270px] flex justify-center items-center flex-shrink-0 rounded-[47.089px] bg-[#FEA821]">
            <img src={member.img} alt={member.name} className="w-[200px] md:w-auto" />
          </div>
          <div className="pt-[50px] pb-[130px]">
            <h5 className="text-[#06113C] text-center font-lexend-deca text-[25px] md:text-[39px] font-bold leading-[2.5px] md:leading-[32.5px]">
              {member.name}
            </h5>
            <p className="text-[#454545] text-center font-lexend-deca text-[16px] md:text-[26px] font-normal leading-[14px] md:leading-[24px] pt-[30px]">
              {member.position}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div> */
}
