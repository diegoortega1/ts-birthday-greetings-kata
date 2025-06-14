import { Employee } from "./Employee";

export interface EmployeesRepository {
  getAllEmployees(): Employee[];
}
