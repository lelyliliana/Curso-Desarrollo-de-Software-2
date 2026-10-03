# Ejemplo 04 - JavaScript moderno

[Volver a la unidad](../README.md) · [Volver al índice del curso](../../README.md)

## Unidad 2 - Introducción a las interfaces de usuario web

Este ejemplo reúne diferentes características de JavaScript moderno que permiten escribir código más claro, expresivo y reutilizable.

El módulo introduce varias características asociadas con ECMAScript 6, entre ellas `let`, `const`, template literals, `for...of`, funciones flecha, parámetros por defecto, destructuring, rest/spread, clases, métodos estáticos, herencia, `Map` y `Set`.

Cada concepto se encuentra en un archivo independiente para facilitar su estudio y ejecución.

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de:

* diferenciar `let` y `const`;
* comprender el alcance de bloque;
* utilizar template literals;
* escribir funciones flecha;
* utilizar parámetros por defecto;
* recorrer colecciones mediante `for...of`;
* aplicar destructuring sobre arreglos y objetos;
* utilizar parámetros rest;
* utilizar el operador spread;
* crear clases;
* utilizar herencia;
* utilizar métodos estáticos;
* almacenar datos mediante `Map`;
* almacenar valores únicos mediante `Set`.

---

# Estructura

```text
ejemplo04-javascript-moderno/
│
├── 01-let-const.js
├── 02-template-literals.js
├── 03-arrow-functions.js
├── 04-for-of.js
├── 05-destructuring.js
├── 06-rest-spread.js
├── 07-clases.js
├── 08-map-set.js
└── README.md
```

---

# Requisitos

Para ejecutar estos ejemplos se necesita Node.js.

Compruebe la instalación mediante:

```bash
node --version
```

Debe aparecer una versión instalada.

---

# ¿Cómo ejecutar los ejemplos?

Abra una terminal dentro de:

```text
ejemplo04-javascript-moderno
```

Para ejecutar el primer archivo utilice:

```bash
node 01-let-const.js
```

Para el segundo:

```bash
node 02-template-literals.js
```

Y así sucesivamente.

---

# Ruta recomendada

Ejecute los archivos en este orden:

```text
01-let-const.js
       │
       ▼
02-template-literals.js
       │
       ▼
03-arrow-functions.js
       │
       ▼
04-for-of.js
       │
       ▼
05-destructuring.js
       │
       ▼
06-rest-spread.js
       │
       ▼
07-clases.js
       │
       ▼
08-map-set.js
```

---

# 1. `let` y `const`

Ejecute:

```bash
node 01-let-const.js
```

El archivo presenta dos formas modernas de declarar variables:

```javascript
let nombre = "Ana";
```

y:

```javascript
const programa =
    "Ingeniería de Sistemas";
```

---

# `let`

`let` permite declarar una variable cuyo valor puede cambiar.

Ejemplo:

```javascript
let nombre = "Ana";

nombre = "Laura";
```

El resultado es válido porque la variable fue declarada con `let`.

---

# `const`

`const` se utiliza cuando no se desea reasignar la variable.

Por ejemplo:

```javascript
const programa =
    "Ingeniería de Sistemas";
```

La siguiente operación produciría un error:

```javascript
programa =
    "Ingeniería Industrial";
```

---

# ¿Significa que const hace todo inmutable?

No exactamente.

Considere:

```javascript
const estudiante = {
    nombre: "Ana"
};
```

La variable `estudiante` no puede reasignarse a otro objeto.

Sin embargo, las propiedades internas del objeto pueden modificarse:

```javascript
estudiante.nombre = "Laura";
```

Por tanto, `const` impide la **reasignación de la variable**, pero no convierte automáticamente todos los objetos en estructuras inmutables.

---

# Alcance de bloque

El archivo también muestra:

```javascript
if (true) {

    let mensaje =
        "Variable dentro del bloque";

    console.log(mensaje);
}
```

La variable:

```text
mensaje
```

existe dentro del bloque delimitado por:

```text
{
}
```

Intentar utilizarla fuera del bloque genera un error.

---

# 2. Template literals

Ejecute:

```bash
node 02-template-literals.js
```

Antes era frecuente construir textos mediante concatenación:

```javascript
const mensaje =
    "Hola " +
    nombre +
    ", bienvenido.";
```

Con template literals puede escribirse:

