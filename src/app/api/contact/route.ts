import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getPersonalInfo } from '@/utils/data';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const personalInfo = getPersonalInfo();

    // Email transport configuration (supports SMTP_* or GMAIL_*)
    const skipSend = process.env.SKIP_EMAIL_SEND === 'true';
    const debugEmails = process.env.DEBUG_EMAILS === 'true';

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    let transporter: nodemailer.Transporter;
    let fromAddress = '';

    if (smtpHost && smtpUser && smtpPass) {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort ?? 587,
        secure: smtpSecure ?? false,
        auth: { user: smtpUser, pass: smtpPass }
      });
      fromAddress = smtpUser;
    } else if (gmailUser && gmailPass) {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailPass }
      });
      fromAddress = gmailUser;
    } else {
      throw new Error('Email credentials are not configured. Set SMTP_* or GMAIL_* environment variables.');
    }

    // Create email content
    const emailSubject = `Portfolio Contact: ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; border-radius: 8px;">
        <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h2 style="color: #0ea5e9; margin-bottom: 20px; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            📧 New Contact Form Submission
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #334155; margin-bottom: 10px;">Contact Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a></p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #334155; margin-bottom: 10px;">Message:</h3>
            <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #0ea5e9; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 15px; margin-top: 20px;">
            <p style="margin: 0; font-size: 12px; color: #64748b;">
              <strong>Sent from:</strong> ${personalInfo.domain}<br>
              <strong>Time:</strong> ${new Date().toLocaleString()}<br>
              <strong>IP:</strong> ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}
            </p>
          </div>
        </div>
      </div>
    `;

    const emailText = `
New contact form submission from your portfolio website:

Name: ${name}
Email: ${email}
Message:
${message}

---
Sent from: ${personalInfo.domain}
Time: ${new Date().toLocaleString()}
    `.trim();

    // Send email FROM your Gmail TO your primary email
    // The visitor's email is set as replyTo for easy responses
    const mailOptions = {
      from: `"${personalInfo.shortName} Portfolio" <${fromAddress}>`,
      to: personalInfo.emailPrimary, // This sends TO: Hello@ahmedseddik.tech
      replyTo: email, // This allows you to reply directly to the visitor
      subject: emailSubject,
      text: emailText,
      html: emailHtml
    };

    if (skipSend) {
      if (debugEmails) {
        console.log('SKIP_EMAIL_SEND=true - Email not sent. Preview:', {
          to: mailOptions.to,
          from: mailOptions.from,
          replyTo: mailOptions.replyTo,
          subject: mailOptions.subject
        });
      }
    } else {
      await transporter.sendMail(mailOptions);
    }

    console.log('Contact form email sent successfully:', {
      visitorEmail: email,
      visitorName: name,
      sentFrom: fromAddress,
      sentTo: personalInfo.emailPrimary,
      subject: emailSubject,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
