"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Shield,
  Cloud,
  Network,
  Lock,
  BarChart3,
  Search,
  Users,
  Building,
  Plus,
} from "lucide-react";

const categories = [
  "All",
  "Cloud Services",
  "Cyber Security",
  "IT Security",
  "Networking",
];

// Map portfolio items to icons for visual consistency
const portfolioItems = [
  {
    title: "Product Engineering",
    category: "Cloud Services",
    image: "/product-engineering-team.jpg",
    icon: Cloud,
    description:
      "Innovative product engineering solutions to drive your business forward with cutting-edge cloud technology.",
  },
  {
    title: "Firewall Advance",
    category: "IT Security",
    image: "/firewall-security-technology.jpg",
    icon: Shield,
    description:
      "Advanced firewall solutions to protect your IT infrastructure from threats and vulnerabilities.",
  },
  {
    title: "Data Management",
    category: "IT Security",
    image: "/data-management-professionals.jpg",
    icon: Lock,
    description:
      "Secure and efficient data management systems to ensure compliance and accessibility.",
  },
  {
    title: "Big Data & Analytics",
    category: "Cloud Services",
    image: "/big-data-analytics.png",
    icon: BarChart3,
    description:
      "Harness the power of big data with advanced analytics to drive business insights.",
  },
  {
    title: "Research & Energy",
    category: "Networking",
    image: "/research-and-energy-technology.jpg",
    icon: Search,
    description:
      "Cutting-edge research and energy solutions powered by robust networking infrastructure.",
  },
  {
    title: "Security Management",
    category: "Cyber Security",
    image: "/security-management-team.jpg",
    icon: Shield,
    description:
      "Comprehensive security management to safeguard your digital assets from cyber threats.",
  },
  {
    title: "Internal Networking",
    category: "Networking",
    image: "/internal-networking-infrastructure.jpg",
    icon: Network,
    description:
      "Seamless internal networking solutions to enhance connectivity and collaboration.",
  },
  {
    title: "Property Simplified",
    category: "Networking",
    image: "/property-management-technology.jpg",
    icon: Building,
    description:
      "Streamlined property management solutions powered by advanced networking technology.",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className=" py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto pt-12 text-start mb-12 grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div className="text-blue-600 font-semibold mb-2 flex items-center text-2xl">
              <span className="w-8 h-0.5 bg-blue-600 mr-3"></span>
              Work Index!
              <span className="w-8 h-0.5 bg-blue-600 ml-3"></span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Few of Our Apps Adored
              <br />
              by <span className="text-blue-600">millions of users!</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto  text-xl font-medium">
            We shows only the best websites and portfolios built completely with
            passion, simplicity & creativity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 font-semibold hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl shadow-lg group/card cursor-pointer bg-white mt-8"
            >
              {/* Card Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                />

                {/* Default Blue Strip at bottom - diagonal cut */}
                <div className="absolute bottom-0 left-0 right-0 transition-all duration-500 group-hover/card:-translate-y-full">
                  {/* Blue background wrapper */}
                  <div className="relative h-32">
                    {/* Before pseudo - top diagonal */}
                    <div
                      className="absolute inset-0 bg-black/80"
                      style={{
                        clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                        zIndex: 1,
                      }}
                    />
                    {/* After pseudo - for shadow/overlay */}
                    <div
                      className="absolute inset-0 bg-black/10"
                      style={{
                        clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                        zIndex: 2,
                      }}
                    />

                    {/* Title and Category */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-6 z-10">
                      <h3 className="text-lg font-bold text-white leading-tight px-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-purple-400 mt-1">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay - slides up from bottom */}
                <div className="absolute inset-0 bg-blue-600 text-white flex flex-col justify-center p-6 text-center transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-50 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-center">
                    <div className="bg-white p-3 rounded-full shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]">
                      <Plus
                        className="text-black transition-colors duration-300 ease-in-out hover:text-blue-600"
                        strokeWidth={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-semibold transition-all duration-300 transform hover:scale-105">
            Load more
          </span>
        </div>
      </div>
    </section>
  );
}
