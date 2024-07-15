import { Layout } from "../layout";
import { Dashboard } from "../modules/dashboard";
import { ErrorPage } from "../core";
import { Items as ItemsCB } from "../modules/consejodegobierno"


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
                element: <ItemsCB />,
            },
        ]
    },
]