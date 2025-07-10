"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import LogoCarousel from "./LogoCarousel";

const speaker_arr = [
  {
    id: 1,
    name: "Lars Späth",
    title: "Passavant-Geiger GmbH",
    image:
      "https://www.desalination-resource-recovery.com/api/images/1748435872390.png",
  },
  {
    id: 2,
    name: "Robert Bryniak",
    title: "Golden Sands Management",
    subtitle: "(Marketing) Consulting",
    image:
      "https://www.desalination-resource-recovery.com/api/images/1748435943865.png",
  },
  {
    id: 3,
    name: "David Stephenson",
    title: "Independent Consultant",
    image:
      "https://www.desalination-resource-recovery.com/api/images/1748951845721.png",
  },
  {
    id: 4,
    name: "Maher Al Kaabi",
    title: "Alserkal Group",
    image:
      "https://www.desalination-resource-recovery.com/api/images/1748008565625.png",
  },
  {
    id: 5,
    name: "Ahmed Yousry",
    title: "ACWA Power",
    image:
      "https://www.desalination-resource-recovery.com/api/images/1748008658077.png",
  },
  {
    id: 6,
    name: "Oren Heymans",
    title: "Entegris",
    image:
      "https://www.desalination-resource-recovery.com/api/images/1748263603496.png",
  },
  {
    id: 7,
    name: "Anton Borodastov",
    title: "Membranium",
    image:
      "https://www.desalination-resource-recovery.com/api/images/1748263714868.png",
  },
  {
    id: 8,
    name: "Ignacio Rodriguez",
    title: "DESALA",
    image:
      "https://www.desalination-resource-recovery.com/api/images/1748435281015.png",
  },
];

