const http = require("http");

const HOST = "localhost";
const PORT = 3000;

// Datos almacenados temporalmente en memoria.
let estudiantes = [
    {
        id: 1,
        nombre: "Ana",
        programa: "Ingeniería de Sistemas"
    },
    {
        id: 2,
        nombre: "Carlos",
        programa: "Ingeniería Industrial"
    }
];

// --------------------------------------------------
// Función para responder en formato JSON
// --------------------------------------------------

function responderJSON(response, statusCode, datos, headersAdicionales = {}) {
    response.writeHead(statusCode, {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        ...headersAdicionales
    });

    if (datos === null) {
        response.end();
        return;
    }

    response.end(JSON.stringify(datos, null, 2));
}

// --------------------------------------------------
// Función para obtener el cuerpo del Request
// --------------------------------------------------

function leerBody(request) {
    return new Promise((resolve, reject) => {
        let body = "";

        request.on("data", chunk => {
            body += chunk.toString();
        });

        request.on("end", () => {
            if (!body) {
                resolve(null);
                return;
            }

            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(new Error("JSON inválido"));
            }
        });

        request.on("error", reject);
    });
}

// --------------------------------------------------
// Creación del servidor
// --------------------------------------------------

const servidor = http.createServer(async (request, response) => {

    console.log("\n----------------------------------------");
    console.log(`Método: ${request.method}`);
    console.log(`URL: ${request.url}`);
    console.log("Headers:");
    console.log(request.headers);

    const url = new URL(
        request.url,
        `http://${request.headers.host}`
    );

    const ruta = url.pathname;

    // --------------------------------------------------
    // OPTIONS
    // --------------------------------------------------

    if (request.method === "OPTIONS") {
        response.writeHead(204, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
                "GET, POST, PUT, PATCH, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
                "Content-Type"
        });

        response.end();
        return;
    }

    // --------------------------------------------------
    // GET /estudiantes
    // Consultar todos los estudiantes
    // --------------------------------------------------

    if (
        request.method === "GET" &&
        ruta === "/estudiantes"
    ) {
        responderJSON(
            response,
            200,
            estudiantes
        );

        return;
    }

    // --------------------------------------------------
    // GET /estudiantes/:id
    // Consultar estudiante por ID
    // --------------------------------------------------

    if (
        request.method === "GET" &&
        ruta.startsWith("/estudiantes/")
    ) {
        const id = Number(
            ruta.split("/")[2]
        );

        const estudiante = estudiantes.find(
            estudiante => estudiante.id === id
        );

        if (!estudiante) {
            responderJSON(
                response,
                404,
                {
                    error: "Estudiante no encontrado"
                }
            );

            return;
        }

        responderJSON(
            response,
            200,
            estudiante
        );

        return;
    }

    // --------------------------------------------------
    // POST /estudiantes
    // Crear un estudiante
    // --------------------------------------------------

    if (
        request.method === "POST" &&
        ruta === "/estudiantes"
    ) {
        try {
            const datos = await leerBody(request);

            if (
                !datos ||
                !datos.nombre ||
                !datos.programa
            ) {
                responderJSON(
                    response,
                    400,
                    {
                        error:
                            "Los campos nombre y programa son obligatorios"
                    }
                );

                return;
            }

            const nuevoEstudiante = {
                id:
                    estudiantes.length > 0
                        ? Math.max(
                            ...estudiantes.map(
                                estudiante => estudiante.id
                            )
                        ) + 1
                        : 1,

                nombre: datos.nombre,
                programa: datos.programa
            };

            estudiantes.push(nuevoEstudiante);

            responderJSON(
                response,
                201,
                nuevoEstudiante,
                {
                    Location:
                        `/estudiantes/${nuevoEstudiante.id}`
                }
            );

        } catch (error) {

            responderJSON(
                response,
                400,
                {
                    error: error.message
                }
            );
        }

        return;
    }

    // --------------------------------------------------
    // PUT /estudiantes/:id
    // Reemplazar completamente un estudiante
    // --------------------------------------------------

    if (
        request.method === "PUT" &&
        ruta.startsWith("/estudiantes/")
    ) {
        try {
            const id = Number(
                ruta.split("/")[2]
            );

            const indice = estudiantes.findIndex(
                estudiante => estudiante.id === id
            );

            if (indice === -1) {
                responderJSON(
                    response,
                    404,
                    {
                        error:
                            "Estudiante no encontrado"
                    }
                );

                return;
            }

            const datos = await leerBody(request);

            if (
                !datos ||
                !datos.nombre ||
                !datos.programa
            ) {
                responderJSON(
                    response,
                    400,
                    {
                        error:
                            "PUT requiere nombre y programa"
                    }
                );

                return;
            }

            estudiantes[indice] = {
                id,
                nombre: datos.nombre,
                programa: datos.programa
            };

            responderJSON(
                response,
                200,
                estudiantes[indice]
            );

        } catch (error) {

            responderJSON(
                response,
                400,
                {
                    error: error.message
                }
            );
        }

        return;
    }

    // --------------------------------------------------
    // PATCH /estudiantes/:id
    // Modificar parcialmente un estudiante
    // --------------------------------------------------

    if (
        request.method === "PATCH" &&
        ruta.startsWith("/estudiantes/")
    ) {
        try {
            const id = Number(
                ruta.split("/")[2]
            );

            const estudiante = estudiantes.find(
                estudiante => estudiante.id === id
            );

            if (!estudiante) {
                responderJSON(
                    response,
                    404,
                    {
                        error:
                            "Estudiante no encontrado"
                    }
                );

                return;
            }

            const datos = await leerBody(request);

            if (!datos) {
                responderJSON(
                    response,
                    400,
                    {
                        error:
                            "Debe enviar información para actualizar"
                    }
                );

                return;
            }

            if (datos.nombre !== undefined) {
                estudiante.nombre =
                    datos.nombre;
            }

            if (datos.programa !== undefined) {
                estudiante.programa =
                    datos.programa;
            }

            responderJSON(
                response,
                200,
                estudiante
            );

        } catch (error) {

            responderJSON(
                response,
                400,
                {
                    error: error.message
                }
            );
        }

        return;
    }

    // --------------------------------------------------
    // DELETE /estudiantes/:id
    // Eliminar un estudiante
    // --------------------------------------------------

    if (
        request.method === "DELETE" &&
        ruta.startsWith("/estudiantes/")
    ) {
        const id = Number(
            ruta.split("/")[2]
        );

        const indice = estudiantes.findIndex(
            estudiante => estudiante.id === id
        );

        if (indice === -1) {
            responderJSON(
                response,
                404,
                {
                    error:
                        "Estudiante no encontrado"
                }
            );

            return;
        }

        estudiantes.splice(indice, 1);

        responderJSON(
            response,
            204,
            null
        );

        return;
    }

    // --------------------------------------------------
    // Ruta no encontrada
    // --------------------------------------------------

    responderJSON(
        response,
        404,
        {
            error: "Recurso no encontrado"
        }
    );
});

// --------------------------------------------------
// Inicio del servidor
// --------------------------------------------------

servidor.listen(PORT, HOST, () => {
    console.log(
        `Servidor HTTP ejecutándose en http://${HOST}:${PORT}`
    );
});