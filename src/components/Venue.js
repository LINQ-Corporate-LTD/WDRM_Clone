import img1 from "../assets/images/VenueGallery/1747979445814.jpg";
import img2 from "../assets/images/VenueGallery/1747979452318.jpg";
import img3 from "../assets/images/VenueGallery/1747979457233.jpg";
import img4 from "../assets/images/VenueGallery/1747979462165.jpg";
import img5 from "../assets/images/VenueGallery/1747979468189.jpg";
import img6 from "../assets/images/VenueGallery/1747979489675.png";

import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import LogoCarousel from "./LogoCarousel";
// import { useNavigate } from "react-router-dom";
import './../assets/css/venue.css';

const Venue = () => {
  // const navigate = useNavigate();
  return (
    <>
      {/* <Navbar forceScrolled /> */}
      
        <div class="venue-container">
          <div class="row g-0 w-100 bg-img">
            <div class="col-lg-6  p-0">
              <img
                src="https://www.desalination-resource-recovery.com/static/media/venue-image.ad9c328038bb8cdfb219.png"
                alt="Sheraton Dubai Creek Hotel & Towers exterior"
                class=" venue-image w-100"
              />
            </div>

            <div class="col-lg-6  m-0">
              <div class="venue-content">
                <h1 class="venue-title">VENUE</h1>

                <h2 class="venue-subtitle">
                  Sheraton Dubai Creek Hotel & Towers Dubai, UAE
                </h2>

                <p class="venue-description">
                  This year's event will be hosted at the Sheraton Dubai Creek
                  Hotel & Towers, where modern elegance blends seamlessly with
                  authentic Arabic hospitality. This 5-star venue offers an
                  elevated experience, the Sheraton Club rooms and suites
                  provide stunning creek views and heightened luxury.
                </p>

                <p class="venue-description">
                  Indulge in award-winning international cuisine at the hotel's
                  on-site dining venues. Savor high-quality Italian dishes at
                  Vivaldi, enjoy classic British pub fare at The Chelsea Arms,
                  or grab small bites and snacks around the clock at the Lobby
                  Café. With a range of world-class culinary options to suit
                  every taste and budget, the Sheraton Dubai Creek Hotel &
                  Towers offers an exceptional setting for the event and a
                  memorable stay in Dubai.
                </p>

                <p class=" des_set">
                  More information about the venue and facilities can be found
                  at
                   
                </p>
                <a href="#" class="venue-link">
                    Sheraton Dubai Creek Hotel & Towers, Dubai, UAE
                  </a>

                <button class="btn more-info-btn">MORE INFORMATION</button>
              </div>
            </div>
          </div>
        </div>

        <section class="venue-gallery">
          <div class="gallery-container">
            <h2 class="gallery-title">VENUE GALLERY</h2>

            <div class="gallery-grid">
              <div class="gallery-item item-1">
                <div class="row-item ">
                  <img src={img1} alt="Luxury Hotel Exterior" />
                </div>
                <div class="row-item  ">
                  <img src={img2} alt="Luxury Hotel Exterior" />
                </div>
              </div>

              <div class="gallery-item item-2">
                <div class="row-item ">
                  <img src={img3} alt="Luxury Hotel Exterior" />
            
                </div>
                <div class="row-item ">
                  <img src={img4} alt="Luxury Hotel Exterior" />
                </div>
              </div>

              <div class="gallery-item item-3">
                <div class="row-item">
                  <img src={img5} alt="Luxury Hotel Exterior" />
                </div>
                <div class="row-item">
                  <img src={img6} alt="Luxury Hotel Exterior" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="venue-contact">
  <div className="container">
    <div className="conact_set">
      <h2 className="venue-title text-center">Contact the Venue</h2>

      <div className="venue-card-wrapper">
        <div
          className="venue-card"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(
              "https://www.google.com/maps/dir//Baniyas+Rd+-+Port+Saeed+-+Riggat+Al+Buteen+-+Dubai+-+United+Arab+Emirates/@25.2614781,55.2313155,63457m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f5d98998eab01:0x43788f91ec9688bb!2m2!1d55.313717!2d25.261501?entry=ttu",
              "_blank"
            );
          }}
        >
          <h3 className="venue-card-title">Location</h3>
          <div className="venue-location-info">
            <div className="venue-location">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                Sheraton Dubai Creek Hotel & Towers Baniyas St., P.O. Box 4250
                <br />
                Dubai, UAE
              </div>
            </div>
          </div>
        </div>

        <div className="venue-card">
          <h3 className="venue-card-title">Contact</h3>
          <div className="venue-contact-info">
            <div className="venue-contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+97142281111">+971 4-2281111</a>
            </div>
            <div className="venue-contact-item">
              <i className="fas fa-globe"></i>
              <a href="https://www.marriott.com" target="_blank" rel="noopener noreferrer">
                www.marriott.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="venue-cta">
        <button
          className="venue-btn"
          onClick={() => {
            window.open(
              "https://www.google.com/maps/dir//Baniyas+Rd+-+Port+Saeed+-+Riggat+Al+Buteen+-+Dubai+-+United+Arab+Emirates/@25.2614781,55.2313155,63457m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f5d98998eab01:0x43788f91ec9688bb!2m2!1d55.313717!2d25.261501?entry=ttu",
              "_blank"
            );
          }}
        >
          Take Me There
        </button>
      </div>
    </div>
  </div>
</section>

      
      {/* <LogoCarousel /> */}
      {/* <SubscribeForm />
      <Footer /> */}
    </>
  );
};
export default Venue;
