import { Email } from "src/Dominio/Email";
import { Employee } from "src/Dominio/Employee";

export function createEmailRepository(employee: Employee) {
  const recipient = employee.getEmail();
  const body = "Happy Birthday, dear %NAME%!".replace(
    "%NAME%",
    employee.getFirstName()
  );
  const subject = "Happy Birthday!";
  const sender = "sender@here.com";
  const email: Email = { recipient, body, subject, sender };
  return email;
}
