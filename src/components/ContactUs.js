import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";

const emailImage = "https://www.desalination-resource-recovery.com/images/icons/icon-email.png";
const emailIcon = "https://www.desalination-resource-recovery.com/images/icons/msg.png";

const ContactUs = () => {
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
  const contactFormSectionStyle = {
    paddingTop: isXSmall ? "100px" : isSmall ? "120px" : isMedium ? "140px" : "150px",
    paddingBottom: isXSmall ? "50px" : isSmall ? "60px" : isMedium ? "80px" : "100px",
    backgroundColor: "#080808",
    paddingLeft: isXSmall ? "15px" : isSmall ? "20px" : isMedium ? "30px" : "40px",
    paddingRight: isXSmall ? "15px" : isSmall ? "20px" : isMedium ? "30px" : "40px"
  };

  const containerStyle = {
    margin: "0 auto",
    maxWidth: isXSmall ? "100%" : isSmall ? "100%" : isMedium ? "900px" : isLarge ? "1200px" : "1400px",
    width: "100%"
  };

  const headingStyle = {
    color: "white",
    fontSize: isXSmall ? "20px" : isSmall ? "24px" : isMedium ? "30px" : isLarge ? "36px" : "40px",
    fontWeight: "800",
    margin: "0",
    padding: "0",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: "1.2"
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

  const checkboxSectionStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "flex-start" : "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "2px",
    padding: isXSmall ? "15px 10px" : isSmall ? "18px 15px" : isMedium ? "20px 25px" : "20px 40px 20px 20px",
    gap: isMobile ? "12px" : isTablet ? "15px" : "20px"
  };

  const checkboxContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "flex-start" : "center",
    justifyContent: "space-between",
    width: "100%",
    gap: isMobile ? "12px" : isTablet ? "15px" : "20px"
  };

  const checkboxLabelStyle = {
    color: "#777",
    fontSize: isXSmall ? "12px" : isSmall ? "13px" : "15px",
    fontWeight: "bold",
    whiteSpace: isMobile ? "normal" : "nowrap",
    margin: "0"
  };

  const checkboxItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: isXSmall ? "8px" : "10px",
    width: isMobile ? "100%" : "auto"
  };

  const checkboxInputStyle = {
    width: isXSmall ? "14px" : "16px",
    height: isXSmall ? "14px" : "16px",
    cursor: "pointer",
    flexShrink: 0
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

  const emailSectionStyle = {
    margin: "0 auto",
    maxWidth: isXSmall ? "100%" : isSmall ? "100%" : isMedium ? "900px" : isLarge ? "1200px" : "1400px",
    width: "100%",
    paddingTop: isXSmall ? "50px" : isSmall ? "60px" : isMedium ? "80px" : "100px",
    paddingBottom: isXSmall ? "40px" : isSmall ? "50px" : isMedium ? "65px" : "80px",
    paddingLeft: isXSmall ? "15px" : isSmall ? "20px" : isMedium ? "30px" : "40px",
    paddingRight: isXSmall ? "15px" : isSmall ? "20px" : isMedium ? "30px" : "40px"
  };

  const emailHeadingStyle = {
    color: "#181818",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    fontSize: isXSmall ? "20px" : isSmall ? "24px" : isMedium ? "30px" : isLarge ? "36px" : "40px",
    fontWeight: "800",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "0",
    textAlign: "center",
    textTransform: "uppercase",
    gap: isXSmall ? "10px" : isSmall ? "15px" : "20px"
  };

  const emailImageStyle = {
    height: "auto",
    width: isXSmall ? "35px" : isSmall ? "40px" : isMedium ? "50px" : isLarge ? "58px" : "65px"
  };

  const emailDescriptionStyle = {
    color: "#181818",
    fontSize: isXSmall ? "13px" : isSmall ? "14px" : isMedium ? "15px" : "16px",
    fontWeight: "600",
    lineHeight: "1.6",
    marginTop: isXSmall ? "20px" : isSmall ? "25px" : isMedium ? "30px" : "38px",
    marginBottom: isXSmall ? "25px" : isSmall ? "30px" : isMedium ? "35px" : "43px",
    textAlign: "center",
    width: isXSmall ? "98%" : isSmall ? "95%" : "91%",
    marginLeft: "auto",
    marginRight: "auto"
  };

  const emailCardsContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1240px",
    width: "100%",
    gap: isXSmall ? "15px" : isSmall ? "18px" : isMedium ? "20px" : "2%"
  };

  const emailCardStyle = {
    backgroundColor: "#080808",
    borderRadius: "2px",
    marginBottom: isXSmall ? "15px" : "20px",
    padding: isXSmall ? "20px 15px" : isSmall ? "25px 20px" : isMedium ? "35px 30px" : "45px",
    width: isMobile ? "100%" : isTablet ? "48%" : "49%",
    boxSizing: "border-box"
  };

  const cardTitleStyle = {
    color: "#00baff",
    fontSize: isXSmall ? "16px" : isSmall ? "18px" : isMedium ? "20px" : isLarge ? "24px" : "26px",
    fontWeight: "800",
    marginBottom: isXSmall ? "15px" : isSmall ? "20px" : "30px",
    padding: "0",
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: "1.2"
  };

  const cardNameStyle = {
    color: "white",
    fontSize: isXSmall ? "16px" : isSmall ? "18px" : isMedium ? "20px" : isLarge ? "22px" : "24px",
    fontWeight: "800",
    marginBottom: "5px",
    padding: "0",
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: "1.2"
  };

  const cardPositionStyle = {
    color: "white",
    fontSize: isXSmall ? "14px" : isSmall ? "16px" : isMedium ? "17px" : "18px",
    fontWeight: "bold",
    marginBottom: "18px",
    padding: "0",
    textAlign: "left",
    lineHeight: "1.3"
  };

  const cardEmailStyle = {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontSize: isXSmall ? "13px" : isSmall ? "14px" : isMedium ? "15px" : "16px",
    fontWeight: "500",
    margin: "0",
    padding: "0",
    textDecoration: "underline",
    wordBreak: "break-all",
    lineHeight: "1.4"
  };

  const emailIconStyle = {
    marginRight: isXSmall ? "10px" : "15px",
    height: "12px",
    width: "18px",
    flexShrink: 0
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
      
      {/* Contact Form Section */}
      <div style={contactFormSectionStyle}>
        <div style={containerStyle}>
          <div style={{ margin: "0 auto" }}>
            <h2 style={headingStyle}>
              REQUEST A CALL BACK
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
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    style={inputStyle}
                    required
                  />
                </div>
                <div style={inputContainerStyle}>
                  <input
                    name="mobilenumber"
                    type="tel"
                    placeholder="Mobile Number *"
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
              
              <div style={textareaContainerStyle}>
                <textarea
                  name="message"
                  placeholder="Message"
                  cols={30}
                  rows={6}
                  style={textareaStyle}
                />
              </div>
              
              <div style={checkboxSectionStyle}>
                <div style={checkboxContainerStyle}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    width: isMobile ? "100%" : "max-content",
                    marginBottom: isMobile ? "5px" : "0"
                  }}>
                    <label style={checkboxLabelStyle}>
                      Tell me more about
                    </label>
                  </div>
                  
                  <div style={checkboxItemStyle}>
                    <input
                      style={checkboxInputStyle}
                      type="checkbox"
                      id="speaker"
                      name="interests"
                      value="speaker"
                    />
                    <label htmlFor="speaker" style={checkboxLabelStyle}>
                      Becoming a Speaker
                    </label>
                  </div>
                  
                  <div style={checkboxItemStyle}>
                    <input
                      style={checkboxInputStyle}
                      type="checkbox"
                      id="sponsorship"
                      name="interests"
                      value="sponsorship"
                    />
                    <label htmlFor="sponsorship" style={checkboxLabelStyle}>
                      Sponsorship packages
                    </label>
                  </div>
                  
                  <div style={checkboxItemStyle}>
                    <input
                      style={checkboxInputStyle}
                      type="checkbox"
                      id="attending"
                      name="interests"
                      value="attending"
                    />
                    <label htmlFor="attending" style={checkboxLabelStyle}>
                      Attending the show
                    </label>
                  </div>
                </div>
              </div>
              
              <button
                style={submitButtonStyle}
                type="submit"
                onMouseEnter={(e) => handleSubmitHover(e, true)}
                onMouseLeave={(e) => handleSubmitHover(e, false)}
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Email Us Section */}
      <div style={emailSectionStyle}>
        <h1 style={emailHeadingStyle}>
          <img
            style={emailImageStyle}
            src={emailImage || "/placeholder.svg"}
            alt="Email Icon"
          />
          <span style={{ 
            color: "#181818", 
            marginTop: isMobile ? "0" : "5px", 
            marginBottom: "0", 
            padding: "0" 
          }}>
            Email Us
          </span>
        </h1>
        
        <p style={emailDescriptionStyle}>
          Have questions or need assistance? We're just an email away. Simply
          click an option below to open an email. Our responsive team is
          committed to providing answers on everything from event details to
          registration. We're here to help and excited to hear from you!
        </p>
        
        <div style={emailCardsContainerStyle}>
          <div style={emailCardStyle}>
            <h5 style={cardTitleStyle}>Delegate Registrations:</h5>
            <h6 style={cardNameStyle}>Delegates Support Team</h6>
            <p style={{ ...cardPositionStyle, visibility: 'hidden' }}>Hidden</p>
            <a 
              style={cardEmailStyle} 
              href="mailto:delegates@iq-hub.com?subject=Desalination & Resource Recovery 2025"
            >
              <img style={emailIconStyle} src={emailIcon || "/placeholder.svg"} alt="Email Icon" />
              delegates@iq-hub.com
            </a>
          </div>
          
          <div style={emailCardStyle}>
            <h5 style={cardTitleStyle}>Group Sales Team:</h5>
            <h6 style={cardNameStyle}>Ethan Mitchell</h6>
            <p style={cardPositionStyle}>Group Sales Director</p>
            <a 
              style={cardEmailStyle} 
              href="mailto:ethan.mitchell@iq-hub.com?subject=Desalination & Resource Recovery 2025"
            >
              <img style={emailIconStyle} src={emailIcon || "/placeholder.svg"} alt="Email Icon" />
              ethan.mitchell@iq-hub.com
            </a>
          </div>
          
          <div style={emailCardStyle}>
            <h5 style={cardTitleStyle}>Sponsorship & Media Partners:</h5>
            <h6 style={cardNameStyle}>LEE NAVARRO</h6>
            <p style={cardPositionStyle}>Event & Marketing Manager</p>
            <a 
              style={cardEmailStyle} 
              href="mailto:lee.navarro@iq-hub.com?subject=Desalination & Resource Recovery 2025"
            >
              <img style={emailIconStyle} src={emailIcon || "/placeholder.svg"} alt="Email Icon" />
              lee.navarro@iq-hub.com
            </a>
          </div>
          
          <div style={emailCardStyle}>
            <h5 style={cardTitleStyle}>Conference Content & Speaking:</h5>
            <h6 style={cardNameStyle}>Sean Collins</h6>
            <p style={cardPositionStyle}>Conference Producer</p>
            <a 
              style={cardEmailStyle} 
              href="mailto:sean.collins@iq-hub.com?subject=Desalination & Resource Recovery 2025"
            >
              <img style={emailIconStyle} src={emailIcon || "/placeholder.svg"} alt="Email Icon" />
              sean.collins@iq-hub.com
            </a>
          </div>
        </div>
      </div>

      <SubscribeForm />
      <Footer />
    </>
  );
};

export default ContactUs;