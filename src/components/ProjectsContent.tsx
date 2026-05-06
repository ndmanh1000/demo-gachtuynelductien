"use client";

import { useTranslations } from "next-intl";
import { MapPin, Users, Award, Building2 } from "lucide-react";
import HeroSection from "./about/HeroSection";
import StatsSection from "./about/StatsSection";
import ProjectsGridSection from "./projects/ProjectsGridSection";
import ProjectsCTASection from "./projects/ProjectsCTASection";
import { projects } from "@/data/projects";

export default function ProjectsContent() {
  const t = useTranslations("Projects");

  const stats = [
    { icon: Building2, value: "200+", label: t("stats.completed") },
    { icon: Users, value: "150+", label: t("stats.clients") },
    { icon: Award, value: "30+", label: t("stats.awards") },
    { icon: MapPin, value: "15+", label: t("stats.cities") },
  ];

  return (
    <>
      <HeroSection
        badge={t("subtitle")}
        title={t("title")}
        subtitle={t("desc")}
      />

      <StatsSection stats={stats} />

      <ProjectsGridSection
        projects={projects}
        badge={t("portfolio.badge")}
        title={t("portfolio.title")}
        desc={t("portfolio.desc")}
        viewProjectText={t("viewProject")}
        getLocationText={(location) => t(`locations.${location}`)}
        getProjectTitle={(id) => t(id)}
      />

      <ProjectsCTASection
        badge={t("cta.badge")}
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        contactText={t("cta.contact")}
        productsText={t("cta.products")}
      />
    </>
  );
}
