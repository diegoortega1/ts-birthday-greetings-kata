import { OurDate } from "../Dominio/OurDate";
import { sendEmailRepository } from "../Infraestructura/SendEmailRepository";
import { fileEmployeesRepository } from "../Infraestructura/FileEmployeesRepository";
import { createEmail } from "../CreateEmail";
import { Employee } from "../Dominio/Employee";

export class BirthdayService {
  sendGreetings(
    fileName: string,
    ourDate: OurDate,
    smtpHost: string,
    smtpPort: number
  ) {
    const employees: Employee[] = fileEmployeesRepository(fileName);

    employees.forEach((employee) => {
      if (employee.isBirthday(ourDate)) {
        createEmail(employee, sendEmailRepository, smtpHost, smtpPort);
      }
    });
  }
}
