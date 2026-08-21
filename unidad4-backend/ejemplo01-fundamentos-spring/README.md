# Ejemplo 01 - Fundamentos de Spring Boot y APIs REST

## Unidad 4 - Desarrollo Back End

En esta unidad se utiliza Spring Boot para desarrollar aplicaciones del lado del servidor y construir APIs REST.

Los fundamentos necesarios ya se encuentran desarrollados mediante ejemplos progresivos y documentados en el repositorio del curso **Lenguaje de Programación III**.

Por esta razón, no se duplicará el mismo código dentro de este repositorio.

Los ejemplos existentes utilizan tecnologías actuales:

* Java 21;
* Maven;
* Spring Boot;
* Spring Web;
* Jakarta Validation;
* JUnit 5;
* Mockito;
* MockMvc.

---

# Objetivo de aprendizaje

Al finalizar la revisión de estos recursos, el estudiante estará en capacidad de:

* comprender qué función cumple Spring Boot;
* reconocer la estructura básica de una API REST;
* crear endpoints HTTP;
* utilizar `GET` y `POST`;
* trabajar con `PathVariable`;
* trabajar con `RequestParam`;
* recibir información mediante `RequestBody`;
* utilizar DTO;
* generar códigos HTTP apropiados;
* utilizar `ResponseEntity`;
* validar datos;
* manejar errores;
* separar responsabilidades entre Controller y Service;
* aplicar inyección de dependencias;
* reconocer la utilidad de pruebas automatizadas en el Back End.

---

# Recurso principal

Consulte:

[Unidad 1 - Estructura de una API Web](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad1)

Esta unidad del curso Lenguaje de Programación III contiene ejemplos progresivos relacionados con la construcción de APIs REST mediante Spring Boot.

---

# Tecnologías utilizadas

Los ejemplos trabajan principalmente con:

```text
Java 21
Maven
Spring Boot
Spring Web
Jakarta Validation
JUnit 5
Mockito
MockMvc
```

---

# Arquitectura básica

Una API desarrollada con Spring Boot puede representarse:

```text
CLIENTE
   │
   │ HTTP Request
   ▼
CONTROLLER
   │
   ▼
SERVICE
   │
   ▼
LÓGICA
   │
   ▼
CONTROLLER
   │
   │ HTTP Response
   ▼
CLIENTE
```

---

# Controller

El Controller recibe solicitudes HTTP.

Por ejemplo:

```java
@RestController
public class SaludoController {
}
```

La anotación:

```text
@RestController
```

indica que la clase atenderá solicitudes web y podrá retornar información directamente en el cuerpo de las respuestas.

---

# GET

Un endpoint puede atender una solicitud:

```text
GET
```

mediante:

```java
@GetMapping("/saludo")
```

Conceptualmente:

```text
CLIENTE
   │
   │ GET /saludo
   ▼
CONTROLLER
```

---

# PathVariable

Una ruta puede contener información variable.

Por ejemplo:

```text
/saludo/Ana
```

Puede declararse:

```java
@GetMapping("/saludo/{nombre}")
```

y recuperarse mediante:

```java
@PathVariable String nombre
```

---

# RequestParam

También pueden recibirse parámetros de consulta.

Ejemplo:

```text
/bienvenida?nombre=Ana
```

El valor puede recuperarse mediante:

```java
@RequestParam String nombre
```

---

# Diferencia básica

```text
PathVariable
│
└── forma parte de la ruta

/saludo/Ana
```

Mientras:

```text
RequestParam
│
└── viaja como parámetro de consulta

/bienvenida?nombre=Ana
```

---

# POST

Para crear o enviar información puede utilizarse:

```text
POST
```

Por ejemplo:

```java
@PostMapping("/usuarios")
```

---

# RequestBody

Si el cliente envía:

```json
{
  "nombre": "Ana",
  "correo": "ana@ejemplo.com"
}
```

Spring Boot puede convertir automáticamente ese JSON a un objeto Java mediante:

```java
@RequestBody
```

---

# DTO

DTO significa:

```text
Data Transfer Object
```

Se utiliza para representar información que entra o sale de la aplicación.

Conceptualmente:

```text
JSON
 │
 ▼
DTO
 │
 ▼
Aplicación
```

Esto permite evitar utilizar directamente las entidades internas de la aplicación como estructura de comunicación.

---

# ResponseEntity

`ResponseEntity` permite controlar elementos de la respuesta HTTP.

Por ejemplo:

```text
código de estado
headers
body
```

Una creación exitosa puede responder:

```text
201 Created
```

acompañada por la información del nuevo recurso.

---

# Códigos HTTP

Los ejemplos permiten aplicar códigos como:

