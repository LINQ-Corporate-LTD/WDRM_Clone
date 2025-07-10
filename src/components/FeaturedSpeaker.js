import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FeaturedSpeaker = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
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


  // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <a
      onClick={onClick}
      className="flex items-center justify-center m-0 p-0 w-max bg-transparent border-none cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10"
      aria-label="Previous speakers"
      style={{ left: "-50px" }}
    >
      <img
        src="https://www.desalination-resource-recovery.com/images/icons/icon-arrow-left.png"
        alt="left arrow icon"
        loading="lazy"
        width="20"
        height="20"
      />
    </a>
  );

  const CustomNextArrow = ({ onClick }) => (
    <a
      onClick={onClick}
      className="flex items-center justify-center m-0 p-0 w-max bg-transparent border-none cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10"
      aria-label="Next speakers"
      style={{ right: "-50px" }}
    >
      <img
        src="https://www.desalination-resource-recovery.com/images/icons/icon-arrow-right.png"
        alt="right arrow icon"
        loading="lazy"
        width="20"
        height="20"
      />
    </a>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (member) => {
    navigate(`/speakerprofile/${member.slug}`, { state: member }); // ✅ Pass member object in route state
  };

  return (
    <section className="flex flex-col items-center justify-center mx-auto w-full min-h-[300px] bg-transparent">
      <div className="w-full">
        <div className="mx-auto mt-12 w-full max-w-[1450px] px-16">
          <div className="h-auto m-0 max-h-[280px] w-full">
            <Slider ref={sliderRef} {...settings}>
              {speaker_arr.map((member) => (
                <div key={member.id} className="team-slide">
                  <div className="team-member" style={{ cursor: "pointer" }} onClick={() => handleClick(member)}>
                    <img
                      src={member.companyimage || "/placeholder.svg"}
                      alt={member.name}
                      className="member-image"
                    />
                    <div className="member-info">
                      <p className="member-name">{member.name}</p>
                      <p className="member-title">{member.title}</p>
                      {member.subtitle && (
                        <p className="member-subtitle">{member.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: -50px;
        }

        .slick-dots li button:before {
          font-size: 12px;
          color: #ccc;
        }

        .slick-dots li.slick-active button:before {
          color: #666;
        }

        .slick-track {
          display: flex;
          align-items: center;
        }

        .slick-slide {
          height: auto;
        }

        .slick-slide > div {
          height: 100%;
        }

        .slick-list {
          overflow: hidden;
        }

        .team-slide {
          padding: 0 10px;
        }

        .team-member {
          position: relative;
          background: linear-gradient(
            0deg,
            #00000059 17%,
            hsla(0, 0%, 72%, 0.099) 70.76%,
            #fff0
          );
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .member-image {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        .member-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 30px 15px 15px;
          text-align: left;
        }

        .member-name {
          color: #fff;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 0.2px;
          line-height: 18px;
          margin: 0;
          padding: 0;
          text-shadow: 1px 3px 3px #0000004d;
          text-transform: capitalize;
          white-space: normal;
        }

        .member-title {
          font-size: 14px;
          margin: 0;
          opacity: 0.9;
          line-height: 1.3;
        }

        .member-subtitle {
          font-size: 13px;
          margin: 2px 0 0 0;
          opacity: 0.8;
          line-height: 1.2;
        }
      `}</style>
    </section>
  );
};

export default FeaturedSpeaker;
