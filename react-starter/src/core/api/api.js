import { ENDPOINT_APLICACIONES, ENDPOINT_CONSEJO_GOBIERNO, ENDPOINT_UNIDAD_ORGANICA } from "../../config/constants";
import { fetchBackEnd } from "./fetchBackEnd";

const backendPublic = {
    get: async (endpoint) => await (await fetch(`${import.meta.env.VITE_BACKEND}/public${endpoint}`)).json(),
}

const backend = {
    get: async (endpoint) => await (await fetchBackEnd(endpoint)).json(),
    post: async (endpoint, cuerpo) => await (await fetchBackEnd(endpoint, "post", JSON.stringify(cuerpo))).json(),
    put: async (endpoint, cuerpo) => await (await fetchBackEnd(endpoint, "put", JSON.stringify(cuerpo))).json(),
    delete: async (endpoint) => await fetchBackEnd(endpoint, "delete"),
}

export let apiPublic = {
    consejodegobierno: async () => await backendPublic.get(ENDPOINT_CONSEJO_GOBIERNO),
    aplicaciones: async (page, pageSize) => {
        const endpoint = `${ENDPOINT_APLICACIONES}?page=${page}&pagesize=${pageSize}`;
        return await backendPublic.get(endpoint);
    }
}


export let api ={    
    getlist: async (endpoint) => {
        return await backend.get(endpoint);
    },
    getdetail: async (endpoint, id) => {
        const newendpoint = `${endpoint}/${id}`;
        return await backend.get(newendpoint);
    },
    create: async (endpoint, entidad) => {
        return await backend.post(endpoint, entidad);
    },
    update: async (endpoint, id, entidad) => {
        const newendpoint = `${endpoint}/${id}`;
        return await backend.put(newendpoint, entidad);
    },
    delete: async (endpoint, id) => {
        const newendpoint = `${endpoint}/${id}`;
        return await backend.delete(newendpoint);
    },

}