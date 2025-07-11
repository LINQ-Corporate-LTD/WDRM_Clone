import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import SubscribeForm from "./SubscribeForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/attandees.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const pastAttandeesArr = [
  {
    id: 1,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464041870.png",
    name: "Azer Group",
    createdAt: "2025-03-20T09:47:21.000Z",
  },
  {
    id: 2,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464100948.png",
    name: "Deltares",
    createdAt: "2025-03-20T09:48:20.000Z",
  },
  {
    id: 3,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464110667.png",
    name: "DYKA",
    createdAt: "2025-03-20T09:48:30.000Z",
  },
  {
    id: 4,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464133202.png",
    name: "ENOWA.NEOM",
    createdAt: "2025-03-20T09:48:53.000Z",
  },
  {
    id: 5,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464221949.png",
    name: "Ferrovial",
    createdAt: "2025-03-20T09:50:21.000Z",
  },
  {
    id: 6,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464230431.jpg",
    name: "Flowless",
    createdAt: "2025-03-20T09:50:30.000Z",
  },
  {
    id: 7,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464238074.png",
    name: "Georg Fischer",
    createdAt: "2025-03-20T09:50:38.000Z",
  },
  {
    id: 8,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464247019.png",
    name: "Ramboll Group",
    createdAt: "2025-03-20T09:50:47.000Z",
  },
  {
    id: 9,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464257742.png",
    name: "Royal Haskoning DHV",
    createdAt: "2025-03-20T09:50:57.000Z",
  },
  {
    id: 10,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464268630.png",
    name: "SAUR",
    createdAt: "2025-03-20T09:51:08.000Z",
  },
  {
    id: 11,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464281072.png",
    name: "SmartValve",
    createdAt: "2025-03-20T09:51:21.000Z",
  },
  {
    id: 12,
    logo: "https://www.desalination-resource-recovery.com/api/images/pastattendeeslogo/1742464302210.png",
    name: "Upande Limited",
    createdAt: "2025-03-20T09:51:42.000Z",
  },
];

