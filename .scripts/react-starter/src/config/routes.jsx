import { Layout } from "../layout";
import { ErrorPage } from "../core/error";
import { ListadoConsejoGobierno, ListadoAplicaciones, Utilidades, DashboardTemplate, Dashboard } from "../modules";

export const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <DashboardTemplate />,
            },
            {
                path: "/consejodegobierno",
                element: <ListadoConsejoGobierno />,
            },
            {
                path: "/listadoaplicaciones",
                element: <ListadoAplicaciones />,
            },
            {
                path: "/utilidades",
                element: <Utilidades />,
            },
            {
                path: "/dashboard", // Esta ruta la usaremos para paginas de pruebas que
                element: <Dashboard />, // no quedarmos mostrar en el menu de la izquierda
            },
        ]
    },
]