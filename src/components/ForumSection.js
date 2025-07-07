import React from "react";
const bgIg =
  "https://www.desalination-resource-recovery.com/api/images/1742798974985.png";
const ForumSection = () => (
  <section className="relative w-full bg-[#00baff] py-20 overflow-hidden">
    {/* Swirl Graphic (SVG) */}
    <img
      src={bgIg}
      className="hidden md:block absolute right-0 top-0 h-full w-1/2 opacity-40 z-0"
    />
    <h2 className="text-[#080808] text-[36px] font-extrabold leading-[32px] mx-auto mb-[50px] max-w-[1200px] uppercase w-full">
      THE PREMIER FORUM FOR NEXT–GEN DESALINATION AND RESOURCE RECOVERY
      SOLUTIONS
    </h2>
    <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
        <p className="text-[#080808] text-[18px] font-normal leading-[28px] mb-[40px]">
          Welcome to Desalination & Resource Recovery 2025, where utility
          leaders and desalination experts come together to explore the latest
          advancements in sustainable water management and resource recovery.
        </p>
        <p className="text-[#080808] text-[18px] font-normal leading-[28px] mb-[40px]">
          The desalination industry faces challenges such as high energy
          consumption, costs, and environmental impacts. Innovations in advanced
          membranes, AI optimisation, renewable energy, and zero liquid
          discharge are driving energy-efficient solutions while transforming
          waste into valuable resources.
          <br />
          <br />
          Join us to explore groundbreaking technologies, connect with industry
          leaders, and shape the future of sustainable water management and
          resource recovery.
        </p>
      </div>
      {/* Right: Video */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-xl aspect-video bg-black rounded shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://player.vimeo.com/video/236701630"
            title="Event Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default ForumSection;
