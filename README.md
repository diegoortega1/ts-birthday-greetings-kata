# Birthday Greetings kata en Typescript

Esta kata está diseñada para practicar y aprender sobre Arquitectura Hexagonal (también conocida como Ports & Adapters) utilizando Typescript.

## Objetivo

El objetivo es refactorizar una aplicación que envía saludos de cumpleaños, aplicando los principios de la Arquitectura Hexagonal:

- Separar el dominio (lógica de negocio) de la infraestructura
- Definir puertos (interfaces) para las operaciones externas
- Implementar adaptadores para las diferentes tecnologías (filesystem, email, etc)
- Aplicar inversión de dependencias para desacoplar las capas
- Hacer el código más mantenible y testeable

## El problema

La aplicación lee un archivo CSV con datos de empleados y envía emails de felicitación en sus cumpleaños. El código actual mezcla responsabilidades y tiene dependencias directas con implementaciones concretas.

## Notas

- No modificar las clases `Employee` y `OurDate` ni sus tests. Sí se pueden reubicar.
- Los tests de `Acceptance.test.ts` nos ofrecen una red de seguridad para refactorizar. Deberían estar siempre en verde y se deberían hacer cambios mínimos en ellos.
- Mantener `BirthdayService` (se puede reubicar). Libertad para modificar la interfaz de `BirthdayService.sendGreetings()` si es necesario.

## Cómo empezar

Para arrancar deberías descargarte este código e iniciarlo:

```bash
yarn install
```

Para ejecutar los tests:

```bash
yarn test
```

## Créditos

[Kata original](http://matteo.vaccari.name/blog/archives/154)
