# Guía de práctica 03 - Desarrollo Front End con React

## Desarrollo de Software II

---

# 1. Propósito de la práctica

Esta práctica tiene como propósito aplicar los fundamentos de React para construir interfaces mediante componentes reutilizables, administrar estado, responder a eventos, consumir información desde una API y verificar el comportamiento de los componentes mediante pruebas automatizadas.

Para evitar duplicar material, los fundamentos de React se trabajan con los laboratorios ya desarrollados en el repositorio **Lenguaje de Programación II**, mientras que las pruebas automatizadas se realizan con el ejemplo propio de Desarrollo de Software II.

---

# 2. Objetivo de aprendizaje

Al finalizar la práctica, el estudiante estará en capacidad de:

* ejecutar una aplicación React con Vite;
* reconocer la estructura de un proyecto React;
* utilizar JSX;
* crear componentes;
* reutilizar componentes mediante Props;
* utilizar `useState`;
* responder a eventos;
* generar listas dinámicas;
* utilizar renderizado condicional;
* construir formularios controlados;
* utilizar `useEffect`;
* consumir una API mediante `fetch()`;
* procesar respuestas JSON;
* reconocer estados de carga y error;
* ejecutar pruebas automatizadas con Vitest;
* utilizar React Testing Library;
* simular interacciones del usuario.

---

# 3. Recursos

Utilice:

```text
unidad3-react/
```

Específicamente:

```text
ejemplo01-fundamentos-react
ejemplo02-consumo-api
ejemplo03-pruebas-react
```

También utilizará el módulo de React de Lenguaje de Programación II:

[React - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react)

---

# 4. Requisitos

Se recomienda contar con:

* Node.js;
* npm;
* Visual Studio Code;
* navegador web;
* terminal;
* Git.

Verifique:

```bash
node --version
```

```bash
npm --version
```

---

# 5. Actividad 1 - Preparar el entorno React

Consulte el laboratorio:

```text
01 - Entorno React con Vite
```

del módulo de React de Lenguaje de Programación II.

Revise su README antes de comenzar.

---

# 6. Ejecutar el proyecto

Ingrese a la carpeta correspondiente.

Ejecute:

```bash
npm install
```

Después:

```bash
npm run dev
```

---

# 7. Registrar información

Complete:

```text
Versión de Node.js:
________________________

Versión de npm:
________________________

URL local indicada por Vite:
________________________
```

---

# 8. Identificar archivos principales

Localice:

```text
src/
App.jsx
main.jsx
index.css
package.json
vite.config.js
```

Explique brevemente la función de:

```text
App.jsx:
________________________________________

main.jsx:
________________________________________

package.json:
________________________________________
```

---

# 9. Actividad 2 - JSX

Consulte el laboratorio:

```text
03 - Primeros componentes
```

Identifique un componente escrito con JSX.

---

# 10. Analizar JSX

Considere:

```jsx
function Saludo() {
    return (
        <h1>
            Hola React
        </h1>
    );
}
```

Responda:

```text
Nombre del componente:
_____________________

Elemento retornado:
_____________________
```

---

# 11. Crear componente propio

Cree un componente llamado:

```text
Curso.jsx
```

que muestre:

```text
Desarrollo de Software II
```

---

# 12. Código esperado

Puede utilizar una estructura similar a:

```jsx
function Curso() {

    return (
        <article>
            <h2>
                Desarrollo de Software II
            </h2>
        </article>
    );
}

export default Curso;
```

---

# 13. Integrar el componente

Importe el componente desde `App.jsx`.

Compruebe que aparece correctamente en la interfaz.

---

# 14. Actividad 3 - Componentización

Consulte el laboratorio:

```text
04 - Componentización
```

Observe cómo una interfaz grande puede dividirse.

---

# 15. Diseñar estructura

Represente una aplicación de cursos mediante:

```text
APP
│
├── Header
├── ListaCursos
│   ├── TarjetaCurso
│   ├── TarjetaCurso
│   └── TarjetaCurso
└── Footer
```

Explique qué responsabilidad tendría cada componente.

---

# 16. Header

```text
Responsabilidad:

________________________________________
```

---

# 17. ListaCursos

```text
Responsabilidad:

________________________________________
```

---

# 18. TarjetaCurso

```text
Responsabilidad:

________________________________________
```

---

# 19. Actividad 4 - Props

Consulte el laboratorio:

```text
05 - Props
```

Observe cómo se envía información entre componentes.

---

# 20. Crear TarjetaCurso

Cree conceptualmente:

```jsx
<TarjetaCurso
    nombre="Desarrollo de Software II"
    creditos={3}
/>
```

---

# 21. Componente receptor

Complete:

```jsx
function TarjetaCurso({
    ___________,
    ___________
}) {

    return (
        <article>
            
        </article>
    );
}
```

---

# 22. Reutilización

Cree tres tarjetas:

```text
Desarrollo de Software II
Lenguaje de Programación II
Lenguaje de Programación III
```

utilizando el mismo componente.

---

# 23. Explique

¿Por qué Props permite reutilizar componentes?

