import Hero from '@/components/Hero';
import { Highlights } from '@/components/Highlights';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import Skills from '@/components/Skills';
import { CallToAction } from '@/components/CallToAction';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedProjects />
      <Skills />
      <CallToAction />
    </>
  );
}
