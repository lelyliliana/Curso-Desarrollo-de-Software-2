# Desarrollo de Software II

Repositorio de ejemplos prácticos y recursos de apoyo del curso **Desarrollo de Software II**.

Los contenidos están organizados de manera progresiva para comprender el desarrollo de una aplicación web desde sus fundamentos hasta la construcción de interfaces, desarrollo Front End, desarrollo Back End, persistencia, pruebas, integración con servicios externos y conceptos básicos de despliegue en la nube.

El repositorio complementa el material académico del curso mediante ejemplos:

* pequeños;
* ejecutables;
* progresivos;
* documentados paso a paso;
* orientados a la práctica;
* desarrollados con tecnologías actuales.

---

# Propósito del repositorio

El propósito de este repositorio es facilitar la comprensión práctica de los principales componentes que intervienen en el desarrollo de aplicaciones web.

La ruta general del curso puede representarse así:

```text
Fundamentos web
      │
      ▼
Interfaces web
      │
      ▼
React
Front End
      │
      ▼
Spring Boot
Back End
      │
      ▼
Base de datos
      │
      ▼
Servicios externos
      │
      ▼
Despliegue y nube
```

---

# Objetivo general

Al finalizar el recorrido por los recursos del repositorio, el estudiante estará en capacidad de comprender y aplicar los elementos principales involucrados en una aplicación web moderna, incluyendo:

* comunicación cliente-servidor;
* HTTP;
* Request y Response;
* JSON;
* HTML;
* CSS;
* JavaScript;
* DOM;
* React;
* consumo de APIs;
* pruebas del Front End;
* Spring Boot;
* APIs REST;
* persistencia;
* JPA;
* pruebas del Back End;
* consumo de servicios externos;
* conceptos básicos de computación en la nube;
* preparación de aplicaciones para despliegue.

---

# Tecnologías utilizadas

Durante el recorrido se utilizan progresivamente:

## Fundamentos web

```text
Node.js
HTTP
JSON
XML
```

## Interfaces web

```text
HTML
CSS
JavaScript
DOM
```

## Front End

```text
React
Vite
JSX
Fetch API
Vitest
React Testing Library
```

## Back End

```text
Java 21
Maven
Spring Boot
Spring Web
Jakarta Validation
Spring Data JPA
Hibernate
H2
MySQL
RestClient
JUnit 5
Mockito
MockMvc
```

## Despliegue

```text
Git
GitHub
npm
Maven
Variables de entorno
Servicios cloud
```

---

# Organización del repositorio

```text
Curso-Desarrollo-de-Software-2/
│
├── README.md
│
├── unidad1-fundamentos-web/
│
├── unidad2-interfaces-web/
│
├── unidad3-react/
│
├── unidad4-backend/
│
└── unidad5-computacion-nube/
```

Cada unidad contiene:

* un `README.md` general;
* ejemplos organizados por tema;
* instrucciones de ejecución;
* explicación de los conceptos;
* resultados esperados;
* retos;
* preguntas de análisis.

---

# Unidad 1 - Fundamentos de programación web

[Ir a la Unidad 1](./unidad1-fundamentos-web)

Esta unidad permite comprender cómo funciona la comunicación web antes de utilizar frameworks o librerías.

## Contenidos

```text
Cliente
Servidor
URI
URL
URN
DNS
HTTP
Request
Response
Métodos HTTP
Códigos de estado
JSON
XML
Arquitecturas web
```

---

## Ejemplos

### Ejemplo 01 - Comunicación cliente-servidor

[Consultar ejemplo](./unidad1-fundamentos-web/ejemplo01-cliente-servidor)

Permite observar directamente:

```text
Cliente
   │
   │ Request
   ▼
Servidor
   │
   │ Response
   ▼
Cliente
```

Se utiliza un servidor pequeño desarrollado con Node.js.

---

### Ejemplo 02 - Métodos HTTP

[Consultar ejemplo](./unidad1-fundamentos-web/ejemplo02-http)

Se trabajan:

```text
GET
POST
PUT
PATCH
DELETE
OPTIONS
```

además de:

```text
Headers
Body
códigos HTTP
CRUD
JSON
```

---

### Ejemplo 03 - JSON y XML

[Consultar ejemplo](./unidad1-fundamentos-web/ejemplo03-json-xml)

Permite comparar dos formatos utilizados para representar información.

```text
JSON
│
└── clave - valor
```

