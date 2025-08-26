# 🚀 Quick Deploy to Vercel

**Fast track: Get your portfolio live in 10 minutes!**

## ✅ Pre-flight Check

Make sure your portfolio builds locally:
```bash
npm run deploy:prepare
```
✅ If this passes, you're ready to deploy!

## 🚀 Option 1: Automated Script (Recommended)

### Windows:
```powershell
npm run deploy:windows
```

### Mac/Linux:
```bash
npm run deploy:unix
```

## 🚀 Option 2: Manual Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import: `ahmed-hesham07/portfolio`
3. **Add Environment Variables:**
   ```
   GMAIL_USER=shadowbyte1998@gmail.com
GMAIL_PASS=3fMYvHQdj9NvtxiWkk4zscMLs*DKA4KEY*VqBW3*yrMzHXhvRL
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. **Deploy!** 🎉

### 3. Add Custom Domain
1. **Domains** tab → Add `ahmedseddik.tech`
2. **Update DNS** at your registrar:
   ```
   Type: A, Name: @, Value: 76.76.19.61
   Type: CNAME, Name: www, Value: cname.vercel-dns.com
   ```

## 🎯 You're Live!

Your portfolio will be available at:
- **https://ahmedseddik.tech** (main domain)
- **https://www.ahmedseddik.tech** (www redirect)
- **https://portfolio-git-main.vercel.app** (vercel subdomain)

## 🧪 Test Your Deployment

- [ ] **Homepage** loads
- [ ] **Contact form** sends emails to `ahmed.hesham0762@gmail.com`
- [ ] **Mobile responsive**
- [ ] **Fast loading** (Lighthouse score ≥95)

## 🆘 Need Help?

- **Build fails?** → Check `DEPLOYMENT.md` troubleshooting section
- **Contact form not working?** → Verify environment variables
- **Domain issues?** → Wait 24h for DNS propagation

---

**🎉 Congratulations! Your portfolio is now live and professional!**
