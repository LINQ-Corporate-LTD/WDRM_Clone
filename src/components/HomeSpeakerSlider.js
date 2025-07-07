import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import speaker1 from "../../src/assets/images/speaker1.png";
import speaker2 from "../../src/assets/images/speaker2.png";
import speaker3 from "../../src/assets/images/speaker3.png";
import speaker4 from "../../src/assets/images/speaker4.png";
import speaker5 from "../../src/assets/images/speaker5.png";
import speaker6 from "../../src/assets/images/speaker6.png";

const speakers = [
  {
    name: "Maher Al Kaabi",
    company: "Alserkal Group",
    img: speaker1,
  },
  {
    name: "Ahmed Yousry",
    company: "ACWA Power",
    img: speaker2,
  },
  {
    name: "Oren Heymans",
    company: "Entegris",
    img: speaker3,
  },
  {
    name: "Anton Borodastov",
    company: "Membranium",
    img: speaker4,
  },
  {
    name: "Ignacio Rodriguez",
    company: "DESALA",
    img: speaker5,
  },
  {
    name: "Lars Späth",
    company: "Passavant-Geiger GmbH",
    img: speaker6,
  },
];

const HomeSpeakerSlider = () => {
  const [centerIndex, setCenterIndex] = useState(5); // Start with middle speaker

  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: Math.min(8, speakers.length),
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCenterIndex(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <section className="w-full bg-[#080808] py-16 px-0">
        <div className="w-full overflow-hidden px-0 sm:px-6">
          {/* Section Header */}
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 px-4 max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase leading-tight">
                MEET OUR{" "}
                <span className="text-[#00baff] block sm:inline">
                  FEATURED SPEAKERS
                </span>
              </h2>
              <button className="flex items-center mt-6 text-[#00baff] text-xl font-semibold cursor-pointer uppercase hover:underline transition-all">
                Show all speakers
                <svg
                  className="ml-3 w-6 h-4"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                >
                  <path
                    d="M23.2071 8.70711C23.5976 8.31658 23.5976 7.68342 23.2071 7.29289L16.8431 0.928932C16.4526 0.538408 15.8195 0.538408 15.4289 0.928932C15.0384 1.31946 15.0384 1.95262 15.4289 2.34315L21.0858 8L15.4289 13.6569C15.0384 14.0474 15.0384 14.6805 15.4289 15.0711C15.8195 15.4616 16.4526 15.4616 16.8431 15.0711L23.2071 8.70711ZM0 9H22.5V7H0V9Z"
                    fill="#00baff"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Speakers Carousel */}
          <div className="relative min-h-[420px]">
            <Slider {...settings} className="featured-speakers-slider">
              {speakers.map((speaker, idx) => {
                const isCenter = idx === centerIndex;

                return (
                  <div key={idx} className="focus:outline-none">
                    <div className="relative justify-center items-end h-[350px]">
                      <div
                        className={`relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group
                          ${
                            isCenter
                              ? "z-30 w-[340px] h-[400px] scale-[1.15] shadow-2xl"
                              : "z-10 w-[300px] h-[320px] opacity-80 group-hover:opacity-100"
                          }`}
                      >
                        <img
                          src={speaker.img}
                          alt={speaker.name}
                          className="w-full h-full object-cover transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p
                            className={`text-white font-bold transition-all duration-300 ${
                              isCenter ? "text-2xl mb-2" : "text-lg mb-1"
                            }`}
                          >
                            {speaker.name}
                          </p>
                          <p
                            className={`text-[#ffffff] transition-all duration-300 ${
                              isCenter ? "text-lg mb-2" : "text-sm"
                            }`}
                          >
                            {speaker.company}
                          </p>
                        </div>

                        {isCenter && (
                          <div className="absolute bottom-12 right-6">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                              <span className="text-white text-3xl font-bold leading-none">
                                +
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .featured-speakers-slider .slick-slide {
          transition: all 0.5s ease;
        }

        .featured-speakers-slider .slick-list {
          overflow: visible;
        }

        .featured-speakers-slider .slick-track {
          display: flex;
          align-items: center;
        }

        .featured-speakers-slider .slick-dots,
        .featured-speakers-slider .slick-arrow {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default HomeSpeakerSlider;