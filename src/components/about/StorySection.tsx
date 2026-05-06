interface StorySectionProps {
  subtitle: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

export default function StorySection({ subtitle, title, paragraph1, paragraph2, paragraph3 }: StorySectionProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#b84a14]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-widest text-[#b84a14] uppercase bg-[#b84a14]/10 px-4 py-2 rounded-full">
                {subtitle}
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {title}
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p className="relative pl-6 border-l-4 border-[#b84a14]">
                {paragraph1}
              </p>
              <p>{paragraph2}</p>
              <p>{paragraph3}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-3 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-600">Founded</p>
                <p className="text-xl font-bold text-[#b84a14]">1998</p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-3 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-600">Headquarters</p>
                <p className="text-xl font-bold text-gray-900">Vietnam</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/project_1_1778002255653.png"
                  alt="Our Story"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-full h-full bg-gradient-to-br from-[#b84a14] to-[#d65a1a] rounded-3xl -z-10 opacity-20"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#b84a14] to-[#d65a1a] rounded-3xl -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
