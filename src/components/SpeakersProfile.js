import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../../src/assets/css/agenda.css";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import LogoCarousel from "./LogoCarousel";

const SpeakerProfile = () => {
  const { slug } = useParams();
  const { state } = useLocation();
  console.log("state: ", state);
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

  // Dynamic Styles
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

  return (
    <>
      <Navbar forceScrolled />
      <div class="pt-[90px] pb-[30px]">
        <div className="speaker-profile-container">
          <div className="profile-image-section">
            <img
              src={state?.bioimage}
              alt="Right image"
            />
          </div>

          <div className="profile-content">
            <div className="profile-header">
              <h2 className="profile-title">Speaker's profile</h2>
              <h1 className="speaker-name">{state?.name}</h1>
              <p className="speaker-title">{state?.title}</p>
            </div>

            <div className="biography-section">
              <h3 className="biography-section-title">BIOGRAPHY</h3>

              <div
                className="biography-text"
                dangerouslySetInnerHTML={{ __html: state.speakershortbio }}
              />

              <div
                className="biography-text"
                dangerouslySetInnerHTML={{ __html: state.speakerbio }}
              />
            </div>

            <div className="w-100">
              <button className="view-program-btn w-100">VIEW PROGRAM</button>
            </div>
          </div>
        </div>
        <div style={sectionStyle}>
          <div style={containerStyle}>
            <div style={innerContainerStyle}>
              <h2 style={headingStyle}>
                become a speaker & join the conversation
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
                      name="proposedtitle"
                      type="tel"
                      placeholder="Proposed title *"
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
                    name="briefoutline"
                    placeholder="Brief outline"
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
                  get back to me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <LogoCarousel />
      <SubscribeForm />
      <Footer />
    </>
  );
};

export default SpeakerProfile;
