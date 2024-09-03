import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, it, vi } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";
import { ListadoConsejoGobierno, useListConsejoGobierno } from "../../../../../src/modules/consejodegobierno";
import fetchMock from "fetch-mock";
import { mockConsejodeGobiernoData } from "../../../mocks/mockData";
import { mockUseListConsejoDeGobierno } from "../mocks/mocksConsejoDeGobierno";
import { ModalProvider } from "../../../../../src/core";


//Test unitario -> hacerlo con mock
vi.mock('../../../../../src/modules/consejodegobierno/hooks/useListConsejoGobierno');

describe('ListadoConsejoGobierno test:', () => {
    // Limpiamos los mocks antes de cada prueba
    beforeEach(() => {
        fetchMock.reset();
    });

    afterEach(cleanup);

    //https://stackoverflow.com/questions/70029935/react-router-v6-usenavigate-may-be-used-only-in-the-context-of-a-router-co
    it('se renderiza el componente', () => {
        useListConsejoGobierno.mockReturnValue(mockUseListConsejoDeGobierno);
        render(<Router><ModalProvider><ListadoConsejoGobierno /></ModalProvider></Router>);

    });

    it('renderiza el titulo', () => {
        useListConsejoGobierno.mockReturnValue(mockUseListConsejoDeGobierno);
        render(<Router><ModalProvider><ListadoConsejoGobierno /></ModalProvider></Router>);
        screen.getByText('Consejo de Gobierno');
    });



    it('aparece el item Presidencia (mockeado el useListItems)', async () => {
        useListConsejoGobierno.mockReturnValue({
            cabecera: {},
            items: [
                {
                    "consejeria": "Presidencia",
                    "consejeriaLink": "https://www.juntaex.es/lajunta/presidencia",
                    "persona": "María Guardiola Martín",
                    "personaLink": "https://www.juntaex.es/lajunta/presidencia/presidenta",
                    "imageLink": "https://www.juntaex.es/documents/77055/110425/Presidenta+-+Mar%C3%ADa+Guardiola+Mart%C3%ADn3.png"
                },
                {
                    "consejeria": "Consejería de Presidencia, Interior y Diálogo Social",
                    "consejeriaLink": "https://www.juntaex.es/lajunta/consejeria-de-presidencia-interior-y-dialogo-social",
                    "persona": "Abel Bautista Morán",
                    "personaLink": "https://www.juntaex.es/lajunta/consejeria-de-presidencia-interior-y-dialogo-social/consejero",
                    "imageLink": "https://www.juntaex.es/documents/77055/110425/Consejero+de+Presidencia%2C+Interior+y+Di%C3%A1logo+Social+-+Abel+Bautista+Mor%C3%A1n3.png"
                },
            ]
        })

        render(<Router><ModalProvider><ListadoConsejoGobierno /></ModalProvider></Router>);

        await screen.findByText("Presidencia")
    });







});