import { OurDate } from "../Dominio/OurDate";
import { Employee } from "../Dominio/Employee";
import { Email } from "src/Dominio/Email";
import { EmployeeRepository } from "src/Dominio/EmployeeRepository";
import { EmailRepository } from "src/Dominio/EmailRepository";
import { SendEmailRepository } from "src/Dominio/SendEmailRepository";

export class BirthdayService {
  constructor(
    private employeeRepository: EmployeeRepository,
    private emailRepository: EmailRepository,
    private sendEmailRepository: SendEmailRepository
  ) {}

  sendGreetings(ourDate: OurDate) {
    const employees: Employee[] = this.employeeRepository.getAllEmployees();

    employees.forEach((employee) => {
      if (employee.isBirthday(ourDate)) {
        const email: Email = this.emailRepository.createEmail(employee);
        this.sendEmailRepository.sendEmail(email);
      }
    });
  }
}
