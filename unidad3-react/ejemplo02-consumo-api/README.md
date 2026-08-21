# Ejemplo 02 - Consumo de API con React

## Unidad 3 - Desarrollo Front End con React

Este ejemplo permite aplicar los conceptos de comunicación cliente-servidor estudiados en la Unidad 1 dentro de una aplicación React.

El módulo de Desarrollo de Software II incluye la integración de React con APIs y propone obtener información desde un servicio externo utilizando `fetch()`.

Como este contenido ya se encuentra desarrollado mediante un laboratorio completo en el repositorio del curso **Lenguaje de Programación II**, no se duplicará el mismo proyecto en este repositorio.

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de:

* comprender cómo React puede actuar como cliente de una API;
* realizar solicitudes HTTP desde una aplicación React;
* utilizar `fetch()` para consultar información externa;
* interpretar respuestas en formato JSON;
* almacenar información recibida en el estado;
* ejecutar una solicitud al cargar un componente;
* utilizar `useEffect`;
* mostrar información obtenida desde una API;
* manejar estados básicos de carga y error;
* relacionar Front End, HTTP, API y JSON.

---

# Recurso principal

Consulte el laboratorio:

[Laboratorio 10 - Consumo de API con React](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/10-consumo-api)

Este laboratorio forma parte del módulo de React del curso **Lenguaje de Programación II**.

---

# Conocimientos previos

Antes de comenzar se recomienda haber revisado:

```text
Unidad 1
Fundamentos de programación web
        │
        ├── cliente-servidor
        ├── HTTP
        ├── Request
        ├── Response
        └── JSON
```

y los laboratorios anteriores de React:

```text
Componentes
Props
Estado
Eventos
Listas
Formularios
useEffect
```

---

# Arquitectura del ejemplo

La comunicación puede representarse así:

```text
USUARIO
   │
   ▼
REACT
Front End
   │
   │ Request HTTP
   │ GET
   ▼
API EXTERNA
   │
   │ Response HTTP
   │ JSON
   ▼
REACT
   │
   ▼
INTERFAZ ACTUALIZADA
```

---

# React actúa como cliente

En este ejemplo React funciona como cliente.

La aplicación realiza una solicitud HTTP hacia un servicio externo.

Conceptualmente:

```text
React
   │
   │ GET
   ▼
API
```

La API procesa la solicitud y genera una respuesta.

---

# Relación con la Unidad 1

En la Unidad 1 se trabajó:

```text
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

Ahora puede interpretarse como:

```text
React
   │
   │ Request HTTP
   ▼
API
   │
   │ Response JSON
   ▼
React
```

El principio es exactamente el mismo.

---

# ¿Qué es una API?

En este contexto, una API permite que una aplicación pueda solicitar información o ejecutar operaciones expuestas por otro sistema.

Por ejemplo:

```text
GET /usuarios
```

podría devolver una lista de usuarios.

Mientras:

```text
GET /productos
```

podría devolver productos.

---

# Solicitud HTTP desde React

Una aplicación puede utilizar:

```javascript
fetch(url)
```

para realizar una solicitud.

Ejemplo conceptual:

```javascript
const response =
    await fetch(
        "https://api.ejemplo.com/usuarios"
    );
```

Aquí React está actuando como cliente HTTP.

---

# Convertir la respuesta a JSON

Después de recibir la respuesta puede utilizarse:

```javascript
const datos =
    await response.json();
```

Esto convierte el contenido JSON recibido en una estructura que JavaScript puede utilizar.

---

# Flujo de datos

```text
API
 │
 │ JSON
 ▼
JavaScript
 │
 │ response.json()
 ▼
Objeto o arreglo
 │
 ▼
Estado de React
 │
 ▼
Interfaz
```

---

# Estado

Una vez obtenida la información, puede almacenarse en estado.

Por ejemplo:

```javascript
const [usuarios, setUsuarios] =
    useState([]);
```

Después:

```javascript
setUsuarios(datos);
```

actualiza el estado.

React vuelve a renderizar la interfaz con la nueva información.

---

# `useEffect`

Cuando se necesita ejecutar una solicitud al cargar un componente puede utilizarse:

```javascript
useEffect(() => {

    // solicitud

}, []);
```

El arreglo vacío:

```text
[]
```

indica que el efecto debe ejecutarse después del primer renderizado del componente.

---

# Flujo con `useEffect`

```text
COMPONENTE
se renderiza
    │
    ▼
