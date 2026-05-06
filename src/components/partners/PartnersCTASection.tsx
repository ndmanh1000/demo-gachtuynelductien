import { Handshake } from "lucide-react";

interface PartnersCTASectionProps {
  badge: string;
  title: string;
  subtitle: string;
  contactText: string;
  productsText: string;
}

export default function PartnersCTASection({ badge, title, subtitle, contactText, productsText }: PartnersCTASectionProps) {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#b84a14] via-[#c55518] to-[#a14010] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-6 py-2 rounded-full border border-white/30">
              {badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group bg-white text-[#b84a14] px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              {contactText}
              <Handshake className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="/products"
              className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-[#b84a14] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              {productsText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
