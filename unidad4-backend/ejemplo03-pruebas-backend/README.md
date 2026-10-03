# Ejemplo 03 - Pruebas automatizadas del Back End

[Volver a la unidad](../README.md) · [Volver al índice del curso](../../README.md)

## Unidad 4 - Desarrollo Back End

Este ejemplo introduce las pruebas automatizadas aplicadas a una API desarrollada con Spring Boot.

El módulo institucional incluye pruebas unitarias utilizando **JUnit** y **Mockito**, además de pruebas del Controller mediante herramientas de Spring.

Como estos contenidos ya se encuentran desarrollados y documentados en el repositorio del curso **Lenguaje de Programación III**, no se duplicará el mismo código dentro de este repositorio.

Se utilizarán como referencia los ejemplos correspondientes a:

* JUnit 5;
* Mockito;
* MockMvc;
* pruebas de Service;
* pruebas de Controller;
* mocks;
* assertions;
* respuestas HTTP.

---

# Objetivo de aprendizaje

Al finalizar la revisión de estos recursos, el estudiante estará en capacidad de:

* comprender qué es una prueba automatizada;
* diferenciar una prueba unitaria de una prueba del Controller;
* utilizar JUnit 5;
* utilizar Mockito;
* comprender qué es un mock;
* probar una clase Service de forma aislada;
* simular dependencias;
* definir comportamientos mediante `when()` y `thenReturn()`;
* comprobar resultados mediante assertions;
* utilizar MockMvc;
* probar endpoints sin levantar necesariamente un servidor completo;
* comprobar códigos HTTP;
* comprobar contenido JSON;
* reconocer la utilidad de las pruebas para detectar regresiones.

---

# Recurso principal

Consulte:

[Unidad 1 - Estructura de una API Web](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad1)

Dentro de esta unidad se encuentran los ejemplos relacionados con pruebas de aplicaciones Spring Boot.

Los contenidos incluyen:

```text
JUnit 5
Mockito
MockMvc
Service tests
Controller tests
```

---

# ¿Qué es una prueba automatizada?

Una prueba automatizada ejecuta código para comprobar que un comportamiento coincide con un resultado esperado.

Conceptualmente:

```text
CÓDIGO
   │
   ▼
PRUEBA
   │
   ├── prepara
   ├── ejecuta
   ├── compara
   │
   ▼
PASS / FAIL
```

---

# ¿Por qué probar el Back End?

Una API puede funcionar correctamente y posteriormente presentar errores después de una modificación.

Por ejemplo:

```text
API funciona
    │
    ▼
Se modifica Service
    │
    ▼
Se ejecutan pruebas
    │
    ├── PASS
    │   └── comportamiento conservado
    │
    └── FAIL
        └── revisar modificación
```

Las pruebas permiten detectar estos problemas más rápidamente.

---

# Tipos de pruebas trabajados

En esta parte se estudian principalmente:

```text
Pruebas unitarias
Pruebas del Controller
```

---

# Prueba unitaria

Una prueba unitaria comprueba una porción pequeña de código de manera aislada.

Por ejemplo:

```text
EstudianteService
```

sin necesidad de utilizar realmente:

```text
base de datos
servidor HTTP
servicios externos
```

---

# Ejemplo conceptual

Suponga un método:

```java
public Estudiante obtenerEstudiante(Long id) {
    ...
}
```

Una prueba podría comprobar:

```text
si existe el estudiante
→ retornar estudiante
```

y:

```text
si no existe
→ lanzar excepción
```

---

# JUnit 5

JUnit es el framework utilizado para estructurar y ejecutar pruebas en Java.

Una prueba puede identificarse mediante:

```java
@Test
```

Ejemplo:

```java
@Test
void debeRetornarEstudiante() {
    ...
}
```

---

# Assertions

Las assertions permiten comparar:

```text
resultado obtenido
```

contra:

```text
resultado esperado
```

Por ejemplo:

```java
assertEquals(
    esperado,
    obtenido
);
```

---

# `assertEquals()`

Puede interpretarse como:

> Verificar que los dos valores sean iguales.

Ejemplo conceptual:

```text
esperado = "Ana"

obtenido = "Ana"

resultado
PASS
```

