# Unidad 1 - Fundamentos de programación web

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/fullstack/)

Esta unidad introduce los conceptos fundamentales que permiten comprender cómo funciona una aplicación web y cómo se establece la comunicación entre clientes y servidores.

A lo largo de los ejemplos se estudian los elementos básicos del protocolo HTTP, los formatos utilizados para intercambiar información y algunas arquitecturas comunes en aplicaciones web.

El módulo organiza esta unidad alrededor de tres grandes temas: conceptos base de programación web, formatos para intercambiar información y arquitecturas web.

---

# Objetivo de la unidad

Al finalizar esta unidad, el estudiante estará en capacidad de:

* identificar los componentes principales de la comunicación cliente-servidor;
* reconocer los elementos básicos de una URL;
* comprender la función de DNS;
* interpretar solicitudes y respuestas HTTP;
* diferenciar los principales métodos HTTP;
* interpretar códigos de estado HTTP;
* reconocer la diferencia entre una aplicación web y un servicio web;
* representar información utilizando JSON y XML;
* reconocer diferentes arquitecturas utilizadas en aplicaciones web.

---

# Estructura de la unidad

```text id="48oqfs"
unidad1-fundamentos-web/
│
├── README.md
│
├── ejemplo01-cliente-servidor/
├── ejemplo02-http/
├── ejemplo03-json-xml/
└── ejemplo04-arquitecturas-web/
```

Cada ejemplo se concentra en un grupo de conceptos relacionados.

---

# Ruta de aprendizaje

Se recomienda estudiar los ejemplos en el siguiente orden:

```text id="1o4k2w"
Ejemplo 01
Cliente-servidor
      │
      ▼
Ejemplo 02
HTTP
      │
      ▼
Ejemplo 03
JSON y XML
      │
      ▼
Ejemplo 04
Arquitecturas web
```

La secuencia permite avanzar desde la comunicación más básica hasta una visión general de cómo se organizan diferentes tipos de aplicaciones web.

---

# Ejemplo 01 - Comunicación cliente-servidor

Carpeta:

```text id="se9uuv"
ejemplo01-cliente-servidor
```

Este ejemplo permite observar directamente el flujo:

```text id="6vbn8m"
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

Se utiliza un pequeño servidor desarrollado con Node.js y un cliente basado en HTML y JavaScript.

---

# Conceptos trabajados en el Ejemplo 01

* cliente;
* servidor;
* Request;
* Response;
* `localhost`;
* puerto;
* método GET;
* código `200 OK`;
* código `404 Not Found`;
* JSON;
* `fetch()`.

---

# Ejemplo 02 - Métodos HTTP, Request y Response

Carpeta:

```text id="96bygd"
ejemplo02-http
```

Este ejemplo profundiza en HTTP y permite realizar operaciones sobre un recurso llamado:

```text id="0y7hs0"
estudiantes
```

Los métodos utilizados son:

```text id="uwpwbt"
GET
POST
PUT
PATCH
DELETE
OPTIONS
```

---

# Relación entre métodos HTTP y CRUD

```text id="a4v93b"
Create  → POST

Read    → GET

Update  → PUT / PATCH

Delete  → DELETE
```

También se estudian:

* Headers;
* Body;
* `Content-Type`;
* recursos;
* colecciones;
* códigos de estado.

---

# Códigos HTTP utilizados

Durante los ejemplos aparecen códigos como:

```text id="ukoww4"
200 OK
201 Created
204 No Content
400 Bad Request
404 Not Found
```

El módulo explica además que los códigos HTTP se agrupan en familias.

De manera general:

```text id="3qz3vq"
1XX → información

2XX → operación exitosa

3XX → redirección

4XX → error relacionado con la solicitud

5XX → error ocurrido en el servidor
```

---

# Ejemplo 03 - JSON y XML

Carpeta:

```text id="qjkbbq"
ejemplo03-json-xml
```

Este ejemplo compara dos formatos utilizados para representar información:

```text id="jkgkth"
JSON
XML
```

El módulo trabaja ambos formatos como mecanismos para intercambiar información entre cliente y servidor.

---

# JSON

JSON representa información mediante pares:

```text id="r06bn8"
clave : valor
```

Ejemplo:

```json id="b3nopz"
{
  "nombre": "Ana",
  "programa": "Ingeniería de Sistemas"
}
```

---

# XML

XML representa información utilizando etiquetas.

Ejemplo:

```xml id="mv1qja"
<estudiante>
    <nombre>Ana</nombre>
    <programa>Ingeniería de Sistemas</programa>
