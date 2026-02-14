export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  description?: string;
  location: string;
  emailPrimary: string;
  emailContact: string;
  phone?: string;
  phoneNote?: string;
  responseTime?: string;
  domain: string;
  website?: string;
  social: {
    github: string;
    linkedin: string;
  };
  availability?: string;
}

export interface Stats {
  projectsCompleted?: string;
  clients?: string;
  yearsExperience?: string;
  successRate?: string;
  responseTime?: string;
  typicalImplementation?: string;
  timeSavings?: string;
  productivityIncrease?: string;
}

export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  icon: string;
  sectors: string[];
}

export interface NDTMethod {
  code: string;
  name: string;
  description: string;
}

export interface CodeStandard {
  code: string;
  name: string;
  description?: string;
}

export interface CodeStandardCategory {
  category: string;
  standards: CodeStandard[];
}

export interface Skills {
  domainKnowledge?: {
    ndtMethods: string[];
    ffsExpertise: string[];
    codes: string[];
    workflows: string[];
  };
  programming?: {
    expert: string[];
    advanced: string[];
  };
  frameworks?: {
    frontend: string[];
    backend: string[];
    desktop: string[];
    mobile: string[];
    databases: string[];
  };
  aiml?: {
    frameworks: string[];
    libraries: string[];
    applications: string[];
  };
  specialized?: {
    reporting: string[];
    calculations: string[];
    integration: string[];
  };
  soft?: string[];
  // Legacy support
  programmingAndData?: string[];
  frameworksTools?: string[];
  concepts?: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline?: string;
  year: number;
  status: 'completed' | 'in-progress';
  industry?: string[];
  projectType?: string[];
  description: string;
  shortDescription?: string;
  tech: string[];
  features: string[];
  problemsSolved: string[];
  businessValue: {
    efficiency?: string;
    quality?: string;
    roi?: string;
    scalability?: string;
    clientSatisfaction?: string;
    training?: string;
    auditTrail?: string;
    consistency?: string;
    documentation?: string;
    decisionQuality?: string;
    costSavings?: string;
    riskMitigation?: string;
  };
  impact: string;
  links: {
    repo: string | null;
    demo?: string | null;
    live?: string | null;
  };
  image: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type?: string;
  description?: string;
  highlights?: string[];
  details: string[];
  achievements?: string[];
  industriesServed?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  graduation: string;
  status?: string;
  relevantCoursework?: string[];
}

export interface Achievement {
  title: string;
  year: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  industry: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CVData {
  objective: string;
  highlights: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats?: Stats;
  valuePropositions?: ValueProposition[];
  industries?: Industry[];
  ndtMethods?: NDTMethod[];
  codesStandards?: CodeStandardCategory[];
  skills: Skills;
  projects: Project[];
  experience: ExperienceItem[];
  education: Education[];
  achievements: Achievement[] | string[];
  testimonials?: Testimonial[];
  faqs?: FAQ[];
  cv: CVData;
}
