# Guía de práctica 02 - Interfaces web

## Desarrollo de Software II

---

# 1. Propósito de la práctica

Esta práctica tiene como propósito aplicar los fundamentos necesarios para construir interfaces web adaptables, accesibles e interactivas.

A través de los ejemplos de la Unidad 2, el estudiante revisará conceptos de HTML y CSS, analizará técnicas de diseño responsivo, aplicará prácticas básicas de accesibilidad, manipulará el DOM mediante JavaScript y utilizará características modernas del lenguaje.

---

# 2. Objetivo de aprendizaje

Al finalizar la práctica, el estudiante estará en capacidad de:

* reconocer la relación entre HTML, CSS y JavaScript;
* aplicar diseño responsivo;
* utilizar media queries;
* aplicar prácticas básicas de accesibilidad;
* manipular elementos del DOM;
* responder a eventos;
* crear elementos dinámicamente;
* modificar la interfaz desde JavaScript;
* utilizar características modernas de JavaScript;
* integrar estos conceptos en una pequeña interfaz interactiva.

---

# 3. Recursos

Utilice:

```text
unidad2-interfaces-web/
```

Específicamente:

```text
ejemplo01-html-css
ejemplo02-responsive-accesibilidad
ejemplo03-dom
ejemplo04-javascript-moderno
```

También puede consultar los recursos complementarios de:

[HTML - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/html)

[CSS - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/css)

[JavaScript - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/javascript)

---

# 4. Requisitos

Se recomienda contar con:

* Visual Studio Code;
* navegador web;
* Node.js;
* terminal;
* Live Server o una herramienta equivalente.

Compruebe Node.js:

```bash
node --version
```

---

# 5. Actividad 1 - Revisar HTML y CSS

Ingrese a:

```text
ejemplo01-html-css/
```

Abra el `README.md`.

Revise los enlaces a los recursos de HTML y CSS.

---

# 6. Identificar responsabilidades

Complete:

```text
HTML
Función principal:

________________________________________
```

```text
CSS
Función principal:

________________________________________
```

```text
JavaScript
Función principal:

________________________________________
```

---

# 7. Relacionar estructura y presentación

Considere:

```html
<h1>Desarrollo de Software II</h1>
```

y:

```css
h1 {
    text-align: center;
}
```

Explique qué hace HTML y qué hace CSS.

```text
HTML:
________________________________________

CSS:
________________________________________
```

---

# 8. Actividad 2 - Diseño responsivo

Ingrese a:

```text
ejemplo02-responsive-accesibilidad/
```

Abra:

```text
index.html
```

en el navegador.

Observe inicialmente la interfaz en una ventana amplia.

---

# 9. Identificar distribución inicial

Registre cómo aparecen:

```text
Menú:
________________________________________

Presentación:
________________________________________

Tarjetas:
________________________________________
```

---

# 10. Reducir el tamaño de la ventana

Reduzca lentamente el ancho del navegador.

Observe cuándo cambia la distribución.

Identifique:

```css
@media (max-width: 768px)
```

---

# 11. Analizar media query

Explique qué significa:

```text
max-width: 768px
```

Respuesta:

```text
____________________________________________________

____________________________________________________
```

---

# 12. Comparar pantalla grande y pequeña

Complete:

| Elemento       | Pantalla grande | Pantalla pequeña |
| -------------- | --------------- | ---------------- |
| Menú           |                 |                  |
| Texto e imagen |                 |                  |
| Tarjetas       |                 |                  |

---

# 13. Probar otro breakpoint

Cambie temporalmente:

```css
768px
```

por:

```css
600px
```

Observe el resultado.

Luego pruebe:

```css
900px
```

---

# 14. Analizar

¿Qué cambia al modificar el breakpoint?

```text
____________________________________________________

____________________________________________________
```

Después restaure el valor original.

---

# 15. Actividad 3 - Accesibilidad

En el mismo ejemplo identifique:

```html
<html lang="es">
```

Explique su propósito.

```text
____________________________________________________
```

---

# 16. Texto alternativo

Localice:

```html
alt="..."
```

en la imagen.

Copie el texto alternativo utilizado:

```text
____________________________________________________
```

Explique por qué un texto como:

```text
imagen
```

sería poco informativo.

---

# 17. Labels

Localice:

```html
<label for="nombre">
```

y:

```html
<input id="nombre">
```

Explique la relación entre:

```text
for
```

e:

```text
id
```

Respuesta:

```text
____________________________________________________

____________________________________________________
```

---

# 18. Prueba con teclado

Sin utilizar el ratón, presione repetidamente:

```text
Tab
```

Recorra:

```text
enlaces
campos
botones
```

---

# 19. Registre

