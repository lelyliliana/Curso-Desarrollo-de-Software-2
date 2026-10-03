# Unidad 4 - Desarrollo Back End con Spring Boot

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/fullstack/)

Esta unidad aborda el desarrollo del lado del servidor utilizando Spring Boot.

El módulo institucional incluye fundamentos de Spring Boot, organización mediante Controller y Service, integración con bases de datos, pruebas automatizadas y consumo de APIs externas.

Como buena parte de estos contenidos ya se encuentran desarrollados y documentados en el repositorio **Lenguaje de Programación III**, esta unidad reutiliza dichos ejemplos mediante enlaces y evita duplicar código.

Los recursos enlazados utilizan tecnologías actuales como:

* Java 21;
* Maven;
* Spring Boot;
* Spring Web;
* Jakarta Validation;
* JUnit 5;
* Mockito;
* MockMvc;
* Spring Data JPA;
* Hibernate;
* H2;
* MySQL;
* RestClient.

---

# Objetivo de la unidad

Al finalizar esta unidad, el estudiante estará en capacidad de:

* comprender la función de un Back End;
* desarrollar APIs REST con Spring Boot;
* crear endpoints HTTP;
* trabajar con Controller y Service;
* utilizar DTO;
* validar información;
* manejar errores;
* aplicar inyección de dependencias;
* integrar una aplicación con una base de datos;
* utilizar JPA y Spring Data JPA;
* realizar operaciones CRUD;
* trabajar con H2 y MySQL;
* realizar pruebas automatizadas del Back End;
* utilizar JUnit 5, Mockito y MockMvc;
* consumir APIs externas desde Spring Boot;
* utilizar RestClient;
* comprender una arquitectura completa Front End - Back End - Base de datos.

---

# Estructura de la unidad

```text
unidad4-backend/
│
├── README.md
│
├── ejemplo01-fundamentos-spring/
├── ejemplo02-persistencia-jpa/
├── ejemplo03-pruebas-backend/
└── ejemplo04-consumo-api-externa/
```

---

# Ruta de aprendizaje

Se recomienda seguir el siguiente orden:

```text
Ejemplo 01
Fundamentos Spring Boot
        │
        ▼
Ejemplo 02
Persistencia con JPA
        │
        ▼
Ejemplo 03
Pruebas del Back End
        │
        ▼
Ejemplo 04
Consumo de API externa
```

---

# Ejemplo 01 - Fundamentos de Spring Boot

Carpeta:

```text
ejemplo01-fundamentos-spring
```

Este recurso enlaza a la Unidad 1 de Lenguaje de Programación III:

[Unidad 1 - Estructura de una API Web](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad1)

---

# Contenidos retomados

En esa unidad se desarrollan ejemplos sobre:

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
códigos HTTP
validación
manejo de errores
Service
inyección de dependencias
JUnit 5
Mockito
MockMvc
```

---

# Arquitectura básica

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

Ejemplo:

```java
@RestController
public class CursoController {
}
```

La anotación:

```text
@RestController
```

indica que la clase puede recibir solicitudes web y devolver respuestas directamente.

---

# Service

El Service concentra lógica de negocio.

Por ejemplo:

```java
@Service
public class CursoService {
}
```

Esto ayuda a evitar Controllers con demasiada responsabilidad.

---

# DTO

DTO significa:

```text
Data Transfer Object
```

Se utiliza para representar la información que entra o sale de la aplicación.

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

---

# Ejemplo 02 - Persistencia con JPA

Carpeta:

```text
ejemplo02-persistencia-jpa
```

Este recurso enlaza a la Unidad 2 de Lenguaje de Programación III:

[Unidad 2 - Comunicación con servicios externos](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad2)

---

# Contenidos retomados

Se trabajan:

```text
persistencia
JPA
Hibernate
Spring Data JPA
CRUD
consultas derivadas
relaciones entre entidades
H2
MySQL
```

---

# Arquitectura con persistencia

```text
CLIENTE
   │
   ▼
CONTROLLER
   │
   ▼
SERVICE
   │
   ▼
REPOSITORY
   │
   ▼
BASE DE DATOS
```

---

# Entidad

Una entidad representa información persistente.

Ejemplo:

```java
@Entity
public class Curso {
}
```

---

# Llave primaria

Se utiliza:

```java
@Id
private Long id;
```

para identificar de forma única cada registro.

---

# Repository

Puede declararse:

```java
public interface CursoRepository
        extends JpaRepository<Curso, Long> {
}
```

Esto permite utilizar operaciones básicas sin implementarlas manualmente.

---

# CRUD

```text
Create
Read
Update
Delete
```

Puede relacionarse con:

```text
POST
GET
PUT / PATCH
DELETE
```

y con operaciones de repositorio como:

```text
save()
findById()
findAll()
deleteById()
```

---

# H2 y MySQL

## H2

Útil para:

```text
pruebas
ejemplos
prototipos
aprendizaje
```

## MySQL

Más cercano a un escenario con persistencia real y motor externo.

---

# Ejemplo 03 - Pruebas automatizadas del Back End

Carpeta:

```text
ejemplo03-pruebas-backend
```

Este recurso utiliza los ejemplos de pruebas de Lenguaje de Programación III.

---

# Herramientas utilizadas

```text
JUnit 5
Mockito
MockMvc
```

---

# Pruebas del Service

Una prueba del Service puede aislar dependencias mediante Mockito.

```text
TEST
 │
 ▼
