# Ejemplo 02 - Métodos HTTP, Request y Response

## Unidad 1 - Fundamentos de programación web

Este ejemplo permite experimentar directamente con el protocolo HTTP y observar cómo cambia una solicitud dependiendo del método utilizado, la URL, los encabezados y el cuerpo enviado.

A diferencia del ejemplo anterior, donde solamente se utilizó el método `GET`, en este ejercicio se trabajará con diferentes métodos HTTP para consultar, crear, modificar y eliminar recursos.

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de:

* identificar las principales partes de un Request HTTP;
* identificar las principales partes de un Response HTTP;
* diferenciar los métodos `GET`, `POST`, `PUT`, `PATCH`, `DELETE` y `OPTIONS`;
* enviar información utilizando el cuerpo de un Request;
* utilizar el encabezado `Content-Type`;
* interpretar diferentes códigos de estado HTTP;
* comprender la relación entre los métodos HTTP y operaciones CRUD;
* observar cómo un servidor recibe y procesa diferentes tipos de solicitudes.

---

# Estructura del ejemplo

```text
ejemplo02-http/
│
├── servidor/
│   └── server.js
│
├── requests.http
│
└── README.md
```

---

# Requisitos

Para ejecutar el ejemplo se necesita:

* Node.js;
* Visual Studio Code o cualquier editor;
* navegador web;
* opcionalmente, una extensión que permita ejecutar archivos `.http`.

Compruebe que Node.js está instalado ejecutando:

```bash
node --version
```

---

# Paso 1. Iniciar el servidor

Abra una terminal dentro de:

```text
servidor
```

Ejecute:

```bash
node server.js
```

Debe aparecer:

```text
Servidor HTTP ejecutándose en http://localhost:3000
```

La terminal debe permanecer abierta durante todas las pruebas.

---

# Recursos utilizados

El servidor maneja un recurso denominado:

```text
estudiantes
```

Inicialmente existen dos estudiantes:

```json
[
  {
    "id": 1,
    "nombre": "Ana",
    "programa": "Ingeniería de Sistemas"
  },
  {
    "id": 2,
    "nombre": "Carlos",
    "programa": "Ingeniería Industrial"
  }
]
```

Los datos solamente se almacenan en memoria.

Esto significa que si el servidor se detiene y vuelve a iniciar, los datos regresarán a su estado original.

En ejemplos posteriores se utilizará una base de datos para conseguir persistencia.

---

# ¿Qué es un Request HTTP?

Un Request es el mensaje que un cliente envía al servidor para solicitar alguna operación.

De manera simplificada puede contener:

```text
Método HTTP
URL
Headers
Body
```

No todos los Requests necesitan Body.

Por ejemplo:

```http
GET http://localhost:3000/estudiantes
```

no necesita enviar información adicional.

En cambio:

```http
POST http://localhost:3000/estudiantes
Content-Type: application/json

{
    "nombre": "Laura",
    "programa": "Ingeniería de Sistemas"
}
```

contiene:

```text
Método:
POST

URL:
http://localhost:3000/estudiantes

Header:
Content-Type: application/json

Body:
{
    "nombre": "Laura",
    "programa": "Ingeniería de Sistemas"
}
```

---

# ¿Qué es un Response HTTP?

El Response es el mensaje que el servidor envía como respuesta a un Request.

Puede contener:

```text
Código de estado
Headers
Body
```

Por ejemplo:

```text
201 Created
```

acompañado por:

```json
{
  "id": 3,
  "nombre": "Laura",
  "programa": "Ingeniería de Sistemas"
}
```

---

# Métodos HTTP utilizados

En este ejemplo se utilizarán:

| Método    | Operación              | Uso en el ejemplo                      |
| --------- | ---------------------- | -------------------------------------- |
| `GET`     | Consultar              | Obtener estudiantes                    |
| `POST`    | Crear                  | Crear estudiante                       |
| `PUT`     | Reemplazar             | Reemplazar completamente un estudiante |
| `PATCH`   | Modificar parcialmente | Cambiar uno o varios campos            |
| `DELETE`  | Eliminar               | Eliminar estudiante                    |
| `OPTIONS` | Consultar capacidades  | Ver métodos permitidos                 |

---

# Relación con CRUD

CRUD representa cuatro operaciones fundamentales:

```text
Create
Read
Update
Delete
```

Puede establecerse la siguiente relación:

| CRUD   | HTTP        |
| ------ | ----------- |
| Create | POST        |
| Read   | GET         |
| Update | PUT / PATCH |
| Delete | DELETE      |

Esta relación aparecerá frecuentemente cuando se desarrollen APIs REST.

---

# Paso 2. Consultar todos los estudiantes con GET

Realice:

```http
GET http://localhost:3000/estudiantes
```

También puede utilizar:

