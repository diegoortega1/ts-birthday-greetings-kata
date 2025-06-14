import { OurDate } from "../OurDate";
import { sendMessage } from "../Infraestructura/SendMessage";
import { employeesRepository } from "../Infraestructura/EmployeesRepository";
import { createEmail } from "../CreateEmail";
import { Employee } from "../Dominio/Employee";

export class BirthdayService {
  sendGreetings(
    fileName: string,
    ourDate: OurDate,
    smtpHost: string,
    smtpPort: number
  ) {
    const employees: Employee[] = employeesRepository(fileName);

    employees.forEach((employee) => {
      if (employee.isBirthday(ourDate)) {
        createEmail(employee, sendMessage, smtpHost, smtpPort);
      }
    });
  }
}
