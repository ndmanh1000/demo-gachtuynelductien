import { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative text-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b84a14]/5 to-[#d65a1a]/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>

              <div className="relative p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#b84a14] to-[#d65a1a] rounded-2xl mb-6 group-hover:shadow-2xl group-hover:shadow-[#b84a14]/40 transition-all duration-500 group-hover:rotate-6">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-5xl font-bold bg-gradient-to-br from-[#b84a14] to-[#d65a1a] bg-clip-text text-transparent mb-3">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
