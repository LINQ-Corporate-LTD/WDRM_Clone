import ".././assets/css/News.css";
import Newsimg1 from ".././assets/images/MediaPartners/media.ba0e44e0a54f375e3e8f.png";
import MediaImg from ".././assets/images/MediaPartners/media.ba0e44e0a54f375e3e8f.png";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import "../../src/assets/css/NewsDescription.css";

const News = () => {
  const newsData = {
    featuredArticle: {
      category: "REGULATORY",
      date: "19 Mar 2025",
      title: "Dubai's Water Bet: Desalination Meets Clean Energy",
      description:
        "A new plant uses cleaner technology and private capital to reshape water production in the Gulf",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=400&fit=crop",
    },
    sidebarItems: [
      {
        category: "TECHNOLOGY",
        date: "18 Feb 2025",
        title: "Cloud Seeding Gets Smart: UAE's AI Rain Revolution",
        image:
          "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=300&h=180&fit=crop",
      },
      {
        category: "MARKET TRENDS",
        date: "10 Mar 2025",
        title: "Gulf nations turn to seawater for future security",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=180&fit=crop",
      },
    ],
    latestNews: [
      {
        category: "REGULATORY",
        date: "19 Mar 2025",
        title: "Dubai's Water Bet: Desalination Meets Clean Energy",
      },
      {
        category: "MARKET TRENDS",
        date: "10 Mar 2025",
        title: "Gulf nations turn to seawater for future security",
      },
      {
        category: "PARTNERSHIPS",
        date: "26 Feb 2025",
        title: "ACWA Power makes $693m move into Kuwait and Bahrain",
      },
      {
        category: "TECHNOLOGY",
        date: "18 Feb 2025",
        title: "Cloud Seeding Gets Smart: UAE's AI Rain Revolution",
      },
    ],
    mainStory: {
      title: "Shale wastewater finds new purpose in Permian trial",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      insights: {
        category: "INSIGHTS",
        date: "7 Apr 2025",
        description:
          "A desalination pilot in the Permian Basin turns oilfield brine into reusable water and recovers critical minerals too.",
      },
    },
  };

  const articles = [
    {
      id: 1,
      category: "INSIGHTS",
      categoryColor: "#00bcd4",
      date: "7 Apr 2025",
      title: "Shale Wastewater Finds New Purpose in Permian Trial",
      description:
        "A desalination pilot in the Permian Basin turns oilfield brine into reusable water and recovers critical minerals too.",
      image:
        "https://www.desalination-resource-recovery.com/api/images/news/1749734884422.jpg",
    },
    {
      id: 2,
      category: "REGULATORY",
      categoryColor: "#00bcd4",
      date: "19 Mar 2025",
      title: "Dubai's Water Bet: Desalination Meets Clean Energy",
      description:
        "A new plant uses cleaner technology and private capital to reshape water production in the Gulf",
      image:
        "https://www.desalination-resource-recovery.com/api/images/news/1749734884422.jpg",
    },
    {
      id: 3,
      category: "MARKET TRENDS",
      categoryColor: "#00bcd4",
      date: "10 Mar 2025",
      title: "Gulf Nations Turn to Seawater for Future Security",
      description:
        "Saudi Arabia and its neighbours are rapidly scaling up desalination to meet rising demand and reduce water risk",
      image:
        "https://www.desalination-resource-recovery.com/api/images/news/1749734884422.jpg",
    },
    {
      id: 4,
      category: "PARTNERSHIPS",
      categoryColor: "#00bcd4",
      date: "26 Feb 2025",
      title: "ACWA Power Makes $693m Move into Kuwait and Bahrain",
      description:
        "A $693m acquisition marks the firm's debut in Kuwait and expansion in Bahrain",
      image:
        "https://www.desalination-resource-recovery.com/api/images/news/1749734884422.jpg",
    },
  ];

  const allTopics = [
    {
      id: 1,
      title:
        "MOBILE DESALINATION PLANTS WITH EFFICIENT SOLUTIONS TO REDUCE OPERATING COSTS",
      day: "Day 1",
      date: "MONDAY, 27 OCTOBER, 2025",
      time: "13:30 - 13:55",
      speaker: "Dr. Sarah Johnson",
      category: "Technology Innovation",
    },
    {
      id: 2,
      title: "SEAWATER INTAKES PREFILTRATION FOR DESALINATION PROJECTS",
      day: "Day 1",
      date: "MONDAY, 27 OCTOBER, 2025",
      time: "14:00 - 14:25",
      speaker: "Prof. Michael Chen",
      category: "Engineering Solutions",
    },
    {
      id: 3,
      title: "PERSPECTIVES ON SEAWATER DESALINATION",
      day: "Day 1",
      date: "MONDAY, 27 OCTOBER, 2025",
      time: "15:00 - 15:25",
      speaker: "Dr. Emma Rodriguez",
      category: "Industry Insights",
    },
    {
      id: 4,
      title: "RENEWABLE ENERGY INTEGRATION IN WATER TREATMENT FACILITIES",
      day: "Day 2",
      date: "TUESDAY, 28 OCTOBER, 2025",
      time: "09:00 - 09:25",
      speaker: "Dr. James Wilson",
      category: "Sustainability",
    },
    {
      id: 5,
      title: "ADVANCED MEMBRANE TECHNOLOGIES FOR WATER PURIFICATION",
      day: "Day 2",
      date: "TUESDAY, 28 OCTOBER, 2025",
      time: "09:30 - 09:55",
      speaker: "Dr. Lisa Park",
      category: "Technology Innovation",
    },
    {
      id: 6,
      title: "SMART MONITORING SYSTEMS FOR WATER QUALITY MANAGEMENT",
      day: "Day 2",
      date: "TUESDAY, 28 OCTOBER, 2025",
      time: "10:00 - 10:25",
      speaker: "Dr. Robert Kim",
      category: "Digital Solutions",
    },
    {
      id: 7,
      title: "CIRCULAR ECONOMY APPROACHES IN WATER RESOURCE MANAGEMENT",
      day: "Day 3",
      date: "WEDNESDAY, 29 OCTOBER, 2025",
      time: "11:00 - 11:25",
      speaker: "Dr. Anna Thompson",
      category: "Sustainability",
    },
    {
      id: 8,
      title: "ENERGY RECOVERY SYSTEMS IN DESALINATION PLANTS",
      day: "Day 3",
      date: "WEDNESDAY, 29 OCTOBER, 2025",
      time: "11:30 - 11:55",
      speaker: "Dr. David Martinez",
      category: "Energy Efficiency",
    },
    {
      id: 9,
      title: "ARTIFICIAL INTELLIGENCE IN WATER TREATMENT OPTIMIZATION",
      day: "Day 3",
      date: "WEDNESDAY, 29 OCTOBER, 2025",
      time: "14:00 - 14:25",
      speaker: "Dr. Jennifer Liu",
      category: "Digital Solutions",
    },
  ];
  return (
    <>
      <Navbar forceScrolled />
      <div className="pt-[130px] back_design">
        <div className="container">
          <h1 className="top-news-header">TOP NEWS</h1>

          <div className="main_flex_div">
            <div className="first_col">
              <div className="first_col_card">
                <div className="NewsCard_innerContainer_b">
                  <div className="NewsCard_upperContainer_b">
                    <img
                      src="https://www.desalination-resource-recovery.com/api/images/news/1749734953604.jpg"
                      alt="news image"
                    ></img>
                  </div>
                  <div className="NewsCard_lowerContainer_b">
                    <div
                      className="NewsCard_nameDate_b"
                      style={{
                        marginBottom: "22px",
                        marginTop: "33px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          color: "#00baff",
                          fontSize: "14px",
                          fontWeight: "700",
                          textTransform: "capitalize",
                        }}
                      >
                        REGULATORY
                      </p>
                      <p>19 March 2025</p>
                    </div>
                    <div className="content_div">
                      <h1
                        style={{
                          color: "#fff",
                          fontSize: "36px",
                          fontWeight: "800",
                          lineHeight: "49px",
                          marginBottom: "20px",
                          textAlign: "left",
                        }}
                      >
                        Dubai’s Water Bet: Desalination Meets Clean Energy
                      </h1>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: "600",
                          lineHeight: "26px",
                          marginBottom: "30px",
                          textAlign: "left",
                        }}
                      >
                        A new plant uses cleaner technology and private capital
                        to reshape water production in the Gulf
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="second_col">
              <div
                className="NewsListing_rightTop"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "40px",
                }}
              >
                <div className="NewsListing_conteiner_b">
                  <div className="NewsListing_innerconteiner_b">
                    <div className="NewsListing_upperContainer_b">
                      <img
                        src="https://www.desalination-resource-recovery.com/api/images/news/1749734842198.jpg"
                        alt="news image"
                        style={{
                          height: "208px",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      ></img>
                    </div>
                    <div className="NewsListing_lowerContainer_b">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "15px",
                          marginTop: "23px",
                        }}
                      >
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          TECHNOLOGY
                        </p>
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          18 Feb 2025
                        </p>
                      </div>
                      <div className="NewsCard_titleDescContainer_b">
                        <h1
                          style={{
                            fontSize: "18px",
                            lineHeight: "24px",
                            color: "#fff",
                            marginBottom: "20px",
                          }}
                        >
                          Cloud Seeding Gets Smart: UAE’s AI Rain Revolution
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NewsListing_conteiner_b">
                  <div className="NewsListing_innerconteiner_b">
                    <div className="NewsListing_upperContainer_b">
                      <img
                        src="https://www.desalination-resource-recovery.com/api/images/news/1749734917207.jpg"
                        alt="news image"
                        style={{
                          height: "208px",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      ></img>
                    </div>
                    <div className="NewsListing_lowerContainer_b">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "15px",
                          marginTop: "23px",
                        }}
                      >
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          MARKET TRENDS
                        </p>
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          10 Mar 2025
                        </p>
                      </div>
                      <div className="NewsCard_titleDescContainer_b">
                        <h1
                          style={{
                            fontSize: "18px",
                            lineHeight: "24px",
                            color: "#fff",
                            marginBottom: "20px",
                          }}
                        >
                          Gulf Nations Turn to Seawater for Future Security
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="main_flex_div_latest">
            <div className="second_col_latest">
              <h1 className="latest-news-header">LATEST NEWS</h1>
              <div
                className="NewsListing_rightTop"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "40px",
                }}
              >
                <div className="NewsListing_conteiner_b">
                  <div className="NewsListing_innerconteiner_b">
                    <div className="NewsListing_lowerContainer_b">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "15px",
                          marginTop: "23px",
                        }}
                      >
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          REGULATORY
                        </p>
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          19 Mar 2025
                        </p>
                      </div>
                      <div className="NewsCard_titleDescContainer_b">
                        <h1
                          style={{
                            fontSize: "18px",
                            lineHeight: "24px",
                            color: "#fff",
                            marginBottom: "20px",
                          }}
                        >
                          Dubai’s Water Bet: Desalination Meets Clean Energy
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NewsListing_conteiner_b">
                  <div className="NewsListing_innerconteiner_b">
                    <div className="NewsListing_lowerContainer_b">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "15px",
                          marginTop: "23px",
                        }}
                      >
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          MARKET TRENDS
                        </p>
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          10 Mar 2025
                        </p>
                      </div>
                      <div className="NewsCard_titleDescContainer_b">
                        <h1
                          style={{
                            fontSize: "18px",
                            lineHeight: "24px",
                            color: "#fff",
                            marginBottom: "20px",
                          }}
                        >
                          Gulf Nations Turn to Seawater for Future Security
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NewsListing_conteiner_b">
                  <div className="NewsListing_innerconteiner_b">
                    <div className="NewsListing_lowerContainer_b">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "15px",
                          marginTop: "23px",
                        }}
                      >
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          Technology
                        </p>
                        <p
                          style={{
                            color: "#00baff",
                            fontSize: "14px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                          }}
                        >
                          18 Feb 2025
                        </p>
                      </div>
                      <div className="NewsCard_titleDescContainer_b">
                        <h1
                          style={{
                            fontSize: "18px",
                            lineHeight: "24px",
                            color: "#fff",
                            marginBottom: "20px",
                          }}
                        >
                          Cloud Seeding Gets Smart: UAE’s AI Rain Revolution
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="first_col_latest">
              <div className="first_col_latest_card">
                <div className="NewsCard_innerContainer_b">
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "36px",
                      fontWeight: "700",
                      lineHeight: "49px",
                    }}
                  >
                    Shale Wastewater Finds New Purpose in Permian Trial
                  </h3>
                  <div className="NewsCard_upperContainer_b">
                    <img
                      src="https://www.desalination-resource-recovery.com/api/images/news/1749734994367.jpg"
                      alt="news image"
                      style={{
                        marginTop: "14px",
                        paddingTop: "5px",
                        height: "531px",
                        objectFit: "cover",
                      }}
                    ></img>
                  </div>
                  <div className="NewsCard_lowerContainer_b">
                    <div
                      className="NewsCard_nameDate_b"
                      style={{
                        marginBottom: "22px",
                        marginTop: "33px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          color: "#00baff",
                          fontSize: "14px",
                          fontWeight: "700",
                          textTransform: "capitalize",
                        }}
                      >
                        insights
                      </p>
                      <p
                        style={{
                          color: "#00baff",
                          fontSize: "14px",
                          fontWeight: "700",
                          textTransform: "capitalize",
                        }}
                      >
                        7 Apr 2025
                      </p>
                    </div>
                    <div className="content_div">
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: "600",
                          lineHeight: "26px",
                          marginBottom: "30px",
                          textAlign: "left",
                        }}
                      >
                        A desalination pilot in the Permian Basin turns oilfield
                        brine into reusable water and recovers critical minerals
                        too.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="container">
          <div class="article-card d-flex">
            <div className="">
              <img
                src={Newsimg1}
                alt="Oil pump at sunset"
                class="article-image"
              />
            </div>
            <div class="article-content">
              <div class="article-header">
                <span class="category-tag">INSIGHTS</span>
                <span class="article-date">7 Apr 2025</span>
              </div>
              <h2 class="article-title">
                Shale wastewater finds new purpose in Permian trial
              </h2>
              <p class="article-description">
                A desalination pilot in the Permian Basin turns oilfield brine
                into reusable water and recovers critical minerals too.
              </p>
            </div>
          </div>

          <div class="article-card d-flex">
            <img
              src={Newsimg1}
              alt="Oil pump at sunset"
              class="article-image"
            />
            <div class="article-content">
              <div class="article-header">
                <span class="category-tag">REGULATORY</span>
                <span class="article-date">19 Mar 2025</span>
              </div>
              <h2 class="article-title">
                Dubai's Water Bet: Desalination Meets Clean Energy
              </h2>
              <p class="article-description">
                A new plant uses cleaner technology and private capital to
                reshape water production in the Gulf
              </p>
            </div>
          </div>

          <div class="article-card d-flex">
            <img
              src={Newsimg1}
              alt="Oil pump at sunset"
              class="article-image"
            />
            <div class="article-content">
              <div class="article-header">
                <span class="category-tag">MARKET TRENDS</span>
                <span class="article-date">10 Mar 2025</span>
              </div>
              <h2 class="article-title">
                Gulf nations turn to seawater for future security
              </h2>
              <p class="article-description">
                Saudi Arabia and its neighbours are rapidly scaling up
                desalination to meet rising demand and reduce water risk
              </p>
            </div>
          </div>

          <div class="article-card d-flex">
            <img
              src={Newsimg1}
              alt="Oil pump at sunset"
              class="article-image"
            />
            <div class="article-content">
              <div class="article-header">
                <span class="category-tag">PARTNERSHIPS</span>
                <span class="article-date">26 Feb 2025</span>
              </div>
              <h2 class="article-title">
                ACWA Power makes $693m move into Kuwait and Bahrain
              </h2>
              <p class="article-description">
                A $693m acquisition marks the firm's debut in Kuwait and
                expansion in Bahrain
              </p>
            </div>
          </div>
        </div>

        <nav class="pagination-container" aria-label="Page navigation">
          <button class="pagination-btn" aria-label="Previous page">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="pagination-btn active" aria-label="Page 1">
            1
          </button>
          <button class="pagination-btn" aria-label="Page 2">
            2
          </button>
          <button class="pagination-btn" aria-label="Next page">
            <i class="fas fa-chevron-right"></i>
          </button>
        </nav>

        <div class="container-fluid agenda-section">
          <div class="container">
            <h1 class="section-title_news">TOPICS ON THE AGENDA</h1>

            <div class="row g-4">
              <div class="col-lg-4 col-md-6">
                <div class="topic-card">
                  <h3 class="topic-title">
                    MOBILE DESALINATION PLANTS WITH EFFICIENT SOLUTIONS TO
                    REDUCE OPERATING COSTS
                  </h3>
                  <div class="topic-date">Day 1: MONDAY, 27 OCTOBER, 2025</div>
                  <div class="topic-time">13:30 - 13:55</div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="topic-card">
                  <h3 class="topic-title">
                    SEAWATER INTAKES PREFILTRATION FOR DESALINATION PROJECTS
                  </h3>
                  <div class="topic-date">Day 1: MONDAY, 27 OCTOBER, 2025</div>
                  <div class="topic-time">14:00 - 14:25</div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="topic-card">
                  <h3 class="topic-title">
                    PERSPECTIVES ON SEAWATER DESALINATION
                  </h3>
                  <div class="topic-date">Day 1: MONDAY, 27 OCTOBER, 2025</div>
                  <div class="topic-time">15:00 - 15:25</div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button class="view-more-btn_news">VIEW MORE TOPICS</button>
            </div>
          </div>
        </div>
      </div>

      <SubscribeForm />
      <Footer />
    </>
  );
};
export default News;
