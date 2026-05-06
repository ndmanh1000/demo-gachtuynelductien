'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import ContactModal from './ContactModal';

export default function Hero() {
  const t = useTranslations('Hero');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[600px] flex overflow-hidden">
        <div className="w-1/2 h-full relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="/images/hero_bg_left_1778001725950.png"
            alt="Brick laying"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="/images/hero_bg_right_1778002084610.png"
            alt="Modern building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center divider line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#b84a14] z-20 -translate-x-1/2" />

        {/* Overlay content */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl drop-shadow-lg leading-tight mb-6">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow mb-10">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-[#b84a14] hover:bg-[#a14010] text-white px-8 py-4 rounded font-semibold text-sm transition-colors shadow-xl">
              {t('explore_btn')}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded font-semibold text-sm transition-colors"
            >
              {t('contact_btn')}
            </button>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="contact"
      />
    </>
  );
}
