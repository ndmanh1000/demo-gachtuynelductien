import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { Calendar, MapPin, Users, Award, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProjectDetail projectId={id} />
      <Footer />
    </main>
  );
}

function ProjectDetail({ projectId }: { projectId: string }) {
  const t = useTranslations('ProjectDetail');

  const projectData: Record<string, any> = {
    'luxury-villa': {
      title: t('luxury_villa.title'),
      location: t('luxury_villa.location'),
      date: '2024',
      client: t('luxury_villa.client'),
      area: '500m²',
      description: t('luxury_villa.description'),
      challenge: t('luxury_villa.challenge'),
      solution: t('luxury_villa.solution'),
      result: t('luxury_villa.result'),
      images: [
        '/images/product_bricks_1778002110634.png',
        '/images/product_bricks_1778002110634.png',
        '/images/product_bricks_1778002110634.png',
      ],
    },
    'modern-office': {
      title: t('modern_office.title'),
      location: t('modern_office.location'),
      date: '2023',
      client: t('modern_office.client'),
      area: '1200m²',
      description: t('modern_office.description'),
      challenge: t('modern_office.challenge'),
      solution: t('modern_office.solution'),
      result: t('modern_office.result'),
      images: [
        '/images/product_bricks_1778002110634.png',
        '/images/product_bricks_1778002110634.png',
        '/images/product_bricks_1778002110634.png',
      ],
    },
    'heritage-restoration': {
      title: t('heritage_restoration.title'),
      location: t('heritage_restoration.location'),
      date: '2023',
      client: t('heritage_restoration.client'),
      area: '800m²',
      description: t('heritage_restoration.description'),
      challenge: t('heritage_restoration.challenge'),
      solution: t('heritage_restoration.solution'),
      result: t('heritage_restoration.result'),
      images: [
        '/images/product_bricks_1778002110634.png',
        '/images/product_bricks_1778002110634.png',
        '/images/product_bricks_1778002110634.png',
      ],
    },
  };

  const project = projectData[projectId] || projectData['luxury-villa'];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-[#b84a14] hover:text-[#a14010] mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('back_to_projects')}
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-[#b84a14]" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-3 text-[#b84a14]" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-3 text-[#b84a14]" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-3 text-[#b84a14]" />
                <span>{project.area}</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img
            src={project.images[1]}
            alt={`${project.title} - Image 2`}
            className="w-full aspect-video object-cover rounded-lg shadow-lg"
          />
          <img
            src={project.images[2]}
            alt={`${project.title} - Image 3`}
            className="w-full aspect-video object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('challenge')}
            </h3>
            <p className="text-gray-700">{project.challenge}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('solution')}
            </h3>
            <p className="text-gray-700">{project.solution}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('result')}
            </h3>
            <p className="text-gray-700">{project.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
