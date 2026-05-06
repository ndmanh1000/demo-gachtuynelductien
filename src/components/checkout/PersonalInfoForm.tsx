import { User } from "lucide-react";

interface PersonalInfoFormProps {
  formData: {
    fullName: string;
    phone: string;
    email: string;
  };
  errors: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  t: (key: string) => string;
}

export default function PersonalInfoForm({ formData, errors, onChange, t }: PersonalInfoFormProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <User className="w-6 h-6 text-[#b84a14]" />
        {t("personalInfo")}
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("fullName")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={onChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent transition-all text-base ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={t("fullNamePlaceholder")}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("phone")} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent transition-all text-base ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="0912 345 678"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("email")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent transition-all text-base ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>
    </div>
  );
}
