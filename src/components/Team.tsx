'use client';

import {useTranslations} from 'next-intl';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Team() {
  const t = useTranslations('Team');

  const members = [
    { id: 'member1', img: '/images/hero_bg_left_1778001725950.png' },
    { id: 'member2', img: '/images/product_bricks_1778002110634.png' },
    { id: 'member3', img: '/images/hero_bg_right_1778002084610.png' },
    { id: 'member4', img: '/images/project_1_1778002255653.png' }
  ];

  const MemberCard = ({m}: {m: typeof members[0]}) => (
    <div className="text-center">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
        <img
          src={m.img}
          alt={t(`${m.id}.name`)}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{t(`${m.id}.name`)}</h3>
      <p className="text-xs font-bold tracking-wider text-[#b84a14] uppercase mb-4">{t(`${m.id}.role`)}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{t(`${m.id}.desc`)}</p>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">{t('subtitle')}</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-gray-500">{t('desc')}</p>
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{clickable: true}}
            autoplay={{delay: 3500, disableOnInteraction: false}}
            className="!pb-12"
          >
            {members.map((m) => (
              <SwiperSlide key={m.id}>
                <MemberCard m={m} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m) => (
            <MemberCard key={m.id} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
