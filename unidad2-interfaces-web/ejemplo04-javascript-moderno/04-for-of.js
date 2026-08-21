console.log("=== FOR...OF ===");

const lenguajes = [
    "Java",
    "JavaScript",
    "Python",
    "C++"
];

console.log("\nRecorrido con for...of:");

for (const lenguaje of lenguajes) {

    console.log(lenguaje);
}


console.log("\nEstudiantes:");

const estudiantes = [
    {
        nombre: "Ana",
        promedio: 4.5
    },
    {
        nombre: "Carlos",
        promedio: 3.8
    },
    {
        nombre: "Laura",
        promedio: 4.2
    }
];

for (const estudiante of estudiantes) {

    console.log(
        `${estudiante.nombre}: ${estudiante.promedio}`
    );
}