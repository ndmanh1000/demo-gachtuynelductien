import { ShoppingCart, Check } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    desc: string;
    price: number;
    image: string;
    badge?: string;
    specs: string[];
  };
  index: number;
  addedProduct: string | null;
  onAddToCart: (product: any) => void;
  t: (key: string) => string;
}

export default function ProductCard({ product, index, addedProduct, onAddToCart, t }: ProductCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#b84a14]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-gradient-to-r from-[#b84a14] to-[#d65a1a] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              {product.badge}
            </span>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#b84a14] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
          {product.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.slice(0, 2).map((spec, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100">
          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1">{t("price")}</p>
            <p className="text-xl font-bold text-[#b84a14]">
              {product.price.toLocaleString("vi-VN")}đ
            </p>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            disabled={addedProduct === product.id}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              addedProduct === product.id
                ? "bg-green-500 text-white"
                : "bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white hover:shadow-lg hover:shadow-[#b84a14]/30 hover:scale-105"
            }`}
          >
            {addedProduct === product.id ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t("added")}</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>{t("add")}</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl border-2 border-[#b84a14] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
