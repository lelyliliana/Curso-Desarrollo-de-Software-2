# Guía de práctica 01 - Fundamentos de programación web

## Desarrollo de Software II

---

# 1. Propósito de la práctica

Esta práctica tiene como propósito comprender de manera experimental cómo funciona la comunicación entre clientes y servidores en una aplicación web.

A través de los ejemplos disponibles en la Unidad 1, el estudiante observará solicitudes y respuestas HTTP, utilizará diferentes métodos HTTP, analizará códigos de estado y representará información mediante JSON y XML.

Finalmente relacionará estos conceptos con diferentes arquitecturas web.

---

# 2. Objetivo de aprendizaje

Al finalizar la práctica, el estudiante estará en capacidad de:

* identificar cliente y servidor dentro de una comunicación web;
* diferenciar Request y Response;
* interpretar una URL;
* reconocer el papel de HTTP;
* utilizar diferentes métodos HTTP;
* interpretar códigos de estado;
* reconocer Headers y Body;
* representar información mediante JSON y XML;
* identificar características básicas de diferentes arquitecturas web.

---

# 3. Recursos

Para desarrollar la práctica utilice los ejemplos disponibles en:

```text
unidad1-fundamentos-web/
```

Específicamente:

```text
ejemplo01-cliente-servidor
ejemplo02-http
ejemplo03-json-xml
ejemplo04-arquitecturas-web
```

---

# 4. Requisitos

Se recomienda contar con:

* Node.js;
* Visual Studio Code;
* navegador web;
* terminal;
* Git.

Compruebe Node.js mediante:

```bash
node --version
```

---

# 5. Actividad 1 - Comunicación cliente-servidor

Ingrese a:

```text
unidad1-fundamentos-web/
ejemplo01-cliente-servidor/
```

Lea primero el `README.md`.

---

## Paso 1

Ingrese a:

```text
servidor/
```

y ejecute:

```bash
node server.js
```

Debe aparecer:

```text
Servidor ejecutándose en http://localhost:3000
```

Mantenga abierta esta terminal.

---

## Paso 2

Abra en el navegador:

```text
http://localhost:3000/mensaje
```

Observe la respuesta.

---

## Paso 3

Abra el cliente:

```text
cliente/index.html
```

Puede utilizar Live Server.

---

## Paso 4

Presione:

```text
Solicitar mensaje
```

Observe:

* método HTTP;
* URL;
* código de estado;
* respuesta JSON.

---

## Paso 5

Presione:

```text
Probar ruta inexistente
```

Compare el resultado con la solicitud anterior.

---

## Registre

Complete:

```text
Solicitud exitosa

Método:
_________________________

URL:
_________________________

Código HTTP:
_________________________

Respuesta:
_________________________
```

Ahora:

```text
Solicitud a ruta inexistente

Método:
_________________________

Código HTTP:
_________________________

Respuesta:
_________________________
```

---

# 6. Actividad 2 - Servidor disponible y servidor apagado

Detenga el servidor mediante:

```text
Ctrl + C
```

Vuelva al cliente y presione:

```text
Solicitar mensaje
```

Observe el resultado.

---

## Analice

Explique la diferencia entre:

```text
404 Not Found
```

y:

```text
No fue posible comunicarse con el servidor
```

Respuesta:

```text
____________________________________________________

____________________________________________________

____________________________________________________
```

---

# 7. Actividad 3 - Métodos HTTP

Ingrese a:

```text
ejemplo02-http/
```

Inicie el servidor:

```bash
node servidor/server.js
```

Utilice:

```text
requests.http
```

o los comandos `curl` documentados en el README.

---

# 8. Probar GET

Ejecute:

```http
GET http://localhost:3000/estudiantes
```

Registre:

```text
Método:
_____________________

Operación realizada:
_____________________

Código HTTP:
_____________________

¿Tiene Body?
_____________________
```

---

# 9. Probar GET por ID

Ejecute:

```http
GET http://localhost:3000/estudiantes/1
```

Explique la diferencia entre:

```text
/estudiantes
```

y:

```text
/estudiantes/1
```

Respuesta:

```text
____________________________________________________

____________________________________________________
```

---

# 10. Probar POST

Ejecute:

