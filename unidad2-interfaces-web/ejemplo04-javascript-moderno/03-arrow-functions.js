console.log("=== ARROW FUNCTIONS ===");


// Función tradicional

function sumarTradicional(a, b) {
    return a + b;
}

console.log(
    "Suma tradicional:",
    sumarTradicional(4, 6)
);


// Función flecha

const sumar = (a, b) => {
    return a + b;
};

console.log(
    "Suma con arrow function:",
    sumar(4, 6)
);


// Retorno implícito

const multiplicar =
    (a, b) => a * b;

console.log(
    "Multiplicación:",
    multiplicar(5, 3)
);


// Un solo parámetro

const saludar =
    nombre => `Hola, ${nombre}`;

console.log(
    saludar("Laura")
);


// Parámetro por defecto

const presentar =
    (nombre, programa = "Ingeniería de Sistemas") =>
        `${nombre} estudia ${programa}`;

console.log(
    presentar("Ana")
);

console.log(
    presentar(
        "Carlos",
        "Ingeniería Industrial"
    )
);