import nodemailer from "nodemailer";
import { Email } from "src/Dominio/Email";

export class SendEmailRepository implements SendEmailRepository {
  constructor(private smtpHost: string, private smtpPort: number) {}

  async sendEmail(email: Email) {
    const message = {
      host: this.smtpHost,
      port: this.smtpPort,
      from: email.sender,
      to: [email.recipient],
      subject: email.subject,
      text: email.body,
    };

    const host = message.host;
    const port = message.port;
    const transport = nodemailer.createTransport({ host, port });

    await transport.sendMail(message);
  }
}
