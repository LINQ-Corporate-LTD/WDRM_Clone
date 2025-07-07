import { useState } from "react";
import icon from "../../src/assets/images/group-icon.png";
import lunch from "../../src/assets/images/icon-luncheon.png";
import fullaccess from "../../src/assets/images/icon-full-access.png";
import networking from "../../src/assets/images/icon-networking.png";
import onlineaccess from "../../src/assets/images/icon-online-access.png";
import "../../src/assets/css/register.css";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";
import Footer from "../Footer";
import LogoCarousel from "./LogoCarousel";

const Register = () => {
  const [countSuperEarlyBird, setCountSuperEarlyBird] = useState(1);
  const [countEarlyBird, setCountEarlyBird] = useState(1);
  const [countRegularPrice, setCountRegularPrice] = useState(1);

  const increaseQuantitySuperEarlyBird = () =>
    setCountSuperEarlyBird((prev) => prev + 1);
  const decreaseQuantitySuperEarlyBird = () =>
    setCountSuperEarlyBird((prev) => (prev > 1 ? prev - 1 : 1));

  const increaseQuantityEarlyBird = () => setCountEarlyBird((prev) => prev + 1);
  const decreaseQuantityEarlyBird = () =>
    setCountEarlyBird((prev) => (prev > 1 ? prev - 1 : 1));

  const increaseQuantityRegularPrice = () =>
    setCountRegularPrice((prev) => prev + 1);
  const decreaseQuantityRegularPrice = () =>
    setCountRegularPrice((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Navbar forceScrolled />
      <div class="pt-[90px] pb-[30px]">
        <div className="register_page">
          <section class="registration-section">
            <div class="container-fluid registration-section-fluid">
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="text-center">
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
                    <div class="col-lg-3 col-md-6 mb-4 flex justify-center">
                      <div class="feature-item">
                        <img src={fullaccess} alt="Logo" />
                        <p class="feature-text">
                          Full access to all
                          <br />
                          conference days
                        </p>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 flex justify-center">
                      <div class="feature-item">
                        <img src={onlineaccess} alt="Logo" />
                        <p class="feature-text">
                          Online access to
                          <br />
                          selected presentation
                          <br />
                          materials
                        </p>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 flex justify-center">
                      <div class="feature-item">
                        <img src={networking} alt="Logo" />
                        <p class="feature-text">
                          Access to all
                          <br />
                          networking activities
                        </p>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 flex justify-center">
                      <div class="feature-item">
                        <img src={lunch} alt="Logo" />
                        <p class="feature-text">
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
                          className="quantity-btn"
                          onClick={decreaseQuantitySuperEarlyBird}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={countSuperEarlyBird}
                          min="1"
                          readOnly
                        />
                        <button
                          className="quantity-btn"
                          onClick={increaseQuantitySuperEarlyBird}
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
                          className="quantity-btn"
                          onClick={decreaseQuantityEarlyBird}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={countEarlyBird}
                          min="1"
                          readOnly
                        />
                        <button
                          className="quantity-btn"
                          onClick={increaseQuantityEarlyBird}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="pricing-footer coming-soon">
                    <button class="register-btn coming-soon">
                      COMING SOON
                    </button>
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
                          className="quantity-btn"
                          onClick={decreaseQuantityRegularPrice}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={countRegularPrice}
                          min="1"
                          readOnly
                        />
                        <button
                          className="quantity-btn"
                          onClick={increaseQuantityRegularPrice}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="pricing-footer coming-soon">
                    <button class="register-btn coming-soon">
                      COMING SOON
                    </button>
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
      <LogoCarousel />
      <SubscribeForm />
      <Footer />
    </>
  );
};
export default Register;
