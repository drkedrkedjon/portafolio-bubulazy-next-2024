import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { name, email, mensaje, sender, recipient } = await req.json();

  const msg = {
    to: recipient, // Dynamic recipient
    from: sender, // Dynamic sender
    subject: `Contact Form Submission from ${name}`,
    text: `You have a new contact form submission from:
           Name: ${name}
           Email: ${email}
           Message: ${mensaje}`,
    html: `<p>You have a new contact form submission from:</p>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${mensaje}</p>`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
