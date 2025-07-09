import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/assets/css/logoslider.css"
import partner1 from "../../src/assets/images/partners/partner1.png";
import partner2 from "../../src/assets/images/partners/partner2.png";
import partner3 from "../../src/assets/images/partners/partner3.png";
import partner4 from "../../src/assets/images/partners/partner4.png";
import partner5 from "../../src/assets/images/partners/partner5.png";
import partner6 from "../../src/assets/images/partners/partner6.png";
import partner7 from "../../src/assets/images/partners/partner7.png";
import partner8 from "../../src/assets/images/partners/partner8.png";
import partner9 from "../../src/assets/images/partners/partner9.png";
import partner10 from "../../src/assets/images/partners/partner10.png";

const logos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
];

const LogoCarousel = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="d-flex align-items-center justify-content-between logo-slider-container" style={{backgroundColor: "#ffffff"}}>
      <div>
        {/* Left Button */}
        <button className="border-0" style={{background:'none',fontSize: '3rem',border: 'none',outline: 'none',boxShadow: 'none'}} onClick={() => sliderRef.current.slickPrev()}>&#8592;</button>
      </div>

      {/* Slider */}
      <div style={{ width: "80%" }}>
        <Slider ref={sliderRef} {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="text-center p-2">
              <img
                src={logo}
                style={{
                  maxWidth: "80%",
                  maxHeight: "70px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="border-0">
        {/* Right Button */}
        <button className="border-0" style={{background:'none',fontSize: '3rem',border: 'none',outline: 'none',boxShadow: 'none'}} onClick={() => sliderRef.current.slickNext()}>&#8594;</button>
      </div>
    </div>
  );
};

export default LogoCarousel;
