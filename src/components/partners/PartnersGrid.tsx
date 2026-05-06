"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Partner {
  name: string;
  logo: string;
  category: string;
  description: string;
  projects: string;
  since: string;
}

interface PartnersGridProps {
  partners: Partner[];
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDesc: string;
}

export default function PartnersGrid({ partners, sectionTitle, sectionSubtitle, sectionDesc }: PartnersGridProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-[#b84a14] uppercase bg-[#b84a14]/10 px-4 py-2 rounded-full">
              {sectionSubtitle}
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            {sectionTitle}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {sectionDesc}
          </p>
        </div>

        <div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-gray-300",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-[#b84a14]",
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
            }}
            className="!pb-12"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#b84a14]/30 flex items-center justify-center h-32">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
