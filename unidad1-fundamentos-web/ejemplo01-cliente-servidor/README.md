# Ejemplo 01 - Comunicación cliente-servidor

## Unidad 1 - Fundamentos de programación web

Este ejemplo permite comprender de manera práctica cómo funciona la comunicación entre un cliente y un servidor utilizando el protocolo HTTP.

El objetivo no es construir todavía una aplicación web compleja, sino identificar los elementos básicos que intervienen cuando un cliente solicita información a un servidor.

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de identificar:

- qué es un cliente;
- qué es un servidor;
- qué es una solicitud o Request;
- qué es una respuesta o Response;
- qué es una URL;
- qué representa `localhost`;
- qué es un puerto;
- qué es un método HTTP;
- qué significa el método GET;
- qué representan los códigos HTTP 200 y 404;
- cómo puede un servidor retornar información en formato JSON.

---

# Estructura del ejemplo

```text
ejemplo01-cliente-servidor/
│
├── cliente/
│   ├── index.html
│   ├── script.js
│   └── styles.css
│
├── servidor/
│   └── server.js
│
└── README.md

## ¿Cómo está organizado el ejemplo?

El proyecto se encuentra dividido en dos partes principales:

### Cliente

La carpeta `cliente` contiene la interfaz que utiliza el usuario.

El navegador web actúa como **cliente**, porque realiza solicitudes al servidor y recibe las respuestas generadas por este.

Los archivos del cliente son:

* `index.html`: contiene la estructura de la página.
* `styles.css`: contiene los estilos visuales.
* `script.js`: contiene la lógica que realiza las solicitudes HTTP al servidor.

### Servidor

La carpeta `servidor` contiene:

```text
server.js
```

Este archivo crea un pequeño servidor utilizando Node.js.

El servidor queda esperando solicitudes HTTP y genera una respuesta dependiendo de la ruta solicitada.

---

# Requisitos

Para ejecutar este ejemplo se necesita:

* Node.js.
* Un navegador web.
* Un editor de código, preferiblemente Visual Studio Code.

Para comprobar si Node.js está instalado, abra una terminal y ejecute:

```bash
node --version
```

Debe aparecer una versión instalada.

Por ejemplo:

```text
v22.x.x
```

La versión exacta puede ser diferente.

---

# Funcionamiento general

La comunicación puede representarse de la siguiente manera:

```text
CLIENTE
Navegador web
     │
     │ Request HTTP
     │ GET /mensaje
     ▼
SERVIDOR
Node.js
     │
     │ Response HTTP
     │ 200 OK
     │ JSON
     ▼
CLIENTE
Navegador web
```

El navegador realiza una solicitud.

El servidor recibe la solicitud, la procesa y envía una respuesta.

---

# Paso 1. Ejecutar el servidor

Abra una terminal dentro de la carpeta:

```text
servidor
```

Ejecute:

```bash
node server.js
```

Si todo funciona correctamente, debe aparecer:

```text
Servidor ejecutándose en http://localhost:3000
```

## Importante

La terminal debe permanecer abierta mientras se realiza la práctica.

Mientras aparezca el servidor ejecutándose, Node.js se encuentra esperando solicitudes de los clientes.

Si se cierra la terminal o se detiene el proceso, el servidor dejará de funcionar.

---

# ¿Qué significa `localhost`?

Observe la dirección:

```text
http://localhost:3000
```

`localhost` representa el computador en el que se está ejecutando actualmente la aplicación.

En este ejemplo, tanto el cliente como el servidor pueden encontrarse en el mismo computador.

Por tanto:

```text
localhost
```

puede interpretarse como:

> Este mismo computador.

---

# ¿Qué significa el puerto 3000?

En la dirección:

```text
http://localhost:3000
```

el número:

```text
3000
```

corresponde al **puerto** utilizado por el servidor.

Un mismo computador puede tener varias aplicaciones comunicándose a través de la red.

Los puertos permiten identificar qué aplicación debe recibir una determinada comunicación.

Por tanto:

```text
localhost:3000
```

puede interpretarse como:

> Comunícate con la aplicación que se encuentra escuchando en el puerto 3000 de este computador.

---

# Paso 2. Probar directamente el servidor

Con el servidor ejecutándose, abra el navegador y escriba:

```text
http://localhost:3000/mensaje
```

Presione **Enter**.

Debe aparecer una respuesta similar a:

```json
{
  "mensaje": "Hola desde el servidor"
}
```

Al mismo tiempo, en la terminal donde está ejecutándose Node.js debe aparecer:

```text
Solicitud recibida: GET /mensaje
```

Esto demuestra que el navegador realizó una solicitud y que el servidor la recibió.

---

# El navegador también puede actuar como cliente

Cuando se escribe:

```text
http://localhost:3000/mensaje
```

en la barra de direcciones, el navegador realiza una solicitud HTTP.

En este caso utiliza el método:

```text
GET
```

y solicita el recurso:

```text
/mensaje
```

Por tanto, conceptualmente está realizando:

```text
GET /mensaje
```

---

# ¿Qué significa GET?

`GET` es uno de los métodos disponibles en el protocolo HTTP.

Se utiliza principalmente para **solicitar u obtener información**.

En este ejemplo:

```text
GET /mensaje
```

puede interpretarse como:

> Cliente: servidor, quiero obtener el recurso `/mensaje`.

---

# Paso 3. Abrir el cliente

Ahora abra el archivo:

```text
cliente/index.html
```

en el navegador.

También puede utilizar una herramienta como **Live Server** desde Visual Studio Code.

La página mostrará dos botones:

```text
Solicitar mensaje

