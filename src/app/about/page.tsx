import { Download, Target, Lightbulb, Heart } from 'lucide-react';
import { getPersonalInfo, getCVData } from '@/utils/data';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      stage: 'Stage 1: Foundation & Branding',
      timeframe: 'Now – 2026',
      goal: 'Build credibility, technical mastery, and an online footprint.',
      goals: [
        '✅ Finalize personal brand → polished CV, portfolio (ahmedseddik.tech), LinkedIn presence',
        '✅ Publish Vessel Guard and Business-wise Analysis Tool as case studies on GitHub + website',
        '📢 Start LinkedIn posting cadence: 2 posts/month (projects, insights, learnings)',
        '🎓 Focus on core CS fundamentals (DSA, system design, OOP, OS, networking)',
        '💼 Work on freelance projects (web apps, automation, AI tools) to earn ~$300–500/month by 2026',
        '🧩 Certifications: AWS Certified Solutions Architect – Associate, TensorFlow Developer Certificate'
      ]
    },
    {
      stage: 'Stage 2: Specialist & Builder',
      timeframe: '2026 – 2028',
      goal: 'Position yourself as a Software Engineer + AI/Cloud Specialist.',
      goals: [
        '🔬 Develop 3 flagship projects: SaaS product, AI-powered business tool, Open-source library',
        '💼 Internship + part-time jobs → focus on Cloud + AI engineering roles',
        '🏗️ Scale freelancing into consulting (higher-ticket clients: $1k+/project)',
        '🪪 Publish research-style case studies on Medium/LinkedIn (applied AI in engineering)',
        '🌍 Grow online brand → 5k+ LinkedIn followers, GitHub stars, speaking at meetups'
      ]
    },
    {
      stage: 'Stage 3: Blank-Check Hire Profile',
      timeframe: '2028 – 2030',
      goal: 'Enter top 1% bracket — companies chase you, not the other way around.',
      goals: [
        '📜 Graduate with strong portfolio + CV (projects, internships, freelance)',
        '🏆 Target roles: Software Engineer, Data Engineer, Solutions Architect',
        '🌍 Build reputation → conference talks, guest blog posts, open-source maintainer',
        '💰 Freelance/consulting should reach $3k–5k/month side income',
        '🔑 Personal SaaS product should generate recurring revenue (~$500–1k/month)'
      ]
    },
    {
      stage: 'Stage 4: Financial Independence & Leverage',
      timeframe: '2030 onward',
      goal: 'Choose between elite career path or founder path.',
      goals: [
        'Option 1: Senior/principal engineer roles at global companies (Google, AWS, Palantir) with ~$150k+ salary (USD)',
        'Option 2: Scale your own SaaS product(s) into a business, targeting $10k/month MRR',
        'Option 3: Hybrid → continue freelancing/consulting with niche expertise, scaling into an agency'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
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
                <p className="text-slate-300">
                  {cvData.objective}
                </p>
                <div className="space-y-3">
                  {cvData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                      <p className="text-slate-300">{highlight}</p>
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
                        <h3 className="font-semibold text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-slate-300">
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
                <CardTitle className="text-2xl">🌍 Ahmed Seddik – Future Roadmap</CardTitle>
                <p className="text-slate-300 mt-2">
                  A strategic plan toward becoming a top-tier software engineer and building financial independence.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {roadmap.map((stage, index) => (
                    <div key={index} className="border-l-4 border-sky-500 pl-6 pb-6">
                      <div className="mb-4">
                        <h3 className="font-bold text-xl text-white mb-1">
                          {stage.stage}
                        </h3>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-400/20 text-violet-300 border border-violet-400/30">
                            {stage.timeframe}
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm italic">
                          Goal: {stage.goal}
                        </p>
                      </div>
                      <ul className="space-y-2">
                        {stage.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start gap-3">
                            <span className="text-sky-400 mt-1 text-xs">▶</span>
                            <span className="text-slate-300 text-sm leading-relaxed">{goal}</span>
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
                  <div className="text-sm font-medium text-slate-400">Location</div>
                  <div className="text-white">{personalInfo.location}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400">Email</div>
                  <div className="text-white">{personalInfo.emailPrimary}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400">Domain</div>
                  <div className="text-white">{personalInfo.domain}</div>
                </div>
              </CardContent>
            </Card>

            {/* CV Download */}
            <Card>
              <CardHeader>
                <CardTitle>Curriculum Vitae</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-4">
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
                <ul className="space-y-2 text-sm text-slate-300">
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
      <Analytics />
      <SpeedInsights />
    </div>
  );
}