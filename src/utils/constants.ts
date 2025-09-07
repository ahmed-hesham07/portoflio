// Site Configuration
export const SITE_CONFIG = {
  name: 'Ahmed Hesham',
  title: 'Ahmed Hesham | Data Scientist, Software Engineer, Robotic Engineer',
  description: 'Portfolio of Ahmed Hesham - Building intelligent engineering solutions that merge AI, software, and industry standards.',
  url: 'https://ahmed-hesham.dev',
  author: {
    name: 'Ahmed Hesham',
    email: 'ahmed.hesham.ds@gmail.com',
    github: 'https://github.com/ahmed-hesham07',
    linkedin: 'https://linkedin.com/in/ahmed-hesham07',
  },
  social: {
    github: 'ahmed-hesham07',
    linkedin: 'ahmed-hesham07',
    email: 'ahmed.hesham.ds@gmail.com',
  },
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX', // Replace with your GA ID
  },
};

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  verySlow: 1.0,
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Theme Colors
export const THEME_COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    500: '#6b7280',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
] as const;

// Project Categories
export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'All Projects', icon: '🚀' },
  { id: 'web', name: 'Web Development', icon: '🌐' },
  { id: 'ai', name: 'AI & ML', icon: '🤖' },
  { id: 'engineering', name: 'Engineering', icon: '⚙️' },
  { id: 'desktop', name: 'Desktop Apps', icon: '💻' },
] as const;

export const PERSONAL_INFO = {
  name: 'Ahmed Hesham Ismail Seddik',
  shortName: 'Ahmed Seddik',
  title: 'Software Engineer & Data Scientist',
  tagline: 'Building intelligent engineering software at the intersection of AI, cloud, and industry standards.',
  location: 'Alexandria, Egypt',
  email: 'ahmed.hesham0762@gmail.com',
  domain: 'ahmedseddik.dev',
  social: {
    github: 'https://github.com/ahmed-hesham07',
    linkedin: 'https://www.linkedin.com/in/ahmedhesham612006'
  }
} as const;

export const CONTACT_INFO = {
  name: 'Ahmed Hesham Ismail Seddik',
  title: 'Software Engineer & Data Scientist',
  location: 'Alexandria, Egypt',
  email: 'ahmed.hesham0762@gmail.com',
  phone: '+20 (103) 312-0762',
  social: {
    github: 'https://github.com/ahmed-hesham07',
    linkedin: 'https://www.linkedin.com/in/ahmedhesham612006'
  }
} as const;

// Contact Methods
export const CONTACT_METHODS = [
  {
    name: 'Email',
    value: 'ahmed.hesham0762@gmail.com',
    link: 'mailto:ahmed.hesham0762@gmail.com',
    icon: '📧',
    color: 'blue',
    description: 'Best for detailed discussions and project inquiries',
  },
  {
    name: 'LinkedIn',
    value: 'ahmed-hesham07',
    link: 'https://linkedin.com/in/ahmed-hesham07',
    icon: '💼',
    color: 'blue',
    description: 'Professional networking and career opportunities',
  },
  {
    name: 'GitHub',
    value: 'ahmed-hesham07',
    link: 'https://github.com/ahmed-hesham07',
    icon: '💻',
    color: 'gray',
    description: 'Explore my open source projects and contributions',
  },
] as const;

// Regex Patterns
export const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  preferences: 'portfolio-preferences',
  contactForm: 'portfolio-contact-form',
} as const;
