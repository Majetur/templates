import Swal from 'sweetalert2';
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
    onUnauthorized: () => {
        Swal.fire({
            icon: 'error',
            title: 'No autorizado',
            html: `
                    <p>No estás autorizado para acceder a este menú. Si lo deseas, puedes hacerlo en 
                    <a href="https://pruautenticacionsso.acaex.es" target="_blank" rel="noopener noreferrer">
                        https://pruautenticacionsso.acaex.es
                    </a>.
                    </p>`,
            confirmButtonText: 'Close'
        });
    },
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

