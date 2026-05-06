interface HeroSectionProps {
  badge: string;
  title: string;
  subtitle: string;
}

export default function HeroSection({ badge, title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#b84a14] via-[#c55518] to-[#a14010] text-white py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/product_bricks_1778002110634.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-6 py-2 rounded-full border border-white/30">
              {badge}
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            {title}
          </h1>
          <p className="text-2xl text-white/95 leading-relaxed font-light">
            {subtitle}
          </p>
          <div className="flex gap-4 mt-10">
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-12 h-1 bg-white/50 rounded-full"></div>
              <span className="text-sm font-medium">25+ Years Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
