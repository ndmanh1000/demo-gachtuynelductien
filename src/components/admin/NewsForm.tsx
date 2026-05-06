"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ImageUpload from "./ImageUpload";
import { Save, X } from "lucide-react";

interface NewsFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export default function NewsForm({
  initialData,
  onSubmit,
  onCancel,
}: NewsFormProps) {
  const t = useTranslations("Admin");
  const [formData, setFormData] = useState({
    id: initialData?.id || "",
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    category: initialData?.category || "company",
    image: initialData?.image || "",
    featured: initialData?.featured || false,
    date: initialData?.date || new Date().toISOString().split("T")[0],
    author: initialData?.author || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("articleId")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
          placeholder="sustainable-production"
          disabled={!!initialData}
        />
        <p className="text-xs text-gray-500 mt-1">
          {t("articleIdHint") || "Mã định danh duy nhất, dùng dấu gạch ngang"}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("articleTitle")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
          placeholder="Xu hướng sử dụng gạch nung trong kiến trúc bền vững"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("articleExcerpt")} <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent resize-none"
          placeholder="Mô tả ngắn gọn về bài viết..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("content")} <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={12}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent resize-none"
          placeholder="Nội dung đầy đủ của bài viết..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("category")} <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
        >
          <option value="sustainability">{t("sustainability")}</option>
          <option value="company">{t("company")}</option>
          <option value="technology">{t("technology")}</option>
          <option value="awards">{t("awards")}</option>
          <option value="community">{t("community")}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("author")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
          placeholder="Nguyễn Văn An"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("date")} <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="featured"
          checked={formData.featured}
          onChange={(e) =>
            setFormData({ ...formData, featured: e.target.checked })
          }
          className="w-4 h-4 text-[#b84a14] border-gray-300 rounded focus:ring-[#b84a14]"
        />
        <label htmlFor="featured" className="text-sm font-medium text-gray-700">
          {t("featured")}
        </label>
      </div>

      <ImageUpload
        label={t("articleImage")}
        value={formData.image}
        onChange={(url) => setFormData({ ...formData, image: url })}
      />

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-[#b84a14] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a14010] transition-colors flex items-center justify-center gap-2"
        >
          <Save className="w-5 h-5" />
          {t("save")}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <X className="w-5 h-5" />
          {t("cancel")}
        </button>
      </div>
    </form>
  );
}
