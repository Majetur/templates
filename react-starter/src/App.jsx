// MARK: App 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";
import { routes } from "./config/routes";
import { configLogger, getComponentName } from "./config/logger";
import { getLogger } from "loglevel";

const router = createBrowserRouter(routes);

function App() {
  configLogger()

  const log = getLogger(getComponentName(App));
  log.info("logger configugrado")

  return (
    <>
      <Toaster richColors closeButton position="top-center" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
