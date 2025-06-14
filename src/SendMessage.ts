import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export interface Message extends SMTPTransport.Options, Mail.Options {}

export async function sendMessage(
  smtpHost: string,
  smtpPort: number,
  sender: string,
  subject: string,
  body: string,
  recipient: string
) {
  const message = {
    host: smtpHost,
    port: smtpPort,
    from: sender,
    to: [recipient],
    subject,
    text: body,
  };

  deliveryMessage(message);
}

export async function deliveryMessage({ host, port, ...msg }: Message) {
  const transport = nodemailer.createTransport({ host, port });

  await transport.sendMail(msg);
}
