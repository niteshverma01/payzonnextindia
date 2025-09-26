"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const awards = [
  { id: 1, image: "https://sevenit.in/assets/images/Picture1.jpg", title: "IT Services" },
  { id: 2, image: "https://eu-images.contentstack.com/v3/assets/blt69509c9116440be8/blt8ffb90a2f64bacfa/6776f4544b281ca5e2bc465a/cybersecurity_NicoElNino-AlamyStockPhoto.jpg", title: "Cyber Security" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuY0jAR_6dAVhCvoQ8zGPqTnL8z8bJ1EuLFQ&s", title: "Skills Development" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhY-ikHeC_3NCeXFQ3Za5AniBqnH4BELmbA&s", title: "Organic Farming" },
  { id: 5, image: "https://wellify.in/cdn/shop/products/Littles-Junior-Ring-Top-Tile-02.jpg?v=1674021250", title: "Toys Industries" },
  { id: 6, image: "https://www.latrendzjewellery.com/wp-content/uploads/2020/08/Artificial-jewellery-industry-in-India.jpg", title: "Artificial Jewellery" },
  { id: 7, image: "https://c4.wallpaperflare.com/wallpaper/942/112/901/table-fruit-nuts-vegetables-wood-hd-wallpaper-preview.jpg", title: "Spices & Vegetables" },
  { id: 8, image: "https://thumbs.dreamstime.com/b/banner-featuring-lotus-incense-sticks-petals-spiritual-awakening-calmness-embodying-zen-design-concept-high-quality-333067525.jpg", title: "Divine Industries" },
  { id: 9, image: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg", title: "Clothing" },
  { id: 10, image: "https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-153892434.jpg", title: "Electronics" },
];

export default function AwardsAchievements() {
  return (
    <section className="relative group">
      <div className="absolute inset-0 -z-10">
        <img src="/it-consultancy-professionals.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/75 to-slate-800/85" />
      </div>

      <div className="relative py-16 sm:py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              <div className="w-8 h-1 bg-blue-600"></div>
              <div className="w-4 h-1 bg-blue-600"></div>
              <div className="w-2 h-1 bg-blue-600"></div>
            </div>
            <span className="text-blue-400 text-sm sm:text-base font-semibold tracking-wider uppercase">Ongoing Ventures</span>
            <div className="flex gap-1">
              <div className="w-2 h-1 bg-blue-600"></div>
              <div className="w-4 h-1 bg-blue-600"></div>
              <div className="w-8 h-1 bg-blue-600"></div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Building the Future with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Our Ongoing Ventures</span>
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={5}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-white/40 w-3 h-3 rounded-full inline-block mx-1.5 cursor-pointer transition-all",
              bulletActiveClass: "swiper-pagination-bullet-active bg-gradient-to-r from-cyan-400 to-blue-500 w-10 h-3 rounded-full",
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 5 },
              768: { slidesPerView: 3, spaceBetween: 5 },
              1024: { slidesPerView: 3, spaceBetween: 5 },
              1280: { slidesPerView: 4, spaceBetween: 5 },
            }}
            className="mySwiper"
          >
            {awards.map((award) => (
              <SwiperSlide key={award.id}>
                <div className="flex justify-center">
                  <div className="relative group cursor-pointer">
                    <div className="relative rounded-2xl w-[260px] h-[300px] bg-gradient-to-b from-slate-800/85 to-slate-900/85 border-2 border-transparent bg-clip-padding backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:border-cyan-400/60">
                      <div className="p-5 flex flex-col items-center text-center h-full">
                        <div className="w-48 h-48 rounded-xl mb-5 overflow-hidden">
                          <Image src={award.image} alt={award.title} width={192} height={192} className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <p className="text-white font-bold text-base sm:text-lg uppercase bg-black/50 rounded-lg px-3 py-2">{award.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/15 hover:bg-white/25 backdrop-blur-lg rounded-full flex items-center justify-center text-white transition-all hover:scale-110 border border-white/25" aria-label="Previous slide">
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/15 hover:bg-white/25 backdrop-blur-lg rounded-full flex items-center justify-center text-white transition-all hover:scale-110 border border-white/25" aria-label="Next slide">
              <ChevronRight className="w-7 h-7" />
            </button>
          </Swiper>
          {/* <div className="swiper-pagination flex justify-center mt-6" /> */}
        </div>
      </div>
    </section>
  );
}