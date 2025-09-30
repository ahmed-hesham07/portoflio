import { Download, Target, Lightbulb, Heart, Award } from 'lucide-react';
import { getPersonalInfo, getCVData } from '@/utils/data';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PageIntro } from '@/components/PageIntro';

export default function AboutPage() {
  const personalInfo = getPersonalInfo();
  const cvData = getCVData();

  const heroStats = [
    { label: 'Years of experience', value: '3+' },
    { label: 'Projects delivered', value: '25+' },
    { label: 'Happy clients', value: '18+' },
    { label: 'RoboCup awards', value: '2×' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Exploring cutting-edge technologies and creative solutions to solve complex problems.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering high-quality software with attention to detail and best practices.'
    },
    {
      icon: Heart,
      title: 'Continuous Learning',
      description: 'Driven by curiosity and passion for learning new technologies and methodologies.'
    }
  ];

  const achievements = [
    'National Champion – RoboCup Junior Egypt (2019)',
    'Asia-Pacific RoboCup Participant (2018)',
    'Computer Engineering Student at AASTMT Alexandria',
    'Multiple projects in engineering software and data science'
  ];

  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Curious engineer with a human-first mindset"
        description="I build intelligent software that bridges data science, engineering standards, and user-centered experiences. My work spans AI, automation, and modern product development aimed at creating measurable impact."
        stats={heroStats}
      />

      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  {cvData.objective}
                </p>
                <div className="space-y-3">
                  {cvData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {value.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Award className="h-5 w-5" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 mt-2 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-slate-50 p-4 text-center dark:bg-slate-800/60">
                  <div className="font-medium text-slate-900 dark:text-white mb-2">Email</div>
                  <a 
                    href={`mailto:${personalInfo.emailPrimary}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-mono text-sm break-all block"
                  >
                    {personalInfo.emailPrimary}
                  </a>
                </div>

                <Button className="w-full" asChild>
                  <a href="/contact">
                    Contact Me
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* CV Download */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <Download className="h-5 w-5" />
                  Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Download my complete resume with detailed project information and technical expertise.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/Ahmed_Hesham_CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
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