```text
____________________________________________________

____________________________________________________
```

---

# 24. Actividad 5 - Estado y eventos

Consulte:

```text
06 - Estado y eventos
```

Identifique el uso de:

```javascript
useState()
```

---

# 25. Analizar estado

Considere:

```javascript
const [contador, setContador] =
    useState(0);
```

Complete:

```text
Variable con valor actual:
____________________

Función para modificarlo:
____________________

Valor inicial:
____________________
```

---

# 26. Crear interacción

Cree un botón:

```text
Me gusta
```

que incremente un contador.

Resultado esperado:

```text
Me gusta: 0
      │
      ▼
clic
      │
      ▼
Me gusta: 1
```

---

# 27. Evento

Identifique:

```jsx
onClick={...}
```

Explique qué representa:

```text
____________________________________________________
```

---

# 28. Actividad 6 - Listas

Consulte:

```text
07 - Listas y renderizado condicional
```

Cree un arreglo:

```javascript
const cursos = [
    {
        id: 1,
        nombre: "Desarrollo de Software II"
    },
    {
        id: 2,
        nombre: "Lenguaje de Programación II"
    }
];
```

---

# 29. Renderizar lista

Utilice:

```javascript
map()
```

para crear componentes.

Complete conceptualmente:

```jsx
{cursos.map(curso => (
    <TarjetaCurso
        key={____________}
        nombre={____________}
    />
))}
```

---

# 30. Propiedad key

Explique por qué se utiliza:

```text
key
```

```text
____________________________________________________
```

---

# 31. Renderizado condicional

Cree:

```text
Cargando...
```

cuando una variable:

```javascript
cargando
```

sea verdadera.

---

# 32. Estructura posible

```jsx
{cargando
    ? <p>Cargando...</p>
    : <ListaCursos />}
```

Explique qué ocurre.

---

# 33. Actividad 7 - Formularios controlados

Consulte:

```text
08 - Formularios
```

Identifique:

```javascript
value
onChange
useState
```

---

# 34. Crear campo controlado

Cree:

```text
Nombre del curso
```

y almacene su valor en estado.

---

# 35. Flujo

Complete:

```text
Usuario escribe
      │
      ▼
_____________
      │
      ▼
_____________
      │
      ▼
Estado actualizado
```

---

# 36. Actividad 8 - useEffect

Consulte:

```text
09 - Efectos
```

Identifique:

```javascript
useEffect(() => {

}, []);
```

---

# 37. Analizar

¿Qué indica:

```text
[]
```

en este caso?

```text
____________________________________________________

____________________________________________________
```

---

# 38. Actividad 9 - Consumo de API

Ingrese a:

```text
ejemplo02-consumo-api/
```

y siga el enlace al laboratorio 10 del módulo React.

---

# 39. Ejecutar

Instale:

```bash
npm install
```

Ejecute:

```bash
npm run dev
```

Abra la aplicación.

---

# 40. Abrir herramientas del navegador

Presione:

```text
F12
```

Busque:

```text
Network
```

o:

```text
Red
```

Recargue la aplicación.

---

# 41. Identificar Request

Registre:

```text
URL solicitada:
________________________________________

Método HTTP:
________________________________________

Código de estado:
________________________________________
```

---

# 42. Identificar Response

Observe la respuesta.

Indique:

```text
Formato recibido:
____________________
```

---

# 43. Relación con Unidad 1

Complete:

```text
React actúa como:
____________________

La API actúa como:
____________________
```

---

# 44. Flujo completo

Complete:

```text
React
   │
   │ ____________
   ▼
API
   │
   │ ____________
   ▼
React
```

---

# 45. Localizar fetch

Busque:

```javascript
fetch(...)
```

Explique su función:

```text
____________________________________________________

____________________________________________________
```

---

# 46. `response.json()`

Explique:

```javascript
response.json()
```

```text
____________________________________________________
```

---

# 47. Estado de carga

Identifique si la aplicación presenta:

```text
Cargando...
```

o un comportamiento equivalente.

Explique por qué es útil.

---

# 48. Estado de error

Cambie temporalmente la URL de la API por una incorrecta.

Observe:

```text
Consola:
________________________________________

Interfaz:
________________________________________

Network:
________________________________________
```

Después restaure la URL.

---

# 49. Actividad 10 - Pruebas React

Ingrese a:

```text
ejemplo03-pruebas-react/
```

---

# 50. Instalar

Ejecute:

```bash
npm install
```

---

# 51. Ejecutar componente

Ejecute:

```bash
npm run dev
```

Compruebe manualmente:

```text
Incrementar
Disminuir
Reiniciar
```

---

# 52. Ejecutar pruebas

En otra terminal:

```bash
npm test
```

Resultado esperado:

```text
✓ debe mostrar el título
✓ debe iniciar en cero
✓ debe incrementar el contador
✓ debe disminuir el contador
✓ debe reiniciar el contador
```

---

# 53. Registrar resultado

```text
Test Files:
____________________

Tests passed:
____________________
```

---

# 54. Analizar setup

Abra:

```text
src/tests/setup.js
```

Identifique:

```javascript
cleanup()
```

