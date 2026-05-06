"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Phone, Globe, Menu, X } from "lucide-react";
import CartButton from "./CartButton";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => {
                if (window.location.pathname === '/' || window.location.pathname.match(/^\/(en|vi)\/?$/)) {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className="text-2xl font-bold text-[#b84a14]">
                Ceramica
              </span>
              <span className="text-2xl font-bold text-gray-800 ml-2">
                Masonry
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-[#b84a14] transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 hover:text-[#b84a14] transition-colors"
            >
              {t("products")}
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-gray-700 hover:text-[#b84a14] transition-colors"
            >
              {t("projects")}
            </Link>

            <Link
              href="/partners"
              className="text-sm font-medium text-gray-700 hover:text-[#b84a14] transition-colors"
            >
              {t("partners")}
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium text-gray-700 hover:text-[#b84a14] transition-colors"
            >
              {t("news")}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-[#b84a14] transition-colors"
            >
              {t("contact")}
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <CartButton />
            <div className="hidden xl:flex items-center text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4 mr-2" />
              +84 123 456 789
            </div>
            <div className="hidden lg:flex items-center space-x-2 border-l border-gray-200 pl-3">
              <Globe className="w-4 h-4 text-gray-500" />
              <Link
                href={pathname}
                locale="en"
                className={`text-sm font-medium ${
                  locale === "en"
                    ? "text-[#b84a14]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                EN
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={pathname}
                locale="vi"
                className={`text-sm font-medium ${
                  locale === "vi"
                    ? "text-[#b84a14]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                VI
              </Link>
            </div>

            {/* Mobile & Tablet menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/about"
                className="text-base font-medium text-gray-700 hover:text-[#b84a14] transition-colors py-2 px-2 rounded hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="/products"
                className="text-base font-medium text-gray-700 hover:text-[#b84a14] transition-colors py-2 px-2 rounded hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("products")}
              </Link>
              <Link
                href="/projects"
                className="text-base font-medium text-gray-700 hover:text-[#b84a14] transition-colors py-2 px-2 rounded hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("projects")}
              </Link>

              <Link
                href="/partners"
                className="text-base font-medium text-gray-700 hover:text-[#b84a14] transition-colors py-2 px-2 rounded hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("partners")}
              </Link>
              <Link
                href="/news"
                className="text-base font-medium text-gray-700 hover:text-[#b84a14] transition-colors py-2 px-2 rounded hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("news")}
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-700 hover:text-[#b84a14] transition-colors py-2 px-2 rounded hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </Link>

              {/* Language switcher for mobile/tablet */}
              <div className="flex items-center space-x-4 pt-3 mt-3 border-t border-gray-100">
                <Globe className="w-4 h-4 text-gray-500" />
                <Link
                  href={pathname}
                  locale="en"
                  className={`text-sm font-medium ${
                    locale === "en"
                      ? "text-[#b84a14]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EN
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href={pathname}
                  locale="vi"
                  className={`text-sm font-medium ${
                    locale === "vi"
                      ? "text-[#b84a14]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  VI
                </Link>
              </div>

              {/* Contact button for mobile/tablet */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
