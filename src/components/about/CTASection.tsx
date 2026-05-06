interface CTASectionProps {
  title: string;
  subtitle: string;
  productsText: string;
  contactText: string;
}

export default function CTASection({ title, subtitle, productsText, contactText }: CTASectionProps) {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#b84a14] via-[#c55518] to-[#a14010] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/images/product_bricks_1778002110634.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-6 py-2 rounded-full border border-white/30">
              Let's Work Together
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
              href="/products"
              className="group bg-white text-[#b84a14] px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              {productsText}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="/contact"
              className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-[#b84a14] transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              {contactText}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
