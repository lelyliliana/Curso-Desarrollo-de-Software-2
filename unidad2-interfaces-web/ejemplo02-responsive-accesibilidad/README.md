# Ejemplo 02 - Diseño responsivo y accesibilidad

## Unidad 2 - Introducción a las interfaces de usuario web

Este ejemplo permite observar cómo una interfaz web puede adaptarse a diferentes tamaños de pantalla y cómo pueden aplicarse prácticas básicas de accesibilidad desde el momento en que se construye la página.

El módulo presenta el diseño responsivo como un enfoque que permite adaptar una página a diferentes dispositivos y la accesibilidad como una práctica orientada a facilitar el acceso de personas con diferentes necesidades.

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de:

* comprender el propósito del diseño responsivo;
* utilizar la etiqueta `meta viewport`;
* utilizar Flexbox para distribuir elementos;
* emplear media queries;
* modificar la distribución dependiendo del ancho de pantalla;
* utilizar etiquetas HTML semánticas;
* agregar texto alternativo a las imágenes;
* relacionar correctamente etiquetas `label` con controles de formulario;
* reconocer la importancia de la navegación mediante teclado;
* utilizar estilos de foco visibles;
* aplicar prácticas básicas de accesibilidad.

---

# Estructura

```text
ejemplo02-responsive-accesibilidad/
│
├── index.html
├── styles.css
└── README.md
```

---

# ¿Qué es diseño responsivo?

El diseño responsivo permite que una interfaz pueda adaptarse al espacio disponible en la pantalla.

Una misma página puede visualizarse desde:

```text
computador de escritorio
portátil
tableta
teléfono móvil
```

sin necesidad de desarrollar una página completamente diferente para cada dispositivo.

---

# Ejemplo conceptual

En una pantalla grande puede utilizarse una distribución:

```text
┌─────────────────────────────────────┐
│                MENÚ                 │
├───────────────────┬─────────────────┤
│                   │                 │
│       TEXTO       │      IMAGEN     │
│                   │                 │
├───────────┬───────┴───┬─────────────┤
│ TARJETA 1 │ TARJETA 2 │ TARJETA 3   │
└───────────┴───────────┴─────────────┘
```

En una pantalla pequeña, la misma información puede reorganizarse:

```text
┌───────────────────┐
│       MENÚ        │
├───────────────────┤
│       TEXTO       │
├───────────────────┤
│      IMAGEN       │
├───────────────────┤
│     TARJETA 1     │
├───────────────────┤
│     TARJETA 2     │
├───────────────────┤
│     TARJETA 3     │
└───────────────────┘
```

El contenido sigue siendo el mismo.

Lo que cambia es su distribución.

---

# Paso 1. Abrir la página

Abra:

```text
index.html
```

en el navegador.

También puede utilizar Live Server desde Visual Studio Code.

Observe inicialmente la página utilizando una ventana amplia.

---

# Paso 2. Identificar la estructura semántica

El documento utiliza:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Estas etiquetas permiten expresar qué función cumple cada parte del documento.

---

# ¿Por qué utilizar HTML semántico?

Compare:

```html
<div>
```

con:

```html
<nav>
```

Ambas etiquetas pueden contener otros elementos.

Sin embargo:

```html
<nav>
```

expresa que su contenido corresponde a una sección de navegación.

Esto facilita la comprensión de la estructura tanto para desarrolladores como para herramientas de asistencia.

---

# Estructura utilizada

La página puede resumirse así:

```text
BODY
│
├── HEADER
│   ├── H1
│   └── NAV
│
├── MAIN
│   │
│   ├── SECTION - Presentación
│   │
│   ├── SECTION - Cursos
│   │   └── ARTICLE
│   │
│   └── SECTION - Contacto
│       └── FORM
│
└── FOOTER
```

---

# Paso 3. Observar meta viewport

Dentro de `<head>` se encuentra:

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

