import { OurDate } from "../src/Dominio/OurDate";
import { BirthdayService } from "../src/Aplicacion/BirthdayService";
import { messagesSent, startMailhog, stopMailHog } from "./mailhog";
import flushPromises from "flush-promises";
import { FileEmployeesRepository } from "src/Infraestructura/FileEmployeesRepository";
import { createEmailRepository } from "src/Infraestructura/CreateEmailRepository";
import { SendEmailRepository } from "src/Infraestructura/SendEmailRepository";

describe("Acceptance", () => {
  const SMTP_PORT = 1025;
  const SMTP_HOST = "127.0.0.1";
  let service: BirthdayService;

  beforeEach(async () => {
    await startMailhog();
    const employeeRepository = new FileEmployeesRepository(
      "../resources/employee_data.txt"
    );

    const sendEmailRepository = new SendEmailRepository(SMTP_HOST, SMTP_PORT);
    service = new BirthdayService(
      employeeRepository,
      createEmailRepository,
      sendEmailRepository
    );
  });

  afterEach(async () => {
    await stopMailHog();
  });

  it("base scenario", async () => {
    service.sendGreetings(new OurDate("2008/10/08"));
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
    service.sendGreetings(new OurDate("2008/01/01"));
    await flushPromises();

    const messages = await messagesSent();
    expect(messages.length).toEqual(0);
  });
});
