import { beforeEach, describe, expect, test, vi } from 'vitest';
import fetchMock from 'fetch-mock';

import { apiPublic as api } from '../../../../src/core/api/api';
import { mockConsejodeGobiernoData, mockAplicaciones } from '../../mocks/mockData';

vi.mock('../../../../src/core/api/fetchBackEnd');


describe('API Public Tests', () => {

    // Limpiamos los mocks antes de cada prueba
    beforeEach(() => {
        fetchMock.reset();
    });

    // Prueba para la función consejodegobierno
    test('consejodegobierno obtiene los datos correctamente', async () => {
        // Configuramos el servidor falso
        fetchMock.get('https://pruebasso.acaex.es/pruebasso/public/consejogobierno', mockConsejodeGobiernoData);

        // Llamamos a nuestra función que queremos probar
        const result = await api.consejodegobierno();

        // Verificamos que nuestra función devolvió los datos falsos que esperamos
        expect(result).toEqual(mockConsejodeGobiernoData);
        expect(fetchMock.called()).toBe(true);
    });


    test('aplicaciones obtiene los datos correctamente', async () => {
        // Configuramos el servidor falso
        fetchMock.get('https://pruebasso.acaex.es/pruebasso/public/aplicaciones?page=1&pagesize=10', mockAplicaciones);

        // Llamamos a nuestra función que queremos probar
        const result = await api.aplicaciones(1, 10);

        // Verificamos que nuestra función devolvió los datos falsos que esperamos
        expect(result).toEqual(mockAplicaciones);
        expect(fetchMock.called()).toBe(true);
    });

})
