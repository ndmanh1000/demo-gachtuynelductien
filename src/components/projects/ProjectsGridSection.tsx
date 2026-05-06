import { MapPin, Calendar, Ruler, Clock } from "lucide-react";

interface Project {
  id: string;
  slug: string;
  img: string;
  location: string;
  year: string;
  area: string;
  duration: string;
  category: string;
}

interface ProjectsGridSectionProps {
  projects: Project[];
  badge: string;
  title: string;
  desc: string;
  viewProjectText: string;
  getLocationText: (location: string) => string;
  getProjectTitle: (id: string) => string;
}

export default function ProjectsGridSection({
  projects,
  badge,
  title,
  desc,
  viewProjectText,
  getLocationText,
  getProjectTitle,
}: ProjectsGridSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-[#b84a14] uppercase bg-[#b84a14]/10 px-4 py-2 rounded-full">
              {badge}
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">{desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#b84a14]/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={getProjectTitle(project.id)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#b84a14] text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {getProjectTitle(project.id)}
                  </h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{getLocationText(project.location)}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-[#b84a14]" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Ruler className="w-4 h-4 text-[#b84a14]" />
                    <span className="text-sm">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 col-span-2">
                    <Clock className="w-4 h-4 text-[#b84a14]" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>

                <a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-[#b84a14] font-semibold hover:text-[#a14010] transition-colors group/link"
                >
                  {viewProjectText}
                  <svg
                    className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
