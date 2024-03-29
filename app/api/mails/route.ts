import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New email from portfolio",
      html: ` <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>`,
    });
    return new Response("Mail Sent", { status: 201 });
  } catch (error) {
    return new Response("Failed to send mail", { status: 500 });
  }
}

const email = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PASS;
const receiverEmail = process.env.NODEMAILER_RECEIVER_EMAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

const mailOptions = {
  from: email,
  to: receiverEmail,
};
