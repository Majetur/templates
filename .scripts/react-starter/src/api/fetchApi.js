
//export const fetchApi = async (endpoint, metodo, cuerpo, cabeceraAdicional, tieneAdjuntos = false) => {
export const fetchApi = async (endpoint, options = {}) => {
    var defaults = {
        method: 'GET',
        headers: {},
        hasAttachments: false,
        body: undefined,
        onUnauthorized: () => "Unauthorized",
        getAuthToken: () => "",
        getUsuarioDev: () => "",
        getPerfilDev: () => "",
        isPreOrPro: () => true,
    };
    let config = Object.assign({}, defaults, options);

    let sso = config.getAuthToken();

    const devHeaders = {}

    if (!config.isPreOrPro()) {
        let user = config.getUsuarioDev()
        let profile = config.getPerfilDev()

        if (user) devHeaders["Jwt-User"] = user
        if (profile) devHeaders["profile"] = profile

    }

    const headers = {
        ...(config.hasAttachments ? {} : { 'Content-Type': 'application/json' }),
        ...(sso == null || sso == "" ? {} : { 'Authorization': sso }),
        ...config.headers,
        ...devHeaders
    }

    const respuesta = await fetch(endpoint, {
        method: config.method,
        headers: headers,
        body: config.body
    })

    switch (respuesta.status) {
        case 200:
        case 201:
        case 202:
        case 204:
            return respuesta
        case 400:
        case 404:
            throw await respuesta.json()
        case 401:
            config.onUnauthorized()
            return
        default:
            throw respuesta
    }

}
