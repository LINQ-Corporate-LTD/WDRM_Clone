import React from "react";

const topics = [
  {
    title: "Evaluating financial strategies and public-private partnership models",
    description:
      "Exploring market-driven finance and public-private partnerships in desalination funding, with a focus on risk mitigation.",
  },
  {
    title: "Exploring innovative brine management and mineral recovery systems",
    description:
      "Utilise high-recovery crystallizers, electrochemical processes, and ion-exchange resins to extract valuable solids and minimise waste streams.",
  },
  {
    title: "Utilising digital tools for real-time monitoring and predictive maintenance",
    description:
      "Harness AI-driven SCADA, sensor fusion, and anomaly detection to forecast membrane fouling, optimise dosing, and extend equipment lifespan.",
  },
  {
    title: "Enhancing process efficiency with advanced desalination technologies",
    description:
      "Discover how optimising desalination processes with cutting-edge technologies, such as hybrid systems and membrane distillation, improves energy efficiency.",
  },
  {
    title: "Latest advancements in membrane technologies and clean energy integration",
    description:
      "Use advanced membrane materials with superior flux and rejection, alongside clean or hybrid energy grids, for efficient, low-carbon desalination.",
  },
  {
    title: "Case studies and regulatory updates on sustainable water management",
    description:
      "Gain insights into end-user experiences and regulatory updates that promote sustainable water practices and reduce ecological impacts.",
  },
];

const KeyTopics = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-start sm:text-4xl font-extrabold text-gray-900 mb-12">
          Key Topics for 2025
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {topics.map((topic, index) => (
            <div key={index}>
              <h3 className="font-extrabold text-lg text-gray-900 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-700 text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="#program"
            className="inline-block text-1xl bg-gray-200 hover:bg-black hover:text-white text-black font-extrabold py-3 px-6 rounded transition"
          >
            VIEW PROGRAM
          </a>
        </div>
      </div>
    </section>
  );
};

export default KeyTopics;