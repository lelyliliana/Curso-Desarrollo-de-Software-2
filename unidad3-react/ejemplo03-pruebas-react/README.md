# Ejemplo 03 - Pruebas de componentes React

[Volver a la unidad](../README.md) · [Volver al índice del curso](../../README.md)

## Unidad 3 - Desarrollo Front End con React

Este ejemplo introduce las pruebas automatizadas de componentes React.

El propósito es comprobar de manera automática que un componente:

* pueda renderizarse;
* muestre la información esperada;
* tenga un estado inicial correcto;
* responda adecuadamente a las acciones del usuario;
* conserve su comportamiento después de realizar cambios en el código.

El módulo institucional aborda pruebas unitarias y de componentes utilizando Jest y Enzyme. En este ejemplo se mantiene el mismo propósito formativo, pero se utilizan herramientas actuales:

```text
Vitest
React Testing Library
user-event
```

---

# Objetivo de aprendizaje

Al finalizar este ejemplo, el estudiante estará en capacidad de:

* explicar qué es una prueba automatizada;
* comprender por qué se prueban componentes;
* configurar Vitest en una aplicación React;
* utilizar React Testing Library;
* renderizar un componente dentro de una prueba;
* localizar elementos de la interfaz;
* comprobar contenido esperado;
* simular interacciones del usuario;
* verificar cambios en el estado del componente;
* limpiar el DOM entre pruebas;
* ejecutar una suite de pruebas automatizadas.

---

# Estructura

```text
ejemplo03-pruebas-react/
│
├── src/
│   ├── components/
│   │   └── Contador.jsx
│   │
│   ├── tests/
│   │   ├── setup.js
│   │   └── Contador.test.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# Componente utilizado

El ejemplo utiliza un componente llamado:

```text
Contador
```

Este componente permite:

```text
Incrementar
Disminuir
Reiniciar
```

un valor almacenado en el estado.

El comportamiento esperado es:

```text
Valor inicial
0

Incrementar
0 → 1

Disminuir
0 → -1

Reiniciar
cualquier valor → 0
```

---

# Archivo `package.json`

El proyecto utiliza las siguientes dependencias principales:

```json
{
  "name": "ejemplo03-pruebas-react",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "test": "vitest",
    "test:run": "vitest run"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "latest",
    "@testing-library/react": "latest",
    "@testing-library/user-event": "latest",
    "jsdom": "latest",
    "vitest": "latest"
  }
}
```

---

# Herramientas utilizadas

## Vitest

Vitest es el framework utilizado para ejecutar las pruebas.

Proporciona elementos como:

```text
describe
test
expect
afterEach
```

---

## React Testing Library

Permite renderizar componentes React y consultar la interfaz desde una perspectiva cercana a la interacción de un usuario.

Se utilizan principalmente:

```javascript
render()
```

```javascript
screen
```

```javascript
cleanup()
```

---

## user-event

Permite simular acciones del usuario.

En este ejemplo se utiliza para realizar clics sobre los botones:

```text
Incrementar
Disminuir
Reiniciar
```

---

## jsdom

Las pruebas se ejecutan mediante Node.js.

Sin embargo, un componente React normalmente necesita elementos propios de un navegador:

```text
document
window
DOM
```

`jsdom` proporciona un ambiente que simula el DOM del navegador.

Conceptualmente:

```text
Node.js
   │
   ▼
jsdom
   │
   ▼
DOM simulado
   │
   ▼
Componente React
```

---

# Archivo `vite.config.js`

El proyecto contiene:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    test: {
        environment: "jsdom",
        setupFiles: "./src/tests/setup.js"
    }
});
```

---

# Configuración de pruebas

La sección:

```javascript
test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.js"
}
```

indica que las pruebas utilizarán:

```text
jsdom
```

como ambiente.

También establece que antes de ejecutar las pruebas debe cargarse:

```text
src/tests/setup.js
```

---

# Archivo `src/tests/setup.js`

El archivo debe contener:

```javascript
import "@testing-library/jest-dom/vitest";

import {
    cleanup
} from "@testing-library/react";

import {
    afterEach
} from "vitest";

afterEach(() => {
    cleanup();
});
```

