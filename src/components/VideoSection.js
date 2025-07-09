import { useNavigate } from "react-router-dom";
import "../../src/assets/css/video.css";

const VideoSection = () => {
  const navigate = useNavigate();
  return (
    <div className="HeaderAfs_container__SNEhd custom-style-header">
      <div className="HeaderAfs_videoContainer__5vwBt">
        <div>
          <div
            className="HeaderAfs_overlay__8g2ZS"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          ></div>
          <video
            className="HeaderAfs_video__Nn24k"
            autoPlay
            muted
            loop
            playsInline
            poster="https://www.desalination-resource-recovery.com/api/images/backgroundimage/1742799210721.jpg" // fallback image
          >
            <source
              src="https://desalination-resource-recovery.com/api/images/backgroundimage/1742799257845.webm"
              type="video/webm"
            />
            <source
              src="https://desalination-resource-recovery.com/api/images/backgroundimage/1742799349972.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="HeaderAfs_innerContainer__WL1xo custom-style-header-innerContainer">
        <div className="HeaderAfs_upper__6yp+b custom-style-header-upper">
          <div
            className="HeaderAfs_graphic__pSbOC custom-style-header-graphic"
            loading="lazy"
            style={{
              backgroundImage:
                'url("https://desalination-resource-recovery.com/api/images/1742798949411.png")',
            }}
          >
            <div className="HeaderAfs_text__ayY5V custom-style-header-text">
              <h1>
                <span>
                  Desalination
                  <br /> &amp; Resource
                </span>
                Recovery 2025
              </h1>
              <p className="HeaderAfs_HeaderTextLg__8q91C">
                27 - 28 October, 2025 | Dubai, UAE
              </p>
              <p className="HeaderAfs_HeaderTextSm__HcrUu">
                27 - 28 October, 2025
                <br />
                Dubai, UAE
              </p>
            </div>
          </div>
        </div>
        <div className="HeaderAfs_lower__Cf6UI">
          <div className="HeaderAfs_lowerContainer__HHpUV">
            <div className="HeaderAfs_buttonContainer__67QVi">
              <div
                className="HeaderAfs_button__Xh3tR"
                // style={{ backgroundColor: "rgb(8, 8, 8)" }}
                onClick={() => navigate("/booking")}
              >
                <h4>
                  view program
                  <img
                    src="https://www.desalination-resource-recovery.com/images/icons/up-arrow.png"
                    alt="arrow icon"
                    width="15"
                    loading="lazy"
                  />
                </h4>
                <p>Discover the highlights of the event</p>
              </div>
              <div
                className="HeaderAfs_button__Xh3tR"
                // style={{ backgroundColor: "rgb(8, 8, 8)" }}
                onClick={() => navigate("/contact-us")}
              >
                <h4>
                  connect with us
                  <img
                    src="https://www.desalination-resource-recovery.com/images/icons/up-arrow.png"
                    alt="arrow icon"
                    width="15"
                    loading="lazy"
                  />
                </h4>
                <p>Get your questions answered by our team</p>
              </div>
              <div 
              className="HeaderAfs_button__Xh3tR"
              onClick={() => navigate("/sponsor")}
              >
                <h4>
                  become a partner
                  <img
                    src="https://www.desalination-resource-recovery.com/images/icons/up-arrow.png"
                    alt="arrow icon"
                    width="15"
                    loading="lazy"
                  />
                </h4>
                <p>Join as a sponsor and reserve your booth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
