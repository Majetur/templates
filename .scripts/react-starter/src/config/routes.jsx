import { Proyecto } from "../Proyecto";
import { Dashboard } from "../modules/Dashboard/pages/Dashboard";
import { ErrorPage } from "../modules/ErrorPage/pages/ErrorPage";
import { Items } from "../modules/List/pages/Items";


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
                path: "/items",
                element: <Items />,
            },
        ]
    },
]