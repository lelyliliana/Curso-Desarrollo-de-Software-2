console.log("=== CLASES ===");

class Persona {

    constructor(nombre) {
        this.nombre = nombre;
    }

    presentarse() {

        return `Hola, soy ${this.nombre}`;
    }
}


class Estudiante extends Persona {

    constructor(
        nombre,
        programa
    ) {

        super(nombre);

        this.programa =
            programa;
    }

    presentarse() {

        return `${super.presentarse()} y estudio ${this.programa}`;
    }

    static descripcion() {

        return "Clase utilizada para representar estudiantes";
    }
}


const estudiante =
    new Estudiante(
        "Ana",
        "Ingeniería de Sistemas"
    );

console.log(
    estudiante.presentarse()
);

console.log(
    Estudiante.descripcion()
);