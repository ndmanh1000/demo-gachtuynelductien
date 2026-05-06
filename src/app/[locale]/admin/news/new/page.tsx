"use client";

import { useTranslations } from "next-intl";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";
import NewsForm from "@/components/admin/NewsForm";
import { useRouter } from "@/i18n/routing";

export default function NewNewsPage() {
  const t = useTranslations("Admin");
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/admin/news");
      } else {
        alert(t("saveError"));
      }
    } catch (error) {
      alert(t("saveError"));
    }
  };

  const handleCancel = () => {
    router.push("/admin/news");
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t("addNews")}
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <NewsForm onSubmit={handleSubmit} onCancel={handleCancel} />
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
