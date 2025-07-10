import Footer from "../Footer";
import CountSection from "./CountSection";
import ForumSection from "./ForumSection";
import HomeSpeakerSlider from "./HomeSpeakerSlider";
import IndustryTrend from "./IndustryTrend";
import KeyTopics from "./KeyTopics";
import LatestNews from "./LatestNews";
import LogoCarousel from "./LogoCarousel";
import Navbar from "./Navbar";
import PastAttandessSection from "./PastAttandessSection";
import RelatedEventsSection from "./RelatedEventsSection";
import TestimonialCarousel from "./TestimonialCarousel";
import VideoSection from "./VideoSection";
import Sponsors1 from "../../src/assets/images/Sponsor/1.jpg";
import Sponsors2 from "../../src/assets/images/Sponsor/2.png";
import Sponsors3 from "../../src/assets/images/Sponsor/3.png";
import Sponsors4 from "../../src/assets/images/Sponsor/4.png";
import Sponsors5 from "../../src/assets/images/Sponsor/5.png";
import Sponsors6 from "../../src/assets/images/Sponsor/6.png";
import "../../src/assets/css/home.css";


const Home = () => {
  return (
    <div>
      <Navbar />
      <VideoSection />
      <HomeSpeakerSlider />
      <ForumSection />
      <KeyTopics />
      <CountSection />
      <LogoCarousel />
      <LatestNews />
      <TestimonialCarousel />
      <PastAttandessSection />
              <div class="sponsors-section">
          <h1 class="sponsors-title">OUR SPONSORS</h1>

          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12">
                <div class="sponsor-card">
                  <div class="sponsor-logo">
                    <img src={Sponsors1} alt="" className="w-1/2" />
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12">
                <div class="sponsor-card">
                  <div class="sponsor-logo electro-scan">
                    <img src={Sponsors2} alt="" className="w-1/2" />
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12">
                <div class="sponsor-card">
                  <div class="sponsor-logo">
                    <img src={Sponsors3} alt="" className="w-1/2" />
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12">
                <div class="sponsor-card">
                  <div class="sponsor-logo ">
                    <img src={Sponsors4} alt="" className="w-1/2" />
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12">
                <div class="sponsor-card">
                  <div class="sponsor-logo ">
                    <img src={Sponsors5} alt="" className="w-1/2" />
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-12">
                <div class="sponsor-card">
                  <div class="sponsor-logo">
                    <img src={Sponsors6} alt="" className="w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <IndustryTrend />
      <RelatedEventsSection />
      <Footer />
    </div>
  );
};
export default Home;
