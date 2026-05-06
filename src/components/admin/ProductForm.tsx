"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ImageUpload from "./ImageUpload";
import { Save, X } from "lucide-react";

interface ProductFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export default function ProductForm({
  initialData,
  onSubmit,
  onCancel,
}: ProductFormProps) {
  const t = useTranslations("Admin");
  const [formData, setFormData] = useState({
    id: initialData?.id || "",
    name: initialData?.name || "",
    desc: initialData?.desc || "",
    price: initialData?.price || 0,
    image: initialData?.image || "",
    category: initialData?.category || "standard",
    badge: initialData?.badge || "",
    specs: initialData?.specs || ["", "", ""],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleSpecChange = (index: number, value: string) => {
    const newSpecs = [...formData.specs];
    newSpecs[index] = value;
    setFormData({ ...formData, specs: newSpecs });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("productId")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
          placeholder="solid_brick"
          disabled={!!initialData}
        />
        <p className="text-xs text-gray-500 mt-1">
          {t("productIdHint") || "Mã định danh duy nhất, không có dấu cách"}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("productName")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
          placeholder="Gạch đặc"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("productDesc")} <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent resize-none"
          placeholder="Chịu lực siêu cao, hoàn hảo cho tường chịu lực"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("price")} <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          required
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: Number(e.target.value) })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
          placeholder="3500"
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
          <option value="standard">{t("standard")}</option>
          <option value="decorative">{t("decorative")}</option>
          <option value="special">{t("special")}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("badge")}
        </label>
        <input
          type="text"
          value={formData.badge}
          onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent"
          placeholder="HOT, NEW"
        />
      </div>

      <ImageUpload
        label={t("productImage")}
        value={formData.image}
        onChange={(url) => setFormData({ ...formData, image: url })}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t("specs")}
        </label>
        {formData.specs.map((spec: string, index: number) => (
          <input
            key={index}
            type="text"
            value={spec}
            onChange={(e) => handleSpecChange(index, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent mb-2"
            placeholder={`${t("spec")} ${index + 1}`}
          />
        ))}
      </div>

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
