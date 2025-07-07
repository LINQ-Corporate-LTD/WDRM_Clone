import img1 from "../../src/assets/images/VenueGallery/1747979445814.jpg";
import img2 from "../../src/assets/images/VenueGallery/1747979452318.jpg";
import img3 from "../../src/assets/images/VenueGallery/1747979457233.jpg";
import img4 from "../../src/assets/images/VenueGallery/1747979462165.jpg";
import img5 from "../../src/assets/images/VenueGallery/1747979468189.jpg";
import img6 from "../../src/assets/images/VenueGallery/1747979489675.png";
import "../../src/assets/css/venue.css";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import LogoCarousel from "./LogoCarousel";

const Venue = () => {
  return (
    <>
      <Navbar forceScrolled />
      <div className="pt-[90px]">
        <div class="venue-container">
          <div class="row g-0 w-100">
            <div class="col-lg-6 col-md-6">
              <img
                src="https://www.desalination-resource-recovery.com/static/media/venue-image.ad9c328038bb8cdfb219.png"
                alt="Sheraton Dubai Creek Hotel & Towers exterior"
                class="img-fluid venue-image w-100"
              />
            </div>

            <div class="col-lg-6 col-md-6 m-0">
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

                <p class="venue-description">
                  More information about the venue and facilities can be found
                  at
                  <a href="#" class="venue-link">
                    Sheraton Dubai Creek Hotel & Towers, Dubai, UAE
                  </a>
                </p>

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
                <div class="row-item">
                  <img src={img1} alt="Luxury Hotel Exterior" />
                </div>
                <div class="row-item">
                  <img src={img2} alt="Luxury Hotel Exterior" />
                </div>
              </div>

              <div class="gallery-item item-2">
                <div class="row-item">
                  <img src={img3} alt="Luxury Hotel Exterior" />
                </div>
                <div class="row-item">
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

        <section class="contact-section">
          <div class="">
            <div class="contact-content">
              <h2 class="section-title_venue text-[#080808]">
                Contact the Venue
              </h2>

              <div class="contact-cards">
                <div class="contact-card">
                  <h3 class="card-title">Location</h3>
                  <div class="location-info">
                    <div class="venue-name d-flex">
                      <div className="mr-2">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        {" "}
                        Sheraton Dubai Creek Hotel & Towers Baniyas St., P.O.
                        Box 4250
                        <br /> Dubai, UAE
                      </div>
                    </div>
                  </div>
                </div>

                <div class="contact-card">
                  <h3 class="card-title">Contact</h3>
                  <div class="contact-info">
                    <div class="contact-item">
                      <i class="fas fa-phone"></i>
                      <a href="tel:+97142281111">+971 4-2281111</a>
                    </div>
                    <div class="contact-item">
                      <i class="fas fa-globe"></i>
                      <a href="https://www.marriott.com" target="_blank">
                        www.marriott.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cta-button">
                <a href="#" class="btn-take-me" onclick="openDirections()">
                  Take Me There
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <LogoCarousel />
      <SubscribeForm />
      <Footer />
    </>
  );
};
export default Venue;
