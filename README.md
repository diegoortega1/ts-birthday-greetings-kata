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

## Cómo empezar

Para arrancar deberías descargarte este código e iniciarlo:

```bash
yarn
```

Para ejecutar los tests:

```bash
yarn test
```

## Créditos

[Kata original](http://matteo.vaccari.name/blog/archives/154)
