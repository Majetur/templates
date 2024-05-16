// MARK: App 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
