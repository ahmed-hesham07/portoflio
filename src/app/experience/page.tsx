'use client';

import { GraduationCap, Briefcase, Award, CheckCircle, ArrowRight, Zap, Shield, Target, Star, MessageCircle } from 'lucide-react';
import { getExperience, getEducation, getAchievements, getPortfolioData } from '@/utils/data';
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
  const portfolioData = getPortfolioData();
  const stats = portfolioData.stats || {};
  const testimonials = portfolioData.testimonials || [];

  const heroStats = [
    { label: 'NDT/FFS Projects', value: stats.projectsCompleted || '25+' },
    { label: 'Oil & Gas/Petrochem Clients', value: stats.clients || '18+' },
    { label: 'Years Industry Focus', value: stats.yearsExperience || '5+' },
    { label: 'Response Time', value: stats.responseTime || '2-4 hours' },
  ];

  const competencies = [
    { name: 'NDT & FFS Operations', level: 'Expert', width: 'w-full' },
    { name: 'Inspection Workflows', level: 'Expert', width: 'w-full' },
    { name: 'Engineering Codes', level: 'Advanced', width: 'w-5/6' },
    { name: 'Full-Stack Development', level: 'Expert', width: 'w-full' },
    { name: 'AI/ML Development', level: 'Advanced', width: 'w-5/6' },
    { name: 'Database Design', level: 'Expert', width: 'w-full' },
    { name: 'Cloud Architecture', level: 'Advanced', width: 'w-5/6' },
    { name: 'Desktop Applications', level: 'Expert', width: 'w-full' },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="A proven track record of delivering digital transformation solutions"
        description="A proven track record of delivering digital transformation solutions for the NDT and FFS industry. From individual inspection companies to large asset owners, I've helped organizations modernize their operations and achieve measurable results."
        stats={heroStats}
        actions={[
          <Button key="primary" size="lg" className="bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500" asChild>
            <a href="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>,
          <Button key="secondary" size="lg" variant="outline" asChild>
            <a href="/projects">
              <Zap className="mr-2 h-5 w-5" />
              View Projects
            </a>
          </Button>,
        ]}
      />

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-3">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Professional Experience
              </h2>
            </div>
            <Timeline experiences={experience} />

            {/* Client Testimonials */}
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  Client Feedback
                </h2>
              </div>

              {testimonials.length > 0 ? (
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="border-l-4 border-l-teal-500">
                      <CardContent className="p-6">
                        <p className="text-slate-600 dark:text-slate-300 italic mb-3">
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-semibold text-sm">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {testimonial.title}, {testimonial.company} &bull; {testimonial.industry}
                            </p>
                          </div>
                          <div className="ml-auto flex gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-current" />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-slate-100 dark:bg-slate-800/60">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Client References Available Upon Request
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Due to confidentiality agreements, specific client names and testimonials are shared during the consultation process.
                      Contact us to speak with references from inspection service companies, oil &amp; gas asset owners, and engineering consultancies.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Experience Snapshot */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Briefcase className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  Experience Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-500" />
                  <span>5+ years NDT/FFS software experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-500" />
                  <span>25+ NDT/FFS projects delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-500" />
                  <span>18+ oil &amp; gas, petrochemical clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-500" />
                  <span>80-90% time savings for clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-500" />
                  <span>All NDT methods supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-500" />
                  <span>98% client satisfaction rate</span>
                </div>
              </CardContent>
            </Card>

            {/* Core Competencies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Target className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  Core Competencies
                </CardTitle>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Combining domain expertise with technical capabilities
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {competencies.map((comp, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-200">
                      <span>{comp.name}</span>
                      <span className="text-xs text-slate-500">{comp.level}</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className={`h-full ${comp.width} rounded-full bg-gradient-to-r from-teal-500 to-blue-600`} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <GraduationCap className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                  Education &amp; Credentials
                </CardTitle>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Academic foundation with continuous industry learning
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{edu.graduation}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Award className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {achievements.map((achievement, index) => {
                    const achievementText = typeof achievement === 'string' ? achievement : achievement.title;
                    const achievementYear = typeof achievement === 'string' ? '' : achievement.year;
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-teal-500" />
                        <div>
                          <span>{achievementText}</span>
                          {achievementYear && (
                            <span className="text-xs text-slate-400 ml-1">({achievementYear})</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-center text-slate-900 dark:text-white">
                  Ready to Collaborate?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center text-sm text-slate-600 dark:text-slate-300">
                <p>Let&apos;s discuss how digital transformation can impact your business.</p>
                <Button size="md" className="bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500" asChild>
                  <a href="/contact">
                    Schedule Free Consultation
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
