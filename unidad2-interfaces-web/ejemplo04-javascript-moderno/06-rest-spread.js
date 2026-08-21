console.log("=== REST Y SPREAD ===");


// -------------------------------------
// REST
// -------------------------------------

function calcularPromedio(...notas) {

    let suma = 0;

    for (const nota of notas) {
        suma += nota;
    }

    return suma / notas.length;
}

console.log(
    "Promedio:",
    calcularPromedio(
        4.0,
        3.5,
        4.5,
        5.0
    )
);


// -------------------------------------
// SPREAD EN ARREGLOS
// -------------------------------------

const lenguajesBackend = [
    "Java",
    "Python"
];

const lenguajesFrontend = [
    "JavaScript",
    "TypeScript"
];

const todosLosLenguajes = [
    ...lenguajesBackend,
    ...lenguajesFrontend
];

console.log(
    "\nLenguajes:",
    todosLosLenguajes
);


// -------------------------------------
// COPIA DE ARREGLO
// -------------------------------------

const copiaLenguajes = [
    ...todosLosLenguajes
];

console.log(
    "Copia:",
    copiaLenguajes
);


// -------------------------------------
// SPREAD EN OBJETOS
// -------------------------------------

const estudiante = {
    nombre: "Ana",
    programa: "Ingeniería de Sistemas"
};

const estudianteCompleto = {
    ...estudiante,
    semestre: 5,
    activo: true
};

console.log(
    "\nObjeto original:",
    estudiante
);

console.log(
    "Objeto ampliado:",
    estudianteCompleto
);