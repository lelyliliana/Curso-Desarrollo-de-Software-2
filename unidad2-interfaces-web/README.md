# Unidad 2 - Introducción a las interfaces de usuario web

[Volver al índice del curso](../README.md) · [Ver el curso en Aprende con Leli](https://lelyliliana.github.io/aprende-con-leli/cursos/fullstack/)

Esta unidad aborda los fundamentos necesarios para construir interfaces web y agregarles comportamiento mediante JavaScript.

El módulo organiza la unidad alrededor de tres grandes temas:

* conceptos base de las interfaces web;
* maquetación con HTML y CSS;
* introducción a JavaScript.

También incorpora conceptos como navegador web, DOM, diseño responsivo y accesibilidad.

---

# Objetivo de la unidad

Al finalizar esta unidad, el estudiante estará en capacidad de:

* reconocer los elementos principales de una interfaz web;
* comprender la función del navegador;
* utilizar HTML para estructurar contenido;
* utilizar CSS para modificar la presentación de una interfaz;
* comprender los principios básicos del diseño responsivo;
* aplicar prácticas básicas de accesibilidad;
* comprender qué es el DOM;
* manipular elementos de una página utilizando JavaScript;
* responder a eventos generados por el usuario;
* utilizar características modernas de JavaScript;
* reconocer la relación entre HTML, CSS, JavaScript y DOM.

---

# Estructura de la unidad

```text
unidad2-interfaces-web/
│
├── README.md
│
├── ejemplo01-html-css/
├── ejemplo02-responsive-accesibilidad/
├── ejemplo03-dom/
└── ejemplo04-javascript-moderno/
```

Los ejemplos se encuentran organizados de manera progresiva.

---

# Ruta de aprendizaje

Se recomienda seguir este orden:

```text
Ejemplo 01
HTML y CSS
     │
     ▼
Ejemplo 02
Diseño responsivo
y accesibilidad
     │
     ▼
Ejemplo 03
DOM
     │
     ▼
Ejemplo 04
JavaScript moderno
```

Cada ejemplo utiliza conocimientos estudiados previamente.

---

# Ejemplo 01 - Fundamentos de HTML y CSS

Carpeta:

```text
ejemplo01-html-css
```

Los fundamentos de HTML y CSS ya se encuentran desarrollados y documentados en el repositorio del curso **Lenguaje de Programación II**.

Por esta razón, no se duplica el mismo código dentro de este repositorio.

---

# Recursos de HTML

Consulte:

[Ejemplos de HTML - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/html)

Estos recursos permiten reforzar conceptos relacionados con:

* estructura básica de HTML;
* etiquetas;
* atributos;
* encabezados;
* párrafos;
* enlaces;
* imágenes;
* listas;
* tablas;
* formularios;
* HTML semántico.

---

# Recursos de CSS

Consulte:

[Ejemplos de CSS - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/css)

Estos ejemplos permiten revisar:

* conexión entre HTML y CSS;
* selectores;
* propiedades;
* clases;
* identificadores;
* colores;
* fuentes;
* bordes;
* espacios;
* modelo de caja;
* distribución de elementos.

---

# ¿Por qué se reutilizan estos recursos?

Duplicar los mismos ejemplos en varios repositorios produciría:

```text
código repetido
documentación repetida
mayor dificultad de mantenimiento
posibles versiones diferentes del mismo ejemplo
```

Por esta razón, los fundamentos que ya cuentan con material completo se mantienen en una única fuente y se enlazan desde este curso.

---

# HTML

HTML significa:

```text
HyperText Markup Language
```

Es un lenguaje de marcado utilizado para estructurar el contenido de una página web.

El módulo presenta HTML como el lenguaje que permite describir la estructura de una página mediante etiquetas.

---

# Ejemplo HTML

```html
<h1>Desarrollo de Software II</h1>

<p>
    Introducción a las interfaces web.
</p>
```

Aquí:

```text
<h1>
```

representa un encabezado.

Mientras:

```text
<p>
```

representa un párrafo.

---

# CSS

CSS significa:

```text
Cascading Style Sheets
```

Permite definir la presentación de los elementos de una página HTML.

El módulo lo introduce como el mecanismo utilizado para definir cómo deben visualizarse los elementos HTML.

---

# Ejemplo CSS

```css
h1 {
    font-size: 2rem;
    text-align: center;
}
```

El selector:

```text
h1
```

indica qué elementos recibirán las propiedades definidas.

---

# Relación entre HTML y CSS

Puede representarse así:

```text
HTML
│
└── estructura

CSS
│
└── presentación
```

Por ejemplo:

```html
<button>
    Guardar
</button>
```

define el botón.

Mientras:

```css
button {
    padding: 10px;
}
```

modifica su presentación.

---

# Navegador web

El módulo presenta el navegador como la aplicación encargada de interpretar y mostrar documentos HTML.

Algunos navegadores son:

```text
Google Chrome
Mozilla Firefox
Microsoft Edge
Safari
Opera
```

---

# Flujo simplificado

```text
Archivo HTML
      │
      ▼
Navegador
      │
      ▼
Interfaz visible
```

Si además existen archivos CSS:

```text
HTML + CSS
     │
     ▼
Navegador
     │
     ▼
Interfaz estructurada
y con estilos
```

---

# Maquetación

El módulo utiliza el término **maquetación** para describir el proceso de llevar una propuesta visual a una estructura desarrollada con HTML y CSS.

Puede representarse conceptualmente:

```text
Diseño o mockup
      │
      ▼
HTML
estructura
      │
      +
      │
CSS
presentación
      │
      ▼
Interfaz web
```

---

# Ejemplo 02 - Diseño responsivo y accesibilidad

Carpeta:

```text
ejemplo02-responsive-accesibilidad
```

Este ejemplo permite analizar cómo una interfaz puede adaptarse a diferentes tamaños de pantalla y cómo incorporar prácticas básicas de accesibilidad.

El módulo presenta ambos conceptos dentro de los fundamentos de las interfaces web.

---

# Diseño responsivo

El diseño responsivo permite que una interfaz se adapte a diferentes dispositivos.

Por ejemplo:

```text
Computador
   │
   ▼
┌─────────┬─────────┐
│  TEXTO  │ IMAGEN  │
└─────────┴─────────┘
```

En un teléfono:

```text
┌──────────┐
│  TEXTO   │
├──────────┤
│  IMAGEN  │
└──────────┘
```

La información puede ser la misma.

Lo que cambia es la distribución.

---

# Conceptos utilizados

En el ejemplo se trabajan:

```text
meta viewport
Flexbox
media queries
breakpoints
```

---

# Media queries

Una media query permite aplicar determinados estilos según características del dispositivo o del espacio disponible.

Ejemplo:

```css
@media (max-width: 768px) {

    .contenedor {
        flex-direction: column;
    }

}
```

Esta regla modifica la distribución cuando el ancho disponible es de `768px` o menos.

---

# Accesibilidad

El módulo presenta la accesibilidad como una práctica orientada a facilitar el acceso a las interfaces por personas con diferentes necesidades.

En el ejemplo se utilizan prácticas como:

* HTML semántico;
* atributo `lang`;
* texto alternativo `alt`;
* asociación entre `label` e `input`;
* foco visible;
* navegación mediante teclado;
* tipos adecuados de controles;
* uso moderado de atributos ARIA.

---

# Diseño responsivo y accesibilidad no son lo mismo

## Diseño responsivo

Responde principalmente a:

```text
¿Cómo se adapta la interfaz
al tamaño disponible?
```

## Accesibilidad

Responde a:

```text
¿Cómo facilitar que diferentes
personas puedan utilizar
la interfaz?
```

Ambos conceptos son complementarios.

---

# Ejemplo 03 - Manipulación del DOM

Carpeta:

```text
ejemplo03-dom
```

Este ejemplo permite modificar dinámicamente una página utilizando JavaScript.

El módulo presenta el DOM como el mecanismo mediante el cual JavaScript puede acceder a los elementos de la interfaz y modificar sus propiedades.

---

# DOM

DOM significa:

```text
Document Object Model
```

Puede imaginarse como una representación estructurada del documento HTML.

Por ejemplo:

```html
<body>

    <h1>Estudiantes</h1>

    <ul>
        <li>Ana</li>
    </ul>

</body>
```

puede representarse conceptualmente:

```text
document
   │
   └── html
       │
       └── body
           │
           ├── h1
           │
           └── ul
               │
               └── li
```

---

# JavaScript y DOM

JavaScript puede:

```text
buscar elementos
crear elementos
modificar texto
agregar clases
responder a eventos
eliminar elementos
```

---

# Métodos estudiados

Entre los elementos utilizados se encuentran:

```text
document
getElementById()
querySelector()
querySelectorAll()
createElement()
appendChild()
addEventListener()
```

El módulo también utiliza operaciones de este tipo para generar dinámicamente una tabla desde JavaScript.

---

# Flujo del DOM

```text
HTML
   │
   ▼
Navegador
construye DOM
   │
   ▼
JavaScript
   │
   ├── lee
   ├── modifica
   ├── crea
   └── elimina
   │
   ▼
DOM actualizado
   │
   ▼
Interfaz actualizada
```

---

# Eventos

El ejemplo también permite comprender cómo JavaScript puede responder a acciones del usuario.

Entre ellas:

```text
click
submit
escritura
teclado
```

Por ejemplo:

```javascript
boton.addEventListener(
    "click",
    () => {
        console.log("Botón presionado");
    }
);
```

---

# Ejemplo 04 - JavaScript moderno

Carpeta:

```text
ejemplo04-javascript-moderno
```

Este ejemplo reúne características modernas del lenguaje que el módulo presenta dentro del apartado de ECMAScript 6.

---

# Archivos del ejemplo

```text
01-let-const.js
02-template-literals.js
03-arrow-functions.js
04-for-of.js
05-destructuring.js
06-rest-spread.js
07-clases.js
08-map-set.js
```

Cada archivo puede ejecutarse de forma independiente utilizando Node.js.

---

# `let` y `const`

Permiten declarar variables con alcance de bloque.

De manera simplificada:

```text
let
→ puede reasignarse

const
→ no se reasigna
```

---

# Template literals

Permiten construir cadenas utilizando:

```text
`
```

y expresiones:

```text
${}
```

Ejemplo:

```javascript
const nombre = "Ana";

console.log(
    `Hola ${nombre}`
);
```

---

# Arrow functions

Permiten escribir funciones mediante:

```text
=>
```

Por ejemplo:

```javascript
const sumar =
    (a, b) => a + b;
```

---

# `for...of`

Permite recorrer valores de una colección:

```javascript
for (const lenguaje of lenguajes) {

    console.log(lenguaje);
}
```

---

# Destructuring

Permite extraer datos de estructuras.

Ejemplo:

```javascript
const estudiante = {
    nombre: "Ana",
    programa: "Ingeniería de Sistemas"
};

const {
    nombre,
    programa
} = estudiante;
```

---

# Rest y Spread

Ambos utilizan:

```text
...
```

pero cumplen propósitos diferentes.

```text
REST
varios valores
      │
      ▼
   arreglo
```

Mientras:

```text
SPREAD
arreglo u objeto
      │
      ▼
valores expandidos
```

---

# Clases

JavaScript permite declarar clases:

```javascript
class Estudiante {

    constructor(nombre) {

        this.nombre = nombre;
    }

}
```

También pueden utilizarse:

```text
herencia
extends
super
métodos estáticos
```

---

# Map

`Map` permite almacenar pares:

```text
clave → valor
```

Ejemplo:

```text
1 → Ana
2 → Carlos
```

---

# Set

`Set` permite almacenar valores sin duplicados.

Por ejemplo:

```text
Java
JavaScript
Python
Java
```

se transforma conceptualmente en:

```text
Java
JavaScript
Python
```

---

# ¿Qué ocurre con condicionales, ciclos y operadores?

El módulo también incluye:

* variables;
* tipos de datos;
* operadores;
* `if...else`;
* `switch`;
* operador ternario;
* `while`;
* `for`;
* `for...in`;
* `break`;
* `continue`;
* funciones.

Estos temas corresponden a fundamentos generales de programación y ya se encuentran desarrollados en los recursos de JavaScript del curso **Lenguaje de Programación II**.

---

# Recursos complementarios de JavaScript

Consulte:

[Ejemplos de JavaScript - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/javascript)

Estos recursos pueden utilizarse para reforzar:

```text
variables
operadores
condicionales
ciclos
funciones
eventos
manipulación básica del DOM
```

---

# ¿Por qué no se duplican?

De la misma manera que ocurrió con HTML y CSS, se evita copiar los mismos ejemplos en varios repositorios.

Desarrollo de Software II utiliza esos fundamentos como punto de partida y concentra sus ejemplos propios en:

```text
responsividad
accesibilidad
DOM
JavaScript moderno
```

---

# Integración de HTML, CSS y JavaScript

Estos tres elementos pueden relacionarse:

```text
HTML
│
└── estructura
       │
       ▼
      DOM
       ▲
       │
JavaScript
│
└── comportamiento

CSS
│
└── presentación
```

---

# Flujo de una interfaz interactiva

```text
USUARIO
   │
   │ acción
   ▼
EVENTO
   │
   ▼
JAVASCRIPT
   │
   ▼
DOM
   │
   ▼
INTERFAZ ACTUALIZADA
```

---

# Ejemplo

Un usuario escribe:

```text
Ana
```

y presiona:

```text
Agregar estudiante
```

JavaScript puede:

```text
1. recibir el evento;
2. leer el input;
3. crear un objeto;
4. crear elementos del DOM;
5. agregar esos elementos a la página.
```

---

# Relación con React

Los conceptos estudiados en esta unidad preparan el camino para la siguiente.

React utiliza:

```text
JavaScript
componentes
eventos
datos
estado
```

para construir interfaces.

Por ello es importante comprender previamente:

```text
HTML
CSS
DOM
eventos
JavaScript moderno
```

---

# De JavaScript tradicional a React

En JavaScript tradicional podríamos escribir:

```javascript
const elemento =
    document.createElement("p");

elemento.textContent =
    "Hola";
```

Posteriormente, con React, expresaremos la interfaz de otra manera.

Conceptualmente:

```text
JavaScript tradicional
      │
      ▼
Manipulación directa del DOM

React
      │
      ▼
Descripción declarativa
de la interfaz
```

---

# Ruta completa de la Unidad 2

```text
HTML
estructura
   │
   ▼
CSS
presentación
   │
   ▼
RESPONSIVIDAD
adaptación
   │
   ▼
ACCESIBILIDAD
facilidad de uso
   │
   ▼
DOM
representación
   │
   ▼
JAVASCRIPT
comportamiento
   │
   ▼
JAVASCRIPT MODERNO
preparación para React
```

---

# Actividad de repaso

Antes de continuar con la siguiente unidad, compruebe que puede responder:

1. ¿Qué función cumple HTML?
2. ¿Qué función cumple CSS?
3. ¿Qué es un navegador?
4. ¿Qué significa maquetación?
5. ¿Qué es diseño responsivo?
6. ¿Qué función cumple `meta viewport`?
7. ¿Qué es una media query?
8. ¿Qué significa accesibilidad?
9. ¿Qué función cumple `alt`?
10. ¿Por qué debe relacionarse `label` con `input`?
11. ¿Qué significa DOM?
12. ¿Qué representa `document`?
13. ¿Qué hace `getElementById()`?
14. ¿Qué hace `querySelector()`?
15. ¿Qué función cumple `createElement()`?
16. ¿Qué hace `appendChild()`?
17. ¿Qué función cumple `addEventListener()`?
18. ¿Cuál es la diferencia entre `let` y `const`?
19. ¿Qué es un template literal?
20. ¿Qué significa `=>`?
21. ¿Qué función cumple `for...of`?
22. ¿Qué significa destructuring?
23. ¿Qué diferencia existe entre rest y spread?
24. ¿Qué es una clase en JavaScript?
25. ¿Qué función cumple `extends`?
26. ¿Qué es un `Map`?
27. ¿Qué es un `Set`?

---

# Reto integrador de la unidad

Construya una pequeña interfaz para gestionar cursos.

Debe contener:

```text
Formulario
   │
   ├── nombre del curso
   ├── número de créditos
   └── programa
```

Al presionar:

```text
Agregar curso
```

JavaScript debe crear dinámicamente una tarjeta.

---

# Cada tarjeta debe mostrar

```text
Nombre
Créditos
Programa

[Eliminar]
```

---

# Requisitos técnicos

Utilice:

```text
HTML semántico
CSS
diseño responsivo
label
input
addEventListener()
createElement()
textContent
appendChild()
```

---

# Requisito adicional

Utilice al menos tres características de JavaScript moderno entre:

```text
const
let
template literals
arrow functions
destructuring
spread
for...of
```

---

# Preguntas para el reto

Después de terminar explique:

1. ¿qué información se encuentra originalmente en HTML?
2. ¿qué elementos se crean mediante JavaScript?
3. ¿qué función cumple el DOM?
4. ¿qué ocurre cuando se elimina una tarjeta?
5. ¿cómo se adapta la interfaz a un teléfono?
6. ¿qué medidas de accesibilidad incorporó?

---

# Ejemplos disponibles

## Ejemplo 01

```text
ejemplo01-html-css
```

Reutilización de recursos de HTML y CSS de Lenguaje de Programación II.

---

## Ejemplo 02

```text
ejemplo02-responsive-accesibilidad
```

Diseño responsivo y prácticas básicas de accesibilidad.

---

## Ejemplo 03

```text
ejemplo03-dom
```

Manipulación dinámica del DOM mediante JavaScript.

---

## Ejemplo 04

```text
ejemplo04-javascript-moderno
```

Características modernas de JavaScript.

---

# Conceptos trabajados

* navegador web;
* interfaz de usuario;
* maquetación;
* HTML;
* CSS;
* etiquetas;
* atributos;
* selectores;
* HTML semántico;
* diseño responsivo;
* viewport;
* media queries;
* accesibilidad;
* DOM;
* eventos;
* manipulación dinámica;
* JavaScript;
* `let`;
* `const`;
* template literals;
* arrow functions;
* `for...of`;
* destructuring;
* rest;
* spread;
* clases;
* herencia;
* `Map`;
* `Set`.

---

# Conclusión

La Unidad 2 permite avanzar desde la construcción básica de documentos HTML hasta interfaces que reaccionan a las acciones del usuario.

HTML proporciona la estructura, CSS define la presentación y JavaScript permite incorporar comportamiento e interactividad mediante el DOM.

El diseño responsivo y la accesibilidad complementan estos conocimientos al considerar diferentes dispositivos y formas de interacción.

Finalmente, las características modernas de JavaScript preparan la base necesaria para continuar con el desarrollo Front End basado en React.


---

## Continuar el curso

- **Unidad anterior:** [Unidad 1 - Fundamentos de programación web](../unidad1-fundamentos-web/README.md)
- **Volver al índice:** [Todas las unidades](../README.md)
- **Comenzar los ejemplos:** [Ejemplo 01 - Fundamentos de HTML y CSS](ejemplo01-html-css/README.md)
- **Siguiente unidad:** [Unidad 3 - Desarrollo Front End con React](../unidad3-react/README.md)
