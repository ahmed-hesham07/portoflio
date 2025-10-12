import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, Wrench, AlertCircle, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';
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

const statusConfig = {
  'completed': {
    label: 'Completed',
    className: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
    icon: <CheckCircle className="h-4 w-4" />
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800',
    icon: <TrendingUp className="h-4 w-4" />
  }
};

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

  const status = statusConfig[project.status];

  return (
    <div className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
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
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                  {project.name}
                </h1>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.year}
                </Badge>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full border flex items-center gap-1.5 ${status.className}`}>
                  {status.icon}
                  {status.label}
                </span>
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
                {(project.links.demo || project.links.live) && (
                  <Button variant="secondary" asChild>
                    <a href={project.links.demo || project.links.live || ''} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {project.links.demo ? 'Live Demo' : 'Visit Site'}
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
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
            {/* Problems Solved */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Problems Solved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.problemsSolved.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1 flex-shrink-0">✗</span>
                      <span className="text-slate-600 dark:text-slate-300">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solution & Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  Solution & Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.name} provides a comprehensive solution with the following capabilities:
                </p>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Business Value */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-violet-500" />
                  Business Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 text-sm">⚡ Efficiency</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{project.businessValue.efficiency}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2 text-sm">✓ Quality</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{project.businessValue.quality}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800">
                    <h4 className="font-semibold text-violet-900 dark:text-violet-300 mb-2 text-sm">📈 ROI</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{project.businessValue.roi}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="border-2 border-sky-200 dark:border-sky-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Overall Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
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
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Status</div>
                  <div className="text-slate-900 dark:text-white">{status.label}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Category</div>
                  <div className="text-slate-900 dark:text-white">
                    {project.tech.some(t => ['Python', 'TensorFlow', 'PyTorch', 'Keras'].includes(t)) ? 'AI & Data Science' : 
                     project.tech.some(t => ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].includes(t)) ? 'Web Development' : 
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
