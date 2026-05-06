interface Milestone {
  year: string;
  title: string;
  desc: string;
}

interface TimelineSectionProps {
  subtitle: string;
  title: string;
  milestones: Milestone[];
}

export default function TimelineSection({ subtitle, title, milestones }: TimelineSectionProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#b84a14]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d65a1a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-[#b84a14] uppercase bg-[#b84a14]/10 px-4 py-2 rounded-full">
              {subtitle}
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#b84a14] via-[#c55518] to-[#d65a1a] rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#b84a14]/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#b84a14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative">
                      <span className="inline-block bg-gradient-to-r from-[#b84a14] to-[#d65a1a] text-white text-lg font-bold px-6 py-2 rounded-full mb-4 shadow-lg">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#b84a14] to-[#d65a1a] rounded-full border-4 border-white shadow-xl"></div>
                  <div className="absolute w-16 h-16 bg-[#b84a14]/20 rounded-full animate-ping"></div>
                </div>

                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
