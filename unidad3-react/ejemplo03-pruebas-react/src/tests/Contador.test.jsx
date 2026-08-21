import {
    render,
    screen
} from "@testing-library/react";

import userEvent
    from "@testing-library/user-event";

import {
    describe,
    expect,
    test
} from "vitest";

import Contador
    from "../components/Contador";


describe(
    "Componente Contador",
    () => {

        test(
            "debe mostrar el título",
            () => {

                render(
                    <Contador />
                );

                expect(
                    screen.getByRole(
                        "heading",
                        {
                            name: "Contador"
                        }
                    )
                ).toBeInTheDocument();
            }
        );


        test(
            "debe iniciar en cero",
            () => {

                render(
                    <Contador />
                );

                expect(
                    screen.getByTestId(
                        "valor-contador"
                    )
                ).toHaveTextContent(
                    "0"
                );
            }
        );


        test(
            "debe incrementar el contador",
            async () => {

                const usuario =
                    userEvent.setup();

                render(
                    <Contador />
                );

                const boton =
                    screen.getByRole(
                        "button",
                        {
                            name:
                                "Incrementar"
                        }
                    );

                await usuario.click(
                    boton
                );

                expect(
                    screen.getByTestId(
                        "valor-contador"
                    )
                ).toHaveTextContent(
                    "1"
                );
            }
        );


        test(
            "debe disminuir el contador",
            async () => {

                const usuario =
                    userEvent.setup();

                render(
                    <Contador />
                );

                const boton =
                    screen.getByRole(
                        "button",
                        {
                            name:
                                "Disminuir"
                        }
                    );

                await usuario.click(
                    boton
                );

                expect(
                    screen.getByTestId(
                        "valor-contador"
                    )
                ).toHaveTextContent(
                    "-1"
                );
            }
        );


        test(
            "debe reiniciar el contador",
            async () => {

                const usuario =
                    userEvent.setup();

                render(
                    <Contador />
                );

                const incrementar =
                    screen.getByRole(
                        "button",
                        {
                            name:
                                "Incrementar"
                        }
                    );

                const reiniciar =
                    screen.getByRole(
                        "button",
                        {
                            name:
                                "Reiniciar"
                        }
                    );

                await usuario.click(
                    incrementar
                );

                await usuario.click(
                    incrementar
                );

                await usuario.click(
                    reiniciar
                );

                expect(
                    screen.getByTestId(
                        "valor-contador"
                    )
                ).toHaveTextContent(
                    "0"
                );
            }
        );

    }
);