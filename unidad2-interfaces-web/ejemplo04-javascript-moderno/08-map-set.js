console.log("=== MAP ===");

const estudiantes = new Map();

estudiantes.set(
    1,
    "Ana"
);

estudiantes.set(
    2,
    "Carlos"
);

estudiantes.set(
    3,
    "Laura"
);

console.log(
    "Cantidad:",
    estudiantes.size
);

console.log(
    "Estudiante 2:",
    estudiantes.get(2)
);

console.log(
    "¿Existe ID 3?",
    estudiantes.has(3)
);


console.log("\nRecorrido del Map:");

for (
    const [id, nombre]
    of estudiantes
) {

    console.log(
        `${id}: ${nombre}`
    );
}


// -------------------------------------
// SET
// -------------------------------------

console.log("\n=== SET ===");

const lenguajes = new Set();

lenguajes.add("Java");
lenguajes.add("JavaScript");
lenguajes.add("Python");

// Intento repetido
lenguajes.add("Java");

console.log(
    "Cantidad:",
    lenguajes.size
);

console.log(
    "Valores:",
    [...lenguajes]
);

console.log(
    "¿Contiene Java?",
    lenguajes.has("Java")
);

lenguajes.delete("Python");

console.log(
    "Después de eliminar Python:",
    [...lenguajes]
);