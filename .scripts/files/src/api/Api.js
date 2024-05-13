const API_URL = "http://localhost:8090";
const CONSEJERIAS_API_URL = "https://despgapbackend.acaex.es/pgap_backend"

const backend = {
    get: async (endpoint) => await (await fetch(`${CONSEJERIAS_API_URL}${endpoint}`)).json(),
    post: async (endpoint, data) => await (await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json",},
        body: JSON.stringify(data)
    }))
}

export let api = {
    consejerias: async () => (await backend.get("/consejerias")).data,
    members: async () => backend.get("/members"),
    addMember: async (data) => backend.post("/members", data),
}