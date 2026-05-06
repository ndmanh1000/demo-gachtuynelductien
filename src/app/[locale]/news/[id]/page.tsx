"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Link } from "@/i18n/routing";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  featured: boolean;
  date: string;
  author: string;
}

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const t = useTranslations("News");
  const tAdmin = useTranslations("Admin");
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
      fetchArticle(resolvedParams.id);
    });
  }, [params]);

  const fetchArticle = async (articleId: string) => {
    try {
      const response = await fetch(`/api/news/${articleId}`);
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
      }
    } catch (error) {
      console.error("Failed to fetch article:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b84a14]"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy bài viết</h1>
          <Link
            href="/news"
            className="text-[#b84a14] hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại trang tin tức
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-[#b84a14] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("previous")}
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-96 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#b84a14] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {tAdmin(article.category)}
                </span>
                {article.featured && (
                  <span className="bg-yellow-500 px-3 py-1 rounded-full text-sm font-semibold">
                    {tAdmin("featured")}
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString("vi-VN")}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-[#b84a14] pl-6 italic">
              {article.excerpt}
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {article.content}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-[#b84a14] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a14010] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("previous")}
          </Link>
        </div>
      </div>
    </div>
  );
}
