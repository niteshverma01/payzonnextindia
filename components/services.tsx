import { useState, useEffect } from "react";
import {
  Shield,
  Phone,
  Users,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Our goal is to propel you to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
    image: "/backup-and-recovery-technology.jpg",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Our goal is to propel your to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
    image: "/voip-communication-technology.jpg",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Our goal is to propel you to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
    image: "/business-consulting-meeting.png",
  },
  {
    icon: BarChart3,
    title: "Backup & Recovery",
    description:
      "Our goal is to propel you to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
    image: "/it-consultancy-professionals.jpg",
  },
  {
    icon: Phone,
    title: "VoIP Solutions",
    description:
      "Advanced voice over IP communication systems for modern businesses with cutting-edge technology.",
    image: "/backup-and-recovery-technology.jpg",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description:
      "Strategic IT consulting and planning services for business growth and digital transformation.",
    image: "/voip-communication-technology.jpg",
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragEndX, setDragEndX] = useState(0);

  // Responsive slides per view
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, services.length - slidesPerView);

  // Auto-play
  useEffect(() => {
    if (isAutoPlay && maxSlide > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, maxSlide]);

  // Manual navigation
  const handlePrevious = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  // Touch swipe
  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
    setIsAutoPlay(false);
  };

  const handleTouchMove = (e) => {
    setDragEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const dragDistance = dragStartX - dragEndX;
    const threshold = 50; // Minimum distance to trigger swipe
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentSlide < maxSlide) {
        setCurrentSlide((prev) => prev + 1); // Swipe right
      } else if (dragDistance < 0 && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1); // Swipe left
      }
    }
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <section className="bg-gray-100">
      <section
        className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto relative"
        // Removed overflow-hidden to allow touch events
      >
        <div className="px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-blue-600 font-semibold mb-4 flex items-center justify-center text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-blue-600"></div>
                <div className="w-3 h-0.5 bg-blue-600"></div>
              </div>
              <span className="mx-4 tracking-wider uppercase">Our Services</span>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-blue-600"></div>
                <div className="w-6 h-0.5 bg-blue-600"></div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              We provide the necessary
              <br />
              services to you
            </h2>
          </div>

          <div className="relative group/section max-w-7xl mx-auto">
            {/* Left Arrow - appears on section hover */}
            {maxSlide > 0 && (
              <button
                onClick={handlePrevious}
                className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-20 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden lg:flex hover:bg-gray-50"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
            )}

            {/* Right Arrow - appears on section hover */}
            {maxSlide > 0 && (
              <button
                onClick={handleNext}
                className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-20 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden lg:flex hover:bg-gray-50"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            )}

            {/* Services Cards Container */}
            <div
              className="overflow-x-hidden" // Changed to overflow-x-hidden to allow vertical scrolling if needed
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    {/* Card with extra top padding for icon */}
                    <div className="relative rounded-2xl shadow-lg group/card cursor-pointer bg-white mt-8">
                      {/* Service Image */}
                      <div className="relative h-80 overflow-hidden ">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                        />

                        {/* Default Blue Strip at bottom - diagonal cut */}
                        <div className="absolute bottom-0 left-0 right-0 transition-all duration-500 group-hover/card:-translate-y-full">
                          {/* Blue background wrapper */}
                          <div className="relative h-32">
                            {/* Before pseudo - top diagonal */}
                            <div
                              className="absolute inset-0 bg-blue-600/80"
                              style={{
                                clipPath:
                                  "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                                zIndex: 1,
                              }}
                            />
                            {/* After pseudo - can be used for shadow or overlay if needed */}
                            <div
                              className="absolute inset-0 bg-blue-700/10"
                              style={{
                                clipPath:
                                  "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                                zIndex: 2,
                              }}
                            />

                            {/* Icon */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-600">
                                <service.icon className="w-7 h-7 text-blue-600" />
                              </div>
                            </div>

                            {/* Title */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-6 z-10">
                              <h3 className="text-lg font-bold text-white leading-tight px-2">
                                {service.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Hover Overlay - slides up from bottom */}
                        <div className="absolute inset-0 bg-blue-600 text-white flex flex-col justify-center p-6 text-center transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-in-out">
                          <h3 className="text-xl font-bold mb-4 text-white">
                            {service.title}
                          </h3>
                          <p className="text-sm text-blue-50 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex justify-center">
                            <button className="bg-[#7d70ff] text-white px-6 py-2.5 text-sm font-semibold transition-colors duration-200 shadow-md">
                              Read more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            {maxSlide > 0 && (
              <div className="flex justify-center space-x-2 mt-8">
                {[...Array(maxSlide + 1)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlay(false);
                      setTimeout(() => setIsAutoPlay(true), 5000);
                    }}
                    className={`transition-all duration-300 ${
                      currentSlide === index
                        ? "w-8 h-3 bg-blue-600 rounded-full"
                        : "w-3 h-3 bg-gray-400 hover:bg-gray-500 rounded-full"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-semibold transition-all duration-300 transform hover:scale-105 ">
              More Services
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}