```text
XML
│
└── etiquetas
```

---

### Ejemplo 04 - Arquitecturas web

[Consultar ejemplo](./unidad1-fundamentos-web/ejemplo04-arquitecturas-web)

Se analizan conceptualmente:

```text
Legacy
Widgets
SPA
Microservicios
Serverless
```

---

# Unidad 2 - Introducción a las interfaces web

[Ir a la Unidad 2](./unidad2-interfaces-web)

Esta unidad aborda la construcción de interfaces web y su comportamiento mediante JavaScript.

---

## Contenidos

```text
HTML
CSS
Maquetación
Diseño responsivo
Accesibilidad
DOM
Eventos
JavaScript moderno
```

---

## Ejemplo 01 - HTML y CSS

[Consultar ejemplo](./unidad2-interfaces-web/ejemplo01-html-css)

Los fundamentos de HTML y CSS ya se encuentran documentados en el repositorio del curso **Lenguaje de Programación II**.

Para evitar duplicar código, esta carpeta funciona como puente hacia esos recursos.

### HTML

[Consultar ejemplos de HTML](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/html)

### CSS

[Consultar ejemplos de CSS](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/css)

---

## Ejemplo 02 - Diseño responsivo y accesibilidad

[Consultar ejemplo](./unidad2-interfaces-web/ejemplo02-responsive-accesibilidad)

Permite trabajar:

```text
meta viewport
Flexbox
media queries
HTML semántico
alt
label
navegación con teclado
foco visible
```

---

## Ejemplo 03 - Manipulación del DOM

[Consultar ejemplo](./unidad2-interfaces-web/ejemplo03-dom)

JavaScript modifica dinámicamente la interfaz mediante:

```text
document
getElementById()
querySelector()
createElement()
appendChild()
textContent
addEventListener()
```

---

## Ejemplo 04 - JavaScript moderno

[Consultar ejemplo](./unidad2-interfaces-web/ejemplo04-javascript-moderno)

Contiene ejemplos independientes sobre:

```text
let y const
template literals
arrow functions
for...of
destructuring
rest
spread
clases
herencia
Map
Set
```

---

# Recursos complementarios de JavaScript

Los fundamentos generales de JavaScript también pueden consultarse en:

[JavaScript - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/javascript)

---

# Unidad 3 - Desarrollo Front End con React

[Ir a la Unidad 3](./unidad3-react)

Esta unidad utiliza React para construir interfaces mediante componentes reutilizables.

---

## Contenidos

```text
React
Vite
JSX
Componentes
Props
Estado
Eventos
Hooks
useState
useEffect
Listas
Formularios
APIs
Pruebas
```

---

# Reutilización del módulo React

Los fundamentos completos de React ya se encuentran desarrollados mediante laboratorios progresivos en:

[React - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react)

Por esta razón no se duplican esos proyectos.

---

## Ejemplo 01 - Fundamentos de React

[Consultar ejemplo](./unidad3-react/ejemplo01-fundamentos-react)

La ruta de aprendizaje reutilizada incluye:

```text
Vite
  │
  ▼
JSX
  │
  ▼
Componentes
  │
  ▼
Props
  │
  ▼
Estado y eventos
  │
  ▼
Listas
  │
  ▼
Formularios
  │
  ▼
useEffect
  │
  ▼
Consumo de API
  │
  ▼
Publicación
```

---

## Ejemplo 02 - Consumo de API

[Consultar ejemplo](./unidad3-react/ejemplo02-consumo-api)

Relaciona:

```text
REACT
   │
   │ HTTP
   ▼
API
   │
   │ JSON
   ▼
REACT
```

Se reutiliza el laboratorio correspondiente del repositorio de Lenguaje de Programación II.

---

## Ejemplo 03 - Pruebas de componentes React

[Consultar ejemplo](./unidad3-react/ejemplo03-pruebas-react)

Este ejemplo sí es propio de Desarrollo de Software II.

Utiliza:

```text
Vitest
React Testing Library
user-event
jsdom
```

y permite comprobar automáticamente que un componente:

```text
renderiza
inicia correctamente
responde a eventos
actualiza su estado
```

---

# Unidad 4 - Desarrollo Back End

[Ir a la Unidad 4](./unidad4-backend)

Esta unidad introduce el desarrollo del lado del servidor utilizando Spring Boot.

---

# Reutilización de Lenguaje de Programación III