---

# `assertThrows()`

También puede comprobarse que una operación lance una excepción.

Ejemplo:

```java
assertThrows(
    EstudianteNoEncontradoException.class,
    () -> service.obtenerEstudiante(999L)
);
```

El resultado será exitoso si se genera la excepción esperada.

---

# Mockito

Mockito permite crear objetos simulados.

Estos objetos reciben el nombre de:

```text
mocks
```

---

# ¿Qué es un mock?

Un mock simula el comportamiento de una dependencia real.

Por ejemplo:

```text
EstudianteService
       │
       ▼
EstudianteRepository
```

Durante una prueba no siempre queremos utilizar una base de datos real.

Podemos reemplazar:

```text
EstudianteRepository real
```

por:

```text
EstudianteRepository mock
```

---

# Flujo conceptual

```text
PRUEBA
   │
   ▼
SERVICE
   │
   ▼
REPOSITORY MOCK
   │
   ▼
respuesta controlada
```

Esto permite probar exclusivamente la lógica del Service.

---

# `@Mock`

Mockito puede crear una dependencia simulada mediante:

```java
@Mock
private EstudianteRepository repository;
```

---

# `@InjectMocks`

Puede utilizarse:

```java
@InjectMocks
private EstudianteService service;
```

para crear el objeto que se quiere probar e inyectarle los mocks necesarios.

---

# Relación

```text
@Mock
Repository
    │
    ▼
@InjectMocks
Service
```

---

# Definir comportamiento del mock

Mockito permite indicar:

```text
cuando ocurra X
retornar Y
```

mediante:

```java
when(...)
    .thenReturn(...);
```

---

# Ejemplo

```java
when(
    repository.findById(1L)
).thenReturn(
    Optional.of(estudiante)
);
```

Esto significa:

> Cuando el código busque el estudiante 1, retornar este estudiante simulado.

---

# Ventaja

La prueba no depende de:

```text
una base de datos
datos reales
configuración externa
```

El escenario está completamente controlado.

---

# Probar un Service

Un flujo típico puede ser:

```text
ARRANGE
│
├── crear datos
├── configurar mock
│
▼
ACT
│
└── ejecutar Service
│
▼
ASSERT
│
└── verificar resultado
```

---

# Patrón Arrange - Act - Assert

## Arrange

Preparar:

```text
objetos
mocks
datos esperados
```

## Act

Ejecutar:

```text
método bajo prueba
```

## Assert

Comprobar:

```text
resultado
excepción
interacción
```

---

# Ejemplo conceptual

```java
// Arrange
when(repository.findById(1L))
    .thenReturn(Optional.of(estudiante));

// Act
Estudiante resultado =
    service.obtenerEstudiante(1L);

// Assert
assertEquals(
    estudiante,
    resultado
);
```

---

# Prueba cuando el recurso no existe

Puede configurarse:

```java
when(
    repository.findById(999L)
).thenReturn(
    Optional.empty()
);
```

Después comprobar:

```java
assertThrows(
    EstudianteNoEncontradoException.class,
    () -> service.obtenerEstudiante(999L)
);
```

---

# Pruebas del Controller

Además de probar la lógica del Service, también puede probarse la capa HTTP.

Conceptualmente:

```text
PRUEBA
   │
   │ GET /estudiantes/1
   ▼
CONTROLLER
   │
   ▼
SERVICE MOCK
   │
   ▼
HTTP RESPONSE
```

---

# MockMvc

Spring proporciona:

```text
MockMvc
```

para simular solicitudes HTTP sobre Controllers.

Esto permite comprobar aspectos como:

```text
ruta
método HTTP
status
body JSON
```

---

# Ejemplo conceptual

```java
mockMvc.perform(
    get("/estudiantes/1")
)
.andExpect(
    status().isOk()
);
```

Esto comprueba que:

```text
GET /estudiantes/1
```

responda:

```text
200 OK
```

---

# Comprobar JSON

También puede verificarse el contenido.

Ejemplo:

```java
.andExpect(
    jsonPath("$.nombre")
        .value("Ana")
);
```

Esto comprueba que el JSON contenga:

