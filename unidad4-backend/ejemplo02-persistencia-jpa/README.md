# Ejemplo 02 - Persistencia con JPA y Spring Data

[Volver a la unidad](../README.md) · [Volver al índice del curso](../../README.md)

## Unidad 4 - Desarrollo Back End

Este ejemplo introduce la persistencia de información en aplicaciones Spring Boot.

El módulo institucional aborda la integración con bases de datos utilizando H2, JPA, entidades y repositorios.

Como estos contenidos ya se encuentran desarrollados y documentados en la **Unidad 2 del repositorio Lenguaje de Programación III**, no se duplicará el mismo código dentro de este repositorio.

---

# Objetivo de aprendizaje

Al finalizar la revisión de estos recursos, el estudiante estará en capacidad de:

* comprender qué significa persistencia;
* reconocer la función de una base de datos dentro de una aplicación web;
* utilizar JPA;
* reconocer el papel de Hibernate;
* utilizar Spring Data JPA;
* definir entidades;
* identificar llaves primarias;
* mapear clases con tablas;
* utilizar repositorios;
* realizar operaciones CRUD;
* trabajar con H2;
* trabajar con MySQL;
* comprender consultas derivadas;
* reconocer relaciones entre entidades;
* integrar el acceso a datos con Service y Controller.

---

# Recurso principal

Consulte:

[Unidad 2 - Comunicación con servicios externos](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad2)

Dentro de esta unidad se encuentran ejemplos relacionados con:

* persistencia;
* JPA;
* Hibernate;
* Spring Data JPA;
* CRUD;
* consultas derivadas;
* relaciones entre entidades;
* H2;
* MySQL;
* consumo de APIs externas.

---

# Arquitectura general

Una aplicación con persistencia puede representarse así:

```text
CLIENTE
   │
   │ HTTP
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

Cada capa cumple una responsabilidad diferente.

---

# Controller

El Controller recibe las solicitudes HTTP.

Ejemplo conceptual:

```text
GET /estudiantes/1
```

El Controller no debería contener toda la lógica de acceso a datos.

Su función principal es recibir el Request y delegar la operación.

---

# Service

El Service contiene la lógica de negocio o coordina el proceso.

Por ejemplo:

```text
Controller
   │
   ▼
Service
   │
   ├── valida
   ├── aplica reglas
   └── solicita datos
```

---

# Repository

El Repository se encarga de interactuar con la base de datos.

Conceptualmente:

```text
SERVICE
   │
   ▼
REPOSITORY
   │
   ▼
BASE DE DATOS
```

---

# Persistencia

Persistencia significa que la información puede conservarse más allá de la ejecución inmediata de la aplicación.

En ejemplos anteriores se utilizaron datos almacenados solamente en memoria:

```text
Aplicación inicia
      │
      ▼
datos en memoria
      │
      ▼
Aplicación se detiene
      │
      ▼
datos desaparecen
```

Con persistencia:

```text
Aplicación
   │
   ▼
Base de datos
   │
   ▼
Datos conservados
```

---

# JPA

JPA significa:

```text
Java Persistence API
```

Es una especificación que permite trabajar con persistencia de objetos Java.

Conceptualmente permite relacionar:

```text
OBJETO JAVA
     │
     ▼
    JPA
     │
     ▼
TABLA DE BASE DE DATOS
```

---

# Hibernate

Hibernate es una implementación ampliamente utilizada de JPA.

Puede visualizarse así:

```text
Aplicación Java
      │
      ▼
     JPA
      │
      ▼
 Hibernate
      │
      ▼
Base de datos
```

---

# Spring Data JPA

Spring Data JPA facilita la construcción de repositorios y operaciones comunes.

Por ejemplo, permite utilizar interfaces como:

```java
JpaRepository
```

sin tener que implementar manualmente cada operación básica.

---

# Entidad

Una clase puede representar una tabla de la base de datos.

Ejemplo:

```java
@Entity
public class Estudiante {
}
```

La anotación:

```text
@Entity
```

indica que la clase representa una entidad persistente.

---

# Relación clase - tabla

Conceptualmente:

```text
Clase Java
Estudiante
   │
   ▼
@Entity
   │
   ▼
Tabla
estudiante
```

---

# Llave primaria

Una entidad necesita una forma de identificar cada registro.

Por ejemplo:

```java
@Id
private Long id;
```

La anotación:

```text
@Id
```

indica cuál propiedad representa la llave primaria.

---

# Ejemplo conceptual

Objeto Java:

```java
Estudiante estudiante = new Estudiante();
```

Tabla:

```text
estudiante

id | nombre | programa
---|--------|-----------------------
1  | Ana    | Ingeniería de Sistemas
```

El objeto y el registro representan la misma información en contextos distintos.

---

# CRUD

CRUD significa:

```text
Create
Read
Update
Delete
```

Estas operaciones pueden relacionarse con métodos de repositorio.

Por ejemplo:

```text
Create
→ save()

Read
→ findById()

