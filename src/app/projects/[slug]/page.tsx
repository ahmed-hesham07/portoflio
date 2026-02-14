import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, Wrench, AlertCircle, Lightbulb, TrendingUp, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { getProjectBySlug, getProjects, getPersonalInfo } from '@/utils/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
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
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} | Ahmed Seddik - NDT & FFS Solutions`,
    description: project.description,
    openGraph: {
      title: `${project.name} - NDT & FFS Digital Transformation`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const personalInfo = getPersonalInfo();
  const allProjects = getProjects();

  if (!project) {
    notFound();
  }

  const status = statusConfig[project.status];
  const relatedProjects = allProjects.filter(p => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-6xl">
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
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.year}
                </Badge>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full border flex items-center gap-1.5 ${status.className}`}>
                  {status.icon}
                  {status.label}
                </span>
                {project.industry && project.industry.map((ind) => (
                  <Badge key={ind} variant="secondary" size="sm">{ind}</Badge>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {project.name}
              </h1>
              {project.tagline && (
                <p className="text-lg text-teal-700 dark:text-teal-400 font-medium mb-4">
                  {project.tagline}
                </p>
              )}
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
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
                <Button variant="outline" className="border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300" asChild>
                  <a href={`mailto:${personalInfo.emailPrimary}?subject=Demo Request: ${project.name}`}>
                    Request Custom Demo
                  </a>
                </Button>
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
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  Problems Solved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.problemsSolved.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1 flex-shrink-0 font-bold">&times;</span>
                      <span className="text-slate-600 dark:text-slate-300">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solution & Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Lightbulb className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  Solution &amp; Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1 flex-shrink-0">&#10003;</span>
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Business Value */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <TrendingUp className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                  Business Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.businessValue.efficiency && (
                    <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
                      <h4 className="font-semibold text-teal-800 dark:text-teal-300 mb-1 text-sm">Efficiency</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{project.businessValue.efficiency}</p>
                    </div>
                  )}
                  {project.businessValue.quality && (
                    <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-1 text-sm">Quality</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{project.businessValue.quality}</p>
                    </div>
                  )}
                  {project.businessValue.roi && (
                    <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-1 text-sm">ROI</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{project.businessValue.roi}</p>
                    </div>
                  )}
                  {project.businessValue.scalability && (
                    <div className="p-4 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800">
                      <h4 className="font-semibold text-violet-800 dark:text-violet-300 mb-1 text-sm">Scalability</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{project.businessValue.scalability}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="border-2 border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-900/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400" />
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
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Wrench className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {project.tech.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Project Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Year</div>
                  <div className="text-slate-900 dark:text-white font-medium">{project.year}</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</div>
                  <div className="text-slate-900 dark:text-white font-medium">{status.label}</div>
                </div>
                {project.industry && (
                  <div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Industry</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.industry.map((ind) => (
                        <Badge key={ind} variant="secondary" size="sm">{ind}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                {project.projectType && (
                  <div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Project Type</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.projectType.map((type) => (
                        <Badge key={type} variant="outline" size="sm">{type}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Interested in a Similar Solution?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Let&apos;s discuss how we can build something tailored to your operations.
                </p>
                <div className="flex flex-col gap-2">
                  <Button className="w-full bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500" asChild>
                    <a href={`mailto:${personalInfo.emailPrimary}?subject=Inquiry about ${project.name}`}>
                      Request Custom Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300" asChild>
                    <a href="https://wa.me/201284986274" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Free Consultation
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rp) => (
                <Link key={rp.slug} href={`/projects/${rp.slug}`} className="group">
                  <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                        {rp.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-3">
                        {rp.shortDescription || rp.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-teal-600 dark:text-teal-400 font-medium">
                        View Project <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
