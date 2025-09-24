"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  Award,
  Users,
  Shield,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define types for tab content
interface TabContent {
  text: string;
  icon: JSX.Element;
  color: string;
  bgColor: string;
}

interface TabContentMap {
  mission: TabContent;
  vision: TabContent;
  value: TabContent;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function About() {
  const [activeTab, setActiveTab] = useState<keyof TabContentMap>("mission");
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  // Disable mouse movement on touch devices
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const tabContent: TabContentMap = {
    mission: {
      text: '"Our mission is to empower businesses with innovative IT, fintech, and e-commerce solutions, ensuring growth, digital safety, and sustainable development across industries"',
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    vision: {
      text: '"We envision a secure, prosperous digital world through cutting-edge API solutions, e-commerce platforms, and social initiatives, driving innovation and global impact."',
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
    },
    value: {
      text: "As a dynamic group from Central India, we deliver tailored solutions in IT, fintech, e-commerce, cyber security, and social welfare, promoting resilience, trust, and global competitiveness.",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
  };

  // Swipe support for tabs
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      const isSwipe = Math.abs(distance) > 50;
      if (isSwipe) {
        const tabKeys = Object.keys(tabContent) as (keyof TabContentMap)[];
        const currentIndex = tabKeys.indexOf(activeTab);
        if (distance > 0 && currentIndex < tabKeys.length - 1) {
          setActiveTab(tabKeys[currentIndex + 1]);
        } else if (distance < 0 && currentIndex > 0) {
          setActiveTab(tabKeys[currentIndex - 1]);
        }
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="min-h-screen py-6 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden bg-white max-w-7xl mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
            {/* Header */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></div>
                <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-widest uppercase flex items-center space-x-1 sm:space-x-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Versatile Solutions For Every Sector </span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                Emerging{" "}
                <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Corporate
                </span>{" "}
                <br />
                From Central India{" "}
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Payzon India, a dynamic group from Central India, excels in IT
                services, fintech APIs, e-commerce platforms, digital marketing,
                cyber security, and social welfare. Since 2029, we’ve empowered
                businesses and communities globally with secure, scalable, and
                innovative solutions across industries like organic farming,
                toys, artificial jewellery, and more.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-300">
              <div
                className="flex space-x-3 sm:space-x-6 overflow-x-auto scrollbar-hide"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {Object.entries(tabContent).map(([key, content]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as keyof TabContentMap)}
                    className={`pb-2 sm:pb-3 px-2 border-b-2 font-semibold transition-all duration-300 whitespace-nowrap flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base ${
                      activeTab === key
                        ? "text-blue-600 border-blue-500"
                        : "text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-400"
                    }`}
                    aria-label={`View ${key} details`}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        activeTab === key
                          ? "text-blue-600 scale-110"
                          : "text-gray-500 group-hover:text-blue-500"
                      }`}
                    >
                      {content.icon}
                    </span>
                    <span className="capitalize">Our {key}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-300 transition-all duration-300`}
            >
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r ${tabContent[activeTab].color} p-2 flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white">
                    {tabContent[activeTab].icon}
                  </span>
                </div>
                <p className="text-gray-800 leading-relaxed font-semibold text-xs sm:text-sm md:text-base flex-1">
                  {tabContent[activeTab].text}
                </p>
              </div>
            </div>

            {/* Enhanced Button */}
            <div className="flex items-center">
              <div className="relative group cursor-pointer w-full sm:w-auto">
                <Link href="https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA">
                  <div className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white pl-4 sm:pl-6 pr-10 sm:pr-12 py-2 sm:py-5 hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-1 sm:space-x-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="font-semibold text-xs sm:text-sm md:text-base tracking-wide relative z-10">
                      Explore Payzon India Group
                    </span>
                    <div className="absolute -right-1 sm:-right-5 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-12 sm:w-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                        <Play
                          className="w-3 h-3 sm:w-6 sm:h-6 text-black ml-0.5"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="relative order-1 md:order-2 flex justify-center mt-20 sm:mt-28 md:mt-36">
            {/* Blue Circle Background */}
            <div className="relative w-full flex justify-center items-center">
              <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full border-[20px] sm:border-[35px] md:border-[50px] border-blue-600 animate-bounce"></div>

              {/* Image */}
              <div className="relative z-10">
                <img
                  src="/images/1111.png"
                  alt="Payzon India Team"
                  className="w-[220px] sm:w-[350px] md:w-[500px] lg:w-[700px] xl:w-[900px] h-auto object-cover -mt-8 sm:-mt-12"
                />

                {/* Top Left Badge */}
                <div className="absolute -top-16 sm:-top-20 md:-top-28 -left-2 sm:-left-6 bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 rounded-sm shadow-lg flex flex-col items-center text-center">
                  <div className="text-lg sm:text-xl md:text-3xl font-black uppercase tracking-widest">
                    From
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-6xl font-bold leading-none">
                    2009
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Serving Globally
                  </div>
                </div>

                {/* Bottom Right Card */}
                <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 left-1/2 -translate-x-1/2 bg-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-tr-lg rounded-tl-lg shadow-2xl w-[90%] sm:w-[400px] md:w-[480px]">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Empowering Businesses Across Sectors
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Delivering secure IT services, innovative fintech
                        solutions, scalable e-commerce platforms, and robust
                        cybersecurity — all supported 24/7 for your growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes ping {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-ping {
          animation: ping 2s infinite;
        }
        .animate-bounce {
          animation: bounce 3s infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        img {
          will-change: transform;
        }
        @media (max-width: 640px) {
          .animate-ping,
          .animate-bounce {
            animation-duration: 4s;
          }
        }
      `}</style>
    </section>
  );
}
