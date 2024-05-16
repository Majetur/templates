import { Content } from "./layout/Content"
import { Header } from "./layout/Header"
import { SideBar } from "./layout/SideBar"

export const Proyecto = () => {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <SideBar/>
        <div className="flex flex-col w-full md:space-y-4">
          <Header/>
          <Content/>
        </div>
      </div>
    </main>
  )
}
