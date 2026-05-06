"use client";

import { useTranslations } from "next-intl";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";
import ProductForm from "@/components/admin/ProductForm";
import { useRouter } from "@/i18n/routing";

export default function NewProductPage() {
  const t = useTranslations("Admin");
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/admin/products");
      } else {
        alert(t("saveError"));
      }
    } catch (error) {
      alert(t("saveError"));
    }
  };

  const handleCancel = () => {
    router.push("/admin/products");
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t("addProduct")}
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <ProductForm onSubmit={handleSubmit} onCancel={handleCancel} />
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
