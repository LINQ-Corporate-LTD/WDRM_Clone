
import '../../src/assets/css/ExhibitorPackages.css'
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
    return (
        <div>

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







        </div>

    )
}
export default ExhibitorPackages