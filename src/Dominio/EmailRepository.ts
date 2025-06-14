import { Email } from "./Email";

export interface EmailRepository {
  createEmail(): Email;
}
