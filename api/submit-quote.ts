import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    // Configure email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // app-specific password
      },
    });

    // Send yourself an email
    await transporter.sendMail({
      from: `"Luxury Holiday Lighting" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: '🎄 New Quote Request from Website',
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Message: ${message || 'N/A'}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}
