import { Employee } from "./Employee";

export interface EmployeeRepository {
  getAllEmployees(): Employee[];
}