```json
{
  "nombre": "Ana"
}
```

---

# `jsonPath()`

Permite localizar elementos dentro del JSON.

Por ejemplo:

```text
$.nombre
```

representa la propiedad:

```text
nombre
```

del objeto raíz.

---

# Comprobar código 404

Una prueba también podría ejecutar:

```text
GET /estudiantes/999
```

y esperar:

```text
404 Not Found
```

---

# Ejemplo conceptual

```java
mockMvc.perform(
    get("/estudiantes/999")
)
.andExpect(
    status().isNotFound()
);
```

---

# Service real frente a Service mock

Cuando se prueba el Controller no necesitamos probar nuevamente toda la lógica del Service.

Podemos utilizar:

```text
Service mock
```

para controlar la respuesta.

---

# Separación de responsabilidades en pruebas

```text
SERVICE TEST
│
└── prueba lógica del Service

CONTROLLER TEST
│
└── prueba comportamiento HTTP
```

Esto facilita identificar dónde ocurre un error.

---

# Ejemplo

Si falla:

```text
ServiceTest
```

podría existir un problema en:

```text
lógica de negocio
```

Si falla:

```text
ControllerTest
```

podría existir un problema en:

```text
ruta
status HTTP
serialización
manejo de respuesta
```

---

# Resultado de las pruebas

Al ejecutar:

```bash
mvn test
```

Maven compila el proyecto y ejecuta las pruebas disponibles.

Un resultado correcto mostrará pruebas exitosas.

---

# Ejecutar pruebas de Lenguaje de Programación III

Desde la raíz del repositorio:

```bash
mvn test
```

También pueden ejecutarse pruebas de una unidad específica.

Por ejemplo:

```bash
mvn -pl unidad1 test
```

---

# Flujo completo

```text
MAVEN
  │
  ▼
JUnit
  │
  ├── ServiceTest
  │      │
  │      ▼
  │    Mockito
  │
  │
  └── ControllerTest
         │
         ▼
       MockMvc
```

---

# Pruebas y base de datos

Una prueba unitaria de Service no debería depender necesariamente de una base de datos real.

Por eso se utilizan mocks.

Esto permite:

```text
rapidez
aislamiento
resultados reproducibles
```

---

# Pruebas y APIs externas

De la misma manera, una prueba unitaria no debería depender necesariamente de que una API externa esté disponible.

Las dependencias pueden simularse para controlar el comportamiento esperado.

---

# Ventaja del aislamiento

Imagine que la API externa está caída.

Si una prueba unitaria dependiera directamente de ella:

```text
API externa falla
       │
       ▼
prueba falla
```

aunque nuestro código estuviera correcto.

Los mocks ayudan a evitar esta dependencia en pruebas unitarias.

---

# Diferencia con pruebas de integración

Las pruebas vistas aquí buscan aislar componentes específicos.

Una prueba de integración puede comprobar varias partes trabajando juntas.

Por ejemplo:

```text
Controller
+
Service
+
Repository
+
Base de datos
```

Ese tipo de prueba tiene un propósito diferente.

---

# Relación con React

En la Unidad 3 ya se realizaron pruebas de componentes React mediante:

```text
Vitest
React Testing Library
```

Ahora se realizan pruebas del Back End con:

```text
JUnit 5
Mockito
MockMvc
```

---

# Comparación

| Front End             | Back End             |
| --------------------- | -------------------- |
| Vitest                | JUnit 5              |
| React Testing Library | MockMvc              |
| user-event            | Mockito              |
| Componentes React     | Service / Controller |

El objetivo común es verificar automáticamente el comportamiento.

---

# Filosofía común

En ambos casos:

```text
PREPARAR
   │
   ▼
EJECUTAR
   │
   ▼
COMPROBAR
```

---

# Recurso recomendado

Revise los ejemplos de pruebas disponibles en la Unidad 1 del repositorio de Lenguaje de Programación III.

Para cada ejemplo:

1. lea su README;
2. revise la clase que se está probando;
3. revise la clase de prueba;
4. identifique los mocks;
5. identifique el escenario;
6. ejecute las pruebas;
7. modifique temporalmente el código;
8. observe cómo falla una prueba;
9. restaure el comportamiento correcto.