Esta configuración es importante cuando se desarrollan páginas adaptables a dispositivos móviles.

---

# `width=device-width`

La parte:

```text
width=device-width
```

indica que el ancho de la página debe corresponder al ancho disponible en el dispositivo.

---

# `initial-scale=1.0`

La parte:

```text
initial-scale=1.0
```

establece la escala inicial de visualización.

---

# Paso 4. Observar Flexbox

En CSS se utiliza:

```css
.presentacion {
    display: flex;
}
```

Esto permite distribuir elementos utilizando Flexbox.

La sección contiene:

```text
texto
imagen
```

y en una pantalla amplia aparecen uno al lado del otro.

---

# Tarjetas

También se utiliza:

```css
.tarjetas {
    display: flex;
    gap: 20px;
}
```

Esto permite mostrar los cursos horizontalmente cuando existe suficiente espacio.

---

# Paso 5. Cambiar el tamaño del navegador

Reduzca lentamente el ancho de la ventana.

Observe qué ocurre cuando la página se aproxima a una pantalla pequeña.

La distribución cambia.

---

# Media query

Este comportamiento se produce mediante:

```css
@media (max-width: 768px) {
```

La regla puede interpretarse como:

> Aplicar los estilos incluidos cuando el ancho disponible sea de 768 píxeles o menos.

---

# Cambiar la dirección del menú

Dentro de la media query aparece:

```css
.menu {
    flex-direction: column;
}
```

En pantalla grande:

```text
Inicio   Cursos   Contacto
```

En pantalla pequeña:

```text
Inicio
Cursos
Contacto
```

---

# Cambiar la presentación

También encontramos:

```css
.presentacion {
    flex-direction: column;
}
```

En pantalla grande:

```text
TEXTO | IMAGEN
```

En pantalla pequeña:

```text
TEXTO
  │
IMAGEN
```

---

# Cambiar las tarjetas

La regla:

```css
.tarjetas {
    flex-direction: column;
}
```

transforma:

```text
Tarjeta 1 | Tarjeta 2 | Tarjeta 3
```

en:

```text
Tarjeta 1

Tarjeta 2

Tarjeta 3
```

---

# Paso 6. Utilizar las herramientas del navegador

Abra las herramientas de desarrollo del navegador.

En la mayoría de los navegadores puede utilizar:

```text
F12
```

Busque la opción de simulación de dispositivos.

Pruebe diferentes tamaños de pantalla.

Por ejemplo:

```text
teléfono
tableta
computador
```

Observe que la misma página se reorganiza.

---

# ¿Qué es accesibilidad web?

La accesibilidad busca que los contenidos y funcionalidades puedan ser utilizados por la mayor cantidad posible de personas, incluyendo usuarios que emplean tecnologías de asistencia o formas diferentes de interacción.

No se trata solamente de cómo se ve una página.

También importa:

```text
cómo está estructurada
cómo se navega
cómo se identifican los controles
cómo se describen las imágenes
cómo se utiliza mediante teclado
```

---

# Paso 7. Observar el idioma del documento

La etiqueta principal contiene:

```html
<html lang="es">
```

El atributo:

```text
lang="es"
```

indica que el idioma principal del documento es español.

Esto puede ser utilizado por navegadores y tecnologías de asistencia.

---

# Paso 8. Texto alternativo de imágenes

La imagen contiene:

```html
alt="Computador portátil utilizado para estudiar cursos virtuales"
```

El atributo:

```text
alt
```

proporciona una alternativa textual a la imagen.

---

# ¿Qué debería contener alt?

El texto debe comunicar información relevante que aporta la imagen.

Por ejemplo:

```html
alt="Estudiante utilizando un computador portátil"
```

es más informativo que:

```html
alt="imagen"
```

---

# ¿Todas las imágenes necesitan una descripción extensa?

No.

La descripción depende del propósito de la imagen.

Si una imagen es puramente decorativa, puede utilizarse:

