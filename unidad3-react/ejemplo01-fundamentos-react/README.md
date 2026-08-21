# Ejemplo 01 - Fundamentos de React

## Unidad 3 - Desarrollo Front End con React

Los fundamentos de React utilizados en esta unidad ya se encuentran desarrollados mediante laboratorios progresivos en el repositorio del curso **Lenguaje de Programación II**.

Por esta razón, no se duplicará el mismo código dentro de este repositorio.

El estudiante utilizará esos laboratorios como material práctico para estudiar React desde la configuración del entorno hasta la construcción, integración y publicación de una aplicación.

---

# Objetivo de aprendizaje

Al finalizar la revisión de estos recursos, el estudiante estará en capacidad de:

* preparar un entorno React utilizando Vite;
* comprender la estructura básica de un proyecto React;
* utilizar JSX;
* crear componentes;
* dividir una interfaz mediante componentización;
* reutilizar componentes mediante Props;
* administrar estado mediante `useState`;
* responder a eventos;
* generar listas dinámicas;
* utilizar renderizado condicional;
* construir formularios controlados;
* utilizar `useEffect`;
* consumir APIs externas;
* generar una versión de producción;
* publicar una aplicación React.

---

# Recurso principal

Consulte el módulo completo:

[React - Lenguaje de Programación II](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react)

El módulo está organizado mediante laboratorios progresivos.

---

# Ruta de aprendizaje

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

# Laboratorio 01 - Entorno React con Vite

[Consultar laboratorio 01](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/01-entorno-react-vite)

Permite preparar el entorno de desarrollo utilizando:

* Node.js;
* npm;
* React;
* Vite;
* Visual Studio Code.

---

# ¿Por qué Vite?

El módulo institucional original utiliza `create-react-app`.

En estos recursos se utiliza Vite para trabajar con un entorno React moderno y ligero.

El objetivo sigue siendo el mismo:

```text
crear una aplicación React
        │
        ▼
ejecutarla localmente
        │
        ▼
desarrollar componentes
```

---

# Laboratorio 02 - Conociendo React

[Consultar laboratorio 02](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/02-conociendo-react)

Este laboratorio permite comprender la estructura generada por Vite y reconocer los archivos principales de una aplicación React.

---

# Organización general

Una estructura simplificada es:

```text
proyecto-react/
│
├── public/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

# Laboratorio 03 - Primeros componentes

[Consultar laboratorio 03](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/03-primeros-componentes)

Introduce:

```text
JSX
componentes
renderizado
```

---

# JSX

JSX permite escribir una estructura similar a HTML dentro del código JavaScript.

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

---

# Componentes

Una aplicación React puede dividirse en pequeñas piezas reutilizables.

Por ejemplo:

```text
APP
│
├── HEADER
├── MENU
├── CONTENIDO
│   ├── TARJETA
│   ├── TARJETA
│   └── TARJETA
└── FOOTER
```

Cada sección puede convertirse en un componente independiente.

---

# Laboratorio 04 - Componentización

[Consultar laboratorio 04](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/04-componentizacion)

Este laboratorio permite reorganizar una interfaz separando responsabilidades.

La idea principal es:

```text
INTERFAZ GRANDE
       │
       ▼
COMPONENTES PEQUEÑOS
       │
       ├── reutilizables
       ├── organizados
       └── con responsabilidad clara
```

---

# Laboratorio 05 - Props

[Consultar laboratorio 05](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/05-props)

Props permiten enviar información desde un componente hacia otro.

Conceptualmente:

```text
COMPONENTE PADRE
       │
       │ Props
       ▼
COMPONENTE HIJO
```

---

# Ejemplo conceptual

```jsx
<TarjetaCurso
    nombre="Desarrollo de Software II"
    creditos={3}
/>
```

El componente recibe datos y puede utilizarlos para construir la interfaz.

---

# Laboratorio 06 - Estado y eventos

[Consultar laboratorio 06](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/06-estado-eventos)

Este laboratorio utiliza estado y eventos.

En React moderno, el estado puede administrarse mediante:

```text
useState
```

---

# Estado

El estado representa información que puede cambiar durante la ejecución.

Por ejemplo:

```text
contador
estudiante seleccionado
contenido de formulario
lista de elementos
```

Cuando el estado cambia, React actualiza la interfaz correspondiente.

---

# Diferencia con el módulo institucional

El módulo institucional presenta principalmente state asociado con componentes basados en clases.

En estos laboratorios se utiliza el enfoque moderno basado en:

```text
componentes funcionales
+
hooks
```

El concepto sigue siendo el mismo:

```text
ESTADO CAMBIA
      │
      ▼
