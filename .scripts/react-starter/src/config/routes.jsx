import { Layout } from "../layout";
import { Dashboard } from "../modules/dashboard";
import { ErrorPage } from "../core";
import { ListadoConsejoGobierno } from "../modules/consejodegobierno"
import { ListadoConPaginacionManual } from "../modules/listadoconpaginacionmanual";

export const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/consejodegobierno",
                element: <ListadoConsejoGobierno />,
            },
            {
                path: "/listadoconpaginacionmanual",
                element: <ListadoConPaginacionManual />,
            },
        ]
    },
]