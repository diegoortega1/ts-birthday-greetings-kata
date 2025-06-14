import { Email } from "./Email";

export interface SendEmailRepository {
  sendEmail(email: Email): void;
}