Este archivo realiza dos tareas importantes.

---

# `@testing-library/jest-dom/vitest`

La instrucción:

```javascript
import "@testing-library/jest-dom/vitest";
```

agrega comparadores adicionales que pueden utilizarse con Vitest.

Por ejemplo:

```javascript
toBeInTheDocument()
```

y:

```javascript
toHaveTextContent()
```

---

# `cleanup()`

La instrucción:

```javascript
cleanup();
```

elimina del DOM los componentes renderizados durante una prueba.

Esto es importante porque cada prueba debe comenzar con un ambiente limpio.

Sin esta limpieza podrían acumularse componentes entre pruebas.

Por ejemplo:

```text
Prueba 1
renderiza Contador

Prueba 2
renderiza otro Contador

Prueba 3
renderiza otro Contador
```

Si los anteriores permanecieran en el DOM, podrían existir varios botones llamados:

```text
Incrementar
```

al mismo tiempo.

Esto generaría errores como:

```text
Found multiple elements with the role "button"
```

---

# `afterEach()`

Se utiliza:

```javascript
afterEach(() => {
    cleanup();
});
```

Esto significa:

> Después de ejecutar cada prueba, limpiar el DOM.

Por tanto:

```text
Prueba 1
   │
   ▼
cleanup()
   │
   ▼
Prueba 2
   │
   ▼
cleanup()
   │
   ▼
Prueba 3
```

Cada prueba se ejecuta de manera independiente.

---

# Componente `Contador.jsx`

El componente contiene:

```jsx
import { useState } from "react";

function Contador() {

    const [contador, setContador] =
        useState(0);

    const incrementar = () => {
        setContador(
            valorActual =>
                valorActual + 1
        );
    };

    const disminuir = () => {
        setContador(
            valorActual =>
                valorActual - 1
        );
    };

    const reiniciar = () => {
        setContador(0);
    };

    return (
        <section>
            <h2>
                Contador
            </h2>

            <p>
                Valor actual:
                {" "}
                <span data-testid="valor-contador">
                    {contador}
                </span>
            </p>

            <button
                onClick={incrementar}
            >
                Incrementar
            </button>

            <button
                onClick={disminuir}
            >
                Disminuir
            </button>

            <button
                onClick={reiniciar}
            >
                Reiniciar
            </button>
        </section>
    );
}

export default Contador;
```

---

# Estado inicial

El componente utiliza:

```javascript
const [contador, setContador] =
    useState(0);
```

Por tanto, su estado inicial es:

```text
0
```

---

# Incrementar

La función:

```javascript
const incrementar = () => {
    setContador(
        valorActual =>
            valorActual + 1
    );
};
```

produce:

```text
0 → 1
1 → 2
2 → 3
```

---

# Disminuir

La función:

```javascript
const disminuir = () => {
    setContador(
        valorActual =>
            valorActual - 1
    );
};
```

produce:

```text
0 → -1
-1 → -2
```

---

# Reiniciar

La función:

```javascript
const reiniciar = () => {
    setContador(0);
};
```

establece nuevamente:

```text
contador = 0
```

sin importar el valor anterior.

---

# Archivo `App.jsx`

```jsx
import Contador from "./components/Contador";

function App() {

    return (
        <main>
            <h1>
                Pruebas de componentes React
            </h1>

            <Contador />
        </main>
    );
}

export default App;
```

---

# Archivo `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM
    .createRoot(
        document.getElementById("root")
    )
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
```

---

# Archivo `index.html`

```html
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Pruebas React
    </title>
</head>

<body>

    <div id="root"></div>

    <script
        type="module"
        src="/src/main.jsx"
    ></script>

</body>
</html>
```

---

# Archivo de pruebas

El archivo:

```text
src/tests/Contador.test.jsx
```

contiene:

```jsx
import {
    render,
    screen
} from "@testing-library/react";

import userEvent
    from "@testing-library/user-event";

import {
    describe,
    expect,
    test
} from "vitest";

import Contador
    from "../components/Contador";


