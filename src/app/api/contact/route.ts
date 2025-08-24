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

    // Create Gmail transporter using YOUR Gmail credentials as SMTP server
    // This will send emails FROM your Gmail TO your primary email
    const gmailUser = process.env.GMAIL_USER || 'shadowbyte1998@gmail.com';
    const gmailPass = process.env.GMAIL_PASS || '3fMYvHQdj9NvtxiWkk4zscMLs*DKA4KEY*VqBW3*yrMzHXhvRL';
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    });

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
      from: `"${personalInfo.shortName} Portfolio" <${gmailUser}>`,
      to: personalInfo.emailPrimary, // This sends TO: Hello@ahmedseddik.tech
      replyTo: email, // This allows you to reply directly to the visitor
      subject: emailSubject,
      text: emailText,
      html: emailHtml
    };

    await transporter.sendMail(mailOptions);

    console.log('Contact form email sent successfully:', {
      visitorEmail: email,
      visitorName: name,
      sentFrom: gmailUser,
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
