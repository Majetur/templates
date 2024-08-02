import { ENDPOINT_APLICACIONES, ENDPOINT_UNIDAD_ORGANICA } from "../../config/constants";
import { fetchBackEnd } from "./fetchBackEnd";

const backendPublic = {
    get: async (endpoint) => await (await fetch(`${import.meta.env.VITE_BACKEND}/public${endpoint}`)).json(),
}

const backendSSO = {
    get: async (endpoint) => await (await fetchBackEnd(endpoint)).json(),
}

export let api = {
    consejodegobierno: async () => await backendPublic.get("/consejogobierno"),
    aplicaciones: async (page, pageSize) => {
        const endpoint = `${ENDPOINT_APLICACIONES}?page=${page}&pagesize=${pageSize}`;
        return await backendPublic.get(endpoint);
    },
    unidadesorganicas: async () => {
        const endpoint = ENDPOINT_UNIDAD_ORGANICA;
        return await backendSSO.get(endpoint);
    },
    detalleunidadorganica: async (id) => {
        const endpoint = `${ENDPOINT_UNIDAD_ORGANICA}/${id}`;
        return await backendSSO.get(endpoint);
    }
}