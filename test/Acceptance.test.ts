import { OurDate } from "../src/Dominio/OurDate";
import { BirthdayService } from "../src/Aplicacion/BirthdayService";
import { messagesSent, startMailhog, stopMailHog } from "./mailhog";
import flushPromises from "flush-promises";
import { fileEmployeesRepository } from "src/Infraestructura/FileEmployeesRepository";
import { createEmailRepository } from "src/Infraestructura/CreateEmailRepository";

describe("Acceptance", () => {
  const SMTP_PORT = 1025;
  const SMTP_URL = "127.0.0.1";
  let service: BirthdayService;

  beforeEach(async () => {
    await startMailhog();
    const employeeRepository = new fileEmployeesRepository(
      "../resources/employee_data.txt"
    );

    service = new BirthdayService(employeeRepository, createEmailRepository);
  });

  afterEach(async () => {
    await stopMailHog();
  });

  it("base scenario", async () => {
    service.sendGreetings(new OurDate("2008/10/08"), SMTP_URL, SMTP_PORT);
    await flushPromises();

    const messages = await messagesSent();
    expect(messages.length).toEqual(1);
    const message = messages[0];
    expect(message.Content.Body).toEqual("Happy Birthday, dear John!");
    expect(message.Content.Headers.Subject[0]).toEqual("Happy Birthday!");
    const tos = message.Content.Headers.To;
    expect(tos.length).toEqual(1);
    expect(tos[0]).toEqual("john.doe@foobar.com");
  });

  it("will not send emails when nobodys birthday", async () => {
    service.sendGreetings(new OurDate("2008/01/01"), SMTP_URL, SMTP_PORT);
    await flushPromises();

    const messages = await messagesSent();
    expect(messages.length).toEqual(0);
  });
});