</estudiante>
```

---

# Ejemplo 04 - Arquitecturas web

Carpeta:

```text id="mm9aph"
ejemplo04-arquitecturas-web
```

Este ejemplo permite analizar las arquitecturas presentadas en el módulo:

* aplicación tradicional o legacy;
* aplicaciones con widgets;
* SPA;
* microservicios;
* serverless.

Se utilizan diagramas para comprender la distribución de responsabilidades.

---

# Conceptos adicionales de la unidad

Además de los ejemplos prácticos, el módulo introduce conceptos necesarios para comprender la comunicación web.

Entre ellos:

```text id="jcr8s1"
URI
URL
URN
DNS
```

Estos conceptos no requieren un proyecto independiente, pero son fundamentales para interpretar cómo se identifican y localizan recursos en la web.

---

# URI, URL y URN

El módulo presenta una relación entre:

```text id="mmk01b"
URI
├── URL
└── URN
```

---

# URI

URI significa:

```text id="db96ai"
Uniform Resource Identifier
```

Puede traducirse como:

```text id="cm1db0"
Identificador Uniforme de Recursos
```

Su función es identificar un recurso.

Una URI puede ser:

```text id="ae02u1"
URL
```

o:

```text id="jrbz45"
URN
```

---

# URL

URL significa:

```text id="3vptxn"
Uniform Resource Locator
```

Puede traducirse como:

```text id="vt9q7i"
Localizador Uniforme de Recursos
```

Además de identificar un recurso, permite indicar dónde se encuentra y cómo acceder a él.

---

# Analizar una URL

Considere:

```text id="s78wxd"
http://localhost:3000/estudiantes/1
```

Podemos analizarla así:

```text id="32r5sy"
http
│
└── esquema o protocolo

localhost
│
└── host

3000
│
└── puerto

/estudiantes/1
│
└── ruta
```

---

# Ejemplo con una dirección web

Considere:

```text id="b21m0n"
https://www.example.com/
```

Podemos identificar:

```text id="4b0rel"
https
│
└── mecanismo utilizado para acceder al recurso

www.example.com
│
└── dominio
```

---

# URN

URN significa:

```text id="uvikug"
Uniform Resource Name
```

Puede traducirse como:

```text id="1w4dsc"
Nombre Uniforme de Recursos
```

Su objetivo es identificar un recurso mediante un nombre que no depende directamente de su ubicación.

---

# Diferencia conceptual

Puede pensarse así:

```text id="lyhr9i"
URI
│
└── identifica un recurso

URL
│
└── identifica y permite localizar

URN
│
└── identifica mediante un nombre
```

---

# Relación entre URI y URL

Una URL también es una URI.

Por tanto:

```text id="oa8750"
Toda URL es una URI
```

pero el concepto de URI es más amplio.

---

# DNS

DNS significa:

```text id="vzv79p"
Domain Name System
```

El módulo lo describe como el sistema encargado de traducir nombres de dominio a direcciones IP.

---

# ¿Por qué necesitamos DNS?

Los usuarios suelen utilizar direcciones como:

```text id="d49g8y"
www.example.com
```

pero los dispositivos se comunican utilizando direcciones IP.

DNS permite establecer la relación:

```text id="0m0ab9"
Nombre de dominio
       │
       ▼
      DNS
       │
       ▼
Dirección IP
```

---

# Ejemplo conceptual

Cuando un usuario escribe:

```text id="fg7jch"
https://www.ejemplo.com
```

puede ocurrir un proceso simplificado como:

```text id="95z93s"
Navegador
   │
   │ ¿Cuál es la IP de ejemplo.com?
   ▼
DNS
   │
   │ responde con una IP
   ▼
Navegador
   │
   │ se comunica con el servidor
   ▼
Servidor
```

---

# Práctica rápida con DNS

En sistemas donde se encuentre disponible, puede utilizarse:

```bash id="aannd3"
nslookup example.com
```

El comando realiza una consulta DNS y puede mostrar información asociada con el dominio.

También puede utilizarse:

```bash id="veduu2"
nslookup google.com
```

La salida exacta puede variar dependiendo de la red utilizada.

---

# ¿Qué relación existe entre DNS y los ejemplos?

En los ejemplos utilizamos:

```text id="hdv6t3"
localhost
```

por lo que no necesitamos consultar un dominio público.

Sin embargo, cuando una aplicación se encuentra disponible en Internet, las solicitudes normalmente utilizan nombres de dominio.

Por ejemplo:

```text id="abgmof"
https://api.ejemplo.com/estudiantes
```

Antes de comunicarse con el servidor correspondiente, el sistema necesita determinar la dirección de red asociada con:

```text id="ax2pdr"
api.ejemplo.com
```

---

# HTTP

HTTP significa:

```text id="mjsegv"
HyperText Transfer Protocol
```

Es el protocolo utilizado en los ejemplos de esta unidad para establecer comunicación entre cliente y servidor.

El módulo caracteriza HTTP como un protocolo basado en el modelo Request-Response y señala que el cliente inicia la comunicación.

---

# Comunicación Request-Response

```text id="8ihcpe"
CLIENTE
   │
   │ Request HTTP
   ▼