¿Es posible identificar qué elemento tiene el foco?

```text
Sí / No
```

¿Qué estilo visual lo permite?

```text
____________________________________________________
```

---

# 20. Actividad 4 - Manipulación del DOM

Ingrese a:

```text
ejemplo03-dom/
```

Abra:

```text
index.html
```

---

# 21. Estado inicial

Observe:

```text
Total de estudiantes: 0
```

y:

```text
No hay estudiantes registrados.
```

---

# 22. Registrar estudiante

Ingrese:

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

---

# 23. Observar cambio

Registre:

```text
Cantidad inicial:
____________________

Cantidad después:
____________________
```

---

# 24. Inspeccionar el DOM

Abra las herramientas del navegador:

```text
F12
```

Busque:

```text
Elements
```

o:

```text
Inspector
```

---

# 25. Antes y después

Antes de agregar estudiantes, localice:

```html
<ul id="listaEstudiantes">
```

Después agregue un estudiante.

Observe los nuevos elementos generados.

Registre qué etiquetas aparecieron:

```text
________________________________________

________________________________________
```

---

# 26. Identificar métodos DOM

Localice en `script.js`:

```javascript
document.getElementById()
```

Explique su función:

```text
____________________________________________________
```

---

# 27. `createElement()`

Localice:

```javascript
document.createElement("li")
```

Explique qué ocurre cuando se ejecuta.

```text
____________________________________________________

____________________________________________________
```

---

# 28. `appendChild()`

Localice:

```javascript
appendChild()
```

Explique su función:

```text
____________________________________________________
```

---

# 29. `textContent`

Localice:

```javascript
textContent
```

Indique para qué se utiliza:

```text
____________________________________________________
```

---

# 30. Eventos

Localice:

```javascript
addEventListener()
```

Identifique los eventos utilizados.

```text
Evento 1:
________________________

Evento 2:
________________________
```

---

# 31. `preventDefault()`

Explique por qué se utiliza:

```javascript
event.preventDefault();
```

en el formulario.

```text
____________________________________________________

____________________________________________________
```

---

# 32. Eliminar un estudiante

Agregue tres estudiantes.

Elimine solamente uno.

Registre:

```text
Cantidad antes:
____________________

Cantidad después:
____________________
```

---

# 33. Eliminar todos

Presione:

```text
Eliminar todos
```

Observe el comportamiento.

¿Qué ocurre con:

```text
contador
mensaje vacío
botón
lista
```

---

# 34. Diferenciar datos y DOM

Complete:

```text
Arreglo estudiantes

Representa:
________________________________________
```

```text
Elementos <li>

Representan:
________________________________________
```

---

# 35. Actividad 5 - JavaScript moderno

Ingrese a:

```text
ejemplo04-javascript-moderno/
```

Ejecute cada archivo de forma independiente.

---

# 36. `let` y `const`

Ejecute:

```bash
node 01-let-const.js
```

Complete:

```text
let
________________________________________

const
________________________________________
```

---

# 37. Alcance de bloque

Explique por qué una variable declarada con:

```javascript
let
```

dentro de:

```text
{
}
```

no puede utilizarse necesariamente fuera del bloque.

```text
____________________________________________________
```

---

# 38. Template literals

Ejecute:

```bash
node 02-template-literals.js
```

Complete:

```text
Símbolo utilizado:
____________________
```

```text
Forma de insertar una variable:
____________________
```

---

# 39. Crear mensaje propio

Utilice:

```javascript
const nombre = "Laura";
const curso = "Desarrollo de Software II";
```

y genere:

```text
Laura está estudiando Desarrollo de Software II.
```

Código:

```javascript
```

---

# 40. Arrow functions

Ejecute:

```bash
node 03-arrow-functions.js
```

Convierta:

```javascript
function cuadrado(numero) {
    return numero * numero;
}
```

a una arrow function.

```javascript
```

---

# 41. Parámetro por defecto

Cree:

```javascript
const saludar = ...
```

que reciba:

```text
nombre
saludo
```

y utilice:

```text
Hola
```

como saludo por defecto.

---

# 42. `for...of`

Ejecute:

```bash
node 04-for-of.js
```

Cree:

```javascript
const cursos = [
    "Desarrollo de Software II",
    "Lenguaje de Programación II",
    "Lenguaje de Programación III"
];
```

Recórralo con:

```text
for...of
```

---

# 43. Destructuring

Ejecute:

```bash
node 05-destructuring.js
```

Considere:

```javascript
const estudiante = {
    nombre: "Ana",
    semestre: 4,
    programa: "Ingeniería de Sistemas"
};
```

Extraiga:

```text
nombre
programa
```

Código:

```javascript
```

---

