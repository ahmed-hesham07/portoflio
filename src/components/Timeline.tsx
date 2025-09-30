import { ExperienceItem } from '@/types';
import { Badge } from './ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

interface TimelineProps {
  experiences: ExperienceItem[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-400 to-slate-600"></div>
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="relative flex items-start gap-6">
            {/* Timeline dot */}
            <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 text-white dark:bg-slate-300 dark:text-slate-900">
              <span className="text-xl font-bold">{index + 1}</span>
            </div>
            
            {/* Content */}
            <Card className="flex-1">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl">
                    {experience.role}
                  </CardTitle>
                  <Badge variant="outline">
                    {experience.period}
                  </Badge>
                </div>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                  {experience.company}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {experience.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="text-slate-500 mt-1 flex-shrink-0">•</span>
                      <span className="text-slate-600 dark:text-slate-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
