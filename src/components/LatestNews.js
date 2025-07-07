import React from "react";

const LatestNews = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-12">
        {/* News Section */}
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-6">Latest News</h2>
          <ul className="divide-y-4 divide-cyan-500 text-sm">
            {[
              {
                category: "Insights",
                date: "7 Apr 2025",
                headline: "Shale wastewater finds new purpose in Permian trial",
              },
              {
                category: "Regulatory",
                date: "19 Mar 2025",
                headline: "Dubai's Water Bet: Desalination Meets Clean Energy",
              },
              {
                category: "Market Trends",
                date: "10 Mar 2025",
                headline: "Gulf nations turn to seawater for future security",
              },
              {
                category: "Partnerships",
                date: "26 Feb 2025",
                headline: "ACWA Power makes $693m move into Kuwait and Bahrain",
              },
            ].map((item, idx) => (
              <li key={idx} className="py-10">
                <p className="text-cyan-500 font-bold uppercase">
                  {item.category}
                  <span className="float-right text-xs">{item.date}</span>
                </p>
                <p className="font-semibold text-xl">{item.headline}</p>
              </li>
            ))}
          </ul>

          <p className="text-white mt-6 font-bold cursor-pointer hover:underline">
            Show All News →
          </p>
        </div>

        {/* Feature Article */}
        <div>
          <h3 className="text-3xl font-bold mb-4 pt-24">
            Shale wastewater finds new purpose in Permian trial
          </h3>
          <img
            src="https://www.desalination-resource-recovery.com/api/images/news/1749734994367.jpg"
            alt="AI Rain Revolution"
            className="rounded w-full object-cover mb-2"
          />
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-cyan-500">Technology</p>
            <p className="text-lg font-semibold text-cyan-500">18 Feb 2025</p>
          </div>
          <p className="text-sm mt-2">
            The Emirates hope smarter rainmaking will ease water stress and cut
            carbon emissions
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
