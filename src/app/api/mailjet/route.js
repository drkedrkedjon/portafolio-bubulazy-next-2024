import Mailjet from "node-mailjet";
import { NextResponse } from "next/server"; // Must for next.js

export async function POST(req) {
  // Must be POST for post and GET for get...
  const { name, email, messages } = await req.json();

  if (!name || !email || !messages) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const mailjet = Mailjet.apiConnect(
    // Mailjet API call
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
  );

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL,
            Name: "Website Form on Bubulazy.com",
          },
          To: [
            {
              Email: process.env.MAILJET_TO_EMAIL,
              Name: "For Drkedrkedjon",
            },
          ],
          Subject: "New Contact Form Submission on Bubulazy.com",
          TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${messages}`,
        },
      ],
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
