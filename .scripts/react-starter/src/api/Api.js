const API_URL = "http://localhost:8090";
const RICKYMORTY_API_URL = "https://rickandmortyapi.com/api"

const backend = {
    get: async (endpoint) => await (await fetch(`${RICKYMORTY_API_URL}${endpoint}`)).json(),
    post: async (endpoint, data) => await (await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", },
        ...data ? { body: JSON.stringify(data) } : {}
    })).json(),
    put: async (endpoint, data) => await (await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json", },
        ...data ? { body: JSON.stringify(data) } : {}
    })).json(),
    delete: async (endpoint, data) => await (await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", },
        ...data ? { body: JSON.stringify(data) } : {}
    })).json()
}

// MARK: API
export let api = {
    genericItemListWithPagination : async (endpoint, setItems, setPagination) => {
        const response = await backend.get(endpoint).json()

        if(setItems) { setItems(response.data)}

        if(setPagination) { setPagination(response.pagination)}

        return response
    },
    personajes: async () => await genericItemListWithPagination("/character"),
}