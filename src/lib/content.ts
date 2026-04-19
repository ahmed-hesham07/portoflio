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
  title: 'AI/ML Engineer & Full-Stack Developer',
  location: 'Alexandria, Egypt',
  email: 'hello@ahmedseddik.dev',
  phone: '+20 103 312 0762',
  website: 'ahmedseddik.dev',
  github: 'https://github.com/ahmed-hesham07',
  linkedin: 'https://linkedin.com/in/ahmedhesham612006',
  cv: '/ahmed-hesham-cv.pdf',
  tagline: 'I turn hard problems into software that works.',
  heroShort:
    'Computer Engineering student at AASTMT Alexandria — building production AI systems, full-stack platforms, and offline-first apps that solve real problems in real conditions.',
  roles: ['AI/ML Engineer', 'Full-Stack Developer', 'Problem Solver'],
  availableForWork: true,
};

// ─── About ───────────────────────────────────────────────────────────────────

export const aboutParagraphs = [
  "I'm a 20-year-old software developer and AI engineer based in Alexandria, Egypt. I build things that actually get used — a POS system running in Egyptian shops with no internet, an engineering SaaS replacing spreadsheets at oil & gas inspection firms, a corrosion detection pipeline running on industrial image datasets. I care about the gap between 'it works in the demo' and 'it works in the field.'",
  "My work sits at the intersection of AI/ML and full-stack engineering. I'm comfortable training a U-Net segmentation model in the morning and wiring up a PostgreSQL sync queue in the afternoon. I don't believe in over-specialising early — I'd rather understand a problem fully and then build whatever it takes to solve it.",
  'Outside of code: Computer Engineering student at AASTMT, gym trainer (5-day hypertrophy split, yes I track everything), and the oldest son in a family that taught me early what it means to be reliable. I work with clients in Egypt and the GCC region and I\'m open to remote roles with international teams.',
];

export const aboutStats = [
  { label: 'Building production systems', value: '2+ years' },
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
    subtitle: 'trained corrosion model on',
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
    slug: 'dukkan',
    featured: true,
    name: 'Dukkan — دكان',
    badge: 'Full-Stack · Offline-First · PWA',
    businessImpact:
      'A production POS system that keeps Egyptian shops running during power cuts and internet outages.',
    description:
      'Multi-tenant point-of-sale and business operations platform built for small shops in Egypt and emerging markets. Runs fully offline on cheap Android tablets — every transaction hits IndexedDB instantly, then syncs to PostgreSQL in the background via an exponential-backoff queue with dead-letter handling and idempotent client UUIDs.',
    highlights: [
      'Zero data loss on flaky connections — offline-first with full sync conflict resolution',
      'Orders, inventory with profit-margin tracking, customer credit ledger, returns & refunds, printable invoices, KPI dashboard',
      'Full Arabic RTL + English i18n via i18next — language switch without page reload',
      'Installable as a PWA — works on any Android device',
      'Multi-tenant with JWT auth — one deployment serves multiple businesses',
    ],
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Dexie.js',
      'Docker',
      'Nginx',
      'i18next',
    ],
    architecture:
      'npm workspaces monorepo (shared types), React SPA → Nginx, Express REST API, PostgreSQL 16, Docker Compose',
    github: 'https://github.com/ahmed-hesham07/dukkan',
    liveUrl: null,
    image: null,
    color: '#2563EB',
    whatILearned:
      "Building offline-first taught me that sync is a distributed systems problem disguised as a UX problem. The hard part wasn't IndexedDB — it was idempotency, dead-letter handling, and making sure a shop owner never sees a duplicate order because the network dropped at exactly the wrong moment.",
  },
  {
    slug: 'vessel-guard',
    featured: false,
    name: 'Vessel Guard',
    badge: 'Full-Stack · Engineering SaaS',
    businessImpact:
      'Replaced manual spreadsheet workflows for pressure vessel integrity analysis at oil & gas inspection firms.',
    description:
      'Full-stack engineering SaaS platform implementing ASME B31.3, ASME VIII, and API 579 fitness-for-service calculations. Built for asset integrity managers and inspection engineers in the GCC region.',
    highlights: [
      'ASME B31.3/VIII and API 579 FFS calculation engines — replaces error-prone Excel models',
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
    github: 'https://github.com/ahmed-hesham07/Vessel-Guard',
    liveUrl: null,
    image: null,
    color: '#059669',
    whatILearned:
      "Engineering domain software forced me to think about correctness differently. A wrong ASME calculation doesn't throw an error — it just produces a number that could get someone hurt. That changes how you think about validation, testing, and what 'done' means.",
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
    role: 'Freelance Developer & NDT Software Consultant',
    company: 'Self-employed',
    type: 'Alexandria, Egypt & GCC',
    period: '2024 – Present',
    bullets: [
      'Founded ETCH (Enterprise Tracking & Control Hub) — an NDT digital management platform deployed at MASSA Consulting Ltd.',
      'Built and shipped a full web portal (Inspection Hub) and desktop app (FieldPro) covering all 13 NDT methods.',
      'Engaged by ENPPI for SUMED facility inspection planning — scope, timeline, and pricing advisory.',
    ],
  },
];

export const education: EducationItem = {
  degree: 'B.Eng., Computer Engineering',
  school: 'Arab Academy for Science, Technology & Maritime Transport (AASTMT)',
  location: 'Alexandria, Egypt',
  period: '2023 – 2027 (Expected)',
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contactCopy = {
  heading: "Let's build something.",
  subCopy:
    "Whether you're a company looking for an engineer who ships, or a business that needs a digital solution built properly — I'm open to conversations. No fluff, just work.",
  recruiterLabel: 'For companies & recruiters',
  recruiterAvailability: 'Available for remote roles · Open to relocation',
  clientLabel: 'For clients & projects',
  clientFootprint: 'Egypt · GCC · Remote · Worldwide',
};
