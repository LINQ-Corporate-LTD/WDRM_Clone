import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FeaturedSpeaker = () => {
  const teamMembers = [
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

  const sliderRef = useRef(null);

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

  return (
    <section className="flex flex-col items-center justify-center mx-auto w-full min-h-[300px] bg-transparent">
      <div className="w-full">
        <div className="mx-auto mt-12 w-full max-w-[1450px] px-16">
          <div className="h-auto m-0 max-h-[280px] w-full">
            <Slider ref={sliderRef} {...settings}>
              {teamMembers.map((member) => (
                <div key={member.id} className="team-slide">
                  <div className="team-member">
                    <img
                      src={member.image || "/placeholder.svg"}
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
