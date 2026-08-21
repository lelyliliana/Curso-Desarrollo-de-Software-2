console.log("=== DESTRUCTURING ===");


// -------------------------------------
// Destructuring de arreglos
// -------------------------------------

const lenguajes = [
    "Java",
    "JavaScript",
    "Python"
];

const [
    primero,
    segundo,
    tercero
] = lenguajes;

console.log(
    "Primer lenguaje:",
    primero
);

console.log(
    "Segundo lenguaje:",
    segundo
);

console.log(
    "Tercer lenguaje:",
    tercero
);


// -------------------------------------
// Destructuring de objetos
// -------------------------------------

const estudiante = {
    nombre: "Ana",
    programa: "Ingeniería de Sistemas",
    semestre: 5
};

const {
    nombre,
    programa,
    semestre
} = estudiante;

console.log("\nDatos del estudiante:");

console.log(nombre);
console.log(programa);
console.log(semestre);


// -------------------------------------
// Renombrar una propiedad
// -------------------------------------

const docente = {
    nombre: "Laura",
    curso: "Desarrollo de Software II"
};

const {
    nombre: nombreDocente,
    curso
} = docente;

console.log(
    `Docente: ${nombreDocente}`
);

console.log(
    `Curso: ${curso}`
);