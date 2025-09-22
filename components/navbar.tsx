"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Mail,
  ChevronDown,
  Menu,
  X,
  Plus,
  Facebook,
  Sparkles,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems: string[];
  icon: string;
}

interface DotPatternProps {
  className?: string;
  dotSize?: string;
  isScrolled?: boolean;
}

interface ItfirmLogoProps {
  isScrolled: boolean;
}

const ItfirmLogo: React.FC<ItfirmLogoProps> = ({ isScrolled }) => {
  // Tailwind-friendly dynamic sizes, made responsive for non-scrolled version
  const containerSize = isScrolled
    ? "w-[10rem] h-[6.875rem]" // 160px x 110px
    : "w-[12rem] sm:w-[15rem] md:w-[18.75rem] h-[8rem] sm:h-[10rem] md:h-[12.5rem]"; // Scaled down for mobile: ~192px x 128px base

  const blueCircleSize = isScrolled
    ? "w-[10rem] h-[6.875rem] rounded-[70%_70%_65%_70%]"
    : "w-[12rem] sm:w-[15rem] md:w-[18.75rem] h-[9.75rem] sm:h-[12.1875rem] md:h-[14.625rem] rounded-[70%_70%_65%_70%]";

  const whiteOvalSize = isScrolled
    ? "w-[9.375rem] h-[6.25rem] top-[0.3125rem] left-[0.3125rem] rounded-[70%_70%_65%_70%]"
    : "w-[11.625rem] sm:w-[14.5rem] md:w-[18.125rem] h-[9.125rem] sm:h-[11.4375rem] md:h-[13.75rem] top-[-0.25rem] sm:top-[-0.3125rem] md:top-[-0.375rem] left-[0.1875rem] sm:left-[0.21875rem] md:left-[0.25rem] rounded-[70%_70%_65%_70%]";

  const spacing = isScrolled
    ? "space-x-1"
    : "space-x-1 sm:space-x-2 md:space-x-3";

  // Scrolled (small) version
  if (isScrolled) {
    return (
      <div className="relative w-auto h-14 sm:h-16 md:h-20">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain"
          />
          <span className="text-black text-[1.625rem] sm:text-[1.75rem] md:text-[2rem] font-bold">
            PAYZONINDIA
          </span>
        </div>
      </div>
    );
  }

  // Default (large) version
  return (
    <div className={`relative ${containerSize}`}>
      <div
        className={`bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 shadow-lg ${blueCircleSize}`}
      />
      <div
        className={`absolute bg-white shadow-md flex flex-col items-center justify-center ${whiteOvalSize}`}
      >
        <div className={`flex flex-col items-center ${spacing} mb-1`}>
          <div className="w-full max-w-[70%]">
            <img
              src="/images/logo3.png"
              alt="Logo inside oval"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const navigationItems: NavigationItem[] = [
  {
    name: "Ventures",
    href: "#ventures",
    hasDropdown: true,
    dropdownItems: [
      "IT Services",
      "Digital Marketing",
      "E-Commerce",
      "Fintech Solutions",
    ],
    icon: "🚀",
  },
  {
    name: "Associations",
    href: "#associations",
    hasDropdown: true,
    dropdownItems: ["Media", "Social Welfare", "Finance Audits"],
    icon: "🤝",
  },
  {
    name: "Audit Report",
    href: "#audit",
    hasDropdown: true,
    dropdownItems: [
      "Financial Reports",
      "Compliance Documents",
      "Annual Reviews",
      "Transparency Reports",
    ],
    icon: "📋",
  },
  {
    name: "Investor Program",
    href: "#investor",
    hasDropdown: true,
    dropdownItems: [
      "Investment Opportunities",
      "Funding Rounds",
      "Returns Analysis",
      "Join Program",
    ],
    icon: "💎",
  },
  {
    name: "Working Sector",
    href: "#sector",
    hasDropdown: true,
    dropdownItems: [
      "IT Services",
      "Cyber Security",
      "Skills Development",
      "Organic Farming",
      "Toys Industries",
      "Artificial Jewellery",
      "Spices & Vegetables",
      "Divine Industries",
      "Clothing",
      "Electronics",
    ],
    icon: "🏢",
  },
];

const marqueeContent = [
  "Welcome to PayzonIndia",
  "Explore Our Ventures",
  "Join Our Investor Program",
  "Discover Our Portfolio",
  "Contact Us Today",
];

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const marqueeText = marqueeContent.join(" | ") + " | ";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <div
        className={`w-full mx-auto fixed top-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="py-2 sm:py-0 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
            {/* Logo */}
            <div
              className={`relative flex-shrink-0 ${
                isScrolled ? "mt-0" : "-mt-4 sm:-mt-6 md:-mt-8"
              }`}
            >
              <ItfirmLogo isScrolled={isScrolled} />
            </div>

            {/* Mobile Menu Button - Enhanced for mobile only */}
            <button
              className={`lg:hidden focus:outline-none transition-all duration-300 p-3 rounded-2xl border-2 backdrop-blur-md ${
                isScrolled
                  ? "text-black hover:text-blue-500 bg-white hover:bg-blue-50 border-gray-200 shadow-lg hover:shadow-xl"
                  : "text-white hover:text-blue-200 bg-white/10 hover:bg-white/20 border-white/30 shadow-lg hover:shadow-2xl"
              } transform hover:scale-110 active:scale-95`}
              onClick={toggleMobileMenu}
            >
              <div className="relative">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                {!isMobileMenuOpen && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
                )}
              </div>
            </button>

            {/* Desktop Navigation - COMPLETELY UNCHANGED */}
            <nav
              className={`flex-1 transition-all duration-500 hidden lg:block`}
            >
              {/* Top Header - Only visible when not scrolled */}
              <div
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "opacity-0 max-h-0 overflow-hidden"
                    : "opacity-100 max-h-20"
                }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
                  <div className="flex justify-center items-center text-white text-sm">
                    <div className="flex items-center space-x-4 border-b border-white pb-2">
                      {/* Company Name */}
                      <div className="flex items-center space-x-2 whitespace-nowrap">
                        <span className="text-sm md:text-base lg:text-lg font-black uppercase">
                          Payzon India private limited
                        </span>
                      </div>

                      <div className="h-5 w-[2px] bg-white"></div>

                      {/* WhatsApp Contact */}
                      <div className="flex items-center gap-2 whitespace-nowrap text-white px-3 py-1 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <FaWhatsapp className="text-xl text-green-400" />
                        <a
                          href="https://wa.me/919243837546"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-base"
                        >
                          +91 9243837546
                        </a>
                      </div>

                      <div className="h-5 w-[2px] bg-white"></div>

                      {/* Social Media Icons */}
                      <div className="flex items-center">
                        <a
                          href="https://www.instagram.com/thepayzonindia/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
                        >
                          <Instagram size={16} className="font-bold" />
                        </a>
                        <a
                          href="https://x.com/payzonindia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
                        >
                          <Twitter size={16} />
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
                        >
                          <Youtube size={16} />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/payzonindiabhopal/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
                        >
                          <Linkedin size={16} />
                        </a>
                        <a
                          href="https://www.facebook.com/PAYZONINDIA/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center hover:bg-white/20 rounded-full transition-all duration-200"
                        >
                          <Facebook size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Navigation */}
              <div
                className={`transition-all duration-300 px-4 sm:px-6 md:px-8 rounded-full ${
                  isScrolled
                    ? "bg-white py-3 my-2"
                    : "bg-blue-600 py-6 sm:py-8 mt-0 shadow-xl"
                }`}
              >
                <ul
                  className={`flex items-center justify-center flex-nowrap gap-2 sm:gap-4  whitespace-nowrap ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  {navigationItems.map((item, index) => (
                    <>
                      <li
                        key={item.name}
                        className="relative group whitespace-nowrap"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <button
                          onClick={() =>
                            item.hasDropdown
                              ? handleToggle(item.name)
                              : handleSmoothScroll(item.href)
                          }
                          className={`flex items-center font-bold  transition-all duration-300 px-2 py-2 rounded-lg ${
                            isScrolled
                              ? "text-[0.75rem] sm:text-[0.875rem] hover:bg-gray-100 hover:text-black"
                              : "text-xs sm:text-base text-white hover:bg-white/10"
                          }`}
                        >
                          <span>{item.name}</span>
                          {item.hasDropdown && (
                            <Plus
                              size={12}
                              strokeWidth={3}
                              className={`ml-1 transition-transform duration-300 ${
                                openDropdown === item.name ? "rotate-45" : ""
                              } group-hover:rotate-45`}
                            />
                          )}
                        </button>

                        {item.hasDropdown && openDropdown === item.name && (
                          <ul className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden animate-fadeIn z-50 border border-gray-100">
                            {item.dropdownItems.map((drop, idx) => (
                              <li
                                key={idx}
                                className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-all duration-200 text-sm font-medium hover:text-blue-600 border-b border-gray-50 last:border-b-0"
                                onClick={() =>
                                  handleSmoothScroll(
                                    `#${drop
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`
                                  )
                                }
                              >
                                {drop}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                      {isScrolled && index < navigationItems.length - 1 && (
                        <div className="h-6 border-r-2 border-blue-500 mx-1 sm:mx-2" /> // Border is often more consistent
                      )}
                    </>
                  ))}
                </ul>
              </div>
            </nav>

            {isScrolled && (
              <div className="hidden lg:flex items-center space-x-0 text-black">
                <a
                  href="https://www.instagram.com/thepayzonindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:bg-blue-100 rounded-full transition-all duration-200"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://x.com/payzonindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:bg-blue-100 rounded-full transition-all duration-200"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:bg-blue-100 rounded-full transition-all duration-200"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/payzonindiabhopal/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:bg-blue-100 rounded-full transition-all duration-200"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.facebook.com/PAYZONINDIA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:bg-blue-100 rounded-full transition-all duration-200"
                >
                  <Facebook size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Enhanced */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-blue-900/40 backdrop-blur-sm z-40 transition-all duration-500"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar - COMPLETELY ENHANCED */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-[100vw] bg-gradient-to-br from-slate-50 via-white to-purple-50 shadow-2xl transform transition-all duration-500 z-50 ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Mobile Menu Header - Enhanced */}
        <div className="relative flex items-center justify-between px-6 py-4   bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-700/90"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-12 translate-y-12"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
              {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div> */}
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                PAYZONINDIA
              </span>
              <div className="text-xs text-blue-100 font-medium">
                Private Limited
              </div>
            </div>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="relative z-10 p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Menu Content - Enhanced */}
        <div className="h-full overflow-y-auto pb-20">
          {/* Welcome Message */}
          {/* <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-purple-100">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">Explore Our Services</span>
            </div>
          </div> */}

          <div className="px-6 py-6">
            <ul className="space-y-4">
              {navigationItems.map((item, index) => (
                <li key={item.name} className="w-full">
                  <button
                    onClick={() =>
                      item.hasDropdown
                        ? handleToggle(item.name)
                        : handleSmoothScroll(item.href)
                    }
                    className="group flex items-center justify-between w-full text-left p-4 text-base font-semibold text-gray-800 hover:text-white bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-transparent"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMobileMenuOpen
                        ? "slideInFromLeft 0.6s ease-out forwards"
                        : "",
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-150 group-hover:rotate-180 transition-all duration-300"></div>
                      <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </div>
                    {item.hasDropdown && (
                      <div className="relative">
                        <ChevronDown
                          size={20}
                          className={`transform transition-all duration-300 group-hover:text-white ${
                            openDropdown === item.name
                              ? "rotate-180 text-purple-600"
                              : "text-gray-400"
                          }`}
                        />
                        {openDropdown === item.name && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-ping"></div>
                        )}
                      </div>
                    )}
                  </button>

                  {item.hasDropdown && openDropdown === item.name && (
                    <div className="mt-4 ml-8 space-y-3">
                      {item.dropdownItems.map((drop, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            handleSmoothScroll(
                              `#${drop.toLowerCase().replace(/\s+/g, "-")}`
                            )
                          }
                          className="flex items-center w-full text-left px-4 py-3 text-sm font-medium text-gray-600 hover:text-white bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-400 hover:to-purple-500 rounded-xl border border-gray-200 hover:border-transparent transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg group"
                          style={{
                            animationDelay: `${idx * 50}ms`,
                            animation:
                              openDropdown === item.name
                                ? "slideInFromRight 0.4s ease-out forwards"
                                : "",
                          }}
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white group-hover:scale-150 transition-all duration-200"></div>
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {drop}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Social Section */}
          <div className="mx-6 mb-6 p-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-bold text-gray-800">
                Connect With Us
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {[
                {
                  href: "https://www.instagram.com/thepayzonindia/",
                  icon: Instagram,
                  color: "hover:from-pink-500 hover:to-orange-500",
                  label: "Instagram",
                },
                {
                  href: "https://x.com/payzonindia",
                  icon: Twitter,
                  color: "hover:from-blue-500 hover:to-blue-600",
                  label: "Twitter",
                },
                {
                  href: "https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA",
                  icon: Youtube,
                  color: "hover:from-red-500 hover:to-red-600",
                  label: "YouTube",
                },
                {
                  href: "https://www.linkedin.com/company/payzonindiabhopal/posts/?feedView=all",
                  icon: Linkedin,
                  color: "hover:from-blue-600 hover:to-blue-700",
                  label: "LinkedIn",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 flex items-center justify-center text-gray-600 bg-white hover:text-white border-2 border-gray-200 hover:border-transparent rounded-2xl bg-gradient-to-r from-gray-50 to-white ${social.color} transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl`}
                  title={social.label}
                >
                  <social.icon
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-200"
                  />
                </a>
              ))}
            </div>

            {/* Enhanced WhatsApp Section */}
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
              <a
                href="https://wa.me/919243837546"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                  <FaWhatsapp className="text-2xl text-white group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-green-700 font-medium uppercase tracking-wider">
                    WhatsApp
                  </p>
                  <p className="font-bold text-green-800 text-lg group-hover:text-green-600 transition-colors duration-200">
                    +91 9243837546
                  </p>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
