import { fetchApi } from "fetchssoapi";

export const fetchBackEnd = async (
    endpoint,
    metodo,
    cuerpo,
    cabeceraAdicional,
    tieneAdjuntos = false
) => fetchApi(import.meta.env.VITE_BACKEND + endpoint, {
    method: metodo,
    headers: cabeceraAdicional,
    hasAttachments: tieneAdjuntos,
    body: cuerpo
})