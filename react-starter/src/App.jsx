// MARK: App 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";
import { routes } from "./config/routes";
import { configLogger } from "./config/logger";
import log from "loglevel";

const router = createBrowserRouter(routes);

function App() {

  configLogger()
  log.info("logger para trazas configurado")

  return (
    <>
      <Toaster richColors closeButton position="top-center" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
