import icon from "../../src/assets/images/group-icon.png";
import lunch from "../../src/assets/images/icon-luncheon.png";
import fullaccess from "../../src/assets/images/icon-full-access.png";
import networking from "../../src/assets/images/icon-networking.png";
import onlineaccess from "../../src/assets/images/icon-online-access.png";
import "../../src/assets/css/register.css"

const Register = () => {
  return (
    <div>
      <div className="register_page">
        <section class="registration-section">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="text-center mb-5">
                  <h1 class="registration-title">REGISTER NOW</h1>
                  <p class="delegate-package">DELEGATE PACKAGE:</p>
                  <p class="package-description">
                    For all single and group delegates passes not part of any
                    sponsorship or
                    <br />
                    exhibition package. Package includes:
                  </p>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="feature-item">
                      <img src={fullaccess} alt="Logo" className="mt-2" />
                      <p class="feature-text mt-2">
                        Full access to all
                        <br />
                        conference days
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="feature-item">
                      <img src={onlineaccess} alt="Logo" className="mt-2" />
                      <p class="feature-text mt-2">
                        Online access to
                        <br />
                        selected presentation
                        <br />
                        materials
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="feature-item">
                      <img src={networking} alt="Logo" className="mt-2" />
                      <p class="feature-text mt-2">
                        Access to all
                        <br />
                        networking activities
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="feature-item">
                      <img src={lunch} alt="Logo" className="mt-2" />
                      <p class="feature-text mt-2">
                        Hosted luncheon and
                        <br />
                        drinks reception
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container bird_card">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="pricing-card">
                <div class="pricing-header super-early-bird">
                  SUPER EARLY BIRD
                  <div class="pricing-amount">AED 2195</div>
                </div>
                <div class="pricing-body">
                  <div class="delegate-selector">
                    <h6>Select number of Delegates</h6>
                    <div class="quantity-controls">
                      <button
                        class="quantity-btn"
                        onclick="decreaseQuantity(this)"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        class="quantity-input"
                        value="1"
                        min="1"
                        readonly
                      />
                      <button
                        class="quantity-btn"
                        onclick="increaseQuantity(this)"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pricing-footer">
                  <button class="register-btn register-now">
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="pricing-card">
                <div class="pricing-header early-bird">
                  EARLY BIRD
                  <div class="pricing-amount">AED 2595</div>
                </div>
                <div class="pricing-body">
                  <div class="delegate-selector">
                    <h6>Select number of Delegates</h6>
                    <div class="quantity-controls">
                      <button
                        class="quantity-btn"
                        onclick="decreaseQuantity(this)"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        class="quantity-input"
                        value="1"
                        min="1"
                        readonly
                      />
                      <button
                        class="quantity-btn"
                        onclick="increaseQuantity(this)"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pricing-footer coming-soon">
                  <button class="register-btn coming-soon">COMING SOON</button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="pricing-card">
                <div class="pricing-header regular-price">
                  REGULAR PRICE
                  <div class="pricing-amount">AED 2995</div>
                </div>
                <div class="pricing-body">
                  <div class="delegate-selector">
                    <h6>Select number of Delegates</h6>
                    <div class="quantity-controls">
                      <button
                        class="quantity-btn"
                        onclick="decreaseQuantity(this)"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        class="quantity-input"
                        value="1"
                        min="1"
                        readonly
                      />
                      <button
                        class="quantity-btn"
                        onclick="increaseQuantity(this)"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pricing-footer coming-soon">
                  <button class="register-btn coming-soon">COMING SOON</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid banner-container_head">
          <div class="banner-container">
            <div class="row w-100 align-items-center">
              <div class="col-lg-6 col-md-6 col-12 text-center mb-4 mb-md-0">
                <div class="silhouette-container">
                  <img src={icon} alt="Logo" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="content-text">
                  <h1 class="main-heading">
                    DISCOUNTS AVAILABLE <br /> FOR UTILITIES
                  </h1>
                  <button class="group-pass-btn">UTILITIES GROUP PASS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
