"use client";

import { useTranslations } from "next-intl";
import {
  Handshake,
  Globe2,
  Award,
  TrendingUp,
  Shield,
  Users,
  Star,
} from "lucide-react";
import HeroSection from "./about/HeroSection";
import StatsSection from "./about/StatsSection";
import PartnersGrid from "./partners/PartnersGrid";
import BenefitsSection from "./partners/BenefitsSection";
import TestimonialsSection from "./partners/TestimonialsSection";
import PartnersCTASection from "./partners/PartnersCTASection";
import { partners, testimonials } from "@/data/partners";

export default function PartnersContent() {
  const t = useTranslations("Partners");

  const stats = [
    { icon: Handshake, value: "100+", label: t("stats.partners") },
    { icon: Globe2, value: "20+", label: t("stats.countries") },
    { icon: Award, value: "15+", label: t("stats.years") },
    { icon: TrendingUp, value: "500+", label: t("stats.projects") },
  ];

  const benefits = [
    {
      icon: Shield,
      title: t("benefits.quality.title"),
      desc: t("benefits.quality.desc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: t("benefits.pricing.title"),
      desc: t("benefits.pricing.desc"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: t("benefits.support.title"),
      desc: t("benefits.support.desc"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Star,
      title: t("benefits.service.title"),
      desc: t("benefits.service.desc"),
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <>
      <HeroSection
        badge={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <StatsSection stats={stats} />

      <PartnersGrid
        partners={partners}
        sectionTitle={t("section.title")}
        sectionSubtitle={t("section.trusted")}
        sectionDesc={t("section.desc")}
      />

      <BenefitsSection
        benefits={benefits}
        subtitle={t("benefits.subtitle")}
        title={t("benefits.title")}
        description={t("benefits.desc")}
      />

      <TestimonialsSection
        testimonials={testimonials}
        subtitle={t("testimonials.subtitle")}
        title={t("testimonials.title")}
      />

      <PartnersCTASection
        badge={t("cta.badge")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        contactText={t("cta.contact")}
        productsText={t("cta.products")}
      />
    </>
  );
}
