// MARK: App 

import { Proyecto } from "./Proyecto"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "./modules/Dashboard/pages/Dashboard";
import { ErrorPage } from "./modules/ErrorPage/pages/ErrorPage";
import { Consejerias } from "./modules/Consejerias/pages/Consejerias";
import { Toaster } from "sonner";
import { routes } from "./config/routes";

const router = createBrowserRouter(routes);

function App() {

  return (
    <>
      <Toaster richColors position="top-center"/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
