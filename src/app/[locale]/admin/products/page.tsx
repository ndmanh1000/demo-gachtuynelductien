"use client";

import { useTranslations } from "next-intl";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { Plus, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function AdminProductsPage() {
  const t = useTranslations("Admin");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t("confirmDelete"))) return;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchProducts();
      } else {
        alert(t("deleteError"));
      }
    } catch (error) {
      alert(t("deleteError"));
    }
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {t("products")}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {t("showing") || "Hiển thị"} {startIndex + 1}-{Math.min(endIndex, products.length)} {t("of") || "trong số"} {products.length} {t("products").toLowerCase()}
              </p>
            </div>
            <Link
              href="/admin/products/new"
              className="bg-[#b84a14] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a14010] transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              {t("addProduct")}
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b84a14]"></div>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t("image")}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        ID
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t("productName") || "Tên"}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t("price")}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t("category")}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        {t("badge")}
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                        {t("actions")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentProducts.map((product: any) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <img
                            src={product.image}
                            alt={product.id}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {product.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                          {product.name || "-"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {product.price.toLocaleString()}đ
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {product.badge || "-"}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Link
                              href={`/admin/products/${product.id}/edit`}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit className="w-5 h-5" />
                            </Link>
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {totalPages > 1 && (
                <div className="mt-6 flex justify-center items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#b84a14] hover:text-[#b84a14]"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {t("previous") || "Trước"}
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
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#b84a14] hover:text-[#b84a14]"
                    }`}
                  >
                    {t("next") || "Tiếp"}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
