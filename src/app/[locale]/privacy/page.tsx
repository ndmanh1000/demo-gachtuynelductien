import { useTranslations } from "next-intl";
import { FileText, CheckCircle, AlertCircle, Scale, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const t = useTranslations("Privacy");

  const sections = [
    {
      icon: FileText,
      title: t("intro.title"),
      content: t("intro.content"),
    },
    {
      icon: ShieldCheck,
      title: t("collection.title"),
      content: t("collection.content"),
      list: [
        t("collection.list.personal"),
        t("collection.list.contact"),
        t("collection.list.transaction"),
        t("collection.list.technical"),
      ],
    },
    {
      icon: CheckCircle,
      title: t("usage.title"),
      content: t("usage.content"),
      list: [
        t("usage.list.process"),
        t("usage.list.improve"),
        t("usage.list.communicate"),
        t("usage.list.comply"),
      ],
    },
    {
      icon: Scale,
      title: t("protection.title"),
      content: t("protection.content"),
    },
    {
      icon: AlertCircle,
      title: t("rights.title"),
      content: t("rights.content"),
      list: [
        t("rights.list.access"),
        t("rights.list.correct"),
        t("rights.list.delete"),
        t("rights.list.restrict"),
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <ShieldCheck className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-center text-white/90 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
            <p className="text-sm text-center text-white/70 mt-4">
              {t("lastUpdated")}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#b84a14] to-[#a14010] rounded-xl text-white flex-shrink-0">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
                {section.list && (
                  <ul className="ml-16 space-y-3">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#b84a14] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("contact.title")}
            </h3>
            <p className="text-gray-600 mb-4">{t("contact.content")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:privacy@ceramicamasonry.vn"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#b84a14] to-[#a14010] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                {t("contact.email")}
              </a>
              <a
                href="tel:+842812345678"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#b84a14] border-2 border-[#b84a14] rounded-xl font-semibold hover:bg-[#b84a14] hover:text-white transition-all"
              >
                {t("contact.phone")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
