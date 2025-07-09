import React from "react";
import { useNavigate } from "react-router-dom";
import ticket_img from "../../src/assets/images/bg.png"
import bg_img from "../../src/assets/images/bg_img2.png"
import { Pointer } from "lucide-react";

const PastAttandessSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-[#14c0fff8] py-12 overflow-hidden">
    <img src={bg_img} className="hidden md:block absolute right-0 top-0 h-full w-1/2 opacity- z-2 "/>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-black z-10 relative">
          {/* Expert Speakers */}
          <div>
            <h2 className="text-black text-2xl font-bold mb-4 tracking-wider">EXPERT SPEAKERS</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold text-lg">Maher Al Kaabi</p>
                <p className="text-gray-600 text-sm">Alserkal Group</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold text-lg">Ahmed Yousry</p>
                <p className="text-gray-600 text-sm">ACWA Power</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold text-lg">Oren Heymans</p>
                <p className="text-gray-600 text-sm">Entegris</p>
              </div>
            </div>
            <a onClick={() => navigate("/featured-Speakers")} className="text-black mt-4 flex items-center hover:underline text-sm font-bold" style={{cursor:'Pointer'}}>
              SHOW MORE SPEAKERS
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Past Attendees */}
          <div>
            <h2 className="text-black text-2xl font-bold mb-4 tracking-wider">PAST ATTENDEES</h2>
            <ul className="bg-white text-black py-3 space-y-4 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Ramboll Group
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                SAUR
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                SmartValve
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Royal Haskoning DHV
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                ENOWA-NEOM
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Flowless
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Azer Group
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Upande Limited
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Deltares
              </li>
            </ul>
            <a href="#" className="text-black mt-4 flex items-center hover:underline text-sm font-bold">
              SHOW MORE ATTENDEES
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* CTA Card */}
          <div className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
             <img src={ticket_img} />
              <button className="bg-black text-white mt-3 py-2 px-6 rounded hover:bg-[#bfbfbf] hover:!text-black transition text-sm font-semibold" onClick={() => navigate("/booking")}>
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
     

    </div>
  );
};

export default PastAttandessSection;
