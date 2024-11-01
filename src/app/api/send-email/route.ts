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
      motivation,
      membershipType
    } = await req.json();

    // Personalize the message for the applicant
    const applicantMessage = "شكرا على اهتمامكم، لقد توصلنا بطلب انضمامكم وسوف نتواصل معكم في أقرب وقت إن شاء الله";
    
    // Message to be sent to your organization with applicant details in Arabic
    const adminMessage = `
      <div dir="rtl" style="text-align: right;">
        تم إرسال طلب انضمام جديد للنادي:<br/>
        الاسم: ${firstName} ${lastName}<br/>
        البريد الإلكتروني: ${email}<br/>
        الهاتف: ${phone}<br/>
        المستوى: ${level}<br/>
        التخصص: ${field}<br/>
        نوعية العضوية: ${membershipType === "clubMember" ? "عضو النادي" : "عضو المكتب المسير"}<br/>
        الجنس: ${gender === "male" ? "ذكر" : "أنثى"}<br/>
        الدافع: ${motivation}
      </div>
    `;
    



    // Set up transporter with different users based on gender
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: gender === "male" ? process.env.EMAIL_BOY_USER : process.env.EMAIL_GIRL_USER,
        pass: gender === "male" ? process.env.EMAIL_BOY_PASS : process.env.EMAIL_GIRL_PASS,
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

      const adminMailOptions = {
      from: gender === "male" ? process.env.EMAIL_BOY_USER : process.env.EMAIL_GIRL_USER,
      to: gender === "male" ? process.env.EMAIL_BOY_USER : process.env.EMAIL_GIRL_USER,
      subject: `طلب انضمام جديد للنادي: ${firstName} ${lastName}`,
      html: adminMessage,
    };

    // Send both emails
    await transporter.sendMail(applicantMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({ message: "تم إرسال البريد الإلكتروني بنجاح" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء إرسال البريد الإلكتروني" }, { status: 500 });
  }
}