Los ejemplos de Spring Boot, persistencia y pruebas ya se encuentran desarrollados de manera progresiva en:

[Curso Lenguaje de Programación III](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3)

Por esta razón no se duplica el mismo código en este repositorio.

---

## Ejemplo 01 - Fundamentos de Spring Boot

[Consultar ejemplo](./unidad4-backend/ejemplo01-fundamentos-spring)

Se utilizan los ejemplos de:

[Unidad 1 - Estructura de una API Web](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad1)

Incluye:

```text
Spring Boot
API REST
GET
POST
PathVariable
RequestParam
RequestBody
DTO
ResponseEntity
validación
manejo de errores
Service
inyección de dependencias
```

---

## Ejemplo 02 - Persistencia con JPA

[Consultar ejemplo](./unidad4-backend/ejemplo02-persistencia-jpa)

Utiliza recursos de:

[Unidad 2 - Comunicación con servicios externos](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad2)

Incluye:

```text
JPA
Hibernate
Spring Data JPA
CRUD
Repository
H2
MySQL
consultas derivadas
relaciones entre entidades
```

---

## Ejemplo 03 - Pruebas del Back End

[Consultar ejemplo](./unidad4-backend/ejemplo03-pruebas-backend)

Se trabajan:

```text
JUnit 5
Mockito
MockMvc
```

para probar:

```text
Service
Controller
códigos HTTP
respuestas JSON
```

---

## Ejemplo 04 - Consumo de API externa

[Consultar ejemplo](./unidad4-backend/ejemplo04-consumo-api-externa)

Permite comprender cómo Spring Boot puede actuar también como cliente HTTP.

```text
SPRING BOOT
     │
     ▼
RESTCLIENT
     │
     ▼
API EXTERNA
```

---

# Arquitectura alcanzada en la Unidad 4

```text
REACT
Front End
   │
   │ HTTP / JSON
   ▼
SPRING BOOT
Back End
   │
   ├───────────────┐
   ▼               ▼
BASE DE DATOS   API EXTERNA
```

---

# Unidad 5 - Introducción a la computación en la nube

[Ir a la Unidad 5](./unidad5-computacion-nube)

Esta unidad relaciona el desarrollo realizado durante el curso con conceptos de infraestructura, servicios cloud y despliegue.

---

## Contenidos

```text
Cloud computing
Nube pública
Nube privada
Nube híbrida
IaaS
PaaS
SaaS
Despliegue
Producción
Variables de entorno
Hosting
```

---

## Ejemplo 01 - Modelos de nube

[Consultar ejemplo](./unidad5-computacion-nube/ejemplo01-modelos-nube)

Permite comparar:

```text
TIPOS DE NUBE

Pública
Privada
Híbrida
```

y:

```text
MODELOS DE SERVICIO

IaaS
PaaS
SaaS
```

---

## Ejemplo 02 - Despliegue

[Consultar ejemplo](./unidad5-computacion-nube/ejemplo02-despliegue)

Permite relacionar el desarrollo local:

```text
React
localhost:5173

Spring Boot
localhost:8080
```

con un posible entorno de producción:

```text
https://mi-app.com

https://api.mi-app.com
```

---

# Preparar React para producción

Se utiliza:

```bash
npm run build
```

y posteriormente:

```bash
npm run preview
```

---

# Preparar Spring Boot

Una aplicación Maven puede empaquetarse mediante:

```bash
mvn package
```

y ejecutarse mediante un archivo JAR.

---

# Ruta completa del curso

El recorrido general puede representarse:

```text
UNIDAD 1
Fundamentos web
      │
      ▼
UNIDAD 2
Interfaces web
      │
      ▼
UNIDAD 3
React
Front End
      │
      ▼
UNIDAD 4
Spring Boot
Back End
      │
      ▼
UNIDAD 5
Nube y despliegue
```

---

# Integración de tecnologías

```text
HTML
CSS
JavaScript
      │
      ▼
React
      │
      │ HTTP / JSON
      ▼
Spring Boot
      │
      ▼
Spring Data JPA
      │
      ▼
Base de datos
```

Además:

```text
Spring Boot
      │
      ▼
RestClient
      │
      ▼
API externa
```

---

# Arquitectura final del curso

```text
                        INTERNET

USUARIO
   │
   ▼
FRONT END
React
   │
   │ HTTPS / JSON
   ▼
BACK END
Spring Boot
   │
   ├──────────────────┐
   │                  │
   ▼                  ▼
BASE DE DATOS      API EXTERNA
```