describe(
    "Componente Contador",
    () => {

        test(
            "debe mostrar el título",
            () => {

                render(
                    <Contador />
                );

                expect(
                    screen.getByRole(
                        "heading",
                        {
                            name: "Contador"
                        }
                    )
                ).toBeInTheDocument();
            }
        );


        test(
            "debe iniciar en cero",
            () => {

                render(
                    <Contador />
                );

                expect(
                    screen.getByTestId(
                        "valor-contador"
                    )
                ).toHaveTextContent(
                    "0"
                );
            }
        );


        test(
            "debe incrementar el contador",
            async () => {

                const usuario =
                    userEvent.setup();

                render(
                    <Contador />
                );

                const boton =
                    screen.getByRole(
                        "button",
                        {
                            name:
                                "Incrementar"
                        }
                    );

                await usuario.click(
                    boton
                );

                expect(
                    screen.getByTestId(
                        "valor-contador"
                    )
                ).toHaveTextContent(
                    "1"
                );
            }
        );


        test(
            "debe disminuir el contador",
            async () => {

                const usuario =
                    userEvent.setup();

                render(
                    <Contador />
                );

                const boton =
                    screen.getByRole(
                        "button",
                        {
                            name:
                                "Disminuir"
                        }
                    );

                await usuario.click(
                    boton
                );

                expect(
                    screen.getByTestId(
                        "valor-contador"
                    )
                ).toHaveTextContent(
                    "-1"
                );
            }
        );


        test(
            "debe reiniciar el contador",
            async () => {

                const usuario =
                    userEvent.setup();

                render(
                    <Contador />
                );

                const incrementar =
                    screen.getByRole(
                        "button",
                        {
                            name:
                                "Incrementar"
                        }
                    );

                const reiniciar =
                    screen.getByRole(
                        "button",
                        {
                            name:
                                "Reiniciar"
                        }
                    );

                await usuario.click(
                    incrementar
                );

                await usuario.click(
                    incrementar
                );

                await usuario.click(
                    reiniciar
                );

                expect(
                    screen.getByTestId(
                        "valor-contador"
                    )
                ).toHaveTextContent(
                    "0"
                );
            }
        );

    }
);
```

---

# Casos de prueba

La suite contiene cinco pruebas:

```text
1. Debe mostrar el título.

2. Debe iniciar en cero.

3. Debe incrementar el contador.

4. Debe disminuir el contador.

5. Debe reiniciar el contador.
```

---

# Paso 1 - Instalar dependencias

Abra una terminal en la carpeta:

```text
ejemplo03-pruebas-react
```

Ejecute:

```bash
npm install
```

Esto instalará todas las dependencias declaradas en:

```text
package.json
```

---

# Paso 2 - Ejecutar la aplicación

Para observar manualmente el componente utilice:

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

# Resultado esperado en el navegador

Debe aparecer:

```text
Pruebas de componentes React

Contador

Valor actual: 0

[Incrementar]
[Disminuir]
[Reiniciar]
```

---

# Paso 3 - Probar manualmente

Presione:

```text
Incrementar
```

El valor debe pasar:

```text
0 → 1
```

Presione nuevamente:

```text
1 → 2
```

---

# Probar disminuir

Presione:

```text
Disminuir
```

El valor debe reducirse.

---

# Probar reiniciar

Después de modificar el contador presione:

```text
Reiniciar
```

El valor debe volver a:

```text
0
```

Estas pruebas manuales permiten identificar los comportamientos que posteriormente serán comprobados automáticamente.

---

# Paso 4 - Ejecutar las pruebas automatizadas

En una terminal ejecute:

```bash
npm test
```

Vitest se ejecutará en modo interactivo y permanecerá esperando modificaciones.

Un resultado correcto debe mostrar algo similar a:

```text
✓ src/tests/Contador.test.jsx (5 tests)

✓ Componente Contador
  ✓ debe mostrar el título
  ✓ debe iniciar en cero
  ✓ debe incrementar el contador
  ✓ debe disminuir el contador
  ✓ debe reiniciar el contador
