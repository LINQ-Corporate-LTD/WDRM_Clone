import { useState } from "react";
import { useLocation, useParams  } from "react-router-dom";
import Navbar from "./Navbar";
import FeaturedSpeaker from "./FeaturedSpeaker";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
const TrendDescriptionPage = () => {
  const location = useLocation();
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState(slug?.replace(/-/g, " ").toUpperCase() || "BRINE VALORISATION");
  console.log('activeTab: ', activeTab);
  const [isExpanded, setIsExpanded] = useState(false);
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
  };
  const tabs = [
    "BRINE VALORISATION",
    "WATER-ENERGY NEXUS",
    "NEXT-GEN MEMBRANES",
    "AI-DRIVEN SYSTEMS",
    "DECARBONISATION",
  ];

  const tabContent = [
    {
      id: 6,
      text: "<p>Breakthrough advancements in extraction processes and process optimisations are transforming resource recovery within desalination systems. At the Desalination &amp; Resource Recovery 2025 event, industry leaders will showcase pioneering projects that integrate advanced separation techniques and innovative catalysts to extract critical minerals from brine. Driven by policy mandates and a surge in technology adoption, these initiatives aim to enhance efficiency, reduce costs, and minimise environmental impacts. Major operators are exploring innovative methods to recover not only key elements but also micronutrients, micropollutants, and even trace microplastics, tackling the dual challenges of waste management and water pollution amid shifting market dynamics and global water scarcity.</p><p>Innovative extraction and treatment methodologies are driving transformation in the desalination sector. As utility companies and desalination operators adopt technology-driven solutions, brine valorisation is rapidly emerging as a key driver of operational efficiency and environmental sustainability. Companies are upgrading legacy infrastructure to tackle challenges posed by climate change, urbanisation, and water scarcity. While still in its early stages, the adoption of resource recovery processes is paving the way for a more resilient business model—one that not only lowers desalination's carbon footprint but also unlocks new growth opportunities. By advancing technological frontiers, the industry is reshaping its landscape and redefining possibilities in sustainable water treatment.</p>",
      longtext:
        "<p>Brine valorisation has become a top strategic priority for decision-makers in the desalination industry. What is driving this transformation? The advancement of extraction technologies that turn once-discarded brine into a valuable source of minerals such as sodium, lithium, and magnesium. At the Desalination &amp; Resource Recovery 2025 conference, explore how the industry is shifting from traditional brine disposal to resource recovery. Experts agree that rethinking brine management is now among the sector's most significant challenges and opportunities, marking a pivotal moment in the future of water treatment.</p>",
      title: "Brine Valorisation",
      slug: "BRINE VALORISATION",
      createdAt: "2023-11-13T14:48:49.000Z",
    },
    {
      id: 7,
      text: "<p>Switching to renewable energy sources—such as solar and wind—is emerging as a key factor in lowering operational costs and reducing desalination plants' reliance on fossil fuels. As green energy technologies continue to advance, desalination facilities are increasingly adopting these power sources to enhance efficiency while ensuring resilient water supply systems. Numerous studies confirm that renewable energy can be seamlessly integrated with modern desalination processes, offering both significant cost savings and a reduced environmental footprint.</p><p>Optimising energy recovery systems is a key driver in enhancing desalination performance. Technologies that reclaim thermal energy from processes like multi-effect distillation or recover pressure in reverse osmosis systems are helping facilities significantly reduce energy consumption. By harnessing waste heat and other recoverable energy sources, desalination operators can not only improve water production rates but also achieve substantial cost savings, creating new growth opportunities and attracting investment in the sector.</p><p>Investments in advanced heat exchangers and energy recovery devices are expected to account for a significant share of capital expenditure in the industry. By utilising state-of-the-art heat exchange technologies, modern desalination plants can capture residual thermal energy to improve process efficiency, reduce maintenance needs, and extend equipment lifespans. These technological advancements are emerging as a key force behind operational excellence, enabling utilities to tackle the dual challenges of rising energy costs and declining freshwater resources in an increasingly competitive, technology-driven market.</p><p>The adoption of advanced automation and control systems is transforming desalination plant operations. Intelligent control solutions that continuously monitor and adjust water flow, energy consumption, and process parameters are essential for maintaining peak performance under fluctuating demand conditions. By integrating digital technology with real-time analytics, desalination facilities can enhance operational efficiency while supporting a sustainable business model through proactive maintenance and optimised resource management.</p><p>The Desalination &amp; Resource Recovery 2025 event will be a dynamic platform for stakeholders across the desalination sector to exchange ideas, explore emerging technologies, and build collaborative partnerships. The conference will feature a technology-focused agenda that emphasises the water-energy nexus, showcasing innovative approaches driving the industry toward a more sustainable and resilient future. Attendees will engage with solutions tackling the complex challenges of water pollution, micropollutants, and the lasting impacts of outdated infrastructure, marking a pivotal moment in the global pursuit of sustainable resource management.</p>",
      longtext:
        "<p>The Desalination &amp; Resource Recovery 2025 conference will be a pivotal global forum where utility leaders, desalination experts, and industry innovators come together to tackle the urgent challenges of water scarcity and aging infrastructure while optimising costs and minimising environmental impacts. Driven by evolving market dynamics, rapid urbanisation, and the need for sustainable water supplies, the desalination industry is at a turning point. At the core of this transformation is the integration of renewable energy with cutting-edge energy recovery systems, an innovative approach that is enhancing operational efficiency and reshaping the future of water treatment and resource management.</p>",
      title: "Water-Energy Nexus",
      slug: "WATER ENERGY NEXUS",
      createdAt: "2023-11-13T14:49:31.000Z",
    },
    {
      id: 8,
      text: "<p>Across the sector, next-generation membranes are transforming water recovery processes. These advanced materials streamline operations by accelerating optimal performance and enabling more flexible, adaptable systems that address legacy infrastructure challenges while reducing water pollution, including micropollutants. Engineers and researchers now design and test these membranes in virtual environments before deploying them at full scale, ensuring they meet stringent performance standards and lower carbon footprints. This approach is driving technology adoption and laying the foundation for a more resilient, sustainable desalination framework.</p><p>Beyond traditional water treatment methods, the future of desalination is being driven by interconnected digital solutions and advanced membrane technologies. Secure data systems now enable utility companies and desalination operators to monitor and optimise performance in real-time, offering new business opportunities and growth prospects for the industry. At the Desalination &amp; Resource Recovery 2025 conference, stakeholders—including policymakers, financiers, industry leaders, and technical experts—will gather to explore how next-generation membranes are driving innovative projects that expand the boundaries of technological advancement. Amid the rising global challenges such as water scarcity and environmental pressures, the conference highlights a commitment to innovation that not only enhances efficiency but also shapes the future of sustainable water recovery.</p>",
      longtext:
        "<p>Breakthrough innovations in membrane technology are shaping the future of water treatment and resource recovery. Next-generation membranes, such as graphene-based and nanocomposite systems, are revolutionising desalination by dramatically improving filtration efficiency, increasing salt rejection rates, and extending operational lifespans. As water scarcity, climate change, and rapid urbanisation drive demands for sustainable water solutions, utility leaders and desalination experts are increasingly embracing these advanced technologies. What began as early research and pilot projects in membrane innovation has now evolved into essential solutions that optimise costs, reduce environmental impact, and address the desalination industry's most pressing challenges.</p>",
      title: "Next-Gen Membranes",
      slug: "NEXT GEN MEMBRANES",
      createdAt: "2023-11-13T14:50:07.000Z",
    },
    {
      id: 9,
      text: "<p>The trend is clear: AI-driven innovation is revolutionising the desalination industry by optimising filtration, predictive maintenance, and real-time water quality monitoring. With advanced analytics and machine learning, desalination operations can now enhance efficiency, lower operational costs, and reduce environmental impacts. This wave of technology adoption enables operators to improve water quality while effectively monitoring and managing micropollutants, microplastics, and micronutrients, ensuring compliance with stringent standards and minimising the overall carbon footprint.</p><p>Industry analysts predict significant growth in the global desalination market, driven by the urgent need to tackle water pollution and the dual challenges of resource scarcity and climate change. Around the world, facilities are reaching a turning point as AI-powered systems optimise costs and reduce environmental impacts, reshaping water treatment and resource recovery. This technology-driven shift is raising the bar for operational reliability, paving the way for scalable, decentralised water treatment solutions that can adapt to both ageing infrastructure and evolving demands.</p><p>At the Desalination &amp; Resource Recovery 2025 conference, companies and research institutions will showcase their latest solutions and products aimed at enhancing operational performance through AI-driven systems. The conference will provide a dynamic platform to explore emerging growth opportunities, tackle the complex challenges of water scarcity and pollution, and drive technological advancement in the desalination industry. Beyond immediate operational improvements, these innovations are reshaping the business landscape and strengthening the long-term sustainability of water treatment and resource recovery worldwide.</p>",
      longtext:
        "<p>Leaders in desalination and resource recovery will take the stage at the Desalination &amp; Resource Recovery 2025 forum. The event will create unique synergies between advanced water treatment processes and AI-driven systems, paving the way for a more sustainable and efficient water future. In a time of shifting market dynamics, water scarcity, climate change, urbanisation, and ageing infrastructure, the event unites utility leaders, desalination experts, operators, and policymakers from around the world to exchange insights and drive innovative collaborations.</p>",
      title: "AI-Driven Systems",
      slug: "AI DRIVEN SYSTEMS",
      createdAt: "2023-11-13T14:50:37.000Z",
    },
    {
      id: 10,
      text: "<p>Modern desalination facilities are shifting from traditional centralised treatment plants to dynamic systems that integrate energy-efficient technologies—such as next-generation reverse osmosis, forward osmosis, and membrane distillation—with renewable power and carbon capture solutions. By leveraging digital control systems and predictive analytics, operators can detect inefficiencies and optimise processes, reducing both operational costs and carbon footprints. This holistic approach not only tackles the dual challenges of water scarcity and climate change but also advances the circular economy by repurposing byproducts and reclaiming valuable minerals through innovative resource recovery practices.</p><p>Achieving meaningful decarbonisation in desalination requires rethinking traditional water treatment processes. Simply retrofitting older systems with renewable energy is no longer enough; instead, a complete reimagining of plant design and operations is essential. Integrated monitoring and automation systems provide critical data transparency, while advanced treatment processes maximise water production efficiency. Driven by strong sustainability policies, this approach empowers desalination operators to enhance efficiency, reduce costs, and lower their carbon footprint.</p><p>Looking ahead, the future of desalination depends on the industry's ability to adapt to shifting market dynamics and tackle challenges like ageing infrastructure and water pollution. The integration of renewable energy, carbon capture, and resource recovery technologies marks a pivotal moment—one where innovative strategies are driving technological progress and ushering in a new era of sustainable water production. As urbanisation and climate change reshape the global landscape, the industry is poised to advance toward a more resilient and environmentally sustainable future.</p><p>In a world where the most valuable resource is the one preserved from waste; the desalination industry is forging a path towards comprehensive sustainability. By adopting an integrated approach that merges cutting-edge water treatment processes with a strong commitment to decarbonisation, desalination operators are setting new standards for efficiency and environmental responsibility. These groundbreaking advancements will take centre stage at the Desalination &amp; Resource Recovery 2025 event, where global stakeholders—including utility leaders, desalination experts, and decision-makers—will gather to explore innovative solutions for a water-secure, low-carbon future.</p>",
      longtext:
        "<p>Decarbonisation and resource recovery are rapidly reshaping the desalination industry as operators and stakeholders work to reduce the carbon footprint of water production while ensuring a sustainable supply. In today's technology-driven landscape, the industry is undergoing a transformative shift, integrating advanced digital systems with innovative process controls. Amid growing concerns over water scarcity and climate change, industry leaders seek greater transparency and real-time analytics to optimise efficiency and minimise environmental impacts. This evolving approach is driving data-driven decision-making and new business models that enhance sustainability and resilience.</p>",
      title: "Decarbonisation",
      slug: "DECARBONISATION",
      createdAt: "2023-11-13T14:51:01.000Z",
    },
  ];

  const getCurrentTabData = () => {
    return tabContent.find((tab) => tab.slug === activeTab) || tabContent[0];
  };

  const handleTabChange = (slug) => {
    setActiveTab(slug);
    setIsExpanded(false); // Reset expansion when changing tabs
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const currentTab = getCurrentTabData();

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
          {/* Navigation Tabs */}
          <div
            className="row no-gutters bg-light"
            style={{ paddingTop: "80px", paddingBottom: "80px" }}
          >
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {tabContent.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`btn mx-1 my-1 px-3 py-2 text-uppercase font-weight-bold ${
                      activeTab === tab.slug
                        ? "btn-dark text-white"
                        : "btn-outline-dark bg-white text-dark"
                    }`}
                    onClick={() => handleTabChange(tab.slug)}
                    style={{
                      fontSize: window.innerWidth < 768 ? "0.75rem" : "0.85rem",
                      letterSpacing: "0.5px",
                      border:
                        activeTab === tab.slug ? "none" : "1px solid #333",
                      minWidth: "fit-content",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="row no-gutters">
            <div className="col-12">
              <div
                className="text-white py-5 transition-all"
                style={{
                  minHeight: isExpanded ? "auto" : "400px",
                  background: "#000",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <div>
                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                      <div className="text-center text-md-left px-3">
                        <h2
                          className="mb-4 p-0 text-uppercase"
                          style={{
                            fontSize: "36px",
                            fontWeight: "800",
                          }}
                        >
                          {currentTab.title}
                        </h2>

                        <div
                          className="mb-4 content-text"
                          style={{
                            fontSize: "18px",
                            lineHeight: "36px",
                            color: "#ffffff",
                            fontWeight: "500",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: isExpanded
                              ? currentTab.text
                              : currentTab.longtext,
                          }}
                        />

                        <div className="mt-4">
                          <button
                            onClick={toggleExpansion}
                            className="text-info font-weight-bold text-decoration-none d-inline-flex align-items-center bg-transparent border-0 p-0"
                            style={{
                              fontSize: "1.1rem",
                              letterSpacing: "1px",
                              cursor: "pointer",
                            }}
                          >
                            {isExpanded ? "SHOW LESS" : "SHOW MORE"}
                            <span
                              className="ml-2"
                              style={{
                                fontSize: "1.2rem",
                                transform: isExpanded
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition: "transform 0.3s ease-in-out",
                              }}
                            >
                              {isExpanded ? "↑" : "→"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom CSS for responsive behavior and animations */}
          <style jsx>{`
            @media (max-width: 767px) {
              .btn {
                font-size: 0.7rem !important;
                padding: 0.4rem 0.8rem !important;
                margin: 0.2rem !important;
              }

              .display-4 {
                font-size: 1.8rem !important;
                letter-spacing: 1px !important;
              }

              .lead {
                font-size: 0.95rem !important;
              }
            }

            @media (max-width: 575px) {
              .btn {
                font-size: 0.65rem !important;
                padding: 0.3rem 0.6rem !important;
              }

              .display-4 {
                font-size: 1.5rem !important;
              }
            }

            .btn:hover {
              transform: translateY(-1px);
              transition: all 0.2s ease;
            }

            .btn-dark:hover {
              background-color: #333 !important;
            }

            .btn-outline-dark:hover {
              background-color: #f8f9fa !important;
              border-color: #333 !important;
            }

            .content-text p {
              margin-bottom: 1.5rem;
            }

            .content-text p:last-child {
              margin-bottom: 0;
            }

            .transition-all {
              transition: all 0.5s ease-in-out;
            }

            button:focus {
              outline: none;
              box-shadow: none;
            }

            .text-info:hover {
              color: #17a2b8 !important;
              text-decoration: none !important;
            }
          `}</style>
        </div>
      </div>
      <SubscribeForm />
      <Footer />
    </>
  );
};

export default TrendDescriptionPage;
