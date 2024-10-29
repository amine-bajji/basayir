import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import generateEmailContent from "../../../components/email-template";

export async function POST(req: NextRequest) {
  try {
    const { 
      subject, 
      firstName, 
      lastName, 
      email, 
      phone, 
      level, 
      field, 
      gender, 
      motivation 
    } = await req.json();

    // Personalize the message for the applicant
   const applicantMessage = "شكرا على اهتمامكم، لقد توصلنا بطلب انضمامكم وسوف نتواصل معكم في أقرب وقت إن شاء الله"
    // Message to be sent to your organization with applicant details
    const adminMessage = `
      A new applicant has submitted the form:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Level: ${level}
      Field: ${field}
      Gender: ${gender === "male" ? "Male" : "Female"}
      Motivation: ${motivation}
    `;

    // Set up transporter with different users based on gender
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user:  process.env.EMAIL_BOY_USER,
        pass:  process.env.EMAIL_BOY_PASS,
      },
    });

    // Email to applicant
    const applicantMailOptions = {
      from: process.env.EMAIL_BOY_USER,
      to: email,
      subject: subject || "نادي بصائر",
      text: applicantMessage,
      alternatives: [{
        contentType: "text/html",
        content: generateEmailContent(firstName, applicantMessage),
      }],
    };

    // Email to organization
    const adminMailOptions = {
      from: process.env.EMAIL_BOY_USER,
      to: gender === "male" ? process.env.EMAIL_BOY_USER : process.env.EMAIL_GIRL_USER,
      subject: `New Club Membership Application: ${firstName} ${lastName}`,
      text: adminMessage,
    };

    // Send both emails
    await transporter.sendMail(applicantMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({ error: "Error sending emails" }, { status: 500 });
  }
}