Update
→ save()

Delete
→ deleteById()
```

---

# Relación CRUD - HTTP - Repository

```text
CREATE
POST
save()

READ
GET
findById()

UPDATE
PUT / PATCH
save()

DELETE
DELETE
deleteById()
```

Esto permite conectar la arquitectura completa.

---

# Ejemplo de flujo GET

```text
CLIENTE
   │
   │ GET /estudiantes/1
   ▼
CONTROLLER
   │
   ▼
SERVICE
   │
   ▼
REPOSITORY
   │
   │ findById(1)
   ▼
BASE DE DATOS
   │
   ▼
REPOSITORY
   │
   ▼
SERVICE
   │
   ▼
CONTROLLER
   │
   │ JSON
   ▼
CLIENTE
```

---

# Ejemplo de flujo POST

```text
CLIENTE
   │
   │ POST /estudiantes
   │ JSON
   ▼
CONTROLLER
   │
   ▼
SERVICE
   │
   ▼
REPOSITORY
   │
   │ save()
   ▼
BASE DE DATOS
```

---

# H2

H2 es una base de datos ligera que puede utilizarse durante desarrollo y pruebas.

El módulo institucional utiliza H2 como base de datos en memoria.

Puede imaginarse como una opción apropiada para:

```text
ejemplos
pruebas
prototipos
aprendizaje
```

---

# Base de datos en memoria

Cuando H2 se configura en memoria:

```text
Aplicación inicia
      │
      ▼
Base de datos creada
      │
      ▼
Aplicación funciona
      │
      ▼
Aplicación se detiene
      │
      ▼
Base de datos desaparece
```

Esto puede resultar útil para practicar sin instalar un motor externo.

---

# MySQL

La Unidad 2 de Lenguaje de Programación III también trabaja con MySQL.

En este caso la base de datos existe como servicio independiente.

Conceptualmente:

```text
SPRING BOOT
     │
     │ conexión
     ▼
MYSQL
     │
     ▼
datos persistentes
```

---

# Diferencia conceptual entre H2 y MySQL

## H2 en memoria

```text
ligero
rápido
práctico para ejemplos
datos temporales
```

## MySQL

```text
servidor de base de datos
persistencia real
uso más cercano a producción
requiere configuración externa
```

---

# Repositorio

Un repositorio puede declararse como:

```java
public interface EstudianteRepository
        extends JpaRepository<Estudiante, Long> {
}
```

Aquí se indica:

```text
Estudiante
→ entidad administrada

Long
→ tipo de la llave primaria
```

---

# Métodos disponibles

Al extender `JpaRepository`, se dispone de operaciones como:

```text
save()
findById()
findAll()
deleteById()
existsById()
```

sin necesidad de implementarlas manualmente.

---

# Consultas derivadas

Spring Data JPA permite construir consultas a partir del nombre del método.

Por ejemplo:

```java
findByNombre(String nombre)
```

Conceptualmente indica:

```text
buscar
por
nombre
```

---

# Otro ejemplo

```java
findByPrograma(String programa)
```

puede utilizarse para recuperar registros asociados con determinado programa.

---

# Relaciones entre entidades

Una aplicación puede tener entidades relacionadas.

Por ejemplo:

```text
CURSO
  │
  │ tiene
  ▼
ESTUDIANTES
```

o:

```text
ESTUDIANTE
    │
    │ pertenece a
    ▼
PROGRAMA
```

JPA permite representar estas relaciones entre objetos y tablas.

---

# Ejemplo conceptual

```text
Programa
   │
   ├── estudiante 1
   ├── estudiante 2
   └── estudiante 3
```

Dependiendo del modelo, pueden utilizarse relaciones como:

```text
OneToOne
OneToMany
ManyToOne
ManyToMany
```

---

# Capa de Service

Aunque el Repository permite acceder directamente a los datos, es conveniente mantener una separación de responsabilidades.

Por ejemplo:

```java
@Service
public class EstudianteService {

    private final EstudianteRepository repository;

    public EstudianteService(
        EstudianteRepository repository
    ) {
        this.repository = repository;
    }
}
```

---

# Inyección del Repository

Spring proporciona la instancia necesaria del Repository.

Conceptualmente:

```text
Spring
   │
   ▼
EstudianteRepository
   │
   ▼
EstudianteService
```

---

# Buscar un recurso

El Service podría utilizar:

```java
repository.findById(id)
```

El resultado puede indicar:

```text
recurso encontrado
```

o:

```text
recurso inexistente
```

---

# Manejo de recursos inexistentes

Si el estudiante no existe, la aplicación puede responder:

```text
404 Not Found
```

Esto conecta el acceso a datos con los códigos HTTP estudiados en la Unidad 1.

---

# Crear un recurso

Puede utilizarse:

```java
repository.save(estudiante);
```

El flujo conceptual es:

```text
JSON
 │
 ▼
DTO
 │
 ▼
SERVICE
 │
 ▼
ENTITY
 │
 ▼
