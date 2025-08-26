import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, Wrench } from 'lucide-react';
import { getProjectBySlug, getProjects } from '@/utils/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} | Ahmed Seddik`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                  {project.name}
                </h1>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.year}
                </Badge>
              </div>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                {project.links.repo && (
                  <Button asChild>
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.links.demo && (
                  <Button variant="secondary" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Problem */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-red-500">🎯</span>
                  Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  This project addressed the need for {project.description.toLowerCase()}. 
                  Traditional approaches were time-consuming and error-prone, requiring a modern, 
                  automated solution that could deliver reliable results efficiently.
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-green-500">💡</span>
                  Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.name} provides a comprehensive solution built with modern technologies 
                  including {project.tech.slice(0, 3).join(', ')}. Key features include:
                </p>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-sky-500 mt-1">✓</span>
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-violet-500">📈</span>
                  Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  {project.impact}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {project.tech.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-sky-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Year</div>
                  <div className="text-slate-900 dark:text-white">{project.year}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Category</div>
                  <div className="text-slate-900 dark:text-white">
                    {project.tech.includes('Python') ? 'Data Science' : 
                     project.tech.includes('React') ? 'Web Development' : 
                     'Engineering Software'}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
