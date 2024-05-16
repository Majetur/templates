import { describe, expect, it, vi } from "vitest";
import { fetchApi } from "../../src/api/fetchApi";

function createFetchResponse(status, data) {
    return Promise.resolve({
        status: status,
        json: () => Promise.resolve(data),
    });
}

const fakeendpoint = "/endpoint" //"https//fakeendpoint.com"

describe('fetchApi', () => {

    it('debe ser una función', () => {
        expect(typeof fetchApi).toBe('function');
    });


    it('llama a fetch con la url pasada', async () => {
        vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

        await fetchApi(fakeendpoint)

        expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.anything())
    });

    // MARK: Status
    describe("status", () => {
        it('puede devolver una respuesta 200 - Success', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            expect((await fetchApi(fakeendpoint)).status).toBe(200)
        });

        it('devuelve respuesta 201 - Created', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(201))

            expect((await fetchApi(fakeendpoint)).status).toBe(201)
        });

        it('devuelve respuesta 202 - Accepted', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(202))

            expect((await fetchApi(fakeendpoint)).status).toBe(202)
        });

        it('devuelve respuesta 204 - No content', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(204))

            expect((await fetchApi(fakeendpoint)).status).toBe(204)
        });

        it('devuelve excepcion si respuesta es 400 - Bad Request', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(400, { message: "cadena" }))

            expect(async () => (await fetchApi(fakeendpoint))).rejects.toThrowError("cadena")
        });

        it('devuelve excepcion si respuesta es 404 - Not Found', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(404, { message: "cadena" }))

            expect(async () => (await fetchApi(fakeendpoint))).rejects.toThrowError("cadena")
        });

        it('gestiona el 401 - Unauthorized con un callback', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(401, { message: "cadena" }))
            const callbackMock = vi.fn()

            await fetchApi(fakeendpoint, { onUnauthorized: callbackMock })

            expect(callbackMock).toHaveBeenCalledTimes(1)
        });
    })

    // MARK: Methods
    describe("metodos", () => {
        it('se puede usar el metodo GET', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            await fetchApi(fakeendpoint, { method: 'GET' })

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.objectContaining({ method: 'GET' }))
        })

        it('por defecto se usa el metodo GET', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            await fetchApi(fakeendpoint)

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.objectContaining({ method: 'GET' }))
        })

        it('se puede usar el metodo POST', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            await fetchApi(fakeendpoint, { method: 'POST' })

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.objectContaining({ method: 'POST' }))
        })

        it('se puede usar el metodo PUT', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            await fetchApi(fakeendpoint, { method: 'PUT' })

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.objectContaining({ method: 'PUT' }))
        })

        it('se puede usar el metodo DELETE', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            await fetchApi(fakeendpoint, { method: 'DELETE' })

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.objectContaining({ method: 'DELETE' }))
        })
    })

    // MARK: Headers
    describe("headers", () => {
        it('por defecto el Content-Type es application/json', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            await fetchApi(fakeendpoint)

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.objectContaining({ headers: { "Content-Type": "application/json" } }))
        })

        it('si metodo va marcado con adjuntos quita el Content-Type', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            await fetchApi(fakeendpoint, { hasAttachments: true })

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.not.objectContaining({ headers: { "Content-Type": "application/json" } }))
        })

        it('si puede obtener un SSO lo añade a la cabecera', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            let token = "Bearer tokendeprueba"

            await fetchApi(fakeendpoint, { getAuthToken: () => token })

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.objectContaining({ headers: expect.objectContaining({ "Authorization": token }) }))
        })

        it('puedo añadir una cabecera adicional', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            await fetchApi(fakeendpoint, { headers: { "test": "test" } })

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.objectContaining({ headers: expect.objectContaining({ "test": "test" }) }))
        })

        it('puedo añadir varias cabeceras adicional', async () => {
            vi.spyOn(global, "fetch").mockImplementationOnce(() => createFetchResponse(200))

            await fetchApi(fakeendpoint, { headers: { "test1": "test1", "test2": "test2", "test3": "test3" } })

            expect(fetch).toHaveBeenCalledWith(expect.stringContaining(fakeendpoint), expect.objectContaining({ headers: expect.objectContaining({ "test1": "test1", "test2": "test2", "test3": "test3" }) }))
        })

    })

});