REPOSITORY
 │
 ▼
BASE DE DATOS
```

---

# Actualizar un recurso

La actualización puede involucrar:

```text
1. buscar entidad;
2. validar existencia;
3. modificar propiedades;
4. guardar nuevamente.
```

---

# Eliminar un recurso

Conceptualmente:

```java
repository.deleteById(id);
```

Después podría responderse:

```text
204 No Content
```

si la operación fue exitosa y no se necesita enviar Body.

---

# Recurso recomendado

Revise los ejemplos de la Unidad 2 de Lenguaje de Programación III en orden.

Los ejemplos están numerados:

```text
U2_01
U2_02
U2_03
...
```

Cada ejemplo agrega nuevos conceptos de manera progresiva.

---

# Forma recomendada de estudio

Para cada ejemplo:

1. lea el README;
2. identifique la entidad;
3. revise la configuración;
4. localice Controller, Service y Repository;
5. ejecute la aplicación;
6. pruebe los endpoints;
7. revise la base de datos;
8. observe los códigos HTTP;
9. modifique algún dato;
10. vuelva a consultar.

---

# Ejecutar la Unidad 2

Desde la raíz del repositorio Lenguaje de Programación III:

```bash
mvn -pl unidad2 spring-boot:run
```

Para detener:

```text
Ctrl + C
```

---

# Ejecutar pruebas

Desde la raíz del repositorio:

```bash
mvn test
```

Esto ejecuta las pruebas disponibles.

---

# Relación con React

Al finalizar esta parte puede construirse una arquitectura:

```text
REACT
Front End
   │
   │ HTTP / JSON
   ▼
SPRING BOOT
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
BASE DE DATOS
```

---

# Flujo completo de una consulta

```text
Usuario
   │
   ▼
React
   │
   │ GET /estudiantes
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

# Antes de continuar

Compruebe que puede explicar:

1. ¿Qué significa persistencia?
2. ¿Qué es JPA?
3. ¿Qué función cumple Hibernate?
4. ¿Qué función cumple Spring Data JPA?
5. ¿Qué es una entidad?
6. ¿Qué hace `@Entity`?
7. ¿Qué hace `@Id`?
8. ¿Qué función cumple un Repository?
9. ¿Qué relación existe entre `JpaRepository` y CRUD?
10. ¿Qué hace `save()`?
11. ¿Qué hace `findById()`?
12. ¿Qué hace `findAll()`?
13. ¿Qué hace `deleteById()`?
14. ¿Qué diferencia conceptual existe entre H2 y MySQL?
15. ¿Qué es una consulta derivada?
16. ¿Qué significa una relación entre entidades?
17. ¿Por qué se mantiene la capa Service?
18. ¿Cómo se relacionan Controller, Service y Repository?
19. ¿Qué código HTTP podría utilizarse cuando un registro no existe?
20. ¿Cómo se integra React con una aplicación persistente?

---

# Reto

Imagine una entidad:

```text
Curso
```

con:

```text
id
nombre
creditos
programa
```

Proponga:

## Entidad

```text
Curso
```

## Repository

```text
CursoRepository
```

## Service

```text
CursoService
```

## Controller

```text
CursoController
```

---

# Endpoints propuestos

```text
GET /cursos

GET /cursos/{id}

POST /cursos

PUT /cursos/{id}

DELETE /cursos/{id}
```

---

# Códigos HTTP sugeridos

```text
GET exitoso
→ 200 OK

POST exitoso
→ 201 Created

datos incorrectos
→ 400 Bad Request

curso inexistente
→ 404 Not Found

DELETE exitoso
→ 204 No Content
```

---

# Conceptos retomados

* persistencia;
* base de datos;
* JPA;
* Hibernate;
* Spring Data JPA;
* entidad;
* `@Entity`;
* `@Id`;
* Repository;
* `JpaRepository`;
* CRUD;
* H2;
* MySQL;
* consultas derivadas;
* relaciones entre entidades;
* Controller;
* Service;
* Repository;
* HTTP;
* JSON.

---

# Conclusión

La persistencia permite que una aplicación gestione información de manera estructurada mediante una base de datos.

Spring Data JPA facilita la relación entre objetos Java y registros de una base de datos, mientras que los repositorios permiten realizar operaciones CRUD sin implementar manualmente cada consulta básica.

La arquitectura Controller - Service - Repository ayuda a separar responsabilidades y prepara la aplicación para integrar un Front End React con un Back End Spring Boot y una base de datos.


---

## Continuar la práctica

- **Ejemplo anterior:** [Ejemplo 01 - Fundamentos de Spring Boot y APIs REST](../ejemplo01-fundamentos-spring/README.md)
- **Volver a la unidad:** [Unidad 4 - Desarrollo Back End con Spring Boot](../README.md)
- **Volver al índice:** [Todas las unidades](../../README.md)
- **Siguiente ejemplo:** [Ejemplo 03 - Pruebas automatizadas del Back End](../ejemplo03-pruebas-backend/README.md)
