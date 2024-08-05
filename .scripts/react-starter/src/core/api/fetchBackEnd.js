import { fetchApi } from "fetchssoapi";
import { isSSOEnviroment } from "../helpers/functionalHelpers";


export const fetchBackEnd = async (
    endpoint,
    metodo,
    cuerpo,
    cabeceraAdicional,
    tieneAdjuntos = false,
) => fetchApi(import.meta.env.VITE_BACKEND + endpoint, {
    method: metodo,
    headers: cabeceraAdicional,
    hasAttachments: tieneAdjuntos,
    body: cuerpo,
    isSSOEnviroment: isSSOEnviroment
})

// Sintaxis: fetchApi(endpoint, options)
// Un ejemplo de posibles valores para options podría ser
//     var options = {
//         method: 'GET',
//         headers: {},
//         hasAttachments: false,
//         body: undefined,
//         onUnauthorized: () => "Unauthorized",
//         getSSOToken: () => "",
//         getUsuarioDev: () => "",
//         getPerfilDev: () => "",
//         isSSOEnviroment: () => true,
//         isSsoDefined: (sso) => true,
//         isTokenExpired: (sso) => false,
//         tryToGetSso: (maxRetries, sso) => sso
//     };

