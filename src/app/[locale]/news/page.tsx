import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import NewsList from '@/components/NewsList';

export default function NewsPage() {
  const t = useTranslations('NewsPage');

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="bg-gradient-to-br from-[#b84a14]/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </div>
      </div>

      <NewsList />

      <Footer />
    </main>
  );
}
