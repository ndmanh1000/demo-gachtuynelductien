import { useTranslations } from "next-intl";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="relative bg-gradient-to-br from-[#b84a14] via-[#a14010] to-[#8a3609] text-white overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                {t("badge")}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-[#b84a14]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#b84a14] to-[#a14010] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("info.address.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("info.address.content")}
              </p>
            </div>

            <div className="group bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-[#b84a14]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#b84a14] to-[#a14010] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("info.phone.title")}
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+842812345678"
                  className="block text-gray-600 hover:text-[#b84a14] transition-colors font-medium"
                >
                  +84 28 1234 5678
                </a>
                <a
                  href="tel:+84909000000"
                  className="block text-gray-600 hover:text-[#b84a14] transition-colors font-medium"
                >
                  +84 909 000 000
                </a>
              </div>
            </div>

            <div className="group bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-[#b84a14]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#b84a14] to-[#a14010] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("info.email.title")}
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:info@ceramicamasonry.vn"
                  className="block text-gray-600 hover:text-[#b84a14] transition-colors font-medium"
                >
                  info@ceramicamasonry.vn
                </a>
                <a
                  href="mailto:sales@ceramicamasonry.vn"
                  className="block text-gray-600 hover:text-[#b84a14] transition-colors font-medium"
                >
                  sales@ceramicamasonry.vn
                </a>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#b84a14] to-[#a14010] rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {t("form.title")}
                </h3>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("form.name")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b84a14] focus:border-transparent focus:bg-white transition-all text-gray-900"
                    placeholder={t("form.namePlaceholder")}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("form.email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b84a14] focus:border-transparent focus:bg-white transition-all text-gray-900"
                      placeholder={t("form.emailPlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("form.phone")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b84a14] focus:border-transparent focus:bg-white transition-all text-gray-900"
                      placeholder={t("form.phonePlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("form.subject")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b84a14] focus:border-transparent focus:bg-white transition-all text-gray-900"
                    placeholder={t("form.subjectPlaceholder")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("form.message")} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#b84a14] focus:border-transparent focus:bg-white transition-all resize-none text-gray-900"
                    placeholder={t("form.messagePlaceholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#b84a14]/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  {t("form.submit")}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#b84a14] to-[#a14010] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("hours.title")}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">
                      {t("hours.weekdays")}
                    </span>
                    <span className="text-[#b84a14] font-bold">
                      8:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">
                      {t("hours.saturday")}
                    </span>
                    <span className="text-[#b84a14] font-bold">
                      8:00 - 12:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="font-semibold text-gray-900">
                      {t("hours.sunday")}
                    </span>
                    <span className="text-red-600 font-bold">
                      {t("hours.closed")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#b84a14] to-[#a14010] rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("map.title")}
                  </h3>
                </div>
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6305953974!2d106.69530731533395!3d10.762622192324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2sDistrict%207%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
