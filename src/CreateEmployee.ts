import { Employee } from "./Infraestructura/Aplicacion/Dominio/Employee";

export function createEmployee(line: string) {
  const employeeData = line.split(", ");
  const employee = new Employee(
    employeeData[1],
    employeeData[0],
    employeeData[2],
    employeeData[3]
  );
  return employee;
}
