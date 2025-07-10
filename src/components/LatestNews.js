import React from "react";

const LatestNews = () => {
  const latestNewsArr = {
    newsTopicsArr: [
      {
        id: 19,
        title: "Dubai’s Water Bet: Desalination Meets Clean Energy",
        shortdescription:
          "<p>A new plant uses cleaner technology and private capital to reshape water production in the Gulf</p>",
        url: "dubais-water-bet-desalination-meets-clean-energy",
        publishdate: "19 Mar 2025",
        image:
          "https://www.desalination-resource-recovery.com/api/images/news/1749734953604.jpg",
        category: {
          name: "REGULATORY",
        },
      },
      {
        id: 18,
        title: "Gulf nations turn to seawater for future security",
        shortdescription:
          "<p>Saudi Arabia and its neighbours are rapidly scaling up desalination to meet rising demand and reduce water risk</p>",
        url: "gulf-nations-turn-to-seawater-for-future-security",
        publishdate: "10 Mar 2025",
        image:
          "https://www.desalination-resource-recovery.com/api/images/news/1749734917207.jpg",
        category: {
          name: "MARKET TRENDS",
        },
      },
      {
        id: 17,
        title: "ACWA Power makes $693m move into Kuwait and Bahrain",
        shortdescription:
          "<p>A $693m acquisition marks the firm’s debut in Kuwait and expansion in Bahrain</p>",
        url: "acwa-power-makes-693m-move-into-kuwait-and-bahrain",
        publishdate: "26 Feb 2025",
        image:
          "https://www.desalination-resource-recovery.com/api/images/news/1749734884422.jpg",
        category: {
          name: "PARTNERSHIPS",
        },
      },
      {
        id: 16,
        title: "Cloud Seeding Gets Smart: UAE’s AI Rain Revolution",
        shortdescription:
          "<p>The Emirates hopes smarter rainmaking will ease water stress and cut carbon emissions</p>",
        url: "cloud-seeding-gets-smart-uaes-ai-rain-revolution",
        publishdate: "18 Feb 2025",
        image:
          "https://www.desalination-resource-recovery.com/api/images/news/1749734842198.jpg",
        category: {
          name: "TECHNOLOGY",
        },
      },
    ],

    latestNewsSingle: {
      id: 20,
      title: "Shale wastewater finds new purpose in Permian trial ",
      shortdescription:
        "<p>A desalination pilot in the Permian Basin turns oilfield brine into reusable water and recovers critical minerals too.</p>",
      url: "shale-wastewater-finds-new-purpose-in-permian-trial-",
      publishdate: "7 Apr 2025",
      image:
        "https://www.desalination-resource-recovery.com/api/images/news/1749734994367.jpg",
      category: {
        name: "INSIGHTS",
      },
    },
  };
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-12">
        {/* News Section */}
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-6">Latest News</h2>
          <ul className="divide-y-4 divide-cyan-500 text-sm">
            {latestNewsArr.newsTopicsArr.map((item, idx) => (
              <li key={item.id} className="py-10">
                <p className="text-cyan-500 font-bold uppercase">
                  {item.category.name}
                  <span className="float-right text-xs">
                    {item.publishdate}
                  </span>
                </p>
                <p className="font-semibold text-xl">{item.title}</p>
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
            {latestNewsArr.latestNewsSingle.title}
          </h3>
          <img
            src={latestNewsArr.latestNewsSingle.image}
            alt={latestNewsArr.latestNewsSingle.title}
            className="rounded w-full object-cover mb-2"
          />
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-cyan-500">
              {latestNewsArr.latestNewsSingle.category.name}
            </p>
            <p className="text-lg font-semibold text-cyan-500">
              {latestNewsArr.latestNewsSingle.publishdate}
            </p>
          </div>
          <p className="text-sm mt-2">
            {latestNewsArr.latestNewsSingle.shortdescription.replace(
              /<[^>]*>/g,
              ""
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