useEffect()
    │
    ▼
fetch()
    │
    ▼
API
    │
    ▼
JSON
    │
    ▼
setEstado()
    │
    ▼
React vuelve a renderizar
```

---

# Relación con `componentDidMount`

El módulo institucional utiliza componentes basados en clases y realiza solicitudes externas desde:

```text
componentDidMount
```

En estos materiales se utiliza el enfoque moderno basado en componentes funcionales y:

```text
useEffect
```

El objetivo conceptual es similar:

```text
ejecutar una operación
cuando el componente se carga
```

---

# Renderizar los datos

Suponga que una API devuelve:

```json
[
  {
    "id": 1,
    "nombre": "Ana"
  },
  {
    "id": 2,
    "nombre": "Carlos"
  }
]
```

React podría recorrer la información mediante:

```javascript
usuarios.map(usuario => (
    <p key={usuario.id}>
        {usuario.nombre}
    </p>
))
```

---

# `map()`

`map()` permite transformar cada elemento de un arreglo en otra estructura.

En React se utiliza frecuentemente para convertir:

```text
DATOS
```

en:

```text
COMPONENTES
```

Por ejemplo:

```text
Arreglo de estudiantes
        │
        ▼
       map()
        │
        ▼
Tarjetas de estudiantes
```

---

# La propiedad `key`

Al generar listas en React se utiliza una propiedad:

```text
key
```

Por ejemplo:

```jsx
<Tarjeta
    key={estudiante.id}
/>
```

React utiliza esta información para identificar los elementos de la lista.

---

# Estado de carga

Las solicitudes HTTP pueden tardar.

Por ello una interfaz puede mostrar:

```text
Cargando...
```

mientras espera la respuesta.

Conceptualmente:

```text
SOLICITUD INICIA
      │
      ▼
loading = true
      │
      ▼
"Cargando..."
      │
      ▼
Respuesta recibida
      │
      ▼
loading = false
```

---

# Estado de error

Una solicitud también puede fallar.

Por ejemplo:

```text
servidor no disponible
problema de red
URL incorrecta
respuesta no exitosa
```

La interfaz debería informar al usuario.

Por ejemplo:

```text
No fue posible cargar la información.
```

---

# Diferencia entre error HTTP y error de conexión

## Error HTTP

Puede recibirse:

```text
404 Not Found
```

El servidor respondió.

Pero el recurso no fue encontrado.

## Error de comunicación

Puede ocurrir que:

```text
no exista respuesta
```

porque no fue posible comunicarse con el servidor.

Esta diferencia ya fue estudiada en la Unidad 1.

---

# Front End y API

Este laboratorio permite comenzar a observar una separación importante:

```text
FRONT END
React
   │
   │ HTTP / JSON
   ▼
API
```

El Front End no necesita conocer cómo está implementado internamente el servidor.

Solamente necesita conocer:

```text
URL
método HTTP
estructura esperada
formato de respuesta
```

---

# Independencia tecnológica

La API podría estar desarrollada con:

```text
Java
Python
JavaScript
C#
PHP
```

React puede consumirla siempre que exista una interfaz de comunicación compatible.

Posteriormente en Desarrollo de Software II se utilizará:

```text
Spring Boot
```

como tecnología Back End.

---

# Arquitectura futura del curso

Posteriormente tendremos:

```text
USUARIO
   │
   ▼
REACT
   │
   │ HTTP / JSON
   ▼
SPRING BOOT
   │
   ▼
BASE DE DATOS
```

Por ello este laboratorio representa un paso importante hacia la integración Front End - Back End.

---

# Paso 1 - Revisar el laboratorio

Ingrese a:

[Laboratorio 10 - Consumo de API](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/10-consumo-api)

Lea primero el README del laboratorio.

---

# Paso 2 - Instalar dependencias

Después de descargar o clonar el proyecto, ingrese a la carpeta correspondiente.

Ejecute:

```bash
npm install
```

Esto instalará las dependencias declaradas en:

```text
package.json
```

---

# Paso 3 - Ejecutar

Utilice:

```bash
npm run dev
```

Vite mostrará una dirección local.

Por ejemplo:

```text
http://localhost:5173
```

La dirección exacta puede variar.

---

# Paso 4 - Observar la interfaz

Abra la dirección indicada por Vite.

Compruebe que la información obtenida desde la API aparece correctamente.

---

# Paso 5 - Abrir las herramientas del navegador

Utilice:

```text
F12
```

Busque la sección:

```text
Network
```

o:

```text
Red
```

Recargue la página.

---

# Localizar la solicitud

Observe la solicitud realizada hacia la API.

Identifique:

```text
Request URL
Request Method
Status Code
Response
```

Esta prueba permite relacionar directamente React con lo estudiado en HTTP.

---

# Identificar el método

Compruebe que la consulta utiliza:

```text
GET
```

cuando se está obteniendo información.

---

# Identificar el código de estado

Observe el código recibido.

Por ejemplo:

```text
200 OK
```

indica que la operación fue procesada satisfactoriamente.

---

# Observar el JSON

En la sección correspondiente a la respuesta podrá observar los datos entregados por la API.

Identifique:

```text
objetos
arreglos
propiedades
valores
```

---

# Relación entre datos y componentes

Observe qué propiedades del JSON se utilizan posteriormente dentro de los componentes React.

Puede representarse así:

```text
JSON recibido
     │
     ▼
