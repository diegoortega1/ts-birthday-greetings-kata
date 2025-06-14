import { OurDate } from "../Dominio/OurDate";
import { sendEmailRepository } from "../Infraestructura/SendEmailRepository";
import { createEmailRepository } from "../Infraestructura/CreateEmailRepository";
import { Employee } from "../Dominio/Employee";
import { Email } from "src/Dominio/Email";
import { EmployeeRepository } from "src/Dominio/EmployeeRepository";

export class BirthdayService {
  constructor(private employeeRepository: EmployeeRepository) {}
  sendGreetings(
    fileName: string,
    ourDate: OurDate,
    smtpHost: string,
    smtpPort: number
  ) {
    const employees: Employee[] = this.employeeRepository.getAllEmployees();

    employees.forEach((employee) => {
      if (employee.isBirthday(ourDate)) {
        const email: Email = createEmailRepository.createEmail(employee);
        sendEmailRepository(smtpHost, smtpPort, email);
      }
    });
  }
}
