// MARK: App 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";
import { routes } from "./config/routes";
import { configLogger, getLoggerComponent } from "./core/logger"
import { ModalProvider } from "./core/custom_modal";
import Modal from 'react-modal';
import { UserProvider } from "./core/user";

Modal.setAppElement('#root'); // Asegúrate de que el ID coincide con el elemento raíz en tu HTML

const router = createBrowserRouter(routes);


function App() {
  configLogger()
  const log = getLoggerComponent(App)
  log.info("logger configurado")

  return (
    <>
      <UserProvider>
        <Toaster richColors closeButton position="top-center" />
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </UserProvider>
    </>
  )
}

export default App