Estado
     │
     ▼
map()
     │
     ▼
Componentes
     │
     ▼
Interfaz
```

---

# Reto 1 - Mostrar otro dato

Seleccione una propiedad de la respuesta que actualmente no se esté mostrando.

Modifique el componente para visualizarla.

---

# Reto 2 - Cambiar el texto de carga

Modifique:

```text
Cargando...
```

por un mensaje diferente.

Por ejemplo:

```text
Consultando información...
```

---

# Reto 3 - Provocar un error

Cambie temporalmente la URL de la API por una dirección incorrecta.

Observe:

1. qué aparece en la consola;
2. qué muestra la interfaz;
3. qué ocurre en la pestaña Network.

Después restaure la URL correcta.

---

# Reto 4 - Componente reutilizable

Si la información se muestra directamente dentro de `App.jsx`, cree un componente separado para mostrar cada elemento.

Por ejemplo:

```text
TarjetaUsuario
TarjetaRepositorio
TarjetaCurso
```

dependiendo del recurso utilizado en el laboratorio.

---

# Reto 5 - Contador

Muestre la cantidad total de elementos recibidos.

Por ejemplo:

```text
Resultados encontrados: 12
```

Puede utilizar:

```javascript
datos.length
```

si la respuesta corresponde a un arreglo.

---

# Preguntas de análisis

Después de completar el laboratorio, responda:

1. ¿Quién actúa como cliente?
2. ¿Quién actúa como servidor?
3. ¿Qué función cumple `fetch()`?
4. ¿Qué método HTTP se utiliza?
5. ¿Qué función cumple `response.json()`?
6. ¿En qué formato llega la información?
7. ¿Dónde se almacena la información dentro del componente?
8. ¿Qué función cumple `useState`?
9. ¿Qué función cumple `useEffect`?
10. ¿Por qué una solicitud externa se considera un efecto?
11. ¿Qué ocurre cuando cambia el estado?
12. ¿Para qué se utiliza `map()`?
13. ¿Por qué los elementos generados necesitan `key`?
14. ¿Qué diferencia existe entre estado de carga y estado de error?
15. ¿Qué código HTTP indica normalmente una consulta exitosa?
16. ¿Qué relación existe entre esta práctica y la Unidad 1?
17. ¿Necesita React conocer el lenguaje utilizado para construir la API?
18. ¿Cómo se relacionará posteriormente este ejemplo con Spring Boot?

---

# Resultado esperado

El estudiante debe poder explicar el siguiente flujo:

```text
COMPONENTE REACT
       │
       ▼
useEffect()
       │
       ▼
fetch()
       │
       │ GET
       ▼
API
       │
       │ 200 OK
       │ JSON
       ▼
response.json()
       │
       ▼
setEstado()
       │
       ▼
RENDERIZADO
       │
       ▼
INTERFAZ
```

---

# Conceptos trabajados

* React;
* cliente;
* API;
* HTTP;
* GET;
* Request;
* Response;
* JSON;
* `fetch()`;
* promesas;
* estado;
* `useState`;
* efectos;
* `useEffect`;
* `map()`;
* listas;
* `key`;
* carga;
* manejo de errores.

---

# Conclusión

El consumo de APIs permite que una interfaz React utilice información proporcionada por servicios externos.

En este proceso se integran los fundamentos estudiados previamente: cliente-servidor, HTTP, Request, Response y JSON.

Este mismo principio será utilizado posteriormente para comunicar aplicaciones React con servicios Back End desarrollados mediante Spring Boot.