INTERFAZ SE ACTUALIZA
```

---

# Laboratorio 07 - Listas y renderizado condicional

[Consultar laboratorio 07](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/07-listas-condicionales)

Permite generar elementos dinámicamente a partir de datos.

Por ejemplo:

```text
ARREGLO DE CURSOS
       │
       ▼
     map()
       │
       ▼
COMPONENTES
```

También introduce decisiones relacionadas con qué elementos deben mostrarse.

---

# Laboratorio 08 - Formularios

[Consultar laboratorio 08](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/08-formularios)

Introduce formularios controlados.

Esto permite relacionar:

```text
INPUT
  │
  ▼
ESTADO
  │
  ▼
REACT
```

Los valores de los controles pueden administrarse desde el estado de la aplicación.

---

# Laboratorio 09 - Efectos

[Consultar laboratorio 09](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/09-efectos)

Este laboratorio utiliza:

```text
useEffect
```

para ejecutar efectos relacionados con el ciclo de vida de un componente funcional.

---

# Relación con componentDidMount

El módulo institucional presenta:

```text
componentDidMount
```

dentro de componentes basados en clases.

En React moderno, muchos de esos casos pueden abordarse mediante:

```text
useEffect
```

Por ejemplo, ejecutar una operación cuando un componente se carga.

---

# Laboratorio 10 - Consumo de APIs

[Consultar laboratorio 10](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/10-consumo-api)

Este laboratorio es especialmente importante para Desarrollo de Software II.

Permite integrar:

```text
REACT
   │
   │ Request HTTP
   ▼
API EXTERNA
   │
   │ Response JSON
   ▼
REACT
```

Aquí vuelven a utilizarse conceptos estudiados en la Unidad 1:

* cliente;
* servidor;
* HTTP;
* Request;
* Response;
* JSON;
* `fetch()`.

---

# Laboratorio 11 - Integración y publicación

[Consultar laboratorio 11](https://github.com/lelyliliana/Curso-Lenguaje-de-Programacion-2/tree/main/react/11-integracion-publicacion)

El último laboratorio integra los conceptos trabajados y genera una versión lista para producción.

---

# Construcción para producción

Se utiliza:

```bash
npm run build
```

Posteriormente puede verificarse mediante:

```bash
npm run preview
```

---

# Evolución conceptual

Los laboratorios permiten avanzar:

```text
HTML + CSS + JavaScript
        │
        ▼
Aplicación React
        │
        ▼
Componentes
        │
        ▼
Props
        │
        ▼
Estado
        │
        ▼
Eventos
        │
        ▼
Formularios
        │
        ▼
Efectos
        │
        ▼
Consumo de APIs
        │
        ▼
Aplicación integrada
```

---

# Relación con Desarrollo de Software II

Esta unidad utiliza React como tecnología Front End.

Posteriormente se trabajará con un Back End.

La arquitectura general será:

```text
USUARIO
   │
   ▼
REACT
Front End
   │
   │ HTTP / JSON
   ▼
BACK END
```

Y más adelante:

```text
REACT
   │
   │ HTTP / JSON
   ▼
SPRING BOOT
   │
   ▼
BASE DE DATOS
```

---

# Antes de continuar

Compruebe que puede explicar:

1. ¿Qué es React?
2. ¿Qué es Vite?
3. ¿Qué es JSX?
4. ¿Qué es un componente?
5. ¿Por qué resulta útil dividir una interfaz en componentes?
6. ¿Qué son Props?
7. ¿Qué representa el estado?
8. ¿Qué función cumple `useState`?
9. ¿Cómo se manejan eventos en React?
10. ¿Cómo puede generarse una lista de componentes?
11. ¿Qué es un formulario controlado?
12. ¿Qué función cumple `useEffect`?
13. ¿Cómo puede React consumir una API?
14. ¿Qué formato suele recibir de una API?
15. ¿Qué función cumple `npm run build`?

---

# Conceptos retomados

* React;
* Vite;
* JSX;
* componentes;
* componentización;
* Props;
* estado;
* eventos;
* `useState`;
* listas;
* renderizado condicional;
* formularios controlados;
* `useEffect`;
* Fetch API;
* APIs;
* JSON;
* build de producción.

---

# Conclusión

Los fundamentos de React requeridos en Desarrollo de Software II se encuentran desarrollados de forma progresiva en el repositorio de Lenguaje de Programación II.

En lugar de duplicar los mismos proyectos, este curso utiliza esos laboratorios como fuente de referencia y concentra sus recursos propios en los contenidos adicionales que requieren un tratamiento específico.

El siguiente paso dentro de esta unidad será profundizar en el consumo de APIs y en las pruebas de componentes React.
