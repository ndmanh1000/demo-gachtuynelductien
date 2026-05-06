import { CreditCard } from "lucide-react";

interface PaymentMethodFormProps {
  paymentMethod: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  t: (key: string) => string;
}

export default function PaymentMethodForm({ paymentMethod, onChange, t }: PaymentMethodFormProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <CreditCard className="w-6 h-6 text-[#b84a14]" />
        {t("paymentMethod")}
      </h3>
      <div className="space-y-3">
        <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#b84a14] transition-colors">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={onChange}
            className="w-5 h-5 text-[#b84a14] focus:ring-[#b84a14]"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{t("cod")}</p>
            <p className="text-sm text-gray-500">{t("codDesc")}</p>
          </div>
        </label>

        <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#b84a14] transition-colors">
          <input
            type="radio"
            name="paymentMethod"
            value="bank"
            checked={paymentMethod === "bank"}
            onChange={onChange}
            className="w-5 h-5 text-[#b84a14] focus:ring-[#b84a14]"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{t("bank")}</p>
            <p className="text-sm text-gray-500">{t("bankDesc")}</p>
          </div>
        </label>
      </div>
    </div>
  );
}
