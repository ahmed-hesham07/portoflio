# Email Integration Guide

Your contact form is now set up with a Next.js API route that processes form submissions. Here are several options to actually send emails to your inbox:

## 🚀 Quick Setup Options

### Option 1: Resend (Recommended)
Simple, developer-friendly email API with excellent Next.js support.

1. **Sign up**: https://resend.com
2. **Install**: `npm install resend`
3. **Add to `.env.local`**:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```
4. **Update API route**:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   await resend.emails.send({
     from: 'contact@yourdomain.com',
     to: 'Hello@ahmedseddik.tech',
     subject: emailSubject,
     text: emailBody,
   });
   ```

### Option 2: EmailJS (Client-side)
Free tier available, works directly from the browser.

1. **Sign up**: https://emailjs.com
2. **Install**: `npm install @emailjs/browser`
3. **Configure template** in EmailJS dashboard
4. **Update ContactForm.tsx**:
   ```typescript
   import emailjs from '@emailjs/browser';
   
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
   ```

### Option 3: Nodemailer with Gmail
Use your Gmail account to send emails.

1. **Install**: `npm install nodemailer`
2. **Setup App Password** in Gmail
3. **Add to `.env.local`**:
   ```
   GMAIL_USER=your.email@gmail.com
   GMAIL_PASS=your_app_password
   ```

### Option 4: Formspree (Simplest)
No backend code needed, just point the form to Formspree.

1. **Sign up**: https://formspree.io
2. **Update form action**:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🔧 Implementation Examples

### Current Setup (Development)
The form currently:
- ✅ Validates input fields
- ✅ Shows loading states
- ✅ Provides success/error feedback
- ✅ Logs submissions to console
- ✅ Creates mailto fallback

### Production-Ready with Resend
Replace the API route content with:

```typescript
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { getPersonalInfo } from '@/utils/data';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    
    // Validation...
    
    const personalInfo = getPersonalInfo();
    
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <noreply@${personalInfo.domain}>`,
      to: [personalInfo.emailPrimary],
      subject: `New Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from: ${personalInfo.domain}</small></p>
      `,
      replyTo: email,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    });
    
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
```

## 🔒 Security Considerations

1. **API Key Security**: Never expose API keys in client-side code
2. **Rate Limiting**: Add rate limiting to prevent spam
3. **Input Validation**: Sanitize all inputs (already implemented)
4. **CORS**: Configure properly for production

## 📊 Analytics & Monitoring

Consider adding:
- Email delivery tracking
- Form submission analytics
- Error monitoring (Sentry)
- Success rate monitoring

## 🚀 Deployment Notes

For Vercel deployment:
1. Add environment variables in Vercel dashboard
2. Domain verification for email sending
3. Check serverless function limits

Your contact form is now ready for production! Choose the email service that best fits your needs and budget.
