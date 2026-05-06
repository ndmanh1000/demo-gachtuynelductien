"use client";

import { useTranslations } from "next-intl";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";
import { Package, Newspaper, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const t = useTranslations("Admin");
  const [stats, setStats] = useState({
    products: 0,
    news: 0,
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/products").then((r) => r.json()),
      fetch("/api/news").then((r) => r.json()),
    ]).then(([products, news]) => {
      setStats({
        products: products.length,
        news: news.length,
      });
    });
  }, []);

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t("dashboard")}
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#b84a14]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{t("totalProducts")}</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.products}</p>
                </div>
                <div className="w-12 h-12 bg-[#b84a14]/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#b84a14]" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{t("totalNews")}</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.news}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{t("status")}</p>
                  <p className="text-3xl font-bold text-gray-900">{t("active")}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