Probar ruta inexistente
```

Además, encontrará una sección destinada a mostrar los detalles de la comunicación HTTP.

---

# Paso 4. Realizar una solicitud exitosa

Presione el botón:

```text
Solicitar mensaje
```

El cliente realizará una solicitud a:

```text
http://localhost:3000/mensaje
```

utilizando el método:

```text
GET
```

Por tanto, la comunicación será:

```text
GET http://localhost:3000/mensaje
```

El servidor reconocerá esa ruta y responderá correctamente.

En la página debe aparecer:

```text
Hola desde el servidor
```

También podrá observar algo similar a:

```text
Método HTTP:
GET

URL solicitada:
http://localhost:3000/mensaje

Código de estado:
200 OK
```

Y la respuesta JSON:

```json
{
  "mensaje": "Hola desde el servidor"
}
```

---

# ¿Qué significa `200 OK`?

HTTP utiliza códigos de estado para indicar qué ocurrió durante una solicitud.

El código:

```text
200
```

indica que la solicitud fue procesada correctamente.

Por esta razón aparece:

```text
200 OK
```

Puede interpretarse como:

> El servidor recibió la solicitud, pudo procesarla y está enviando una respuesta satisfactoria.

---

# Paso 5. Probar una ruta inexistente

Ahora presione el botón:

```text
Probar ruta inexistente
```

El cliente realizará la solicitud:

```text
GET http://localhost:3000/no-existe
```

El servidor está funcionando, pero no tiene definida la ruta:

```text
/no-existe
```

Por esta razón responderá:

```text
404 Not Found
```

La respuesta JSON será:

```json
{
  "error": "Recurso no encontrado"
}
```

En la terminal del servidor también aparecerá:

```text
Solicitud recibida: GET /no-existe
```

---

# ¿Qué significa `404 Not Found`?

El código:

```text
404
```

indica que el servidor fue localizado y pudo responder, pero el recurso solicitado no existe.

Esto es importante.

Un error `404` **no significa que el servidor esté apagado**.

Significa:

```text
Cliente
   │
   │ Solicitud
   ▼
Servidor
   │
   │ El recurso no existe
   ▼
404 Not Found
```

El servidor sí respondió.

---

# Paso 6. Probar qué ocurre cuando el servidor está apagado

Ahora regrese a la terminal donde está ejecutándose:

```bash
node server.js
```

Presione:

```text
Ctrl + C
```

Esto detendrá el servidor.

Regrese al navegador y presione:

```text
Solicitar mensaje
```

Debe aparecer:

```text
No fue posible comunicarse con el servidor.
```

En este caso no aparece:

```text
404 Not Found
```

porque realmente no existe ningún servidor respondiendo.

---

# Diferencia entre `404` y servidor no disponible

## Caso 1. Recurso inexistente

```text
Cliente
   │
   │ GET /no-existe
   ▼
Servidor
   │
   │ Responde
   ▼
404 Not Found
```

El servidor está funcionando.

El problema es que la ruta solicitada no existe.

---

## Caso 2. Servidor apagado

```text
Cliente
   │
   │ Solicitud
   ▼