---

# Prueba pedagógica recomendada

Una forma útil de comprender el valor de las pruebas es provocar deliberadamente un error.

Por ejemplo, cambie temporalmente:

```text
valor esperado
```

o:

```text
código HTTP
```

Ejecute:

```bash
mvn test
```

Observe la prueba fallida.

Después restaure el código correcto y vuelva a ejecutar.

---

# Reto 1 - Service

Cree una prueba para comprobar que:

```text
obtenerCurso(1)
```

retorna correctamente un curso existente.

---

# Reto 2 - Recurso inexistente

Compruebe que:

```text
obtenerCurso(999)
```

genere una excepción apropiada.

---

# Reto 3 - Controller

Pruebe:

```text
GET /cursos/1
```

y compruebe:

```text
200 OK
```

---

# Reto 4 - 404

Pruebe:

```text
GET /cursos/999
```

y compruebe:

```text
404 Not Found
```

---

# Reto 5 - JSON

Compruebe que:

```text
GET /cursos/1
```

devuelva un JSON cuyo:

```text
nombre
```

tenga el valor esperado.

---

# Reto 6 - POST

Cree una prueba para un endpoint:

```text
POST /cursos
```

y compruebe:

```text
201 Created
```

---

# Preguntas de análisis

1. ¿Qué es una prueba automatizada?
2. ¿Qué es una prueba unitaria?
3. ¿Qué función cumple JUnit?
4. ¿Qué es una assertion?
5. ¿Para qué sirve `assertEquals()`?
6. ¿Para qué sirve `assertThrows()`?
7. ¿Qué es Mockito?
8. ¿Qué es un mock?
9. ¿Por qué puede ser útil simular un Repository?
10. ¿Qué función cumple `@Mock`?
11. ¿Qué función cumple `@InjectMocks`?
12. ¿Qué hace `when()`?
13. ¿Qué hace `thenReturn()`?
14. ¿Qué significa Arrange - Act - Assert?
15. ¿Qué función cumple MockMvc?
16. ¿Qué puede comprobar `status()`?
17. ¿Qué función cumple `jsonPath()`?
18. ¿Por qué conviene probar Service y Controller por separado?
19. ¿Qué ventaja proporciona evitar una base de datos real en una prueba unitaria?
20. ¿Qué diferencia existe entre las pruebas del Front End y del Back End?

---

# Resultado esperado

Después de revisar los ejemplos, el estudiante debe comprender:

```text
BACK END
│
├── SERVICE
│   └── JUnit + Mockito
│
└── CONTROLLER
    └── JUnit + MockMvc
```

y ser capaz de interpretar una prueba como:

```text
Arrange
   │
   ▼
Act
   │
   ▼
Assert
```

---

# Conceptos trabajados

* pruebas automatizadas;
* pruebas unitarias;
* JUnit 5;
* Mockito;
* Mock;
* `@Mock`;
* `@InjectMocks`;
* `when`;
* `thenReturn`;
* assertions;
* `assertEquals`;
* `assertThrows`;
* MockMvc;
* pruebas de Controller;
* códigos HTTP;
* JSON;
* `jsonPath`;
* aislamiento de dependencias.

---

# Conclusión

Las pruebas automatizadas permiten verificar que la lógica del Back End y los endpoints HTTP mantengan el comportamiento esperado.

JUnit proporciona la estructura de las pruebas, Mockito permite aislar dependencias mediante mocks y MockMvc facilita comprobar el comportamiento de los Controllers.

Estos recursos ayudan a detectar errores tempranamente y hacen más seguro modificar una aplicación a medida que aumenta su complejidad.


---

## Continuar la práctica

- **Ejemplo anterior:** [Ejemplo 02 - Persistencia con JPA y Spring Data](../ejemplo02-persistencia-jpa/README.md)
- **Volver a la unidad:** [Unidad 4 - Desarrollo Back End con Spring Boot](../README.md)
- **Volver al índice:** [Todas las unidades](../../README.md)
- **Siguiente ejemplo:** [Ejemplo 04 - Consumo de una API externa desde Spring Boot](../ejemplo04-consumo-api-externa/README.md)