```javascript
const mensaje =
    `Hola ${nombre}, bienvenido.`;
```

---

# Backticks

Los template literals utilizan:

```text
`
```

conocido como:

```text
backtick
```

o comilla invertida.

---

# Interpolación

Dentro de la plantilla puede utilizarse:

```text
${ }
```

para insertar valores.

Por ejemplo:

```javascript
const nombre = "Ana";

console.log(
    `Hola ${nombre}`
);
```

produce:

```text
Hola Ana
```

---

# Expresiones

Dentro de `${}` también pueden evaluarse expresiones.

Ejemplo:

```javascript
const nota1 = 4;
const nota2 = 3;

console.log(
    `Promedio: ${(nota1 + nota2) / 2}`
);
```

---

# 3. Arrow functions

Ejecute:

```bash
node 03-arrow-functions.js
```

Una función tradicional puede escribirse:

```javascript
function sumar(a, b) {

    return a + b;
}
```

Una función flecha equivalente puede escribirse:

```javascript
const sumar = (a, b) => {

    return a + b;
};
```

---

# Retorno implícito

Cuando una función flecha contiene una sola expresión puede escribirse:

```javascript
const multiplicar =
    (a, b) => a * b;
```

No es necesario escribir explícitamente:

```javascript
return
```

---

# Un solo parámetro

Cuando existe un único parámetro:

```javascript
const saludar =
    nombre => `Hola ${nombre}`;
```

los paréntesis pueden omitirse.

También sería válido:

```javascript
const saludar =
    (nombre) => `Hola ${nombre}`;
```

---

# Parámetros por defecto

El archivo utiliza:

```javascript
const presentar =
    (
        nombre,
        programa = "Ingeniería de Sistemas"
    ) =>
        `${nombre} estudia ${programa}`;
```

Si solamente se envía:

```javascript
presentar("Ana");
```

se utiliza el valor por defecto:

```text
Ingeniería de Sistemas
```

Si se envía:

```javascript
presentar(
    "Carlos",
    "Ingeniería Industrial"
);
```

se utiliza el argumento proporcionado.

---

# 4. `for...of`

Ejecute:

```bash
node 04-for-of.js
```

El ciclo:

```javascript
for (const lenguaje of lenguajes) {

    console.log(lenguaje);
}
```

permite recorrer directamente los valores de una colección iterable.

---

# Comparación con un for tradicional

Una forma tradicional sería:

```javascript
for (
    let i = 0;
    i < lenguajes.length;
    i++
) {

    console.log(
        lenguajes[i]
    );
}
```

Con `for...of`:

```javascript
for (
    const lenguaje
    of lenguajes
) {

    console.log(
        lenguaje
    );
}
```

No es necesario trabajar directamente con índices.

---

# Arreglos de objetos

También puede utilizarse:

```javascript
for (
    const estudiante
    of estudiantes
) {

    console.log(
        estudiante.nombre
    );
}
```

---

# `for...of` y `for...in`

No deben confundirse.

De forma simplificada:

```text
for...of
→ recorre valores
```

Mientras:

```text
for...in
→ recorre propiedades o claves
```

---

# 5. Destructuring

Ejecute:

```bash
node 05-destructuring.js
```

Destructuring permite extraer valores de arreglos u objetos de forma compacta.

---

# Destructuring de arreglos

Considere:

```javascript
const lenguajes = [
    "Java",
    "JavaScript",
    "Python"
];
```

Podemos escribir:

```javascript
const [
    primero,
    segundo,
    tercero
] = lenguajes;
```

Ahora:

```text
primero
→ Java

segundo
→ JavaScript

tercero
→ Python
```

---

# Forma tradicional

Sin destructuring podría hacerse:

```javascript
const primero =
    lenguajes[0];

const segundo =
    lenguajes[1];

const tercero =
    lenguajes[2];
