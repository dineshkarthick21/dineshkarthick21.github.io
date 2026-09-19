import { Resend } from 'resend';

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  // Configure CORS specifically for production custom domain and development
  const origin = req.headers.origin;
  const allowedOrigins = [
    'https://dineshkarthick.me',
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
  ];

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://dineshkarthick.me');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Enforce POST method only
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { firstName, lastName, email, message } = body;

    // Field validation
    if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
      return res.status(400).json({
        success: false,
        message: 'First name is required.',
      });
    }
    if (!lastName || typeof lastName !== 'string' || !lastName.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Last name is required.',
      });
    }
    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.',
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address.',
      });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message is required.',
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Server configuration error: RESEND_API_KEY is not set');
      return res.status(500).json({
        success: false,
        message: 'Failed to send email.',
      });
    }

    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const safeFirstName = escapeHtml(cleanFirstName);
    const safeLastName = escapeHtml(cleanLastName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, '<br/>');

    const resend = new Resend(apiKey);

    // Email 1 — Send Contact Message to Portfolio Owner
    const adminResult = await resend.emails.send({
      from: 'Dineshkarthick <Thankyou@dineshkarthick.me>',
      to: ['ssdineshkarthick@gmail.com'],
      replyTo: cleanEmail,
      reply_to: cleanEmail,
      subject: `New Portfolio Contact - ${cleanFirstName} ${cleanLastName}`,
      text: `New Portfolio Contact\n\nFirst Name: ${cleanFirstName}\nLast Name: ${cleanLastName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111; line-height: 1.6;">
          <h2 style="color: #ff2a2a; border-bottom: 2px solid #eee; padding-bottom: 12px; margin-bottom: 24px;">New Portfolio Contact</h2>
          <p><strong>First Name:</strong> ${safeFirstName}</p>
          <p><strong>Last Name:</strong> ${safeLastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <div style="margin-top: 24px; padding: 16px; background-color: #f9f9f9; border-left: 4px solid #ff2a2a; border-radius: 4px;">
            <strong>Message:</strong>
            <p style="margin-top: 8px; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="margin-top: 24px; font-size: 13px; color: #777;">
            <em>Note: Clicking Reply will respond directly to ${safeEmail}.</em>
          </p>
        </div>
      `,
    });

    if (adminResult.error) {
      console.error('Resend error sending to owner:', adminResult.error.message || adminResult.error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email.',
      });
    }

    // Email 2 — Confirmation to Visitor
    const visitorResult = await resend.emails.send({
      from: 'Dineshkarthick <Thankyou@dineshkarthick.me>',
      to: [cleanEmail],
      subject: 'Thank You for Contacting Me',
      text: `Hi ${cleanFirstName},\n\nThank you for taking the time to reach out through my portfolio.\n\nI’ve received your message successfully and appreciate your interest. I’ll review your message and get back to you as soon as possible.\n\nIf your message is related to a project, collaboration, internship, or professional opportunity, I’ll be happy to discuss it further.\n\nThank you again for getting in touch. I look forward to connecting with you.\n\nBest regards,\n\nDineshkarthick\nComputer Science & Business Systems\n\ndineshkarthick.me`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #222; line-height: 1.6;">
          <p>Hi ${safeFirstName},</p>
          <p>Thank you for taking the time to reach out through my portfolio.</p>
          <p>I’ve received your message successfully and appreciate your interest. I’ll review your message and get back to you as soon as possible.</p>
          <p>If your message is related to a project, collaboration, internship, or professional opportunity, I’ll be happy to discuss it further.</p>
          <p>Thank you again for getting in touch. I look forward to connecting with you.</p>
          <div style="margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">
            <p style="margin: 0; font-weight: bold; color: #111;">Dineshkarthick</p>
            <p style="margin: 2px 0 8px 0; color: #666; font-size: 14px;">Computer Science &amp; Business Systems</p>
            <p style="margin: 0;"><a href="https://dineshkarthick.me" style="color: #ff2a2a; text-decoration: none; font-weight: 500;">dineshkarthick.me</a></p>
          </div>
        </div>
      `,
    });

    if (visitorResult.error) {
      console.error('Resend error sending to visitor:', visitorResult.error.message || visitorResult.error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send confirmation email.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully.',
    });
  } catch (error) {
    console.error('Error processing contact request:', error.message || error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email.',
    });
  }
}
