# Guía de práctica 04 - Desarrollo Back End con Spring Boot

## Desarrollo de Software II

---

# 1. Propósito de la práctica

Esta práctica tiene como propósito aplicar los fundamentos del desarrollo Back End utilizando Spring Boot.

A través de los recursos de la Unidad 4, el estudiante trabajará con APIs REST, persistencia, pruebas automatizadas y consumo de servicios externos.

Para evitar duplicación de código, esta práctica utiliza los ejemplos ya desarrollados y documentados en el repositorio **Lenguaje de Programación III**.

---

# 2. Objetivo de aprendizaje

Al finalizar la práctica, el estudiante estará en capacidad de:

* ejecutar una aplicación Spring Boot;
* reconocer Controller y Service;
* probar endpoints HTTP;
* utilizar `GET` y `POST`;
* interpretar `PathVariable`, `RequestParam` y `RequestBody`;
* reconocer DTO y `ResponseEntity`;
* identificar códigos HTTP;
* comprender la persistencia mediante JPA;
* reconocer entidades y repositorios;
* realizar operaciones CRUD;
* utilizar H2 o MySQL;
* ejecutar pruebas con JUnit 5;
* comprender el uso de Mockito;
* probar Controllers con MockMvc;
* consumir una API externa mediante RestClient;
* relacionar Front End, Back End, base de datos y servicios externos.

---

# 3. Recursos

Utilice:

```text
unidad4-backend/
```

Específicamente:

```text
ejemplo01-fundamentos-spring
ejemplo02-persistencia-jpa
ejemplo03-pruebas-backend
ejemplo04-consumo-api-externa
```

También utilizará:

[Curso Lenguaje de Programación III](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3)

---

# 4. Requisitos

Se recomienda contar con:

* Java 21;
* Maven;
* Git;
* Visual Studio Code o IDE equivalente;
* navegador;
* `curl`, Postman o Bruno.

Verifique:

```bash
java -version
```

```bash
mvn -version
```

```bash
git --version
```

---

# 5. Actividad 1 - Ejecutar Spring Boot

Consulte:

[Unidad 1 - Estructura de una API Web](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad1)

Desde la raíz del repositorio ejecute:

```bash
mvn -pl unidad1 spring-boot:run
```

---

# 6. Registrar información

Complete:

```text
Versión de Java:
________________________

Versión de Maven:
________________________

Puerto utilizado:
________________________
```

---

# 7. Identificar Controller

Localice una clase con:

```java
@RestController
```

Registre:

```text
Nombre de la clase:
________________________
```

Explique su función:

```text
____________________________________________________

____________________________________________________
```

---

# 8. Identificar endpoint GET

Localice un método con:

```java
@GetMapping
```

Registre:

```text
Ruta:
________________________
```

Pruebe el endpoint.

---

# 9. Registrar respuesta

```text
Método:
________________________

Código HTTP:
________________________

Body:
________________________
```

---

# 10. PathVariable

Localice un ejemplo con:

```java
@PathVariable
```

Identifique una URL similar a:

```text
/recurso/{valor}
```

Registre:

```text
Ruta:
________________________

Valor enviado:
________________________
```

Explique dónde viaja ese valor.

---

# 11. RequestParam

Localice un ejemplo con:

```java
@RequestParam
```

Registre una solicitud similar a:

```text
/ruta?nombre=Ana
```

Complete:

```text
Nombre del parámetro:
________________________

Valor:
________________________
```

---

# 12. Comparar

Complete:

```text
PathVariable
________________________________________

RequestParam
________________________________________
```

---

# 13. Actividad 2 - POST y RequestBody

Localice un endpoint con:

```java
@PostMapping
```

Identifique el uso de:

```java
@RequestBody
```

---

# 14. Probar POST

Ejecute la solicitud indicada en el README del ejemplo.

Registre:

```text
URL:
________________________

Código HTTP:
________________________

JSON enviado:
________________________

JSON recibido:
________________________
```

---

# 15. DTO

Identifique una clase o `record` utilizado como DTO.

Registre:

```text
Nombre:
________________________

Campos:
________________________
```

Explique su función.

```text
____________________________________________________
```

---

# 16. ResponseEntity

Localice:

```java
ResponseEntity
```

Explique qué permite controlar.

```text
____________________________________________________

____________________________________________________
```

---

# 17. Códigos HTTP

Durante la actividad identifique al menos:

```text
200
201
400
404
```

Complete:

| Código | Significado | Situación observada |
| ------ | ----------- | ------------------- |
| 200    |             |                     |
| 201    |             |                     |
| 400    |             |                     |
| 404    |             |                     |

---

# 18. Actividad 3 - Controller y Service

Localice una clase:

```java
@Service
```

Registre:

```text
Nombre:
________________________
```

Explique qué responsabilidad tiene.

```text
____________________________________________________
```

