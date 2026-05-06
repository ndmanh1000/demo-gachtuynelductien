import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-[#b84a14] uppercase bg-[#b84a14]/10 px-4 py-2 rounded-full">
              Our Team
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Experienced professionals dedicated to excellence and innovation
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="team-swiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#b84a14]/20 h-full">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-white/90 font-medium">
                      {member.position}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .team-swiper {
          padding-bottom: 60px !important;
        }
        .team-swiper .swiper-button-next,
        .team-swiper .swiper-button-prev {
          color: #b84a14;
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .team-swiper .swiper-button-next:after,
        .team-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        .team-swiper .swiper-button-next:hover,
        .team-swiper .swiper-button-prev:hover {
          background: #b84a14;
          color: white;
        }
        .team-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
        }
        .team-swiper .swiper-pagination-bullet-active {
          background: #b84a14;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}
