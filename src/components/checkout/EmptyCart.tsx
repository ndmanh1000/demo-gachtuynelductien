import { ShoppingBag } from "lucide-react";

interface EmptyCartProps {
  title: string;
  description: string;
  buttonText: string;
  onContinueShopping: () => void;
}

export default function EmptyCart({ title, description, buttonText, onContinueShopping }: EmptyCartProps) {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-6">
          <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-8">{description}</p>
        <button
          onClick={onContinueShopping}
          className="bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
