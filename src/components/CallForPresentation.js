import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import FeaturedSpeaker from "./FeaturedSpeaker";
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

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    paddingLeft: isXSmall ? "15px" : isSmall ? "20px" : isMedium ? "30px" : "40px",
    paddingRight: isXSmall ? "15px" : isSmall ? "20px" : isMedium ? "30px" : "40px"
  };

  const containerStyle = {
    margin: "0 auto",
    maxWidth: isXSmall ? "100%" : isSmall ? "100%" : isMedium ? "900px" : isLarge ? "1200px" : "1400px",
    width: "100%"
  };

  const innerContainerStyle = {
    margin: "0 auto"
  };

  const headingStyle = {
    color: "white",
    fontSize: isXSmall ? "20px" : isSmall ? "24px" : isMedium ? "26px" : isLarge ? "30px" : "32px",
    fontWeight: "800",
    margin: "0",
    padding: "0",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: "1.2"
  };

  const paragraphStyle = {
    color: "white",
    fontSize: isXSmall ? "14px" : isSmall ? "15px" : "16px",
    fontWeight: "400",
    paddingTop: isXSmall ? "20px" : isSmall ? "25px" : "32px",
    textAlign: "center",
    lineHeight: "1.6",
    margin: "0",
    maxWidth: isXSmall ? "100%" : isSmall ? "95%" : "90%",
    marginLeft: "auto",
    marginRight: "auto"
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: isXSmall ? "25px" : isSmall ? "30px" : isMedium ? "35px" : "42px"
  };

  const formRowStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: isXSmall ? "15px" : isSmall ? "18px" : "23px",
    gap: isMobile ? "15px" : isTablet ? "20px" : "30px"
  };

  const inputContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: isMobile ? "100%" : "calc(50% - 15px)"
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
    fontFamily: "inherit"
  };

  const textareaContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: isXSmall ? "18px" : "23px",
    width: "100%"
  };

  const textareaStyle = {
    border: "none",
    borderRadius: "2px",
    height: isXSmall ? "120px" : isSmall ? "140px" : isMedium ? "160px" : "185px",
    outline: "none",
    padding: isXSmall ? "15px" : isSmall ? "18px" : "20px 23px",
    resize: "none",
    width: "100%",
    fontSize: isXSmall ? "14px" : isSmall ? "15px" : "16px",
    boxSizing: "border-box",
    fontFamily: "inherit"
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
    transition: "all 0.3s ease"
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
    console.log('Form submitted');
  };

  return (
    <>
      <Navbar forceScrolled />
      <div>
        <div
          style={{
            paddingTop: "150px",
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

         <div style={sectionStyle}>
      <div style={containerStyle}>
        <div style={innerContainerStyle}>
          <h2 style={headingStyle}>
           quick proposal
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
              Get Back to Me
            </button>
          </form>
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
