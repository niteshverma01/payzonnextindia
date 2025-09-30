"use client";

import React from "react";
import { Phone, CheckCircle, ArrowRight, Users, Shield, Zap, ShoppingCart, Globe, BarChart3 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const PyazonLandingPage: React.FC = () => {
  const services = [
    "IT Services",
    "Digital Marketing",
    "E-commerce",
    "Fintech Solutions",
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
        </svg>
      ),
      title: "Optimized for Speed",
      description: "Lightning-fast authentication with military-grade security protocols.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z" />
        </svg>
      ),
      title: "24/7 Availability",
      description: "Unbreakable uptime and unmatched reliability for peak performance.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" />
        </svg>
      ),
      title: "Seamless Integration",
      description: "Easy integration with secure, scalable APIs for your business.",
    },
  ];

  const solutions = [
    {
      title: "Build Smarter, Scale Faster",
      subtitle: "WEB & APP DEVELOPMENT SOLUTIONS",
      description: "Custom web and mobile app solutions tailored to your business needs—responsive, secure, and future-ready for the digital era.",
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "Seamless Integrations, Infinite Possibilities",
      subtitle: "READY MADE B2B API PORTAL FOR STARTUPS",
      description: "Empower your business with powerful APIs for payments, verification, recharges, and more—easy integration, secure, and scalable.",
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      title: "Shop Smarter, Experience Better",
      subtitle: "COMPLETE SHOPPING PORTAL",
      description: "Feature-rich eCommerce portals with secure payments, smooth navigation, and personalized shopping experiences that customers love.",
      icon: <ShoppingCart className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    {
      title: "Fortify Your Future, Secure Your Now",
      subtitle: "CYBER SECURITY",
      description: "Protect your business with cutting-edge cybersecurity solutions—advanced firewalls, real-time threat detection, and proactive monitoring to keep your data safe.",
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
      title: "Trust Built Fast, Verified with Ease",
      subtitle: "KYC VERIFICATION SERVICES",
      description: "Streamline KYC and compliance with our secure, automated verification services—fast, reliable, and built for trust.",
      icon: <Users className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
    },
    {
      title: "Unbreakable Uptime, Unmatched Reliability",
      subtitle: "DEDICATED WEB HOSTING SERVICES",
      description: "Power your business with secure, scalable, and lightning-fast hosting solutions designed for 24/7 availability and peak performance.",
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    },
    {
      title: "Maximize Visibility, Engage & Convert",
      subtitle: "DIGITAL MARKETING",
      description: "Elevate your brand with SEO, social media, and targeted ad campaigns crafted to boost engagement and deliver measurable ROI.",
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
    },
    {
      title: "Transform Your Business, Embrace the Future",
      subtitle: "B2B COURIER API/PORTAL",
      description: "Empower your enterprise with AI-driven tools, cloud solutions, and next-gen applications for unmatched efficiency and growth.",
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1558618047-3c8d6a4a91f5?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <img
          src="/images/bg-pagetitle.jpg"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to <span className="text-blue-500">Payzon</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Indian IT Services — Delivering Excellence in Web & Tech Solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Takes 4 columns */}
          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-48 space-y-8">
              {/* Services Menu */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Our Services
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-blue-700 hover:bg-blue-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/images/bg-info-box1.jpg"
                  alt="Business People Silhouette"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                  <motion.svg
                    className="w-16 h-16 text-blue-300 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z" />
                  </motion.svg>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Need Assistance?
                  </h3>
                  <div className="mb-4 flex flex-col items-center">
                    <div className="flex items-center text-white mb-2">
                      <Phone className="w-6 h-6 mr-2" />
                      <span className="text-2xl font-semibold">
                        +91 755 485 9540
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-lg mb-6">
                    Or reach out via our contact form:
                  </p>
                  <motion.button
                    className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Contact</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.aside>

          {/* Main Content Area - Takes 8 columns */}
          <motion.main
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=400&fit=crop"
                  alt="Professional team meeting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-blue-900/30"></div>
              </div>
              <div className="p-8">
                <motion.h1
                  className="text-4xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  IT Services
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Build Smarter, Scale Faster. Custom web and mobile app solutions tailored to your business needs—responsive, secure, and future-ready for the digital era. At PayzonIndia, we are committed to delivering secure, fully functional, high-performance, and portable development to our clients.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    className="bg-blue-900 p-6 rounded-lg relative overflow-hidden hover:bg-blue-500 transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600 rounded-full transform translate-x-8 -translate-y-8"></div>
                    <div className="relative flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-blue-100 font-semibold text-lg">
                          Seamless Integrations
                        </h3>
                        <p className="text-blue-200 text-sm">
                          Empower your business with powerful APIs for payments, verification, recharges, and more—easy integration, secure, and scalable.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-blue-900 p-6 rounded-lg relative overflow-hidden hover:bg-blue-500 transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 rounded-full transform -translate-x-10 translate-y-10"></div>
                    <div className="relative flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-blue-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,1C8.14,1 5,4.14 5,8A7,7 0 0,0 12,15A7,7 0 0,0 19,8C19,4.14 15.86,1 12,1M12,3A5,5 0 0,1 17,8A5,5 0 0,1 12,13A5,5 0 0,1 7,8A5,5 0 0,1 12,3M12,10A1,1 0 0,1 13,11A1,1 0 0,1 12,12A1,1 0 0,1 11,11A1,1 0 0,1 12,10M13,16.9C15.5,17.5 17.5,19.5 18,22H17C16.5,20 15,18.4 13,17.7V16.9M11,16.9V17.7C9,18.4 7.5,20 7,22H6C6.5,19.5 8.5,17.5 11,16.9Z" />
                      </svg>
                      <div>
                        <h3 className="text-blue-100 font-semibold text-lg">
                          Secure & Compliant
                        </h3>
                        <p className="text-blue-200 text-sm">
                          Next-generation verification infrastructure powered by AI, blockchain security, and government API integration.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Solutions Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="relative h-48">
                    <Image
                      src={solution.image}
                      alt={solution.subtitle}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      {React.cloneElement(solution.icon, { className: "text-white drop-shadow-lg" })}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.subtitle}</h3>
                    <h4 className="text-2xl font-extrabold text-blue-600 mb-3">{solution.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                    <motion.button
                      className="text-blue-500 font-semibold flex items-center gap-2 hover:text-blue-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* We Serve the Best Work Section */}
            <motion.section
              className="rounded-2xl shadow-xl p-8 bg-gradient-to-r from-blue-50 to-indigo-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
                <motion.div
                  className="md:w-64 flex-shrink-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                    alt="Team collaboration"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <motion.h2
                    className="text-3xl font-bold text-black mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    We Serve the Best Work
                  </motion.h2>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-3 mt-1 text-lg">•</span>
                      <span>
                        Custom web and mobile app solutions tailored to your business needs—responsive, secure, and future-ready for the digital era.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-3 mt-1 text-lg">•</span>
                      <span>
                        Feature-rich eCommerce portals with secure payments, smooth navigation, and personalized shopping experiences that customers love.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-blue-700/50">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-900/30 transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700 text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>


           
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default PyazonLandingPage;