```

Destructuring reduce código repetitivo.

---

# Destructuring de objetos

Considere:

```javascript
const estudiante = {
    nombre: "Ana",
    programa: "Ingeniería de Sistemas",
    semestre: 5
};
```

Puede extraerse:

```javascript
const {
    nombre,
    programa,
    semestre
} = estudiante;
```

---

# Resultado

Después podemos utilizar directamente:

```javascript
console.log(nombre);
```

sin escribir:

```javascript
estudiante.nombre
```

cada vez.

---

# Renombrar propiedades

También puede utilizarse:

```javascript
const {
    nombre: nombreDocente
} = docente;
```

Esto extrae la propiedad:

```text
nombre
```

pero crea una variable llamada:

```text
nombreDocente
```

---

# Relación futura con React

Este patrón aparecerá frecuentemente en React.

Por ejemplo:

```javascript
const {
    nombre,
    correo
} = usuario;
```

o en parámetros:

```javascript
const Tarjeta = ({
    nombre,
    programa
}) => {
    ...
};
```

---

# 6. Rest y Spread

Ejecute:

```bash
node 06-rest-spread.js
```

Ambos utilizan:

```text
...
```

pero tienen propósitos diferentes según el contexto.

---

# Rest

Observe:

```javascript
function calcularPromedio(
    ...notas
) {
```

Aquí:

```text
...notas
```

recoge varios argumentos y los agrupa dentro de un arreglo.

---

# Ejemplo

La llamada:

```javascript
calcularPromedio(
    4.0,
    3.5,
    4.5,
    5.0
);
```

hace que:

```javascript
notas
```

contenga conceptualmente:

```javascript
[
    4.0,
    3.5,
    4.5,
    5.0
]
```

---

# Spread

En otro contexto:

```javascript
const todosLosLenguajes = [
    ...lenguajesBackend,
    ...lenguajesFrontend
];
```

los tres puntos permiten **expandir** los valores existentes.

---

# Ejemplo

Si:

```javascript
const lenguajesBackend = [
    "Java",
    "Python"
];
```

y:

```javascript
const lenguajesFrontend = [
    "JavaScript",
    "TypeScript"
];
```

el resultado será:

```javascript
[
    "Java",
    "Python",
    "JavaScript",
    "TypeScript"
]
```

---

# Copiar arreglos

También puede utilizarse:

```javascript
const copia = [
    ...original
];
```

Esto genera un nuevo arreglo con los elementos del arreglo original.

---

# Spread en objetos

Considere:

```javascript
const estudiante = {
    nombre: "Ana",
    programa: "Ingeniería de Sistemas"
};
```

Puede crearse otro objeto:

```javascript
const estudianteCompleto = {
    ...estudiante,
    semestre: 5,
    activo: true
};
```

El resultado será:

```javascript
{
    nombre: "Ana",
    programa: "Ingeniería de Sistemas",
    semestre: 5,
    activo: true
}
```

---

# Rest frente a Spread

Aunque ambos utilizan:

```text
...
```

puede pensarse así:

```text
REST

muchos valores
     │
     ▼
un arreglo
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

# 7. Clases

Ejecute:

```bash
node 07-clases.js
```

JavaScript moderno permite definir clases mediante:

```javascript
class Persona {
```

---

# Constructor

Una clase puede tener:

```javascript
constructor(nombre) {

    this.nombre = nombre;
}
```

El constructor se ejecuta al crear una nueva instancia.

---

# Crear un objeto

Se utiliza:

```javascript
const estudiante =
    new Estudiante(
        "Ana",
        "Ingeniería de Sistemas"
    );
```

La palabra:

```text
new
```

crea una instancia de la clase.

---

# Métodos

La clase `Persona` contiene:

```javascript
presentarse() {

    return `Hola, soy ${this.nombre}`;
}
```

Este método puede utilizarse mediante el objeto.

---

# Herencia

El ejemplo contiene:

```javascript
class Estudiante
    extends Persona
```

`extends` indica que:

```text
Estudiante
```

hereda características de:

```text
Persona
```

---

# `super()`

Dentro del constructor aparece:

```javascript
super(nombre);
```

Esto ejecuta el constructor de la clase padre.

---

# Sobrescribir métodos

`Persona` tiene:

```javascript
presentarse()
```

y `Estudiante` también define:

```javascript
presentarse()
```

Esto permite modificar el comportamiento heredado.

---

# `super.presentarse()`

Dentro de `Estudiante` se utiliza:

```javascript
super.presentarse()
```

para ejecutar la implementación de la clase padre y agregar información adicional.

---

# Métodos estáticos

El ejemplo contiene:

```javascript
static descripcion() {

    return "...";
}
```

Este método pertenece a la clase.

Por ello se utiliza:

```javascript
Estudiante.descripcion();
```

y no:

```javascript
estudiante.descripcion();
```

---

# 8. Map y Set

Ejecute:

```bash
node 08-map-set.js
```

El archivo presenta dos estructuras adicionales de JavaScript:

```text
Map
Set
```

---

# Map

`Map` almacena pares:

```text
clave → valor
```

Por ejemplo:

```javascript
estudiantes.set(
    1,
    "Ana"
);
```

representa:

```text
1 → Ana
```

---

# Agregar valores

Se utiliza:

```javascript
map.set(clave, valor);
```

---

# Obtener valores

Se utiliza:

```javascript
map.get(clave);
```

Por ejemplo:

```javascript
estudiantes.get(2);
```

puede retornar:

```text
Carlos
```

---

# Verificar una clave

Se utiliza:

```javascript
estudiantes.has(3);
```

Esto retorna:

```text
true
```

o:

```text
false
```

---

# Tamaño

Puede consultarse:

```javascript
estudiantes.size
```

para conocer la cantidad de elementos.

---

# Recorrer un Map

Se utiliza:

```javascript
for (
    const [id, nombre]
    of estudiantes
) {
```

Aquí también aparece destructuring.

Cada elemento proporciona:

```text
clave
valor
```

---

# Set

`Set` permite almacenar valores únicos.

Ejemplo:

```javascript
const lenguajes =
    new Set();
```

---

# Agregar valores

```javascript
lenguajes.add("Java");
```

---

# Valores repetidos

Si se ejecuta:

```javascript
lenguajes.add("Java");
lenguajes.add("Java");
```

el conjunto mantiene solamente un:

```text
Java
```

porque `Set` no almacena duplicados.

---

# Consultar existencia

```javascript
lenguajes.has("Java");
```

retorna:

```text
true
```

si existe.

---

# Eliminar

```javascript
lenguajes.delete("Python");
```

elimina ese valor del conjunto.

---

# ¿Cuándo podría utilizarse Set?

Por ejemplo, imagine una lista de categorías:

```javascript
[
    "Java",
    "JavaScript",
    "Java",
    "Python",
    "JavaScript"
]
```

Puede utilizarse un `Set` para obtener valores únicos:

```javascript
[
    "Java",
    "JavaScript",
    "Python"
]
```

---

# Comparación rápida

| Característica   | Uso principal                   |
| ---------------- | ------------------------------- |
| `let`            | Variable reasignable            |
| `const`          | Variable que no será reasignada |
| Template literal | Construcción de cadenas         |
| Arrow function   | Sintaxis compacta de funciones  |
| `for...of`       | Recorrer valores                |
| Destructuring    | Extraer valores                 |
| Rest             | Agrupar argumentos              |
| Spread           | Expandir valores                |
| Class            | Crear estructuras de objetos    |
| `Map`            | Pares clave-valor               |
| `Set`            | Valores únicos                  |

---

# Relación entre los conceptos

Estos elementos suelen aparecer combinados.

Por ejemplo:

```javascript
const estudiantes = [
    {
        nombre: "Ana",
        promedio: 4.5
    },
    {
        nombre: "Carlos",
        promedio: 3.8
    }
];

for (
    const {
        nombre,
        promedio
    }
    of estudiantes
) {

    console.log(
        `${nombre}: ${promedio}`
    );
}
```

Aquí se utilizan simultáneamente:

```text
const
for...of
destructuring
template literals
```

---

# Relación con el desarrollo web

Estos conceptos aparecerán constantemente cuando se trabaje posteriormente con:

```text
DOM
React
consumo de APIs
arreglos de objetos
transformación de datos
```

Por ello no deben verse únicamente como sintaxis aislada.

---

# Reto 1 - Template literals

Cree:

```javascript
const nombre = "Laura";
const curso = "Desarrollo de Software II";
const nota = 4.5;
```

Genere utilizando template literals:

```text
Laura obtuvo 4.5 en Desarrollo de Software II.
```

---

# Reto 2 - Arrow function

Cree una función flecha llamada:

```text
esAprobado
```

que reciba una nota.

Debe retornar:

```text
true
```

si la nota es mayor o igual a `3.0`.

---

# Reto 3 - for...of

Cree un arreglo:

```javascript
const notas = [
    4.0,
    2.8,
    3.5,
    4.7
];
```

Recórralo utilizando:

```text
for...of
```

y muestre cada nota.

---

# Reto 4 - Destructuring

Cree:

```javascript
const curso = {
    nombre: "Desarrollo de Software II",
    creditos: 3,
    semestre: 4
};
```

Extraiga mediante destructuring:

```text
nombre
creditos
```

---

# Reto 5 - Rest

Cree:

```javascript
function sumar(...numeros)
```

que permita llamadas como:

```javascript
sumar(1, 2);
```

y:

```javascript
sumar(
    1,
    2,
    3,
    4,
    5
);
```

---

# Reto 6 - Spread

Combine:

```javascript
const grupoA = [
    "Ana",
    "Carlos"
];
```

con:

```javascript
const grupoB = [
    "Laura",
    "Pedro"
];
```

utilizando spread.

---

# Reto 7 - Clases

Cree una clase:

```text
Curso
```

con:

```text
nombre
creditos
```

Agregue un método:

```text
mostrarInformacion()
```

---

# Reto 8 - Herencia

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

# Reto 9 - Map

Cree un `Map` donde:

```text
código del curso
→ nombre del curso
```

Por ejemplo:

```text
DS2 → Desarrollo de Software II
LP2 → Lenguaje de Programación II
```

---

# Reto 10 - Set

Cree un arreglo que contenga varios lenguajes repetidos.

Utilice `Set` para obtener únicamente los valores diferentes.

---

# Preguntas de análisis

1. ¿Cuál es la diferencia básica entre `let` y `const`?
2. ¿Qué significa alcance de bloque?
3. ¿Qué caracteres se utilizan para crear un template literal?
4. ¿Para qué sirve `${}`?
5. ¿Qué representa `=>`?
6. ¿Cuándo puede omitirse `return` en una arrow function?
7. ¿Qué ventaja ofrece un parámetro por defecto?
8. ¿Qué recorre `for...of`?
9. ¿Qué diferencia básica existe entre `for...of` y `for...in`?
10. ¿Qué es destructuring?
11. ¿Cómo se aplica destructuring sobre un objeto?
12. ¿Qué hace un parámetro rest?
13. ¿Qué hace el operador spread?
14. ¿Por qué rest y spread utilizan los mismos tres puntos?
15. ¿Qué función cumple `class`?
16. ¿Qué función cumple `constructor`?
17. ¿Qué hace `extends`?
18. ¿Para qué se utiliza `super`?
19. ¿Qué diferencia existe entre un método normal y uno `static`?
20. ¿Qué tipo de información almacena `Map`?
21. ¿Qué característica principal tiene `Set`?
22. ¿Por qué estos conceptos serán útiles al trabajar con React?

---

# Resultado esperado

El estudiante debe poder reconocer y utilizar código como:

```javascript
const estudiantes = [
    {
        nombre: "Ana",
        programa: "Ingeniería de Sistemas"
    },
    {
        nombre: "Carlos",
        programa: "Ingeniería Industrial"
    }
];

for (
    const {
        nombre,
        programa
    }
    of estudiantes
) {

    console.log(
        `${nombre} estudia ${programa}`
    );
}
```

y comprender que allí se están utilizando:

```text
const
arreglos
objetos
for...of
destructuring
template literals
```

---

# Conceptos trabajados

* ECMAScript;
* `let`;
* `const`;
* alcance de bloque;
* template literals;
* interpolación;
* arrow functions;
* parámetros por defecto;
* `for...of`;
* destructuring;
* rest;
* spread;
* clases;
* constructores;
* métodos;
* herencia;
* `extends`;
* `super`;
* métodos estáticos;
* `Map`;
* `Set`.

---

# Conclusión

JavaScript moderno incorpora sintaxis y estructuras que facilitan la escritura de código más claro y reutilizable.

Estas características son especialmente importantes porque aparecerán frecuentemente al desarrollar interfaces modernas, manipular colecciones de objetos, consumir servicios web y trabajar posteriormente con React.

El propósito de estos ejemplos no es memorizar cada sintaxis, sino reconocerla, comprender qué problema resuelve y saber cuándo puede resultar útil.


---

## Continuar la práctica

- **Ejemplo anterior:** [Ejemplo 03 - Manipulación del DOM con JavaScript](../ejemplo03-dom/README.md)
- **Volver a la unidad:** [Unidad 2 - Introducción a las interfaces de usuario web](../README.md)
- **Volver al índice:** [Todas las unidades](../../README.md)
- **Siguiente unidad:** [Unidad 3 - Desarrollo Front End con React](../../unidad3-react/README.md)
