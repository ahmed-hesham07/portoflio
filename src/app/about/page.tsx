import { Download, Target, Lightbulb, Heart } from 'lucide-react';
import { getPersonalInfo, getCVData } from '@/utils/data';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function AboutPage() {
  const personalInfo = getPersonalInfo();
  const cvData = getCVData();

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative solutions that solve real-world problems.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering high-quality software with attention to detail, best practices, and measurable business impact.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by curiosity and love for learning, constantly exploring new technologies and methodologies.'
    }
  ];

  const roadmap = [
    {
      timeframe: 'Q1-Q2 2025',
      goals: [
        'Complete ASME B31.3 certification',
        'Launch Vessel Guard v2.0 with advanced analytics',
        'Expand freelance client portfolio'
      ]
    },
    {
      timeframe: 'Q3-Q4 2025',
      goals: [
        'Graduate with B.Sc. in Computer Engineering',
        'Develop cloud-native engineering platform',
        'Contribute to open-source ML projects'
      ]
    },
    {
      timeframe: '2026',
      goals: [
        'Establish engineering consultancy firm',
        'Develop industry-standard ML frameworks',
        'Mentor next generation of engineers'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get to know the person behind the code—my story, values, and vision for the future of engineering software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300">
                  {cvData.objective}
                </p>
                <div className="space-y-3">
                  {cvData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 dark:text-slate-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/10 text-sky-500 mb-3">
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

            {/* Roadmap */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Future Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {roadmap.map((milestone, index) => (
                    <div key={index} className="border-l-2 border-violet-400 pl-6">
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                        {milestone.timeframe}
                      </h3>
                      <ul className="space-y-1">
                        {milestone.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start gap-2">
                            <span className="text-violet-400 mt-1">•</span>
                            <span className="text-slate-600 dark:text-slate-300">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</div>
                  <div className="text-slate-900 dark:text-white">{personalInfo.location}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</div>
                  <div className="text-slate-900 dark:text-white">{personalInfo.emailPrimary}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Domain</div>
                  <div className="text-slate-900 dark:text-white">{personalInfo.domain}</div>
                </div>
              </CardContent>
            </Card>

            {/* CV Download */}
            <Card>
              <CardHeader>
                <CardTitle>Curriculum Vitae</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Download my complete CV for detailed information about my education, experience, and technical skills.
                </p>
                <Button className="w-full" asChild>
                  <a href="/Ahmed_Hesham_CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card>
              <CardHeader>
                <CardTitle>Fun Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>🏆 National RoboCup champion at age 16</li>
                  <li>🔬 Built my first ML model in high school</li>
                  <li>📚 Self-taught 90% of programming skills</li>
                  <li>🌍 Represented Egypt in Asia-Pacific RoboCup</li>
                  <li>⚡ Can debug code faster than most people read it</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}