SERVIDOR
   │
   │ Response HTTP
   ▼
CLIENTE
```

El cliente inicia la comunicación mediante un Request.

El servidor procesa la solicitud y genera un Response.

---

# Request HTTP

Un Request puede contener:

```text id="nqaxm3"
método
URI
versión HTTP
Headers
Body opcional
```

El módulo presenta esta estructura de forma explícita.

---

# Ejemplo simplificado de Request

```text id="mnek6e"
POST /estudiantes HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "nombre": "Laura",
  "programa": "Ingeniería de Sistemas"
}
```

Aquí podemos identificar:

```text id="r1p0ji"
POST
→ método

/estudiantes
→ recurso

Host
→ Header

Content-Type
→ Header

JSON
→ Body
```

---

# Response HTTP

Un Response puede contener:

```text id="vxsqv3"
estado HTTP
Headers
Body opcional
```

---

# Ejemplo simplificado de Response

```text id="k1mf48"
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 3,
  "nombre": "Laura",
  "programa": "Ingeniería de Sistemas"
}
```

---

# Headers

Los Headers permiten transportar información adicional.

Algunos ejemplos estudiados o utilizados en los ejercicios son:

```text id="85cjjj"
Content-Type
Location
Host
User-Agent
```

El módulo incluye diferentes encabezados tanto para Request como para Response.

---

# Aplicación web y servicio web

El módulo también diferencia entre aplicación web y servicio web.

---

# Aplicación web

Una aplicación web presenta una interfaz que puede ser utilizada directamente por una persona desde un navegador.

Por ejemplo:

```text id="0d2sv0"
Usuario
   │
   ▼
Navegador
   │
   ▼
Interfaz HTML
```

---

# Servicio web

Un servicio web puede proporcionar información para que otra aplicación la consuma.

Por ejemplo:

```text id="2vfs6p"
Aplicación cliente
   │
   │ Request
   ▼
Servicio web
   │
   │ JSON
   ▼
Aplicación cliente
```

---

# Ejemplo utilizado en la unidad

En el Ejemplo 01 el servidor responde:

```json id="pdttvv"
{
  "mensaje": "Hola desde el servidor"
}
```

El servidor no está generando directamente la interfaz que ve el usuario.

Entrega información que posteriormente puede ser interpretada por otro programa.

Esto permite introducir el concepto de servicio web.

---

# Integración conceptual de la Unidad 1

Todos los conceptos pueden relacionarse de la siguiente manera:

```text id="917mnm"
USUARIO
   │
   ▼
CLIENTE
Navegador
   │
   │ URL
   │ DNS
   │ HTTP Request
   ▼
SERVIDOR
   │
   │ procesa
   │
   │ HTTP Response
   │ JSON / XML
   ▼
CLIENTE
```

---

# Desde la URL hasta la respuesta

Un flujo simplificado podría ser:

```text id="8fhqo5"
1. El usuario utiliza una URL.

2. Si se utiliza un dominio, DNS ayuda a localizar el servidor.

3. El cliente envía un Request HTTP.

4. El servidor recibe la solicitud.

5. El servidor procesa la operación.

6. El servidor genera un Response.

7. La información puede viajar en JSON o XML.

8. El cliente procesa la respuesta.
```

---

# Arquitectura que utilizaremos posteriormente

Los fundamentos de esta unidad permitirán comprender una estructura como:

```text id="han0og"
USUARIO
   │
   ▼
REACT
Front End
   │
   │ HTTP
   │ JSON
   ▼
SPRING BOOT
Back End
   │
   ▼
