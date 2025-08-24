export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  location: string;
  emailPrimary: string;
  emailContact: string;
  domain: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface Skills {
  programmingAndData: string[];
  frameworksTools: string[];
  concepts: string[];
  soft: string[];
}

export interface Project {
  slug: string;
  name: string;
  year: number;
  description: string;
  tech: string[];
  features: string[];
  impact: string;
  links: {
    repo: string | null;
    demo: string | null;
  };
  image: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  graduation: string;
}

export interface CVData {
  objective: string;
  highlights: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skills;
  projects: Project[];
  experience: ExperienceItem[];
  education: Education[];
  achievements: string[];
  cv: CVData;
}
