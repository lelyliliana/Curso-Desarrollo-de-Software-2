const botonSolicitar = document.getElementById("btnSolicitar");
const botonError = document.getElementById("btnError");

const respuesta = document.getElementById("respuesta");
const metodo = document.getElementById("metodo");
const url = document.getElementById("url");
const estado = document.getElementById("estado");
const json = document.getElementById("json");

const URL_SERVIDOR = "http://localhost:3000";

botonSolicitar.addEventListener("click", () => {
    realizarSolicitud("/mensaje");
});

botonError.addEventListener("click", () => {
    realizarSolicitud("/no-existe");
});

async function realizarSolicitud(ruta) {

    const urlCompleta = `${URL_SERVIDOR}${ruta}`;

    respuesta.textContent =
        "Solicitando información al servidor...";

    metodo.textContent = "GET";
    url.textContent = urlCompleta;
    estado.textContent = "Esperando respuesta...";
    json.textContent = "-";

    try {

        const response = await fetch(urlCompleta);

        estado.textContent =
            `${response.status} ${response.statusText}`;

        const datos = await response.json();

        json.textContent =
            JSON.stringify(datos, null, 2);

        if (response.ok) {

            respuesta.textContent =
                datos.mensaje;

        } else {

            respuesta.textContent =
                datos.error;

        }

    } catch (error) {

        respuesta.textContent =
            "No fue posible comunicarse con el servidor.";

        estado.textContent =
            "Sin respuesta del servidor";

        json.textContent = "-";

        console.error(
            "Error de comunicación:",
            error
        );
    }
}