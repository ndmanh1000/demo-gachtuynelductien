"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useState } from "react";

export default function News() {
  const t = useTranslations("News");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const newsItems = [
    { id: "news1", slug: "sustainable-production" },
    { id: "news2", slug: "new-factory" },
    { id: "news3", slug: "award-winning" },
    { id: "news1", slug: "sustainable-production-2" },
    { id: "news2", slug: "new-factory-2" },
    { id: "news3", slug: "award-winning-2" },
    { id: "news1", slug: "sustainable-production-3" },
    { id: "news2", slug: "new-factory-3" },
    { id: "news3", slug: "award-winning-3" },
  ];

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = newsItems.slice(startIndex, endIndex);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">
              {t("subtitle")}
            </span>
            <h2 className="text-3xl font-bold text-gray-900">{t("title")}</h2>
          </div>
          <Link
            href="/news"
            className="hidden sm:flex items-center text-sm font-medium text-[#b84a14] hover:text-[#a14010]"
          >
            {t("see_all")} <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentNews.map((n, index) => (
            <div
              key={`${n.id}-${index}`}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                <img
                  src="/images/hero_bg_right_1778002084610.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-gray-400 mb-3 block">
                  {t(`${n.id}.date`)}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-[#b84a14] cursor-pointer transition-colors line-clamp-2">
                  {t(`${n.id}.title`)}
                </h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-3">
                  {t(`${n.id}.desc`)}
                </p>
                <Link
                  href={`/news/${n.slug}`}
                  className="inline-flex items-center text-xs font-bold text-[#b84a14] hover:text-[#a14010] uppercase tracking-wider"
                >
                  {t(`${n.id}.read_more`)}{" "}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#b84a14] hover:text-[#b84a14]"
              }`}
            >
              {t("previous") || "Previous"}
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? "bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white shadow-lg"
                      : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#b84a14] hover:text-[#b84a14]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#b84a14] hover:text-[#b84a14]"
              }`}
            >
              {t("next") || "Next"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
