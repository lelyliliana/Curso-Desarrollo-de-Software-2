// --------------------------------------------------
// 1. Obtener elementos existentes del documento
// --------------------------------------------------

const formulario =
    document.getElementById("formEstudiante");

const inputNombre =
    document.getElementById("nombre");

const inputPrograma =
    document.getElementById("programa");

const listaEstudiantes =
    document.getElementById("listaEstudiantes");

const contador =
    document.getElementById("contador");

const mensajeVacio =
    document.getElementById("mensajeVacio");

const botonEliminarTodos =
    document.getElementById("btnEliminarTodos");


// --------------------------------------------------
// 2. Arreglo donde guardaremos temporalmente
//    los estudiantes
// --------------------------------------------------

let estudiantes = [];


// --------------------------------------------------
// 3. Escuchar el envío del formulario
// --------------------------------------------------

formulario.addEventListener("submit", (event) => {

    // Evita que el navegador recargue la página.
    event.preventDefault();

    const nombre =
        inputNombre.value.trim();

    const programa =
        inputPrograma.value.trim();

    if (!nombre || !programa) {
        return;
    }

    const nuevoEstudiante = {
        id: Date.now(),
        nombre,
        programa
    };

    estudiantes.push(nuevoEstudiante);

    renderizarEstudiantes();

    formulario.reset();

    inputNombre.focus();
});


// --------------------------------------------------
// 4. Eliminar todos los estudiantes
// --------------------------------------------------

botonEliminarTodos.addEventListener("click", () => {

    estudiantes = [];

    renderizarEstudiantes();
});


// --------------------------------------------------
// 5. Eliminar un estudiante
// --------------------------------------------------

function eliminarEstudiante(id) {

    estudiantes = estudiantes.filter(
        estudiante => estudiante.id !== id
    );

    renderizarEstudiantes();
}


// --------------------------------------------------
// 6. Renderizar el contenido
// --------------------------------------------------

function renderizarEstudiantes() {

    // Elimina visualmente los elementos anteriores.
    listaEstudiantes.innerHTML = "";

    // Actualiza el contador.
    contador.textContent =
        `Total de estudiantes: ${estudiantes.length}`;

    // Controla el mensaje cuando no hay registros.
    mensajeVacio.hidden =
        estudiantes.length > 0;

    botonEliminarTodos.disabled =
        estudiantes.length === 0;


    // Recorremos el arreglo.
    estudiantes.forEach(estudiante => {

        // ------------------------------------------
        // Crear <li>
        // ------------------------------------------

        const item =
            document.createElement("li");

        item.classList.add("estudiante");


        // ------------------------------------------
        // Crear contenedor de información
        // ------------------------------------------

        const informacion =
            document.createElement("div");

        informacion.classList.add(
            "estudiante-info"
        );


        // ------------------------------------------
        // Crear nombre
        // ------------------------------------------

        const nombre =
            document.createElement("span");

        nombre.classList.add(
            "estudiante-nombre"
        );

        nombre.textContent =
            estudiante.nombre;


        // ------------------------------------------
        // Crear programa
        // ------------------------------------------

        const programa =
            document.createElement("span");

        programa.classList.add(
            "estudiante-programa"
        );

        programa.textContent =
            estudiante.programa;


        // ------------------------------------------
        // Crear botón Eliminar
        // ------------------------------------------

        const botonEliminar =
            document.createElement("button");

        botonEliminar.type = "button";

        botonEliminar.textContent =
            "Eliminar";

        botonEliminar.classList.add(
            "boton-eliminar"
        );


        // ------------------------------------------
        // Evento del botón
        // ------------------------------------------

        botonEliminar.addEventListener(
            "click",
            () => {
                eliminarEstudiante(
                    estudiante.id
                );
            }
        );


        // ------------------------------------------
        // Construir estructura DOM
        // ------------------------------------------

        informacion.appendChild(nombre);

        informacion.appendChild(programa);

        item.appendChild(informacion);

        item.appendChild(botonEliminar);

        listaEstudiantes.appendChild(item);
    });
}


// --------------------------------------------------
// 7. Estado inicial
// --------------------------------------------------

renderizarEstudiantes();