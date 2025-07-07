import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const bg_img = "https://www.desalination-resource-recovery.com/api/images/1742798965766.png"

const stats = [
  { value: 100, suffix: "+", label: "INDUSTRY TOPICS" },
  { value: 8, suffix: "+", label: "NETWORKING EVENTS" },
  { value: 50, suffix: "+", label: "LEADING EXPERTS" },
  { value: 20, suffix: "+", label: "Q&A SESSIONS" },
];

const CountSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="h-full">
        <div className="bg-no-repeat relative h-80 flex items-center z-1 bg-[#00baff] bg-cover bg-left py-20 text-[#181818]">
        <img src={bg_img} className="absolute top-0 z-0 object-contain opacity-60 pointer-events-none select-none"/>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-20 z-10">
            {stats.map((stat, i) => (
            <div key={i}>
                <h3 className="text-[60px] font-extrabold leading-none">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                {stat.suffix}
                </h3>
                <p className="text-lg font-semibold mt-2">{stat.label}</p>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CountSection;