const leadersArr = [
  {
    id: 1,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464332989.png",
    name: "ADDC",
    createdAt: "2025-03-20T09:52:12.000Z",
  },
  {
    id: 3,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464423314.png",
    name: "ADWEA",
    createdAt: "2025-03-20T09:53:43.000Z",
  },
  {
    id: 4,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464434400.png",
    name: "Algérienne des Eaux",
    createdAt: "2025-03-20T09:53:54.000Z",
  },
  {
    id: 6,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464447332.png",
    name: "Aqaba Water Company",
    createdAt: "2025-03-20T09:54:07.000Z",
  },
  {
    id: 7,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464467252.png",
    name: "Bahrain EWA",
    createdAt: "2025-03-20T09:54:27.000Z",
  },
  {
    id: 8,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464478492.png",
    name: "DEWA",
    createdAt: "2025-03-20T09:54:38.000Z",
  },
  {
    id: 9,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464737252.png",
    name: "EWEC",
    createdAt: "2025-03-20T09:58:57.000Z",
  },
  {
    id: 10,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464744678.png",
    name: "Greater Cairo Water Co. copy",
    createdAt: "2025-03-20T09:59:04.000Z",
  },
  {
    id: 11,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464872426.png",
    name: "KAHRAMAA",
    createdAt: "2025-03-20T10:01:12.000Z",
  },
  {
    id: 12,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464883538.png",
    name: "Marafiq",
    createdAt: "2025-03-20T10:01:23.000Z",
  },
  {
    id: 13,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464893612.jpg",
    name: "Mekorot",
    createdAt: "2025-03-20T10:01:33.000Z",
  },
  {
    id: 14,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464906734.jpg",
    name: "MEW Kuwait",
    createdAt: "2025-03-20T10:01:46.000Z",
  },
  {
    id: 15,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464916588.png",
    name: "Nama Water services",
    createdAt: "2025-03-20T10:01:56.000Z",
  },
  {
    id: 16,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464929327.png",
    name: "National Water Company",
    createdAt: "2025-03-20T10:02:09.000Z",
  },
  {
    id: 17,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742464989484.png",
    name: "ONEE",
    createdAt: "2025-03-20T10:03:09.000Z",
  },
  {
    id: 20,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742465015316.png",
    name: "Qatar Electricity & Water",
    createdAt: "2025-03-20T10:03:35.000Z",
  },
  {
    id: 23,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742465062492.png",
    name: "SEWA",
    createdAt: "2025-03-20T10:04:22.000Z",
  },
  {
    id: 24,
    logo: "https://www.desalination-resource-recovery.com/api/images/meettheoperators/1742465073714.png",
    name: "SWCC",
    createdAt: "2025-03-20T10:04:33.000Z",
  },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true,
  adaptiveHeight: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


const settings1 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const leaderChunks = chunkArray(leadersArr, 6);


const Attandees = () => {

  // const chunkArray = (array, chunkSize) => {
  //   const chunks = [];
  //   for (let i = 0; i < array.length; i += chunkSize) {
  //     chunks.push(array.slice(i, i + chunkSize));
  //   }
  //   return chunks;
  // };

  // const leaderChunks = chunkArray(leadersArr, 6);
  return (
    <>
      <Navbar forceScrolled />
      <div class="sponsors-section" style={{ paddingTop: "140px" }}>
        <h1 class="sponsors-title text-uppercase">
          past Attendees at our event
        </h1>

        <div class="container">
          <div class="row">
            {pastAttandeesArr.map((attandee) => (
              <div key={attandee.id} class="col-lg-4 col-md-6 col-12">
                <div class="sponsor-card">
                  <div class="sponsor-logo">
                    <img
                      src={attandee.logo}
                      alt={attandee.name}
                      className="w-1/2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="container-fluid agenda-section">
        <div class="container">
          <h1 class="section-title_news">TOPICS ON THE AGENDA</h1>

          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="topic-card">
                <h3 class="topic-title">
                  MOBILE DESALINATION PLANTS WITH EFFICIENT SOLUTIONS TO REDUCE
                  OPERATING COSTS
                </h3>
                <div class="topic-date">Day 1: MONDAY, 27 OCTOBER, 2025</div>
                <div class="topic-time">13:30 - 13:55</div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="topic-card">
                <h3 class="topic-title">
                  SEAWATER INTAKES PREFILTRATION FOR DESALINATION PROJECTS
                </h3>
                <div class="topic-date">Day 1: MONDAY, 27 OCTOBER, 2025</div>
                <div class="topic-time">14:00 - 14:25</div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="topic-card">
                <h3 class="topic-title">
                  PERSPECTIVES ON SEAWATER DESALINATION
                </h3>
                <div class="topic-date">Day 1: MONDAY, 27 OCTOBER, 2025</div>
                <div class="topic-time">15:00 - 15:25</div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <button class="view-more-btn_news">VIEW MORE TOPICS</button>
          </div>
        </div>
      </div>

      <div className="leader-slider-section" style={{ overflow: "visible" }}>
        <div className="container" style={{ overflow: "visible", position: "relative" }}>
          <h2 className="leader-title">MEET THE LEADERS</h2>

          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            className="custom-leader-swiper"
          >
            {leaderChunks.map((chunk, index) => (
              <SwiperSlide key={index}>
                <div className="container">
                  <div className="row">
                    {chunk.slice(0, 3).map((leader) => (
                      <div key={leader.id} className="col-lg-4 col-md-4 col-sm-4 mb-3">
                        <div className="leader-card">
                          <img
                            src={leader.logo}
                            alt={leader.name}
                            className="leader-img"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row">
                    {chunk.slice(3, 6).map((leader) => (
                      <div key={leader.id} className="col-lg-4 col-md-4 col-sm-4 mb-3">
                        <div className="leader-card">
                          <img
                            src={leader.logo}
                            alt={leader.name}
                            className="leader-img"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <SubscribeForm />
      <Footer />
    </>
  );
};

export default Attandees;
