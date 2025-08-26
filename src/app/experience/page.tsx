import { Trophy, GraduationCap, Briefcase } from 'lucide-react';
import { getExperience, getEducation, getAchievements } from '@/utils/data';
import { Timeline } from '@/components/Timeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ExperiencePage() {
  const experience = getExperience();
  const education = getEducation();
  const achievements = getAchievements();

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience & Education
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My journey in software engineering, data science, and competitive programming through internships, freelance work, and continuous learning.
          </p>
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

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-violet-500" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-violet-400 pl-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-violet-600 dark:text-violet-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {edu.graduation}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Trophy className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skills Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Data Science & ML
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-sky-500 h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full-Stack Development
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-violet-400 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Engineering Software
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full w-[80%]"></div>
                    </div>
                  </div>
                </div>
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