import { Download, Target, Lightbulb, Heart, Award, FlaskConical, Code, Briefcase, GraduationCap, BookOpen } from 'lucide-react';
import { getPersonalInfo, getCVData, getPortfolioData } from '@/utils/data';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PageIntro } from '@/components/PageIntro';

export default function AboutPage() {
  const personalInfo = getPersonalInfo();
  const cvData = getCVData();
  const portfolioData = getPortfolioData();
  const stats = portfolioData.stats || {};
  const education = portfolioData.education || [];

  const heroStats = [
    { label: 'Years Industry Software Exp', value: stats.yearsExperience || '5+' },
    { label: 'NDT/FFS Projects', value: stats.projectsCompleted || '25+' },
    { label: 'Oil & Gas/Petrochem Clients', value: stats.clients || '18+' },
    { label: 'All NDT Methods Covered', value: '11+' },
  ];

  const expertiseAreas = [
    {
      icon: FlaskConical,
      title: 'Domain Knowledge',
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
      items: [
        'NDT methodologies (UT, RT, MT, PT, PAUT, TOFD, VT, ET)',
        'FFS assessment calculations (API 579 Levels 1-3)',
        'Pressure equipment codes (ASME, API, AWS)',
        'Corrosion management & CML tracking',
        'Welding inspection standards',
        'Asset integrity workflows'
      ]
    },
    {
      icon: Code,
      title: 'Technical Capabilities',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      items: [
        'Full-stack development (React, FastAPI, databases)',
        'Desktop applications (Tauri, cross-platform)',
        'Cloud architecture (AWS, Azure)',
        'Database design & optimization',
        'API development & integration',
        'AI/ML for inspection automation',
        'Mobile app development'
      ]
    },
    {
      icon: Briefcase,
      title: 'Business Solutions',
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
      items: [
        'Digital workflow transformation',
        'Custom template development',
        'Legacy system integration',
        'Data migration & management',
        'Training & change management',
        'Ongoing support & maintenance',
        'ROI optimization'
      ]
    }
  ];

  const differentiators = [
    {
      title: 'Industry-First Approach',
      icon: Target,
      description: "I don't just write code - I understand your inspection workflows, codes, and business challenges. The software is built around YOUR needs, not generic templates.",
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
    },
    {
      title: 'Rapid Implementation',
      icon: Lightbulb,
      description: '4-8 week typical deployment vs 6-12 months for enterprise software. You start seeing ROI in weeks, not years.',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      title: 'Complete Customization',
      icon: FlaskConical,
      description: "Every client is different. I build exactly what YOU need - your formats, your workflow, your branding. No \"close enough\" solutions.",
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
    },
    {
      title: 'Partnership Mentality',
      icon: Heart,
      description: "I'm not a vendor - I'm your digital transformation partner. Ongoing support, updates, and evolution as your business grows.",
      color: 'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400',
    }
  ];

  const keyAchievements = [
    {
      title: 'Vessel Guard FFS Platform',
      description: 'Complete desktop application for ASME B31.3 & VIII assessments with automated calculations and professional report generation',
      tech: 'Tauri, React, FastAPI, SQLAlchemy'
    },
    {
      title: 'AI-Powered Corrosion Detection',
      description: 'Built intelligent system for corrosion segmentation using deep learning (U-Net architecture) to automate visual inspection analysis',
      tech: 'TensorFlow, OpenCV, ResNet34'
    },
    {
      title: 'MASSA NDT Intelligence Platform',
      description: 'Enterprise digital transformation platform for industrial inspection with mobile, cloud, and AI integration',
      tech: 'React, FastAPI, AWS, TensorFlow'
    },
    {
      title: 'RoboCup World Championship Winner',
      description: 'National Champion - RoboCup Junior Egypt (2019), Asia-Pacific Participant (2018). Demonstrates problem-solving excellence.',
      tech: null
    }
  ];

  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Bridging Engineering and Technology for Industrial Digital Transformation"
        description="I'm Ahmed Hesham, a Software Engineer specializing in digital transformation solutions for the NDT and Fitness-for-Service industry. With a deep understanding of inspection workflows, engineering codes, and modern software architecture, I build platforms that transform traditional manual operations into efficient, intelligent digital ecosystems."
        stats={heroStats}
      />

      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-8 lg:col-span-2">
              {/* Professional Mission */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">Professional Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-300">
                    {cvData.objective}
                  </p>
                  <div className="space-y-2">
                    <p className="text-slate-700 dark:text-slate-200 font-semibold">Why NDT/FFS Focus:</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      The inspection industry is at a critical juncture. While inspection methodologies have advanced significantly, many companies still rely on manual, time-consuming reporting processes that create bottlenecks and limit growth. I saw this gap and dedicated my expertise to solving it - creating software that doesn&apos;t just digitize forms, but transforms entire operational workflows.
                    </p>
                  </div>
                  <div className="space-y-3 mt-4">
                    {cvData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                        <p className="text-slate-600 dark:text-slate-300">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Core Expertise Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">Core Expertise Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {expertiseAreas.map((area, index) => {
                      const Icon = area.icon;
                      return (
                        <div key={index} className="space-y-3">
                          <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ${area.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                            {area.title}
                          </h3>
                          <ul className="space-y-2">
                            {area.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <span className="text-teal-600 dark:text-teal-400 mt-1 flex-shrink-0">&bull;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* What Sets Me Apart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white">Why Companies Choose to Work With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {differentiators.map((diff, index) => {
                      const Icon = diff.icon;
                      return (
                        <div key={index} className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl">
                          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${diff.color} mb-3`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{diff.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {diff.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 dark:text-white flex items-center gap-2">
                    <Award className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {keyAchievements.map((achievement, index) => (
                      <div key={index} className="border border-slate-200 dark:border-slate-700 p-4 rounded-xl hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                          {achievement.description}
                        </p>
                        {achievement.tech && (
                          <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                            Tech: {achievement.tech}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <GraduationCap className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    Education &amp; Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {edu.location} &bull; {edu.graduation}
                      </p>
                      {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                        <div className="mt-3">
                          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Relevant Coursework:</p>
                          <div className="flex flex-wrap gap-1">
                            {edu.relevantCoursework.map((course, i) => (
                              <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Industry Knowledge */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    Industry Knowledge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1 flex-shrink-0">&#10003;</span>
                      Self-taught in NDT methodologies and standards
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1 flex-shrink-0">&#10003;</span>
                      Deep study of API 579, ASME codes, AWS standards
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1 flex-shrink-0">&#10003;</span>
                      Hands-on experience with inspection workflows
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1 flex-shrink-0">&#10003;</span>
                      Continuous learning through industry publications
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1 flex-shrink-0">&#10003;</span>
                      Risk-based inspection philosophies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1 flex-shrink-0">&#10003;</span>
                      Asset integrity management practices
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Let&apos;s Discuss Your Needs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Let&apos;s discuss how digital transformation can impact your business.
                  </p>
                  <div className="rounded-lg bg-white/80 dark:bg-slate-800/60 p-3 text-center">
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Email</div>
                    <a 
                      href={`mailto:${personalInfo.emailPrimary}`}
                      className="text-sm text-blue-700 dark:text-blue-400 hover:underline font-mono break-all block"
                    >
                      {personalInfo.emailPrimary}
                    </a>
                  </div>
                  <div className="rounded-lg bg-white/80 dark:bg-slate-800/60 p-3 text-center">
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">WhatsApp</div>
                    <a 
                      href="https://wa.me/201284986274"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-teal-700 dark:text-teal-400 hover:underline break-all block"
                    >
                      +20 128 498 6274
                    </a>
                    <p className="text-xs text-slate-500 mt-1">Messages only</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button className="w-full bg-blue-900 dark:bg-blue-600 text-white hover:bg-blue-800 dark:hover:bg-blue-500" asChild>
                      <a href="/contact">
                        Schedule Free Consultation
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/Ahmed_Hesham_CV.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
