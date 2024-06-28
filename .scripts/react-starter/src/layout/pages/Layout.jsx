import { ErrorBoundary } from "../../core"
import { Content, Header, SideBar } from "../components"
import { getComponentName } from "../../config/logger";
import { getLogger} from "loglevel";

export const Layout = () => {
  const log = getLogger(getComponentName(Layout)); 
  log.info("Cargando Layout...")

  return (

    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <SideBar />
        <div className="flex flex-col w-full md:space-y-4">
          <Header />
          <ErrorBoundary>
            <Content />
          </ErrorBoundary>
        </div>
      </div>
    </main>
  )
}
