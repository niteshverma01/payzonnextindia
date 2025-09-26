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
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import { de } from "date-fns/locale";

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

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const marqueeText = marqueeContent.join(" | ") + " | ";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // adjust scroll threshold
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

  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName);
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setHoveredItem(null);
  };

  return (
    <>
      <div
        className={`w-full mx-auto fixed top-0 z-50 transition-all duration-500 bg-transparent`}
      >
        <div className="py-2 sm:py-0 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
            {/* Logo */}
            <div className={`relative flex-shrink-0 -mt-4 sm:-mt-6 md:-mt-8`}>
              <ItfirmLogo isScrolled={false} />
            </div>

            {/* Mobile Menu Button - Enhanced for mobile only */}
            <button
              className={`lg:hidden focus:outline-none transition-all duration-300 p-3 rounded-2xl border-2 border-white backdrop-blur-md text-white text-bold hover:text-blue-200 bg-white/10 hover:bg-white/20  shadow-lg hover:shadow-2xl transform hover:scale-110 active:scale-95`}
              onClick={toggleMobileMenu}
            >
              <div className="relative">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={28} />}
              </div>
            </button>

            {/* Desktop Navigation - COMPLETELY UNCHANGED */}
            <nav
              className={`flex-1 transition-all duration-500 hidden lg:block`}
            >
              {/* Top Header - Only visible when not scrolled */}
              <div
                className={`transition-all duration-300 opacity-100  ${
                  isScrolled
                    ? "bg-white text-black shadow-lg mx-12 rounded-3xl  max-h-14 mb-1"
                    : "bg-transparent max-h-20 mb-0"
                }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
                  <div
                    className={`flex justify-center items-center  text-sm ${
                      isScrolled ? "text-black -mt-2" : "text-white"
                    }`}
                  >
                    <div
                      className={`flex items-center space-x-4  pb-2 ${
                        isScrolled ? "border-none" : "border-b border-white"
                      }`}
                    >
                      {/* Company Name */}
                      <div className="flex items-center space-x-2 whitespace-nowrap">
                        <span className="text-sm md:text-base lg:text-lg font-black uppercase">
                          Payzon India private limited
                        </span>
                      </div>

                      <div
                        className={`h-5 w-0.5 border-r-2 ${
                          isScrolled ? "border-blue-500" : "bg-white"
                        }`}
                      ></div>

                      {/* WhatsApp Contact */}
                      <div className="flex items-center gap-2 whitespace-nowrap  px-3 py-1 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <FaWhatsapp className="text-4xl text-green-400" />
                        <a
                          href="https://wa.me/919243837546"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-lg"
                        >
                          +91 9243837546
                        </a>
                      </div>

                      <div
                        className={`h-5 w-0.5 border-r-2 ${
                          isScrolled ? "border-blue-500" : "bg-white"
                        }`}
                      ></div>

                      {/* Social Media Icons */}
                      <div className="flex items-center -space-x-4">
                        <a
                          href="https://www.instagram.com/thepayzonindia/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                        >
                          <Instagram size={20} strokeWidth={2.2} />
                        </a>
                        <a
                          href="https://x.com/payzonindia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                        >
                          <Twitter size={20} strokeWidth={2.2} />
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                        >
                          <Youtube size={20} strokeWidth={2.2} />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/payzonindiabhopal/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                        >
                          <Linkedin size={20} strokeWidth={2.2} />
                        </a>
                        <a
                          href="https://www.facebook.com/PAYZONINDIA/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                        >
                          <Facebook size={20} strokeWidth={2.2} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Navigation */}
              <div
                className={`transition-all duration-300 px-4 sm:px-6 md:px-8 rounded-full bg-blue-600 py-6 sm:py-8  shadow-xl `}
              >
                <ul
                  className={`flex items-center justify-center flex-nowrap gap-2 sm:gap-2  whitespace-nowrap text-white`}
                >
                  {navigationItems.map((item, index) => (
                    <li
                      key={item.name}
                      className="relative group  whitespace-nowrap"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() =>
                          item.hasDropdown
                            ? handleToggle(item.name)
                            : handleSmoothScroll(item.href)
                        }
                        className={`flex items-center font-bold transition-all duration-500 px-4 py-3 rounded-xl text-xs sm:text-base text-white relative overflow-hidden group ${
                          hoveredItem === item.name
                            ? "bg-gradient-to-r from-white/20 via-white/15 to-white/10 shadow-lg scale-105 transform"
                            : "hover:bg-white/10"
                        }`}
                      >
                        {/* Animated background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full"></div>

                        <span className="relative z-10 transition-all duration-300 group-hover:text-blue-100">
                          {item.name}
                        </span>

                        {item.hasDropdown && (
                          <Plus
                            size={12}
                            strokeWidth={3}
                            className={`ml-2 transition-all duration-500 z-10 relative ${
                              openDropdown === item.name
                                ? "rotate-45 text-blue-200 scale-110"
                                : "group-hover:rotate-45 group-hover:scale-110"
                            }`}
                          />
                        )}
                      </button>

                      {/* ENHANCED PROFESSIONAL DROPDOWN */}
                      {item.hasDropdown && openDropdown === item.name && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 z-50">
                          {/* Clean Arrow */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                            <div className="w-4 h-4 bg-white rotate-45 shadow-lg border border-gray-100"></div>
                          </div>

                          {/* Professional Dropdown Container */}
                          <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-dropdown-fade-in">
                            {/* Clean Header */}
                            <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-100 flex text-center items-center justify-center">
                              <div className="flex items-center gap-3">
                                <h3 className="text-lg font-semibold text-gray-800">
                                  {item.name}
                                </h3>
                              </div>
                            </div>

                            {/* Clean Menu Items */}
                            <div className="py-2">
                              {item.dropdownItems.map((drop, idx) => (
                                <button
                                  key={idx}
                                  className="group flex items-center w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white rounded-3xl transition-all duration-200 relative "
                                  onClick={() =>
                                    handleSmoothScroll(
                                      `#${drop
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`
                                    )
                                  }
                                >
                                  {/* Simple Dot Indicator */}
                                  <div className="w-2 h-2 rounded-full bg-black mr-4 group-hover:bg-white transition-colors duration-200"></div>

                                  {/* Menu Text */}
                                  <span className="flex-1 group-hover:translate-x-1 transition-transform duration-200">
                                    {drop}
                                  </span>

                                  {/* Arrow on Hover */}
                                  <ArrowRight
                                    size={14}
                                    className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-black transform group-hover:text-white group-hover:translate-x-1"
                                  />
                                </button>
                              ))}
                            </div>

                            {/* Subtle Bottom Border */}
                            {/* <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div> */}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
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

      {/* Mobile Menu Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-[100vw] bg-gradient-to-br from-slate-50 via-white to-purple-50 shadow-2xl transform transition-all duration-500 z-50 ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="relative flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
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

        {/* Mobile Menu Content */}
        <div className="h-full overflow-y-auto pb-20">
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
                      </div>
                    )}
                  </button>

                  {/* ENHANCED MOBILE DROPDOWN */}
                  {item.hasDropdown && openDropdown === item.name && (
                    <div className="mt-4 ml-8 space-y-2 animate-mobile-dropdown">
                      {item.dropdownItems.map((drop, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            handleSmoothScroll(
                              `#${drop.toLowerCase().replace(/\s+/g, "-")}`
                            )
                          }
                          className="flex items-center w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-700 bg-white hover:bg-blue-50 rounded-lg border border-gray-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md group"
                          style={{
                            animationDelay: `${idx * 50}ms`,
                          }}
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors duration-200"></div>
                          <span className="flex-1 group-hover:translate-x-1 transition-transform duration-200">
                            {drop}
                          </span>
                          <ArrowRight
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-blue-500"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
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

            {/* WhatsApp Section */}
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

        @keyframes dropdown-fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes mobile-dropdown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-dropdown-fade-in {
          animation: dropdown-fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-mobile-dropdown {
          animation: mobile-dropdown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced hover effects */
        .group:hover .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }

        /* Custom backdrop blur for better browser support */
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }

        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced focus states for accessibility */
        button:focus,
        a:focus {
          outline: 2px solid rgba(59, 130, 246, 0.5);
          outline-offset: 2px;
        }

        /* Improved mobile touch targets */
        @media (max-width: 1024px) {
          button,
          a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
}