```http
POST http://localhost:3000/estudiantes
Content-Type: application/json

{
    "nombre": "Laura",
    "programa": "Ingeniería de Sistemas"
}
```

Observe el código HTTP.

Registre:

```text
Código recibido:
________________________

Nuevo ID:
________________________

Header Location:
________________________
```

---

# 11. Consultar el recurso creado

Después de crear el estudiante, utilice su ID para realizar:

```text
GET /estudiantes/{id}
```

Compruebe que el recurso existe.

---

# 12. Probar datos incorrectos

Realice:

```http
POST http://localhost:3000/estudiantes
Content-Type: application/json

{
    "nombre": "Pedro"
}
```

Registre:

```text
Código HTTP:
________________________

Mensaje:
________________________
```

Explique por qué la solicitud no fue aceptada.

---

# 13. Probar PUT

Ejecute:

```http
PUT http://localhost:3000/estudiantes/1
Content-Type: application/json

{
    "nombre": "Ana María",
    "programa": "Ingeniería de Sistemas"
}
```

Explique qué ocurrió con el recurso.

---

# 14. Probar PATCH

Ejecute:

```http
PATCH http://localhost:3000/estudiantes/1
Content-Type: application/json

{
    "nombre": "Ana Sofía"
}
```

Compare esta operación con PUT.

Complete:

```text
PUT
_______________________________________________

PATCH
_______________________________________________
```

---

# 15. Probar DELETE

Ejecute:

```http
DELETE http://localhost:3000/estudiantes/2
```

Registre:

```text
Código HTTP:
____________________
```

Después realice:

```http
GET http://localhost:3000/estudiantes/2
```

¿Qué ocurre?

```text
____________________________________________________
```

---

# 16. Relación HTTP - CRUD

Complete la tabla:

| Operación                | Método HTTP |
| ------------------------ | ----------- |
| Crear                    |             |
| Consultar                |             |
| Actualizar completamente |             |
| Actualizar parcialmente  |             |
| Eliminar                 |             |

---

# 17. Códigos HTTP

Durante la práctica se observaron varios códigos.

Complete:

| Código | Significado | Situación observada |
| ------ | ----------- | ------------------- |
| 200    |             |                     |
| 201    |             |                     |
| 204    |             |                     |
| 400    |             |                     |
| 404    |             |                     |

---

# 18. Actividad 4 - Headers y Body

Observe la terminal donde está ejecutándose el servidor.

Localice una solicitud POST.

Identifique:

```text
Método:
_______________________

URL:
_______________________

Content-Type:
_______________________
```

---

## Body

Copie únicamente el Body enviado:

```json
{
    
}
```

---

# 19. Analizar una URL

Analice:

```text
http://localhost:3000/estudiantes/1
```

Complete:

```text
Protocolo / esquema:
________________________

Host:
________________________

Puerto:
________________________

Ruta:
________________________
```

---

# 20. Actividad 5 - DNS

Ejecute en una terminal:

```bash
nslookup uniremington.edu.co
```

Observe la información obtenida.

Después ejecute:

```bash
nslookup google.com
```

---

## Responda

¿Cuál es la función de DNS?

```text
____________________________________________________

____________________________________________________
```

---

# 21. Actividad 6 - JSON y XML

Ingrese a:

```text
ejemplo03-json-xml/
```

Abra:

```text
datos/estudiante.json
```

y:

```text
datos/estudiante.xml
```

---

# 22. Comparar formatos

Identifique en ambos:

```text
nombre
apellido
identificación
notas
```

Complete:

| Característica                     | JSON | XML |
| ---------------------------------- | ---- | --- |
| Forma de representar propiedades   |      |     |
| Forma de representar listas        |      |     |
| Símbolos o estructuras principales |      |     |

---

# 23. Corregir JSON

Abra:

```text
ejemplos-invalidos/json-invalido.json
```

Identifique el error.

Explique:

```text
____________________________________________________
```

Corrija el archivo.

---

# 24. Corregir XML

Abra:

```text
ejemplos-invalidos/xml-invalido.xml
```

Identifique el error.

Explique:

```text
____________________________________________________
```

Corríjalo.

---

# 25. Crear una representación propia

Represente el siguiente curso:

```text
Código: DS2
Nombre: Desarrollo de Software II
Créditos: 3
Activo: true
Temas:
- Front End
- Back End
- Cloud
```