const Speakers = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive breakpoints
  const isXSmall = windowWidth < 480;
  const isSmall = windowWidth >= 480 && windowWidth < 768;
  const isMedium = windowWidth >= 768 && windowWidth < 1024;
  const isLarge = windowWidth >= 1024 && windowWidth < 1440;
  const isXLarge = windowWidth >= 1440;
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  // Speaker card styles
  const speakerCardStyle = {
    position: "relative",
    overflow: "hidden",
    height: "300px",
    // marginBottom: "10px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  };

  const speakerImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  };

  const speakerOverlayStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // background:
    //   "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)",
    // padding: "25px 20px 20px",
    // color: "white",
  };

  const speakerNameStyle = {
    fontSize: isDesktop ? "20px" : isTablet ? "18px" : "16px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "6px",
    lineHeight: "1.2",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  };

  const speakerTitleStyle = {
    fontSize: isDesktop ? "15px" : isTablet ? "14px" : "13px",
    color: "#ffffff",
    fontWeight: "500",
    lineHeight: "1.3",
    opacity: "0.95",
    textShadow: "0 1px 3px rgba(0,0,0,0.5)",
  };

  const speakerSubtitleStyle = {
    fontSize: isDesktop ? "12px" : isTablet ? "11px" : "10px",
    color: "#888888",
    fontWeight: "400",
    marginTop: "2px",
    lineHeight: "1.2",
  };

  // Dynamic Styles for form section
  const sectionStyle = {
    paddingTop: isXSmall ? "30px" : isSmall ? "40px" : "50px",
    paddingBottom: isXSmall ? "30px" : isSmall ? "40px" : "50px",
    backgroundColor: "#080808",
    paddingLeft: isXSmall
      ? "15px"
      : isSmall
      ? "20px"
      : isMedium
      ? "30px"
      : "40px",
    paddingRight: isXSmall
      ? "15px"
      : isSmall
      ? "20px"
      : isMedium
      ? "30px"
      : "40px",
  };

  const containerStyle = {
    margin: "0 auto",
    maxWidth: isXSmall
      ? "100%"
      : isSmall
      ? "100%"
      : isMedium
      ? "900px"
      : isLarge
      ? "1200px"
      : "1400px",
    width: "100%",
  };

  const innerContainerStyle = {
    margin: "0 auto",
  };

  const headingStyle = {
    color: "white",
    fontSize: isXSmall
      ? "20px"
      : isSmall
      ? "24px"
      : isMedium
      ? "26px"
      : isLarge
      ? "30px"
      : "32px",
    fontWeight: "800",
    margin: "0",
    padding: "0",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: "1.2",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: isXSmall
      ? "25px"
      : isSmall
      ? "30px"
      : isMedium
      ? "35px"
      : "42px",
  };

  const formRowStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: isXSmall ? "15px" : isSmall ? "18px" : "23px",
    gap: isMobile ? "15px" : isTablet ? "20px" : "30px",
  };

  const inputContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: isMobile ? "100%" : "calc(50% - 15px)",
  };

  const inputStyle = {
    backgroundColor: "white",
    border: "none",
    borderRadius: "2px",
    height: isXSmall ? "44px" : "48px",
    outline: "none",
    padding: isXSmall ? "0 15px" : isSmall ? "0 20px" : "0 23px",
    width: "100%",
    fontSize: isXSmall ? "14px" : isSmall ? "15px" : "16px",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const textareaContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: isXSmall ? "18px" : "23px",
    width: "100%",
  };

  const textareaStyle = {
    border: "none",
    borderRadius: "2px",
    height: isXSmall
      ? "120px"
      : isSmall
      ? "140px"
      : isMedium
      ? "160px"
      : "185px",
    outline: "none",
    padding: isXSmall ? "15px" : isSmall ? "18px" : "20px 23px",
    resize: "none",
    width: "100%",
    fontSize: isXSmall ? "14px" : isSmall ? "15px" : "16px",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const submitButtonStyle = {
    backgroundColor: "transparent",
    border: "1px solid hsla(0,0%,100%,0.753)",
    borderRadius: "2px",
    color: "white",
    cursor: "pointer",
    fontSize: isXSmall ? "14px" : isSmall ? "16px" : isMedium ? "18px" : "20px",
    fontWeight: "800",
    height: isXSmall ? "45px" : "50px",
    marginTop: isXSmall ? "25px" : isSmall ? "35px" : "50px",
    minWidth: isXSmall ? "150px" : isSmall ? "180px" : "230px",
    padding: isXSmall ? "0 30px" : isSmall ? "0 40px" : "0 50px",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
  };

  // Event Handlers
  const handleSubmitHover = (e, isHovering) => {
    if (isHovering) {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "#181818";
    } else {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "white";
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  const handleCardHover = (e, isHovering) => {
    const card = e.currentTarget;
    const image = card.querySelector(".speaker-image");

    if (isHovering) {
      card.style.transform = "translateY(-8px)";
      card.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
      if (image) {
        image.style.transform = "scale(1.05)";
      }
    } else {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
      if (image) {
        image.style.transform = "scale(1)";
      }
    }
  };

  return (
    <div>
      <Navbar forceScrolled />
      <div
        className="speakers-section"
        style={{
          paddingTop: "150px",
          paddingBottom: "100px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h1
          className="featured_speakers_section-title"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "60px",
            color: "#222222",
            letterSpacing: "1px",
          }}
        >
          FEATURED SPEAKERS
        </h1>
        <div className="container">
          <div className="row" style={{ margin: "0 -15px" }}>
            {speaker_arr.map((speaker) => (
              <div
                key={speaker.id}
                className="col-lg-3 col-md-6 col-sm-6"
                style={{ padding: "0 15px", marginBottom: "30px" }}
              >
                <div
                  className="featured_speakers-card"
                  style={speakerCardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    // className="speaker-image"
                    style={speakerImageStyle}
                  />
                  {/* <div className="speaker-info" style={speakerOverlayStyle}> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" style={speakerOverlayStyle} />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p
                            className={`text-white font-bold transition-all duration-300 text-lg mb-1`}
                          >
                            {speaker.name}
                          </p>
                          <p
                            className={`text-[#ffffff] transition-all duration-300 text-sm`}
                          >
                            {speaker.title}
                          </p>
                        {/* </div> */}
                    {/* {speaker.subtitle && (
                      <div
                        className="speaker-subtitle"
                        style={speakerSubtitleStyle}
                      >
                        {speaker.subtitle}
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={sectionStyle}>
        <div style={containerStyle}>
          <div style={innerContainerStyle}>
            <h2 style={headingStyle}>
              BECOME A SPEAKER & JOIN THE CONVERSATION
            </h2>
            <form style={formStyle} onSubmit={handleFormSubmit}>
              <div style={formRowStyle}>
                <div style={inputContainerStyle}>
                  <input
                    name="fullname"
                    type="text"
                    placeholder="Full Name *"
                    style={inputStyle}
                    required
                  />
                </div>
                <div style={inputContainerStyle}>
                  <input
                    name="companyname"
                    type="text"
                    placeholder="Company Name *"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
              <div style={formRowStyle}>
                <div style={inputContainerStyle}>
                  <input
                    name="mobilenumber"
                    type="tel"
                    placeholder="Mobile Number *"
                    style={inputStyle}
                    required
                  />
                </div>
                <div style={inputContainerStyle}>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
              <div style={textareaContainerStyle}>
                <textarea
                  name="briefOutline"
                  placeholder="Brief Outline"
                  cols={30}
                  rows={6}
                  style={textareaStyle}
                />
              </div>
              <button
                style={submitButtonStyle}
                type="submit"
                onMouseEnter={(e) => handleSubmitHover(e, true)}
                onMouseLeave={(e) => handleSubmitHover(e, false)}
              >
                Get Back to me
              </button>
            </form>
          </div>
        </div>
      </div>
      <LogoCarousel />
      <SubscribeForm />
      <Footer />
    </div>
  );
};

export default Speakers;
