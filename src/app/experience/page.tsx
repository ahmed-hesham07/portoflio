import { Trophy, GraduationCap, Briefcase, Star, Users, Award, CheckCircle, ArrowRight, Zap, TrendingUp, Clock, Shield, Target, ArrowUpRight } from 'lucide-react';
import { getExperience, getEducation, getAchievements } from '@/utils/data';
import { Timeline } from '@/components/Timeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
            <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">3+ Years</span> of Proven Excellence
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            From <span className="text-sky-400 font-semibold">RoboCup champion</span> to <span className="text-violet-400 font-semibold">engineering software specialist</span>—discover the journey that led to helping 18+ clients achieve their goals.
          </p>

          {/* Experience Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-1">{socialProof.yearsExperience}+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">🏆</div>
              <div className="text-sm text-slate-400">RoboCup Winner</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400 mb-1">🔬</div>
              <div className="text-sm text-slate-400">ML Research</div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-8 py-4 text-lg font-semibold rounded-lg flex items-center"
              onClick={() => window.location.href = '/contact'}
            >
              Work With Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-4 text-lg rounded-lg flex items-center"
              onClick={() => window.location.href = '/contact'}
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Free Consultation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-sky-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Professional Experience
              </h2>
            </div>
            <Timeline experiences={experience} />
          </div>

          {/* Sidebar with Psychology */}
          <div className="space-y-8">
            {/* Experience Summary */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Briefcase className="h-5 w-5 text-sky-400" />
                  Experience Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>3+ years in software engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>RoboCup world championship winner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Self-taught ML and data science expert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>25+ projects across multiple domains</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education with Psychology */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <GraduationCap className="h-5 w-5 text-violet-400" />
                  Education & Credentials
                </CardTitle>
                <p className="text-slate-400 text-sm">Academic foundation for excellence</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-violet-400 pl-4 bg-slate-900/30 rounded-r-lg p-3">
                    <h3 className="font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-violet-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-slate-400">
                      {edu.graduation}
                    </p>
                  </div>
                ))}
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
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Trophy className="h-3 w-3 text-amber-400" />
                      </div>
                      <span className="text-slate-300 text-sm">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skills Summary with Psychology */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Target className="h-5 w-5 text-sky-400" />
                  Core Competencies
                </CardTitle>
                <p className="text-slate-400 text-sm">Proven expertise across key areas</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium text-white">
                        Data Science & ML
                      </div>
                      <div className="text-xs text-sky-400 font-semibold">90%</div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-sky-500 to-sky-400 h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium text-white">
                        Full-Stack Development
                      </div>
                      <div className="text-xs text-violet-400 font-semibold">85%</div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-violet-500 to-violet-400 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium text-white">
                        Engineering Software
                      </div>
                      <div className="text-xs text-emerald-400 font-semibold">80%</div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full w-[80%]"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-sky-900/20 to-violet-900/20 border-sky-500/30">
              <CardHeader>
                <CardTitle className="text-white text-center">Ready to Work Together?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-300 text-sm">
                  Let's discuss how my experience can help your project succeed.
                </p>
                <button 
                  className="w-full bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-600 hover:to-violet-600 text-white px-6 py-3 text-sm font-semibold rounded-lg flex items-center justify-center"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <p className="text-xs text-slate-500">
                  <Shield className="inline h-3 w-3 mr-1" />
                  Free consultation • No commitment
                </p>
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