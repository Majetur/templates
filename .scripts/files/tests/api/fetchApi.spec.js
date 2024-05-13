import { describe, expect, it, vi } from "vitest";
import { fetchApi } from "../../src/api/fetchApi";

function createFetchResponse(status, data) {
    return Promise.resolve({
        status: status,
        json: () => Promise.resolve(data),
    });
}

describe('fetchApi',  () => {
    it('debe ser una función', () => {
        expect(typeof fetchApi).toBe('function');
    });

    it('llama a fetch con la url pasada', async() => {
        vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))
        
        await fetchApi("/url/de/prueba")

        expect(fetch).toHaveBeenCalledWith(expect.stringContaining('prueba'))
    });

    it('puede devolver una respuesta 200', async() => {
        vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))
        
        expect((await fetchApi()).status).toBe(200)
    });

    it('devuelve excepcion si respuesta es 400', async() => {
        vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(400, {message: "cadena"}))
        
        expect(async () => (await fetchApi())).rejects.toThrowError("cadena")
    });

});