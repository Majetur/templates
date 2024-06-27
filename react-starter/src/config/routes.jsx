import { Layout } from "../layout";
import { Dashboard } from "../modules/dashboard";
import { ErrorPage } from "../core";
import { Items } from "../modules/list";


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
                path: "/items",
                element: <Items />,
            },
        ]
    },
]