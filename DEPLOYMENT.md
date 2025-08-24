# Deployment Configuration

## 📧 Email Configuration

Your contact form is now configured to send emails using Gmail. Here are the current settings and security recommendations:

### Current Configuration
- **Sender Email**: shadowbyte1998@gmail.com
- **Recipient**: Hello@ahmedseddik.tech
- **Service**: Gmail SMTP

### 🔒 Security Recommendations

For production deployment, move credentials to environment variables:

1. **Create `.env.local` file** (for local development):
```bash
GMAIL_USER=shadowbyte1998@gmail.com
GMAIL_PASS=3fMYvHQdj9NvtxiWkk4zscMLs*DKA4KEY*VqBW3*yrMzHXhvRL
```

2. **Update API route** to use environment variables:
```typescript
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});
```

3. **For Vercel deployment**, add environment variables in the dashboard:
   - Go to your project settings
   - Add `GMAIL_USER` and `GMAIL_PASS` in Environment Variables
   - Redeploy your application

### 📧 Email Features

Your contact form now includes:
- ✅ **Professional HTML email templates**
- ✅ **Automatic reply-to** (visitors can reply directly)
- ✅ **Sender information** (name, email, timestamp)
- ✅ **Source tracking** (domain, IP address)
- ✅ **Error handling** with fallback messages
- ✅ **Email validation** before sending

### 📧 Email Content

When someone contacts you, you'll receive:

**Subject**: `Portfolio Contact: [Visitor Name]`

**Content**:
- Contact details (name, email)
- Full message with formatting
- Metadata (timestamp, source domain, IP)
- Reply-to automatically set to visitor's email

### 🚀 Testing

To test the contact form:
1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out the form
4. Check your inbox at `Hello@ahmedseddik.tech`

### 🔧 Troubleshooting

If emails aren't sending:
1. **Check Gmail security**: Ensure the password is an App Password, not your regular Gmail password
2. **Enable 2FA**: Gmail requires 2-factor authentication for App Passwords
3. **Check logs**: Look at console output for error messages
4. **Verify email**: Make sure `Hello@ahmedseddik.tech` is correct

### 📊 Email Analytics

The system logs successful sends with:
- Sender name and email
- Recipient confirmation
- Timestamp
- Success/error status

This helps you track contact form usage and identify any delivery issues.

## 🌐 Domain Setup

For production use with your domain (ahmedseddik.tech):
1. **Email verification**: Some services require domain verification
2. **SPF records**: Add SPF records for better deliverability
3. **Custom sending domain**: Consider using `noreply@ahmedseddik.tech` as sender

Your contact form is now fully functional and ready for production! 🎉
