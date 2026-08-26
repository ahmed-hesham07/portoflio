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

export const projects: Project[] = [
  {
    slug: 'the-nucleus',
    featured: true,
    name: 'The Nucleus',
    badge: 'Full-Stack B2B Platform · Web + Desktop + Mobile',
    businessImpact:
      'Replaces manual, paper- and spreadsheet-based inspection workflows for industrial Non-Destructive Testing (NDT) service providers with one auditable platform spanning field data capture, review, reporting, and client delivery.',
    description:
      'A production inspection-management platform built for industrial NDT companies — teams running ultrasonic, radiographic, and visual inspections on pressure vessels, pipelines, and storage tanks. It covers the full inspection lifecycle across six role-specific portals (admin, manager, reviewer, inspector, client, IT), with a web app, a Windows desktop app, and an Android tablet app so inspectors can capture data in the field, online or offline, while everyone else works from a single source of truth.',
    highlights: [
      'Offline-first field data capture on desktop and Android tablet apps, with encrypted local storage and automatic background sync back to a central server',
      'AI-assisted inspection report generation, gated behind data-completeness checks and automated fact-checking so generated narrative can never contradict the recorded data',
      'Interactive 3D asset visualization with real-time thickness/corrosion heatmaps and automated asset health scoring',
      'Full role-based workflow: job assignment, review, correction requests, approval, and client sign-off, with a tamper-evident audit log across every action',
      'White-labelled, multi-deployment architecture so the same platform can be branded and rolled out to different clients independently',
    ],
    stack: [
      'React',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Electron',
      'React Native / Expo',
      'Three.js',
      'Redis',
      'Docker',
    ],
    architecture:
      'React web portal + FastAPI/PostgreSQL backend, with Electron desktop and Android (Expo) field apps syncing offline-captured inspection data to a central server, plus an async pipeline for AI-assisted report generation',
    github: null,
    liveUrl: null,
    image: '/assets/thenucleus.png',
    color: '#1E3A5F',
    whatILearned:
      "This was the first system I built where the happy path was the easy part — most of the real engineering went into what happens when a tablet drops offline mid-inspection, two people edit the same record, or an AI-generated sentence risks contradicting the actual test data. Building for a regulated, safety-adjacent domain forced me to treat data integrity and failure handling as core features from day one, not edge cases bolted on later.",
  },
  {
    slug: 'orbit',
    featured: false,
    name: 'Orbit',
    badge: 'Full-Stack SaaS · Multi-Portal Community Platform',
    businessImpact:
      "Replaces fragmented WhatsApp groups, spreadsheets, and manual gate logs for gated resort communities with one platform covering resident billing, gate security, maintenance, and on-site commerce.",
    description:
      "A multi-portal operations platform built for gated resort and residential communities on Egypt's North Coast. Separate subdomain portals serve residents, on-site administrative staff, and a sports/booking club, each with its own tailored authentication flow and an Arabic-first, elderly-accessible resident experience. Underneath, it ties together dues billing and payment collection, gate security, maintenance requests, and on-site commerce into one system, backed by a growing back-office accounting and compliance layer.",
    highlights: [
      'Three separate subdomain portals — resident, admin operations, and a sports/booking club — each with role-appropriate authentication and a fully Arabic, elderly-accessible resident experience',
      'Real Egyptian payment gateway integrations (cards, mobile wallets, national payment rails) with automated dues tracking and instant unlock of restricted amenities the moment a payment clears',
      'A departmental access control system spanning finance, security, facilities, and sports/commercial staff, with role-specific dashboards and hardware-integrated gate scanning',
      'An interactive court-booking flow with real-time availability, flexible multi-hour selection, and equipment rentals',
      'A back-office accounting and compliance module layered on top of the operational platform, still evolving toward full financial sign-off',
    ],
    stack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Nginx'],
    architecture:
      'Next.js 14 App Router with subdomain-based routing across resident, admin, and sports portals, a PostgreSQL/Prisma backend, edge middleware for auth and access boundaries, and integrated Egyptian payment gateways',
    github: null,
    liveUrl: null,
    image: null,
    color: '#0D9488',
    whatILearned:
      'Building for three very different audiences — elderly residents, on-site operations staff, and outside visitors — on one shared backend taught me how much authentication and access design has to bend around who the user actually is, not just what data they need. The hardest part was never a single feature; it was keeping the access boundaries between those audiences airtight while still sharing one system underneath.',
  },
  {
    slug: 'inspection-digitizer',
    featured: false,
    name: 'Inspection Digitizer',
    badge: 'AI · Document Automation · Internal Tooling',
    businessImpact:
      'Replaced manual, hours-per-report digitization of complex industrial inspection PDFs into structured Excel deliverables with an AI-driven pipeline, cutting turnaround from hours to minutes per report.',
    description:
      'An internal tool built for an industrial inspection company to automatically extract and digitize complex, multi-page PDF inspection reports into the company\'s standard Excel deliverable format — replacing manual data entry with an AI-driven document pipeline that still gets independently checked before anything is trusted.',
    highlights: [
      'Single-report and large-batch processing modes, including bulk AI processing at reduced cost for hundreds of reports in one run',
      'A second, independent AI pass that cross-verifies every extraction against domain rules before it is accepted',
      'Checkpointed extraction pipeline that resumes cleanly after an interruption without re-running expensive AI processing',
      'Automatic sanitization of AI-extracted data to guarantee clean, spreadsheet-compatible output every time',
      'Local encrypted credential storage so the tool never requires exposing API keys in plaintext',
    ],
    stack: ['Python', 'Anthropic Claude API', 'openpyxl', 'SQLite'],
    architecture:
      'CLI-driven Python pipeline: AI-based PDF extraction, checkpointed intermediate storage, an independent AI cross-verification pass, and automated Excel deliverable generation',
    github: null,
    liveUrl: null,
    image: null,
    color: '#EA580C',
    whatILearned:
      "Working with LLMs on messy real-world PDFs taught me that the model call is the easy part — most of the engineering is defensive: catching truncated output, stripping invisible characters that silently corrupt a spreadsheet, and building a verification pass that doesn't just trust the first answer it gets.",
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
