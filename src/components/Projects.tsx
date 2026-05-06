import {useTranslations} from 'next-intl';
import {MapPin} from 'lucide-react';
import {Link} from '@/i18n/routing';

export default function Projects() {
  const t = useTranslations('Projects');

  const projects = [
    {
      id: 'project1',
      slug: 'luxury-villa',
      img: '/images/project_1_1778002255653.png',
      location: 'hcm'
    },
    {
      id: 'project2',
      slug: 'modern-office',
      img: '/images/project_1_1778002255653.png',
      location: 'binhduong'
    },
    {
      id: 'project3',
      slug: 'heritage-restoration',
      img: '/images/project_1_1778002255653.png',
      location: 'hanoi'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">{t('subtitle')}</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-gray-500">{t('desc')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.slug}`} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 rounded bg-gray-200 aspect-[4/3]">
                <img
                  src={p.img}
                  alt={t(p.id)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#b84a14] transition-colors">{t(p.id)}</h3>
              <p className="text-sm text-gray-500 flex items-center">
                <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                {t(`locations.${p.location}`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
