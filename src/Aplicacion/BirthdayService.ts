import { OurDate } from "../Dominio/OurDate";
import { sendEmailRepository } from "../Infraestructura/SendEmailRepository";
import { fileEmployeesRepository } from "../Infraestructura/FileEmployeesRepository";
import { CreateEmailRepository } from "../Infraestructura/CreateEmailRepository";
import { Employee } from "../Dominio/Employee";
import { Email } from "src/Dominio/Email";

export class BirthdayService {
  sendGreetings(
    fileName: string,
    ourDate: OurDate,
    smtpHost: string,
    smtpPort: number
  ) {
    const employees: Employee[] =
      fileEmployeesRepository.getAllEmployees(fileName);

    employees.forEach((employee) => {
      if (employee.isBirthday(ourDate)) {
        const email: Email = CreateEmailRepository(employee);
        sendEmailRepository(smtpHost, smtpPort, email);
      }
    });
  }
}
