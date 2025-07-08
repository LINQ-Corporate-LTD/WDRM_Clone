import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import FeaturedSpeaker from "./FeaturedSpeaker";
const WhoShouldAttend = () => {
  const benefits = [
    {
      text: "Across two days of in-depth presentations, industry experts will share the latest market insights, results, and experiences within the desalination sector.",
    },
    {
      text: "This event provides an exclusive networking opportunity for professionals to connect with peers facing similar challenges and sharing insights from past and current projects.",
    },
    {
      text: "Attendees will receive updates on regional projects and research from leading desalination experts, who will share their experiences, findings, and new proposals.",
    },
    {
      text: "Technical presentations by water treatment manufacturers will showcase advancements in resource recovery, efficiency improvements, and cost-reduction strategies.",
    },
    {
      text: "New case studies will present specific examples from water utilities and desalination facilities, providing practical insights.",
    },
    {
      text: "This exclusive opportunity allows participants to connect with a wide range of industry stakeholders and explore innovative techniques to address emerging challenges.",
    },
  ];
  const benefits2 = [
    {
      text: "Across two days of in-depth presentations, industry experts will share the latest market insights, results, and experiences within the desalination sector.",
    },
    {
      text: "This event provides an exclusive networking opportunity for professionals to connect with peers facing similar challenges and sharing insights from past and current projects.",
    },
    {
      text: "Attendees will receive updates on regional projects and research from leading desalination experts, who will share their experiences, findings, and new proposals.",
    },
    {
      text: "Technical presentations by water treatment manufacturers will showcase advancements in resource recovery, efficiency improvements, and cost-reduction strategies.",
    },
    {
      text: "New case studies will present specific examples from water utilities and desalination facilities, providing practical insights.",
    },
    {
      text: "This exclusive opportunity allows participants to connect with a wide range of industry stakeholders and explore innovative techniques to address emerging challenges.",
    },
  ];

  const speakers = [
    {
      id: 1,
      name: "Maher Al Kaabi",
      company: "Alserkal Group",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Ahmed Yousry",
      company: "ACWA Power",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Oren Heymans",
      company: "Entegris",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      company: "Tech Innovations",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Michael Chen",
      company: "Global Solutions",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const [activeTab, setActiveTab] = React.useState("core");

  const coreAttendees = [
    "Water Utility Professionals",
    "O&M Professionals",
    "O&M Professionals",
    "Water Treatment Experts",
    "Desalination Engineers",
    "Circular Economy Strategists",
    "Process Development Managers",
    "Water Quality Managers",
    "Risk Management Experts",
    "Water Resource Managers",
    "Digitalisation Service Providers",
    "R&D Managers",
    "Clean Energy Experts",
    "Energy Recovery Experts",
    "Strategic Water Policy Advisors",
    "Project Managers",
    "Hydrologists",
    "Legal and Compliance Specialists",
    "Water Data Analysts",
    "Watershed Managers",
    "News Reporters and Journalists",
    "Brine Management Experts",
    "Water Infrastructure Experts",
    "Health and Safety Managers",
  ];

  const industriesCompanies = [
    "Water Utilities",
    "Industrial Water Solutions",
    "Associations and Alliances",
    "Desalination Facilities",
    "Regional Water Authorities",
    "Government Agencies",
    "Water Treatment Solutions Providers",
    "Chemical Suppliers",
    "Investors and Venture Capital Firms",
    "Engineering and Design Firms",
    "Public-Private Partnership Firms",
    "Media and Communications Firms",
    "Mineral Recovery Firms",
    "Marine and Coastal Protection Firms",
    "Academic and Research Institutions",
    "Thermal Desalination Providers",
    "Membrane Manufacturers",
    "Sustainability and ESG Consultants",
    "Equipment and Pump Manufacturers",
    "Smart Water Technology Providers",
    "Regulatory and Compliance Services",
    "Renewable Energy Firms",
    "EPC Contractors",
    "Other Professional Services",
  ];

  const currentData =
    activeTab === "core" ? coreAttendees : industriesCompanies;

  const testimonials = [
    {
      name: "Cor Merks",
      company: "Ramboll",
      quote: "Very on-topic approach. Excellent networking opportunities.",
    },
    {
      name: "Kelbij star",
      company: "Deltares",
      quote: "I met new parties that were active in this sector.",
    },
    {
      name: "Steve Kaye",
      company: "UKWIR",
      quote:
        "It was a great showcase of cutting-edge technologies, with chances to network globally.",
    },
    {
      name: "Matthijs Stel",
      company: "Evides",
      quote:
        "It offered ideas for applying new technologies across the entire water industry value chain.",
    },
    {
      name: "Przemysław Zakościelny",
      company: "vonRoll Infratec (services) AG",
      quote:
        "It was an excellent opportunity to explore solutions and participate in meaningful discussions.",
    },
    {
      name: "David Hurley",
      company: "AVK UK",
      quote:
        "It proved fantastic for sharing knowledge and discovering innovative products.",
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
                  BENEFITS
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
                  The <strong>Desalination & Resource Recovery 2025</strong>{" "}
                  event provides leading market intelligence and features
                  industry experts discussing the latest advancements in
                  desalination, resource recovery, and sustainable water
                  management.
                </p>

                <p
                  className="mb-4"
                  style={{ fontSize: "1rem", fontWeight: "600", color: "#333" }}
                >
                  Benefits of attending include:
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
                      Across two days of in-depth presentations, industry
                      experts will share the latest market insights, results,
                      and experiences within the desalination sector.
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
                      This event provides an exclusive networking opportunity
                      for professionals to connect with peers facing similar
                      challenges and sharing insights from past and current
                      projects.
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
                      Attendees will receive updates on regional projects and
                      research from leading desalination experts, who will share
                      their experiences, findings, and new proposals.
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
                      Technical presentations by water treatment manufacturers
                      will showcase advancements in resource recovery,
                      efficiency improvements, and cost-reduction strategies.
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
                      New case studies will present specific examples from water
                      utilities and desalination facilities, providing practical
                      insights.
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
                      This exclusive opportunity allows participants to connect
                      with a wide range of industry stakeholders and explore
                      innovative techniques to address emerging challenges.
                    </span>
                  </li>
                </ul>

                <button
                  className="btn btn-dark btn-block font-weight-bold py-3"
                  style={{
                    backgroundColor: "#2c2c2c",
                    border: "none",
                    letterSpacing: "2px",
                    fontSize: "1rem",
                  }}
                >
                  VIEW PROGRAM
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
                  }}
                >
                  KEY TAKEAWAYS
                </h1>

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
                      Gain insights into current water management market
                      dynamics and their impact on the industry
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
                      Discover how to develop effective strategies for
                      successful diversification projects
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
                      Learn from industry and expert trends, including a review
                      of the current year and projections for the future
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
                      Explore new product innovations and technological
                      advancements shaping the future of the industry
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
                      Access diverse insights and perspectives from subject
                      business and allied industry experts who will share
                      experiences for a comprehensive understanding
                    </span>
                  </li>
                </ul>

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

        <div
          className="who-should-attend-section"
          style={{ backgroundColor: "#00BFFF", padding: "60px 0" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-2">
                <h2
                  className="text-white mb-4"
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    lineHeight: "36px",
                  }}
                >
                  WHO SHOULD ATTEND?
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "28px",
                    margin: "40px auto",
                    fontWeight: "500",
                    maxWidth: "1248px",
                    textAlign: "center",
                    width: "58%",
                    color: "#fff",
                  }}
                >
                  This event is tailored for utilities, desalination operators,
                  and key stakeholders assessing the economic feasibility of
                  water network development. It also serves as a platform to
                  explore the latest technologies that enhance operational
                  efficiency.
                </p>
              </div>
            </div>

            <div className="col-12">
              <div className="attendees-container bg-white rounded shadow-lg">
                {/* Header Row */}
                <div className="d-flex">
                  <div
                    className="col-md-6 d-flex items-center justify-center p-3"
                    style={{
                      backgroundColor:
                        activeTab === "core" ? "#080808" : "#d3d3d3",
                      cursor: "pointer",
                    }}
                    onClick={() => setActiveTab("core")}
                  >
                    <h4
                      className={`mb-0 font-weight-bold ${
                        activeTab === "core" ? "text-white" : "text-dark"
                      }`}
                    >
                      Core Attendees
                    </h4>
                  </div>
                  <div
                    className="col-md-6 d-flex items-center justify-center p-3"
                    style={{
                      backgroundColor:
                        activeTab === "industries" ? "#080808" : "#d3d3d3",
                      cursor: "pointer",
                    }}
                    onClick={() => setActiveTab("industries")}
                  >
                    <h4
                      className={`mb-0 font-weight-bold ${
                        activeTab === "industries" ? "text-white" : "text-dark"
                      }`}
                    >
                      Industries & Companies
                    </h4>
                  </div>
                </div>

                {/* Description */}
                <div className="col-12">
                  <p
                    style={{
                      fontSize: "16px",
                      margin: "40px auto",
                      width: "70%",
                      textAlign: "center",
                      fontWeight: "800",
                    }}
                  >
                    {activeTab === "core"
                      ? "Core attendees include CEOs, COOs, CFOs, Presidents, Vice Presidents, Directors, Heads of, Superintendents, and Managers involved in:"
                      : "From the following industry sectors:"}
                  </p>
                </div>

                {/* Grid of Attendees */}
                <div className="row mx-auto pb-4">
                  {currentData.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-4 col-md-6 col-sm-6 mb-3"
                    >
                      <div
                        className="attendee-card"
                        style={{
                          backgroundColor: "#eee",
                          borderRadius: "2px",
                          minHeight: "45px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#181818",
                          padding: "10px 20px",
                          border: "none",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .attendee-card {
              transition: all 0.3s ease;
              border: 1px solid #ddd;
            }

            @media (max-width: 768px) {
              .who-should-attend-section h2 {
                font-size: 2rem !important;
              }

              .attendee-card {
                font-size: 0.9rem !important;
                min-height: 50px !important;
              }
            }

            @media (max-width: 576px) {
              .who-should-attend-section {
                padding: 40px 0 !important;
              }

              .who-should-attend-section h2 {
                font-size: 1.8rem !important;
                letter-spacing: 1px !important;
              }

              .attendee-card {
                font-size: 0.85rem !important;
                padding: 15px 10px !important;
              }
            }
          `}</style>
        </div>
        <div className="testimonials-container">
          <div className="container">
            <h2 className="testimonials-title">They've Attended Our Events</h2>

            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <h4 className="testimonial-company">
                      {testimonial.company}
                    </h4>
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SubscribeForm />
      <Footer />
    </>
  );
};

export default WhoShouldAttend;
