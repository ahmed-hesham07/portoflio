'use client';

import { GraduationCap, Briefcase, Award, CheckCircle, ArrowRight, Zap, Shield, Target } from 'lucide-react';
import { getExperience, getEducation, getAchievements } from '@/utils/data';
import { Timeline } from '@/components/Timeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PageIntro } from '@/components/PageIntro';
import { Button } from '@/components/ui/Button';

export default function ExperiencePage() {
  const experience = getExperience();
  const education = getEducation();
  const achievements = getAchievements();

  // Social proof and credibility data
  const socialProof = {
    projectsCompleted: 25,
    clientsSatisfied: 18,
    yearsExperience: 3,
    successRate: '98%',
    responseTime: '2-4 hours'
  };

  const heroStats = [
    { label: 'Projects delivered', value: `${socialProof.projectsCompleted}+` },
    { label: 'Happy clients', value: `${socialProof.clientsSatisfied}+` },
    { label: 'Years of experience', value: `${socialProof.yearsExperience}+` },
    { label: 'Response time', value: socialProof.responseTime },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Experience shaped by shipping real products"
        description="From RoboCup championships to production engineering software, I focus on pragmatic problem-solving, dependable delivery, and measurable outcomes across AI, automation, and full-stack development."
        stats={heroStats}
        actions={[
          <Button key="primary" size="lg" asChild>
            <a href="/contact">
              Work with me
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>,
          <Button key="secondary" size="lg" variant="outline" asChild>
            <a href="/contact">
              <Zap className="mr-2 h-5 w-5" />
              Free consultation
            </a>
          </Button>,
        ]}
      />

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-3">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-sky-500" />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Professional experience
              </h2>
            </div>
            <Timeline experiences={experience} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Briefcase className="h-5 w-5 text-sky-500" />
                  Experience snapshot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>3+ years building production software</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>RoboCup world championship winner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Hands-on ML, automation, and engineering tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>25+ projects delivered with measurable outcomes</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <GraduationCap className="h-5 w-5 text-sky-500" />
                  Education & credentials
                </CardTitle>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Technical foundation grounded in engineering rigor
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{edu.graduation}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Award className="h-5 w-5 text-sky-500" />
                  Key achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-sky-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Target className="h-5 w-5 text-sky-500" />
                  Core competencies
                </CardTitle>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Blending software craftsmanship with data and engineering
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                    <span>Data science & ML</span>
                    <span>Advanced</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full w-11/12 rounded-full bg-sky-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                    <span>Full-stack development</span>
                    <span>Advanced</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full w-5/6 rounded-full bg-sky-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                    <span>Engineering software</span>
                    <span>Expert</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full w-4/5 rounded-full bg-sky-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center text-slate-900 dark:text-white">
                  Ready to collaborate?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center text-sm text-slate-600 dark:text-slate-300">
                <p>Let&apos;s talk through your idea, requirements, and success criteria.</p>
                <Button size="md" asChild>
                  <a href="/contact">
                    Start your project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  <Shield className="mr-1 inline h-3 w-3" />
                  Free consultation, transparent proposals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Analytics />
      <SpeedInsights />
    </>
  );
}