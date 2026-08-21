# Ejemplo 03 - Manipulación del DOM con JavaScript

## Unidad 2 - Introducción a las interfaces de usuario web

Este ejemplo permite comprender cómo JavaScript puede acceder a los elementos de una página HTML y modificar dinámicamente su contenido.

La aplicación permite registrar estudiantes, mostrarlos en una lista, eliminarlos individualmente y eliminar todos los registros.

El propósito principal no es construir un sistema de información completo, sino observar cómo JavaScript interactúa con el **DOM (Document Object Model)**.

El módulo presenta el DOM como el mecanismo que permite acceder desde JavaScript a los elementos de una interfaz y modificarlos para generar páginas dinámicas. En su ejercicio también utiliza métodos como `createElement()`, `appendChild()` y `querySelector()` para generar elementos desde JavaScript.

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de:

* explicar qué representa el DOM;
* acceder a elementos HTML desde JavaScript;
* escuchar eventos producidos por el usuario;
* obtener valores introducidos en formularios;
* modificar el contenido textual de un elemento;
* crear nuevos elementos HTML desde JavaScript;
* agregar clases CSS desde JavaScript;
* insertar nuevos elementos dentro del documento;
* eliminar elementos de una interfaz;
* renderizar una lista a partir de un arreglo de objetos;
* comprender la relación entre HTML, CSS, JavaScript y DOM.

---

# Estructura del ejemplo

```text
ejemplo03-dom/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

# ¿Qué es el DOM?

DOM significa:

```text
Document Object Model
```

Puede traducirse como:

```text
Modelo de Objetos del Documento
```

Cuando el navegador interpreta un archivo HTML, crea una representación estructurada del documento.

Por ejemplo, un HTML como:

```html
<body>
    <h1>Estudiantes</h1>

    <ul>
        <li>Ana</li>
        <li>Carlos</li>
    </ul>
</body>
```

puede imaginarse conceptualmente como un árbol:

```text
document
   │
   └── html
       │
       └── body
           │
           ├── h1
           │   └── "Estudiantes"
           │
           └── ul
               │
               ├── li
               │   └── "Ana"
               │
               └── li
                   └── "Carlos"
```

JavaScript puede acceder a estos elementos y modificarlos.

---

# Relación entre HTML, CSS y JavaScript

En este ejemplo cada tecnología cumple una responsabilidad diferente.

```text
HTML
│
└── estructura

CSS
│
└── presentación

JavaScript
│
└── comportamiento e interactividad
```

El DOM permite que JavaScript acceda a la estructura creada mediante HTML.

---

# Flujo general

```text
HTML
   │
   ▼
Navegador construye el DOM
   │
   ▼
JavaScript accede al DOM
   │
   ├── consulta elementos
   ├── modifica elementos
   ├── crea elementos
   └── elimina elementos
   │
   ▼
La interfaz cambia
```

---

# Paso 1. Abrir el ejemplo

Abra:

```text
index.html
```

en el navegador.

También puede utilizar Live Server desde Visual Studio Code.

Inicialmente debe observar:

```text
Registrar estudiante

Nombre:
[                     ]

Programa:
[                     ]

[Agregar estudiante]


Estudiantes registrados

Total de estudiantes: 0

No hay estudiantes registrados.
```

---

# Paso 2. Registrar un estudiante

Ingrese por ejemplo:

```text
Nombre:
Ana Pérez

Programa:
Ingeniería de Sistemas
```

Presione:

```text
Agregar estudiante
```

La página debe mostrar:

```text
Ana Pérez
Ingeniería de Sistemas