```

Y finalmente:

```text
Test Files  1 passed
Tests       5 passed
```

---

# Modo de observación

Cuando se ejecuta:

```bash
npm test
```

Vitest permanece activo.

Puede aparecer:

```text
Waiting for file changes...
```

Esto significa que si modifica algún archivo, Vitest volverá a ejecutar automáticamente las pruebas.

Para salir puede presionar:

```text
q
```

---

# Ejecutar las pruebas una sola vez

También puede utilizar:

```bash
npm run test:run
```

Esta opción ejecuta la suite una sola vez y finaliza.

Es especialmente útil antes de:

```text
realizar un commit
entregar una actividad
publicar una nueva versión
```

---

# `describe()`

La suite utiliza:

```javascript
describe(
    "Componente Contador",
    () => {
        ...
    }
);
```

`describe()` permite agrupar varias pruebas relacionadas.

Conceptualmente:

```text
Componente Contador
│
├── prueba 1
├── prueba 2
├── prueba 3
├── prueba 4
└── prueba 5
```

---

# `test()`

Cada caso utiliza:

```javascript
test(
    "descripción de la prueba",
    () => {
        ...
    }
);
```

Por ejemplo:

```text
debe iniciar en cero
```

La descripción debe expresar con claridad el comportamiento que se espera comprobar.

---

# Patrón Arrange - Act - Assert

Muchas pruebas pueden analizarse mediante tres momentos:

```text
ARRANGE
preparar

ACT
ejecutar una acción

ASSERT
comprobar el resultado
```

---

# Ejemplo: prueba de incremento

## Arrange

Se prepara el usuario:

```javascript
const usuario =
    userEvent.setup();
```

y se renderiza:

```javascript
render(
    <Contador />
);
```

---

## Act

Se localiza el botón:

```javascript
const boton =
    screen.getByRole(
        "button",
        {
            name:
                "Incrementar"
        }
    );
```

y se simula el clic:

```javascript
await usuario.click(
    boton
);
```

---

## Assert

Se comprueba:

```javascript
expect(
    screen.getByTestId(
        "valor-contador"
    )
).toHaveTextContent(
    "1"
);
```

---

# `render()`

La instrucción:

```javascript
render(
    <Contador />
);
```

renderiza el componente dentro del DOM simulado utilizado durante la prueba.

---

# `screen`

Después de renderizar se utiliza:

```javascript
screen
```

para consultar los elementos disponibles.

---

# Buscar por rol

La primera prueba utiliza:

```javascript
screen.getByRole(
    "heading",
    {
        name: "Contador"
    }
)
```

Esto busca un encabezado cuyo nombre accesible sea:

```text
Contador
```

---

# Buscar un botón

Puede utilizarse:

```javascript
screen.getByRole(
    "button",
    {
        name: "Incrementar"
    }
);
```

Esto busca específicamente un control con:

```text
rol → button
nombre → Incrementar
```

---

# ¿Por qué utilizar consultas por rol?

Estas consultas se aproximan a la manera en que usuarios y tecnologías de asistencia reconocen una interfaz.

Algunos roles comunes son:

```text
heading
button
textbox
link
checkbox
```

---

# `expect()`

`expect()` permite establecer qué resultado se espera.

Por ejemplo:

```javascript
expect(
    elemento
).toBeInTheDocument();
```

puede interpretarse como:

> Espero que este elemento exista dentro del documento.

---

# `toBeInTheDocument()`

La primera prueba utiliza:

```javascript
toBeInTheDocument();
```

para comprobar que el encabezado:

```text
Contador
```

existe.

---

# `toHaveTextContent()`

Se utiliza:

```javascript
toHaveTextContent(
    "0"
);
```

para comprobar el texto mostrado por un elemento.

---

# Estado inicial

La prueba:

```text
debe iniciar en cero
```

comprueba que:

```text
Valor actual = 0
```

antes de realizar cualquier interacción.

---

# `data-testid`

En el componente se encuentra:

```jsx
<span
    data-testid="valor-contador"
>
    {contador}
</span>
```

Esto permite localizar ese elemento mediante:

```javascript
screen.getByTestId(
    "valor-contador"
);
```

---

# Uso de `data-testid`

Siempre que sea posible resulta conveniente localizar elementos mediante:

```text
rol
nombre
texto
label
```

Sin embargo, `data-testid` puede ser útil para identificar elementos que no cuentan con una consulta semántica suficientemente clara.

---

# Simular al usuario

La instrucción:

```javascript
const usuario =
    userEvent.setup();
