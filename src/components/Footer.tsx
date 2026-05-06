import {useTranslations} from 'next-intl';
import { Link } from '@/i18n/routing';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-[#b84a14]">Ceramica</span>
              <span className="text-2xl font-bold text-gray-800 ml-2">Masonry</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              {t('desc')}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b84a14] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">{t('contact.address')}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b84a14] flex-shrink-0" />
                <a href="tel:+842812345678" className="text-sm text-gray-600 hover:text-[#b84a14]">
                  {t('contact.phone')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b84a14] flex-shrink-0" />
                <a href="mailto:info@ceramicamasonry.vn" className="text-sm text-gray-600 hover:text-[#b84a14]">
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-6">{t('resources.title')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#b84a14]">{t('resources.tech_docs')}</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#b84a14]">{t('resources.certifications')}</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#b84a14]">{t('resources.install_guide')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-6">{t('policies.title')}</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-[#b84a14]">{t('policies.privacy')}</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-500 hover:text-[#b84a14]">{t('policies.terms')}</Link></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#b84a14]">{t('policies.warranty')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-6">{t('commitment.title')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#b84a14]">{t('commitment.environment')}</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#b84a14]">{t('commitment.social')}</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-[#b84a14]">{t('commitment.eco_project')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">
            {t('copyright')}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{t('social.follow')}</span>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#b84a14] hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#b84a14] hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#b84a14] hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-[#b84a14] hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
