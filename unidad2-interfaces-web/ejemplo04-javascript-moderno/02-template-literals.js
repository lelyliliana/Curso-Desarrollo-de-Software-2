console.log("=== TEMPLATE LITERALS ===");

const nombre = "Carlos";
const programa = "Ingeniería de Sistemas";
const semestre = 4;


// Forma tradicional

const mensajeTradicional =
    "El estudiante " +
    nombre +
    " pertenece al programa " +
    programa +
    " y cursa el semestre " +
    semestre +
    ".";

console.log("\nForma tradicional:");

console.log(mensajeTradicional);


// Template literal

const mensajeModerno =
    `El estudiante ${nombre} pertenece al programa ${programa} y cursa el semestre ${semestre}.`;

console.log("\nTemplate literal:");

console.log(mensajeModerno);


// Expresiones dentro de la plantilla

const nota1 = 4.0;
const nota2 = 3.5;

console.log(
    `Promedio: ${(nota1 + nota2) / 2}`
);