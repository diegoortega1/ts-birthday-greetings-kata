import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { Email } from "src/Dominio/Email";

export interface Message extends SMTPTransport.Options, Mail.Options {}

export async function sendEmailRepository(
  smtpHost: string,
  smtpPort: number,
  email: Email
) {
  const message = {
    host: smtpHost,
    port: smtpPort,
    from: email.sender,
    to: [email.recipient],
    subject: email.subject,
    text: email.body,
  };

  deliveryMessage(message);
}

export async function deliveryMessage({ host, port, ...msg }: Message) {
  const transport = nodemailer.createTransport({ host, port });

  await transport.sendMail(msg);
}
