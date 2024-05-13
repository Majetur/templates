
export const fetchApi = async (endpoint, metodo, cuerpo, cabeceraAdicional, tieneAdjuntos = false) => {

    const respuesta = await fetch(endpoint)
    
    switch (respuesta.status) {
        case 200:
            return respuesta
        case 400:
            throw await respuesta.json()
        default:
            throw respuesta
    }

}
