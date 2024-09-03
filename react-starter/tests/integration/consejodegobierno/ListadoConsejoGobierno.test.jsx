import { render, screen, waitFor } from "@testing-library/react";
import { describe, it } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";

import { ModalProvider } from '../../../src/core/custom_modal/hooks/ModalProvider';
import { ListadoConsejoGobiernoCRUD } from '../../../src/modules/consejodegobierno/pages/ListadoConsejoGobiernoCRUD';

describe('ListadoConsejoGobierno (Integración real con API)', () => {
    it('Debe renderizar el listado de Consejo de Gobierno desde la API eral', async () => {
        // Renderizamos el componente, lo que provocará que el hook useListColaboradores haga una llamada a la API real
        render(<Router><ModalProvider><ListadoConsejoGobiernoCRUD /></ModalProvider></Router>);


        // Verificamos que el mensaje de carga se muestre inicialmente
        screen.getByText('Cargando...')

        // Esperamos a que los datos se carguen y verifiquemos que se muestran en la UI
        await waitFor(() => {
            // Asegúrate de que la API devuelva datos con estos valores para que la prueba pase
            screen.getByText('Presidencia')
            screen.getByText('María Guardiola Martín')
        });
    });

    // it('si accionamos el botón se muestra el toast', async () => {
    //     render(<ModalProvider><Router><ListadoConsejoGobierno /></Router></ModalProvider>);
    //     fireEvent.click(screen.getByText(/Mostrar toast/i))
    //     await screen.findByText("Boton clickado")
    // });
});