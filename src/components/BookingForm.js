import "../../src/assets/css/BookingForm.css";
import ticket from "../../src/assets/images/event_ticket/ticket.svg";
import { useNavigate } from "react-router-dom";
const BookingForm = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen">
        <div
        style={{
          alignItems: "center",
          backgroundColor: "#181818",
          display: "flex",
          justifyContent: "center",
          minHeight: "70px",
          width: "100%",
        }}
      >
        <div
          className="container mx-auto "
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://www.desalination-resource-recovery.com/api/images/logo/1742534509561.png"
            alt="Site logo"
            style={{ cursor: "pointer", width: "140px" }}
            onClick={() => navigate("/")}
          ></img>
        </div>
      </div>
      <div class="container py-4 mt-4">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-7">
                <div class="mb-4">
                  <h5 class="section-header_BookingForm">Add-ons</h5>
                  <div class="section-content_BookingForm">
                    <div class="addon-item_BookingForm">
                      <input
                        type="checkbox"
                        class="addon-checkbox_BookingForm"
                        id="logo"
                      />
                      <label for="logo" class="addon-text_BookingForm mb-0">
                        Add your logo to the website
                      </label>
                      <span class="addon-price_BookingForm">AED 400</span>
                    </div>
                    <div class="addon-item_BookingForm">
                      <input
                        type="checkbox"
                        class="addon-checkbox_BookingForm"
                        id="logo"
                      />
                      <label for="logo" class="addon-text_BookingForm mb-0">
                        Business cards placement
                      </label>
                      <span class="addon-price_BookingForm">AED 600</span>
                    </div>
                  </div>
                </div>

                <div class="mb-4">
                  <h5 class="section-header_BookingForm">Payment options</h5>
                  <div class="section-content_BookingForm">
                    <p class="mb-3">
                      We accept all major credit and debit cards.
                    </p>

                    <div class="payment-cards_BookingForm">
                      {/* <i class="fa-brands fa-cc-visa"></i> */}
                      <svg
                        viewBox="0 0 38 24"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        width="38"
                        height="24"
                        aria-labelledby="pi-visa"
                      >
                        <title id="pi-visa">Visa</title>
                        <path
                          opacity=".07"
                          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                        ></path>
                        <path
                          d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                          fill="#142688"
                        ></path>
                      </svg>
                      <svg
                        viewBox="0 0 38 24"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        width="38"
                        height="24"
                        aria-labelledby="pi-master"
                      >
                        <title id="pi-master">Mastercard</title>
                        <path
                          opacity=".07"
                          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                        ></path>
                        <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                        <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                        <path
                          fill="#FF5F00"
                          d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                        ></path>
                      </svg>
                      {/* <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI0VCMDAxQiIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjEyIiByPSI2IiBmaWxsPSIjRkY1RjAwIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjEyIiByPSI2IiBmaWxsPSIjRkY1RjAwIiBmaWxsLW9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4=" alt="Mastercard"/> */}
                      <svg
                        class="icon icon--full-color"
                        viewBox="0 0 38 24"
                        width="38"
                        height="24"
                        role="img"
                        aria-labelledby="pi-discover"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title id="pi-discover">Discover</title>
                        <path
                          fill="#000"
                          opacity=".07"
                          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        />
                        <path
                          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                          fill="#fff"
                        />
                        <path
                          d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
                          fill="#231F20"
                        />
                        <path
                          d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                          fill="url(#pi-paint0_linear)"
                        />
                        <path
                          opacity=".65"
                          d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                          fill="url(#pi-paint1_linear)"
                        />
                        <path
                          d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
                          fill="#231F20"
                        />
                        <path
                          d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
                          fill="#231F20"
                        />
                        <path
                          d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
                          fill="#F48120"
                        />
                        <defs>
                          <linearGradient
                            id="pi-paint0_linear"
                            x1="21.657"
                            y1="12.275"
                            x2="19.632"
                            y2="9.104"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#F89F20" />
                            <stop offset=".25" stop-color="#F79A20" />
                            <stop offset=".533" stop-color="#F68D20" />
                            <stop offset=".62" stop-color="#F58720" />
                            <stop offset=".723" stop-color="#F48120" />
                            <stop offset="1" stop-color="#F37521" />
                          </linearGradient>
                          <linearGradient
                            id="pi-paint1_linear"
                            x1="21.338"
                            y1="12.232"
                            x2="18.378"
                            y2="6.446"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#F58720" />
                            <stop offset=".359" stop-color="#E16F27" />
                            <stop offset=".703" stop-color="#D4602C" />
                            <stop offset=".982" stop-color="#D05B2E" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        width="38"
                        height="24"
                        role="img"
                        aria-labelledby="pi-jcb"
                        viewBox="0 0 38 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title id="pi-jcb">JCB</title>
                        <g fill="none" fill-rule="evenodd">
                          <g fill-rule="nonzero">
                            <path
                              d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                              fill="#000"
                              opacity=".07"
                            />
                            <path
                              d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                              fill="#FFF"
                            />
                          </g>
                          <path
                            d="M11.5 5H15v11.5a2.5 2.5 0 0 1-2.5 2.5H9V7.5A2.5 2.5 0 0 1 11.5 5z"
                            fill="#006EBC"
                          />
                          <path
                            d="M18.5 5H22v11.5a2.5 2.5 0 0 1-2.5 2.5H16V7.5A2.5 2.5 0 0 1 18.5 5z"
                            fill="#F00036"
                          />
                          <path
                            d="M25.5 5H29v11.5a2.5 2.5 0 0 1-2.5 2.5H23V7.5A2.5 2.5 0 0 1 25.5 5z"
                            fill="#2AB419"
                          />
                          <path
                            d="M10.755 14.5c-1.06 0-2.122-.304-2.656-.987l.78-.676c.068 1.133 3.545 1.24 3.545-.19V9.5h1.802v3.147c0 .728-.574 1.322-1.573 1.632-.466.144-1.365.221-1.898.221zm8.116 0c-.674 0-1.388-.107-1.965-.366-.948-.425-1.312-1.206-1.3-2.199.012-1.014.436-1.782 1.468-2.165 1.319-.49 3.343-.261 3.926.27v.972c-.572-.521-1.958-.898-2.919-.46-.494.226-.737.917-.744 1.448-.006.56.245 1.252.744 1.497.953.467 2.39.04 2.919-.441v1.01c-.358.255-1.253.434-2.129.434zm8.679-2.587c.37-.235.582-.567.582-1.005 0-.438-.116-.687-.348-.939-.206-.207-.58-.469-1.238-.469H23v5h3.546c.696 0 1.097-.23 1.315-.415.283-.25.426-.53.426-.96 0-.431-.155-.908-.737-1.212zm-1.906-.281h-1.428v-1.444h1.495c.956 0 .944 1.444-.067 1.444zm.288 2.157h-1.716v-1.513h1.716c.986 0 1.083 1.513 0 1.513z"
                            fill="#FFF"
                            fill-rule="nonzero"
                          />
                        </g>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="pi-american_express"
                        viewBox="0 0 38 24"
                        width="38"
                        height="24"
                      >
                        <title id="pi-american_express">American Express</title>
                        <path
                          fill="#000"
                          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                          opacity=".07"
                        ></path>
                        <path
                          fill="#006FCF"
                          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
                        ></path>
                        <path
                          fill="#006FCF"
                          d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
                        ></path>
                        <path
                          fill="#006FCF"
                          d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
                        ></path>
                        <path
                          fill="#006FCF"
                          d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
                        ></path>
                        <path
                          fill="#006FCF"
                          d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
                        ></path>
                      </svg>
                      <svg
                        class="icon icon--full-color"
                        viewBox="0 0 38 24"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        width="38"
                        height="24"
                        aria-labelledby="pi-diners_club"
                      >
                        <title id="pi-diners_club">Diners Club</title>
                        <path
                          opacity=".07"
                          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        />
                        <path
                          fill="#fff"
                          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                        />
                        <path
                          d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                          fill="#3086C8"
                        />
                      </svg>
                      {/* <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI0ZGNjAwMCIvPgo8dGV4dCB4PSI0IiB5PSIxNiIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iNyIgZm9udC1mYW1pbHk9IkFyaWFsIj5ESVNDT1ZFUjwvdGV4dD4KPC9zdmc+" alt="Discover"/>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwNjZDQyIvPgo8dGV4dCB4PSIxMCIgeT0iMTYiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjgiIGZvbnQtZmFtaWx5PSJBcmlhbCI+SkNCPC90ZXh0Pgo8L3N2Zz4=" alt="JCB"/>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzAwNTlBNSIvPgo8dGV4dCB4PSI4IiB5PSIxNiIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iNyIgZm9udC1mYW1pbHk9IkFyaWFsIj5ESU5FUlM8L3RleHQ+Cjwvc3ZnPg==" alt="Diners Club"/> */}
                    </div>

                    <div class="row mt-4">
                      <div class="col-md-7">
                        <input
                          type="text"
                          class="form-control card-input"
                          placeholder="1234 1234 1234 1234"
                        />
                      </div>
                      <div class="col-md-3">
                        <input
                          type="text"
                          class="form-control card-input"
                          placeholder="MM / YY"
                        />
                      </div>
                      <div class="col-md-2">
                        <input
                          type="text"
                          class="form-control card-input"
                          placeholder="CVC"
                        />
                      </div>
                    </div>

                    <button class="pay-button_BookingForm">
                      <i class="fas fa-lock mx-2"></i>
                      Pay Securely Now
                    </button>

                    <p class="security-text_BookingForm text-center">
                      This is a secure AES-256 bit SSL Encrypted payment. You're
                      safe.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-5">
                <div class="mb-4">
                  <h5 class="section-header_BookingForm">Order Summary</h5>
                  <div class="section-content_BookingForm">
                    <div class="delegate-pass_BookingForm">
                      <img src={ticket} />
                      {/* <div class="pass-title">WORLD BLOCKCHAIN SUMMIT 2023</div> */}
                      {/* <div class="pass-type">Delegate Pass</div> */}
                    </div>

                    <div class="ticket-count_BookingForm pt-3">1 Ticket</div>
                    <div class="text-end mb-3">
                      <strong>AED 2595</strong>
                    </div>

                    <input
                      type="text"
                      class="form-control discount-input_BookingForm total"
                      placeholder="Discount Code"
                    />

                    <div class="summary-row_BookingForm total">
                      <span>Total</span>
                      <span>AED 2828.55</span>
                    </div>

                    <div class="mt-3 pt-3 border-top">
                      <div class="summary-row_BookingForm">
                        <span>Delegate pass x 1</span>
                        <span>AED 2595</span>
                      </div>
                      <div class="summary-row_BookingForm">
                        <span>Discount</span>
                        <span>AED 0</span>
                      </div>
                      <div class="summary-row_BookingForm">
                        <span>Add-ons</span>
                        <span>AED 0</span>
                      </div>
                      <div class="summary-row_BookingForm">
                        <span>Taxes and Service Charges</span>
                        <span>AED233.55</span>
                      </div>
                      <div class="summary-row_BookingForm total">
                        <span>Total</span>
                        <span>AED 2828.55</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#181818",
          display: "flex",
          justifyContent: "center",
          height: "80px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1070px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              margin: "0",
              padding: "0",
            }}
          >
            <span>Privacy Policy</span>
            <span class="PageForm_divide__vwhn0">|</span>IQ International PTe.
            LTD
          </p>
          <p
            style={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              margin: "0",
              padding: "0",
            }}
          >
            ©2025 Desalination &amp; Resource Recovery 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
