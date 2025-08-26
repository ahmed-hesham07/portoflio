import type { Metadata } from "next";
import Skills from "../../components/Skills";
import PageWrapper from "../../components/PageWrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Skills | Ahmed Hesham - Technical Matrix",
  description: "Comprehensive overview of Ahmed Hesham's technical expertise across quantum computing, neural networks, programming languages, frameworks, and engineering standards.",
  keywords: [
    "Ahmed Hesham",
    "Technical Skills",
    "Programming Languages",
    "Python",
    "JavaScript",
    "React",
    "AI/ML Skills", 
    "TensorFlow",
    "Scikit-learn",
    "ASME Standards",
    "Engineering Skills",
    "Quantum Computing"
  ],
  openGraph: {
    title: "Technical Skills | Ahmed Hesham", 
    description: "Quantum-enhanced expertise spanning neural architectures and advanced engineering protocols.",
    url: "https://ahmed-hesham.dev/skills",
  },
};

export default function SkillsPage() {
  return (
    <PageWrapper>
      <Skills />
      <Analytics />
      <SpeedInsights />
    </PageWrapper>
  );
}
