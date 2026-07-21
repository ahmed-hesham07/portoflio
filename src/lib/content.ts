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
    emoji: '💪',
    title: 'Gym trainer',
    subtitle: 'who ships TypeScript at 2am',
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

export const projects: Project[] = [
  {
    slug: 'nucleus',
    featured: true,
    name: 'Nucleus',
    badge: 'Full-Stack B2B Platform · Web + Desktop',
    businessImpact:
      'Replaced manual, spreadsheet-driven operational workflows for paying industrial clients with a single web + desktop platform.',
    description:
      'A production web-and-desktop platform built for paying industrial clients. A React/TypeScript web portal backed by FastAPI and PostgreSQL, paired with Electron and WPF desktop companion apps for offline-capable field data capture that syncs to a central database.',
    highlights: [
      'Role-based access with multi-tenant team isolation across separate dashboards',
      'Offline-first desktop capture with background sync to a central PostgreSQL database',
      'Structured multi-step workflow assignments and system-generated credentials',
      'Automated DOCX/PDF report generation pipeline',
      'Hardened with 130+ unit tests and a full end-to-end stabilization pass',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Electron', 'C# / WPF', 'Docker'],
    architecture:
      'React/TypeScript web portal + FastAPI backend + PostgreSQL, with Electron and WPF desktop companion apps syncing to a central database',
    github: null,
    liveUrl: null,
    image: null,
    color: '#6366F1',
    whatILearned:
      "Building for offline-first field use forced me to treat sync, conflict handling, and data integrity as first-class problems — the hard part wasn't the features, it was guaranteeing no data loss across unreliable connections while keeping web and desktop in agreement.",
  },
  {
    slug: 'vessel-guard',
    featured: false,
    name: 'Vessel Guard',
    badge: 'Full-Stack · Engineering SaaS',
    businessImpact:
      'Replaced error-prone spreadsheet workflows for engineering integrity calculations with a full-stack SaaS platform.',
    description:
      'Full-stack engineering SaaS with domain calculation engines, real-time collaboration, report generation, and role-based access, built for industrial engineering teams.',
    highlights: [
      'Real-time collaboration, PDF report generation, JWT/RBAC auth',
      'Redis caching, Celery async tasks, Alembic migrations',
      'Deployable to AWS ECS/Fargate or Azure Container Apps',
      'Cut manual engineering analysis time by 40%',
    ],
    stack: [
      'Next.js 14',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
      'SQLAlchemy',
      'Celery',
    ],
    architecture:
      'Turborepo monorepo — Next.js 14 frontend + FastAPI backend + PostgreSQL + Redis, containerised',
    github: null,
    liveUrl: null,
    image: '/assets/vessel-guard.jpg',
    color: '#059669',
    whatILearned:
      "Engineering domain software forced me to think about correctness differently — a wrong calculation doesn't throw an error, it produces a number that could get someone hurt. That changes how you think about validation and what 'done' means.",
  },
  {
    slug: 'corrosion-annotator',
    featured: false,
    name: 'Corrosion Annotator',
    badge: 'AI · Computer Vision · Deep Learning',
    businessImpact:
      'Automated corrosion detection for industrial inspection — replacing manual visual assessment with a hybrid AI pipeline.',
    description:
      'Hybrid segmentation system combining a pre-trained U-Net (ResNet34 backbone) with HSV classical computer vision, refined via CRF post-processing. Trained on a 3 GB multi-part annotated industrial dataset.',
    highlights: [
      'Pixel-level corrosion segmentation — ensemble of deep learning + classical CV',
      '5-level severity classification (None / Low / Medium / Severe / Critical)',
      'CRF boundary refinement for sharp mask edges',
      'Applicable to pipelines, storage tanks, bridges, ship hulls, offshore platforms',
      'Reproducible batch-processing workflow',
    ],
    stack: [
      'TensorFlow',
      'Keras',
      'U-Net',
      'ResNet34',
      'OpenCV',
      'NumPy',
      'Python',
      'pydensecrf',
    ],
    architecture:
      'U-Net with ResNet34 backbone (ImageNet pre-trained) + HSV thresholding ensemble + CRF post-processing',
    github: 'https://github.com/ahmed-hesham07/corrosion-annotator',
    liveUrl: null,
    image: null,
    color: '#F59E0B',
    whatILearned:
      "The gap between a model that performs well on a validation set and one that works on real industrial photos is enormous. Lighting, rust color variance, image angle — the classical CV layer existed entirely to handle what the neural network couldn't generalise to.",
  },
  {
    slug: 'email-security-backend',
    featured: false,
    name: 'Email Security Backend',
    badge: 'AI · NLP · Security · API',
    businessImpact:
      'Production email threat detection system that automatically quarantines phishing and malware before they reach the inbox.',
    description:
      'Multi-signal threat scoring API monitoring IMAP inboxes. Combines SPF/DKIM/DMARC header analysis, URL reputation (VirusTotal, Google Safe Browsing, URLHaus), attachment hash scanning, and a calibrated NLP phishing classifier.',
    highlights: [
      'NLP phishing classifier: TF-IDF + LinearSVC, calibrated with sigmoid — trained on labelled email datasets',
      'Weighted threat score → auto-tag / quarantine / delete pipeline',
      'VirusTotal + Google Safe Browsing + URLHaus URL reputation checks',
      'Token-bucket rate limiter for free-tier API compliance',
      'REST API with Prometheus metrics endpoint — deployed on Render + PostgreSQL',
    ],
    stack: [
      'FastAPI',
      'PostgreSQL',
      'Scikit-learn',
      'pydantic-settings',
      'VirusTotal API',
      'Google Safe Browsing',
      'Python',
      'pino',
    ],
    architecture:
      'FastAPI REST API + IMAP polling loop + PostgreSQL + multi-signal threat scoring pipeline',
    github: 'https://github.com/ahmed-hesham07/email-security-backend',
    liveUrl: null,
    image: null,
    color: '#DC2626',
    whatILearned:
      'Threat scoring is inherently probabilistic, and the cost of a false positive (legitimate email deleted) is different from the cost of a false negative (phishing email delivered). Tuning the classifier meant thinking carefully about asymmetric error costs — not just accuracy.',
  },
];

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