---

# 19. Flujo

Complete:

```text
CLIENTE
   │
   ▼
_____________
   │
   ▼
_____________
   │
   ▼
RESPUESTA
```

---

# 20. Inyección de dependencias

Observe cómo el Controller recibe el Service.

Explique por qué no se crea simplemente con:

```java
new Servicio()
```

Respuesta:

```text
____________________________________________________

____________________________________________________
```

---

# 21. Actividad 4 - Persistencia

Consulte:

[Unidad 2 - Comunicación con servicios externos](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad2)

Ejecute:

```bash
mvn -pl unidad2 spring-boot:run
```

---

# 22. Identificar entidad

Localice una clase con:

```java
@Entity
```

Registre:

```text
Entidad:
________________________

Llave primaria:
________________________
```

---

# 23. `@Id`

Explique la función de:

```java
@Id
```

```text
____________________________________________________
```

---

# 24. Repository

Localice una interfaz que extienda:

```java
JpaRepository
```

Registre:

```text
Nombre:
________________________

Entidad administrada:
________________________

Tipo de ID:
________________________
```

---

# 25. CRUD

Relacione:

| Operación  | HTTP | Repository |
| ---------- | ---- | ---------- |
| Crear      |      |            |
| Consultar  |      |            |
| Actualizar |      |            |
| Eliminar   |      |            |

---

# 26. Probar consulta

Ejecute un endpoint que consulte información persistida.

Registre:

```text
Método:
________________________

URL:
________________________

Código:
________________________
```

---

# 27. Crear registro

Ejecute el endpoint de creación disponible.

Después consulte nuevamente los datos.

Explique qué cambió.

```text
____________________________________________________
```

---

# 28. Reiniciar aplicación

Si el ejemplo utiliza H2 en memoria, detenga:

```text
Ctrl + C
```

y vuelva a iniciar.

Observe si los datos creados permanecen.

Registre:

```text
Sí / No
```

Explique por qué.

---

# 29. H2 y MySQL

Complete:

```text
H2
Ventaja para aprendizaje:
________________________________________
```

```text
MySQL
Ventaja para persistencia real:
________________________________________
```

---

# 30. Actividad 5 - Pruebas unitarias

Regrese a los ejemplos de pruebas de la Unidad 1 de Lenguaje de Programación III.

Ejecute:

```bash
mvn -pl unidad1 test
```

---

# 31. Registrar resultado

```text
Pruebas ejecutadas:
________________________

Pruebas exitosas:
________________________
```

---

# 32. JUnit

Localice:

```java
@Test
```

Explique su función.

```text
____________________________________________________
```

---

# 33. Assertion

Localice una prueba con:

```java
assertEquals()
```

Registre:

```text
Valor esperado:
________________________

Valor obtenido:
________________________
```

---

# 34. Excepciones

Localice:

```java
assertThrows()
```

Explique qué comportamiento comprueba.

```text
____________________________________________________
```

---

# 35. Mockito

Identifique:

```java
@Mock
```

Registre qué clase se está simulando.

```text
____________________________________________________
```

---

# 36. `@InjectMocks`

Identifique qué objeto recibe las dependencias simuladas.

```text
____________________________________________________
```

---

# 37. `when()` y `thenReturn()`

Localice una estructura similar a:

```java
when(...)
    .thenReturn(...);
```

Explique:

```text
Cuando:
________________________________________

Retornar:
________________________________________
```

---

# 38. Arrange - Act - Assert

Seleccione una prueba y complete:

```text
Arrange:
________________________________________

Act:
________________________________________

Assert:
________________________________________
```

---

# 39. Actividad 6 - MockMvc

Localice una prueba de Controller.

Identifique:

```java
mockMvc.perform(...)
```

---

# 40. Registrar

```text
Método HTTP simulado:
________________________

Ruta:
________________________

Status esperado:
________________________
```

---

# 41. JSON Path

Localice:

```java
jsonPath(...)
```

Explique qué propiedad JSON comprueba.

```text
____________________________________________________
```

---

# 42. Provocar fallo

Cambie temporalmente un valor esperado en una prueba.

Ejecute:

```bash
mvn -pl unidad1 test
```

Registre:

```text
PASS / FAIL
```

Explique por qué.

Después restaure el código.

---

# 43. Actividad 7 - Consumo de API externa

Consulte el ejemplo correspondiente de la Unidad 2.

Identifique:

```text
RestClient
```

---

# 44. Analizar roles

Complete:

```text
Frente a React, Spring Boot actúa como:
________________________

Frente a la API externa, Spring Boot actúa como:
________________________
```

---

# 45. Identificar URL externa

Registre:

```text
URL externa:
________________________________________
```

---

# 46. Método HTTP

```text
GET / POST / otro:
________________________
```

---

# 47. DTO externo

Identifique el objeto utilizado para recibir la respuesta.

