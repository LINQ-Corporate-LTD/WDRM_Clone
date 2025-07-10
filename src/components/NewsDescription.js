"use client"

import Newsimg from "../../src/assets/images/News/1749734953604.jpg"
import "../../src/assets/css/NewsDescription.css"
import Navbar from "./Navbar"
import SubscribeForm from "./SubscribeForm"
import Footer from "../Footer"

const NewsDescription = () => {
  return (
    <div>
      <Navbar forceScrolled />
      <div className="header-section" style={{ paddingTop: "110px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <a href="#" className="back-link">
                <i className="fas fa-arrow-left"></i>
                BACK TO ALL NEWS
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="category-label">REGULATORY</div>
              <h1 className="main-headline">Dubai's Water Bet: Desalination Meets Clean Energy</h1>
              <p className="subtitle">
                A new plant uses cleaner technology and private capital to reshape water production in the Gulf
              </p>
              <div className="article-meta">
                <div className="date">19 Mar 2025</div>
                <div className="action-buttons">
                  <button className="btn-subscribe__NewsDescription">SUBSCRIBE</button>
                  <button className="btn-share_NewsDescription">SHARE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="container-custom">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="news-description">
                <img
                  src={Newsimg || "/placeholder.svg?height=312&width=508"}
                  alt="Hassyan Desalination Plant Rendering"
                  className="article-image"
                />
                <p className="article-text">
                  On the arid shores of the Arabian Gulf, Dubai is making waves with a desalination plant that does more
                  than turn seawater into drinking water. The AED 3.38bn ($920m) Hassyan project, now over halfway
                  complete, exemplifies a new breed of infrastructure: green, efficient, and profitable.
                </p>
                <p className="article-text">
                  Instead of relying on the conventional, energy-intensive method of thermal desalination, Hassyan uses
                  seawater reverse osmosis (SWRO), a less thirsty technology. This aligns with the Dubai Electricity and
                  Water Authority's (DEWA) plan to produce all desalinated water using clean energy by 2030. That target
                  is not just rhetorical. The shift marks a departure from a long-standing Gulf reliance on oil-powered
                  evaporation plants.
                </p>
                <p className="article-text">
                  But technology is only part of the story. Hassyan is structured under an independent water producer
                  (IWP) model, a public-private partnership that has enticed investors such as Saudi Arabia's ACWA Power
                  and Belgium's BESIX. Their backing suggests that Gulf infrastructure, long the province of state
                  monopolies, is maturing into a market open to climate-conscious capital. "Projects like Hassyan show
                  the world that large-scale desalination can be both sustainable and economically viable," said a
                  senior executive at ACWA Power.
                </p>
                <p className="article-text">
                  The implications ripple beyond Dubai. From Kuwait to Oman, Gulf states are scrambling to meet surging
                  demand and worsening drought. Saudi Arabia's Vision 2030 also leans heavily on SWRO as part of its
                  national water strategy. Yet hurdles remain. Renewable energy fluctuates; water demand does not. And
                  decades-old infrastructure is ill-suited to nimble upgrades.
                </p>
                <p className="article-text">
                  Still, momentum is building. What was once an engineering challenge is now an investment thesis.
                  Hassyan proves that clean water can flow from a combination of clever finance and carbon-light design.
                  Policymakers would do well to note: in the Gulf, the path to sustainability may run through a
                  desalination plant.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="sidebar">
                <h2>Latest News</h2>
                <div className="news-item">
                  <div className="news-date">19 Mar 2025</div>
                  <h3 className="news-title">
                    <a href="#">Dubai's Water Bet: Desalination Meets Clean Energy</a>
                  </h3>
                </div>
                <div className="news-item">
                  <div className="news-date">10 Mar 2025</div>
                  <h3 className="news-title">
                    <a href="#">Gulf nations turn to seawater for future security</a>
                  </h3>
                </div>
                <div className="news-item">
                  <div className="news-date">26 Feb 2025</div>
                  <h3 className="news-title">
                    <a href="#">ACWA Power makes $693m move into Kuwait and Bahrain</a>
                  </h3>
                </div>
                <div className="news-item">
                  <div className="news-date">18 Feb 2025</div>
                  <h3 className="news-title">
                    <a href="#">Cloud Seeding Gets Smart: UAE's AI Rain Revolution</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="related-news-section">
        <div className="container">
          <h2 className="section-title_NewsDescription">RELATED NEWS</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card news-card_NewsDescription">
                <div className="card-image card-image-1"></div>
                <div className="card-content">
                  <div className="card-category">INSIGHTS</div>
                  <div className="card-date">7 Apr 2025</div>
                  <h3 className="card-title">Shale wastewater finds new purpose in Permian trial</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card news-card_NewsDescription">
                <div className="card-image card-image-2"></div>
                <div className="card-content">
                  <div className="card-category">REGULATORY</div>
                  <div className="card-date">19 Mar 2025</div>
                  <h3 className="card-title">Dubai's Water Bet: Desalination Meets Clean Energy</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card news-card_NewsDescription">
                <div className="card-image card-image-3"></div>
                <div className="card-content">
                  <div className="card-category">MARKET TRENDS</div>
                  <div className="card-date">10 Mar 2025</div>
                  <h3 className="card-title">Gulf nations turn to seawater for future security</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid agenda-section">
        <div className="container">
          <h1 className="section-title_news">TOPICS ON THE AGENDA</h1>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="topic-card">
                <h3 className="topic-title">
                  MOBILE DESALINATION PLANTS WITH EFFICIENT SOLUTIONS TO REDUCE OPERATING COSTS
                </h3>
                <div className="topic-date">Day 1: MONDAY, 27 OCTOBER, 2025</div>
                <div className="topic-time">13:30 - 13:55</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="topic-card">
                <h3 className="topic-title">SEAWATER INTAKES PREFILTRATION FOR DESALINATION PROJECTS</h3>
                <div className="topic-date">Day 1: MONDAY, 27 OCTOBER, 2025</div>
                <div className="topic-time">14:00 - 14:25</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="topic-card">
                <h3 className="topic-title">PERSPECTIVES ON SEAWATER DESALINATION</h3>
                <div className="topic-date">Day 1: MONDAY, 27 OCTOBER, 2025</div>
                <div className="topic-time">15:00 - 15:25</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="view-more-btn_news">VIEW MORE TOPICS</button>
          </div>
        </div>
      </div>
      <SubscribeForm />
      <Footer />
    </div>
  )
}

export default NewsDescription
