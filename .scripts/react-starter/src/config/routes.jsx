import { Layout } from "../layout";
import { ErrorPage } from "../core/error";
import { ListadoConsejoGobierno, ListadoAplicaciones, Utilidades, DashboardTemplate, Dashboard } from "../modules";
import { APLICACIONES_URL, CONSEJO_GOBIERNO_URL, DASHBOARD_URL, DETALLE_UNIDAD_ORGANICA_URL, RAIZ_URL, UNIDAD_ORGANICA_URL, UTILIDADES_URL } from "./constants";
import { ListadoUnidadesOrganicas, DetalleUnidadOrganica } from "../modules/unidadesorganicas";

export const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: RAIZ_URL,
                element: <DashboardTemplate />,
            },
            {
                path: CONSEJO_GOBIERNO_URL,
                element: <ListadoConsejoGobierno />,
            },
            {
                path: APLICACIONES_URL,
                element: <ListadoAplicaciones />,
            },
            {
                path: UTILIDADES_URL,
                element: <Utilidades />,
            },
            {
                path: UNIDAD_ORGANICA_URL,
                element: <ListadoUnidadesOrganicas />,
            },
            {
                path: DETALLE_UNIDAD_ORGANICA_URL + "/:elementoId",
                element: <DetalleUnidadOrganica />,
            },
            {
                path: DASHBOARD_URL, // Esta ruta la usaremos para paginas de pruebas que
                element: <Dashboard />, // no quedarmos mostrar en el menu de la izquierda
            },
        ]
    },
]