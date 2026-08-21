# Unidad 3 - Desarrollo Front End con React

Esta unidad introduce el desarrollo de interfaces modernas utilizando React.

El módulo institucional aborda React mediante componentes, JSX, estado, Props, pruebas y consumo de APIs.

En este repositorio se actualiza ese enfoque utilizando herramientas y prácticas actuales, principalmente:

* React con componentes funcionales;
* Vite;
* Hooks;
* `useState`;
* `useEffect`;
* Fetch API;
* Vitest;
* React Testing Library.

Como buena parte de los fundamentos de React ya se encuentran desarrollados en el repositorio del curso **Lenguaje de Programación II**, esta unidad reutiliza esos laboratorios mediante enlaces y agrega solamente los contenidos específicos que faltaban para Desarrollo de Software II.

---

# Objetivo de la unidad

Al finalizar esta unidad, el estudiante estará en capacidad de:

* comprender la estructura básica de una aplicación React;
* crear componentes mediante JSX;
* organizar una interfaz mediante componentización;
* reutilizar componentes mediante Props;
* administrar estado;
* responder a eventos;
* utilizar Hooks;
* utilizar `useState`;
* utilizar `useEffect`;
* generar listas dinámicas;
* construir formularios controlados;
* consumir APIs externas;
* procesar respuestas JSON;
* manejar estados de carga y error;
* realizar pruebas automatizadas de componentes;
* comprender la relación entre Front End y APIs.

---

# Estructura de la unidad

```text
unidad3-react/
│
├── README.md
│
├── ejemplo01-fundamentos-react/
├── ejemplo02-consumo-api/
└── ejemplo03-pruebas-react/
```

---

# Ruta de aprendizaje

Se recomienda avanzar en este orden:

```text
Ejemplo 01
Fundamentos de React
        │
        ▼
Ejemplo 02
Consumo de APIs
        │
        ▼
Ejemplo 03
Pruebas de componentes
```

El primer ejemplo reutiliza los laboratorios completos de React existentes en Lenguaje de Programación II.

Los ejemplos siguientes profundizan en dos temas especialmente importantes para Desarrollo de Software II:

```text
integración con APIs
pruebas automatizadas
```

---

# Ejemplo 01 - Fundamentos de React

Carpeta:

```text
ejemplo01-fundamentos-react
```

Este recurso enlaza al módulo completo de React desarrollado en:

**Lenguaje de Programación II**

[Consultar módulo de React](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react)

---

# ¿Por qué se reutiliza este recurso?

El módulo de React existente ya desarrolla progresivamente:

```text
Vite
JSX
componentes
componentización
Props
estado
eventos
listas
renderizado condicional
formularios
useEffect
consumo de APIs
integración
publicación
```

Duplicar los mismos laboratorios dentro de este repositorio produciría código y documentación repetidos.

Por esta razón se mantiene una única fuente de referencia.

---

# Ruta de laboratorios de React

El módulo reutilizado contiene:

```text
01 - Entorno React con Vite
        │
        ▼
02 - Conociendo React
        │
        ▼
03 - Primeros componentes
        │
        ▼
04 - Componentización
        │
        ▼
05 - Props
        │
        ▼
06 - Estado y eventos
        │
        ▼
07 - Listas y condicionales
        │
        ▼
08 - Formularios
        │
        ▼
09 - Efectos
        │
        ▼
10 - Consumo de API
        │
        ▼
11 - Integración y publicación
```

---

# React

React permite construir interfaces mediante componentes.

Una aplicación puede dividirse conceptualmente:

```text
APP
│
├── HEADER
├── MENU
├── CONTENIDO
│   ├── COMPONENTE
│   ├── COMPONENTE
│   └── COMPONENTE
└── FOOTER
```

Esta organización permite separar responsabilidades y reutilizar código.

---

# JSX

React utiliza JSX para describir la interfaz.

Ejemplo:

```jsx
function Saludo() {

    return (
        <h1>
            Bienvenido a React
        </h1>
    );
}
```

JSX permite combinar estructuras similares a HTML con expresiones de JavaScript.

---

# Componentes

Un componente es una pieza reutilizable de la interfaz.

Por ejemplo:

```jsx
function TarjetaCurso() {

    return (
        <article>
            <h2>
                Desarrollo de Software II
            </h2>
        </article>
    );
}
```

