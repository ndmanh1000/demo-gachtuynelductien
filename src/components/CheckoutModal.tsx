"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { X, Package, CheckCircle } from "lucide-react";
import PersonalInfoForm from "./checkout/PersonalInfoForm";
import DeliveryAddressForm from "./checkout/DeliveryAddressForm";
import PaymentMethodForm from "./checkout/PaymentMethodForm";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalPrice: number;
  totalItems: number;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  totalPrice,
  totalItems,
}: CheckoutModalProps) {
  const t = useTranslations("Checkout");
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    notes: "",
    paymentMethod: "cod",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const orderNumber = useMemo(() => {
    return `#ORD${Date.now().toString().slice(-8)}`;
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = t("errors.fullName");
    if (!formData.phone.trim()) newErrors.phone = t("errors.phone");
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = t("errors.phoneInvalid");
    }
    if (!formData.email.trim()) newErrors.email = t("errors.email");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errors.emailInvalid");
    }
    if (!formData.address.trim()) newErrors.address = t("errors.address");
    if (!formData.city.trim()) newErrors.city = t("errors.city");
    if (!formData.district.trim()) newErrors.district = t("errors.district");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setTimeout(() => {
        setStep("success");
      }, 1000);
    }
  };

  const handleClose = () => {
    setStep("form");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      district: "",
      ward: "",
      notes: "",
      paymentMethod: "cod",
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] transition-opacity duration-300"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-16 overflow-y-auto">
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col animate-scale-in overflow-hidden mb-8"
          onClick={(e) => e.stopPropagation()}
        >
          {step === "form" ? (
            <>
              <div className="bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white px-6 py-5 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{t("title")}</h2>
                    <p className="text-sm text-white/90">
                      {totalItems} {t("items")} -{" "}
                      {totalPrice.toLocaleString("vi-VN")}đ
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex-1 overflow-y-auto p-6 space-y-6"
              >
                <div>
                  <PersonalInfoForm
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    t={t}
                  />
                </div>

                <div>
                  <DeliveryAddressForm
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    t={t}
                  />
                </div>

                <div>
                  <PaymentMethodForm
                    paymentMethod={formData.paymentMethod}
                    onChange={handleChange}
                    t={t}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("notes")}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent transition-all resize-none"
                    placeholder={t("notesPlaceholder")}
                  />
                </div>
              </form>

              <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    {t("total")}:
                  </span>
                  <span className="text-2xl font-bold text-[#b84a14]">
                    {totalPrice.toLocaleString("vi-VN")}đ
                  </span>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white py-3.5 rounded-xl font-bold hover:shadow-xl hover:shadow-[#b84a14]/30 transition-all duration-300"
                >
                  {t("placeOrder")}
                </button>
              </div>
            </>
          ) : (
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("success.title")}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                {t("success.message")}
              </p>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">
                  {t("success.orderNumber")}
                </p>
                <p className="text-2xl font-bold text-[#b84a14]">
                  {orderNumber}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#b84a14]/30 transition-all duration-300"
              >
                {t("success.continue")}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
