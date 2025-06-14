import { Employee } from "./Employee";

interface EmployeesRepository {
  getAllEmployees(): Employee[];
}
