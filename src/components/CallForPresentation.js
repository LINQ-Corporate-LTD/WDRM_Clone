import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import FeaturedSpeaker from "./FeaturedSpeaker";
import { Users, Settings, TrendingUp, Megaphone } from "lucide-react";
const CallForPresentation = () => {
  const features = [
    {
      iconUrl:
        "https://www.desalination-resource-recovery.com/images/icons/icon-network.png",
      title: "NETWORK",
      description:
        "Connect with industry peers and experts to build valuable relationships. An opportunity to build your professional network in an environment fostering growth and collaboration.",
    },
    {
      iconUrl:
        "https://www.desalination-resource-recovery.com/images/icons/icon-learn.png",
      title: "LEARN",
      description:
        "Engage with leading tech and business leaders in the current landscape. Join industry thought leaders tackling major challenges, and dive into deeper discussions on cutting-edge topics.",
    },
    {
      iconUrl:
        "https://www.desalination-resource-recovery.com/images/icons/icon-lead-generation.png",
      title: "LEAD GENERATION",
      description:
        "Discover and connect with key industry players relevant to your business. Generate significant leads and broaden your corporate reach, enhancing your presence in the global market.",
    },
    {
      iconUrl:
        "https://www.desalination-resource-recovery.com/images/icons/icon-amplify.png",
      title: "AMPLIFY",
      description:
        "Join an exclusive gathering that draws journalists from top media outlets like Bloomberg, Financial Times, Forbes, and CNN Business. Elevate your message to a global audience.",
    },
  ];

  const styles = {
    title: {
      color: "#181818",
      fontSize: "36px",
      fontWeight: "800",
      lineHeight: "30px",
      margin: "0",
      textAlign: "center",
      textTransform: "uppercase",
    },
    swiperContainer: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 40px",
    },
    slide: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    speakerCard: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "30px 20px",
      textAlign: "center",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      width: "280px",
      margin: "0 auto",
    },
    speakerImage: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      margin: "0 auto 20px",
      border: "4px solid #ffffff",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
    },
    speakerName: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#1a1a1a",
      marginBottom: "8px",
      lineHeight: "1.2",
    },
    speakerCompany: {
      fontSize: "1rem",
      color: "#666666",
      fontWeight: "500",
      letterSpacing: "0.5px",
    },
    navigationButton: {
      backgroundColor: "#1a1a1a",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "18px",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
    },
    pagination: {
      marginTop: "40px",
    },
  };

  return (
    <>
      <Navbar forceScrolled />
      <div>
        <div
          style={{
            paddingTop: "200px",
            paddingBottom: "100px",
            backgroundColor: "rgb(241, 241, 241)",
          }}
        >
          <h1 style={styles.title} className="featured-speakers-title">
            MEET OUR FEATURED SPEAKERS
          </h1>
          <FeaturedSpeaker />
        </div>

        <div className="container-fluid p-0">
          {/* Benefits Section */}
          <div className="row no-gutters" style={{ minHeight: "100vh" }}>
            {/* Background Image Side */}
            <div
              className="col-lg-6 col-md-6 d-none d-md-block"
              style={{
                backgroundImage:
                  'url("https://www.desalination-resource-recovery.com/static/media/benefits1.f71bdc353409b0e5b816.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
              }}
            >
              {/* Optional overlay for better contrast */}
              <div
                className="w-100 h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
              ></div>
            </div>

            {/* Content Side */}
            <div className="col-lg-6 col-md-6 col-12 bg-white d-flex">
              <div
                style={{ maxWidth: "900px", padding: "95px 100px 95px 150px" }}
              >
                <h1
                  className="font-weight-bold mb-4"
                  style={{
                    fontSize: "2.5rem",
                    letterSpacing: "3px",
                    color: "#333",
                  }}
                >
                  CALLING ALL SPEAKERS
                </h1>

                <p
                  className="mb-4"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  The Desalination & Resource Recovery 2025 conference invites
                  paper submissions focusing on the following key topics:
                </p>

                <ul className="list-unstyled mb-5">
                  <li className="mb-3 d-flex">
                    <span
                      className="mr-3"
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      ■
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        color: "#333",
                      }}
                    >
                      Evaluating financial strategies and public-private
                      partnership models
                    </span>
                  </li>

                  <li className="mb-3 d-flex">
                    <span
                      className="mr-3"
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      ■
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        color: "#333",
                      }}
                    >
                      Enhancing process efficiency with advanced desalination
                      technologies
                    </span>
                  </li>

                  <li className="mb-3 d-flex">
                    <span
                      className="mr-3"
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      ■
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        color: "#333",
                      }}
                    >
                      Exploring innovative brine management and mineral recovery
                      systems
                    </span>
                  </li>

                  <li className="mb-3 d-flex">
                    <span
                      className="mr-3"
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      ■
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        color: "#333",
                      }}
                    >
                      Latest advancements in membrane technologies and clean
                      energy integration
                    </span>
                  </li>

                  <li className="mb-3 d-flex">
                    <span
                      className="mr-3"
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      ■
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        color: "#333",
                      }}
                    >
                      Utilising digital tools for real-time monitoring and
                      predictive maintenance
                    </span>
                  </li>

                  <li className="mb-3 d-flex">
                    <span
                      className="mr-3"
                      style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                    >
                      ■
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        color: "#333",
                      }}
                    >
                      Case studies and regulatory updates on sustainable water
                      management
                    </span>
                  </li>
                </ul>

                <p
                  className="mb-4"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  The Desalination & Resource Recovery 2025 event highlights
                  advanced technologies for sustainable desalination and
                  resource recovery, with a focus on process optimisation,
                  resource utilisation, and innovative water treatment
                  solutions.
                </p>

                <button
                  className="btn btn-dark btn-block font-weight-bold py-3"
                  style={{
                    backgroundColor: "#2c2c2c",
                    border: "none",
                    letterSpacing: "2px",
                    fontSize: "1rem",
                  }}
                >
                  SUBMIT YOUR PROPOSAL
                </button>
              </div>
            </div>
          </div>

          {/* Key Takeaways Section */}
          <div className="row no-gutters" style={{ minHeight: "100vh" }}>
            {/* Content Side */}
            <div className="col-lg-6 col-md-6 col-12 bg-white d-flex align-items-center">
              <div
                style={{ maxWidth: "900px", padding: "95px 100px 95px 150px" }}
              >
                <h1
                  className="font-weight-bold mb-4"
                  style={{
                    fontSize: "2.5rem",
                    letterSpacing: "3px",
                    color: "#333",
                    textTransform: "uppercase",
                  }}
                >
                  be a part of our multi-disciplined agenda...
                </h1>

                <p
                  className="mb-4"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  The Desalination & Resource Recovery 2025 forum will provide
                  professionals in relevant fields with a platform to share
                  their achievements and exchange ideas. The event will
                  emphasise networking and relationship-building, fostering
                  discussions on technical expertise and innovative solutions
                  for a challenging market. Additionally, attendees will have
                  opportunities to collaborate with allied industries and
                  explore new innovations for mutual benefit.
                </p>

                <p
                  className="mb-4"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#333",
                    fontWeight: "500",
                  }}
                >
                  Work alongside experts, elevate your profile, and contribute
                  to shaping the future of the desalination sector.
                </p>

                <button
                  className="btn btn-dark btn-block font-weight-bold py-3"
                  style={{
                    backgroundColor: "#2c2c2c",
                    border: "none",
                    letterSpacing: "2px",
                    fontSize: "1rem",
                  }}
                >
                  ADD TO CALENDAR
                </button>
              </div>
            </div>

            {/* Background Image Side */}
            <div
              className="col-lg-6 col-md-6 d-none d-md-block"
              style={{
                backgroundImage:
                  'url("https://www.desalination-resource-recovery.com/static/media/benefits2.10516737e5b8b580662d.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
              }}
            >
              {/* Optional overlay for better contrast */}
              <div
                className="w-100 h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-[#00baff] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
              {features.map((feature, index) => {
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-6">
                      <img
                        src={feature.iconUrl || "/placeholder.svg"}
                        alt={`${feature.title} icon`}
                        className="h-[73px]"
                        style={{display:'block', margin:'0 auto'}}
                      />
                    </div>
                    <h3 className="text-[26.96px] font-extrabold uppercase text-center mt-[38px] mb-[22px]">
                      {feature.title}
                    </h3>
                    <p className="text-[16px] font-semibold m-0 p-0 text-justify">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <SubscribeForm />
      <Footer />
    </>
  );
};

export default CallForPresentation;
