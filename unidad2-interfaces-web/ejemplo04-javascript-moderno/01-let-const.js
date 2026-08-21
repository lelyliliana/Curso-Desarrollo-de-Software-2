console.log("=== LET Y CONST ===");

let nombre = "Ana";

console.log("Nombre inicial:", nombre);

nombre = "Laura";

console.log("Nombre modificado:", nombre);


const programa = "Ingeniería de Sistemas";

console.log("Programa:", programa);


// Una constante no puede reasignarse.
// La siguiente línea produciría un error:
//
// programa = "Ingeniería Industrial";


console.log("\n=== ALCANCE DE BLOQUE ===");

if (true) {

    let mensaje = "Variable dentro del bloque";

    console.log(mensaje);
}

// La variable mensaje solo existe dentro del bloque.
// La siguiente línea produciría un error:
//
// console.log(mensaje);