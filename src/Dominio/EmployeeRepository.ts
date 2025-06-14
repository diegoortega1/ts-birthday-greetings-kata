import { Employee } from "./Employee";

export interface EmployeeRepository {
  getAllEmployees(fileName: string): Employee[];
}
