import { CheckCircle } from "lucide-react";
import { useMemo } from "react";

interface SuccessScreenProps {
  title: string;
  message: string;
  orderNumberLabel: string;
  backHomeText: string;
  continueText: string;
  onBackHome: () => void;
  onContinue: () => void;
}

export default function SuccessScreen({
  title,
  message,
  orderNumberLabel,
  backHomeText,
  continueText,
  onBackHome,
  onContinue,
}: SuccessScreenProps) {
  const orderNumber = useMemo(() => {
    return `#ORD${Date.now().toString().slice(-8)}`;
  }, []);

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 mb-8 text-lg">{message}</p>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">{orderNumberLabel}</p>
            <p className="text-2xl font-bold text-[#b84a14]">
              {orderNumber}
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={onBackHome}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              {backHomeText}
            </button>
            <button
              onClick={onContinue}
              className="bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#b84a14]/30 transition-all duration-300"
            >
              {continueText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
