# Ejemplo 04 - Consumo de una API externa desde Spring Boot

## Unidad 4 - Desarrollo Back End

Este ejemplo aborda la integración de una aplicación Spring Boot con servicios web externos.

El módulo institucional propone realizar este tipo de integración utilizando `RestTemplate`.

En este repositorio se mantiene el mismo objetivo formativo, pero se utiliza un enfoque más actual mediante:

```text
RestClient
```

Los ejemplos correspondientes ya se encuentran desarrollados y documentados en la **Unidad 2 del repositorio Lenguaje de Programación III**, por lo que no se duplicará el mismo código aquí.

---

# Objetivo de aprendizaje

Al finalizar la revisión de estos recursos, el estudiante estará en capacidad de:

* comprender qué significa consumir una API externa;
* identificar cuándo una aplicación Back End actúa como cliente HTTP;
* realizar solicitudes HTTP desde Spring Boot;
* utilizar `RestClient`;
* recibir respuestas JSON;
* convertir respuestas JSON en objetos Java;
* separar la lógica de integración externa del Controller;
* manejar errores producidos por servicios externos;
* reconocer la diferencia entre una API propia y una API externa;
* comprender la relación entre Front End, Back End y servicios de terceros.

---

# Recurso principal

Consulte:

[Unidad 2 - Comunicación con servicios externos](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad2)

Dentro de esta unidad se encuentran ejemplos relacionados con:

* consumo de APIs externas;
* `RestClient`;
* DTO;
* mapeo de respuestas;
* integración con servicios externos;
* manejo de errores;
* persistencia;
* JPA;
* H2;
* MySQL.

---

# Arquitectura del ejemplo

Una aplicación Spring Boot puede actuar como servidor para un cliente y, al mismo tiempo, como cliente de otro servicio.

Conceptualmente:

```text
CLIENTE
React / navegador
     │
     │ HTTP
     ▼
SPRING BOOT
     │
     │ HTTP
     ▼
API EXTERNA
     │
     │ JSON
     ▼
SPRING BOOT
     │
     │ JSON
     ▼
CLIENTE
```

Esto significa que Spring Boot puede cumplir dos roles distintos:

```text
Servidor
│
└── frente al Front End

Cliente
│
└── frente a la API externa
```

---

# Ejemplo conceptual

Imagine una aplicación que consulta información meteorológica.

El Front End realiza:

```text
GET /clima/Sahagún
```

hacia nuestro Back End.

Spring Boot recibe la solicitud.

Posteriormente Spring Boot consulta:

```text
API meteorológica externa
```

y recibe información.

Finalmente transforma la respuesta y la devuelve al Front End.

---

# Flujo completo

```text
USUARIO
   │
   ▼
REACT
   │
   │ GET /clima/Sahagún
   ▼
SPRING BOOT
   │
   │ GET
   ▼
API EXTERNA
   │
   │ JSON
   ▼
SPRING BOOT
   │
   │ procesa
   ▼
REACT
   │
   ▼
USUARIO
```

---

# ¿Qué es una API externa?

Una API externa es un servicio que no forma parte directamente de nuestra aplicación, pero expone funcionalidades o información que podemos utilizar.

Por ejemplo:

```text
clima
tasas de cambio
mapas
noticias
datos deportivos
repositorios
traducción
```

---

# Diferencia entre API propia y API externa

## API propia

Es desarrollada y controlada por nuestro equipo.

Por ejemplo:

```text
GET /estudiantes
```

## API externa

Es desarrollada por otra organización.

Por ejemplo:

```text
GET https://api.ejemplo.com/clima
```

---

# Spring Boot como cliente HTTP

Hasta ahora Spring Boot se utilizó principalmente como servidor:

```text
CLIENTE
   │
   ▼
SPRING BOOT
```

Ahora también se utilizará así:

```text
SPRING BOOT
   │
   ▼
API EXTERNA
```

---

# RestClient

`RestClient` permite realizar solicitudes HTTP desde una aplicación Spring Boot.

Conceptualmente:

```java
RestClient
```

actúa como cliente HTTP.

---

# Ejemplo conceptual

```java
RestClient restClient =
    RestClient.create();
```

Posteriormente puede utilizarse para realizar una solicitud.

Por ejemplo:

```java
restClient
    .get()
    .uri(url)
    .retrieve();
```

---

# Flujo de RestClient

