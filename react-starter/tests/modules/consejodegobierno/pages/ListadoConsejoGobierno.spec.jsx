import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";
import { ListadoConsejoGobierno } from "../../../../src/modules/consejodegobierno"

describe('ListadoConsejoGobierno test:', () => {
    afterEach(cleanup);

    //https://stackoverflow.com/questions/70029935/react-router-v6-usenavigate-may-be-used-only-in-the-context-of-a-router-co
    it('se renderiza el componente', () => {
        render(<Router><ListadoConsejoGobierno /></Router>);
    });

    it('renderiza el titulo', () => {
        render(<Router><ListadoConsejoGobierno /></Router>);
        screen.getByText('Consejo de Gobierno');
    });

    it('si accionamos el botón se cambia el titulo', async () => {
        render(<Router><ListadoConsejoGobierno /></Router>);

        fireEvent.click(screen.getByText(/Cambia Título/i))

        await screen.findByText("Titulo cambiado")
    });

    it('aparece el item Presidencia', async () => {
        render(<Router><ListadoConsejoGobierno /></Router>);

        await screen.findByText("Presidencia")
    });

});