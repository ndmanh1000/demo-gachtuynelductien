import { LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

interface ValuesSectionProps {
  subtitle: string;
  title: string;
  description: string;
  values: Value[];
}

export default function ValuesSection({ subtitle, title, description, values }: ValuesSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-[#b84a14] uppercase bg-[#b84a14]/10 px-4 py-2 rounded-full">
              {subtitle}
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>

              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
