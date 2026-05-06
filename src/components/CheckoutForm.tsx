"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "@/i18n/routing";
import EmptyCart from "./checkout/EmptyCart";
import SuccessScreen from "./checkout/SuccessScreen";
import PersonalInfoForm from "./checkout/PersonalInfoForm";
import DeliveryAddressForm from "./checkout/DeliveryAddressForm";
import PaymentMethodForm from "./checkout/PaymentMethodForm";
import OrderSummary from "./checkout/OrderSummary";

export default function CheckoutForm() {
  const t = useTranslations("Checkout");
  const { items, totalPrice, clearCart, removeFromCart } = useCart();
  const router = useRouter();
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (validateForm()) {
      setTimeout(() => {
        setStep("success");
        clearCart();
      }, 1000);
    }
  };

  if (items.length === 0 && step === "form") {
    return (
      <EmptyCart
        title={t("emptyCart")}
        description={t("emptyCartDesc")}
        buttonText={t("continueShopping")}
        onContinueShopping={() => router.push("/products")}
      />
    );
  }

  if (step === "success") {
    return (
      <SuccessScreen
        title={t("success.title")}
        message={t("success.message")}
        orderNumberLabel={t("success.orderNumber")}
        backHomeText={t("success.backHome")}
        continueText={t("success.continue")}
        onBackHome={() => router.push("/")}
        onContinue={() => router.push("/products")}
      />
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("title")}</h1>
          <p className="text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <PersonalInfoForm
                formData={formData}
                errors={errors}
                onChange={handleChange}
                t={t}
              />

              <DeliveryAddressForm
                formData={formData}
                errors={errors}
                onChange={handleChange}
                t={t}
              />

              <PaymentMethodForm
                paymentMethod={formData.paymentMethod}
                onChange={handleChange}
                t={t}
              />

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("notes")}
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b84a14] focus:border-transparent transition-all resize-none"
                  placeholder={t("notesPlaceholder")}
                />
              </div>
            </form>
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              items={items}
              totalPrice={totalPrice}
              onRemoveItem={removeFromCart}
              onPlaceOrder={() => handleSubmit()}
              t={t}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
