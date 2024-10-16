import React, { useRef, useState } from "react";
import Banner from "../components/Banner";
import contactImage from "../images/contactImage.png";
import ContactCard from "../components/ContactCard";
import email from "../images/email.svg";
import location from "../images/location.svg";
import phone from "../images/phone.svg";
import Button from "../components/Button";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;

    if (!validateEmail(emailValue)) {
      setEmailError("Please enter a valid email address.");
      toast.error("Invalid email address!");
      return;
    }

    setEmailError("");

    emailjs
      .sendForm(
        "service_31p2vdp",
        "template_og2rtkf",
        form.current,
        "XohnXcZl3e1DVEBqg"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("We received your message and will contact you soon!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <ToastContainer />
      <Banner title={"Contact Us"} bannerSrc={contactImage} />
      <div className="md:justify-between justify-center px-[30px] lg:px-[120px] pt-[118px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ContactCard
            imgUrl={phone}
            title={"Phone Number"}
            numbers={["042-37882089", "0348-8000158"]}
          />
          <div className="w-auto h-[251px] flex justify-center items-center flex-shrink-0 rounded-[32.308px] bg-[#FEA821]">
            <div>
              <div className="flex justify-center items-center">
                <div className="bg-[#fff] rounded-full flex w-[67.2px] h-[67.2px] p-[16.8px] justify-center items-center flex-shrink-0">
                  <img src={email} alt="email" />
                </div>
              </div>
              <p className="text-[#fff] text-center font-open-sans text-[25.015px] md:text-[31.015px] font-semibold leading-[34.117px] capitalize pt-3">
                Email Address
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
            title={"Our Location"}
            className="px-2 md:px-0"
            numbers={[
              <>
                E-2, Al Qadir Heights, Garden Town
                <br className="md:block hidden" /> Lahore 5400, Punjab Pakistan
              </>,
            ]}
          />
        </div>
      </div>

      <div className="lg:px-[120px] px-[30px] pt-[60px]">
        <p className="text-[#949494] font-inter md:text-[14px] text-[12px] text-center font-semibold leading-[14px] tracking-[2.6px] uppercase pb-2">
          CONTACT NOW
        </p>
        <h4 className="text-black font-inter md:text-[46px] text-[36px] font-bold leading-[55.2px] text-center pb-10">
          Leave Us a Message
        </h4>
        <form ref={form} onSubmit={sendEmail}>
          <div className="md:flex md:flex-row md:justify-between flex flex-col pb-6 gap-7">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="h-[50px] md:h-[71px]  pl-[30px] w-full rounded-[5px] bg-[#F6F5F2] focus:outline-none focus:border-none"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="h-[50px] md:h-[71px]  pl-[30px] w-full rounded-[5px] bg-[#F6F5F2] focus:outline-none focus:border-none"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="inline-flex h-[50px] md:h-[71px]  pl-[30px] 2xl:w-full justify-end items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] mb-6 focus:outline-none focus:border-none"
            />

            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              required
              className="h-[50px] md:h-[71px]  pl-[30px] w-full rounded-[5px] mb-6 bg-[#F6F5F2] focus:outline-none focus:border-none"
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              className="flex w-full h-[199px] p-[18px] pl-[30px] items-center flex-shrink-0 rounded-[5px] bg-[#F6F5F2] resize-none focus:outline-none focus:border-none"
            ></textarea>
          </div>
          <div className="flex justify-center pt-[60px] pb-[100px]">
            <Button
              text={"Submit"}
              padding="lg:p-[4px_4px_4px_161px] md:p-[4px_4px_4px_100px] p-[4px_4px_4px_50px]"
              gap="lg:gap-[134px] md:gap-[100px] gap-[30px]"
              type="submit"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center pb-[80px] px-[30px] lg:px-[120px]">
        <div className=" w-full md:h-[447px] h-[247px] flex-shrink-0 rounded-[30px] overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=E-2%2C+Al+Qadir+Heights%2C+Garden+Town+Lahore+5400%2C+Punjab+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Al Qadir Heights Map"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
