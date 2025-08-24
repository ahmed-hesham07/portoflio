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
    <section className="py-16 bg-slate-950" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit spanning software engineering, data science, and modern development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant={category.variant}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;