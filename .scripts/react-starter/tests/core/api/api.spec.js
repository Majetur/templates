import { test, expect, beforeEach } from 'vitest';
import fetchMock from 'fetch-mock';
import { api } from "../../../src/core";

// Datos de prueba (mockData) obtenidos de la URL real
const mockConsejodeGobiernoData = [
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
];

// Limpiamos los mocks antes de cada prueba
beforeEach(() => {
    fetchMock.reset();
});

// Prueba para la función consejodegobierno
test('consejodegobierno fetches data correctly', async () => {
    // Configuramos el servidor falso
    fetchMock.get('https://pruebasso.acaex.es/pruebasso/public/consejogobierno', mockConsejodeGobiernoData);

    // Llamamos a nuestra función que queremos probar
    const result = await api.consejodegobierno();

    // Verificamos que nuestra función devolvió los datos falsos que esperamos
    expect(result).toEqual(mockConsejodeGobiernoData);
    expect(fetchMock.called()).toBe(true);
});