[Eliminar]
```

Observe que este elemento **no se encontraba escrito inicialmente en el HTML**.

JavaScript lo creó dinámicamente.

---

# Paso 3. Agregar más estudiantes

Agregue por ejemplo:

```text
Carlos Gómez
Ingeniería Industrial
```

y:

```text
Laura Martínez
Administración de Empresas
```

El contador debe modificarse automáticamente:

```text
Total de estudiantes: 3
```

---

# Paso 4. Eliminar un estudiante

Presione:

```text
Eliminar
```

junto a uno de los registros.

El estudiante desaparecerá de la interfaz.

También se actualizará el contador.

---

# Paso 5. Eliminar todos

Presione:

```text
Eliminar todos
```

El arreglo quedará vacío.

La interfaz mostrará nuevamente:

```text
Total de estudiantes: 0
```

y:

```text
No hay estudiantes registrados.
```

---

# El objeto `document`

Una de las palabras más importantes del ejemplo es:

```javascript
document
```

`document` representa el documento HTML cargado actualmente por el navegador.

Gracias a este objeto podemos acceder al DOM.

Por ejemplo:

```javascript
document.getElementById("nombre")
```

permite localizar un elemento del documento.

---

# Obtener elementos por ID

En el archivo `script.js` encontramos:

```javascript
const formulario =
    document.getElementById("formEstudiante");
