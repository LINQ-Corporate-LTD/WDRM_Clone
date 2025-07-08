import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./ScrollToTop";
import Home from "./components/Home";
import Register from "./components/Register";
import Venue from "./components/Venue";
import Sponsor from "./components/Sponsor";
import MediaPartners from "./components/MediaPartners";
import Agenda from "./components/Agenda";
import WhoShouldAttend from "./components/WhoShouldAttend";
import FeaturedSpeaker from "./components/FeaturedSpeaker";
import Faq from "./components/Faq";
import CallForPresentation from "./components/CallForPresentation";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="booking" element={<Register />} />
            <Route path="venue" element={<Venue />} />
            <Route path="sponsor" element={<Sponsor />} />
            <Route path="media-partners" element={<MediaPartners />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="who-should-attend" element={<WhoShouldAttend />} />
            <Route path="featuredSpeaker" element={<FeaturedSpeaker />} />
            <Route path="faqs" element={<Faq />} />
            <Route path="speakers" element={<CallForPresentation />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