No hay servidor disponible
```

No se obtiene una respuesta HTTP.

El navegador intenta comunicarse, pero nadie está escuchando en el puerto indicado.

---

# Paso 7. Volver a iniciar el servidor

Para continuar trabajando con el ejemplo, regrese a la terminal y ejecute nuevamente:

```bash
node server.js
```

Debe aparecer:

```text
Servidor ejecutándose en http://localhost:3000
```

---

# Explicación del servidor

El archivo:

```text
servidor/server.js
```

contiene la lógica del servidor.

---

## Importar el módulo HTTP

La primera instrucción es:

```javascript
const http = require("http");
```

Node.js incluye un módulo llamado:

```text
http
```

que permite crear servidores HTTP.

En este ejemplo no estamos utilizando Express ni otro framework.

Esto permite observar de una forma sencilla qué hace directamente un servidor HTTP.

---

# Host y puerto

Se definen las constantes:

```javascript
const HOST = "localhost";
const PORT = 3000;
```

`HOST` indica dónde estará disponible el servidor.

`PORT` indica el puerto que utilizará.

---

# Creación del servidor

La instrucción:

```javascript
const servidor = http.createServer((request, response) => {
```

crea el servidor.

Cada vez que un cliente realiza una solicitud, Node.js proporciona dos objetos importantes:

```text
request
response
```

---

# El objeto `request`

`request` contiene información relacionada con la solicitud enviada por el cliente.

Por ejemplo:

```javascript
request.method
```

permite conocer el método HTTP utilizado.

En nuestro ejemplo:

```text
GET
```

También podemos utilizar:

```javascript
request.url
```

para conocer la ruta solicitada.

Por ejemplo:

```text
/mensaje
```

o:

```text
/no-existe
```

---

# Mostrar solicitudes en la terminal

El servidor contiene:

```javascript
console.log(`Solicitud recibida: ${request.method} ${request.url}`);
```

Esto permite observar cada solicitud recibida.

Por ejemplo:

```text
Solicitud recibida: GET /mensaje
```

La información permite identificar:

```text
GET        → método HTTP
/mensaje   → recurso solicitado
```

---

# Evaluar la solicitud

El servidor verifica:

```javascript
if (request.method === "GET" && request.url === "/mensaje") {
```

Esta condición pregunta:

1. ¿El método HTTP es `GET`?
2. ¿La ruta solicitada es `/mensaje`?

Si las dos condiciones se cumplen, el servidor genera una respuesta satisfactoria.

---

# Crear los datos

El servidor crea:

```javascript
const datos = {
    mensaje: "Hola desde el servidor"
};
```

Esto es un objeto de JavaScript.

Sin embargo, queremos enviar la información al cliente en formato JSON.

---

# Convertir el objeto a JSON

Se utiliza:

```javascript
JSON.stringify(datos)
```

Esto transforma el objeto JavaScript en una cadena con formato JSON.

El resultado representa:

```json
{
  "mensaje": "Hola desde el servidor"
}
```

---

# Generar el código HTTP 200

La instrucción:

```javascript
response.writeHead(200, headers);
```

establece el código de estado HTTP de la respuesta.

En este caso:

```text
200 OK
```

---

# Enviar la respuesta

Finalmente se utiliza:

```javascript
response.end(JSON.stringify(datos));
```

Esto envía la información al cliente y finaliza la respuesta.

---

# Respuesta para rutas inexistentes

Si la ruta solicitada no coincide con:

```text
/mensaje
```

el servidor ejecuta:

```javascript
response.writeHead(404, headers);
```

y devuelve:

```javascript
response.end(
    JSON.stringify({
        error: "Recurso no encontrado"
    })
);
```

Por tanto, el cliente recibe:

```text
404 Not Found
```

acompañado por:

```json
{
  "error": "Recurso no encontrado"
}
```

---

# Explicación del cliente

El archivo:

```text
cliente/script.js
```

contiene la lógica encargada de comunicarse con el servidor.

---

# Obtener los elementos de HTML

Por ejemplo:

```javascript
const botonSolicitar = document.getElementById("btnSolicitar");
```

permite obtener desde JavaScript el botón definido en HTML.

De la misma forma se obtienen los elementos donde posteriormente se mostrará:

* el mensaje;
* el método HTTP;
* la URL;
* el código de estado;
* el JSON recibido.

---

# Dirección del servidor

Se define:

```javascript
const URL_SERVIDOR = "http://localhost:3000";
```

Esta será la dirección base utilizada para comunicarse con nuestro servidor.

---

# Evento del botón

Cuando el usuario presiona:

```text
Solicitar mensaje
```

se ejecuta:

```javascript
realizarSolicitud("/mensaje");
```

Si presiona:

```text
Probar ruta inexistente
```

se ejecuta:

```javascript
realizarSolicitud("/no-existe");
```

---

# Función `realizarSolicitud()`

La función recibe como parámetro la ruta que se quiere solicitar:

```javascript
async function realizarSolicitud(ruta) {
```

Por ejemplo:

```text
/mensaje
```

o:

```text
/no-existe
```

---

# Construcción de la URL

La instrucción:

```javascript
const urlCompleta = `${URL_SERVIDOR}${ruta}`;
```

permite unir:

```text
http://localhost:3000
```

con:

```text
/mensaje
```

para formar:

```text
http://localhost:3000/mensaje
```

---

# `fetch()`

Una de las instrucciones más importantes del ejemplo es:

```javascript
const response = await fetch(urlCompleta);
```

`fetch()` permite realizar solicitudes HTTP desde JavaScript.

En este caso, al no especificar otro método, utiliza:

```text
GET
```

---

# ¿Qué representa `response`?

La variable:

```javascript
response
```

contiene información de la respuesta HTTP enviada por el servidor.

Por ejemplo:

```javascript
response.status
```

permite obtener el código HTTP.

Puede ser:

```text
200
```

o:

```text
404
```

También puede utilizarse:

```javascript
response.statusText
```

para obtener:

```text
OK
```

o:

```text
Not Found
```

---

# Leer el JSON recibido

Se utiliza:

```javascript
const datos = await response.json();
```

Esta instrucción obtiene el contenido JSON enviado por el servidor y lo convierte nuevamente en un objeto que JavaScript puede utilizar.

Por ejemplo, ante una respuesta exitosa:

```javascript
datos.mensaje
```

contendrá:

```text
Hola desde el servidor
```

Ante una ruta inexistente:

```javascript
datos.error
```

contendrá:

```text
Recurso no encontrado
```

---

# `try` y `catch`

La solicitud se encuentra dentro de:

```javascript
try {
```

y:

```javascript
catch (error) {
```

Esto permite manejar situaciones donde no fue posible comunicarse con el servidor.

Por ejemplo:

* servidor apagado;
* puerto incorrecto;
* dirección incorrecta;
* problema de comunicación.

Cuando esto ocurre, se muestra:

```text
No fue posible comunicarse con el servidor.
```

---

# Flujo completo de una solicitud exitosa

Cuando el usuario presiona:

```text
Solicitar mensaje
```

sucede lo siguiente:

```text
1. El usuario presiona el botón.

2. JavaScript ejecuta la función realizarSolicitud().

3. fetch() realiza:

   GET http://localhost:3000/mensaje

4. Node.js recibe la solicitud.

5. El servidor identifica:

   GET /mensaje

6. El servidor crea:

   {
     "mensaje": "Hola desde el servidor"
   }

7. El servidor responde:

   200 OK

8. El navegador recibe la respuesta.

9. JavaScript convierte el JSON recibido.

10. La página muestra:

    Hola desde el servidor
```

---

# Flujo de una ruta inexistente

Cuando el usuario presiona:

```text
Probar ruta inexistente
```

sucede:

```text
1. El cliente realiza:

   GET /no-existe

2. El servidor recibe la solicitud.

3. El servidor verifica sus rutas.

4. La ruta no existe.

5. El servidor responde:

   404 Not Found

6. El servidor envía:

   {
     "error": "Recurso no encontrado"
   }

7. El cliente muestra la información recibida.
```

---

# Request y Response

Uno de los objetivos principales de este ejemplo es diferenciar estos dos conceptos.

## Request

Es la solicitud enviada por el cliente.

En nuestro ejemplo:

```text
GET /mensaje
```

forma parte del Request.

Podemos representarlo como:

```text
Cliente
   │
   │ Request
   │ GET /mensaje
   ▼
Servidor
```

---

## Response

Es la respuesta generada por el servidor.

Por ejemplo:

```text
200 OK
```

junto con:

```json
{
  "mensaje": "Hola desde el servidor"
}
```

Por tanto:

```text
Servidor
   │
   │ Response
   │ 200 OK
   │ JSON
   ▼
Cliente
```

---

# Request y Response trabajando juntos

La comunicación completa es:

```text
CLIENTE
   │
   │ Request
   │ GET /mensaje
   ▼
SERVIDOR
   │
   │ procesa
   │
   │ Response
   │ 200 OK
   │ JSON
   ▼
CLIENTE
```

---

# Aplicación web y servicio web

Este ejemplo también permite comenzar a reconocer una diferencia importante.

El cliente contiene:

```text
HTML
CSS
JavaScript
```

y presenta una interfaz al usuario.

Por otra parte, el servidor responde con:

```json
{
  "mensaje": "Hola desde el servidor"
}
```

El servidor no está generando una interfaz gráfica.

Está ofreciendo información que puede ser consumida por otro programa.

Este concepto será retomado posteriormente cuando se estudien APIs y servicios web.

---

# Reto para el estudiante

Después de ejecutar correctamente el ejemplo, realice las siguientes modificaciones.

## Reto 1. Crear una nueva ruta

Agregue una ruta:

```text
/saludo
```

que responda:

```json
{
  "mensaje": "Bienvenido a Desarrollo de Software II"
}
```

Compruebe la ruta directamente desde el navegador.

---

## Reto 2. Crear un recurso estudiante

Agregue una ruta:

```text
/estudiante
```

que retorne información similar a:

```json
{
  "nombre": "Ana",
  "programa": "Ingeniería de Sistemas",
  "semestre": 4
}
```

---

## Reto 3. Consumir el nuevo recurso desde el cliente

Agregue un tercer botón a `index.html`:

```text
Consultar estudiante
```

Cuando el usuario lo presione, el cliente debe solicitar:

```text
http://localhost:3000/estudiante
```

y mostrar el JSON recibido.

---

## Reto 4. Crear su propio recurso

Cree una nueva ruta que represente un recurso diferente.

Algunas posibilidades son:

```text
/producto
/libro
/docente
/curso
/mascota
```

El recurso debe retornar al menos tres datos en formato JSON.

---

# Preguntas de análisis

Después de realizar el ejemplo, responda con sus propias palabras:

1. ¿Quién actúa como cliente en este ejemplo?
2. ¿Quién actúa como servidor?
3. ¿Qué función cumple `localhost`?
4. ¿Qué representa el puerto `3000`?
5. ¿Qué es un Request?
6. ¿Qué es un Response?
7. ¿Qué significa el método HTTP GET?
8. ¿Qué significa el código `200 OK`?
9. ¿Qué significa el código `404 Not Found`?
10. ¿Cuál es la diferencia entre obtener un `404` y tener el servidor apagado?
11. ¿Qué formato utiliza el servidor para enviar los datos?
12. ¿Qué función de JavaScript permite realizar la solicitud HTTP?
13. ¿Para qué se utiliza `response.json()`?
14. ¿Qué información puede obtenerse mediante `request.method`?
15. ¿Qué información puede obtenerse mediante `request.url`?

---

# Resultado esperado

Al finalizar el ejemplo debe tener funcionando la siguiente comunicación:

```text
CLIENTE
HTML + CSS + JavaScript
         │
         │ HTTP
         │ GET
         ▼
SERVIDOR
Node.js
         │
         │ HTTP
         │ JSON
         ▼
CLIENTE
HTML + CSS + JavaScript
```

El estudiante debe poder observar tanto una comunicación exitosa:

```text
200 OK
```

como una solicitud a un recurso inexistente:

```text
404 Not Found
```

y diferenciar ambas situaciones de un servidor que no se encuentra disponible.

---

# Conceptos trabajados

En este ejemplo se utilizaron los siguientes conceptos:

* cliente;
* servidor;
* protocolo HTTP;
* Request;
* Response;
* URL;
* localhost;
* puerto;
* método GET;
* código HTTP `200 OK`;
* código HTTP `404 Not Found`;
* JSON;
* Node.js;
* `fetch()`;
* comunicación asíncrona;
* manejo básico de errores.

---

# Conclusión

La comunicación cliente-servidor constituye uno de los fundamentos del desarrollo web.

El cliente realiza solicitudes utilizando HTTP y el servidor procesa esas solicitudes para generar respuestas.

En los siguientes ejemplos se profundizará en el protocolo HTTP utilizando diferentes métodos, encabezados, cuerpos de solicitudes y códigos de estado.

Este conocimiento será posteriormente aplicado en tecnologías de Front End y Back End como React y Spring Boot.