```

Esta instrucción busca el elemento cuyo HTML contiene:

```html
id="formEstudiante"
```

Es decir:

```html
<form id="formEstudiante">
```

Después de ejecutar esa instrucción, JavaScript puede trabajar con ese formulario.

---

# Más elementos obtenidos

También se utiliza:

```javascript
document.getElementById("nombre");
```

para obtener:

```html
<input id="nombre">
```

y:

```javascript
document.getElementById("listaEstudiantes");
```

para obtener:

```html
<ul id="listaEstudiantes"></ul>
```

---

# ¿Por qué utilizar `const`?

Cuando escribimos:

```javascript
const formulario = ...
```

la variable `formulario` mantendrá la referencia al elemento encontrado.

No necesitamos reasignar esa variable posteriormente.

---

# Eventos

Una página web puede responder a acciones realizadas por el usuario.

Por ejemplo:

```text
clic
escribir
enviar formulario
presionar tecla
mover el ratón
```

En este ejemplo trabajamos principalmente con:

```text
submit
click
```

---

# `addEventListener()`

La instrucción:

```javascript
formulario.addEventListener(
    "submit",
    ...
);
```

puede interpretarse como:

> Cuando ocurra el evento `submit` sobre este formulario, ejecuta determinada función.

---

# Evento submit

Cuando el usuario presiona:

```text
Agregar estudiante
```

el formulario intenta enviarse.

Por defecto, esto podría hacer que la página se recargara.

---

# `preventDefault()`

Por esta razón utilizamos:

```javascript
event.preventDefault();
```

Esta instrucción evita el comportamiento predeterminado del formulario.

De esta manera podemos gestionar el proceso mediante JavaScript.

---

# Obtener el valor de un input

Se utiliza:

```javascript
inputNombre.value
```

para conocer qué escribió el usuario.

Por ejemplo:

```text
Ana Pérez
```

---

# `trim()`

También encontramos:

```javascript
inputNombre.value.trim();
```

`trim()` elimina espacios innecesarios al comienzo y al final del texto.

Por ejemplo:

```text
"   Ana Pérez   "
```

se convierte conceptualmente en:

```text
"Ana Pérez"
```

---

# Crear un objeto JavaScript

Con los datos obtenidos se crea:

```javascript
const nuevoEstudiante = {
    id: Date.now(),
    nombre,
    programa
};
```

Este objeto tiene tres propiedades:

```text
id
nombre
programa
```

Ejemplo conceptual:

```javascript
{
    id: 123456,
    nombre: "Ana Pérez",
    programa: "Ingeniería de Sistemas"
}
```

---

# Arreglo de estudiantes

Al inicio tenemos:

```javascript
let estudiantes = [];
```

Los corchetes:

```text
[]
```

representan un arreglo.

Inicialmente está vacío.

---

# Agregar un estudiante al arreglo

Se utiliza:

```javascript
estudiantes.push(nuevoEstudiante);
```

`push()` agrega un elemento al final del arreglo.

Después de registrar dos estudiantes podríamos tener conceptualmente:

```javascript
[
    {
        id: 1,
        nombre: "Ana",
        programa: "Ingeniería de Sistemas"
    },
    {
        id: 2,
        nombre: "Carlos",
        programa: "Ingeniería Industrial"
    }
]
```

---

# Arreglo y DOM no son lo mismo

Es importante diferenciar:

```text
ARREGLO JAVASCRIPT
```

y:

```text
ELEMENTOS MOSTRADOS EN LA PÁGINA
```

El arreglo contiene los datos.

El DOM contiene los elementos que el navegador está mostrando.

Por ello utilizamos una función para transformar los datos en elementos visuales.

---

# Función `renderizarEstudiantes()`

La función:

```javascript
function renderizarEstudiantes() {
```

tiene como responsabilidad actualizar la interfaz de acuerdo con el contenido del arreglo.

Cada vez que:

```text
agregamos
eliminamos
eliminamos todos
```

se vuelve a ejecutar esta función.

---

# ¿Qué significa renderizar?

En este contexto, renderizar significa construir o actualizar la representación visual de los datos.

Puede imaginarse:

```text
DATOS
   │
   ▼
renderizarEstudiantes()
   │
   ▼
DOM
   │
   ▼
INTERFAZ
```

---

# Limpiar la lista

La función comienza utilizando:

```javascript
listaEstudiantes.innerHTML = "";
```

Esto elimina el contenido HTML que se encontraba dentro de:

```html
<ul id="listaEstudiantes">
```

Después se vuelve a construir la lista según los datos actuales.

---

# Actualizar texto con `textContent`

Se utiliza:

```javascript
contador.textContent =
    `Total de estudiantes: ${estudiantes.length}`;
```

`textContent` permite modificar el contenido textual de un elemento.

Si existen tres estudiantes, el resultado será:

```text
Total de estudiantes: 3
```

---

# `length`

La propiedad:

```javascript
estudiantes.length
```

indica cuántos elementos contiene el arreglo.

Por ejemplo:

```text
0
1
2
3
```

---

# Mostrar u ocultar un elemento

Encontramos:

```javascript
mensajeVacio.hidden =
    estudiantes.length > 0;
```

Si existen estudiantes:

```text
hidden = true
```

y el mensaje:

```text
No hay estudiantes registrados.
```

queda oculto.

Si no existen estudiantes:

```text
hidden = false
```

y vuelve a mostrarse.

---

# Habilitar o deshabilitar un botón

Se utiliza:

```javascript
botonEliminarTodos.disabled =
    estudiantes.length === 0;
```

Cuando no existen estudiantes:

```text
disabled = true
```

El botón no puede utilizarse.

Cuando existen registros:

```text
disabled = false
```

---

# Recorrer el arreglo

La función utiliza:

```javascript
estudiantes.forEach(estudiante => {
```

`forEach()` ejecuta una función una vez por cada elemento del arreglo.

Si existen tres estudiantes, el bloque se ejecutará tres veces.

---

# Crear elementos con `createElement()`

Aquí comienza la manipulación directa del DOM.

Se utiliza:

```javascript
const item =
    document.createElement("li");
```

Esta instrucción crea un nuevo elemento:

```html
<li></li>
```

Todavía no aparece en la página.

Solo existe en memoria.

---

# Crear otros elementos

También se crean:

```javascript
document.createElement("div");
```

```javascript
document.createElement("span");
```

```javascript
document.createElement("button");
```

Cada llamada crea un nuevo nodo del DOM.

---

# Agregar clases CSS

Después de crear el `li` se utiliza:

```javascript
item.classList.add("estudiante");
```

Esto produce conceptualmente:

```html
<li class="estudiante">
```

La clase permite aplicar los estilos definidos en:

```text
styles.css
```

---

# `classList`

`classList` permite trabajar con las clases CSS de un elemento.

Por ejemplo:

```javascript
elemento.classList.add("activo");
```

agrega:

```text
activo
```

a las clases del elemento.

---

# Crear el nombre del estudiante

Se crea:

```javascript
const nombre =
    document.createElement("span");
```

Después:

```javascript
nombre.textContent =
    estudiante.nombre;
```

Si el estudiante es:

```javascript
{
    nombre: "Ana Pérez"
}
```

el resultado será:

```html
<span>Ana Pérez</span>
```

---

# Crear el programa

De forma similar:

```javascript
const programa =
    document.createElement("span");
```

y:

```javascript
programa.textContent =
    estudiante.programa;
```

---

# Crear un botón desde JavaScript

También se ejecuta:

```javascript
const botonEliminar =
    document.createElement("button");
```

Después:

```javascript
botonEliminar.textContent =
    "Eliminar";
```

El resultado conceptual es:

```html
<button>
    Eliminar
</button>
```

---

# Agregar eventos a elementos creados dinámicamente

Aunque el botón no existía originalmente en HTML, podemos agregarle un evento:

```javascript
botonEliminar.addEventListener(
    "click",
    () => {
        eliminarEstudiante(
            estudiante.id
        );
    }
);
```

Cuando el usuario presiona ese botón se ejecuta:

```javascript
eliminarEstudiante(...)
```

---

# Construcción de la estructura

Los elementos creados inicialmente están separados.

Por ejemplo:

```text
div
span nombre
span programa
button
li
```

Necesitamos establecer relaciones entre ellos.

---

# `appendChild()`

Se utiliza:

```javascript
informacion.appendChild(nombre);
```

Esto significa:

> agrega `nombre` como hijo del elemento `informacion`.

Conceptualmente:

```html
<div>
    <span>Ana Pérez</span>
</div>
```

---

# Otro hijo

Después:

```javascript
informacion.appendChild(programa);
```

queda:

```html
<div>
    <span>Ana Pérez</span>
    <span>Ingeniería de Sistemas</span>
</div>
```

---

# Agregar información al `<li>`

Se utiliza:

```javascript
item.appendChild(informacion);
```

y después:

```javascript
item.appendChild(botonEliminar);
```

El resultado conceptual es:

```html
<li>
    <div>
        <span>Ana Pérez</span>
        <span>Ingeniería de Sistemas</span>
    </div>

    <button>
        Eliminar
    </button>
</li>
```

---

# Insertar finalmente en la página

Hasta este momento el elemento todavía debe agregarse a la lista principal.

Se utiliza:

```javascript
listaEstudiantes.appendChild(item);
```

Ahora el `<li>` pasa a formar parte de:

```html
<ul id="listaEstudiantes">
```

y el navegador lo muestra.

---

# Construcción completa

El proceso puede visualizarse:

```text
document.createElement("li")
          │
          ▼
        <li>
          │
          ├── appendChild(div)
          │
          └── appendChild(button)
          │
          ▼
listaEstudiantes.appendChild(li)
          │
          ▼
         DOM
          │
          ▼
      INTERFAZ
```

---

# Eliminar estudiantes del arreglo

La función:

```javascript
function eliminarEstudiante(id)
```

utiliza:

```javascript
estudiantes.filter(...)
```

Por ejemplo:

```javascript
estudiantes = estudiantes.filter(
    estudiante => estudiante.id !== id
);
```

Esto crea un nuevo arreglo que contiene todos los estudiantes excepto aquel cuyo `id` queremos eliminar.

---

# Después de eliminar

Se ejecuta nuevamente:

```javascript
renderizarEstudiantes();
```

La interfaz se reconstruye utilizando el nuevo contenido del arreglo.

---

# Eliminar todos

Cuando se presiona:

```text
Eliminar todos
```

se ejecuta:

```javascript
estudiantes = [];
```

El arreglo vuelve a estar vacío.

Después:

```javascript
renderizarEstudiantes();
```

actualiza el DOM.

---

# `reset()`

Después de agregar un estudiante se utiliza:

```javascript
formulario.reset();
```

Esto limpia los controles del formulario.

---

# `focus()`

Después se ejecuta:

```javascript
inputNombre.focus();
```

Esto coloca nuevamente el cursor en el campo Nombre.

Así el usuario puede registrar otro estudiante rápidamente.

---

# DOM antes de agregar estudiantes

Inicialmente:

```text
UL
│
└── vacío
```

---

# DOM después de agregar un estudiante

```text
UL
│
└── LI
    │
    ├── DIV
    │   ├── SPAN
    │   │   └── Ana Pérez
    │   │
    │   └── SPAN
    │       └── Ingeniería de Sistemas
    │
    └── BUTTON
        └── Eliminar
```

---

# DOM después de agregar tres estudiantes

```text
UL
│
├── LI
│   └── Ana
│
├── LI
│   └── Carlos
│
└── LI
    └── Laura
```

JavaScript creó todos estos elementos durante la ejecución.

---

# Diferencia entre HTML inicial y DOM actual

El archivo `index.html` contiene originalmente:

```html
<ul id="listaEstudiantes"></ul>
```

Pero después de ejecutar JavaScript, el DOM podría contener conceptualmente:

```html
<ul id="listaEstudiantes">

    <li class="estudiante">
        ...
    </li>

    <li class="estudiante">
        ...
    </li>

</ul>
```

El archivo HTML en el disco no cambió.

Lo que cambió fue el DOM que el navegador mantiene en memoria.

---

# Esta diferencia es muy importante

```text
ARCHIVO HTML
│
│ se carga
▼
DOM
│
│ JavaScript modifica
▼
DOM ACTUALIZADO
```

JavaScript no necesita modificar físicamente el archivo `index.html` para cambiar lo que el usuario observa.

---

# Inspeccionar el DOM

Abra las herramientas de desarrollo del navegador.

Puede utilizar normalmente:

```text
F12
```

Busque la pestaña:

```text
Inspector
```

o:

```text
Elements
```

dependiendo del navegador.

---

# Prueba práctica

Antes de agregar estudiantes, observe:

```html
<ul id="listaEstudiantes">
```

Después registre un estudiante.

Vuelva a inspeccionar el elemento.

Debe observar que ahora existen nuevos nodos `<li>`, `<div>`, `<span>` y `<button>`.

Esto permite ver directamente la modificación del DOM.

---

# Métodos y propiedades principales utilizados

| Elemento                    | Propósito                          |
| --------------------------- | ---------------------------------- |
| `document.getElementById()` | Obtener un elemento existente      |
| `addEventListener()`        | Escuchar eventos                   |
| `createElement()`           | Crear un elemento nuevo            |
| `textContent`               | Leer o modificar texto             |
| `classList.add()`           | Agregar una clase CSS              |
| `appendChild()`             | Agregar un elemento hijo           |
| `innerHTML`                 | Leer o modificar contenido HTML    |
| `hidden`                    | Mostrar u ocultar                  |
| `disabled`                  | Habilitar o deshabilitar controles |
| `value`                     | Obtener el valor de un campo       |
| `focus()`                   | Colocar el foco en un elemento     |

---

# `getElementById()` y `querySelector()`

En este ejemplo utilizamos principalmente:

```javascript
document.getElementById("nombre");
```

También podría utilizarse:

```javascript
document.querySelector("#nombre");
```

Ambas instrucciones pueden localizar el mismo elemento.

---

# `querySelector()`

`querySelector()` recibe un selector CSS.

Por ejemplo:

```javascript
document.querySelector("#nombre");
```

busca un ID.

Mientras:

```javascript
document.querySelector(".estudiante");
```

busca el primer elemento que tenga la clase:

```text
estudiante
```

---

# `querySelectorAll()`

Si queremos obtener todos los elementos que coincidan con un selector, podemos utilizar:

```javascript
document.querySelectorAll(".estudiante");
```

Esto permitiría obtener todos los estudiantes mostrados actualmente.

---

# Relación con el ejemplo del módulo

El módulo construye dinámicamente una tabla utilizando JavaScript y métodos del DOM como:

```text
createElement()
createTextNode()
appendChild()
querySelector()
```

En este ejemplo aplicamos el mismo principio, pero construimos una lista interactiva que además permite eliminar elementos y actualizar el contador.

---

# ¿Por qué aprender DOM antes de React?

Posteriormente utilizaremos React para construir interfaces.

Sin embargo, es importante comprender primero que una interfaz web finalmente está compuesta por elementos del DOM.

Con JavaScript tradicional hacemos modificaciones como:

```javascript
document.createElement(...)
```

```javascript
elemento.appendChild(...)
```

Con React utilizaremos una forma declarativa de expresar cómo queremos que se vea la interfaz.

Comprender el DOM ayuda a entender qué problema facilitan las librerías modernas.

---

# Reto 1 - Agregar edad

Agregue al formulario:

```text
Edad
```

Modifique el objeto estudiante para almacenar:

```javascript
{
    id,
    nombre,
    programa,
    edad
}
```

Muestre la edad en la lista.

---

# Reto 2 - Agregar correo

Agregue:

```text
Correo electrónico
```

Utilice:

```html
<input type="email">
```

Muestre el correo del estudiante.

---

# Reto 3 - Contador por programa

Además de:

```text
Total de estudiantes: 4
```

muestre cuántos pertenecen a:

```text
Ingeniería de Sistemas
```

---

# Reto 4 - Botón destacado

Agregue un botón:

```text
Destacar
```

Cuando se presione, agregue una clase CSS al estudiante.

Puede investigar o utilizar:

```javascript
elemento.classList.toggle(...)
```

---

# Reto 5 - Editar estudiante

Agregue un botón:

```text
Editar
```

Permita modificar el nombre o programa de un estudiante.

Después vuelva a ejecutar:

```javascript
renderizarEstudiantes();
```

para actualizar la interfaz.

---

# Reto 6 - Probar `querySelector()`

Reemplace temporalmente:

```javascript
document.getElementById("formEstudiante")
```

por:

```javascript
document.querySelector("#formEstudiante")
```

Compruebe que el comportamiento sigue siendo el mismo.

---

# Preguntas de análisis

1. ¿Qué significa DOM?
2. ¿Qué representa el objeto `document`?
3. ¿Qué función cumple `getElementById()`?
4. ¿Qué diferencia existe entre HTML y DOM?
5. ¿Para qué sirve `addEventListener()`?
6. ¿Qué ocurre si no se utiliza `preventDefault()` en el formulario?
7. ¿Cómo se obtiene el valor escrito en un `input`?
8. ¿Qué hace `createElement()`?
9. ¿Qué hace `textContent`?
10. ¿Qué función cumple `classList.add()`?
11. ¿Qué hace `appendChild()`?
12. ¿Por qué un elemento creado mediante JavaScript no aparece inmediatamente en la página?
13. ¿Qué función cumple `renderizarEstudiantes()`?
14. ¿Qué diferencia existe entre el arreglo `estudiantes` y los elementos `<li>` del DOM?
15. ¿Qué ocurre con el DOM cuando se elimina un estudiante?
16. ¿Para qué sirve `querySelector()`?
17. ¿Cuál es la diferencia básica entre `querySelector()` y `querySelectorAll()`?
18. ¿Por qué resulta útil comprender el DOM antes de trabajar con React?

---

# Resultado esperado

Después de agregar tres estudiantes:

```text
Manipulación del DOM con JavaScript


Registrar estudiante

Nombre:
[                         ]

Programa:
[                         ]

[Agregar estudiante]


Estudiantes registrados

Total de estudiantes: 3

Ana Pérez
Ingeniería de Sistemas
[Eliminar]

Carlos Gómez
Ingeniería Industrial
[Eliminar]

Laura Martínez
Administración de Empresas
[Eliminar]
```

Todo el contenido correspondiente a los estudiantes habrá sido generado dinámicamente mediante JavaScript.

---

# Flujo del ejemplo

```text
USUARIO
   │
   │ completa formulario
   ▼
EVENTO submit
   │
   ▼
JAVASCRIPT
   │
   ├── obtiene valores
   ├── crea objeto
   ├── actualiza arreglo
   │
   ▼
renderizarEstudiantes()
   │
   ├── createElement()
   ├── textContent
   ├── classList.add()
   └── appendChild()
   │
   ▼
DOM ACTUALIZADO
   │
   ▼
NAVEGADOR
```

---

# Conceptos trabajados

* DOM;
* `document`;
* nodos;
* eventos;
* `getElementById()`;
* `querySelector()`;
* `addEventListener()`;
* `preventDefault()`;
* `value`;
* `createElement()`;
* `textContent`;
* `classList`;
* `appendChild()`;
* `innerHTML`;
* arreglos;
* objetos;
* `forEach()`;
* `filter()`;
* renderizado dinámico.

---

# Conclusión

El DOM permite que JavaScript interactúe directamente con la estructura de una página web.

Gracias a él es posible responder a las acciones del usuario, modificar textos, crear elementos, eliminar contenido y construir interfaces dinámicas.

Este conocimiento constituye una base importante para comprender posteriormente cómo librerías como React permiten desarrollar interfaces de usuario de forma más organizada.