SERVICE
 │
 ▼
REPOSITORY MOCK
```

---

# Pruebas del Controller

MockMvc permite probar el comportamiento HTTP.

Por ejemplo:

```text
GET /cursos/1
```

puede comprobar:

```text
200 OK
```

y contenido JSON esperado.

---

# Arrange - Act - Assert

Las pruebas pueden organizarse así:

```text
ARRANGE
preparar

ACT
ejecutar

ASSERT
comprobar
```

---

# Ejemplo 04 - Consumo de API externa

Carpeta:

```text
ejemplo04-consumo-api-externa
```

Este recurso también enlaza a la Unidad 2 de Lenguaje de Programación III.

---

# Spring Boot como cliente

Hasta este momento Spring Boot actuaba principalmente como servidor.

Ahora también puede actuar como cliente:

```text
SPRING BOOT
     │
     │ HTTP
     ▼
API EXTERNA
```

---

# RestClient

En los materiales actuales se utiliza:

```text
RestClient
```

para realizar solicitudes externas.

El módulo institucional original utiliza `RestTemplate`, pero el objetivo formativo se conserva: consumir servicios HTTP desde el Back End.

---

# Arquitectura completa con servicio externo

```text
CLIENTE
   │
   ▼
SPRING BOOT
   │
   ├───────────────┐
   ▼               ▼
REPOSITORY      RESTCLIENT
   │               │
   ▼               ▼
BASE DE DATOS   API EXTERNA
```

---

# Roles de Spring Boot

Spring Boot puede actuar como:

```text
SERVIDOR
│
└── frente al Front End
```

y también como:

```text
CLIENTE
│
└── frente a una API externa
```

---

# Integración con React

Al combinar la Unidad 3 y la Unidad 4 se obtiene:

```text
USUARIO
   │
   ▼
REACT
Front End
   │
   │ HTTP / JSON
   ▼
SPRING BOOT
Back End
   │
   ▼
BASE DE DATOS
```

---

# Integración con servicios externos

La arquitectura puede ampliarse:

```text
USUARIO
   │
   ▼
REACT
   │
   ▼
SPRING BOOT
   │
   ├───────────────┐
   ▼               ▼
BASE DE DATOS   API EXTERNA
```

---

# Flujo completo de una consulta

```text
Usuario
   │
   ▼
React
   │
   │ GET /cursos
   ▼
Spring Boot
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
Base de datos
   │
   ▼
JSON
   │
   ▼
React
   │
   ▼
Usuario
```

---

# Flujo con API externa

```text
Usuario
   │
   ▼
React
   │
   ▼
Spring Boot
   │
   ▼
Service
   │
   ▼
RestClient
   │
   ▼
API externa
   │
   ▼
JSON
   │
   ▼
Spring Boot
   │
   ▼
React
```

---

# Relación con la Unidad 1

Los conceptos estudiados anteriormente aparecen nuevamente:

```text
HTTP
Request
Response
GET
POST
PUT
PATCH
DELETE
códigos HTTP
JSON
```

Spring Boot permite implementarlos desde el lado servidor.

---

# Relación con la Unidad 2

Se reutilizan conocimientos de:

```text
JavaScript
JSON
formularios
eventos
```

que posteriormente se integran con el Back End.

---

# Relación con la Unidad 3

React actúa como cliente del Back End.

```text
React
   │
   │ HTTP
   ▼
Spring Boot
```

---

# Arquitectura alcanzada hasta esta unidad

```text
FRONT END
React
   │
   │ HTTP / JSON
   ▼
BACK END
Spring Boot
   │
   ├─────────────┐
   ▼             ▼
