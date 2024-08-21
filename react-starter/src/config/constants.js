// ************* URLs FRONT-END *********************
export const RAIZ_URL = "/"

export const CONSEJO_GOBIERNO_URL = "/consejodegobierno"
export const CONSEJO_GOBIERNO_CRUD_URL = "/consejodegobiernocrud"
export const CONSEJO_GOBIERNO_MODIFICACION_URL = CONSEJO_GOBIERNO_CRUD_URL + "/modificacion"
export const CONSEJO_GOBIERNO_ALTA_URL = CONSEJO_GOBIERNO_CRUD_URL + "/alta"
export const UNIDAD_ORGANICA_URL = "/unidadorganica/listado"
export const DETALLE_UNIDAD_ORGANICA_URL = "/unidadorganica/detalle"
export const APLICACIONES_URL = "/aplicaciones"
export const UTILIDADES_URL = "/utilidades"
// export const AUDITLOGS_URL= "/auditlogs"

export const DASHBOARD_URL = "/dashboard"


// ************* ENDPOINTS BACK-END *********************
// LA RAIZ DEL ENDPOINT DEL BACKEND SE DEFINE EN LA VARIABLE VITE_BACKEND
export const ENDPOINT_CONSEJO_GOBIERNO = "/consejogobierno"
export const ENDPOINT_APLICACIONES = "/aplicaciones"
export const ENDPOINT_UNIDAD_ORGANICA = "/organicunits"
export const ENDPOINT_USUARIO = "/user"
// export const ENDPOINT_AUDITLOG = "/auditlogs"



//************** EXTERNAS *********************/
export const SSO_CIERRE_SESION_URL = "https://pruportalsso.acaex.es/my.logout.php3"


//Acciones para el CRUD
export const ALTA = "alta"
export const MODIFICACION = "modificacion"