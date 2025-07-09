import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    name: "Event Details",
    href: "/booking",
    dropdown: [
      { name: "Register & Book Now", href: "/booking" },
      { name: "Program 2025", href: "/agenda" },
      { name: "Who Should Attend", href: "/who-should-attend" },
    ],
  },
  {
    name: "Speakers",
    href: "/speakers",
    dropdown: [
      { name: "Call For Presentations", href: "/speakers" },
      { name: "Featured Speakers", href: "/featured-Speakers" },
    ],
  },
  {
    name: "Sponsors",
    href: "/sponsor",
  },
  { name: "Venue", href: "/venue" },
  {
    name: "Resources",
    href: "#resources",
    dropdown: [
      { name: "Latest News", href: "#downloads" },
      { name: "Media Partners", href: "/media-partners" },
      { name: "FAQ", href: "/faqs" },
    ],
  },
  { name: "Contact Us", href: "/contact-us" },
];

const logoWhite =
  "https://desalination-resource-recovery.com/api/images/logo/1742534509561.png";
const logoBlack =
  "https://www.desalination-resource-recovery.com/api/images/logo/1742534509562.png";

const Navbar = ({ disableScrollEffect = false, forceScrolled = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const effectiveScrolled = forceScrolled || (!disableScrollEffect && scrolled);

  useEffect(() => {
    if (disableScrollEffect || forceScrolled) return;
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [disableScrollEffect, forceScrolled]);

  const handleMouseEnter = (itemName) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredItem(null);
    }, 150); // Small delay to allow moving to dropdown
    setDropdownTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 px-12 transition-colors duration-300 ${
        effectiveScrolled ? "bg-white shadow px-5" : ""
      }`}
    >
      <div
        className={`w-full flex items-center justify-between md:px-12`}
        style={{ height: "90px" }}
      >
        {/* Background Bar */}
        <div
          className={`absolute inset-0 w-full h-full z-0 transition-colors duration-300 ${
            effectiveScrolled ? "bg-white" : "bg-opacity-60"
          }`}
        />

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center z-10">
          <a href="/">
            <img
              src={effectiveScrolled ? logoBlack : logoWhite}
              alt="Site logo"
              className="object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-12 z-10 relative pt-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className={`relative text-md font-extrabold uppercase tracking-wide transition px-1
                  after:content-[''] after:block after:h-1 after:rounded after:scale-x-0 after:transition-transform after:duration-300 after:origin-left
                  hover:after:scale-x-100 focus:after:scale-x-100
                  ${
                    effectiveScrolled
                      ? "text-black after:bg-black"
                      : "text-white after:bg-white"
                  }
                  ${
                    window.location.hash === item.href
                      ? " after:scale-x-100"
                      : ""
                  }`}
                style={{ letterSpacing: "0.03em" }}
              >
                {item.name}
              </a>

              {/* Horizontal Card-Style Dropdown Menu */}
              {item.dropdown && hoveredItem === item.name && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {/* Arrow pointing up */}
                  {/* <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45 z-10"></div> */}

                  {/* Horizontal Cards Container */}
                  <div className="flex gap-4 bg-white rounded-sm shadow-xl border border-gray-400 p-2">
                    {item.dropdown.map((dropdownItem, index) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block bg-[#E4E4E4] hover:bg-[#00baff] hover:text-white transition-colors duration-200 rounded-lg p-6 min-w-[160px] text-center group"
                      >
                        <div className="text-gray-800 font-semibold text-sm group-hover:text-white transition-colors duration-200">
                          {dropdownItem.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Register Button */}
        <div className="flex items-center z-10">
          <a
            href="booking"
            className={`hidden md:inline-block font-extrabold py-4 px-12 rounded transition text-lg uppercase shadow-lg
              ${
                effectiveScrolled
                  ? "bg-[#00baff] text-black hover:bg-white hover:text-black"
                  : "bg-[#00baff] text-black hover:bg-white hover:text-black"
              }`}
          >
            REGISTER
          </a>
          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden ml-4 text-sky-300 z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden py-6 px-8 space-y-6 text-black text-lg font-semibold uppercase shadow-lg animate-fade-in-down"
          style={{ backdropFilter: "blur(10px)" }}
        >
          {navItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                className="block bg-white px-2 rounded hover:text-sky-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
              {/* Mobile dropdown items */}
              {item.dropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block bg-gray-100 px-2 rounded hover:text-sky-400 transition-colors py-1 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#register"
            className="inline-block bg-[#00baff] hover:bg-sky-300 text-black font-extrabold py-4 px-12 rounded transition text-lg uppercase shadow-lg mt-2"
            style={{ minWidth: 180, textAlign: "center" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            REGISTER
          </a>
        </div>
      )}
    </header>
  );
};
export default Navbar;
