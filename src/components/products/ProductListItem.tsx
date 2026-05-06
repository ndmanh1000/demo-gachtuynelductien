import { ShoppingCart, Check } from "lucide-react";

interface ProductListItemProps {
  product: {
    id: string;
    name: string;
    desc: string;
    price: number;
    image: string;
    badge?: string;
    specs: string[];
  };
  addedProduct: string | null;
  onAddToCart: (product: any) => void;
  t: (key: string) => string;
}

export default function ProductListItem({ product, addedProduct, onAddToCart, t }: ProductListItemProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#b84a14]/30 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        <div className="relative w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
          {product.badge && (
            <div className="absolute top-2 left-2 z-10">
              <span className="bg-gradient-to-r from-[#b84a14] to-[#d65a1a] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {product.badge}
              </span>
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#b84a14] transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.specs.map((spec, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-md"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div>
              <p className="text-xs text-gray-500 mb-1">{t("price")}</p>
              <p className="text-2xl font-bold text-[#b84a14]">
                {product.price.toLocaleString("vi-VN")}đ
              </p>
            </div>
            <button
              onClick={() => onAddToCart(product)}
              disabled={addedProduct === product.id}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                addedProduct === product.id
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white hover:shadow-lg hover:shadow-[#b84a14]/30 hover:scale-105"
              }`}
            >
              {addedProduct === product.id ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>{t("added")}</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  <span>{t("add")}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