```text
Spring Boot
    │
    ▼
RestClient
    │
    │ HTTP Request
    ▼
API externa
    │
    │ HTTP Response
    ▼
RestClient
    │
    ▼
Objeto Java
```

---

# Relación con RestTemplate

El módulo institucional utiliza:

```text
RestTemplate
```

para realizar solicitudes HTTP desde Spring Boot.

En estos recursos se utiliza:

```text
RestClient
```

El propósito conceptual es el mismo:

```text
Aplicación Spring Boot
        │
        ▼
Cliente HTTP
        │
        ▼
Servicio externo
```

---

# ¿Por qué no se copia el ejemplo original?

El objetivo del curso no es memorizar una clase concreta.

Lo importante es comprender:

```text
cómo realizar una solicitud externa
cómo recibir una respuesta
cómo procesar JSON
cómo manejar errores
```

Por esta razón se utiliza el enfoque ya implementado y documentado en Lenguaje de Programación III.

---

# JSON recibido

Una API externa puede responder:

```json
{
  "nombre": "Sahagún",
  "temperatura": 31,
  "condicion": "Soleado"
}
```

Spring Boot necesita convertir esta información en objetos Java.

---

# DTO

Puede crearse:

```java
public record ClimaResponse(
    String nombre,
    Double temperatura,
    String condicion
) {
}
```

Conceptualmente:

```text
JSON
 │
 ▼
DTO Java
 │
 ▼
Aplicación
```

---

# Mapeo de información

Una respuesta externa puede contener mucha más información de la que nuestra aplicación necesita.

Por ejemplo, la API podría responder:

```json
{
  "id": 123,
  "nombre": "Sahagún",
  "temperatura": 31,
  "humedad": 78,
  "presion": 1011,
  "pais": "CO",
  "zonaHoraria": "...",
  "informacionAdicional": "..."
}
```

Pero nuestra aplicación podría utilizar solamente:

```text
nombre
temperatura
humedad
```

---

# Ventaja de utilizar DTO

Permite definir claramente:

```text
qué información necesitamos
qué información exponemos
```

sin acoplar completamente nuestra aplicación a la estructura externa.

---

# Separación de responsabilidades

No conviene colocar toda la lógica de consumo externo dentro del Controller.

Una arquitectura puede ser:

```text
CONTROLLER
    │
    ▼
SERVICE
    │
    ▼
CLIENTE EXTERNO
RestClient
    │
    ▼
API EXTERNA
```

---

# Controller

El Controller recibe la solicitud de nuestro cliente.

Por ejemplo:

```text
GET /clima/Sahagún
```

---

# Service

El Service coordina la operación.

Puede:

```text
validar parámetros
consultar servicio externo
transformar datos
aplicar reglas
```

---

# Cliente externo

Una clase específica puede encargarse de comunicarse con la API.

Conceptualmente:

```text
ClimaClient
```

o:

```text
ClimaGateway
```

dependiendo de la arquitectura utilizada.

---

# Ejemplo de organización

```text
controller/
    ClimaController

service/
    ClimaService

client/
    ClimaClient

dto/
    ClimaResponse
```

---

# Ventaja

Esta organización evita:

```text
Controller con demasiada lógica
```

y facilita:

```text
pruebas
mantenimiento
reutilización
```

---

# Configurar URL externa

La dirección de una API externa no debería necesariamente quedar escrita en múltiples clases.

Puede configurarse en:

```text
application.properties
```

o:

```text
application.yml
```

Por ejemplo:

```properties
api.clima.url=https://api.ejemplo.com
```

---

# Ventaja de configuración externa

Permite cambiar:

```text
URL de desarrollo
URL de pruebas
URL de producción
```

sin modificar directamente la lógica principal.

---

# Solicitud GET

Una integración simple puede realizar:

```text
GET
```

hacia una API externa.

Por ejemplo:

```text
GET https://api.ejemplo.com/usuarios/1
```

La respuesta podría convertirse directamente a un DTO.

---

# Response externo

Debe verificarse:

```text
status HTTP
body
headers
```

igual que en cualquier comunicación HTTP.

Esto conecta nuevamente con la Unidad 1.

---

# Código 200

Una respuesta:

```text
200 OK
```

indica que el servicio externo procesó correctamente la solicitud.

---

# Código 404

Una respuesta:

```text
404 Not Found
```

podría indicar que el recurso solicitado no existe en el servicio externo.

---

# Código 500

También podría recibirse:

