import React, { useState, useEffect } from "react";

const SubscribeForm = () => {
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

  // Dynamic styles based on screen size
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00baff',
    minHeight: isMobile ? '400px' : '460px',
    padding: isMobile ? '40px 15px' : isTablet ? '60px 30px' : '100px 20px',
    width: '100%'
  };

  const maxWidthContainerStyle = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto'
  };

  const whiteBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '2px',
    margin: '0 auto',
    padding: isMobile ? '30px 20px' : isTablet ? '40px 30px' : '50px 40px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const headingStyle = {
    color: '#1a1a1a',
    fontSize: isMobile ? '20px' : isTablet ? '24px' : '27px',
    fontWeight: '800',
    lineHeight: isMobile ? '22px' : '24px',
    margin: '0',
    padding: '0',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const paragraphStyle = {
    color: '#464646',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '600',
    marginTop: isMobile ? '15px' : '20px',
    marginBottom: isMobile ? '20px' : '22px',
    padding: '0',
    textAlign: 'center',
    width: isMobile ? '95%' : isTablet ? '80%' : '70%',
    lineHeight: '1.4'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0',
    padding: '0',
    width: isMobile ? '100%' : '90%'
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0',
    padding: '0',
    width: '100%',
    gap: isMobile ? '15px' : '22px'
  };

  const inputStyle = {
    backgroundColor: '#ececec',
    border: 'none',
    outline: 'none',
    borderRadius: '2px',
    height: '50px',
    padding: '0 20px',
    width: isMobile ? '100%' : isTablet ? 'calc(50% - 11px)' : '415px',
    fontSize: '16px',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  };

  const buttonStyle = {
    backgroundColor: '#00baff',
    border: '1px solid transparent',
    borderRadius: '2px',
    color: 'white',
    cursor: 'pointer',
    fontSize: isMobile ? '18px' : '20px',
    fontWeight: '800',
    height: '50px',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    width: isMobile ? '100%' : isTablet ? '200px' : '225px',
    marginTop: isMobile ? '10px' : '0',
    fontFamily: 'inherit'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  const handleButtonHover = (e, isHovering) => {
    if (isHovering) {
      e.target.style.backgroundColor = 'white';
      e.target.style.color = '#00baff';
      e.target.style.borderColor = '#00baff';
    } else {
      e.target.style.backgroundColor = '#00baff';
      e.target.style.color = 'white';
      e.target.style.borderColor = 'transparent';
    }
  };

  return (
    <div style={containerStyle}>
      <div style={maxWidthContainerStyle}>
        <div style={whiteBoxStyle}>
          <h2 style={headingStyle}>
            SUBSCRIBE FOR UPDATES
          </h2>
          <p style={paragraphStyle}>
            By submitting, you agree to receive email communications from the
            event organizers, including upcoming promotions and discounted
            tickets, new, and access to related events.
          </p>
          <form style={formStyle} onSubmit={handleSubmit}>
            <div style={inputContainerStyle}>
              <input
                style={inputStyle}
                name="name"
                type="text"
                placeholder="Name *"
                required
              />
              <input
                style={inputStyle}
                name="email"
                type="email"
                placeholder="Email Address *"
                required
              />
              <button
                style={buttonStyle}
                type="submit"
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;