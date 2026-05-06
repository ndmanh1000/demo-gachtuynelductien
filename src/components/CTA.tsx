import {useTranslations} from 'next-intl';

export default function CTA() {
  const t = useTranslations('CTA');

  return (
    <section className="relative py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/hero_bg_left_1778001725950.png')] bg-cover bg-center mix-blend-multiply" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t('title')}</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">{t('subtitle')}</p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-[#b84a14] hover:bg-[#a14010] text-white px-8 py-4 rounded font-semibold text-sm transition-colors shadow-lg">
            {t('quote_btn')}
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded font-semibold text-sm transition-colors">
            {t('contact_btn')}
          </button>
        </div>
      </div>
    </section>
  );
}