```text
500 Internal Server Error
```

si ocurre un problema dentro del servicio externo.

---

# ¿Qué debería hacer nuestra aplicación?

No conviene simplemente ignorar esos errores.

Nuestro Back End debe decidir cómo reaccionar.

Por ejemplo:

```text
API externa responde 404
       │
       ▼
Spring Boot interpreta
       │
       ▼
genera respuesta adecuada
       │
       ▼
cliente recibe información clara
```

---

# Manejo de errores

Puede ser necesario manejar:

```text
timeout
conexión fallida
404
500
respuesta inesperada
JSON incorrecto
```

---

# Error externo frente a error interno

Debe diferenciarse:

```text
Error de nuestra aplicación
```

de:

```text
Error producido por un servicio externo
```

Esto resulta especialmente importante para diagnóstico y logging.

---

# Ejemplo conceptual

Imagine que:

```text
React
   │
   ▼
Spring Boot
   │
   ▼
API externa
```

y la API externa no responde.

Spring Boot debería evitar devolver simplemente:

```text
500
```

sin contexto.

Puede generar una respuesta controlada.

---

# Ejemplo de respuesta controlada

```json
{
  "error": "No fue posible consultar el servicio externo"
}
```

---

# Timeout

Cuando una aplicación consulta un servicio externo existe el riesgo de esperar demasiado tiempo.

Por eso deben existir límites de espera.

Conceptualmente:

```text
Spring Boot
   │
   │ solicitud
   ▼
API externa
   │
   │ no responde
   ▼
timeout
   │
   ▼
manejo de error
```

---

# ¿Por qué es importante?

Sin límites adecuados, una dependencia externa podría afectar el rendimiento de nuestra propia aplicación.

---

# Integración con Service

El Service podría utilizar:

```text
Cliente externo
```

de la misma manera que anteriormente utilizó:

```text
Repository
```

Comparación:

```text
SERVICE
│
├── Repository
│   └── obtiene datos internos
│
└── Client
    └── obtiene datos externos
```

---

# Repository frente a API externa

## Repository

Consulta:

```text
nuestra base de datos
```

## Cliente externo

Consulta:

```text
otro sistema
```

Ambos proporcionan información al Service.

---

# Arquitectura completa

Una aplicación podría utilizar simultáneamente:

```text
CLIENTE
   │
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

---

# Ejemplo

Imagine una aplicación de viajes.

El Service puede consultar:

```text
Repository
→ información de reservas
```

y:

```text
API externa
→ clima del destino
```

Después combinar los resultados.

---

# Relación con microservicios

El consumo de APIs externas también permite comprender cómo distintas aplicaciones pueden comunicarse entre sí.

Por ejemplo:

```text
Servicio A
   │
   │ HTTP
   ▼
Servicio B
```

Esto se relaciona con las arquitecturas estudiadas en la Unidad 1.

---

# Independencia tecnológica

El servicio externo puede estar desarrollado con:

```text
Java
Python
JavaScript
C#
Go
PHP
```

Nuestra aplicación Spring Boot no necesita conocer su implementación interna.

Necesita conocer:

```text
URL
método HTTP
headers
body
estructura de respuesta
```

---

# Contrato

Puede pensarse que una API proporciona un contrato.

Por ejemplo:

```text
GET /usuarios/{id}
```

espera:

```text
id
```

y devuelve determinado JSON.

Mientras el contrato se conserve, las tecnologías internas pueden cambiar.

---

# Recurso recomendado

Revise los ejemplos correspondientes a consumo de APIs externas dentro de:

[Unidad 2 - Lenguaje de Programación III](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-3/tree/main/unidad2)

Siga el orden definido en el README de la unidad.

---

# Forma recomendada de estudio

Para el ejemplo correspondiente:

1. lea el README;
2. identifique la URL externa;
3. localice el cliente HTTP;
4. identifique `RestClient`;
5. revise el DTO de respuesta;
6. identifique el Service;
7. localice el Controller;
8. ejecute la aplicación;
9. pruebe el endpoint propio;
10. observe cómo se llama al servicio externo;
11. revise el JSON final.

---

# Ejecutar la Unidad 2

Desde la raíz del repositorio de Lenguaje de Programación III:

```bash
mvn -pl unidad2 spring-boot:run
```

---

# Detener

```text
Ctrl + C
```

---

# Probar endpoints

Puede utilizar:

```text
curl
Postman
Bruno
```

Los comandos específicos se encuentran documentados dentro de los ejemplos del repositorio.

---

# Observar la comunicación

Cuando pruebe la aplicación, identifique dos comunicaciones diferentes.

## Comunicación 1

```text
CLIENTE
   │
   │ HTTP
   ▼