Explique para qué se utiliza.

```text
____________________________________________________

____________________________________________________
```

---

# 55. `afterEach`

Explique qué significa:

```javascript
afterEach(() => {
    cleanup();
});
```

```text
____________________________________________________
```

---

# 56. Analizar una prueba

Localice:

```text
debe incrementar el contador
```

---

# 57. Arrange

¿Qué se prepara?

```text
____________________________________________________
```

---

# 58. Act

¿Qué acción realiza el usuario?

```text
____________________________________________________
```

---

# 59. Assert

¿Qué resultado se comprueba?

```text
____________________________________________________
```

---

# 60. Buscar por rol

Localice:

```javascript
screen.getByRole(
    "button",
    {
        name: "Incrementar"
    }
);
```

Explique qué elemento busca.

---

# 61. Simular clic

Localice:

```javascript
await usuario.click(boton);
```

Explique su función.

---

# 62. Assertion

Localice:

```javascript
toHaveTextContent("1")
```

Explique qué comprueba.

---

# 63. Provocar una prueba fallida

Cambie temporalmente:

```text
"1"
```

por:

```text
"2"
```

en la prueba de incremento.

Ejecute:

```bash
npm test
```

---

# 64. Observe

Registre:

```text
Resultado:
PASS / FAIL
```

Explique por qué falló.

```text
____________________________________________________
```

Después restaure el valor correcto.

---

# 65. Reto integrador

Construya un pequeño componente:

```text
BuscadorCursos
```

que permita:

```text
escribir un texto
filtrar una lista
mostrar resultados
```

---

# 66. Datos iniciales

Puede utilizar:

```javascript
const cursos = [
    "Desarrollo de Software II",
    "Lenguaje de Programación II",
    "Lenguaje de Programación III",
    "Bases de Datos"
];
```

---

# 67. Requisitos técnicos

Debe utilizar:

```text
componente funcional
useState
input controlado
evento
filter()
map()
renderizado condicional
```

---

# 68. Comportamiento

Si el usuario escribe:

```text
Lenguaje
```

deben aparecer:

```text
Lenguaje de Programación II
Lenguaje de Programación III
```

---

# 69. Sin resultados

Si escribe:

```text
Robótica
```

debe aparecer:

```text
No se encontraron cursos.
```

---

# 70. Pruebas mínimas

Cree pruebas que comprueben:

```text
1. El título del buscador aparece.

2. El campo de búsqueda existe.

3. Inicialmente aparecen todos los cursos.

4. Al escribir "Lenguaje" aparecen solamente los cursos correspondientes.

5. Al escribir un texto inexistente aparece el mensaje de sin resultados.
```

---

# 71. Evidencias sugeridas

Conserve:

1. aplicación React ejecutándose;
2. componente creado;
3. uso de Props;
4. estado funcionando;
5. lista dinámica;
6. formulario controlado;
7. consumo de API;
8. Request observado en Network;
9. pruebas exitosas;
10. reto integrador funcionando.

---

# 72. Preguntas de cierre

1. ¿Qué es React?
2. ¿Qué es JSX?
3. ¿Qué es un componente?
4. ¿Qué significa componentización?
5. ¿Qué son Props?
6. ¿Qué representa el estado?
7. ¿Qué función cumple `useState`?
8. ¿Cómo se manejan eventos?
9. ¿Para qué se utiliza `map()`?
10. ¿Qué es renderizado condicional?
11. ¿Qué es un formulario controlado?
12. ¿Qué función cumple `useEffect`?
13. ¿Para qué se utiliza `fetch()`?
14. ¿Qué función cumple `response.json()`?
15. ¿Qué significa estado de carga?
16. ¿Qué significa estado de error?
17. ¿Qué es una prueba automatizada?
18. ¿Qué función cumple Vitest?
19. ¿Qué función cumple React Testing Library?
20. ¿Qué hace `render()`?
21. ¿Qué representa `screen`?
22. ¿Qué función cumple `userEvent`?
23. ¿Para qué se utiliza `cleanup()`?
24. ¿Qué significa Arrange - Act - Assert?
25. ¿Cómo se relaciona React con HTTP y JSON?

---

# 73. Resultado esperado

Al finalizar debe comprender:

```text
USUARIO
   │
   │ evento
   ▼
REACT
   │
   ├── Componentes
   ├── Props
   ├── Estado
   └── Hooks
   │
   │ HTTP
   ▼
API
   │
   │ JSON
   ▼
REACT
   │
   ▼
INTERFAZ
```

y también:

```text
COMPONENTE
    │
    ▼
PRUEBA
    │
    ├── renderiza
    ├── interactúa
    └── verifica
    │
    ▼
PASS / FAIL
```

---

# Conclusión

React permite construir interfaces mediante componentes reutilizables, estado, eventos y Hooks.

El consumo de APIs conecta el Front End con servicios externos mediante HTTP y JSON, mientras que las pruebas automatizadas permiten comprobar que los componentes mantienen el comportamiento esperado.

Estos conocimientos preparan el camino para integrar React con un Back End desarrollado en Spring Boot.