```bash
curl http://localhost:3000/estudiantes
```

Debe obtener:

```json
[
  {
    "id": 1,
    "nombre": "Ana",
    "programa": "Ingeniería de Sistemas"
  },
  {
    "id": 2,
    "nombre": "Carlos",
    "programa": "Ingeniería Industrial"
  }
]
```

Código esperado:

```text
200 OK
```

---

# Paso 3. Consultar un estudiante específico

Realice:

```http
GET http://localhost:3000/estudiantes/1
```

Resultado:

```json
{
  "id": 1,
  "nombre": "Ana",
  "programa": "Ingeniería de Sistemas"
}
```

Código:

```text
200 OK
```

Observe que:

```text
/estudiantes
```

representa la colección.

Mientras:

```text
/estudiantes/1
```

representa un recurso específico.

---

# Paso 4. Consultar un estudiante inexistente

Realice:

```http
GET http://localhost:3000/estudiantes/999
```

El estudiante no existe.

El servidor responderá:

```text
404 Not Found
```

con:

```json
{
  "error": "Estudiante no encontrado"
}
```

---

# Paso 5. Crear un estudiante con POST

Realice:

```http
POST http://localhost:3000/estudiantes
Content-Type: application/json

{
    "nombre": "Laura",
    "programa": "Ingeniería de Sistemas"
}
```

Observe el encabezado:

```text
Content-Type: application/json
```

Este Header indica que el cuerpo enviado está escrito en formato JSON.

El servidor debe responder:

```text
201 Created
```

con algo similar a:

```json
{
  "id": 3,
  "nombre": "Laura",
  "programa": "Ingeniería de Sistemas"
}
```

---

# ¿Qué significa 201 Created?

El código:

```text
201
```

indica que el servidor creó correctamente un nuevo recurso.

Este código es especialmente apropiado para operaciones realizadas mediante `POST`.

---

# Header Location

Al crear un estudiante, el servidor también envía un Header:

```text
Location: /estudiantes/3
```

Este encabezado indica dónde puede encontrarse el nuevo recurso.

Por ejemplo:

```text
GET /estudiantes/3
```

permitiría consultarlo.

---

# Paso 6. Enviar datos incompletos

Realice:

```http
POST http://localhost:3000/estudiantes
Content-Type: application/json

{
    "nombre": "Pedro"
}
```

Falta el programa.

El servidor responde:

```text
400 Bad Request
```

con:

```json
{
  "error": "Los campos nombre y programa son obligatorios"
}
```

---

# ¿Qué significa 400 Bad Request?

El código:

```text
400
```

indica que existe un problema con la solicitud enviada por el cliente.

En este ejemplo, el servidor esperaba:

```text
nombre
programa
```

pero uno de los campos no fue enviado.

---

# Paso 7. Reemplazar un recurso utilizando PUT

Realice:

```http
PUT http://localhost:3000/estudiantes/1
Content-Type: application/json

{
    "nombre": "Ana María",
    "programa": "Ingeniería de Sistemas"
}
```

El servidor reemplazará la información correspondiente al estudiante `1`.

Debe responder:

```text
200 OK
```

---

# PUT

`PUT` se utiliza normalmente cuando se quiere reemplazar completamente la representación de un recurso.

En nuestro ejemplo se requieren:

```text
nombre
programa
```

Si no se proporciona alguno, el servidor responderá:

```text
400 Bad Request
```

---

# Paso 8. Modificar parcialmente un recurso con PATCH

Ahora realice:

```http
PATCH http://localhost:3000/estudiantes/1
Content-Type: application/json

{
    "nombre": "Ana Sofía"
}
```

Observe que solamente estamos enviando:

```text
nombre
```

El programa permanece sin modificaciones.

La respuesta será:

```text
200 OK
```

---

# Diferencia entre PUT y PATCH

En este ejemplo:

## PUT

Reemplaza el recurso completo.

```json
{
  "nombre": "Ana María",
  "programa": "Ingeniería de Sistemas"
}
```

## PATCH

Modifica solamente los campos enviados.

```json
{
  "nombre": "Ana Sofía"
}
```

Por tanto:

```text
PUT
→ actualización completa

PATCH
→ actualización parcial
```

---

# Paso 9. Eliminar un estudiante

Realice:

```http
DELETE http://localhost:3000/estudiantes/2
```

Si el recurso existe, el servidor responde:

```text
204 No Content
```

Observe que en este caso no se devuelve JSON.

---

# ¿Qué significa 204 No Content?

El código:

```text
204
```

indica que la operación fue exitosa, pero la respuesta no contiene Body.

Esto es adecuado para operaciones donde no es necesario devolver información adicional.

---

# Paso 10. Comprobar la eliminación

Después de eliminar el estudiante `2`, realice:

