import {useTranslations} from 'next-intl';
import {ArrowRight} from 'lucide-react';
import {Link} from '@/i18n/routing';

export default function FeaturedProducts() {
  const t = useTranslations('FeaturedProducts');

  const products = [
    {
      id: 'solid_brick',
      img: '/images/product_bricks_1778002110634.png',
      badge: 'HOT'
    },
    {
      id: 'two_hole_brick',
      img: '/images/product_bricks_1778002110634.png',
    },
    {
      id: 'four_hole_brick',
      img: '/images/product_bricks_1778002110634.png',
      badge: 'NEW'
    },
    {
      id: 'decorative_brick',
      img: '/images/product_bricks_1778002110634.png',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">{t('subtitle')}</span>
            <h2 className="text-3xl font-bold text-gray-900">{t('title')}</h2>
          </div>
          <Link href="/products" className="hidden sm:flex items-center text-sm font-medium text-[#b84a14] hover:text-[#a14010]">
            {t('see_all')} <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                {p.badge && (
                  <span className="absolute top-4 left-4 bg-[#b84a14] text-white text-[10px] font-bold px-2 py-1 rounded z-10">
                    {p.badge}
                  </span>
                )}
                <img 
                  src={p.img} 
                  alt={t(`${p.id}.name`)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(`${p.id}.name`)}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{t(`${p.id}.desc`)}</p>
                <div className="flex flex-wrap gap-2">
                  {(t.raw(`${p.id}.tags`) as string[]).map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