```html
alt=""
```

para evitar que una tecnología de asistencia anuncie información innecesaria.

---

# Paso 9. Navegación identificada

El ejemplo utiliza:

```html
<nav aria-label="Navegación principal">
```

El atributo:

```text
aria-label
```

proporciona un nombre accesible para esa zona de navegación.

Esto puede resultar especialmente útil cuando existen varias zonas de navegación en una misma página.

---

# Importante sobre ARIA

ARIA no debe utilizarse para reemplazar elementos HTML semánticos cuando ya existe una etiqueta apropiada.

Por ejemplo, es preferible utilizar:

```html
<button>
```

en lugar de intentar convertir un elemento genérico en botón mediante múltiples atributos.

---

# Paso 10. Labels del formulario

Observe:

```html
<label for="nombre">
    Nombre
</label>

<input
    type="text"
    id="nombre"
    name="nombre"
>
```

El atributo:

```text
for="nombre"
```

del `label` corresponde con:

```text
id="nombre"
```

del `input`.

Esto establece una relación explícita entre la descripción y el campo.

---

# Comprobar la asociación

Presione directamente sobre el texto:

```text
Nombre
```

El cursor debería ubicarse en el campo correspondiente.

Esto demuestra que el `label` está asociado correctamente.

---

# Paso 11. Tipos de input

Para el correo se utiliza:

```html
<input
    type="email"
    id="correo"
    name="correo"
    required
>
```

El tipo:

```text
email
```

proporciona información semántica acerca del dato esperado.

Además, los navegadores pueden realizar una validación básica.

---

# Campos obligatorios

El atributo:

```html
required
```

indica que el campo debe contener información antes de enviar el formulario.

---

# Paso 12. Navegar solamente con teclado

Ahora realice una prueba importante.

No utilice el ratón.

Presione repetidamente:

```text
Tab
```

Debe poder recorrer elementos interactivos como:

```text
enlaces
botón
campos
botón de envío
```

---

# Foco

Cuando un elemento recibe el foco, el usuario debe poder identificar visualmente dónde se encuentra.

Por esta razón el CSS contiene reglas como:

```css
input:focus,
textarea:focus {
    outline: 3px solid #777777;
    outline-offset: 2px;
}
```

---

# ¿Por qué no eliminar el outline?

A veces se encuentra CSS como:

```css
outline: none;
```

Eliminar el indicador de foco sin proporcionar una alternativa puede dificultar considerablemente la navegación mediante teclado.

En este ejemplo se conserva un indicador visible.

---

# Paso 13. Probar el formulario

Intente presionar:

```text
Enviar mensaje
```

sin completar los campos.

El navegador indicará que existen campos obligatorios.

Después complete:

```text
Nombre

Correo electrónico

Mensaje
```

y vuelva a probar.

Este ejemplo no procesa realmente el formulario.

El propósito es observar la construcción accesible de los controles.

---

# Accesibilidad y diseño responsivo no son lo mismo

Es importante no confundir ambos conceptos.

## Diseño responsivo

Se concentra en adaptar la interfaz a diferentes tamaños de pantalla.

Por ejemplo:

```text
computador
tableta
teléfono
```

## Accesibilidad

Busca facilitar el acceso y uso por personas con diferentes capacidades, herramientas y formas de interacción.

---

# Una página puede ser responsiva pero poco accesible

Por ejemplo:

```text
Se adapta perfectamente al teléfono
```

pero:

```text
las imágenes no tienen alternativa textual
los formularios no tienen labels
no puede utilizarse con teclado
el foco no es visible
```

En ese caso existe responsividad, pero hay problemas de accesibilidad.

---

# Una página puede ser accesible y no ser responsiva

También podría tener:

```text
HTML semántico
labels correctos
navegación mediante teclado
textos alternativos
```

pero mostrarse mal en una pantalla pequeña.

Por ello son conceptos complementarios.

---