# 44. Rest

Ejecute:

```bash
node 06-rest-spread.js
```

Cree:

```javascript
function sumar(...numeros)
```

que permita:

```javascript
sumar(1, 2, 3, 4);
```

---

# 45. Spread

Combine:

```javascript
const grupoA = ["Ana", "Carlos"];
```

y:

```javascript
const grupoB = ["Laura", "Pedro"];
```

Código:

```javascript
```

---

# 46. Clases

Ejecute:

```bash
node 07-clases.js
```

Cree una clase:

```text
Curso
```

con:

```text
nombre
creditos
```

y un método:

```text
mostrarInformacion()
```

---

# 47. Herencia

Cree:

```text
CursoVirtual
```

que herede de:

```text
Curso
```

y agregue:

```text
plataforma
```

---

# 48. Map

Ejecute:

```bash
node 08-map-set.js
```

Cree un `Map`:

```text
DS2 → Desarrollo de Software II
LP2 → Lenguaje de Programación II
```

---

# 49. Set

Cree:

```javascript
const tecnologias = [
    "Java",
    "React",
    "Java",
    "Spring Boot",
    "React"
];
```

Utilice `Set` para obtener valores únicos.

---

# 50. Reto integrador

Construya una pequeña interfaz para gestionar cursos.

Debe contener un formulario con:

```text
Nombre del curso
Créditos
Programa
```

---

# 51. Al presionar Agregar

JavaScript debe crear dinámicamente una tarjeta:

```text
Desarrollo de Software II

Créditos: 3
Programa: Ingeniería de Sistemas

[Eliminar]
```

---

# 52. Requisitos técnicos

Debe utilizar:

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

# 53. JavaScript moderno

Utilice al menos tres de:

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

# 54. Responsividad

En pantalla amplia:

```text
Tarjeta 1 | Tarjeta 2 | Tarjeta 3
```

En pantalla pequeña:

```text
Tarjeta 1

Tarjeta 2

Tarjeta 3
```

---

# 55. Accesibilidad

La interfaz debe incluir:

* labels correctamente asociados;
* navegación por teclado;
* foco visible;
* HTML semántico;
* textos alternativos si utiliza imágenes.

---

# 56. Evidencias sugeridas

Conserve:

1. página en pantalla grande;
2. página en pantalla móvil;
3. navegación con teclado;
4. estudiantes creados mediante DOM;
5. inspección del DOM;
6. ejecución de ejemplos JavaScript;
7. reto integrador funcionando.

---

# 57. Preguntas de cierre

1. ¿Qué función cumple HTML?
2. ¿Qué función cumple CSS?
3. ¿Qué significa diseño responsivo?
4. ¿Qué es una media query?
5. ¿Qué significa breakpoint?
6. ¿Qué significa accesibilidad web?
7. ¿Qué función cumple `alt`?
8. ¿Por qué es importante `label`?
9. ¿Qué significa DOM?
10. ¿Qué representa `document`?
11. ¿Qué hace `getElementById()`?
12. ¿Qué hace `createElement()`?
13. ¿Qué hace `appendChild()`?
14. ¿Qué función cumple `addEventListener()`?
15. ¿Qué diferencia existe entre el arreglo de datos y el DOM?
16. ¿Cuál es la diferencia entre `let` y `const`?
17. ¿Qué es un template literal?
18. ¿Qué es una arrow function?
19. ¿Qué función cumple `for...of`?
20. ¿Qué es destructuring?
21. ¿Cuál es la diferencia entre rest y spread?
22. ¿Qué es una clase?
23. ¿Qué función cumple `extends`?
24. ¿Qué es `Map`?
25. ¿Qué es `Set`?

---

# 58. Resultado esperado

Al finalizar debe poder comprender el flujo:

```text
USUARIO
   │
   │ interacción
   ▼
HTML
   │
   ▼
DOM
   │
   ▼
JAVASCRIPT
   │
   ├── lee
   ├── crea
   ├── modifica
   └── elimina
   │
   ▼
INTERFAZ ACTUALIZADA
```

y reconocer:

```text
HTML
→ estructura

CSS
→ presentación

JavaScript
→ comportamiento

DOM
→ representación manipulable de la interfaz
```

---

# Conclusión

Las interfaces web se construyen combinando estructura, presentación y comportamiento.

HTML define los elementos del documento, CSS determina su presentación y JavaScript permite responder a las acciones del usuario mediante el DOM.

El diseño responsivo permite adaptar la interfaz a diferentes tamaños de pantalla, mientras que la accesibilidad ayuda a que pueda ser utilizada por personas con diferentes formas de interacción.

Estos fundamentos preparan el camino para trabajar con React en la siguiente unidad.