---

## JSON

```json
{
    
}
```

---

## XML

```xml
<curso>

</curso>
```

---

# 26. Actividad 7 - Arquitecturas web

Ingrese a:

```text
ejemplo04-arquitecturas-web/
```

Revise los diagramas:

```text
01-legacy.md
02-widgets.md
03-spa.md
04-microservicios.md
05-serverless.md
```

---

# 27. Aplicación tradicional

Explique quién tiene mayor responsabilidad en la construcción de la interfaz:

```text
Cliente o servidor:
____________________________
```

¿Por qué?

```text
____________________________________________________

____________________________________________________
```

---

# 28. SPA

Complete:

```text
SPA significa:

____________________________________________________
```

Represente conceptualmente una SPA:

```text
________________
      │
      ▼
________________
      │
      ▼
________________
```

---

# 29. Microservicios

Imagine una plataforma universitaria.

Proponga tres servicios:

```text
1. ________________________________________________

2. ________________________________________________

3. ________________________________________________
```

Indique la responsabilidad de cada uno.

---

# 30. Serverless

Responda:

¿Serverless significa que no existen servidores?

```text
Sí / No
```

Explique:

```text
____________________________________________________

____________________________________________________
```

---

# 31. Reto práctico

Modifique:

```text
ejemplo01-cliente-servidor
```

y cree una nueva ruta:

```text
/curso
```

La ruta debe responder:

```json
{
    "codigo": "DS2",
    "nombre": "Desarrollo de Software II",
    "creditos": 3
}
```

---

# 32. Agregar botón al cliente

Agregue un nuevo botón:

```text
Consultar curso
```

Cuando se presione debe realizar:

```text
GET /curso
```

y mostrar el JSON recibido.

---

# 33. Evidencias sugeridas

Para documentar la práctica puede conservar:

1. ejecución del servidor;
2. respuesta `200 OK`;
3. respuesta `404 Not Found`;
4. solicitud POST;
5. resultado de PUT o PATCH;
6. resultado de DELETE;
7. JSON y XML creados;
8. funcionamiento de `/curso`.

---

# 34. Preguntas de cierre

Responda con sus propias palabras:

1. ¿Qué diferencia existe entre cliente y servidor?
2. ¿Qué diferencia existe entre Request y Response?
3. ¿Qué función cumple HTTP?
4. ¿Para qué se utiliza GET?
5. ¿Para qué se utiliza POST?
6. ¿Cuál es la diferencia entre PUT y PATCH?
7. ¿Para qué se utiliza DELETE?
8. ¿Qué significa `200 OK`?
9. ¿Qué significa `201 Created`?
10. ¿Qué significa `204 No Content`?
11. ¿Qué significa `400 Bad Request`?
12. ¿Qué significa `404 Not Found`?
13. ¿Qué función cumple un Header?
14. ¿Qué es el Body?
15. ¿Qué función cumple `Content-Type`?
16. ¿Qué diferencia existe entre JSON y XML?
17. ¿Qué función cumple DNS?
18. ¿Qué significa SPA?
19. ¿Qué es un microservicio?
20. ¿Qué significa serverless?

---

# 35. Resultado esperado

Al finalizar la práctica debe poder interpretar el siguiente flujo:

```text
USUARIO
   │
   ▼
CLIENTE
   │
   │ HTTP Request
   │ GET / POST / PUT / PATCH / DELETE
   ▼
SERVIDOR
   │
   │ procesa
   │
   │ HTTP Response
   │ código de estado
   │ JSON
   ▼
CLIENTE
```

Y comprender que estos fundamentos serán utilizados posteriormente en:

```text
React
   │
   │ HTTP / JSON
   ▼
Spring Boot
```

---

# Conclusión

La comunicación cliente-servidor constituye la base del desarrollo web.

HTTP define la forma en que clientes y servidores intercambian solicitudes y respuestas, mientras que los métodos HTTP expresan el tipo de operación que se desea realizar.

Los códigos de estado permiten interpretar el resultado de cada solicitud y formatos como JSON y XML permiten representar la información intercambiada.

Estos conceptos constituyen la base necesaria para avanzar hacia el desarrollo Front End con React y Back End con Spring Boot.
