import type { Metadata } from "next";
import { getPortfolioData } from '@/utils/data';
import { PageIntro } from '@/components/PageIntro';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FlaskConical, Code, Database, Brain, FileText, Settings, Users, Shield, Wrench, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: "Skills | Ahmed Seddik - NDT & FFS Software Specialist",
  description: "Technical expertise meets industry knowledge. Comprehensive skills in NDT methods, FFS assessments, engineering codes, and modern software development for inspection industry digital transformation.",
  keywords: [
    "NDT software skills",
    "FFS assessment expertise",
    "API 579",
    "ASME codes",
    "Inspection workflows",
    "NDT methods",
    "Python developer",
    "React developer",
    "Inspection automation",
    "Asset integrity software"
  ],
  openGraph: {
    title: "Skills | Ahmed Seddik - NDT & FFS Software Specialist",
    description: "Technical expertise meets industry knowledge for NDT and FFS digital transformation.",
    url: "https://ahmedseddik.tech/skills",
  },
};

export default function SkillsPage() {
  const portfolioData = getPortfolioData();
  const skills = portfolioData.skills;
  const ndtMethods = portfolioData.ndtMethods || [];
  const codesStandards = portfolioData.codesStandards || [];

  const heroStats = [
    { label: 'NDT Methods Supported', value: `${ndtMethods.length}+` },
    { label: 'Codes & Standards', value: '15+' },
    { label: 'Programming Languages', value: '10+' },
    { label: 'Years Experience', value: '5+' },
  ];

  const assetIntegrityItems = [
    'Risk-Based Inspection (RBI) principles',
    'Corrosion monitoring and management',
    'Remaining life assessment',
    'Inspection interval optimization',
    'Damage mechanism identification',
    'Pressure equipment integrity management',
    'Inspection planning and execution',
    'Data management and trending',
    'Regulatory compliance workflows',
  ];

  const reportingTools = [
    { name: 'ReportLab', desc: 'Complex multi-page technical PDF reports' },
    { name: 'python-docx', desc: 'Word document generation and manipulation' },
    { name: 'openpyxl', desc: 'Excel spreadsheet automation and formatting' },
    { name: 'Jinja2', desc: 'Dynamic report templates with conditional content' },
    { name: 'WeasyPrint', desc: 'HTML/CSS to PDF conversion' },
  ];

  const calculationCapabilities = [
    'Remaining Strength Factor (RSF)',
    'Maximum Allowable Working Pressure (MAWP)',
    'Remaining life estimation',
    'Corrosion rate calculations',
    'Trend analysis and forecasting',
    'Outlier detection and confidence intervals',
    'Iterative solvers and optimization',
    'Interpolation and extrapolation',
  ];

  const integrationCapabilities = [
    'RESTful API development (FastAPI, Flask)',
    'Equipment APIs (UT gauges, instruments)',
    'ERP/CMMS system integration',
    'Cloud storage (S3, Azure Blob)',
    'Multi-database connectivity',
    'Data synchronization and migration',
    'Authentication and authorization',
  ];

  const architecturePatterns = [
    'Microservices Architecture',
    'Model-View-Controller (MVC)',
    'Repository Pattern',
    'Dependency Injection',
    'SOLID Principles',
    'Test-Driven Development (TDD)',
    'Domain-Driven Design (DDD)',
  ];

  const devPractices = [
    'Version Control (Git, GitHub)',
    'Agile Development Methodologies',
    'Code Review and Quality Assurance',
    'Documentation and Technical Writing',
    'Performance Optimization',
    'Security Best Practices',
    'Responsive Design Principles',
    'CI/CD (GitHub Actions)',
  ];

  return (
    <>
      <PageIntro
        eyebrow="Skills"
        title="Technical Expertise Meets Industry Knowledge"
        description="Successful NDT/FFS software development requires more than just coding skills - it demands deep understanding of inspection workflows, engineering codes, and industry challenges. Here's how my combined technical and domain expertise delivers solutions that actually work."
        stats={heroStats}
      />

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl px-6 space-y-12">
          
          {/* Domain Knowledge - TOP PRIORITY */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                <FlaskConical className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Domain Knowledge &amp; Industry Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* NDT Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">NDT Methods (All Supported)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {ndtMethods.map((method) => (
                      <div key={method.code} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-lg bg-blue-900 dark:bg-blue-800 text-white text-xs font-bold min-w-[50px] text-center">
                          {method.code}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{method.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{method.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Codes & Standards */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Codes, Standards &amp; Regulations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {codesStandards.map((category, index) => (
                      <div key={index}>
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          {category.category}:
                        </h4>
                        <div className="space-y-1.5">
                          {category.standards.map((standard) => (
                            <div key={standard.code} className="flex items-center gap-2">
                              <span className="text-teal-500 flex-shrink-0">&#10003;</span>
                              <span className="text-sm text-slate-600 dark:text-slate-300">
                                <span className="font-medium">{standard.code}</span>
                                {standard.name && <span className="text-slate-500 dark:text-slate-400"> - {standard.name}</span>}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Asset Integrity */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Asset Integrity &amp; Inspection Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {assetIntegrityItems.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="text-teal-500 flex-shrink-0">&#10003;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Software Development Expertise */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                <Code className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Software Development Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Programming Languages */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Core Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2 uppercase tracking-wider">Expert</p>
                      <div className="flex flex-wrap gap-2">
                        {skills.programming?.expert?.map((lang) => (
                          <Badge key={lang} variant="default">{lang}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">Advanced</p>
                      <div className="flex flex-wrap gap-2">
                        {skills.programming?.advanced?.map((lang) => (
                          <Badge key={lang} variant="secondary">{lang}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Frameworks */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Frameworks &amp; Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skills.frameworks && Object.entries(skills.frameworks).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1 capitalize">
                          {key}:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {value.map((item) => (
                            <Badge key={item} variant="outline" className="text-xs">{item}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI/ML */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">AI/ML &amp; Data Science</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Frameworks:</p>
                      <div className="flex flex-wrap gap-1">
                        {skills.aiml?.frameworks?.map((fw) => (
                          <Badge key={fw} variant="default">{fw}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Libraries:</p>
                      <div className="flex flex-wrap gap-1">
                        {skills.aiml?.libraries?.map((lib) => (
                          <Badge key={lib} variant="outline" className="text-xs">{lib}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">NDT Applications:</p>
                      <div className="flex flex-wrap gap-1">
                        {skills.aiml?.applications?.map((app) => (
                          <Badge key={app} variant="secondary" className="text-xs">{app}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Specialized Skills for NDT/FFS */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                <Wrench className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Specialized Skills for NDT/FFS Software
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Report Generation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                    <FileText className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    Report Generation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {reportingTools.map((tool) => (
                      <div key={tool.name} className="flex items-start gap-2">
                        <Badge variant="default" size="sm" className="mt-0.5 flex-shrink-0">{tool.name}</Badge>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{tool.desc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Engineering Calculations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    Engineering Calculations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {calculationCapabilities.map((calc) => (
                      <li key={calc} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="text-teal-500 flex-shrink-0">&#10003;</span>
                        <span>{calc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* System Integration */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                    <Database className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    System Integration &amp; APIs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {integrationCapabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="text-teal-500 flex-shrink-0">&#10003;</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Software Engineering Concepts */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                <Layers className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Software Engineering Concepts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Architecture &amp; Design Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {architecturePatterns.map((pattern) => (
                      <Badge key={pattern} variant="outline">{pattern}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Development Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {devPractices.map((practice) => (
                      <Badge key={practice} variant="outline">{practice}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business & Soft Skills */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Business &amp; Soft Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Client Collaboration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: 'Requirements Gathering & Analysis', desc: 'Understanding client workflows and pain points to design effective solutions' },
                    { title: 'Technical Communication', desc: 'Explaining complex technical concepts to non-technical stakeholders' },
                    { title: 'Project Management', desc: 'Timeline planning, milestone tracking, deliverable coordination' },
                    { title: 'Change Management', desc: 'Helping organizations adapt to new digital workflows and systems' },
                    { title: 'Training & Documentation', desc: 'User manuals, training sessions, ongoing support materials' },
                  ].map((item) => (
                    <div key={item.title}>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Problem Solving &amp; Innovation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: 'Critical Thinking', desc: 'Analyzing problems from multiple angles to find optimal solutions' },
                    { title: 'Adaptability', desc: 'Quickly learning new domains, standards, and technologies as needed' },
                    { title: 'Attention to Detail', desc: 'Ensuring accuracy in calculations, code compliance, and report generation' },
                    { title: 'Time Management', desc: 'Delivering projects on schedule while maintaining quality standards' },
                    { title: 'Continuous Learning', desc: 'Staying current with industry standards, new technologies, and best practices' },
                  ].map((item) => (
                    <div key={item.title}>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Unique Value Proposition */}
          <Card className="bg-gradient-to-br from-blue-50 via-teal-50 to-white dark:from-blue-900/20 dark:via-teal-900/20 dark:to-slate-900 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-white text-center">
                The Intersection of Domains
              </CardTitle>
              <p className="text-sm text-center text-slate-600 dark:text-slate-300">
                What makes my work effective is the combination of:
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-3">
                    <FlaskConical className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Engineering Knowledge</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Understanding of NDT methods, codes, standards, and inspection workflows
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-3">
                    <Code className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Software Expertise</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Modern development practices, architecture, and technology stack mastery
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-3">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Business Acumen</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Focus on ROI, efficiency, and real-world operational impact
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center border-t border-slate-200 dark:border-slate-700 pt-6">
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700 dark:from-teal-400 dark:to-blue-400">
                  = Solutions That Actually Work
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  Software that fits seamlessly into your workflow and delivers measurable results
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
