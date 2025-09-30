import { Download, Target, Lightbulb, Heart, Award } from 'lucide-react';
import { getPersonalInfo, getCVData } from '@/utils/data';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function AboutPage() {
  const personalInfo = getPersonalInfo();
  const cvData = getCVData();

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
    <div className="min-h-screen py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Software Engineer & Data Scientist with a passion for building intelligent engineering software 
            at the intersection of AI, cloud, and industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
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
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 mb-3">
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
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
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
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white mb-2">Email</div>
                  <a 
                    href={`mailto:${personalInfo.emailPrimary}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-mono text-sm break-all block"
                  >
                    {personalInfo.emailPrimary}
                  </a>
                </div>

                <Button 
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100" 
                  asChild
                >
                  <a href="/contact">
                    Contact Me
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* CV Download */}
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
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
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
