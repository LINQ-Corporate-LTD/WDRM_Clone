import React from "react";
import img from "../../src/assets/images/last.jpg"; // Ensure this path points to your actual image file
import "../../src/assets/css/relatedevent.css"
const RelatedEventsSection = () => {
  return (
    <div className="bg-gray-100 h-full py-30 ">
      <div className=" mx-auto max-w-7xl px-4 my-5">
        {/* Title */}
        <h2 className="text-black text-2xl font-bold mb-8 text-center tracking-wider">
          RELATED EVENTS IN THE SERIES
        </h2>
        {/* Events Grid */}
        <div className="grid grid-cols-1 h-full md:grid-cols-3 gap-6">
          {/* Event 1 */}
          <a
            href="https://www.water-resource-recovery.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full outline-none focus:outline-none no-underline"
          >
            <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Header with Event Title and Image Background */}
              <div
                className="relative h-72 py-8 text-center flex items-end justify-center transition-all duration-300"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-[#00bbff] opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                <h3 className="text-white text-xl font-bold relative z-10 no-underline">
                  WATER RESOURCE RECOVERY USA 2025
                </h3>
              </div>
              {/* Details Section */}
              <div className="bg-white p-4">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm no-underline">14 - 15 April, 2025</p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm no-underline">Miami, Florida</p>
                </div>
              </div>
            </div>
          </a>
          {/* Event 2 */}
          <a
            href="https://www.membrane-technology-show.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full outline-none focus:outline-none no-underline"
          >
            <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div
                className="relative h-72 py-8 text-center flex items-end justify-center transition-all duration-300"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-[#00bbff] opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                <h3 className="text-white text-xl font-bold relative z-10 no-underline">
                  MEMBRANE TECHNOLOGY USA 2025
                </h3>
              </div>
              <div className="bg-white p-4">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm no-underline">23 - 24 July, 2025</p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm no-underline">Miami, Florida</p>
                </div>
              </div>
            </div>
          </a>
          {/* Event 3 */}
          <a
            href="https://www.europe.pfas-summit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full outline-none focus:outline-none no-underline"
          >
            <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div
                className="relative h-72 py-8 text-center flex items-end justify-center transition-all duration-300"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-[#00bbff] opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                <h3 className="text-white text-xl font-bold relative z-10 no-underline">
                  PFAS TREATMENT EUROPE 2025
                </h3>
              </div>
              <div className="bg-white p-4">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm no-underline">28 - 29 July, 2025</p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-700 text-sm no-underline">
                    Amsterdam, The Netherlands
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RelatedEventsSection;