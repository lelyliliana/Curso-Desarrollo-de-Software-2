import { useState } from "react";

function Contador() {

    const [contador, setContador] =
        useState(0);

    const incrementar = () => {
        setContador(
            valorActual =>
                valorActual + 1
        );
    };

    const disminuir = () => {
        setContador(
            valorActual =>
                valorActual - 1
        );
    };

    const reiniciar = () => {
        setContador(0);
    };

    return (
        <section>
            <h2>
                Contador
            </h2>

            <p>
                Valor actual:
                {" "}
                <span data-testid="valor-contador">
                    {contador}
                </span>
            </p>

            <button
                onClick={incrementar}
            >
                Incrementar
            </button>

            <button
                onClick={disminuir}
            >
                Disminuir
            </button>

            <button
                onClick={reiniciar}
            >
                Reiniciar
            </button>
        </section>
    );
}

export default Contador;