---

# Requisitos generales

Dependiendo de la unidad se recomienda contar con:

```text
Git
Node.js
npm
Java 21
Maven
Visual Studio Code
navegador web
```

Para algunos ejemplos también pueden utilizarse:

```text
MySQL
Postman
Bruno
curl
```

---

# Verificar herramientas

## Node.js

```bash
node --version
```

## npm

```bash
npm --version
```

## Java

```bash
java -version
```

## Maven

```bash
mvn -version
```

## Git

```bash
git --version
```

---

# Forma recomendada de estudio

Para cada unidad:

1. lea primero el `README.md` general;
2. siga los ejemplos en orden;
3. lea el README de cada ejemplo;
4. ejecute el código;
5. compruebe el resultado esperado;
6. observe los mensajes de consola;
7. realice los retos propuestos;
8. responda las preguntas de análisis;
9. modifique pequeños elementos;
10. vuelva a ejecutar y comparar.

---

# No limitarse a copiar el código

Los ejemplos tienen como finalidad comprender el funcionamiento de las tecnologías.

Se recomienda:

```text
leer
    │
    ▼
ejecutar
    │
    ▼
observar
    │
    ▼
modificar
    │
    ▼
probar nuevamente
```

Copiar un ejemplo sin analizar su funcionamiento reduce considerablemente su valor como recurso de aprendizaje.

---

# Uso de otros repositorios

Este curso reutiliza intencionalmente recursos ya desarrollados en otros repositorios.

## Lenguaje de Programación II

[Curso Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2)

Se utilizan recursos relacionados con:

```text
HTML
CSS
JavaScript
React
```

---

## Lenguaje de Programación III

[Curso Lenguaje de Programación III](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3)

Se utilizan recursos relacionados con:

```text
Spring Boot
APIs REST
JPA
Hibernate
bases de datos
JUnit
Mockito
MockMvc
RestClient
```

---

# ¿Por qué reutilizar recursos?

Mantener una única versión de los mismos ejemplos ayuda a evitar:

```text
duplicación de código
documentación repetida
versiones diferentes
mantenimiento innecesario
```

Cada repositorio conserva su propio enfoque académico, pero comparte recursos cuando los conceptos y ejemplos son equivalentes.

---

# Buenas prácticas generales

Durante el desarrollo se recomienda:

* utilizar nombres descriptivos;
* mantener el código organizado;
* separar responsabilidades;
* utilizar Git;
* documentar los ejemplos;
* probar las funcionalidades;
* utilizar códigos HTTP apropiados;
* validar información;
* manejar errores;
* no almacenar credenciales en repositorios públicos;
* comprobar las aplicaciones antes de desplegarlas.

---

# De Front End a Back End

Una idea central del curso es comprender que una aplicación web moderna no corresponde a una única tecnología.

Puede estar compuesta por:

```text
FRONT END
      │
      ▼
BACK END
      │
      ▼
BASE DE DATOS
```

Cada componente tiene responsabilidades distintas.

---

# Front End

Puede encargarse de:

```text
interfaz
interacción
formularios
presentación de datos
```

En el curso se utiliza principalmente:

```text
React
```

---

# Back End

Puede encargarse de:

```text
lógica
validación
procesamiento
persistencia
integración
```

En el curso se utiliza:

```text
Spring Boot
```

---

# Base de datos

Permite conservar la información.

Se estudian ejemplos con:

```text
H2
MySQL
```

---

# Comunicación

Front End y Back End se comunican principalmente mediante:

```text
HTTP
+
JSON
```

Conceptos introducidos desde la Unidad 1.

---

# Resultado esperado del recorrido

Al finalizar el estudio de los recursos, el estudiante debe poder interpretar una arquitectura como:

```text
USUARIO
   │
   ▼
REACT
   │
   │ GET / POST / PUT / PATCH / DELETE
   │ JSON
   ▼
SPRING BOOT
   │
   ▼
SERVICE
   │
   ├───────────────┐
   ▼               ▼
REPOSITORY      RESTCLIENT
   │               │
   ▼               ▼
BASE DE DATOS   API EXTERNA
```

y comprender la responsabilidad de cada elemento.

---

# Repositorios relacionados

* [Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2)
* [Lenguaje de Programación III](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3)

---

# Autora

**Leli Liliana Díaz Izquierdo**
Docente - Facultad de Ingenierías