```

crea una representación de las acciones que realizará un usuario.

Después puede utilizarse:

```javascript
await usuario.click(
    boton
);
```

---

# ¿Por qué se utiliza `await`?

La interacción puede provocar actualizaciones de React.

Por esta razón se espera a que la acción termine antes de comprobar el nuevo estado de la interfaz.

---

# Prueba de incremento

El comportamiento esperado es:

```text
Estado inicial
0

Usuario hace clic en Incrementar

Estado final
1
```

---

# Prueba de disminución

El comportamiento esperado es:

```text
Estado inicial
0

Usuario hace clic en Disminuir

Estado final
-1
```

---

# Prueba de reinicio

La prueba realiza:

```text
Incrementar
Incrementar
```

por lo que:

```text
0
↓
1
↓
2
```

Después ejecuta:

```text
Reiniciar
```

y comprueba:

```text
2 → 0
```

---

# Probar comportamiento y no solamente existencia

Existe una diferencia entre comprobar:

```text
El botón existe
```

y comprobar:

```text
El botón produce el comportamiento esperado
```

Una prueba de comportamiento puede representarse:

```text
Usuario
   │
   │ clic
   ▼
Botón
   │
   ▼
Función
   │
   ▼
Cambio de estado
   │
   ▼
Interfaz actualizada
   │
   ▼
expect()
```

---

# Pruebas manuales y automatizadas

## Prueba manual

El desarrollador:

```text
abre la aplicación
presiona un botón
observa el resultado
```

Debe repetir este proceso cada vez que quiera comprobar el comportamiento.

---

## Prueba automatizada

El código:

```text
renderiza
localiza
interactúa
compara
```

automáticamente.

---

# ¿Las pruebas automatizadas reemplazan todas las pruebas manuales?

No.

Las pruebas automatizadas complementan otros procesos.

Todavía puede ser necesario evaluar manualmente:

```text
diseño visual
experiencia de usuario
flujo completo
integraciones
comportamiento en diferentes dispositivos
```

---

# Pruebas de componentes

En este ejemplo se prueba:

```text
Contador
```

de manera aislada.

No es necesario probar toda la aplicación para verificar su comportamiento.

---

# Relación con el módulo institucional

El módulo institucional utiliza herramientas como:

```text
Jest
Enzyme
```

para probar componentes.

En este material utilizamos:

```text
Vitest
React Testing Library
```

La finalidad sigue siendo la misma:

```text
renderizar componentes
comprobar contenido
simular interacciones
verificar comportamiento
```

---

# Flujo general de una prueba

```text
PRUEBA
   │
   ▼
render(<Componente />)
   │
   ▼
DOM simulado
   │
   ▼
buscar elemento
   │
   ▼
simular interacción
   │
   ▼
React actualiza estado
   │
   ▼
DOM cambia
   │
   ▼
expect(...)
```

---

# Flujo entre varias pruebas

Gracias a:

```javascript
afterEach(() => {
    cleanup();
});
```

el proceso es:

```text
PRUEBA 1
   │
   ▼
cleanup()
   │
   ▼
DOM limpio
   │
   ▼
PRUEBA 2
   │
   ▼
cleanup()
   │
   ▼
DOM limpio
```

Esto evita que los elementos de una prueba afecten las siguientes.

---

# Resultado comprobado

Al ejecutar correctamente:

```bash
npm test
```

el proyecto debe mostrar:

```text
✓ src/tests/Contador.test.jsx (5 tests)

Test Files  1 passed
Tests       5 passed
```

Esto confirma que los cinco comportamientos definidos fueron comprobados satisfactoriamente.

---

# Reto 1 - Evitar valores negativos

Modifique el componente para impedir que el contador sea menor que:

```text
0
```

El comportamiento esperado será:

```text
0
│
│ clic Disminuir
▼
0
```

Agregue una prueba automatizada para comprobarlo.

---

# Reto 2 - Incrementar en cinco

Agregue un botón:

```text
Aumentar 5
```

El comportamiento esperado:

```text
0 → 5
```

Cree la prueba correspondiente.

---

# Reto 3 - Mensaje condicional

Cuando el valor sea mayor que:

```text
5
```

muestre:

```text
Valor alto
```

Agregue una prueba que compruebe que el mensaje aparece después de alcanzar un valor mayor a cinco.

---

# Reto 4 - Prop para valor inicial

Modifique el componente para permitir:

```jsx
<Contador
    valorInicial={10}
