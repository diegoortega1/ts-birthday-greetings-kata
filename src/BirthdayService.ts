import { OurDate } from "./OurDate";
import { sendMessage } from "./SendMessage";
import { getData } from "./GetData";
import { createEmail } from "./CreateEmail";
import { createEmployee } from "./CreateEmployee";

export class BirthdayService {
  sendGreetings(
    fileName: string,
    ourDate: OurDate,
    smtpHost: string,
    smtpPort: number
  ) {
    const lines = getData(fileName);
    lines.forEach((line) => {
      const employee = createEmployee(line);
      if (employee.isBirthday(ourDate)) {
        createEmail(employee, sendMessage, smtpHost, smtpPort);
      }
    });
  }
}
