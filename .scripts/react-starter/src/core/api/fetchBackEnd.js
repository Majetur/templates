import { fetchApi } from "fetchssoapi";
import { isSSOEnviroment } from "../helpers/functionalHelpers";


let defaults = {
    method: 'GET',
    headers: {},
    hasAttachments: false,
    body: undefined,
    onUnauthorized: () => "Unauthorized",
    isSSOEnviroment: isSSOEnviroment
}

export const fetchBackEnd = async (endpoint, options = {}) => fetchApi(import.meta.env.VITE_BACKEND + endpoint, Object.assign({}, defaults, options))