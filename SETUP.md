# Portfolio Setup Guide

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🔧 Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Analytics Integration (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Form Handling (optional)
FORM_ENDPOINT=your_form_endpoint_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📊 Analytics Integration

To enable Google Analytics:

1. Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in your environment
2. Get your tracking ID from [Google Analytics](https://analytics.google.com)
3. Configure tracking events and goals

## 📝 Content Updates

### Personal Information
Edit `src/data/portfolio.json` to update:
- Personal details
- Projects
- Experience
- Skills
- Education

### Project Images
Add project images to `public/assets/`:
- `vessel-guard.png`
- `business-analysis.png`
- `consultancy-website.png`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Configure custom domain: `ahemdseddik.tech`

### Manual Deployment
```bash
npm run build
npm run export
```

## 📄 Pages Structure

- `/` - Home page with hero, highlights, projects, skills
- `/projects` - Projects listing with filters
- `/projects/[slug]` - Individual project pages
- `/experience` - Professional timeline
- `/about` - Personal bio and values
- `/contact` - Contact form and social links

## 🎨 Customization

### Colors
The design uses:
- Primary: `#0EA5E9` (sky-500)
- Secondary: `#A78BFA` (violet-400)
- Modify in `src/app/globals.css` and Tailwind classes

### Fonts
- Body: Inter
- Code: JetBrains Mono
- Configure in `src/app/layout.tsx`

## 📧 Contact Form

The contact form is a client-side component. To enable server-side processing:
1. Set up a form handling service (Formspree, Netlify Forms, etc.)
2. Update `FORM_ENDPOINT` in environment variables
3. Modify `src/components/ContactForm.tsx` to use the endpoint

## 🔍 SEO

- Automatic sitemap generation at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Dynamic Open Graph images at `/og`
- Structured data and metadata for all pages
