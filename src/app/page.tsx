import Hero from '@/components/Hero';
import { Highlights } from '@/components/Highlights';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { BusinessImpact } from '@/components/BusinessImpact';
import { Industries } from '@/components/Industries';
import { MethodsStandards } from '@/components/MethodsStandards';
import { CallToAction } from '@/components/CallToAction';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedProjects />
      <BusinessImpact />
      <Industries />
      <MethodsStandards />
      <CallToAction />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
