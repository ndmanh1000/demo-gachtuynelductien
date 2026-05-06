import { Package, Trash2 } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSummaryProps {
  items: CartItem[];
  totalPrice: number;
  onRemoveItem: (id: string) => void;
  onPlaceOrder: () => void;
  t: (key: string) => string;
}

export default function OrderSummary({
  items,
  totalPrice,
  onRemoveItem,
  onPlaceOrder,
  t,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Package className="w-6 h-6 text-[#b84a14]" />
        {t("orderSummary")}
      </h3>

      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 pb-4 border-b border-gray-100"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-gray-900 line-clamp-2">
                {item.name}
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                {item.quantity} x {item.price.toLocaleString("vi-VN")}đ
              </p>
            </div>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">{t("subtotal")}:</span>
          <span className="font-semibold text-gray-900">
            {totalPrice.toLocaleString("vi-VN")}đ
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">{t("shipping")}:</span>
          <span className="font-semibold text-green-600">{t("free")}</span>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold text-gray-900">{t("total")}:</span>
          <span className="text-2xl font-bold text-[#b84a14]">
            {totalPrice.toLocaleString("vi-VN")}đ
          </span>
        </div>
      </div>

      <button
        onClick={onPlaceOrder}
        className="w-full bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-[#b84a14]/30 transition-all duration-300 hover:scale-[1.02]"
      >
        {t("placeOrder")}
      </button>
    </div>
  );
}