BASE DE DATOS   API EXTERNA
```

---

# Buenas prácticas retomadas

Durante esta unidad se recomienda:

* mantener Controllers pequeños;
* colocar lógica en Services;
* utilizar DTO;
* validar entradas;
* devolver códigos HTTP apropiados;
* separar acceso a datos;
* utilizar repositorios;
* manejar errores;
* probar lógica y endpoints;
* separar integraciones externas;
* no duplicar responsabilidades.

---

# Forma recomendada de estudio

Para cada recurso:

1. abra el README correspondiente;
2. identifique el objetivo;
3. revise las clases principales;
4. ejecute la unidad;
5. pruebe los endpoints;
6. observe Request y Response;
7. verifique los códigos HTTP;
8. revise la estructura JSON;
9. ejecute las pruebas automatizadas;
10. modifique un pequeño elemento;
11. vuelva a ejecutar.

---

# Ejecutar Unidad 1 de Lenguaje de Programación III

Desde la raíz del repositorio:

```bash
mvn -pl unidad1 spring-boot:run
```

---

# Ejecutar Unidad 2

```bash
mvn -pl unidad2 spring-boot:run
```

---

# Ejecutar pruebas

```bash
mvn test
```

También puede utilizar:

```bash
mvn -pl unidad1 test
```

o:

```bash
mvn -pl unidad2 test
```

---

# Herramientas para probar APIs

Puede utilizar:

```text
curl
Postman
Bruno
```

Los comandos específicos se encuentran documentados dentro de los ejemplos enlazados.

---

# Actividad de repaso

Antes de continuar, compruebe que puede responder:

1. ¿Qué es un Back End?
2. ¿Qué es Spring Boot?
3. ¿Qué es una API REST?
4. ¿Qué función cumple un Controller?
5. ¿Qué función cumple un Service?
6. ¿Qué es un DTO?
7. ¿Qué función cumple `ResponseEntity`?
8. ¿Qué significa inyección de dependencias?
9. ¿Qué significa persistencia?
10. ¿Qué es JPA?
11. ¿Qué función cumple Hibernate?
12. ¿Qué es Spring Data JPA?
13. ¿Qué es una entidad?
14. ¿Qué función cumple un Repository?
15. ¿Qué significa CRUD?
16. ¿Qué diferencia existe entre H2 y MySQL?
17. ¿Qué es una prueba unitaria?
18. ¿Qué función cumple JUnit?
19. ¿Qué es un mock?
20. ¿Qué función cumple Mockito?
21. ¿Qué función cumple MockMvc?
22. ¿Qué significa consumir una API externa?
23. ¿Qué función cumple RestClient?
24. ¿Cómo puede Spring Boot actuar como cliente y servidor?
25. ¿Cómo se relaciona React con Spring Boot?
26. ¿Cómo se relaciona Spring Boot con una base de datos?

---

# Reto integrador de la unidad

Diseñe conceptualmente una aplicación para gestionar cursos.

Debe contener:

```text
Front End
React

Back End
Spring Boot

Base de datos
MySQL o H2
```

---

# Entidad propuesta

```text
Curso
│
├── id
├── nombre
├── creditos
└── programa
```

---

# Endpoints

Proponga:

```text
GET /cursos

GET /cursos/{id}

POST /cursos

PUT /cursos/{id}

PATCH /cursos/{id}

DELETE /cursos/{id}
```

---

# Arquitectura esperada

```text
REACT
   │
   │ HTTP / JSON
   ▼
CURSO CONTROLLER
   │
   ▼
CURSO SERVICE
   │
   ▼
CURSO REPOSITORY
   │
   ▼
BASE DE DATOS
```

---

# Pruebas propuestas

Incluya al menos:

```text
Service
│
├── curso existente
└── curso inexistente

Controller
│
├── 200 OK
├── 201 Created
└── 404 Not Found
```

---

# Extensión opcional

Agregue conceptualmente una API externa.

Por ejemplo:

```text
Servicio externo
→ información complementaria
```

La arquitectura quedaría:

```text
REACT
   │
   ▼
SPRING BOOT
   │
   ├───────────────┐
   ▼               ▼
REPOSITORY      RESTCLIENT
   │               │
   ▼               ▼
BASE DE DATOS   API EXTERNA
```

---

# Ejemplos disponibles

## Ejemplo 01

```text
ejemplo01-fundamentos-spring
```

Fundamentos de Spring Boot y construcción de APIs REST.

---

## Ejemplo 02

```text
ejemplo02-persistencia-jpa
```

Persistencia mediante JPA, Hibernate, Spring Data JPA, H2 y MySQL.

---

## Ejemplo 03

```text
ejemplo03-pruebas-backend
```

Pruebas automatizadas mediante JUnit 5, Mockito y MockMvc.

---

## Ejemplo 04

```text
ejemplo04-consumo-api-externa
```

Integración con APIs externas mediante RestClient.

---

# Conceptos trabajados

* Back End;
* Spring Boot;
* Maven;
* API REST;
* Controller;
* Service;
* DTO;
* validación;
* manejo de errores;
* inyección de dependencias;
* JPA;
* Hibernate;
* Spring Data JPA;
* Repository;
* entidad;
* H2;
* MySQL;
* CRUD;
* JUnit 5;
* Mockito;
* MockMvc;
* pruebas automatizadas;
* RestClient;
* APIs externas;
* HTTP;
* JSON.

---

# Conclusión

Spring Boot permite construir el Back End de una aplicación web mediante APIs REST organizadas por responsabilidades.

Los Controllers reciben solicitudes HTTP, los Services coordinan la lógica, los Repositories gestionan la persistencia y las pruebas automatizadas permiten comprobar que el comportamiento esperado se conserva.

Además, Spring Boot puede consumir APIs externas mediante clientes HTTP, lo que permite integrar múltiples fuentes de información.

Al finalizar esta unidad ya es posible comprender una arquitectura completa que conecte React, Spring Boot, una base de datos y servicios externos.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 3 - Desarrollo Front End con React](../unidad3-react/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Comenzar los ejemplos:** [Ejemplo 01 - Fundamentos de Spring Boot y APIs REST](ejemplo01-fundamentos-spring/README.md)
- **Siguiente unidad:** [Unidad 5 - Introducción a la computación en la nube](../unidad5-computacion-nube/README.md)
