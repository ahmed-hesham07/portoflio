import { Download, Target, Lightbulb, Heart, Star, Users, Award, CheckCircle, ArrowRight, Zap, TrendingUp, Clock, Shield, Trophy } from 'lucide-react';
import { getPersonalInfo, getCVData } from '@/utils/data';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function AboutPage() {
  const personalInfo = getPersonalInfo();
  const cvData = getCVData();

  // Social proof and credibility data
  const socialProof = {
    projectsCompleted: 25,
    clientsSatisfied: 18,
    yearsExperience: 3,
    successRate: '98%',
    responseTime: '2-4 hours'
  };

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
        {/* Header with Social Proof */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-300">Available for New Projects</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            The Engineer Behind 
            <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent"> 25+ Successful Projects</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            From <span className="text-sky-400 font-semibold">RoboCup champion</span> to <span className="text-violet-400 font-semibold">engineering software specialist</span>—discover the journey that led to helping 18+ clients transform their ideas into reality.
          </p>

          {/* Key Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-1">🏆</div>
              <div className="text-sm text-slate-400">RoboCup Champion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">🔬</div>
              <div className="text-sm text-slate-400">ML Pioneer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400 mb-1">⚡</div>
              <div className="text-sm text-slate-400">Self-Taught Expert</div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-8 py-4 text-lg font-semibold" 
              asChild
            >
              <a href="/contact">
                Work With Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-4 text-lg" asChild>
              <a href="/Ahmed_Hesham_CV.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
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

          {/* Sidebar with Psychology */}
          <div className="space-y-6">
            {/* Key Achievements */}
            <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Award className="h-5 w-5 text-amber-400" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Trophy className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">RoboCup World Championship Winner</span>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Self-taught ML expert in 2 years</span>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">25+ successful projects delivered</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info with Urgency */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Zap className="h-5 w-5 text-sky-400" />
                  Get in Touch
                </CardTitle>
                <p className="text-slate-400 text-sm">Ready to start your project?</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                  <div className="font-medium text-white text-lg mb-2">Primary Email</div>
                  <a 
                    href={`mailto:${personalInfo.emailPrimary}`}
                    className="text-sky-400 hover:text-sky-300 transition-colors font-mono text-sm break-all block"
                  >
                    {personalInfo.emailPrimary}
                  </a>
                  <p className="text-xs text-slate-400 mt-2">Best for project discussions</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                      <div className="font-medium text-white text-sm">Available Now</div>
                      <div className="text-xs text-slate-400">Open to new projects</div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white" 
                  asChild
                >
                  <a href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* CV Download with Psychology */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Download className="h-5 w-5 text-violet-400" />
                  Complete CV
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300 mb-4">
                  Download my detailed CV with <span className="text-violet-400 font-medium">25+ projects</span>, certifications, and technical expertise.
                </p>
                <div className="space-y-2 mb-4 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                    <span>3+ years experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                    <span>98% client satisfaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                    <span>RoboCup champion</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a href="/Ahmed_Hesham_CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Achievements with Social Proof */}
            <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Award className="h-5 w-5 text-amber-400" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-400 text-xs">🏆</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">National RoboCup Champion</div>
                      <div className="text-xs text-slate-400">Age 16 • Represented Egypt internationally</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sky-400 text-xs">🔬</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">ML Pioneer</div>
                      <div className="text-xs text-slate-400">Built first ML model in high school</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-violet-400 text-xs">⚡</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">Self-Taught Expert</div>
                      <div className="text-xs text-slate-400">90% of skills learned independently</div>
                    </div>
                  </li>
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
