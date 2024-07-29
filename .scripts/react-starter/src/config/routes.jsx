import { Layout } from "../layout";
import { ErrorPage } from "../core/error";
import { Dashboard , ListadoConsejoGobierno , ListadoAplicaciones, Utilidades } from "../modules";

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
                path: "/listadoaplicaciones",
                element: <ListadoAplicaciones />,
            },
            {
                path: "/utilidades",
                element: <Utilidades/>,
            }
        ]
    },
]