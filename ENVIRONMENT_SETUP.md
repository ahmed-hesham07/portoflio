# Environment Configuration Guide

## 📁 Files Overview

Your portfolio uses environment variables for secure configuration. Here's how to set them up:

## 🔧 Setup Steps

### 1. Create Local Environment File

Copy the example environment file:

```bash
# Copy the example file
cp env.example .env.local

# Or manually create .env.local with the following content:
```

### 2. Configure `.env.local`

Create `.env.local` in your project root with:

```bash
# Email Configuration (Required for contact form)
GMAIL_USER=shadowbyte1998@gmail.com
GMAIL_PASS=3fMYvHQdj9NvtxiWkk4zscMLs*DKA4KEY*VqBW3*yrMzHXhvRL

# Web3 Configuration (Optional)
NEXT_PUBLIC_WEB3_ENABLED=false

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=

# Development Settings
DEBUG_EMAILS=true
SKIP_EMAIL_SEND=false
```

### 3. File Structure

```
portoflio/
├── .env.local          # Your actual environment variables (not in git)
├── env.example         # Example template (committed to git)
├── .gitignore          # Contains .env.local (already configured)
└── ...
```

## 🚀 Deployment

### For Vercel:

1. **Go to your Vercel project dashboard**
2. **Navigate to Settings → Environment Variables**
3. **Add these variables:**

```
GMAIL_USER = shadowbyte1998@gmail.com
GMAIL_PASS = 3fMYvHQdj9NvtxiWkk4zscMLs*DKA4KEY*VqBW3*yrMzHXhvRL
NEXT_PUBLIC_WEB3_ENABLED = false
```

### For Other Platforms:

**Netlify:**
- Site settings → Environment variables

**Railway:**
- Variables tab in your project

**DigitalOcean App Platform:**
- App settings → Environment

## 📧 Email Configuration Details

### Current Setup:
- **SMTP Server**: shadowbyte1998@gmail.com (your Gmail credentials for sending)
- **FROM**: Ahmed Seddik Portfolio <shadowbyte1998@gmail.com>
- **TO**: ahmed.hesham0762@gmail.com (your primary email - where you receive messages)
- **REPLY-TO**: visitor's email (so you can reply directly)

### How It Works:
1. Visitor fills out contact form on your website
2. API uses your Gmail credentials (shadowbyte1998@gmail.com) as SMTP server
3. Email is sent FROM your Gmail TO your primary email (ahmed.hesham0762@gmail.com)
4. You receive the message in your ahmed.hesham0762@gmail.com inbox
5. Reply-to is set to visitor's email for easy responses

### Email Flow Diagram:
```
Visitor's Browser → Your Website API → Your Gmail SMTP → Your Primary Email
    (form)           (nodemailer)        (sender)         (recipient)
```

## 🔒 Security Notes

### Environment Variables:
- ✅ **Never commit** `.env.local` to git (already in .gitignore)
- ✅ **Use environment variables** for all sensitive data
- ✅ **Different configs** for development/production

### Gmail Security:
- ✅ **App Password**: Your password is a Gmail App Password (more secure)
- ✅ **2FA Required**: Gmail requires 2-factor authentication for App Passwords
- ✅ **Limited scope**: Only used for sending emails

## 🧪 Testing

### Local Development:
```bash
# Start development server
npm run dev

# Test contact form at:
http://localhost:3000/contact
```

### Check Email Logs:
Monitor console output for email send confirmations:
```
Contact form email sent successfully: {
  from: "visitor@example.com",
  name: "Visitor Name", 
  to: "ahmed.hesham0762@gmail.com",
  timestamp: "2025-01-01T12:00:00.000Z"
}
```

## 🔧 Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Verify Gmail App Password is correct
   - Ensure 2FA is enabled on Gmail account

2. **"Environment variable not found"**
   - Check `.env.local` file exists
   - Restart development server after changes

3. **"Email not received"**
   - Check spam folder
   - Verify `ahmed.hesham0762@gmail.com` is correct
   - Look at console logs for errors

4. **"Module not found"**
   - Run `npm install` to ensure all dependencies are installed

### Debug Mode:
Enable detailed logging by setting:
```bash
DEBUG_EMAILS=true
```

## 📊 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `GMAIL_USER` | Yes | Gmail account for sending emails |
| `GMAIL_PASS` | Yes | Gmail App Password |
| `NEXT_PUBLIC_WEB3_ENABLED` | No | Enable/disable Web3 features |
| `DEBUG_EMAILS` | No | Enable detailed email logging |
| `SKIP_EMAIL_SEND` | No | Skip actual email sending (dev only) |

Your contact form is now fully configured and ready for production! 🎉
