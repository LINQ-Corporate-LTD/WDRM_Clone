import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import LogoCarousel from "./LogoCarousel";

const speaker_arr = [
    {
      id: 1,
      name: "Maher Al Kaabi",
      title: "Alserkal Group",
      speakerbio:
        "<p>Maher Al Kaabi is&nbsp;a visionary business leader and advisor with over 30 years of experience in banking, IT, and family business. He currently advises the group chairman of Al Serkal Group and serves as an independent board member, bringing expertise in strategy, governance, and business transformation.</p><p>Maher is&nbsp;the co-founder of Blink and actively supports startups and government initiatives in future technologies and the circular economy. He serves on multiple boards, including the UAE Ministry of Climate Change and Environment’s Circular Economy Council and the UAE International Investors Council, helping shape sustainable and impactful business practices.</p>",
      speakershortbio:
        "<p>Maher Al Kaabi is a strategic advisor and board member driving business transformation, innovation, and sustainability across banking, tech, and circular economy sectors.</p>",
      companyimage: "https://www.desalination-resource-recovery.com/api/images/1748008565625.png",
      bioimage:
        "https://www.desalination-resource-recovery.com/api/images/1748008565626.png",
      homeimage: "https://www.desalination-resource-recovery.com/api/images/1748008565630.png",
      slug: "maher-al-kaabi",
      createdAt: "2025-05-23T13:56:05.000Z",
    },
    {
      id: 2,
      name: "Ahmed Yousry",
      title: "ACWA Power",
      speakerbio:
        "<p>Ahmed Yousry is a water and energy professional with over five years of experience in desalination technologies, renewable energy integration, and process optimization. He has contributed to large-scale water projects by advancing sustainable designs and improving operational efficiency.</p><p>Ahmed brings expertise in optimizing energy consumption, statistical analysis, and simulation modelling, supporting the development of efficient, clean energy solutions in the desalination sector. His work focuses on driving innovation and sustainability across water and energy systems.</p>",
      speakershortbio:
        "<p>Ahmed Yousry specializes in sustainable desalination and clean energy integration, advancing efficient system designs through process optimization and simulation modeling.</p>",
      companyimage: "https://www.desalination-resource-recovery.com/api/images/1748008658077.png",
      bioimage:
        "https://www.desalination-resource-recovery.com/api/images/1748008658078.png",
      homeimage: "https://www.desalination-resource-recovery.com/api/images/1748008658079.png",
      slug: "ahmed-yousry",
      createdAt: "2025-05-23T13:57:38.000Z",
    },
    {
      id: 3,
      name: "Oren Heymans",
      title: "Entegris",
      speakerbio:
        "<p>Oren Heymans is the&nbsp;director of business development at Entegris, where he has led the company’s sales and application efforts in the water treatment market since 2009. He joined Entegris in 2007 as an account manager for the semiconductor industry and later specialized in gas purification and liquid filtration across various markets.</p><p>Oren brings over 16 years of experience in business development spanning water treatment, life sciences, and digital printing. He continues to drive growth by leveraging Entegris' expertise in filtration and purification technologies.</p>",
      speakershortbio:
        "<p>Oren Heymans leads business development at Entegris, driving growth in water treatment by leveraging advanced filtration and purification technologies across diverse markets.</p>",
      companyimage: "https://www.desalination-resource-recovery.com/api/images/1748263603496.png",
      bioimage:
        "https://www.desalination-resource-recovery.com/api/images/1748263603497.png",
      homeimage: "https://www.desalination-resource-recovery.com/api/images/1748263603503.png",
      slug: "oren-heymans",
      createdAt: "2025-05-26T12:46:43.000Z",
    },
    {
      id: 4,
      name: "Anton Borodastov",
      title: "Membranium",
      speakerbio:
        "<p>Anton Borodastov is the branch director of Membranium, a unique company specializing in the production of nanostructured membrane flatsheets and membrane elements for RO, NF, and UF applications. His engineering expertise in water and wastewater treatment stems from his leadership role at a major EPC firm, where he delivered projects ranging from 20 to 6000 m³/h.</p><p>Anton later founded Aquarhyme, a company focused on solving complex environmental challenges. His work emphasizes advanced solutions including MLD and ZLD systems, lithium extraction, and desalination technologies.</p>",
      speakershortbio:
        "<p>Anton Borodastov directs Membranium, specializing in advanced membrane technologies, with expertise in MLD, ZLD, desalination, and innovative solutions for complex water treatment challenges.</p>",
      companyimage: "https://www.desalination-resource-recovery.com/api/images/1748263714868.png",
      bioimage:
        "https://www.desalination-resource-recovery.com/api/images/1748263714869.png",
      homeimage: "https://www.desalination-resource-recovery.com/api/images/1748263714873.png",
      slug: "anton-borodastov",
      createdAt: "2025-05-26T12:48:34.000Z",
    },
    {
      id: 5,
      name: "Ignacio Rodriguez",
      title: "DESALA",
      speakerbio:
        "<p>Ignacio Rodriguez is an entrepreneur, consultant, and keynote speaker with over 18 years of experience developing renewable energy and non-conventional water projects across Chile and Latin America. He is the co-founder and general manager of Desala, a company pioneering a multipurpose desalination model tailored to the unique needs of sectors like mining, agriculture, human consumption, and green hydrogen.</p><p>Ignacio’s work at Desala focuses on leveraging economies of scale and flexible tariff structures to expand access to desalinated water for critical sectors driving the energy transition, food security, and sustainability.</p>",
      speakershortbio:
        "<p>Ignacio Rodriguez is co-founder of Desala, advancing innovative desalination solutions for mining, agriculture, and green hydrogen to support sustainability and the Latin American energy transition.</p>",
      companyimage: "https://www.desalination-resource-recovery.com/api/images/1748435281015.png",
      bioimage:
        "https://www.desalination-resource-recovery.com/api/images/1748435281020.png",
      homeimage: "https://www.desalination-resource-recovery.com/api/images/1748435281024.png",
      slug: "ignacio-rodriguez",
      createdAt: "2025-05-28T12:28:01.000Z",
    },
    {
      id: 6,
      name: "Lars Späth",
      title: "Passavant-Geiger GmbH",
      speakerbio:
        "<p>Lars Späth is the&nbsp;Vice President at a leading water technology company, bringing extensive global experience in seawater intake, water reuse, and wastewater treatment systems. He has contributed to iconic projects including Palm Island Jumeirah, the Marina East desalination plant in Singapore, and the Hamburg-Köhlbrand wastewater treatment plant.</p><p>Lars and his team specialize in delivering proven solutions for water intake screening, SWRO systems, STP prefiltration, and advanced water reclamation technologies, supporting sustainable infrastructure across the globe.</p>",
      speakershortbio:
        "<p>Lars Späth is a water technology leader driving global solutions in seawater intake, reuse, and advanced treatment systems for sustainable infrastructure development.</p>",
      companyimage: "https://www.desalination-resource-recovery.com/api/images/1748435872390.png",
      bioimage:
        "https://www.desalination-resource-recovery.com/api/images/1748435846118.png",
      homeimage: "https://www.desalination-resource-recovery.com/api/images/1748435846121.png",
      slug: "lars-spth",
      createdAt: "2025-05-28T12:37:26.000Z",
    },
    {
      id: 7,
      name: "Robert Bryniak",
      title: "Golden Sands Management (Marketing) Consulting",
      speakerbio:
        "<p>Robert Bryniak is a seasoned expert in public-private partnerships (PPP) with two decades of experience across the MENA region. He played a key role in restructuring and privatization Oman’s electricity and water sector and served as the first CEO of NAMA PWP. Later, as CEO of Palm Water in Dubai, he led the development of PPP structures in water and wastewater.</p><p>Robert founded a management consulting firm in 2007, providing PPP advisory and strategic services across the region. He also conducts seminars and workshops focused on PPP capacity building.</p>",
      speakershortbio:
        "<p>Robert Bryniak is a PPP expert who led major privatization efforts in the MENA electricity and water sector and now advises on strategic public-private infrastructure projects.</p>",
      companyimage: "https://www.desalination-resource-recovery.com/api/images/1748435943865.png",
      bioimage:
        "https://www.desalination-resource-recovery.com/api/images/1748435943868.png",
      homeimage: "https://www.desalination-resource-recovery.com/api/images/1748435943873.png",
      slug: "robert-bryniak",
      createdAt: "2025-05-28T12:39:03.000Z",
    },
    {
      id: 8,
      name: "David Stephenson",
      title: "Independent Consultant",
      speakerbio:
        "<p>David Stephenson is a consulting engineer based in Southern Africa and an emeritus professor of water engineering. He has authored 15 books on water supply and management and serves on the editorial panels of nine technical journals. His career spans decades of work in both academic and applied water engineering.</p><p>David’s consulting experience includes hydrology, water resource assessment, and the design of major infrastructure across Africa and the Middle East. He has led studies on the Zambezi and Senqu transfer schemes and regularly advises the World Bank on water projects in Africa.</p>",
      speakershortbio:
        "<p>David Stephenson is a consulting engineer and emeritus professor specializing in water engineering, with global expertise in hydrology, infrastructure design, and advisory roles on major African water projects.</p>",
      companyimage: "https://www.desalination-resource-recovery.com/api/images/1748951845721.png",
      bioimage:
        "https://www.desalination-resource-recovery.com/api/images/1748951845722.png",
      homeimage: "https://www.desalination-resource-recovery.com/api/images/1748951845728.png",
      slug: "david-stephenson",
      createdAt: "2025-05-28T14:03:21.000Z",
    },
  ];

const Speakers = () => {
  const navigate = useNavigate();
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

  const handleClick = (member) => {
    navigate(`/speakerprofile/${member.slug}`, { state: member }); // ✅ Pass member object in route state
  };

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
                  onClick={() => handleClick(speaker)}
                >
                  <img
                    src={speaker.companyimage || "/placeholder.svg"}
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
