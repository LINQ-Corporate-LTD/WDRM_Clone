import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
const emailImage =
  "https://www.desalination-resource-recovery.com/images/icons/icon-email.png";
const emailIcon =
  "https://www.desalination-resource-recovery.com/images/icons/msg.png";
const ContactUs = () => {
  return (
    <>
      <Navbar forceScrolled />
      {/* code for contact us page form */}
      <div
        className="pt-[150px] pb-[100px]"
        style={{ backgroundColor: "#080808" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto">
            <h2 className="text-white text-[36px] font-extrabold m-0 p-0 text-center uppercase">
              REQUEST A CALL BACK
            </h2>
            <form className="flex flex-col items-center justify-center mt-[42px]">
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-center w-[calc(50%-15px)]">
                  <input
                    name="fullname"
                    type="text"
                    placeholder="Full Name *"
                    className="bg-white border-none rounded-[2px] h-[48px] outline-none px-[23px] w-full"
                  />
                </div>
                <div className="flex flex-col items-center w-[calc(50%-15px)]">
                  <input
                    name="companyname"
                    type="text"
                    placeholder="Company Name *"
                    className="bg-white border-none rounded-[2px] h-[48px] outline-none px-[23px] w-full"
                  />
                </div>
              </div>
              <div className="mb-[23px] mt-[23px] flex justify-between w-full">
                <div className="flex flex-col items-center w-[calc(50%-15px)]">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    className="bg-white border-none rounded-[2px] h-[48px] outline-none px-[23px] w-full"
                  />
                </div>
                <div className="flex flex-col items-center w-[calc(50%-15px)]">
                  <input
                    name="mobilenumber"
                    type="number"
                    placeholder="Mobile Number *"
                    className="bg-white border-none rounded-[2px] h-[48px] outline-none px-[23px] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mb-[23px] w-full">
                <textarea
                  name="message"
                  placeholder="Message"
                  cols={30}
                  rows={6}
                  className="border-none rounded-[2px] h-[185px] outline-none px-[23px] py-[20px] resize-none w-full"
                ></textarea>
              </div>
              <div className="flex flex-row items-center justify-between w-full bg-white rounded-[2px] py-[20px] pr-[40px] pl-[20px]">
                <div className="items-center flex flex-row justify-between w-full">
                  <div className="flex items-center w-max">
                    <label className="text-[#777] text-[15px] font-bold whitespace-nowrap w-max m-0">
                      Tell me more about
                    </label>
                  </div>
                  <div className="flex items-center w-max">
                    <input
                      className="bg-white border-none rounded-[2px] h-[48px] outline-none w-full"
                      type="checkbox"
                    ></input>
                    <label className="text-[#777] text-[15px] font-bold ml-[20px] whitespace-nowrap w-max">
                      Becoming a Speaker
                    </label>
                  </div>
                  <div className="flex items-center w-max">
                    <input
                      className="bg-white border-none rounded-[2px] h-[48px] outline-none w-full"
                      type="checkbox"
                    ></input>
                    <label className="text-[#777] text-[15px] font-bold ml-[20px] whitespace-nowrap w-max">
                      Sponsorship packages
                    </label>
                  </div>
                  <div className="flex items-center w-max">
                    <input
                      className="bg-white border-none rounded-[2px] h-[48px] outline-none w-full"
                      type="checkbox"
                    ></input>
                    <label className="text-[#777] text-[15px] font-bold ml-[20px] whitespace-nowrap w-max">
                      Attending the show
                    </label>
                  </div>
                </div>
              </div>
              <button
                className="bg-transparent border border-[hsla(0,0%,100%,0.753)] rounded-[2px] text-white cursor-pointer text-[20px] font-extrabold h-[50px] mt-[50px] min-w-[230px] px-[50px] uppercase transition duration-300 hover:bg-white hover:text-[#181818]"
                type="submit"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* code for contact us page Email Us */}
      <div className="mx-auto max-w-[1200px] w-full pt-[100px] pb-[80px]">
        <h1 className="text-[#181818] flex text-[36px] font-extrabold justify-center m-0 p-0 text-center uppercase">
          <img
            className="h-auto mr-[20px] w-[58px]"
            src={emailImage}
          ></img>
          <span className="text-[#181818] mt-[5px] mb-0 p-0">Email Us</span>
        </h1>
        <p className="text-[#181818] text-[16px] font-semibold leading-[28px] mt-[38px] mb-[43px] mx-auto text-center w-[91%]">
          Have questions or need assistance? We're just an email away. Simply
          click an option below to open an email. Our responsive team is
          committed to providing answers on everything from event details to
          registration. We're here to help and excited to hear from you!
        </p>
        <div className="flex flex-wrap justify-between max-w-[1240px] w-full">
            <div className="bg-[#080808] rounded-[2px] mb-[20px] p-[45px] w-[49%]">
                <h5 className="text-[#00baff] text-[24px] font-extrabold mb-[30px] p-0 text-left uppercase">Delegate Registrations:</h5>
                <h6 className="text-white text-[22px] font-extrabold mb-[5px] p-0 text-left uppercase">Delegates Support Team</h6>
                <p className="text-white text-[18px] font-bold mb-[18px] p-0 text-left" style={{visibility:'hidden'}}>Hidden</p>
                <a className="flex items-center text-white text-[16px] font-medium m-0 p-0 underline" href="mailto:delegates@iq-hub.com?subject=Desalination & Resource Recovery 2025">
                    <img className="mr-[15px]" src={emailIcon} alt="Email Icon" height={12} width={18}></img>
                    delegates@iq-hub.com
                </a>
            </div>
            <div className="bg-[#080808] rounded-[2px] mb-[20px] p-[45px] w-[49%]">
                <h5 className="text-[#00baff] text-[24px] font-extrabold mb-[30px] p-0 text-left uppercase">Group Sales Team:</h5>
                <h6 className="text-white text-[22px] font-extrabold mb-[5px] p-0 text-left uppercase">Ethan Mitchell</h6>
                <p className="text-white text-[18px] font-bold mb-[18px] p-0 text-left" style={{visibility:'visible'}}>Group Sales Director</p>
                <a className="flex items-center text-white text-[16px] font-medium m-0 p-0 underline" href="mailto:ethan.mitchell@iq-hub.com?subject=Desalination & Resource Recovery 2025">
                    <img className="mr-[15px]" src={emailIcon} alt="Email Icon" height={12} width={18}></img>
                    ethan.mitchell@iq-hub.com
                </a>
            </div>
            <div className="bg-[#080808] rounded-[2px] mb-[20px] p-[45px] w-[49%]">
                <h5 className="text-[#00baff] text-[24px] font-extrabold mb-[30px] p-0 text-left uppercase">Sponsorship & Media Partners:</h5>
                <h6 className="text-white text-[22px] font-extrabold mb-[5px] p-0 text-left uppercase">LEE NAVARRO</h6>
                <p className="text-white text-[18px] font-bold mb-[18px] p-0 text-left" style={{visibility:'visible'}}>Event & Marketing Manager</p>
                <a className="flex items-center text-white text-[16px] font-medium m-0 p-0 underline" href="mailto:lee.navarro@iq-hub.com?subject=Desalination & Resource Recovery 2025">
                    <img className="mr-[15px]" src={emailIcon} alt="Email Icon" height={12} width={18}></img>
                    lee.navarro@iq-hub.com
                </a>
            </div>
            <div className="bg-[#080808] rounded-[2px] mb-[20px] p-[45px] w-[49%]">
                <h5 className="text-[#00baff] text-[24px] font-extrabold mb-[30px] p-0 text-left uppercase">Conference Content & Speaking:</h5>
                <h6 className="text-white text-[22px] font-extrabold mb-[5px] p-0 text-left uppercase">Sean Collins</h6>
                <p className="text-white text-[18px] font-bold mb-[18px] p-0 text-left" style={{visibility:'visible'}}>Conference Producer</p>
                <a className="flex items-center text-white text-[16px] font-medium m-0 p-0 underline" href="mailto:sean.collins@iq-hub.com?subject=Desalination & Resource Recovery 2025">
                    <img className="mr-[15px]" src={emailIcon} alt="Email Icon" height={12} width={18}></img>
                    sean.collins@iq-hub.com
                </a>
            </div>

        </div>
      </div>
        <SubscribeForm />
        <Footer />
    </>
  );
};
export default ContactUs;
