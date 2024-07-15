import { Layout } from "../layout";
import { Dashboard } from "../modules/dashboard";
import { ErrorPage } from "../core";
import { Items as ItemsCB } from "../modules/consejoGobierno"


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
                path: "/consejoGobierno",
                element: <ItemsCB />,
            },
        ]
    },
]