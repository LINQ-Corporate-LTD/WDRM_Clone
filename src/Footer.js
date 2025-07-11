import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  // Dynamic styles
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    margin: '0 auto',
    paddingTop: isMobile ? '40px' : isTablet ? '60px' : '100px',
    paddingLeft: isMobile ? '20px' : '0',
    paddingRight: isMobile ? '20px' : '0'
  };

  const containerStyle = {
    width: '100%',
    maxWidth: isMobile ? '100%' : isTablet ? '1200px' : '1400px'
  };

  const topSectionStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'flex-start',
    marginBottom: isMobile ? '30px' : '50px',
    overflow: 'visible'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'flex-start',
    maxHeight: '68px',
    overflow: 'visible',
    position: 'relative',
    width: isMobile ? '100%' : '24%',
    marginBottom: isMobile ? '30px' : '0'
  };

  const logoStyle = {
    cursor: 'pointer',
    height: 'auto',
    maxWidth: isMobile ? '120px' : '150px',
    minWidth: isMobile ? '80px' : '100px',
    objectFit: 'contain',
    width: '100%'
  };

  const navContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    maxHeight: isMobile ? 'auto' : '68px',
    width: isMobile ? '100%' : '71%',
    gap: isMobile ? '20px' : '0'
  };

  const navColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: isMobile ? '100%' : 'auto'
  };

  const navLinkStyle = {
    color: 'white',
    fontSize: isMobile ? '13px' : '14px',
    fontWeight: 'bold',
    lineHeight: isMobile ? '30px' : '35px',
    textDecoration: 'none',
    textTransform: 'uppercase'
  };

  const dividerStyle = {
    borderBottom: '1px solid #5e5e5e',
    margin: '0',
    padding: '0',
    width: '100%'
  };

  const middleSectionStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'flex-start',
    paddingTop: isMobile ? '30px' : '52px',
    paddingBottom: isMobile ? '40px' : '60px'
  };

  const socialContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: isMobile ? 'center' : 'flex-start',
    paddingLeft: isMobile ? '0' : '5px',
    width: isMobile ? '100%' : '24%',
    marginBottom: isMobile ? '30px' : '0'
  };

  const socialIconStyle = {
    height: '30px',
    width: '30px',
    marginRight: '16px'
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: isMobile ? '100%' : '71%',
    gap: isMobile ? '30px' : '0'
  };

  const contentColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: isMobile ? '100%' : 'auto'
  };

  const sectionHeadingStyle = {
    color: 'white',
    fontSize: '16px',
    fontWeight: '800',
    marginBottom: '25px',
    whiteSpace: isMobile ? 'normal' : 'nowrap'
  };

  const contentLinkStyle = {
    color: 'white',
    fontSize: isMobile ? '13px' : '14px',
    fontWeight: '500',
    lineHeight: isMobile ? '35px' : '40px',
    margin: '0',
    textDecoration: 'none',
    textTransform: 'uppercase',
    pointerEvents: 'auto'
  };

  const bottomSectionStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    justifyContent: 'space-between',
    margin: '25px 0',
    gap: isMobile ? '15px' : '0'
  };

  const bottomTextStyle = {
    color: 'white',
    fontSize: isMobile ? '12px' : '14px',
    margin: '0',
    padding: '0',
    marginBottom: isMobile ? '0' : '18px'
  };

  const bottomLinkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Top Section - Logo and Navigation */}
        <div style={topSectionStyle}>
          <div style={logoContainerStyle}>
            <div>
              <img
                style={logoStyle}
                src="https://www.desalination-resource-recovery.com/api/images/logo/1742534509561.png"
                alt="WDRM Logo"
                height={64}
              />
            </div>
          </div>
          <div style={navContainerStyle}>
            <div style={navColumnStyle}>
              <a style={navLinkStyle} onClick={() => navigate("/")}>
                Event Details
              </a>
              <a style={navLinkStyle} onClick={() => navigate("/speakers")}>
                Speakers
              </a>
            </div>
            <div style={navColumnStyle}>
              <a style={navLinkStyle} onClick={() => navigate("/sponsor")}>
                Sponsors
              </a>
              <a style={navLinkStyle} onClick={() => navigate("/venue")}>
                Venue
              </a>
            </div>
            <div style={navColumnStyle}>
              <a style={navLinkStyle} onClick={() => navigate("/agenda")}>
                Program
              </a>
              <a style={navLinkStyle} onClick={() => navigate("/who-should-attend")}>
                Benefits
              </a>
            </div>
            <div style={navColumnStyle}>
              <a style={navLinkStyle} onClick={() => navigate("/media-partners")}>
                Media
              </a>
              <a style={navLinkStyle} onClick={() => navigate("/contact-us")}>
                Contact Us
              </a>
            </div>
            <div style={navColumnStyle}>
              <a style={navLinkStyle} onClick={() => navigate("/venue")}>
                Gallery
              </a>
              <a style={navLinkStyle} onClick={() => navigate("/faqs")}>
                FAQ
              </a>
            </div>
          </div>
        </div>

        <div style={dividerStyle}></div>

        {/* Middle Section - Social Icons and Content */}
        <div style={middleSectionStyle}>
          <div style={socialContainerStyle}>
            <a
              target="_blank"
              href="mailto:delegates@iq-hub.com?subject=Desalination & Resource Recovery 2025"
              style={{ marginRight: '16px', textDecoration: 'none' }}
            >
              <img
                style={socialIconStyle}
                src="https://www.desalination-resource-recovery.com/images/icons/icon-mail.png"
                alt="Email"
                width={20}
                height={20}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/showcase/smart-water-utilities/"
              style={{ marginRight: '0px', textDecoration: 'none' }}
            >
              <img
                style={socialIconStyle}
                src="https://www.desalination-resource-recovery.com/images/icons/icon-linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
          </div>
          
          <div style={contentContainerStyle}>
            <div style={{ ...contentColumnStyle, width: isMobile ? '100%' : '50%' }}>
              <h5 style={sectionHeadingStyle}>
                OTHER EVENTS
              </h5>
              <a
                style={contentLinkStyle}
                href="https://www.water-resource-recovery.com/"
                target="_blank"
              >
                Water Resource Recovery USA 2025
              </a>
              <a
                style={contentLinkStyle}
                href="https://www.membrane-technology-show.com/"
                target="_blank"
              >
                Membrane Technology USA 2025
              </a>
              <a
                style={contentLinkStyle}
                href="https://www.europe.pfas-summit.com/"
                target="_blank"
              >
                PFAS Treatment Europe 2025
              </a>
            </div>
            
            <div style={contentColumnStyle}>
              <h5 style={sectionHeadingStyle}>
                QUICK LINKS
              </h5>
              <a style={contentLinkStyle} href="/booking">
                Register
              </a>
              <a style={contentLinkStyle} href="/who-should-attend">
                Benefits
              </a>
              <a style={contentLinkStyle} href="/faqs">
                FAQ
              </a>
            </div>
            
            <div style={contentColumnStyle}>
              <h5 style={sectionHeadingStyle}>
                CONTACT US
              </h5>
              <a
                style={contentLinkStyle}
                href="mailto:delegates@iq-hub.com?subject=Desalination & Resource Recovery 2025"
              >
                Email
              </a>
              <a style={contentLinkStyle} href="/contact-us">
                Customer Support
              </a>
              <a style={contentLinkStyle} href="/terms-and-conditions">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>

        <div style={dividerStyle}></div>

        {/* Bottom Section - Copyright */}
        <div style={bottomSectionStyle}>
          <p style={bottomTextStyle}>
            <a style={bottomLinkStyle} href="/privacy-policy">
              Privacy Policy
            </a>
            <span style={{ color: 'white', margin: '0 3px' }}> | </span>
            IQ International PTe. LTD
          </p>
          <p style={bottomTextStyle}>
            @2025 Desalination & Resource Recovery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;