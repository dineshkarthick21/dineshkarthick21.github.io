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
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Server error: RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { firstName, lastName, email, message } = body;

    // Server-side validation
    if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
      return res.status(400).json({ error: 'First name is required' });
    }
    if (!lastName || typeof lastName !== 'string' || !lastName.trim()) {
      return res.status(400).json({ error: 'Last name is required' });
    }
    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ error: 'Email is required' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'A valid email address is required' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
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

    // 1. Email to Dinesh (Portfolio Owner)
    const emailToOwner = resend.emails.send({
      from: 'Dineshkarthick <Thankyou@dineshkarthick.me>',
      to: ['ssdineshkarthick@gmail.com'],
      replyTo: cleanEmail,
      subject: `New Portfolio Contact - ${cleanFirstName} ${cleanLastName}`,
      text: `New Portfolio Contact\n\nFirst Name: ${cleanFirstName}\n\nLast Name: ${cleanLastName}\n\nEmail: ${cleanEmail}\n\nMessage:\n\n${cleanMessage}`,
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

    // 2. Thank you email to Visitor
    const emailToVisitor = resend.emails.send({
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

    const [adminResult, visitorResult] = await Promise.all([emailToOwner, emailToVisitor]);

    if (adminResult.error) {
      console.error('Resend error sending to owner:', adminResult.error.message || adminResult.error);
      return res.status(500).json({ error: 'Failed to send notification email' });
    }

    if (visitorResult.error) {
      console.error('Resend error sending to visitor:', visitorResult.error.message || visitorResult.error);
      return res.status(500).json({ error: 'Failed to send confirmation email' });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. A confirmation email has also been sent to you.',
    });
  } catch (error) {
    console.error('Error processing contact request:', error.message || error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
