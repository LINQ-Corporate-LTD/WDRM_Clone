import React, { useState, useEffect } from "react";
import '../../src/assets/css/ExhibitorPackages.css'
import Sponsors7 from "../../src/assets/images/Sponsor/sponsor-image (1).png";
import Navbar from "./Navbar";
import LogoCarousel from "./LogoCarousel";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import Testimonials3 from "../../src/assets/images/testominal/testominal.webp";
import Testimonials4 from "../../src/assets/images/testominal/testominal2.webp";
import Testimonials5 from "../../src/assets/images/testominal/testominal3.webp";
import Testimonials6 from "../../src/assets/images/testominal/testominal4.webp";


const ExhibitorPackages = () => {
    const sponsorPackages = [
        {
            title: "Lanyard Sponsor",
            price: "AED 1750",
            description: "Your logo on every lanyard creating constant brand presence all around the venue.",
        },
        {
            title: "Name Badge Sponsor",
            price: "AED 1450",
            description: "Place your brand front and center on every attendee badge for high visibility.",
        },
        {
            title: "Exclusive Email Blast",
            price: "AED 1750",
            description: "Send your message directly to delegates with exclusive exposure.",
        },
        {
            title: "Pull-up Banner Placement",
            price: "AED 750",
            description: "Get seen in high-traffic zones with bold, upright branding.",
        },
        {
            title: "Drinks Reception Sponsor",
            price: "AED 1450",
            description: "Toast to your brand during the most social part of the event.",
        },
        {
            title: "Luncheon Sponsor",
            price: "AED 1250",
            description: "Feature your brand alongside the buffet everyone looks forward to.",
        },
        {
            title: "Break Sponsor",
            price: "AED 500",
            description: "Be the name they see when they grab coffee or snack.",
        },
        {
            title: "Raffle Draw Sponsor",
            price: "AED 950",
            description: "Create buzz and get noticed while attendees win prizes.",
        },
        {
            title: "Delegate Pack Sponsor",
            price: "AED 1250",
            description: "Stay top of mind with your logo on materials everyone receives.",
        },
        {
            title: "Insertion in Delegate Packs",
            price: "AED 750",
            description: "Put your flyer, promo or gift directly into every hands.",
        },
        {
            title: "Placement on Seats",
            price: "AED 950",
            description: "Your brand gets noticed before the session even begins.",
        },
        {
            title: "Larger Logo on Website",
            price: "AED 500",
            description: "Stand out online with a bigger, more prominent logo placement.",
        },
    ]

    const testimonialImage = [Testimonials3, Testimonials4, Testimonials5, Testimonials6]

    const testimonials = [
        {
            name: "Cor Merks",
            company: "Ramboll",
            quote: "Very on-topic approach. Excellent networking opportunities.",
        },
        {
            name: "Kelbij star",
            company: "Deltares",
            quote: "I met new parties that were active in this sector.",
        },
        {
            name: "Steve Kaye",
            company: "UKWIR",
            quote: "It was a great showcase of cutting-edge technologies, with chances to network globally.",
        },
        {
            name: "Matthijs Stel",
            company: "Evides",
            quote: "It offered ideas for applying new technologies across the entire water industry value chain.",
        },
        {
            name: "Przemysław Zakościelny",
            company: "vonRoll Infratec (services) AG",
            quote: "It was an excellent opportunity to explore solutions and participate in meaningful discussions.",
        },
        {
            name: "David Hurley",
            company: "AVK UK",
            quote: "It proved fantastic for sharing knowledge and discovering innovative products.",
        },
    ]


    const allowedRow1and3Indexes = [0, 3]; // Testimonials3 & Testimonials6
    const allowedRow2Indexes = [1, 2];     // Testimonials4 & Testimonials5

    const [index13, setIndex13] = useState(0); // For row 1 and 3
    const [row2Left, setRow2Left] = useState(0);
    const [row2Right, setRow2Right] = useState(1);

    useEffect(() => {
        // Row 1 and 3 update every 5s
        const interval13 = setInterval(() => {
            setIndex13(prev => (prev + 1) % allowedRow1and3Indexes.length);
        }, 5000);

        // Row 2 starts after 5s, then updates every 8s
        const timeout2 = setTimeout(() => {
            const updateRow2 = () => {
                let left = Math.floor(Math.random() * allowedRow2Indexes.length);
                let right;
                do {
                    right = Math.floor(Math.random() * allowedRow2Indexes.length);
                } while (right === left); // Ensure different images

                setRow2Left(left);
                setRow2Right(right);
            };

            updateRow2(); // Initial update at 5s

            const interval2 = setInterval(updateRow2, 8000); // Every 8s after that

            // Cleanup interval2 only
            const cleanup = () => clearInterval(interval2);
            window.addEventListener("beforeunload", cleanup);
            return cleanup;
        }, 5000);

        // Cleanup both timers
        return () => {
            clearInterval(interval13);
            clearTimeout(timeout2);
        };
    }, []);

    const row1Index = allowedRow1and3Indexes[index13];
    const row3Index = allowedRow1and3Indexes[(index13 + 1) % allowedRow1and3Indexes.length];

    const row1 = testimonials[row1Index];
    const row3 = testimonials[row3Index];
    const row2 = testimonials[allowedRow2Indexes[row2Left]];

    const row1Image = testimonialImage[row1Index];
    const row2ImageLeft = testimonialImage[allowedRow2Indexes[row2Left]];
    const row2ImageRight = testimonialImage[allowedRow2Indexes[row2Right]];
    const row3Image = testimonialImage[row3Index];

    return (
        <>
            <Navbar forceScrolled />
            <div class="pt-[50px]">
                <div class="exhibition-banner">
                    <div class="container-fluid_sponsor">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12 mb-4 mb-lg-0 p-0">
                                <img
                                    src="https://www.desalination-resource-recovery.com/images/sponsor-landing.png"
                                    alt="Business professionals examining desalination equipment models"
                                    class="banner-image"
                                />
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="content-section">
                                    <h1 class="main-heading_sponsor">
                                        EXHIBIT YOUR SERVICES AT DESALINATION & RESOURCE RECOVERY
                                        2025
                                    </h1>

                                    <p class="description-text">
                                        The Desalination & Resource Recovery 2025 event will be one
                                        of the largest exhibitions. A diverse range of utilities and
                                        desalination facilities will connect with leading technology
                                        providers and water treatment manufacturers to explore
                                        innovative solutions for sustainable desalination and
                                        resource optimisation.
                                    </p>

                                    <p class="description-text">
                                        We offer customised sponsorship and exhibitor packages,
                                        providing a cost-effective way to reach both existing and
                                        new target clients.
                                    </p>

                                    <button
                                        class="exhibit-btn_sponsor mt-5"
                                        onclick="handleExhibitClick()"
                                    >
                                        EXHIBIT NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pricing-section_ExhibitorPackages">
                    <div class="container">
                        <h1 class="section-title_ExhibitorPackages">EXHIBITOR PACKAGES</h1>
                        <p class="section-subtitle_ExhibitorPackages">A cost-effective path to helping you get your message out to existing or new target clients.</p>

                        <div class="pricing-table_ExhibitorPackages">

                            <div class="pricing-header_ExhibitorPackages p-0">
                                <div class="benefits-header_ExhibitorPackages"></div>
                                <div class="package-header_ExhibitorPackages silver-header_ExhibitorPackages">SILVER</div>
                                <div class="package-header_ExhibitorPackages gold-header_ExhibitorPackages">GOLD</div>
                                <div class="package-header_ExhibitorPackages platinum-header_ExhibitorPackages">PLATINUM</div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages pr-0">
                                <div class="benefit-cell_ExhibitorPackages benefits-header_ExhibitorPackages text-light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>BENEFITS</div>
                                <div class="package-cell price_ExhibitorPackages-cell">
                                    <div class="price_ExhibitorPackages">AED 7995</div>
                                    <div class="original-price_ExhibitorPackages">AED 11995</div>
                                </div>
                                <div class="package-cell price_ExhibitorPackages-cell">
                                    <div class="price_ExhibitorPackages">AED 9995</div>
                                    <div class="original-price_ExhibitorPackages">AED 15995</div>
                                </div>
                                <div class="package-cell price_ExhibitorPackages-cell">
                                    <div class="price_ExhibitorPackages">AED 13995</div>
                                    <div class="original-price_ExhibitorPackages">AED 21995</div>
                                </div>
                            </div>


                            {/* <div class="pricing-row_ExhibitorPackages">
                    <div class="benefit-cell_ExhibitorPackages"></div>
                    <div class="package-cell">2</div>
                    <div class="package-cell">3</div>
                    <div class="package-cell">4</div>
                </div> */}


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Premium Delegate Passes</div>
                                </div>
                                <div class="package-cell"><div class="package-cell">2</div></div>
                                <div class="package-cell"> <div class="package-cell">3</div></div>
                                <div class="package-cell"><div class="package-cell">4</div></div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Full access to all conference activities</div>
                                    <div class="benefit-description_ExhibitorPackages">Including networking sessions, presentations and welcome</div>
                                </div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Your Logo on Conference Website</div>
                                    <div class="benefit-description_ExhibitorPackages">which attracts thousands of visitors</div>
                                </div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Exhibit Space</div>
                                    <div class="benefit-description_ExhibitorPackages">Includes draped table (approx. 6ft), 2 chairs</div>
                                </div>
                                <div class="package-cell">
                                    <div class="space-text">8ft x 8ft</div>
                                </div>
                                <div class="package-cell">
                                    <div class="space-text">10ft x 10ft</div>
                                </div>
                                <div class="package-cell">
                                    <div class="space-text">10ft x 20ft</div>
                                </div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Invite Colleagues or Guests at a Discount</div>
                                </div>
                                <div class="package-cell">
                                    <div class="discount-text">20% Discount</div>
                                </div>
                                <div class="package-cell">
                                    <div class="discount-text">25% Discount</div>
                                </div>
                                <div class="package-cell">
                                    <div class="discount-text">30% Discount</div>
                                </div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Sponsorship level branding on event days</div>
                                    <div class="benefit-description_ExhibitorPackages">Logo on signage and holding slides</div>
                                </div>
                                <div class="package-cell"><i class="fas fa-minus cross-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Your Logo on Delegate Packs</div>
                                </div>
                                <div class="package-cell"><i class="fas fa-minus cross-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Literature Distribution in Delegate Packs</div>
                                    <div class="benefit-description_ExhibitorPackages">(materials supplied by you)</div>
                                </div>
                                <div class="package-cell"><i class="fas fa-minus cross-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Speaking Slot: 20-minute presentation</div>
                                    <div class="benefit-description_ExhibitorPackages">(subject to editorial approval)</div>
                                </div>
                                <div class="package-cell"><i class="fas fa-minus cross-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-minus cross-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Conference Chair: Opportunity to Chair the Conference</div>
                                    <div class="benefit-description_ExhibitorPackages">(full access will be provided to assist)</div>
                                </div>
                                <div class="package-cell"><i class="fas fa-minus cross-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-minus cross-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages">
                                    <div class="benefit-title_ExhibitorPackages">Press Release Email Blast</div>
                                    <div class="benefit-description_ExhibitorPackages">Announcement as Sponsor</div>
                                </div>
                                <div class="package-cell"><i class="fas fa-minus cross-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-minus cross-icon"></i></div>
                                <div class="package-cell"><i class="fas fa-check check-icon"></i></div>
                            </div>


                            <div class="pricing-row_ExhibitorPackages">
                                <div class="benefit-cell_ExhibitorPackages"></div>
                                <div class="package-cell">
                                    <button class="book-btn_ExhibitorPackages">BOOK YOUR BOOTH</button>
                                </div>
                                <div class="package-cell">
                                    <button class="book-btn_ExhibitorPackages">BOOK YOUR BOOTH</button>
                                </div>
                                <div class="package-cell">
                                    <button class="book-btn_ExhibitorPackages">BOOK YOUR BOOTH</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', fontSize: "36px", textTransform: "uppercase", fontWeight: 800, color: "#181818", marginTop: "82px", marginBottom: "82px" }}>
                    <h2 style={{marginBottom : "30px"}}>INDUSTRY-LEADING PARTICIPANTS AT OUR SHOWS</h2>
                    <LogoCarousel />
                </div>

                <section className="sponsor-section">
                    <div className="sponsor-container">
                        <h1 className="main-title_ExhibitorPackages">Sponsor Packages</h1>

                        <div className="sponsor-grid">
                            {sponsorPackages.map((pkg, index) => (
                                <div key={index} className="sponsor-card_ExhibitorPackages">
                                    <div className="sponsor-content">
                                        <div className="sponsor-title">{pkg.title}</div>
                                        <div className="sponsor-price">{pkg.price}</div>
                                        <div className="sponsor-description">{pkg.description}</div>
                                    </div>
                                    <button className="interest-btn">I am interested</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="networking-section">
                    <div className="container">
                        <h2 className="text-black text-[30px] font-extrabold my-12 p-0 text-center uppercase">
                            they've attended our events
                        </h2>

                        {/* ROW 1 */}
                        <div className="row">
                            <div className="col-md-8">
                                <img src={row1Image} alt={row1.name} className="w-100 h-100" />
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="testimonial-section w-100 h-100">
                                    <div className="p-5">
                                        <div className="testimonial-text">{row1.quote}</div>
                                        <div className="testimonial-author">{row1.name}</div>
                                        <div className="testimonial-company">{row1.company}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2 */}
                        <div className="row">
                            <div className="col-md-4">
                                <img src={row2ImageLeft} alt="Left image" className="w-100 h-100" />
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="testimonial-section w-100 h-100">
                                    <div className="p-5">
                                        <div className="testimonial-text">{row2.quote}</div>
                                        <div className="testimonial-author">{row2.name}</div>
                                        <div className="testimonial-company">{row2.company}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={row2ImageRight} alt="Right image" className="w-100 h-100" />
                            </div>
                        </div>


                        {/* ROW 3 */}
                        <div className="row">
                            <div className="col-md-4 p-0">
                                <div className="testimonial-section w-100 h-100">
                                    <div className="p-5">
                                        <div className="testimonial-text">{row3.quote}</div>
                                        <div className="testimonial-author">{row3.name}</div>
                                        <div className="testimonial-company">{row3.company}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <img src={row3Image} alt={row3.name} className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="contact-section_mediaPartbers" style={{backgroundColor: "#ffffff"}}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <h2 class="contact-heading_mediaPartbers" style={{ fontSize: "30px" }}>
                                    GET IN TOUCH TO BOOK YOUR TRADE SHOW BOOTH
                                </h2>

                                <div class="row g-4">
                                    <div class="col-md-6 ">
                                        <div class="contact-card_mediaPartbers">
                                            <h3 class="contact-name_mediaPartbers pb-1 text-capitalize">LEE NAVARRO</h3>
                                            <div class="contact-info_mediaPartbers">
                                                <i class="fas fa-envelope"></i>
                                                <a href="mailto:lee.navarro@big-hub.com">lee.navarro@big-hub.com</a>
                                            </div>
                                            <div class="contact-info_mediaPartbers">
                                                <i class="fas fa-phone"></i>
                                                <a href="tel:+12065820128">+1 206 582 0128</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 ">
                                        <div class="contact-card_mediaPartbers">
                                            <h3 class="contact-name_mediaPartbers pb-1 text-capitalize">Sean Collins</h3>
                                            <div class="contact-info_mediaPartbers">
                                                <i class="fas fa-envelope"></i>
                                                <a href="mailto:lee.navarro@big-hub.com">lee.navarro@big-hub.com</a>
                                            </div>
                                            <div class="contact-info_mediaPartbers">
                                                <i class="fas fa-phone"></i>
                                                <a href="tel:+12065820128">+1 206 582 0128</a>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                  <SubscribeForm />
      <Footer />
        </>
    )
}
export default ExhibitorPackages