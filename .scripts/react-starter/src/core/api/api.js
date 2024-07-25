const API_BASE_URL = "https://pruebasso.acaex.es/pruebasso/public"

const backend = {
    get: async (endpoint) => await (await fetch(`${API_BASE_URL}${endpoint}`)).json(),
}

export let api = {
    consejodegobierno: async () => await backend.get("/consejogobierno"),
    aplicaciones: async (page, pageSize) => {
        const endpoint = `/aplicaciones?page=${page}&pagesize=${pageSize}`;
        return await backend.get(endpoint);
    }

}