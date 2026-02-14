'use client';

import { getSkills } from '@/utils/data';
import { Badge } from './ui/Badge';

const Skills = () => {
  const skills = getSkills();

  const skillCategories = [
    {
      title: 'Programming & Data',
      skills: skills.programmingAndData,
      variant: 'default' as const
    },
    {
      title: 'Frameworks & Tools',
      skills: skills.frameworksTools,
      variant: 'secondary' as const
    },
    {
      title: 'Concepts',
      skills: skills.concepts,
      variant: 'tech' as const
    },
    {
      title: 'Soft Skills',
      skills: skills.soft,
      variant: 'outline' as const
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900" id="skills">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit covering software engineering, data science, and modern development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills?.map((skill) => (
                  <Badge key={skill} variant={category.variant}>
                    {skill}
                  </Badge>
                )) || <p className="text-sm text-slate-500 dark:text-slate-400">No skills available</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;