```http
GET http://localhost:3000/estudiantes/2
```

Debe recibir:

```text
404 Not Found
```

porque el recurso ya no existe.

---

# Paso 11. Probar OPTIONS

Realice:

```http
OPTIONS http://localhost:3000/estudiantes
```

El servidor responde sin Body, pero incluye Headers indicando los métodos permitidos:

```text
GET
POST
PUT
PATCH
DELETE
OPTIONS
```

---

# Paso 12. Observar los Headers del Request

Cada vez que se realiza una solicitud, observe la terminal donde está ejecutándose el servidor.

Encontrará información similar a:

```text
Método: POST
URL: /estudiantes

Headers:
{
  host: 'localhost:3000',
  'content-type': 'application/json',
  ...
}
```

Esto permite observar que los Headers realmente forman parte de la comunicación HTTP.

---

# Content-Type

Uno de los Headers más importantes utilizados en este ejemplo es:

```text
Content-Type: application/json
```

Indica que el contenido enviado en el Body está representado mediante JSON.

---

# Body del Request

Los métodos como `POST`, `PUT` y `PATCH` pueden transportar información dentro del Body.

Ejemplo:

```json
{
  "nombre": "Laura",
  "programa": "Ingeniería de Sistemas"
}
```

El servidor debe leer ese contenido antes de utilizarlo.

---

# Función leerBody()

El código incluye:

```javascript
function leerBody(request)
```

Los datos enviados por HTTP pueden llegar al servidor en partes.

Por esta razón se utiliza:

```javascript
request.on("data", ...)
```

para recibir los fragmentos.

Posteriormente:

```javascript
request.on("end", ...)
```

indica que la transmisión terminó.

Finalmente se ejecuta:

```javascript
JSON.parse(body)
```

para transformar el texto JSON en un objeto JavaScript.

---

# JSON válido e inválido

Un JSON válido puede ser:

```json
{
  "nombre": "Ana"
}
```

Pero esto no sería JSON válido:

```text
{
  nombre: "Ana"
}
```

porque el nombre de la propiedad no se encuentra entre comillas dobles.

Si el servidor recibe JSON incorrecto, responderá:

```text
400 Bad Request
```

---

# Función responderJSON()

Para evitar repetir código, el servidor contiene una función:

```javascript
responderJSON()
```

Esta función permite enviar:

* código HTTP;
* Headers;
* información en JSON.

Por ejemplo:

```javascript
responderJSON(
    response,
    404,
    {
        error: "Estudiante no encontrado"
    }
);
```

genera una respuesta:

```text
404 Not Found
```

con:

```json
{
  "error": "Estudiante no encontrado"
}
```

---

# URL y recursos

Observe estas dos URL:

```text
http://localhost:3000/estudiantes
```

y:

```text
http://localhost:3000/estudiantes/1
```

Podemos analizarlas así:

```text
http
│
└── protocolo/esquema

localhost
│
└── host

3000
│
└── puerto

/estudiantes
│
└── ruta o recurso

/1
│
└── identificador del recurso
```

---

# Códigos de estado utilizados

Durante el ejemplo se utilizan:

| Código | Significado | Uso                             |
| ------ | ----------- | ------------------------------- |
| `200`  | OK          | Consulta o modificación exitosa |
| `201`  | Created     | Recurso creado                  |
| `204`  | No Content  | Eliminación exitosa sin Body    |
| `400`  | Bad Request | Datos incorrectos               |
| `404`  | Not Found   | Recurso inexistente             |

---

# Familias de códigos HTTP

Los códigos HTTP se organizan generalmente en familias:

```text
1XX → Información

2XX → Operación exitosa

3XX → Redirección

4XX → Error relacionado con la solicitud del cliente

5XX → Error ocurrido en el servidor
```

En este ejercicio se utilizan principalmente:

```text
2XX
4XX
```

---

# Archivo requests.http

El proyecto contiene:

```text
requests.http
```

En él se encuentran preparadas las solicitudes utilizadas durante la práctica.

Cada solicitud se encuentra separada mediante:

```text
###
```

Esto permite probar de manera independiente cada operación cuando se utiliza una herramienta compatible.

---

# Alternativa con curl

Las mismas pruebas pueden realizarse desde terminal.

## GET

```bash
curl http://localhost:3000/estudiantes
```

## POST

```bash
curl -X POST \
  http://localhost:3000/estudiantes \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Laura","programa":"Ingeniería de Sistemas"}'
```

## PUT

```bash
curl -X PUT \
  http://localhost:3000/estudiantes/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Ana María","programa":"Ingeniería de Sistemas"}'
```

## PATCH

```bash
curl -X PATCH \
  http://localhost:3000/estudiantes/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Ana Sofía"}'
```

## DELETE

