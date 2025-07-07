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
      <IndustryTrend />
      <RelatedEventsSection />
      <Footer />
    </div>
  );
};
export default Home;
