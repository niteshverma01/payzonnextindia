"use client"

import { Button } from "@/components/ui/button"
import { Play, Award, Users, Shield, Lightbulb, ArrowRight, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

// Define types for tab content
interface TabContent {
  text: string
  image: string
  icon: JSX.Element
  color: string
  bgColor: string
}

interface TabContentMap {
  mission: TabContent
  vision: TabContent
  value: TabContent
}

interface MousePosition {
  x: number
  y: number
}

export default function About() {
  const [activeTab, setActiveTab] = useState<keyof TabContentMap>("mission")
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  // Disable mouse movement on touch devices
  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (!isTouchDevice) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const tabContent: TabContentMap = {
    mission: {
      text: "Our goal is to transform businesses with advanced technology that boosts efficiency, fosters innovation, and ensures long-term success.",
      image: "/professional-woman-smiling.png",
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    vision: {
      text: "We aim to lead the industry by delivering state-of-the-art IT services that enhance scalability, security, and user satisfaction.",
      image: "/professional-woman-smiling.png",
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
    },
    value: {
      text: "A pioneering tech firm from South Asia, we specialize in creating tailored IT solutions that promote growth, resilience, and global competitiveness.",
      image: "/professional-woman-smiling.png",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
  }

  // Swipe support for tabs
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd
      const isSwipe = Math.abs(distance) > 50
      if (isSwipe) {
        const tabKeys = Object.keys(tabContent) as (keyof TabContentMap)[]
        const currentIndex = tabKeys.indexOf(activeTab)
        if (distance > 0 && currentIndex < tabKeys.length - 1) {
          setActiveTab(tabKeys[currentIndex + 1])
        } else if (distance < 0 && currentIndex > 0) {
          setActiveTab(tabKeys[currentIndex - 1])
        }
      }
    }
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className="min-h-screen py-6 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden bg-white max-w-7xl mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Interactive mouse glow (disabled on mobile) */}
        <div
          className="hidden md:block absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-300/10 to-purple-400/10 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      </div>

      <div className="container mx-auto px-4  relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
            {/* Header */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></div>
                <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-widest uppercase flex items-center space-x-1 sm:space-x-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>About Us TechNova</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                Choose{" "}
                <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-clip-text text-transparent ">
                  The Best
                </span>{" "}
                <br />IT Service Company
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                TechNova has been crafted to deliver an exceptional user experience with a
                <span className="text-blue-600 font-semibold"> distinctive design</span> that redefines industry benchmarks.
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
                    className={`pb-2 sm:pb-3 px-2 border-b-2 font-semibold transition-all duration-300 whitespace-nowrap flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base ${activeTab === key
                        ? "text-blue-600 border-blue-500"
                        : "text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-400"
                      }`}
                    aria-label={`View ${key} details`}
                  >
                    <span className={`transition-all duration-300 ${activeTab === key ? "text-blue-600 scale-110" : "text-gray-500 group-hover:text-blue-500"}`}>
                      {content.icon}
                    </span>
                    <span className="capitalize">Our {key}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-300/10 shadow-2xl bg-white/10 transition-all duration-300 ${tabContent[activeTab].bgColor}`}>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r ${tabContent[activeTab].color} p-2 flex items-center justify-center shadow-lg`}>
                  <span className="text-white">{tabContent[activeTab].icon}</span>
                </div>
                <p className="text-gray-800 leading-relaxed font-semibold text-xs sm:text-sm md:text-base flex-1">
                  {tabContent[activeTab].text}
                </p>
              </div>
            </div>

            {/* Enhanced Button */}
            <div className="flex items-center">
              <div className="relative group cursor-pointer">
                <div className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white pl-4 sm:pl-6 pr-10 sm:pr-12 py-2 sm:py-5  hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-1 sm:space-x-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="font-semibold text-xs sm:text-sm md:text-base tracking-wide relative z-10">
                    Check details about our company
                  </span>
                  <div className="absolute -right-1 sm:-right-5 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-17 sm:w-17 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                      <Play className="w-3 h-3 sm:w-6 sm:h-6 text-black ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="relative order-1 md:order-2 flex justify-center mt-36">
            {/* Blue Circle Background with smooth bounce */}
            <div className="relative w-full flex justify-center items-center">
              <div className="absolute w-[600px] h-[600px] rounded-full border-[50px] border-blue-600 animate-bounce"></div>

              {/* Image */}
              <div className="relative z-10 pr-28">
                <img
                  src={tabContent[activeTab].image}
                  alt={`${activeTab} image`}
                  className="w-[280px] md:w-[380px] lg:w-[500px] h-auto object-cover rounded-md shadow-2xl"
                />

                {/* Top Left Badge */}
                <div className="absolute -top-6 -left-6 bg-blue-600 text-white px-6 py-6 rounded-sm shadow-lg">
                  <div className="text-4xl font-bold leading-none">12</div>
                  <div className="text-sm font-semibold uppercase tracking-wide">
                    years of <br /> experience
                  </div>
                </div>

                {/* Bottom Right Card */}
                <div className="absolute ml-2 -bottom-10 bg-white px-6 py-4 rounded-tr-lg rounded-tl-lg shadow-2xl w-[480px]">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <Award className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-base">
                        Best Awarded Company
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We tailor our services to meet your unique business needs with unmatched dedication.
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
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 0.8; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
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
          .animate-ping, .animate-bounce {
            animation-duration: 4s;
          }
        }
      `}</style>
    </section>
  )
}