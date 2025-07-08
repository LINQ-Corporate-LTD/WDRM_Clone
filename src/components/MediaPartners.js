import '../../src/assets/css/MediaPartners.css'

import MediaImg from '.././assets/images/MediaPartners/media.ba0e44e0a54f375e3e8f.png'
import Footer from '../Footer'
import Navbar from './Navbar'
import SubscribeForm from './SubscribeForm'


const MediaPartners = () => {

    return (
        <>
        <Navbar forceScrolled/>
        <div class="pt-[90px] pb-[30px]">
            
            <section class="press-section">
                <div class="container">
                    <h1 class="section-title_mediaPartbers">MEMBERS OF THE PRESS</h1>

                    <p class="intro-text">
                        We always welcome approaches from industry members who think they can work with us in a media partnership. We aim to bring
                        you the latest news within the industry and keep you updated with current developments through our event partners.
                    </p>

                    <h3 class="benefits-title">Media partner benefits include:</h3>

                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="benefit-card">
                                <h4>Engage with the industry</h4>
                                <p>An opportunity to be part of a leading industry initiative and associate your media brand with industry leaders.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="benefit-card">
                                <h4>Raise profile and brand awareness</h4>
                                <p>Benefit from valuable exposure and target market reach for your brand, product, or organization.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="benefit-card">
                                <h4>Stay ahead of competitors</h4>
                                <p>Gain knowledge of current developments and challenges direct from industry leaders as and when they happen.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="benefit-card">
                                <h4>Mutually beneficial opportunities</h4>
                                <p>Positive association with content-driven industry leaders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <img src={MediaImg} alt="Luxury Hotel Exterior" className='img-fluid w-100' />
            </div>

            <section class="contact-section_mediaPartbers">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <h2 class="contact-heading_mediaPartbers">
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
export default MediaPartners