Después puede utilizarse:

```jsx
<TarjetaCurso />
```

---

# Componentización

Una interfaz grande puede dividirse:

```text
INTERFAZ COMPLETA
        │
        ▼
COMPONENTES
        │
        ├── Header
        ├── Menu
        ├── Tarjeta
        ├── Formulario
        └── Footer
```

Cada componente debe procurar mantener una responsabilidad clara.

---

# Props

Props permiten enviar información desde un componente hacia otro.

Conceptualmente:

```text
COMPONENTE PADRE
       │
       │ Props
       ▼
COMPONENTE HIJO
```

Ejemplo:

```jsx
<TarjetaCurso
    nombre="Desarrollo de Software II"
    creditos={3}
/>
```

El mismo componente puede reutilizarse con datos diferentes.

---

# Estado

El estado representa información que puede cambiar durante la ejecución.

Por ejemplo:

```text
contador
elemento seleccionado
lista de estudiantes
datos de formulario
respuesta de API
```

En componentes funcionales se utiliza frecuentemente:

```javascript
useState()
```

---

# `useState`

Ejemplo:

```javascript
const [contador, setContador] =
    useState(0);
```

Aquí:

```text
contador
→ valor actual

setContador
→ función para modificarlo

0
→ valor inicial
```

Cuando el estado cambia, React actualiza la interfaz correspondiente.

---

# Eventos

React permite responder a acciones del usuario.

Por ejemplo:

```jsx
<button
    onClick={incrementar}
>
    Incrementar
</button>
```

El flujo puede representarse:

```text
USUARIO
   │
   │ clic
   ▼
EVENTO
   │
   ▼
FUNCIÓN
   │
   ▼
CAMBIO DE ESTADO
   │
   ▼
INTERFAZ ACTUALIZADA
```

---

# Listas

Los datos almacenados en arreglos pueden convertirse en componentes.

Por ejemplo:

```javascript
cursos.map(curso => (
    <TarjetaCurso
        key={curso.id}
        nombre={curso.nombre}
    />
))
```

Conceptualmente:

```text
ARREGLO
   │
   ▼
map()
   │
   ▼
COMPONENTES
   │
   ▼
INTERFAZ
```

---

# Renderizado condicional

React puede mostrar diferentes elementos dependiendo del estado.

Por ejemplo:

```jsx
{cargando
    ? <p>Cargando...</p>
    : <Lista />}
```

Esto permite adaptar la interfaz según la situación actual.

---

# Formularios controlados

En un formulario controlado, React administra los valores mediante estado.

Conceptualmente:

```text
INPUT
   │
   ▼
ESTADO
   │
   ▼
REACT
   │
   ▼
INTERFAZ
```

---

# `useEffect`

`useEffect` permite ejecutar efectos asociados al ciclo de vida de un componente.

Ejemplo:

```javascript
useEffect(() => {

    console.log(
        "Componente cargado"
    );

}, []);
```

Un caso especialmente importante es realizar solicitudes externas.

---

# Diferencia con componentes de clase

El módulo institucional original utiliza conceptos como:

```text
componentDidMount
state en componentes de clase
```

En este repositorio se utiliza el enfoque moderno basado en:

```text
componentes funcionales
Hooks
useState
useEffect
```

El propósito conceptual se mantiene, pero se actualiza la forma de implementarlo.

---

# Ejemplo 02 - Consumo de API con React

Carpeta:

```text
ejemplo02-consumo-api
```

Este recurso enlaza directamente al laboratorio de consumo de APIs desarrollado en Lenguaje de Programación II.

[Consultar Laboratorio 10 - Consumo de API](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/10-consumo-api)

---

# Arquitectura del consumo de APIs

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
API
   │
   │ Response HTTP
   │ JSON
   ▼
REACT
   │
   ▼
INTERFAZ
```

Este ejemplo conecta directamente la Unidad 3 con los conceptos estudiados en la Unidad 1.

---

# Conceptos reutilizados de la Unidad 1

Al consumir una API aparecen nuevamente:

```text
cliente
servidor
HTTP
Request
Response
GET
códigos de estado
JSON
```

React actúa como cliente.

---

# `fetch()`

JavaScript puede realizar una solicitud mediante:

```javascript
const response =
    await fetch(url);
