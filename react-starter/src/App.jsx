// MARK: App 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";
import { routes } from "./config/routes";
import { configLogger, getLoggerComponent } from "./core/logger"

const router = createBrowserRouter(routes);

function App() {
  configLogger()

  const log = getLoggerComponent(App)
  log.info("logger configugrado")

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
