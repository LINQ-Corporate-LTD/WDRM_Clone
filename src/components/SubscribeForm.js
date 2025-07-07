import React, { useState, useEffect } from "react";

const SubscribeForm = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#00baff] max-h-[460px] py-[100px]">
      <div className="mx-auto max-w-[1200px] w-full">
        <div className="flex flex-col items-center justify-center bg-white rounded-[2px] mx-auto max-h-[265px] py-[50px] w-full">
          <h2 className="text-[#1a1a1a] text-[27px] font-extrabold leading-[24px] m-0 p-0 text-center capitalize">
            SUBSCRIBE FOR UPDATES
          </h2>
          <p className="text-[#464646] text-[16px] font-semibold hyphens-none mt-[20px] mb-[22px] p-0 text-center w-[70%]">
            By submitting, you agree to receive email communications from the
            event organizers, including upcoming promotions and discounted
            tickets, new, and access to related events.
          </p>
          <form className="flex flex-col items-center justify-between m-0 p-0 w-[90%]">
            <div className="flex items-center justify-between m-0 p-0 w-full">
              <input
                className="bg-[#ececec] border-none focus:border-none focus:outline-none rounded-[2px] h-[50px] mr-[22px] px-[20px] w-[415px]"
                name="name"
                type="text"
                placeholder="Name *"
              />
              <div className="h-[50px] mr-[22px] w-[415px]">
                <input
                  className="bg-[#ececec] border-none focus:border-none focus:outline-none rounded-[2px] h-[50px] mr-[22px] px-[20px] w-[415px]"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <button
                className="bg-[#00baff] border border-transparent rounded-[2px] text-white cursor-pointer text-[20px] font-extrabold h-[50px] uppercase transition duration-300 w-[225px] 
             hover:bg-white hover:text-[#00baff] hover:border-[#00baff]"
                type="submit"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SubscribeForm;
