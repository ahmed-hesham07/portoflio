// ─── Types ──────────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  featured: boolean;
  name: string;
  badge: string;
  businessImpact: string;
  description: string;
  highlights: string[];
  stack: string[];
  architecture: string;
  github: string | null;
  liveUrl: string | null;
  image: string | null;
  color: string;
  whatILearned: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

// ─── Personal Info ───────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Ahmed Seddik',
  initials: 'AH',
  title: 'Software Engineer | B2B Platforms | Applied ML',
  location: 'Alexandria, Egypt',
  email: 'hello@ahmedseddik.dev',
  phone: '+20 103 312 0762',
  website: 'ahmedseddik.dev',
  github: 'https://github.com/ahmed-hesham07',
  linkedin: 'https://www.linkedin.com/in/ahmedseddik1/',
  cv: '/ahmed-hesham-cv.pdf',
  tagline: 'I turn hard problems into software that ships.',
  heroShort:
    'Full-stack software engineer building production B2B platforms across web, desktop, and mobile — with applied ML where it adds real leverage. I ship software that works in the field, not just the demo. Open to remote roles and freelance client projects worldwide.',
  roles: [
    'Software Engineer',
    'B2B Platforms',
    'Backend · Frontend · Desktop · Mobile',
    'Applied ML',
  ],
  availableForWork: true,
};

// ─── About ───────────────────────────────────────────────────────────────────

export const aboutParagraphs = [
  'I\'m a software engineer based in Alexandria, Egypt. Since April 2024 I\'ve been building B2B platforms and production software that actually gets used — replacing manual spreadsheet workflows for industrial clients, computer-vision pipelines over large image datasets, and full-stack systems across backend, frontend, desktop, and mobile. I care about the gap between "it works in the demo" and "it works in the field."',
  "My work sits at the intersection of platform architecture and applied ML. I'm comfortable training a U-Net segmentation model in the morning and wiring up a PostgreSQL sync queue in the afternoon. I don't over-specialise early — I'd rather understand a problem fully, then build whatever it takes to solve it.",
  "Outside of code: Computer Engineering student at AASTMT. I work with clients across Egypt and the GCC and I'm open to remote roles with international teams.",
];

export const aboutStats = [
  { label: 'Building production systems', value: '+3 yrs' },
  { label: 'Client footprint', value: 'Egypt & GCC' },
];

export const factCards = [
  {
    emoji: '🏆',
    title: 'National RoboCup Champion',
    subtitle: '2019',
  },
  {
    emoji: '🧠',
    title: '5,000+ images',
    subtitle: 'trained a computer-vision model on',
  },
  {
    emoji: '🌍',
    title: 'Egypt → GCC → World',
    subtitle: 'client footprint',
  },
  {
    emoji: '⚙️',
    title: '130+ unit tests',
    subtitle: 'hardening client platforms',
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI & Machine Learning',
    skills: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'OpenCV',
      'Hugging Face',
      'LangChain',
      'LightGBM',
      'XGBoost',
      'Pandas',
      'NumPy',
      'Computer Vision',
      'NLP',
      'Deep Learning',
      'LLMs',
    ],
  },
  {
    category: 'Full-Stack & Backend',
    skills: [
      'Python',
      'TypeScript',
      'FastAPI',
      'Next.js 14',
      'React',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'SQLAlchemy',
      'Dexie.js',
      'REST APIs',
      'JWT Auth',
      'Kysely',
    ],
  },
  {
    category: 'Mobile & Desktop',
    skills: [
      'Android (Kotlin + Jetpack Compose)',
      'PWA / Offline-first',
      'Service Workers',
      'JavaFX',
      'Tauri',
      'Electron',
      '.NET Windows Forms',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      'AWS (EC2 · S3 · Lambda · RDS · VPC · IAM · CloudWatch)',
      'Docker',
      'GitHub Actions',
      'Vercel',
      'Nginx',
      'Linux',
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [];

// ─── Experience ──────────────────────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    role: 'Data Engineer Intern',
    company: 'ACCUR DIGITAL',
    type: 'Remote',
    period: 'Jan – Jul 2025',
    bullets: [
      'Trained U-Net + ResNet34 corrosion segmentation model on 5,000+ images — 90% validation accuracy, 5-level severity classification; integrated into live industrial maintenance platform.',
      'Authored ETL pipelines over 1M+ log entries; applied TF-IDF clustering to 10,000+ maintenance reports — anomaly detection 20% faster, scheduling accuracy up 25%.',
      'Delivered LightGBM/XGBoost failure-prediction models (R² > 0.85) into production analytics.',
    ],
  },
  {
    role: 'Cloud Architect Intern',
    company: 'National Telecommunication Institute (NTI)',
    type: 'Remote',
    period: 'Aug – Sep 2025',
    bullets: [
      'Designed and secured AWS environments (EC2, RDS, S3, Lambda, IAM, VPC, CloudWatch) applying high-availability and cost-optimisation practices.',
      'Completed AWS Solutions Architect Associate certification track.',
    ],
  },
  {
    role: 'Freelance Software Developer & Consultant',
    company: 'Self-employed',
    type: 'Alexandria, Egypt & GCC',
    period: 'Apr 2024 – Present',
    bullets: [
      'Built and delivered an end-to-end web + desktop software platform for paying industrial clients — architecture, delivery, and on-site rollout.',
      'Shipped a multi-role web portal plus offline-capable desktop companion apps with automated report generation, backed by 130+ unit tests.',
      'Provided scope, timeline, and pricing advisory to an industrial client for a facility planning engagement.',
    ],
  },
];

export const education: EducationItem = {
  degree: 'B.Eng., Computer Engineering',
  school: 'Arab Academy for Science, Technology & Maritime Transport (AASTMT)',
  location: 'Alexandria, Egypt',
  period: '',
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contactCopy = {
  heading: "Let's build something.",
  subCopy:
    "Whether you're a company looking for an engineer who ships, or a business that needs a digital solution built properly — I'm open to conversations. No fluff, just work.",
  recruiterLabel: 'For companies & recruiters',
  recruiterAvailability: 'Available for remote & onsite roles · Open to relocation',
  clientLabel: 'For clients & projects',
  clientFootprint: 'Egypt · GCC · Remote · Worldwide',
};
