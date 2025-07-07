import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Navbar from './Navbar';
import SubscribeForm from './SubscribeForm';
import Footer from '../Footer';
const WhoShouldAttend = () => {
  const benefits = [
    {
      text: 'Across two days of in-depth presentations, industry experts will share the latest market insights, results, and experiences within the desalination sector.',
    },
    {
      text: 'This event provides an exclusive networking opportunity for professionals to connect with peers facing similar challenges and sharing insights from past and current projects.',
    },
    {
      text: 'Attendees will receive updates on regional projects and research from leading desalination experts, who will share their experiences, findings, and new proposals.',
    },
    {
      text: 'Technical presentations by water treatment manufacturers will showcase advancements in resource recovery, efficiency improvements, and cost-reduction strategies.',
    },
    {
      text: 'New case studies will present specific examples from water utilities and desalination facilities, providing practical insights.',
    },
    {
      text: 'This exclusive opportunity allows participants to connect with a wide range of industry stakeholders and explore innovative techniques to address emerging challenges.',
    },
  ];
  const benefits2 = [
    {
      text: 'Across two days of in-depth presentations, industry experts will share the latest market insights, results, and experiences within the desalination sector.',
    },
    {
      text: 'This event provides an exclusive networking opportunity for professionals to connect with peers facing similar challenges and sharing insights from past and current projects.',
    },
    {
      text: 'Attendees will receive updates on regional projects and research from leading desalination experts, who will share their experiences, findings, and new proposals.',
    },
    {
      text: 'Technical presentations by water treatment manufacturers will showcase advancements in resource recovery, efficiency improvements, and cost-reduction strategies.',
    },
    {
      text: 'New case studies will present specific examples from water utilities and desalination facilities, providing practical insights.',
    },
    {
      text: 'This exclusive opportunity allows participants to connect with a wide range of industry stakeholders and explore innovative techniques to address emerging challenges.',
    },
  ];

  const speakers = [
    {
      id: 1,
      name: 'Maher Al Kaabi',
      company: 'Alserkal Group',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Ahmed Yousry',
      company: 'ACWA Power',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Oren Heymans',
      company: 'Entegris',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      company: 'Tech Innovations',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Michael Chen',
      company: 'Global Solutions',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    },
  ];

  const [activeTab, setActiveTab] = React.useState('core');

  const coreAttendees = [
    'Water Utility Professionals',
    'O&M Professionals',
    'Desalination Engineers',
    'Process Development Managers',
    'Risk Management Experts',
    'Digitalisation Service Providers',
    'Clean Energy Experts',
    'Strategic Water Policy Advisors',
    'Hydrologists',
    'Water Data Analysts',
    'News Reporters and Journalists',
    'Water Infrastructure Experts',
  ];

  const industriesCompanies = [
    'O&M Professionals',
    'Water Treatment Experts',
    'Circular Economy Strategists',
    'Water Quality Managers',
    'Water Resource Managers',
    'R&D Managers',
    'Energy Recovery Experts',
    'Project Managers',
    'Legal and Compliance Specialists',
    'Watershed Managers',
    'Brine Management Experts',
    'Health and Safety Managers',
  ];

  const testimonials = [
    {
      name: 'Cor Merks',
      company: 'Ramboll',
      quote: 'Very on-topic approach. Excellent networking opportunities.',
    },
    {
      name: 'Kelbij star',
      company: 'Deltares',
      quote: 'I met new parties that were active in this sector.',
    },
    {
      name: 'Steve Kaye',
      company: 'UKWIR',
      quote:
        'It was a great showcase of cutting-edge technologies, with chances to network globally.',
    },
    {
      name: 'Matthijs Stel',
      company: 'Evides',
      quote:
        'It offered ideas for applying new technologies across the entire water industry value chain.',
    },
    {
      name: 'Przemysław Zakościelny',
      company: 'vonRoll Infratec (services) AG',
      quote:
        'It was an excellent opportunity to explore solutions and participate in meaningful discussions.',
    },
    {
      name: 'David Hurley',
      company: 'AVK UK',
      quote:
        'It proved fantastic for sharing knowledge and discovering innovative products.',
    },
  ];

  const styles = {
    container: {
      backgroundColor: '#f5f5f5',
      padding: '80px 20px',
      fontFamily: '"Arial", sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '900',
      color: '#1a1a1a',
      textAlign: 'center',
      marginBottom: '60px',
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
    },
    swiperContainer: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px',
    },
    slide: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    speakerCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '30px 20px',
      textAlign: 'center',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      width: '280px',
      margin: '0 auto',
    },
    speakerImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      margin: '0 auto 20px',
      border: '4px solid #ffffff',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
    },
    speakerName: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '8px',
      lineHeight: '1.2',
    },
    speakerCompany: {
      fontSize: '1rem',
      color: '#666666',
      fontWeight: '500',
      letterSpacing: '0.5px',
    },
    navigationButton: {
      backgroundColor: '#1a1a1a',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '18px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
    },
    pagination: {
      marginTop: '40px',
    },
  };

  return (
    <>
    <Navbar forceScrolled />
    <div className="pt-[90px]">
      {/* <div style={styles.container} className="container">
        <h2 
          style={styles.title} 
          className="featured-speakers-title"
        >
          MEET OUR FEATURED SPEAKERS
        </h2>
        
        <div style={styles.swiperContainer} className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            style={styles.pagination}
          >
            {speakers.map((speaker) => (
              <SwiperSlide key={speaker.id} style={styles.slide}>
                <div 
                  style={styles.speakerCard}
                  className="speaker-card"
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    style={styles.speakerImage}
                    className="speaker-image"
                  />
                  <h3 
                    style={styles.speakerName}
                    className="speaker-name"
                  >
                    {speaker.name}
                  </h3>
                  <p 
                    style={styles.speakerCompany}
                    className="speaker-company"
                  >
                    {speaker.company}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}

      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          minHeight: '100vh',
          display: 'flex',
        }}
      >
        <div className="benefits-container">
          {/* Left Section - Background Image */}
          <div className="left-section">
            {/* Background image with overlay handled by CSS */}
          </div>

          {/* Right Section - Content */}
          <div className="right-section">
            <h1 className="benefits-title">BENEFITS</h1>

            <p className="benefits-subtitle">
              The Desalination & Resource Recovery 2025 event provides leading
              market intelligence and features industry experts discussing the
              latest advancements in desalination, resource recovery, and
              sustainable water management.
            </p>

            <p className="benefits-intro">Benefits of attending include:</p>

            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <div className="benefit-bullet"></div>
                  <div className="benefit-text">{benefit.text}</div>
                </li>
              ))}
            </ul>

            <button
              className="view-program-btn"
              onClick={() => {
                console.log('View Program clicked');
                // Handle navigation to program page
              }}
            >
              VIEW PROGRAM
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          minHeight: '100vh',
          display: 'flex',
        }}
      >
        <div className="benefits-container-2">
          {/* Left Section - Background Image */}
          <div className="left-section">
            {/* Background image with overlay handled by CSS */}
          </div>

          {/* Right Section - Content */}
          <div className="right-section">
            <h1 className="benefits-title">BENEFITS</h1>

            <p className="benefits-subtitle">
              The Desalination & Resource Recovery 2025 event provides leading
              market intelligence and features industry experts discussing the
              latest advancements in desalination, resource recovery, and
              sustainable water management.
            </p>

            <p className="benefits-intro">Benefits of attending include:</p>

            <ul className="benefits-list">
              {benefits2.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <div className="benefit-bullet"></div>
                  <div className="benefit-text">{benefit.text}</div>
                </li>
              ))}
            </ul>

            <button
              className="view-program-btn"
              onClick={() => {
                console.log('View Program clicked');
                // Handle navigation to program page
              }}
            >
              VIEW PROGRAM
            </button>
          </div>
        </div>
      </div>

      <div className="water-event-container">
        <div className="content-wrapper">
          <h1 className="main-title">WHO SHOULD ATTEND?</h1>

          <p className="description">
            This event is tailored for utilities, desalination operators, and
            key stakeholders assessing the economic feasibility of water network
            development. It also serves as a platform to explore the latest
            technologies that enhance operational efficiency.
          </p>

          <div className="attendees-section">
            <div className="tabs-container">
              <button
                className={`tab ${activeTab === 'core' ? 'active' : ''}`}
                onClick={() => setActiveTab('core')}
              >
                Core Attendees
              </button>
              <button
                className={`tab ${activeTab === 'industries' ? 'active' : ''}`}
                onClick={() => setActiveTab('industries')}
              >
                Industries & Companies
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'core' && (
                <div className="core-content">
                  <h3 className="content-title">
                    Core attendees include CEOs, COOs, CFOs, Presidents, Vice
                    Presidents, Directors, Heads of, Superintendents, and
                    Managers involved in:
                  </h3>
                  <div className="attendees-grid">
                    {coreAttendees.map((attendee, index) => (
                      <div key={index} className="attendee-card">
                        {attendee}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'industries' && (
                <div className="industries-content">
                  <h3 className="content-title">
                    Industries & Companies include professionals from various
                    sectors working in water management, treatment, and related
                    technologies:
                  </h3>
                  <div className="attendees-grid">
                    {industriesCompanies.map((industry, index) => (
                      <div key={index} className="attendee-card">
                        {industry}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-wrapper">
          <h1 className="testimonials-title">They've Attended Our Events</h1>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-company">
                    {testimonial.company}
                  </div>
                </div>
                <div className="testimonial-quote">{testimonial.quote}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <SubscribeForm />
    <Footer />
    </>
  );
};

export default WhoShouldAttend;