/>
```

El estado inicial debe ser:

```text
10
```

Agregue una prueba correspondiente.

---

# Reto 5 - Múltiples clics

Simule tres clics sobre:

```text
Incrementar
```

y compruebe:

```text
0
↓
1
↓
2
↓
3
```

---

# Reto 6 - Crear otro componente

Cree:

```text
Saludo.jsx
```

El componente debe recibir:

```text
nombre
```

mediante Props.

Por ejemplo:

```jsx
<Saludo
    nombre="Ana"
/>
```

debe mostrar:

```text
Hola, Ana
```

Cree al menos dos pruebas automatizadas para este componente.

---

# Preguntas de análisis

Después de realizar la práctica, responda:

1. ¿Qué es una prueba automatizada?
2. ¿Qué ventaja tiene ejecutar pruebas después de modificar código?
3. ¿Qué función cumple Vitest?
4. ¿Qué función cumple React Testing Library?
5. ¿Para qué se utiliza `jsdom`?
6. ¿Qué hace `render()`?
7. ¿Qué representa `screen`?
8. ¿Qué función cumple `getByRole()`?
9. ¿Por qué puede ser conveniente localizar un botón por su rol y nombre?
10. ¿Qué función cumple `expect()`?
11. ¿Qué comprueba `toBeInTheDocument()`?
12. ¿Qué comprueba `toHaveTextContent()`?
13. ¿Qué función cumple `userEvent`?
14. ¿Qué significa Arrange - Act - Assert?
15. ¿Qué comportamiento comprueba la prueba del botón Incrementar?
16. ¿Qué diferencia existe entre comprobar que un botón existe y comprobar que funciona?
17. ¿Para qué se utiliza `cleanup()`?
18. ¿Por qué se ejecuta `cleanup()` después de cada prueba?
19. ¿Qué problema podría ocurrir si varios componentes se acumulan en el DOM?
20. ¿Qué diferencia existe entre una prueba manual y una prueba automatizada?

---

# Resultado esperado

Al ejecutar:

```bash
npm run test:run
```

deben ejecutarse las cinco pruebas:

```text
✓ debe mostrar el título
✓ debe iniciar en cero
✓ debe incrementar el contador
✓ debe disminuir el contador
✓ debe reiniciar el contador
```

El resultado final debe ser:

```text
Test Files  1 passed
Tests       5 passed
```

---

# Conceptos trabajados

* pruebas automatizadas;
* pruebas de componentes;
* Vitest;
* React Testing Library;
* jsdom;
* `describe`;
* `test`;
* `expect`;
* `afterEach`;
* `cleanup`;
* `render`;
* `screen`;
* `getByRole`;
* `getByTestId`;
* `userEvent`;
* assertions;
* Arrange;
* Act;
* Assert.

---

# Conclusión

Las pruebas automatizadas permiten verificar de manera repetible que los componentes mantienen el comportamiento esperado.

En React resulta especialmente útil comprobar la interfaz desde la perspectiva de las acciones realizadas por el usuario.

El uso de Vitest y React Testing Library permite renderizar componentes, simular interacciones y verificar automáticamente los cambios producidos en la interfaz.

Además, la limpieza del DOM después de cada prueba garantiza que los casos sean independientes y que los componentes renderizados anteriormente no interfieran con las pruebas siguientes.

Este enfoque ayuda a detectar errores después de realizar modificaciones y facilita el mantenimiento de aplicaciones React de mayor tamaño.


---

## Continuar la práctica

- **Ejemplo anterior:** [Ejemplo 02 - Consumo de API con React](../ejemplo02-consumo-api/README.md)
- **Volver a la unidad:** [Unidad 3 - Desarrollo Front End con React](../README.md)
- **Volver al índice:** [Todas las unidades](../../README.md)
- **Siguiente unidad:** [Unidad 4 - Desarrollo Back End con Spring Boot](../../unidad4-backend/README.md)
