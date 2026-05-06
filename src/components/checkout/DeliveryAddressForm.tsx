import { MapPin } from "lucide-react";

interface DeliveryAddressFormProps {
  formData: {
    address: string;
    city: string;
    district: string;
    ward: string;
  };
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  t: (key: string) => string;
}

export default function DeliveryAddressForm({ formData, errors, onChange, t }: DeliveryAddressFormProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-[#b84a14]" />
        {t("deliveryAddress")}
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("address")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={onChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent transition-all text-base ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={t("addressPlaceholder")}
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("city")} <span className="text-red-500">*</span>
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={onChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent transition-all text-base ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">{t("selectCity")}</option>
              <option value="hcm">TP. Hồ Chí Minh</option>
              <option value="hanoi">Hà Nội</option>
              <option value="danang">Đà Nẵng</option>
              <option value="binhduong">Bình Dương</option>
              <option value="dongnai">Đồng Nai</option>
            </select>
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("district")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={onChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent transition-all text-base ${
                errors.district ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={t("districtPlaceholder")}
            />
            {errors.district && (
              <p className="text-red-500 text-xs mt-1">{errors.district}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("ward")}
            </label>
            <input
              type="text"
              name="ward"
              value={formData.ward}
              onChange={onChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent transition-all text-base"
              placeholder={t("wardPlaceholder")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
