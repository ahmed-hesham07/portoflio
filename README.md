# Ahmed Hesham - Portfolio Website

![Portfolio Preview](./public/portfolio-preview.png)

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my work as a Data Scientist, Software Engineer, and Robotic Engineer.

## 🚀 Features

### 🎨 Design & UX
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Glass Morphism**: Modern design elements with backdrop blur effects

### 💻 Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS 4**: Utility-first CSS framework for rapid styling
- **Performance Optimized**: Fast loading times and optimized images
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Accessibility**: WCAG compliant with proper ARIA labels

### 🔧 Interactive Components
- **Project Showcase**: Filterable project gallery with detailed modals
- **Skills Visualization**: Animated skill bars with tooltips
- **Experience Timeline**: Interactive experience cards with detailed views
- **Contact Form**: Validated contact form with real-time feedback
- **Web3 Integration**: Mock wallet connection for exclusive content

### 📱 Modern Features
- **Progressive Web App**: Installable PWA capabilities
- **Analytics Integration**: Vercel Analytics and Speed Insights
- **Sitemap Generation**: Automatic XML sitemap creation
- **Testing Setup**: Jest and React Testing Library configuration
- **Code Quality**: ESLint, Prettier, and TypeScript strict mode

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Emojis and custom SVGs

### Development Tools
- **Package Manager**: npm
- **Code Formatting**: Prettier
- **Linting**: ESLint with Next.js config
- **Testing**: Jest + React Testing Library
- **Type Checking**: TypeScript strict mode

### Deployment & Analytics
- **Hosting**: Vercel (recommended)
- **Analytics**: Vercel Analytics
- **Performance**: Vercel Speed Insights
- **SEO**: next-sitemap for XML sitemaps

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmed-hesham07/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── images/            # Images and icons
│   └── files/             # Downloadable files (CV, etc.)
├── src/                   # Source code
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── About.tsx      # About section
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Experience.tsx # Experience timeline
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Layout.tsx     # Layout wrapper
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Skills.tsx     # Skills visualization
│   │   └── Web3Section.tsx # Web3 integration
│   ├── hooks/             # Custom React hooks
│   │   ├── useIntersectionObserver.ts
│   │   ├── useLocalStorage.ts
│   │   └── useScrollProgress.ts
│   └── utils/             # Utility functions
│       ├── animations.ts  # Framer Motion variants
│       └── constants.ts   # App constants
├── .prettierrc.json       # Prettier configuration
├── jest.config.js         # Jest configuration
├── jest.setup.js          # Jest setup file
├── next-sitemap.config.js # Sitemap configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Personal Information
Update the personal information in `src/utils/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your Description',
  url: 'https://your-domain.com',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
  // ... more config
};
```

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Animations**: Customize animations in `src/utils/animations.ts`

### Content
- **Projects**: Update project data in `src/components/Projects.tsx`
- **Experience**: Modify experience data in `src/components/Experience.tsx`
- **Skills**: Update skills data in `src/components/Skills.tsx`

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Utilities
npm run clean        # Clean build artifacts
npm run analyze      # Analyze bundle size
npm run sitemap      # Generate sitemap
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Import your repository to [Vercel](https://vercel.com)
   - Vercel will automatically detect Next.js and configure build settings

2. **Environment Variables**
   - Set up any required environment variables in Vercel dashboard
   - Add your domain to `SITE_URL` for sitemap generation

3. **Deploy**
   - Push to your main branch to trigger deployment
   - Vercel will build and deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- **Netlify**: Use the Next.js build command
- **AWS Amplify**: Configure for Next.js applications
- **Railway**: Direct deployment from GitHub
- **DigitalOcean App Platform**: Node.js application

## 🔧 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Automatic font loading optimization
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Built-in bundle analyzer for optimization
- **Caching**: Proper cache headers for static assets

## 📊 SEO Features

- **Meta Tags**: Comprehensive meta tag configuration
- **Open Graph**: Social media preview optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD for better search visibility
- **XML Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 🧪 Testing

The project includes a comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Testing Structure
- **Unit Tests**: Component and utility function tests
- **Integration Tests**: Multi-component interaction tests
- **Setup**: Configured with React Testing Library and Jest

## 🔒 Security

- **Content Security Policy**: Configured for security
- **HTTPS**: Enforced in production
- **XSS Protection**: Built-in Next.js protections
- **CSRF Protection**: Proper token handling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ahmed-hesham07/portfolio/issues).

## 📞 Contact

- **Email**: ahmed.hesham.ds@gmail.com
- **LinkedIn**: [ahmed-hesham07](https://linkedin.com/in/ahmed-hesham07)
- **GitHub**: [ahmed-hesham07](https://github.com/ahmed-hesham07)
- **Website**: [ahmed-hesham.dev](https://ahmed-hesham.dev)

---

⭐ **Star this repository if you found it helpful!**