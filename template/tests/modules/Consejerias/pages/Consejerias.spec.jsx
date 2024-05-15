import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
//import { Consejerias } from "../../../../src/modules/Consejerias/pages/Consejerias";
import { Consejerias } from "../../../../src/modules/Consejerias/pages/Consejerias";
import { MemoryRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";


describe('Consejerias test:', () => {
    afterEach(cleanup);
    
    //https://stackoverflow.com/questions/70029935/react-router-v6-usenavigate-may-be-used-only-in-the-context-of-a-router-co
    it('se renderiza el componente', () => {
        render(<Router><Consejerias /></Router>);
    });

    it('renderiza el titulo', () => {
        render(<Router><Consejerias /></Router>);
        screen.getByText('Consejerias');
    });

    it('si accionamos el botón se cambia el titulo', async () => {
        render(<Router><Consejerias /></Router>);

        fireEvent.click(screen.getByText(/Cambiar Titulo/i))

        await screen.findByText("Demo")
    });

});