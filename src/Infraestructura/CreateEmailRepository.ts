import { Employee } from "src/Dominio/Employee";

interface Email {
  recipient: string;
  body: string;
  subject: string;
}

export function createEmailRepository(employee: Employee) {
  const recipient = employee.getEmail();
  const body = "Happy Birthday, dear %NAME%!".replace(
    "%NAME%",
    employee.getFirstName()
  );
  const subject = "Happy Birthday!";
  const email: Email = { recipient, body, subject };
  return email;
}