BASE DE DATOS
```

Para comprender esta arquitectura es necesario conocer previamente:

```text id="8gaotg"
cliente
servidor
HTTP
Request
Response
métodos HTTP
códigos HTTP
JSON
arquitecturas web
```

---

# Actividad de repaso

Antes de continuar con la siguiente unidad, compruebe que puede explicar con sus propias palabras:

1. ¿Qué es un cliente?
2. ¿Qué es un servidor?
3. ¿Qué es una URI?
4. ¿Qué es una URL?
5. ¿Qué es una URN?
6. ¿Qué función cumple DNS?
7. ¿Qué es HTTP?
8. ¿Qué es un Request?
9. ¿Qué es un Response?
10. ¿Qué función cumple un método HTTP?
11. ¿Para qué se utiliza GET?
12. ¿Para qué se utiliza POST?
13. ¿Cuál es la diferencia entre PUT y PATCH?
14. ¿Para qué se utiliza DELETE?
15. ¿Qué representa un código de estado HTTP?
16. ¿Qué significa `200 OK`?
17. ¿Qué significa `201 Created`?
18. ¿Qué significa `204 No Content`?
19. ¿Qué significa `400 Bad Request`?
20. ¿Qué significa `404 Not Found`?
21. ¿Qué es JSON?
22. ¿Qué es XML?
23. ¿Qué diferencia existe entre una aplicación web y un servicio web?
24. ¿Qué significa SPA?
25. ¿Qué es un microservicio?
26. ¿Qué significa serverless?

---

# Reto integrador de la unidad

Imagine una aplicación para consultar cursos universitarios.

La aplicación debe permitir:

```text id="9qscdu"
consultar todos los cursos
consultar un curso
crear un curso
modificar un curso
eliminar un curso
```

Proponga:

## 1. Recursos

Por ejemplo:

```text id="tz6b83"
/cursos
/cursos/1
```

## 2. Métodos HTTP

Determine qué método utilizaría para cada operación.

## 3. Códigos HTTP

Proponga códigos adecuados para:

```text id="xs3m0y"
consulta exitosa
creación exitosa
datos incorrectos
curso inexistente
eliminación exitosa
```

## 4. Representación JSON

Diseñe un curso en JSON con al menos:

```text id="z2aao6"
id
nombre
creditos
programa
```

## 5. Arquitectura

Represente:

```text id="9szmpo"
Front End
   │
   │ HTTP / JSON
   ▼
Back End
```

---

# Resultado esperado de la unidad

Después de completar los cuatro ejemplos, el estudiante debe comprender:

```text id="bx4iwh"
QUIÉN SE COMUNICA
Cliente ↔ Servidor

CÓMO SE COMUNICA
HTTP

QUÉ ENVÍA
Request / Response

QUÉ OPERACIÓN REALIZA
GET / POST / PUT / PATCH / DELETE

CÓMO INDICA EL RESULTADO
Códigos HTTP

CÓMO REPRESENTA LOS DATOS
JSON / XML

CÓMO PUEDE ORGANIZARSE LA SOLUCIÓN
Arquitecturas web
```

---

# Ejemplos disponibles

## Ejemplo 01

```text id="9zbhbp"
ejemplo01-cliente-servidor
```

Comunicación básica cliente-servidor.

---

## Ejemplo 02

```text id="nkizv3"
ejemplo02-http
```

Métodos HTTP, Request, Response, Headers, Body y códigos de estado.

---

## Ejemplo 03

```text id="y86qmg"
ejemplo03-json-xml
```

Representación e intercambio de información mediante JSON y XML.

---

## Ejemplo 04

```text id="k7zi6t"
ejemplo04-arquitecturas-web
```

Comparación de arquitecturas web mediante diagramas.

---

# Conceptos trabajados en la Unidad 1

* cliente;
* servidor;
* URI;
* URL;
* URN;
* DNS;
* HTTP;
* Request;
* Response;
* Headers;
* Body;
* métodos HTTP;
* GET;
* POST;
* PUT;
* PATCH;
* DELETE;
* OPTIONS;
* códigos de estado;
* JSON;
* XML;
* aplicación web;
* servicio web;
* arquitectura web;
* legacy;
* widgets;
* SPA;
* microservicios;
* API Gateway;
* serverless.

---

# Conclusión

La Unidad 1 proporciona las bases necesarias para comprender cómo funcionan las aplicaciones web.

Antes de desarrollar interfaces o servicios complejos es fundamental comprender quién realiza una solicitud, quién responde, qué protocolo permite la comunicación, cómo se identifican los recursos y cómo se representa la información intercambiada.

Estos fundamentos serán utilizados de forma permanente en las siguientes unidades, especialmente al desarrollar interfaces con JavaScript y React, consumir APIs y construir servicios Back End con Spring Boot.


---

## Continuar el curso

- **Volver al índice:** [Todas las unidades](../README.md)
- **Comenzar los ejemplos:** [Ejemplo 01 - Comunicación cliente-servidor](ejemplo01-cliente-servidor/README.md)
- **Siguiente unidad:** [Unidad 2 - Introducción a las interfaces de usuario web](../unidad2-interfaces-web/README.md)
