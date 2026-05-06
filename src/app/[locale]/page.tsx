import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import News from "@/components/News";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />

      <FeaturedProducts />
      <Team />
      <Projects />

      <News />
      <CTA />
      <Footer />
    </main>
  );
}
