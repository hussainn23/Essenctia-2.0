import React from "react";
import Banner from "../components/Banner";
import contactImage from "../images/contactImage.png";
import ContactCard from "../components/ContactCard";
import email from "../images/email.svg";
import location from "../images/location.svg";
import phone from "../images/phone.svg";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div>
      <Banner title={"Contact Us"} bannerSrc={contactImage} />
      <div className="flex flex-wrap flex-row  md:justify-between justify-center px-[30px] lg:px-[120px] pt-[118px]  ">
        <ContactCard
          imgUrl={phone}
          title={"Phone Number"}
          numbers={["042-37882089", "0348-8000158"]}
        />
        <div className="2xl:w-[537px] xl:w-[387px] lg:w-[387px] md:w-[350px] w-full h-[251px] mt-10 md:mt-0 flex justify-center items-center flex-shrink-0 rounded-[32.308px] bg-[#FEA821]">
          <div>
            <div className="flex justify-center items-center ">
              <div className="bg-[#fff] rounded-full  flex  w-[67.2px] h-[67.2px] p-[16.8px] justify-center items-center flex-shrink-0">
                <img src={email} alt="phone" />
              </div>
            </div>
            <p className="text-[#fff] text-center font-open-sans text-[25.015px] md:text-[31.015px] font-semibold leading-[34.117px] capitalize pt-3">
              email address
            </p>

            <div className="flex flex-col pt-[18px]">
              <span className="text-white text-center font-segoe-ui text-[18.677px] md:text-[20.677px] font-normal leading-[31.015px]">
                Info@essenctia.com
              </span>
            </div>
          </div>
        </div>
        <ContactCard
          imgUrl={location}
          title={"Our location"}
          className=" mt-10 xl:mt-0"
          numbers={[
            <>
              E-2, Al Qadir Heights, Garden Town{" "}
              <br className="md:block hidden" /> Lahore 5400, Punjab Pakistan
            </>,
          ]}
        />
      </div>

      <div className="lg:px-[120px] px-[30px] pt-[60px]">
        <p className="text-[#949494] font-inter md:text-[14px] text-[12px] text-center font-semibold leading-[14px] tracking-[2.6px] uppercase pb-2">
          CONTACT NOW
        </p>
        <h4 className="text-black font-inter md:text-[46px] text-[36px] font-bold leading-[55.2px] text-center pb-10">
          Leave Us a Message
        </h4>
        <div>
          <div className="md:flex md:flex-row md:justify-between flex flex-col pb-6 gap-7">
            <input
              type="text"
              placeholder="First Name"
              className=" h-[71px] pl-[30px] w-full    rounded-[5px] bg-[#F6F5F2] focus:outline-none focus:border-none"
            />
            <input
              type="text"
              placeholder="First Name"
              className=" h-[71px] pl-[30px] w-full  rounded-[5px] bg-[#F6F5F2] focus:outline-none focus:border-none"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              className="inline-flex h-[71px] pl-[30px] 2xl:w-full justify-end items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] mb-6 focus:outline-none focus:border-none"
            />
            <input
              type="text"
              placeholder="First Name"
              className="inline-flex h-[71px] pl-[30px] 2xl:w-full justify-end items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] mb-6 focus:outline-none focus:border-none"
            />
            <textarea
              placeholder="Your message"
              className="flex w-full h-[199px] p-[18px] pl-[30px] items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] resize-none focus:outline-none focus:border-none"
            ></textarea>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center pt-[60px] pb-[100px]">
        <Button
          text={"Submit"}
          padding="p-[4px_4px_4px_161px]"
          gap="gap-[134px]"
        />
      </div> */}
      <div className="flex justify-center pb-[80px] px-[30px] lg:px-[120px]">
        <div className=" 2xl:w-[1687px] w-full md:h-[447px] h-[247px] flex-shrink-0 rounded-[30px] overflow-hidden ">
          {/* You can replace the following with an actual map implementation */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509049!2d144.953736315318!3d-37.81720997975155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11c2f5%3A0x5045675218ceed20!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1617321979647!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;