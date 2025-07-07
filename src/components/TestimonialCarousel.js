 import { useState, useEffect } from "react";
import t5 from "../../src/assets/images/testominal/testominal5.webp"; // quote icon only
import t1 from "../../src/assets/images/testominal/testominal.webp";
import t2 from "../../src/assets/images/testominal/testominal2.webp";
import t3 from "../../src/assets/images/testominal/testominal3.webp";

const testimonials = [
  {
    quote: "I met new parties that were active in this sector.",
    name: "Kelbij star",
    company: "Deltares",
    image: t1, // or t1
  },
  {
    quote:
      "It offered ideas for applying new technologies across the entire water industry value chain.",
    name: "Matthijs Stel",
    company: "Evides",
    image: t2, // or t2
  },
  {
    quote:
      "It proved fantastic for sharing knowledge and discovering innovative products.",
    name: "David Hurley",
    company: "AVK UK",
    image: t3, // or t3
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate next index
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        THEY'VE ATTENDED OUR EVENTS
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-2 gap-4 max-w-6xl mx-auto">
        {/* Top-left image */}
        <img
          src={testimonials[activeIndex].image}
          alt={testimonials[activeIndex].name}
          className="w-full h-full object-cover rounded"
        />

        {/* Top-right quote */}
        <div className="bg-white p-6 shadow-md rounded flex flex-col justify-center">
          <img src={t5} alt="quote icon" className="w-6 mb-4" />
          <p className="text-sm md:text-base text-gray-700">
            {testimonials[activeIndex].quote}
          </p>
          <h5 className="font-bold mt-4">{testimonials[activeIndex].name}</h5>
          <h5 className="text-sky-500 font-semibold">
            {testimonials[activeIndex].company}
          </h5>
        </div>

        {/* Top-right image */}
        <img
          src={testimonials[nextIndex].image}
          alt={testimonials[nextIndex].name}
          className="w-full h-full object-cover rounded"
        />

        {/* Bottom-left quote */}
        <div className="bg-white p-6 shadow-md rounded flex flex-col justify-center">
          <img src={t5} alt="quote icon" className="w-6 mb-4" />
          <p className="text-sm md:text-base text-gray-700">
            {testimonials[nextIndex].quote}
          </p>
          <h5 className="font-bold mt-4">{testimonials[nextIndex].name}</h5>
          <h5 className="text-sky-500 font-semibold">
            {testimonials[nextIndex].company}
          </h5>
        </div>

        {/* Bottom-middle image */}
        <img
          src={testimonials[(nextIndex + 1) % testimonials.length].image}
          alt={testimonials[(nextIndex + 1) % testimonials.length].name}
          className="w-full h-full object-cover rounded"
        />
        {/* <img
          src={testimonials[(nextIndex + 2) % testimonials.length].image}
          alt={testimonials[(nextIndex + 2) % testimonials.length].name}
          className="w-full h-full object-cover rounded"
        /> */}
        {/* Bottom-left quote */}
        <div className="bg-white p-6 shadow-md rounded flex flex-col justify-center">
          <img src={t5} alt="quote icon" className="w-6 mb-4" />
          <p className="text-sm md:text-base text-gray-700">
            {testimonials[nextIndex].quote}
          </p>
          <h5 className="font-bold mt-4">{testimonials[nextIndex].name}</h5>
          <h5 className="text-sky-500 font-semibold">
            {testimonials[nextIndex].company}
          </h5>
        </div>
        {/* (Optional) you can add more cells or leave the last cell empty */}
      </div>
    </section>
  );
}