```bash
curl -X DELETE \
  http://localhost:3000/estudiantes/2
```

Para visualizar también los Headers puede utilizar:

```bash
curl -i http://localhost:3000/estudiantes
```

---

# Importante: los datos no son permanentes

Los estudiantes se encuentran almacenados dentro de:

```javascript
let estudiantes = [...]
```

Esto significa que se almacenan únicamente en la memoria del programa.

Si se detiene:

```bash
node server.js
```

y se ejecuta nuevamente, las modificaciones desaparecen.

Esto no es un error.

El propósito del ejemplo es estudiar HTTP.

La persistencia mediante bases de datos será abordada posteriormente.

---

# Flujo de una operación POST

Puede representarse de esta manera:

```text
CLIENTE
   │
   │ POST /estudiantes
   │
   │ Content-Type: application/json
   │
   │ {
   │   "nombre": "Laura",
   │   "programa": "..."
   │ }
   ▼
SERVIDOR
   │
   │ Lee el Body
   │ Valida los datos
   │ Crea el recurso
   │
   ▼
201 Created
   │
   │ JSON del nuevo estudiante
   ▼
CLIENTE
```

---

# Flujo de una operación GET

```text
CLIENTE
   │
   │ GET /estudiantes/1
   ▼
SERVIDOR
   │
   │ Busca el recurso
   ▼
200 OK
   │
   │ JSON
   ▼
CLIENTE
```

---

# Flujo de una operación DELETE

```text
CLIENTE
   │
   │ DELETE /estudiantes/2
   ▼
SERVIDOR
   │
   │ Busca el recurso
   │ Lo elimina
   ▼
204 No Content
```

---

# Reto para el estudiante

## Reto 1

Agregue un campo:

```text
correo
```

a los estudiantes.

Modifique `POST` para que el correo sea obligatorio.

---

## Reto 2

Cree un estudiante utilizando `POST` y posteriormente consulte el nuevo recurso mediante `GET`.

---

## Reto 3

Intente modificar solamente el programa mediante `PATCH`.

Ejemplo:

```json
{
  "programa": "Ingeniería Industrial"
}
```

Compruebe que el nombre permanece sin cambios.

---

## Reto 4

Intente eliminar un estudiante que no existe.

Analice el código HTTP recibido.

---

## Reto 5

Cree un nuevo recurso llamado:

```text
/cursos
```

y agregue al menos:

```text
GET /cursos
POST /cursos
```

---

# Preguntas de análisis

Después de ejecutar todas las solicitudes, responda:

1. ¿Qué diferencia existe entre Request y Response?
2. ¿Qué información contiene un Header HTTP?
3. ¿Para qué sirve `Content-Type`?
4. ¿Qué método se utiliza principalmente para consultar información?
5. ¿Qué método se utiliza para crear recursos?
6. ¿Cuál es la diferencia entre `PUT` y `PATCH` en este ejemplo?
7. ¿Qué método se utiliza para eliminar recursos?
8. ¿Qué significa `200 OK`?
9. ¿Qué significa `201 Created`?
10. ¿Qué significa `204 No Content`?
11. ¿Qué significa `400 Bad Request`?
12. ¿Qué significa `404 Not Found`?
13. ¿Por qué un `DELETE` exitoso puede no contener Body?
14. ¿Qué relación existe entre CRUD y los métodos HTTP?
15. ¿Qué ocurre con los estudiantes cuando se reinicia el servidor?

---

# Resultado esperado

Después de realizar el ejemplo debe comprender la siguiente relación:

```text
              HTTP

        GET
        POST
CLIENTE ────────→ SERVIDOR
        PUT
        PATCH
        DELETE

CLIENTE ←──────── SERVIDOR

        Status Code
        Headers
        JSON
```

También debe poder diferenciar:

```text
GET
→ consultar

POST
→ crear

PUT
→ reemplazar

PATCH
→ modificar parcialmente

DELETE
→ eliminar
```

---

# Conceptos trabajados

En este ejemplo se abordaron:

* HTTP;
* Request;
* Response;
* métodos HTTP;
* GET;
* POST;
* PUT;
* PATCH;
* DELETE;
* OPTIONS;
* URL;
* Headers;
* Body;
* `Content-Type`;
* JSON;
* códigos de estado;
* CRUD;
* recursos;
* colección de recursos;
* almacenamiento temporal en memoria.

---

# Conclusión

HTTP permite establecer reglas claras para la comunicación entre clientes y servidores.

Un Request puede variar según el método utilizado, la URL solicitada, los Headers y el Body enviado.

El servidor procesa dicha solicitud y genera un Response que contiene un código de estado, Headers y, cuando corresponde, un Body.

Comprender estos elementos será fundamental cuando posteriormente se desarrollen y consuman APIs REST utilizando React y Spring Boot.
