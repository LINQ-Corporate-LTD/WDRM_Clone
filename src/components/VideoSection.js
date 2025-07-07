import "../../src/assets/css/video.css"

const VideoSection = () => (
  // <section className="relative w-full h-screen flex items-end overflow-hidden">
  //   {/* Background Video */}
  //   <video
  //     className="absolute left-0 right-0 w-full h-full object-cover object-center z-0"
  //     src={heroVideo}
  //     autoPlay
  //     muted
  //     loop
  //     playsInline
  //     poster="https://www.desalination-resource-recovery.com/api/images/backgroundimage/1742799210721.jpg" // fallback image
  //   />
  //   {/* Overlay for custom gradient */}
  //   <div
  //     className="absolute inset-0 z-10"
  //     style={{
  //       background:
  //         "linear-gradient(108.01deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 41.4%, rgba(0, 186, 255, 0.491765) 82.8%, rgba(0, 186, 255, 0.24) 124.19%)",
  //     }}
  //   />

  //   {/* Hero Content */}
  //   <div className="absolute top-0 left-[15%] md:h-full h-1/2 flex flex-col justify-center md:pl-36 pr-4 z-20">
  //     <div className="relative max-w-2xl">
  //       {/* Circular SVG graphic replaced with image */}
  //       <img
  //         src={bgGraphic}
  //         alt="Hero graphic"
  //         className="absolute -left-50 -top-50  w-150 h-150 z-0 object-contain opacity-80 md:block none pointer-events-none select-none"
  //       />
  //       {/* Main Title */}
  //       <p className="relative z-10 text-white text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-2 text-left drop-shadow-lg">
  //         DESALINATION & RESOURCE
  //         <br />
  //         RECOVERY 2025
  //       </p>
  //       {/* Subtitle */}
  //       <p className="relative z-10 text-white text-lg sm:text-xl font-semibold mb-8 text-left drop-shadow">
  //         27 – 28 October, 2025 | Dubai, UAE
  //       </p>
  //     </div>
  //   </div>

  //   {/* CTA Bar */}
  //   <div className="relative w-full z-30 pb-12 flex  justify-center">
  //     <div className="flex flex-col sm:flex-row gap-4 md:w-full bg-[#00000075] p-4 w-1/2 max-w-5xl">
  //       {/* CTA Button 1 */}
  //       <div className="flex-1 hover:bg-white hover:text-black text-white bg-black bg-opacity-80 transition rounded p-6 flex flex-col items-start min-w-[220px]">
  //         <a
  //           href="#program"
  //           className="text-lg font-extrabold uppercase tracking-wide flex items-center gap-2 transition"
  //         >
  //           View Program <span aria-hidden>↗</span>
  //         </a>
  //         <span className="text-sm mt-2 opacity-80">
  //           Discover the highlights of the event
  //         </span>
  //       </div>
  //       {/* CTA Button 2 */}
  //       <div className="flex-1 hover:bg-white hover:text-black text-white bg-black bg-opacity-80 transition rounded p-6 flex flex-col items-start min-w-[220px]">
  //         <a
  //           href="#contact"
  //           className="text-lg font-extrabold uppercase tracking-wide flex items-center gap-2 transition"
  //         >
  //           Connect With Us <span aria-hidden>↗</span>
  //         </a>
  //         <span className="text-sm mt-2 opacity-80">
  //           Get your questions answered by our team
  //         </span>
  //       </div>
  //       {/* CTA Button 3 */}
  //       <div className="flex-1 hover:bg-white hover:text-black text-white bg-black bg-opacity-80 transition rounded p-6 flex flex-col items-start min-w-[220px]">
  //         <a
  //           href="#partners"
  //           className="text-lg font-extrabold uppercase tracking-wide flex items-center gap-2 transition"
  //         >
  //           Become a Partner <span aria-hidden>↗</span>
  //         </a>
  //         <span className="text-sm mt-2 opacity-80">
  //           Join as a sponsor and reserve your booth
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // </section>
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
                      <p>
                        Discover the highlights of the event
                      </p>
                    </div>
                    <div
                      className="HeaderAfs_button__Xh3tR"
                      // style={{ backgroundColor: "rgb(8, 8, 8)" }}
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
                      <p>
                        Get your questions answered by our team
                      </p>
                    </div>
                    <div
                      className="HeaderAfs_button__Xh3tR"
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
                      <p>
                        Join as a sponsor and reserve your booth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
);

export default VideoSection;
