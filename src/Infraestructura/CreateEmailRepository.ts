import { Email } from "../Dominio/Email";
import { EmailRepository } from "../Dominio/EmailRepository";
import { Employee } from "../Dominio/Employee";

export const createEmailRepository: EmailRepository = {
  createEmail: (employee: Employee) => {
    const recipient = employee.getEmail();
    const body = "Happy Birthday, dear %NAME%!".replace(
      "%NAME%",
      employee.getFirstName()
    );
    const subject = "Happy Birthday!";
    const sender = "sender@here.com";
    const email: Email = { recipient, body, subject, sender };
    return email;
  },
};
