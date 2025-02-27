import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const Name = formData.get("Name") as string;
    const EMAIL = formData.get("EMAIL") as string;
    const EMAIL_APP_PASSWORD = formData.get("EMAIL_APP_PASSWORD") as string;
    const BCC = formData.get("BCC") as string;
    const CC = formData.get("CC") as string;
    const RECIEVER_MAILS = JSON.parse(formData.get("RECIEVER_MAILS") as string);
    const MAIL_SUBJECT = formData.get("MAIL_SUBJECT") as string;
    const MAIL_BODY = formData.get("MAIL_BODY") as string;

    const attachments: { filename: string; content: Buffer }[] = [];
    for (const entry of formData.entries()) {
      const [key, value] = entry;
      if (key.startsWith("file") && value instanceof Blob) {
        attachments.push({
          filename: value.name,
          content: Buffer.from(await value.arrayBuffer()),
        });
      }
    }
    console.log("Request receiverdwith data:", 
      Name);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: EMAIL_APP_PASSWORD,
      },
    });

    let emailPromises = RECIEVER_MAILS.map((receiverEmail: string, i: number) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          transporter.sendMail(
            {
              from: { name: Name, address: EMAIL },
              to: receiverEmail,
              cc: CC || "",
              bcc: BCC || "",
              subject: MAIL_SUBJECT,
              html: `<div>${MAIL_BODY}</div>`,
              attachments: attachments.length ? attachments : undefined,
            },
            (error, info) => {
              if (error) {
                console.error(`Error sending email to ${receiverEmail}:`, error);
                reject(error);
              } else {
                console.log(`Email sent to ${receiverEmail}:`, info.response);
                resolve(info);
              }
            }
          );
        }, i * 10000);
      });
    });

    await Promise.all(emailPromises);

    return NextResponse.json({ message: "Emails sent successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}