# 🚀 Vercel Deployment Guide

Complete instructions for deploying your Ahmed Seddik portfolio to Vercel with custom domain.

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Vercel account (sign up at [vercel.com](https://vercel.com))
- ✅ Domain ownership (`ahmedseddik.tech`)
- ✅ Portfolio code pushed to GitHub

## 🎯 Quick Deployment (5 minutes)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio deployment"

# Create GitHub repository and push
git remote add origin https://github.com/ahmed-hesham07/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Visit [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "New Project"**
3. **Import your repository** (`ahmed-hesham07/portfolio`)
4. **Configure build settings:**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install`

5. **Add Environment Variables:**
   ```
   GMAIL_USER=shadowbyte1998@gmail.com
   GMAIL_PASS=3fMYvHQdj9NvtxiWkk4zscMLs*DKA4KEY*VqBW3*yrMzHXhvRL
   NEXT_PUBLIC_WEB3_ENABLED=false
   ```

6. **Click "Deploy"** 🚀

## 🌐 Custom Domain Setup

### Step 1: Add Domain in Vercel

1. Go to your project dashboard
2. Click **"Domains"** tab
3. Add domain: `ahmedseddik.tech`
4. Add subdomain: `www.ahmedseddik.tech`

### Step 2: Configure DNS Records

Add these records in your domain registrar (Namecheap, GoDaddy, etc.):

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Alternative (if A record doesn't work):**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Enable HTTPS

Vercel automatically provisions SSL certificates. Wait 10-15 minutes for:
- ✅ `https://ahmedseddik.tech`
- ✅ `https://www.ahmedseddik.tech`

## ⚙️ Environment Variables Setup

### Required Variables

In Vercel Dashboard → Settings → Environment Variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| `GMAIL_USER` | `shadowbyte1998@gmail.com` | Production |
| `GMAIL_PASS` | `3fMYvHQdj9NvtxiWkk4zscMLs*DKA4KEY*VqBW3*yrMzHXhvRL` | Production |
| `NEXT_PUBLIC_WEB3_ENABLED` | `false` | All |

### Optional Variables

| Variable | Value | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Google Analytics |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | `your_project_id` | Web3 (if enabled) |

## 🔄 Automatic Deployments

### Branch Configuration

- **Production**: `main` branch → `ahmedseddik.tech`
- **Preview**: All other branches → `portfolio-git-branch.vercel.app`

### Deployment Triggers

✅ **Automatic deployment on:**
- Push to `main` branch
- Pull request creation
- Pull request updates

## 📊 Post-Deployment Checklist

### Test All Features

- [ ] **Homepage** loads correctly
- [ ] **Projects** page with filters
- [ ] **Individual project** pages
- [ ] **About** page with roadmap
- [ ] **Contact form** sends emails
- [ ] **Experience** timeline
- [ ] **Skills** page
- [ ] **CV download** works
- [ ] **Responsive design** on mobile
- [ ] **SEO meta tags** present

### Verify Email Integration

1. Submit contact form
2. Check email arrives at `Hello@ahmedseddik.tech`
3. Verify reply-to works

### Performance Check

Run Lighthouse audit:
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

## 🛠️ Troubleshooting

### Common Issues

**1. Build Fails**
```bash
# Check locally first
npm run build
npm run lint
```

**2. Environment Variables Not Working**
- Redeploy after adding variables
- Check variable names (case-sensitive)
- Verify in build logs

**3. Domain Not Connecting**
- Wait 24-48 hours for DNS propagation
- Use [DNS Checker](https://dnschecker.org/)
- Try cloudflare DNS: `1.1.1.1`

**4. Contact Form Not Working**
- Check Gmail credentials in env vars
- Verify SMTP settings
- Check Vercel function logs

### Debug Commands

```bash
# Check build locally
npm run build

# Test production build
npm run start

# Check types
npx tsc --noEmit

# Lint code
npm run lint
```

## 📈 Monitoring & Analytics

### Vercel Analytics

Enable in project settings:
- **Web Analytics**: Track page views, performance
- **Speed Insights**: Monitor Core Web Vitals

### Custom Analytics

Add Google Analytics (optional):
```javascript
// In layout.tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    strategy="afterInteractive"
  />
)}
```

## 🚀 Advanced Features

### Preview Deployments

Every branch gets a preview URL:
```
https://portfolio-git-feature-branch.vercel.app
```

### Custom Build Commands

If needed, customize in `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

### Edge Functions

Your API routes automatically become edge functions for global performance.

## 📞 Support

### Vercel Support
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)

### Portfolio Issues
- Check build logs in Vercel dashboard
- Review environment variables
- Test locally first: `npm run build && npm run start`

---

## 🎉 You're Live!

Once deployed, your portfolio will be available at:
- **Primary**: https://ahmedseddik.tech
- **WWW**: https://www.ahmedseddik.tech
- **Vercel**: https://your-project.vercel.app

**Next Steps:**
1. Share your portfolio URL
2. Add it to your LinkedIn/GitHub
3. Submit to search engines
4. Monitor analytics and performance

---

*Need help? Check the troubleshooting section or contact support.*