Registre:

```text
Nombre:
________________________

Campos principales:
________________________
```

---

# 48. Flujo externo

Complete:

```text
SPRING BOOT
     │
     ▼
_____________
     │
     ▼
API EXTERNA
     │
     ▼
_____________
     │
     ▼
SPRING BOOT
```

---

# 49. Error externo

Analice qué ocurre si la API externa:

```text
no responde
```

o devuelve:

```text
404
```

Explique cómo debería reaccionar nuestro Back End.

```text
____________________________________________________

____________________________________________________
```

---

# 50. Actividad 8 - Arquitectura completa

Represente el sistema:

```text
REACT
   │
   ▼
SPRING BOOT
   │
   ▼
BASE DE DATOS
```

Agregue las capas:

```text
Controller
Service
Repository
```

---

# 51. Diagrama esperado

Complete:

```text
REACT
   │
   │ HTTP / JSON
   ▼
____________________
   │
   ▼
____________________
   │
   ▼
____________________
   │
   ▼
BASE DE DATOS
```

---

# 52. Agregar API externa

Amplíe:

```text
SERVICE
   │
   ├───────────────┐
   ▼               ▼
_____________   _____________
   │               │
   ▼               ▼
Base de datos   API externa
```

---

# 53. Reto integrador

Diseñe conceptualmente una API de cursos.

Entidad:

```text
Curso
```

Campos:

```text
id
nombre
creditos
programa
```

---

# 54. Endpoints

Defina:

```text
GET /cursos
GET /cursos/{id}
POST /cursos
PUT /cursos/{id}
DELETE /cursos/{id}
```

---

# 55. Capas

Proponga:

```text
CursoController
CursoService
CursoRepository
Curso
CursoDTO
```

---

# 56. Flujo POST

Represente:

```text
CLIENTE
   │
   │ POST + JSON
   ▼
_____________
   │
   ▼
_____________
   │
   ▼
_____________
   │
   ▼
BASE DE DATOS
```

---

# 57. Respuestas

Proponga códigos para:

```text
Consulta exitosa:
____________________

Creación:
____________________

Datos inválidos:
____________________

Curso inexistente:
____________________

Eliminación:
____________________
```

---

# 58. Pruebas mínimas

Proponga al menos:

```text
Service:
- curso existente
- curso inexistente

Controller:
- GET 200
- GET 404
- POST 201
```

---

# 59. Evidencias sugeridas

Conserve:

1. Spring Boot ejecutándose;
2. endpoint GET;
3. endpoint POST;
4. respuesta 400 o 404;
5. entidad JPA;
6. Repository;
7. dato almacenado;
8. pruebas JUnit exitosas;
9. prueba MockMvc;
10. consumo de API externa.

---

# 60. Preguntas de cierre

1. ¿Qué es Spring Boot?
2. ¿Qué es una API REST?
3. ¿Qué función cumple un Controller?
4. ¿Qué función cumple un Service?
5. ¿Qué es un DTO?
6. ¿Qué función cumple `RequestBody`?
7. ¿Qué función cumple `ResponseEntity`?
8. ¿Qué significa inyección de dependencias?
9. ¿Qué es persistencia?
10. ¿Qué es JPA?
11. ¿Qué función cumple Hibernate?
12. ¿Qué es una entidad?
13. ¿Qué hace `@Id`?
14. ¿Qué función cumple un Repository?
15. ¿Qué significa CRUD?
16. ¿Qué diferencia existe entre H2 y MySQL?
17. ¿Qué es JUnit?
18. ¿Qué es una assertion?
19. ¿Qué es un mock?
20. ¿Qué función cumple Mockito?
21. ¿Qué hace `when().thenReturn()`?
22. ¿Qué función cumple MockMvc?
23. ¿Qué es `jsonPath()`?
24. ¿Qué significa consumir una API externa?
25. ¿Qué función cumple RestClient?
26. ¿Cómo puede Spring Boot ser cliente y servidor al mismo tiempo?

---

# 61. Resultado esperado

Al finalizar debe comprender:

```text
CLIENTE
   │
   │ HTTP / JSON
   ▼
CONTROLLER
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

y también:

```text
SERVICE
   │
   ▼
JUnit + Mockito
```

```text
CONTROLLER
   │
   ▼
JUnit + MockMvc
```

---

# Conclusión

Spring Boot permite construir el Back End de una aplicación mediante APIs REST organizadas en capas.

Los Controllers reciben solicitudes, los Services gestionan la lógica, los Repositories permiten acceder a datos y RestClient facilita la integración con servicios externos.

Las pruebas automatizadas permiten comprobar el comportamiento de estas capas y ayudan a detectar errores después de realizar modificaciones.

Con estos elementos ya es posible comprender una arquitectura web completa que integre Front End, Back End, persistencia y servicios externos.
