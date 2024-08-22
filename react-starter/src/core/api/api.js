import Swal from 'sweetalert2';
import { ENDPOINT_APLICACIONES, ENDPOINT_CONSEJO_GOBIERNO, ENDPOINT_UNIDAD_ORGANICA, ENDPOINT_USUARIO } from "../../config/constants";
import { fetchBackEnd } from "./fetchBackEnd";

// Acción cuando una API de backend te devuelve un 401 Not Authorized, mensaje de muestra en listado de unidades organicas
var onUnauthorized = () => {
    Swal.fire({
        icon: 'error',
        title: 'No autorizado',
        html: `
                <p>Estas en un entorno sin token JWT de Autenticación.<p>
                <br />
                <p>Puedes probarlo en  
                <a href="https://pruautenticacionsso.acaex.es/unidadorganica/listado" target="_blank" rel="noopener noreferrer" style="color:#0000FF">
                    Listado de Unidades Organicas
                </a>.
                </p>`,
        confirmButtonText: 'Close'
    });
}

const backendPublic = {
    get: async (endpoint) => await (await fetch(`${import.meta.env.VITE_BACKEND}/public${endpoint}`)).json(),
}

const backend = {
    get: async (endpoint) => await (await fetchBackEnd(endpoint, { onUnauthorized })).json(),
    post: async (endpoint, cuerpo) => await (await fetchBackEnd(endpoint, { method: "post", body: JSON.stringify(cuerpo), onUnauthorized })).json(),
    put: async (endpoint, cuerpo) => await (await fetchBackEnd(endpoint, { method: "put", body: JSON.stringify(cuerpo), onUnauthorized })).json(),
    delete: async (endpoint) => await fetchBackEnd(endpoint, { method: "delete", onUnauthorized }),
}

export let apiPublic = {
    consejodegobierno: async () => await backendPublic.get(ENDPOINT_CONSEJO_GOBIERNO),
    aplicaciones: async (page, pageSize) => {
        const endpoint = `${ENDPOINT_APLICACIONES}?page=${page}&pagesize=${pageSize}`;
        return await backendPublic.get(endpoint);
    }
}


export let api = {
    user: async () => await backend.get(ENDPOINT_USUARIO),
    list: async (endpoint) => await backend.get(endpoint),
    detail: async (endpoint, id) => await backend.get(`${endpoint}/${id}`),
    create: async (endpoint, entidad) => await backend.post(endpoint, entidad),
    update: async (endpoint, id, entidad) => await backend.put(`${endpoint}/${id}`, entidad),
    delete: async (endpoint, id) => await backend.delete(`${endpoint}/${id}`),
}