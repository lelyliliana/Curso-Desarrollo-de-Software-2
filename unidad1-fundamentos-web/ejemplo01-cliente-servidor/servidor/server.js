const http = require("http");

const HOST = "localhost";
const PORT = 3000;

const servidor = http.createServer((request, response) => {
    console.log(`Solicitud recibida: ${request.method} ${request.url}`);

    // Permite que el cliente pueda comunicarse con este servidor
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    };

    // Ruta existente
    if (request.method === "GET" && request.url === "/mensaje") {
        const datos = {
            mensaje: "Hola desde el servidor"
        };

        response.writeHead(200, headers);
        response.end(JSON.stringify(datos));
        return;
    }

    // Cualquier ruta que no exista
    response.writeHead(404, headers);

    response.end(
        JSON.stringify({
            error: "Recurso no encontrado"
        })
    );
});

servidor.listen(PORT, HOST, () => {
    console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
});