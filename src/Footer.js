import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-black mx-auto pt-[60px] sm:pt-[70px] md:pt-[90px] lg:pt-[100px] xl:pt-[120px]">
      <div className="w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <div className="flex justify-start mb-[50px] overflow-visible">
          <div className="flex items-center justify-start max-h-[68px] overflow-visible relative w-[24%]">
            <div>
              <img
                className="cursor-pointer h-max max-w-[150px] min-w-[100px] object-contain w-full"
                src="https://www.desalination-resource-recovery.com/api/images/logo/1742534509561.png"
                alt="WDRM Logo"
                height={64}
              ></img>
            </div>
          </div>
          <div className="flex justify-between max-h-[68px] w-[71%]">
            <div className="flex flex-col">
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Event Details
              </a>
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Speakers
              </a>
            </div>
            <div className="flex flex-col">
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Sponsors
              </a>
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Venue
              </a>
            </div>
            <div className="flex flex-col">
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Program
              </a>
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Benefits
              </a>
            </div>
            <div className="flex flex-col">
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Media
              </a>
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-col">
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Gallery
              </a>
              <a
                className="text-white text-[14px] font-bold leading-[35px] no-underline uppercase"
                href="/home"
              >
                Faq
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-[#5e5e5e] m-0 p-0 w-full"></div>
        <div className="flex justify-start pt-[52px] pb-[60px]">
          <div className="flex items-start justify-start pl-[5px] w-[24%]">
            <a
              target="_blank"
              href="mailto:delegates@iq-hub.com?subject=Desalination & Resource Recovery 2025"
              className="mr-[16px] no-underline"
            >
              <img
                className="h-[30px] w-[30px]"
                src="https://www.desalination-resource-recovery.com/images/icons/icon-mail.png"
                alt="Email"
                width={20}
                height={20}
              ></img>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/showcase/smart-water-utilities/"
              className="mr-[0px] no-underline"
            >
              <img
                className="h-[30px] w-[30px]"
                src="https://www.desalination-resource-recovery.com/images/icons/icon-linkedin.png"
                alt="Email"
                width={20}
                height={20}
              ></img>
            </a>
          </div>
          <div className="flex items-start justify-between w-[71%]">
            <div className="w-[50%] flex flex-col items-start justify-start">
              <h5 className="text-white text-[16px] font-extrabold mb-[25px] whitespace-nowrap">
                OTHER EVENTS
              </h5>
              <a
                className="text-white text-[14px] font-medium leading-[40px] m-0 no-underline"
                href="https://www.water-resource-recovery.com/"
                target="_blank"
                style={{ textTransform: "uppercase", pointerEvents: "auto" }}
              >
                {" "}
                Water Resource Recovery USA 2025
              </a>
              <a
                className="text-white text-[14px] font-medium leading-[40px] m-0 no-underline"
                href=" https://www.membrane-technology-show.com/"
                target="_blank"
                style={{ textTransform: "uppercase", pointerEvents: "auto" }}
              >
                {" "}
                Membrane Technology USA 2025
              </a>
              <a
                className="text-white text-[14px] font-medium leading-[40px] m-0 no-underline"
                href="https://www.europe.pfas-summit.com/"
                target="_blank"
                style={{ textTransform: "uppercase", pointerEvents: "auto" }}
              >
                {" "}
                PFAS Treatment Europe 2025
              </a>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h5 className="text-white text-[16px] font-extrabold mb-[25px] whitespace-nowrap">
                QUICK LINKS
              </h5>
              <a
                className="text-white text-[14px] font-medium leading-[40px] m-0 no-underline"
                href="/booking"
              >
                {" "}
                Register
              </a>
              <a
                className="text-white text-[14px] font-medium leading-[40px] m-0 no-underline"
                href="/who-should-attend"
              >
                {" "}
                Benefits
              </a>
              <a
                className="text-white text-[14px] font-medium leading-[40px] m-0 no-underline"
                href="/faq"
              >
                {" "}
                FAQ
              </a>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h5 className="text-white text-[16px] font-extrabold mb-[25px] whitespace-nowrap">
                CONTACT US
              </h5>
              <a
                className="text-white text-[14px] font-medium leading-[40px] m-0 no-underline"
                href="mailto:delegates@iq-hub.com?subject=Desalination & Resource Recovery 2025"
              >
                {" "}
                Email
              </a>
              <a
                className="text-white text-[14px] font-medium leading-[40px] m-0 no-underline"
                href="/contact-us"
              >
                {" "}
                Customer Support
              </a>
              <a
                className="text-white text-[14px] font-medium leading-[40px] m-0 no-underline"
                href="/terms-and-conditions"
              >
                {" "}
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-[#5e5e5e] m-0 p-0 w-full"></div>
        <div className="flex items-center justify-between my-[25px]">
          <p className="text-white text-[14px] m-0 p-0 mb-[18px]">
            <a className="text-white no-underline" href="/privacy-policy">
              Privacy Policy
            </a>
            <span className="text-white mx-[3px] my-0"> | </span>
            IQ International PTe. LTD
          </p>
          <p className="text-white text-[14px] m-0 p-0">@2025 Desilation & Resource Recovery</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
