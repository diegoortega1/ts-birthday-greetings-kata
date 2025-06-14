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
  sendMessage(smtpHost, smtpPort, "sender@here.com", subject, body, recipient);
}
