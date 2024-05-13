// MARK: App 

import { Proyecto } from "./Proyecto"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "./modules/Dashboard/pages/Dashboard";
import { ErrorPage } from "./modules/ErrorPage/pages/ErrorPage";
import { Members } from "./modules/Members/pages/Members";
import { NewMember } from "./modules/Members/pages/NewMember";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Proyecto />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/members/create",
        element: <NewMember />,
      },
    ]
  },
]);

function App() {

  return (
    <>
      <Toaster richColors position="top-center"/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
