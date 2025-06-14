import { Email } from "./Dominio/Email";
import { Employee } from "./Dominio/Employee";

export function createEmail(
  employee: Employee,
  sendMessage: any,
  smtpHost: string,
  smtpPort: number
) {
  const recipient = employee.getEmail();
  const body = "Happy Birthday, dear %NAME%!".replace(
    "%NAME%",
    employee.getFirstName()
  );
  const subject = "Happy Birthday!";
  const sender = "sender@here.com";
  const email: Email = { recipient, body, subject, sender };
  sendMessage(smtpHost, smtpPort, email);
}
