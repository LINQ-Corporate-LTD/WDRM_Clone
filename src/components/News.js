import '.././assets/css/News.css'
import Newsimg1 from '.././assets/images/MediaPartners/media.ba0e44e0a54f375e3e8f.png'
import MediaImg from '.././assets/images/MediaPartners/media.ba0e44e0a54f375e3e8f.png'


const News = () => {

    return (
        <div>

            









            <div class="container">
        
        <div class="article-card d-flex">
            <div className=''>
            <img src={Newsimg1} alt="Oil pump at sunset" class="article-image"/>
            </div>
            <div class="article-content">
                <div class="article-header">
                    <span class="category-tag">INSIGHTS</span>
                    <span class="article-date">7 Apr 2025</span>
                </div>
                <h2 class="article-title">Shale wastewater finds new purpose in Permian trial</h2>
                <p class="article-description">A desalination pilot in the Permian Basin turns oilfield brine into reusable water and recovers critical minerals too.</p>
            </div>
        </div>

        
        <div class="article-card d-flex">
           <img src={Newsimg1} alt="Oil pump at sunset" class="article-image"/>
            <div class="article-content">
                <div class="article-header">
                    <span class="category-tag">REGULATORY</span>
                    <span class="article-date">19 Mar 2025</span>
                </div>
                <h2 class="article-title">Dubai's Water Bet: Desalination Meets Clean Energy</h2>
                <p class="article-description">A new plant uses cleaner technology and private capital to reshape water production in the Gulf</p>
            </div>
        </div>

       
        <div class="article-card d-flex">
            <img src={Newsimg1} alt="Oil pump at sunset" class="article-image"/>
            <div class="article-content">
                <div class="article-header">
                    <span class="category-tag">MARKET TRENDS</span>
                    <span class="article-date">10 Mar 2025</span>
                </div>
                <h2 class="article-title">Gulf nations turn to seawater for future security</h2>
                <p class="article-description">Saudi Arabia and its neighbours are rapidly scaling up desalination to meet rising demand and reduce water risk</p>
            </div>
        </div>

        
        <div class="article-card d-flex">
           <img src={Newsimg1} alt="Oil pump at sunset" class="article-image"/>
            <div class="article-content">
                <div class="article-header">
                    <span class="category-tag">PARTNERSHIPS</span>
                    <span class="article-date">26 Feb 2025</span>
                </div>
                <h2 class="article-title">ACWA Power makes $693m move into Kuwait and Bahrain</h2>
                <p class="article-description">A $693m acquisition marks the firm's debut in Kuwait and expansion in Bahrain</p>
            </div>
        </div>
            </div>
      
           <nav class="pagination-container" aria-label="Page navigation">
            <button class="pagination-btn" aria-label="Previous page">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="pagination-btn active" aria-label="Page 1">1</button>
            <button class="pagination-btn" aria-label="Page 2">2</button>
            <button class="pagination-btn" aria-label="Next page">
                <i class="fas fa-chevron-right"></i>
            </button>
           </nav>

         <div class="container-fluid agenda-section">
        <div class="container">
            <h1 class="section-title">TOPICS ON THE AGENDA</h1>
            
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="topic-card">
                        <h3 class="topic-title">
                            MOBILE DESALINATION PLANTS WITH EFFICIENT SOLUTIONS TO REDUCE OPERATING COSTS
                        </h3>
                        <div class="topic-date">
                            Day 1: MONDAY, 27 OCTOBER, 2025
                        </div>
                        <div class="topic-time">
                            13:30 - 13:55
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="topic-card">
                        <h3 class="topic-title">
                            SEAWATER INTAKES PREFILTRATION FOR DESALINATION PROJECTS
                        </h3>
                        <div class="topic-date">
                            Day 1: MONDAY, 27 OCTOBER, 2025
                        </div>
                        <div class="topic-time">
                            14:00 - 14:25
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="topic-card">
                        <h3 class="topic-title">
                            PERSPECTIVES ON SEAWATER DESALINATION
                        </h3>
                        <div class="topic-date">
                            Day 1: MONDAY, 27 OCTOBER, 2025
                        </div>
                        <div class="topic-time">
                            15:00 - 15:25
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center">
                <button class="view-more-btn_news">VIEW MORE TOPICS</button>
            </div>
        </div>
    </div>




        </div>

    )
}
export default News