```text
200 OK
201 Created
400 Bad Request
404 Not Found
```

Esto conecta directamente con lo estudiado en la Unidad 1 de Desarrollo de Software II.

---

# Validación

Spring Boot puede validar información recibida.

Por ejemplo, un campo podría ser obligatorio.

Si el cliente envía información incorrecta, la aplicación puede responder:

```text
400 Bad Request
```

---

# Separación Controller - Service

Una buena organización evita colocar toda la lógica dentro del Controller.

Conceptualmente:

```text
CONTROLLER
│
│ recibe Request
│
▼
SERVICE
│
│ ejecuta lógica
│
▼
CONTROLLER
│
│ genera Response
▼
CLIENTE
```

---

# Service

Una clase de servicio puede identificarse mediante:

```java
@Service
```

Su responsabilidad principal es contener lógica de negocio o coordinar operaciones.

---

# Inyección de dependencias

El Controller puede necesitar utilizar un Service.

En lugar de crear manualmente:

```text
new MiService()
```

Spring puede suministrar la instancia necesaria.

Conceptualmente:

```text
Spring
   │
   ▼
Service
   │
   ▼
Controller
```

---

# Recurso recomendado

Siga los ejemplos de la Unidad 1 del repositorio de Lenguaje de Programación III en orden numérico.

Los ejemplos están organizados como:

```text
U1_01
U1_02
U1_03
...
```

Cada uno incorpora un concepto adicional.

---

# Forma recomendada de estudio

Para cada ejemplo:

1. lea el README;
2. identifique el objetivo;
3. revise el código;
4. ejecute el proyecto;
5. pruebe el endpoint;
6. observe el código HTTP;
7. compare Request y Response;
8. modifique algún dato;
9. vuelva a probar.

---

# Ejecutar la Unidad 1

Desde la raíz del repositorio de Lenguaje de Programación III:

```bash
mvn -pl unidad1 spring-boot:run
```

Para detener:

```text
Ctrl + C
```

---

# Probar endpoints

Los ejemplos pueden probarse mediante:

```text
curl
Postman
Bruno
```

Las solicitudes específicas están documentadas dentro de cada ejemplo.

---

# Relación con las unidades anteriores

En Desarrollo de Software II ya se trabajó:

```text
HTTP
Request
Response
GET
POST
JSON
códigos de estado
```

Spring Boot permite implementar esos conceptos desde el lado del servidor.

---

# Flujo completo

```text
CLIENTE
   │
   │ HTTP Request
   ▼
SPRING BOOT
   │
   ├── Controller
   ├── Service
   └── lógica
   │
   │ HTTP Response
   ▼
CLIENTE
```

---

# Relación con React

En la Unidad 3 se utilizó React como cliente de APIs.

Ahora puede visualizarse:

```text
REACT
Front End
   │
   │ HTTP / JSON
   ▼
SPRING BOOT
Back End
```

Esto permite comenzar a construir una aplicación Full Stack.

---

# Antes de continuar

Compruebe que puede explicar:

1. ¿Qué es Spring Boot?
2. ¿Qué es una API REST?
3. ¿Qué función cumple un Controller?
4. ¿Qué función cumple un Service?
5. ¿Qué hace `@RestController`?
6. ¿Qué hace `@GetMapping`?
7. ¿Qué hace `@PostMapping`?
8. ¿Qué es `PathVariable`?
9. ¿Qué es `RequestParam`?
10. ¿Qué función cumple `RequestBody`?
11. ¿Qué es un DTO?
12. ¿Qué función cumple `ResponseEntity`?
13. ¿Por qué se utilizan códigos HTTP?
14. ¿Qué significa validación?
15. ¿Qué es inyección de dependencias?
16. ¿Por qué conviene separar Controller y Service?

---

# Conceptos retomados

* Java;
* Maven;
* Spring Boot;
* Spring Web;
* API REST;
* Controller;
* Service;
* endpoint;
* GET;
* POST;
* PathVariable;
* RequestParam;
* RequestBody;
* DTO;
* ResponseEntity;
* validación;
* manejo de errores;
* inyección de dependencias;
* HTTP;
* JSON.

---

# Conclusión

Spring Boot permite implementar el lado servidor de una aplicación web mediante APIs REST.

Los conceptos de HTTP estudiados previamente adquieren aquí una implementación concreta: los Controllers reciben Requests, los Services ejecutan la lógica necesaria y la aplicación genera Responses con códigos HTTP y cuerpos JSON.

Los ejemplos completos se encuentran disponibles en el repositorio de Lenguaje de Programación III, evitando duplicar código y manteniendo una única fuente actualizada para estos fundamentos.