```

La función:

```text
fetch()
```

permite iniciar una solicitud HTTP.

---

# Procesar JSON

Después puede utilizarse:

```javascript
const datos =
    await response.json();
```

para convertir la respuesta JSON en una estructura utilizable por JavaScript.

---

# Guardar información en estado

Posteriormente:

```javascript
setDatos(datos);
```

puede guardar la información en el estado.

El flujo completo es:

```text
fetch()
   │
   ▼
API
   │
   ▼
JSON
   │
   ▼
response.json()
   │
   ▼
setEstado()
   │
   ▼
renderizado
```

---

# Estado de carga

Mientras se espera la respuesta puede mostrarse:

```text
Cargando...
```

Esto permite informar al usuario que existe una operación en curso.

---

# Estado de error

También debe contemplarse que una solicitud pueda fallar.

Ejemplo:

```text
No fue posible cargar la información.
```

Esto mejora la experiencia del usuario y evita dejar una interfaz sin explicación.

---

# Relación futura con Spring Boot

En este ejemplo React consume una API externa.

Posteriormente el Back End será desarrollado dentro del mismo curso.

La arquitectura será:

```text
REACT
Front End
   │
   │ HTTP / JSON
   ▼
SPRING BOOT
Back End
   │
   ▼
BASE DE DATOS
```

Esto será especialmente importante en la Unidad 4.

---

# Ejemplo 03 - Pruebas de componentes React

Carpeta:

```text
ejemplo03-pruebas-react
```

Este ejemplo introduce pruebas automatizadas mediante:

```text
Vitest
React Testing Library
user-event
jsdom
```

---

# ¿Qué se prueba?

El componente utilizado es:

```text
Contador
```

Se comprueba automáticamente que:

```text
muestra el título
inicia en cero
incrementa
disminuye
reinicia
```

---

# Resultado validado

Al ejecutar:

```bash
npm test
```

el resultado esperado es:

```text
✓ src/tests/Contador.test.jsx (5 tests)

Test Files  1 passed
Tests       5 passed
```

---

# ¿Qué es una prueba automatizada?

Una prueba automatizada permite comprobar de manera repetible que un comportamiento coincide con lo esperado.

```text
COMPONENTE
    │
    ▼
PRUEBA
    │
    ├── renderiza
    ├── interactúa
    ├── verifica
    │
    ▼
PASS / FAIL
```

---

# Herramientas

## Vitest

Ejecuta las pruebas.

Proporciona:

```text
describe
test
expect
afterEach
```

---

## React Testing Library

Permite renderizar y consultar componentes.

Se utilizan:

```text
render
screen
cleanup
```

---

## user-event

Simula interacciones del usuario.

Por ejemplo:

```text
clic
escritura
teclado
```

---

# Limpieza entre pruebas

El proyecto utiliza:

```javascript
afterEach(() => {
    cleanup();
});
```

Esto garantiza que cada prueba comience con un DOM limpio.

Conceptualmente:

```text
PRUEBA 1
   │
   ▼
cleanup()
   │
   ▼
PRUEBA 2
   │
   ▼
cleanup()
```

---

# Patrón Arrange - Act - Assert

Las pruebas pueden organizarse conceptualmente:

```text
ARRANGE
preparar

ACT
ejecutar acción

ASSERT
comprobar resultado
```

---

# Ejemplo

```text
ARRANGE
renderizar contador

ACT
clic en Incrementar

ASSERT
valor = 1
```

---

# React Testing Library y perspectiva del usuario

Las pruebas procuran verificar:

```text
qué ve el usuario
qué puede hacer
qué ocurre después
```

en lugar de depender innecesariamente de detalles internos del componente.

---

# Integración conceptual de la Unidad 3

Los tres ejemplos pueden relacionarse:

```text
FUNDAMENTOS DE REACT
        │
        ▼
COMPONENTES
PROPS
ESTADO
HOOKS
        │
        ▼
CONSUMO DE APIs
        │
        ▼
HTTP + JSON
        │
        ▼
PRUEBAS
        │
        ▼
COMPONENTES VERIFICADOS
```

---

# Relación con las unidades anteriores

## Unidad 1

Aporta:

```text
cliente-servidor
HTTP
Request
Response
JSON
```

## Unidad 2

Aporta:

```text
HTML
CSS
DOM
eventos
JavaScript moderno
```

## Unidad 3

Integra esos conocimientos mediante:

```text
React
componentes
estado
APIs
pruebas
```

---

# Evolución completa hasta este punto

```text
UNIDAD 1
Fundamentos web
       │
       ▼