SPRING BOOT
```

## Comunicación 2

```text
SPRING BOOT
   │
   │ HTTP
   ▼
API EXTERNA
```

---

# Spring Boot cumple dos roles

Puede representarse:

```text
        SERVIDOR
CLIENTE ───────► SPRING BOOT
                     │
                     │ CLIENTE
                     ▼
                API EXTERNA
```

Este es uno de los conceptos más importantes de la práctica.

---

# Reto 1 - Cambiar recurso externo

Seleccione otra operación disponible en la API utilizada por el ejemplo.

Agregue un nuevo endpoint propio para consumirla.

---

# Reto 2 - DTO reducido

Si la API externa devuelve diez propiedades, cree un DTO que utilice solamente tres.

Explique por qué no necesita exponer toda la respuesta externa.

---

# Reto 3 - Manejo de 404

Simule o consulte un recurso externo inexistente.

Compruebe qué código devuelve la API y cómo responde su aplicación.

---

# Reto 4 - Error de URL

Cambie temporalmente la URL externa por una dirección incorrecta.

Observe:

```text
logs
excepción
respuesta HTTP
```

Después restaure la configuración correcta.

---

# Reto 5 - Nueva API

Seleccione una API pública y proponga una integración.

Defina:

```text
URL
método
DTO
endpoint propio
```

No es necesario implementar el reto si la API requiere autenticación compleja.

---

# Reto 6 - Combinar datos internos y externos

Imagine:

```text
Curso
```

almacenado en nuestra base de datos.

Proponga un Service que además consulte una API externa para agregar información complementaria.

Explique el flujo.

---

# Preguntas de análisis

1. ¿Qué significa consumir una API externa?
2. ¿Quién actúa como cliente cuando Spring Boot llama otro servicio?
3. ¿Qué función cumple `RestClient`?
4. ¿Qué diferencia existe entre una API propia y una externa?
5. ¿Qué formato se utiliza frecuentemente para las respuestas?
6. ¿Qué función cumple un DTO?
7. ¿Por qué no siempre conviene utilizar toda la respuesta de una API?
8. ¿Qué responsabilidad debería tener el Controller?
9. ¿Qué responsabilidad puede tener el Service?
10. ¿Por qué conviene separar el cliente externo en otra clase?
11. ¿Qué información necesita conocer nuestra aplicación para consumir una API?
12. ¿Necesita conocer el lenguaje utilizado para desarrollar la API externa?
13. ¿Qué ocurre si la API externa devuelve 404?
14. ¿Qué ocurre si no responde?
15. ¿Qué es un timeout?
16. ¿Por qué una dependencia externa puede afectar nuestro sistema?
17. ¿Qué diferencia existe entre Repository y cliente externo?
18. ¿Puede un Service utilizar ambos?
19. ¿Cómo se relaciona esta práctica con microservicios?
20. ¿Cómo se relacionará este flujo con React?

---

# Resultado esperado

Al finalizar, el estudiante debe comprender:

```text
SPRING BOOT
│
├── puede actuar como servidor
│
└── puede actuar como cliente
```

y ser capaz de interpretar:

```text
REACT
   │
   ▼
SPRING BOOT
   │
   ▼
RESTCLIENT
   │
   ▼
API EXTERNA
```

---

# Conceptos trabajados

* API externa;
* cliente HTTP;
* servidor HTTP;
* Spring Boot;
* RestClient;
* DTO;
* JSON;
* Request;
* Response;
* códigos HTTP;
* manejo de errores;
* timeout;
* Service;
* Controller;
* separación de responsabilidades;
* integración entre aplicaciones.

---

# Conclusión

Una aplicación Back End no solamente recibe solicitudes: también puede necesitar comunicarse con otros sistemas.

`RestClient` permite realizar solicitudes HTTP desde Spring Boot y procesar respuestas proporcionadas por APIs externas.

La separación entre Controller, Service y cliente externo ayuda a mantener una arquitectura organizada y facilita el manejo de errores, las pruebas y el mantenimiento.

Este tipo de integración es fundamental en aplicaciones modernas, donde una solución suele depender de múltiples servicios internos y externos.