# Buenas prácticas utilizadas

En el ejemplo se aplicaron:

```text
meta viewport
HTML semántico
Flexbox
media queries
alt
label
for
id
required
tipos de input
focus visible
navegación mediante teclado
```

---

# Reto 1 - Agregar una tarjeta

Agregue un cuarto curso.

Por ejemplo:

```text
Bases de datos
```

Compruebe cómo se comporta:

```text
en pantalla grande
en pantalla pequeña
```

---

# Reto 2 - Agregar una imagen

Agregue una imagen a cada tarjeta.

Cada imagen debe contener un atributo:

```text
alt
```

adecuado.

---

# Reto 3 - Nuevo campo de formulario

Agregue:

```text
Teléfono
```

al formulario.

Debe utilizar:

```html
<label>
<input>
```

correctamente asociados.

---

# Reto 4 - Probar otro breakpoint

Actualmente se utiliza:

```css
@media (max-width: 768px)
```

Cambie temporalmente el valor por:

```css
600px
```

y observe cómo cambia el momento en que la interfaz se reorganiza.

Después pruebe:

```css
900px
```

Compare los resultados.

---

# Reto 5 - Navegación mediante teclado

Realice toda la navegación utilizando solamente:

```text
Tab
Shift + Tab
Enter
```

Identifique si existe algún elemento interactivo difícil de utilizar sin ratón.

---

# Preguntas de análisis

1. ¿Qué significa diseño responsivo?
2. ¿Para qué se utiliza `meta viewport`?
3. ¿Qué función cumple una media query?
4. ¿Qué significa `max-width: 768px`?
5. ¿Qué propiedad permite cambiar la orientación de los elementos Flexbox?
6. ¿Qué significa accesibilidad web?
7. ¿Por qué es importante el atributo `lang`?
8. ¿Qué función cumple `alt`?
9. ¿Cuál es la relación entre `label` e `input`?
10. ¿Por qué debe existir un indicador visual de foco?
11. ¿Qué tecla permite recorrer normalmente los controles interactivos?
12. ¿Diseño responsivo y accesibilidad significan lo mismo?
13. ¿Puede una página ser responsiva y presentar problemas de accesibilidad?
14. ¿Qué ventajas proporciona el HTML semántico?

---

# Resultado esperado

En una pantalla amplia:

```text
┌───────────────────────────────────┐
│              MENÚ                 │
├─────────────────┬─────────────────┤
│      TEXTO      │     IMAGEN      │
├───────────┬─────┴─────┬───────────┤
│ CURSO 1   │ CURSO 2   │ CURSO 3   │
└───────────┴───────────┴───────────┘
```

En una pantalla pequeña:

```text
┌───────────────────┐
│       MENÚ        │
├───────────────────┤
│       TEXTO       │
├───────────────────┤
│      IMAGEN       │
├───────────────────┤
│      CURSO 1      │
├───────────────────┤
│      CURSO 2      │
├───────────────────┤
│      CURSO 3      │
└───────────────────┘
```

Además, el usuario debe poder desplazarse por los controles utilizando el teclado y reconocer claramente el elemento que tiene el foco.

---

# Conceptos trabajados

* diseño responsivo;
* accesibilidad;
* viewport;
* media queries;
* Flexbox;
* breakpoint;
* HTML semántico;
* `header`;
* `nav`;
* `main`;
* `section`;
* `article`;
* `footer`;
* `alt`;
* `label`;
* formularios;
* navegación mediante teclado;
* foco;
* `aria-label`.

---

# Conclusión

Una interfaz web no debe diseñarse únicamente pensando en una pantalla de computador.

El diseño responsivo permite adaptar la presentación a diferentes tamaños de pantalla, mientras que la accesibilidad busca facilitar la utilización de la aplicación por personas con diferentes formas de interacción y necesidades.

Ambos aspectos deben considerarse desde el inicio del desarrollo de una interfaz web.
