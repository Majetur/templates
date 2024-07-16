import { ErrorBoundary } from "../../core"
import { Content, Header, SideBar } from "../components"
import { getLoggerComponent } from "../../core/logger/logger";

export const Layout = () => {
  const log = getLoggerComponent(Layout)
  log.info("Cargando Layout...")

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <SideBar />
        <div className="flex flex-col w-full md:space-y-4 h-screen overflow-scroll">
          <Header />
          <ErrorBoundary>
            <Content />
          </ErrorBoundary>
        </div>
      </div>
    </main>
  )
}
