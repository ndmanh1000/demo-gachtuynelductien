"use client";

import { useTranslations } from "next-intl";
import {
  Award,
  Users,
  Target,
  Heart,
  TrendingUp,
  Globe2,
  Factory,
  Leaf,
} from "lucide-react";
import HeroSection from "./about/HeroSection";
import TeamSection from "./about/TeamSection";
import StatsSection from "./about/StatsSection";
import StorySection from "./about/StorySection";
import ValuesSection from "./about/ValuesSection";
import TimelineSection from "./about/TimelineSection";
import CTASection from "./about/CTASection";
import { teamMembers } from "@/data/team";

export default function AboutContent() {
  const t = useTranslations("About");

  const stats = [
    { icon: Factory, value: "25+", label: t("stats.years") },
    { icon: Users, value: "500+", label: t("stats.employees") },
    { icon: Globe2, value: "30+", label: t("stats.countries") },
    { icon: Award, value: "50+", label: t("stats.awards") },
  ];

  const values = [
    {
      icon: Target,
      title: t("values.quality.title"),
      desc: t("values.quality.desc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: t("values.customer.title"),
      desc: t("values.customer.desc"),
      color: "from-red-500 to-red-600",
    },
    {
      icon: Leaf,
      title: t("values.sustainability.title"),
      desc: t("values.sustainability.desc"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      title: t("values.innovation.title"),
      desc: t("values.innovation.desc"),
      color: "from-purple-500 to-purple-600",
    },
  ];

  const milestones = [
    {
      year: "1998",
      title: t("milestones.founded.title"),
      desc: t("milestones.founded.desc"),
    },
    {
      year: "2005",
      title: t("milestones.expansion.title"),
      desc: t("milestones.expansion.desc"),
    },
    {
      year: "2012",
      title: t("milestones.export.title"),
      desc: t("milestones.export.desc"),
    },
    {
      year: "2018",
      title: t("milestones.technology.title"),
      desc: t("milestones.technology.desc"),
    },
    {
      year: "2024",
      title: t("milestones.leader.title"),
      desc: t("milestones.leader.desc"),
    },
  ];

  return (
    <>
      <HeroSection
        badge={t("hero.badge") || "Established 1998"}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <TeamSection teamMembers={teamMembers} />

      <StatsSection stats={stats} />

      <StorySection
        subtitle={t("story.subtitle")}
        title={t("story.title")}
        paragraph1={t("story.paragraph1")}
        paragraph2={t("story.paragraph2")}
        paragraph3={t("story.paragraph3")}
      />

      <ValuesSection
        subtitle={t("values.subtitle")}
        title={t("values.title")}
        description={t("values.description")}
        values={values}
      />

      <TimelineSection
        subtitle={t("milestones.subtitle")}
        title={t("milestones.title")}
        milestones={milestones}
      />

      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        productsText={t("cta.products")}
        contactText={t("cta.contact")}
      />
    </>
  );
}