UNIDAD 2
Interfaces web
       │
       ▼
UNIDAD 3
React
       │
       ▼
Front End moderno
```

---

# Arquitectura alcanzada

Al finalizar esta unidad ya puede comprenderse:

```text
USUARIO
   │
   ▼
REACT
Front End
   │
   │ HTTP / JSON
   ▼
API
```

La siguiente unidad agregará:

```text
SPRING BOOT
Back End
```

---

# Actividad de repaso

Antes de continuar, compruebe que puede responder:

1. ¿Qué es React?
2. ¿Qué es JSX?
3. ¿Qué es un componente?
4. ¿Qué significa componentización?
5. ¿Qué son Props?
6. ¿Qué representa el estado?
7. ¿Qué función cumple `useState`?
8. ¿Cómo puede React responder a eventos?
9. ¿Para qué se utiliza `map()` en una interfaz?
10. ¿Qué es renderizado condicional?
11. ¿Qué es un formulario controlado?
12. ¿Qué función cumple `useEffect`?
13. ¿Para qué se utiliza `fetch()`?
14. ¿Qué formato suele utilizar una API para responder?
15. ¿Qué ocurre después de ejecutar `setEstado()`?
16. ¿Qué significa estado de carga?
17. ¿Qué significa estado de error?
18. ¿Qué es una prueba automatizada?
19. ¿Qué función cumple Vitest?
20. ¿Qué función cumple React Testing Library?
21. ¿Qué función cumple `render()`?
22. ¿Qué representa `screen`?
23. ¿Qué función cumple `userEvent`?
24. ¿Por qué se utiliza `cleanup()`?
25. ¿Qué significa Arrange - Act - Assert?

---

# Reto integrador de la unidad

Construya un componente React que consulte y muestre información externa.

La aplicación debe contener:

```text
Título
Estado de carga
Lista de resultados
Estado de error
Botón para volver a consultar
```

---

# Requisitos

Debe utilizar:

```text
componente funcional
useState
useEffect
fetch
map
renderizado condicional
```

---

# Pruebas mínimas

Cree pruebas que comprueben al menos:

```text
1. El título aparece.

2. El componente puede renderizarse.

3. El estado de carga aparece cuando corresponde.

4. Un botón puede ser localizado por su rol.
```

---

# Resultado esperado de la unidad

El estudiante debe comprender:

```text
REACT
│
├── JSX
├── Componentes
├── Props
├── Estado
├── Eventos
├── Hooks
│   ├── useState
│   └── useEffect
├── Formularios
├── Listas
├── APIs
└── Pruebas
```

---

# Ejemplos disponibles

## Ejemplo 01

```text
ejemplo01-fundamentos-react
```

Fundamentos y laboratorios progresivos de React.

---

## Ejemplo 02

```text
ejemplo02-consumo-api
```

Consumo de APIs mediante React, HTTP, Fetch API y JSON.

---

## Ejemplo 03

```text
ejemplo03-pruebas-react
```

Pruebas automatizadas mediante Vitest y React Testing Library.

---

# Conceptos trabajados

* React;
* Vite;
* JSX;
* componentes;
* componentización;
* Props;
* estado;
* eventos;
* Hooks;
* `useState`;
* `useEffect`;
* listas;
* `map()`;
* renderizado condicional;
* formularios controlados;
* Fetch API;
* HTTP;
* JSON;
* APIs;
* carga;
* errores;
* pruebas automatizadas;
* Vitest;
* React Testing Library;
* jsdom;
* user-event;
* assertions.

---

# Conclusión

React permite desarrollar interfaces modernas mediante componentes reutilizables y una forma declarativa de construir la interfaz.

Los fundamentos desarrollados previamente con HTML, CSS, JavaScript y DOM se integran en esta unidad mediante componentes, Props, estado, eventos y Hooks.

El consumo de APIs permite conectar el Front End con servicios externos, mientras que las pruebas automatizadas ayudan a comprobar que los componentes mantienen el comportamiento esperado.

Estos conocimientos preparan el camino para la siguiente unidad, donde se desarrollará el Back End utilizando Spring Boot y posteriormente se podrá establecer una arquitectura completa Front End - Back End.
