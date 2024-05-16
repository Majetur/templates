import { Proyecto } from "../Proyecto";
import { Consejerias } from "../modules/Consejerias/pages/Consejerias";
import { Dashboard } from "../modules/Dashboard/pages/Dashboard";
import { ErrorPage } from "../modules/ErrorPage/pages/ErrorPage";


export const routes = [
    {
        path: "/",
        element: <Proyecto />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/consejerias",
                element: <Consejerias />,
            },
        ]
    },
]