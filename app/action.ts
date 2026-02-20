"use server";
import { Resend } from "resend";
import { EmailTemplate } from "./Components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["davidadeniyi269@gmail.com"], // Make sure this is YOUR email
      subject: `Inquiry: ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    return { success: true };
  } catch (error) {
    console.error("Action Error:", error);
    return { success: false };
  }
}