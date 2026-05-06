"use client";

import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

export default function CartButton() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Cart");
  const router = useRouter();

  const handleCheckout = () => {
    setIsOpen(false);
    router.push("/checkout");
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
        aria-label="Shopping cart"
      >
        <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-[#b84a14] transition-colors" />
        {totalItems > 0 && (
          <>
            <span className="absolute -top-1 -right-1 bg-gradient-to-br from-[#b84a14] to-[#d65a1a] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-bounce">
              {totalItems}
            </span>
          </>
        )}
      </button>

      {/* Cart Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container - Right Side */}
          <div className="fixed right-0 top-0 bottom-0 z-[101] flex items-start justify-end p-4 pointer-events-none">
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[calc(100vh-2rem)] flex flex-col pointer-events-auto animate-slide-in-right overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white px-6 py-5 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{t("title")}</h2>
                      <p className="text-sm text-white/90">
                        {totalItems} {totalItems === 1 ? t("item") : t("items")}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Cart Items - Scrollable */}
              <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                        <ShoppingCart className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#b84a14] rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">0</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t("empty")}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      {t("empty_desc")}
                    </p>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        router.push("/products");
                      }}
                      className="bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      {t("continue_shopping")}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex gap-3">
                          {/* Product Image */}
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 pr-2">
                                {item.name}
                              </h3>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 hover:bg-red-50 text-red-500 rounded-lg transition-colors flex-shrink-0"
                                title={t("remove")}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <p className="text-[#b84a14] font-bold mb-3">
                              {item.price.toLocaleString("vi-VN")}đ
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="p-1 hover:bg-white rounded-md transition-colors"
                                >
                                  <Minus className="w-3.5 h-3.5 text-gray-600" />
                                </button>
                                <span className="w-8 text-center font-semibold text-sm text-gray-900">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="p-1 hover:bg-white rounded-md transition-colors"
                                >
                                  <Plus className="w-3.5 h-3.5 text-gray-600" />
                                </button>
                              </div>

                              <div className="text-right">
                                <p className="text-xs text-gray-500">{t("subtotal")}</p>
                                <p className="font-bold text-sm text-gray-900">
                                  {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Clear Cart Button */}
                    {items.length > 1 && (
                      <button
                        onClick={clearCart}
                        className="w-full text-sm text-red-600 hover:text-red-700 font-medium py-2.5 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        {t("clear_cart")}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Footer - Checkout */}
              {items.length > 0 && (
                <div className="border-t border-gray-200 bg-white px-6 py-5 space-y-4 flex-shrink-0">
                  {/* Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t("items_count")}:</span>
                      <span className="font-semibold text-gray-900">{totalItems}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t("shipping")}:</span>
                      <span className="font-semibold text-green-600">{t("free")}</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-2"></div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-base font-bold text-gray-900">{t("total")}:</span>
                      <div className="text-right">
                        <p className="text-xl font-bold bg-gradient-to-r from-[#b84a14] to-[#d65a1a] bg-clip-text text-transparent">
                          {totalPrice.toLocaleString("vi-VN")}đ
                        </p>
                        <p className="text-xs text-gray-500">{t("vat_included")}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white py-3.5 rounded-xl font-bold hover:shadow-xl hover:shadow-[#b84a14]/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
                    >
                      {t("checkout")}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        router.push("/products");
                      }}
                      className="w-full border-2 border-gray-200 text-gray-700 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 text-sm"
                    >
                      {t("continue_shopping")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
