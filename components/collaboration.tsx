"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Award {
  id: number;
  image: string;
  title: string;
}

export default function AwardsAchievements() {
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  const awards: Award[] = [
    {
      id: 1,
      image: "https://sevenit.in/assets/images/Picture1.jpg", // IT company logo from Freepik
      title: "IT Services",
    },
    {
      id: 2,
      image: "https://eu-images.contentstack.com/v3/assets/blt69509c9116440be8/blt8ffb90a2f64bacfa/6776f4544b281ca5e2bc465a/cybersecurity_NicoElNino-AlamyStockPhoto.jpg", // Cyber security logo from Freepik
      title: "Cyber Security",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuY0jAR_6dAVhCvoQ8zGPqTnL8z8bJ1EuLFQ&s", // Skills development icon from Flaticon
      title: "Skills Development",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhY-ikHeC_3NCeXFQ3Za5AniBqnH4BELmbA&s", // Organic farm logo from Canva
      title: "Organic Farming",
    },
    {
      id: 5,
      image: "https://media.licdn.com/dms/image/v2/D5612AQHbZW8weluemA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1720977515429?e=2147483647&v=beta&t=Q_kqteZmoYIvgIXjz5DKX5xydE_0kgLkmu7xz5vZwrw", // Toys R Us logo from 1000logos
      title: "Toys Industries",
    },
    {
      id: 6,
      image: "https://5.imimg.com/data5/TG/DN/MY-37294786/designer-artificial-jewellery.jpg", // Jewelry logo from Freepik
      title: "Artificial Jewellery",
    },
    {
      id: 7,
      image: "https://c4.wallpaperflare.com/wallpaper/942/112/901/table-fruit-nuts-vegetables-wood-hd-wallpaper-preview.jpg", // Spices logo from Freepik
      title: "Spices & Vegetables",
    },
    {
      id: 8,
      image: "Divine Industries", // Divine Industries logo
      title: "Divine Industries",
    },
    {
      id: 9,
      image: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg", // Clothing logo from CleanPNG
      title: "Clothing",
    },
    {
      id: 10,
      image: "https://www.canva.com/api/designs/templates/electronics-logo.png", // Electronics logo from Canva
      title: "Electronics",
    },
];

  return (
    <section className="relative overflow-hidden max-w-6xl mx-auto group">
      <div className="absolute inset-0 -z-10">
        <img
          src="/it-consultancy-professionals.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90"></div>
      </div>

      <div className="relative py-16 sm:py-20 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12 sm:mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              <div className="w-8 h-1 bg-cyan-400"></div>
              <div className="w-4 h-1 bg-cyan-400"></div>
              <div className="w-2 h-1 bg-cyan-400"></div>
            </div>
            <span className="text-blue-600 text-sm sm:text-base font-semibold tracking-wider uppercase">
              Ongoing Ventures
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-1 bg-blue-600"></div>
              <div className="w-4 h-1 bg-blue-600"></div>
              <div className="w-8 h-1 bg-blue-600"></div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Building the Future with <br />
            <span className="text-blue-600">Our Ongoing Ventures</span>
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-white/30 w-3 h-3 rounded-full inline-block mx-1.5 cursor-pointer",
              bulletActiveClass: "swiper-pagination-bullet-active bg-cyan-400 w-8 h-3 rounded-full",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            onAutoplayStop={() => setIsAutoPlay(false)}
            onAutoplayStart={() => setIsAutoPlay(true)}
            onTouchEnd={() => {
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 6000);
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="mySwiper mx-0 sm:mx-8"
          >
            {awards.map((award) => (
              <SwiperSlide key={award.id}>
                <div className="px-3 sm:px-1 flex justify-center">
                  <div className="relative group cursor-pointer">
                    <div className="relative bg-white rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 w-[180px] h-[180px] sm:w-[180px] sm:h-[170px] flex items-center justify-center overflow-hidden">
                      <div className="relative bg-white rounded-2xl p-4 flex flex-col items-center text-center w-full h-full justify-center">
                        <div className="mb-3">
                          <Image
                            src={award.image}
                            alt={award.title}
                            width={96}
                            height={96}
                            className="w-14 h-14 sm:w-auto sm:h-24 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-slate-800 text-xs sm:text-sm font-bold mb-1 group-hover:text-blue-600 transition-colors">
                          {award.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {awards.length > 1 && (
              <>
                <button
                  className="swiper-button-prev absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition-all hover:scale-110 border border-white/20 opacity-0 group-hover:opacity-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="swiper-button-next absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition-all hover:scale-110 border border-white/20 opacity-0 group-hover:opacity-100"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="swiper-pagination flex justify-center space-x-3 mt-8 sm:mt-10"></div>
              </>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}