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
        getEnvSso: () => "",
        isSsoDefined: (sso) => true,
        isTokenExpired: (sso) => false,
        tryToGetSso: (maxRetries, sso) => sso
    };
    let config = Object.assign({}, defaults, options);

    let sso = config.getAuthToken();

    if (config.isPreOrPro()) {
        if(!config.isSsoDefined(sso) || config.isTokenExpired(sso)){
            sso = config.tryToGetSso(5, sso)
        }
    } else {
        sso = config.getEnvSso() ?? sso
    }

    const respuesta = await fetch(endpoint, {
        method: config.method,
        headers: setHeaders(),
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
            return respuesta
        default:
            throw respuesta
    }


    function setHeaders() {
        return {
            ...(config.hasAttachments ? {} : { 'Content-Type': 'application/json' }),
            ...(sso == null || sso == "" ? {} : { 'Authorization': sso }),
            ...config.headers,
            ...setDevHeaders(config)
        };
    }

    function setDevHeaders() {
        const devHeaders = {};

        if (!config.isPreOrPro()) {
            let user = config.getUsuarioDev();
            let profile = config.getPerfilDev();

            if (user) devHeaders["Jwt-User"] = user;
            if (profile) devHeaders["profile"] = profile;

        }

        return devHeaders;
    }
}
