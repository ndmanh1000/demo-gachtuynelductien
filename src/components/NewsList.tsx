"use client";

import { useTranslations } from "next-intl";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";

export default function NewsList() {
  const t = useTranslations("News");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNewsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch news:", error);
        setLoading(false);
      });
  }, []);

  const newsArticles = newsData.map((article: any) => ({
    ...article,
    title: article.title || t(`${article.id}.title`),
    excerpt: article.excerpt || t(`${article.id}.excerpt`),
    author: article.author,
  }));

  const filteredNews = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      category === "all" || article.category === category;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = newsArticles.find((a) => a.featured);
  const regularArticles = filteredNews.filter((a) => !a.featured);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t("search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "all"
                  ? "bg-[#b84a14] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("all")}
            </button>
            <button
              onClick={() => setCategory("sustainability")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "sustainability"
                  ? "bg-[#b84a14] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("sustainability")}
            </button>
            <button
              onClick={() => setCategory("company")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "company"
                  ? "bg-[#b84a14] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("company")}
            </button>
            <button
              onClick={() => setCategory("technology")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "technology"
                  ? "bg-[#b84a14] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("technology")}
            </button>
            <button
              onClick={() => setCategory("awards")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "awards"
                  ? "bg-[#b84a14] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("awards")}
            </button>
            <button
              onClick={() => setCategory("community")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "community"
                  ? "bg-[#b84a14] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("community")}
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b84a14]"></div>
          </div>
        ) : (
          <>
            {featuredArticle && category === "all" && !searchTerm && (
          <div className="mb-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#b84a14] text-white text-xs font-bold px-3 py-1 rounded">
                  {t("featured")}
                </span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredArticle.date).toLocaleDateString("vi-VN")}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href={`/news/${featuredArticle.id}`}
                  className="inline-flex items-center text-[#b84a14] hover:text-[#a14010] font-semibold"
                >
                  {t("read_more")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-50">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString("vi-VN")}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#b84a14] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  href={`/news/${article.id}`}
                  className="inline-flex items-center text-sm font-medium text-[#b84a14] hover:text-[#a14010]"
                >
                  {t("read_more")}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t("no_results")}</p>
          </div>
        )}
      </>
    )}
      </div>
    </section>
  );
}
