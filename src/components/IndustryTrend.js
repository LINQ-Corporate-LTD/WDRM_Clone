import React from "react";

const IndustryTrend = () => {
  return (
    <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 uppercase">Industry Trends</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Brine Valorisation",
              "Water-Energy Nexus",
              "Next-Gen Membranes",
              "AI-Driven Systems",
              "Decarbonisation",
            ].map((trend, idx) => (
              <button
                key={idx}
                className="text-white border border-white px-6 py-2 text-sm font-semibold uppercase hover:bg-white hover:text-[black!important] hover:cursor-pointer transition duration-300"
              >
                {trend}
              </button>
            ))}
          </div>
        </div>
      </section>
  );
};

export default IndustryTrend;
