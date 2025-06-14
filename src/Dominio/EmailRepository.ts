import { Email } from "./Email";
import { Employee } from "./Employee";

export interface EmailRepository {
  createEmail(employee: Employee): Email;
}
