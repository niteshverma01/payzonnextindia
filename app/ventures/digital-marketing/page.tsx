"use client";

import React from "react";
import { Phone, CheckCircle, ArrowRight, Megaphone, BadgeCheck, Hash, BarChart3, Truck, DollarSign, Target, TrendingUp } from "lucide-react";
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
      title: "Data-Driven Strategies",
      description: "Leverage analytics and insights to optimize campaigns for maximum impact.",
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
      title: "Targeted Campaigns",
      description: "Reach your ideal audience with precision targeting across multiple platforms.",
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
      title: "Measurable ROI",
      description: "Track performance with detailed reports to ensure every investment counts.",
    },
  ];

  const digitalMarketingSolutions = [
    {
      title: "Maximize Visibility, Engage & Convert",
      subtitle: "DIGITAL MARKETING",
      description: "Elevate your brand with SEO, social media, and targeted ad campaigns crafted to boost engagement and deliver measurable ROI.",
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
    },
    {
      title: "Amplify Your Brand, Build Trust",
      subtitle: "PR SERVICES",
      description: "Amplify your brand with strategic PR campaigns that build trust and visibility. Craft compelling brand stories, manage media relations, and navigate crises through press releases, influencer partnerships, and targeted campaigns.",
      icon: <Megaphone className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    },
    {
      title: "Secure Authenticity, Boost Credibility",
      subtitle: "META VERIFICATION SERVICES",
      description: "Secure the blue tick to boost authenticity and customer trust. Streamline Meta verification with full support for documentation, eligibility, and applications to enhance credibility and prevent impersonation.",
      icon: <BadgeCheck className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1611162617213-7d15d3e8e5c8?w=800&h=600&fit=crop"
    },
    {
      title: "Simplify Compliance, Seamless Campaigns",
      subtitle: "DLT REGISTRATION",
      description: "Simplify telecom compliance for seamless SMS campaigns. Handle end-to-end DLT registration, including operator onboarding and template approval, ensuring regulatory compliance without hassle.",
      icon: <Hash className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
    },
    {
      title: "Skyrocket Presence, Drive Traffic",
      subtitle: "SEO/SMO SERVICES",
      description: "Skyrocket your online presence with tailored SEO and SMO strategies. Optimize websites for search engines and amplify social media to drive organic traffic and boost engagement across platforms.",
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    },
    {
      title: "Launch & Scale, No Inventory Hassle",
      subtitle: "DROP SHIPPING SERVICES",
      description: "Launch and scale your e-commerce store with expert drop-shipping solutions. Set up profitable stores with product sourcing, order fulfillment, and marketing strategies without inventory concerns.",
      icon: <Truck className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    {
      title: "Drive ROI, Targeted Ads",
      subtitle: "PAID AD CAMPAIGN",
      description: "Drive high ROI with data-driven ad campaigns across platforms. Design and optimize paid ads on Google, Facebook, and Instagram to drive traffic, generate leads, and maximize sales.",
      icon: <DollarSign className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1558618047-3c8d6a4a91f5?w=800&h=600&fit=crop"
    },
    {
      title: "Fuel Pipeline, Qualified Leads",
      subtitle: "LEAD GENERATION",
      description: "Fuel your sales pipeline with qualified leads tailored to your business goals. Combine data-driven strategies, targeted campaigns, and analytics for high-quality leads and better conversions.",
      icon: <Target className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
      title: "Accelerate Growth, Integrated Solutions",
      subtitle: "BUSINESS BOOSTER",
      description: "Accelerate growth with integrated branding and marketing solutions. Combine branding, digital marketing, lead generation, and automation for rapid visibility and revenue growth.",
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
    }
  ];

  const digitalMarketingServices = [
    {
      icon: <Megaphone className="w-8 h-8 text-blue-500" />,
      title: "PR Services",
      description: "Amplify your brand with strategic PR campaigns that build trust and visibility. Our PR services craft compelling brand stories, manage media relations, and navigate crises. Through press releases, influencer partnerships, and targeted campaigns, we keep your brand in the spotlight.",
      subtitle: "Brand Strategy"
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-blue-500" />,
      title: "Meta Verification Services",
      description: "Secure the blue tick to boost authenticity and customer trust. We streamline Meta verification with full support for documentation, eligibility, and applications. Verified accounts enhance credibility, prevent impersonation, and build customer confidence.",
      subtitle: "Paid Media"
    },
    {
      icon: <Hash className="w-8 h-8 text-blue-500" />,
      title: "DLT Registration",
      description: "Simplify telecom compliance for seamless SMS campaigns. We handle end-to-end DLT registration, including operator onboarding and template approval, ensuring your SMS and voice campaigns comply with regulations without hassle.",
      subtitle: "Compliance Services"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "SEO/SMO Services",
      description: "Skyrocket your online presence with tailored SEO and SMO strategies. Our SEO/SMO services optimize your website for search engines and amplify your social media presence, driving organic traffic and boosting engagement across platforms.",
      subtitle: "Digital Visibility"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      title: "Drop Shipping Services",
      description: "Launch and scale your e-commerce store with expert drop-shipping solutions. We set up profitable drop-shipping stores with product sourcing, order fulfillment, and marketing strategies, enabling growth without inventory or logistics concerns.",
      subtitle: "E-Commerce"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: "Paid AD Campaign",
      description: "Drive high ROI with data-driven ad campaigns across platforms. Our experts design and optimize paid ad campaigns on Google, Facebook, and Instagram to drive traffic, generate leads, and maximize sales with measurable results.",
      subtitle: "Performance Marketing"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Lead Generation",
      description: "Fuel your sales pipeline with qualified leads tailored to your business goals. Our lead generation services combine data-driven strategies, targeted campaigns, and advanced analytics to deliver high-quality leads. We focus on connecting your business with the right audience, ensuring better conversion rates and ROI.",
      subtitle: "Marketing Solutions"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Business Booster",
      description: "Accelerate growth with integrated branding and marketing solutions. Our Business Booster package combines branding, digital marketing, lead generation, and automation to drive rapid visibility and revenue growth for startups and businesses.",
      subtitle: "Growth Strategy"
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
            Digital Marketing Excellence — Elevate Your Brand & Drive Growth
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
                                    Our Ventures

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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop"
                  alt="Digital marketing team"
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
                  Digital Marketing
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Elevate Your Brand with Cutting-Edge Digital Strategies. Transform your business with our comprehensive digital marketing solutions designed to drive explosive growth, boost engagement, and deliver measurable ROI. At Payzon Marketing, we craft tailored campaigns that put your brand in the spotlight.
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
                          Strategic PR & Visibility
                        </h3>
                        <p className="text-blue-200 text-sm">
                          Build trust and amplify your brand through targeted PR and media campaigns.
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
                      <BarChart3 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-blue-100 font-semibold text-lg">
                          Performance-Driven Ads
                        </h3>
                        <p className="text-blue-200 text-sm">
                          Maximize ROI with data-backed paid advertising across all major platforms.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Solutions Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {digitalMarketingSolutions.slice(0, 6).map((solution, index) => (
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

            {/* Additional Solutions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {digitalMarketingSolutions.slice(6).map((solution, index) => (
                <motion.div
                  key={index + 6}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 6) }}
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

            {/* Digital Marketing Services Section */}
            <motion.section
              className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <motion.h2
                  className="text-4xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Digital Marketing Services
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-600 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Transform your business with our comprehensive suite of marketing solutions, from PR to performance ads, designed to drive growth and engagement.
                </motion.p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {digitalMarketingServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{service.subtitle}</p>
                    <p className="text-gray-700 text-base leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                    alt="Marketing collaboration"
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
                    We Deliver Marketing Excellence
                  </motion.h2>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-3 mt-1 text-lg">•</span>
                      <span>
                        Tailored digital strategies that amplify your brand and drive targeted traffic.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-3 mt-1 text-lg">•</span>
                      <span>
                        Comprehensive services from SEO optimization to high-ROI paid campaigns for sustained growth.
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