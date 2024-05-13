import { FaUsers } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"
import { NavLink } from "react-router-dom"

export const SideBar = () => {

  const menuItems = [
    {
      name: "Dashboard",
      link: "/",
      icon: <MdDashboard/>
    },
    {
      name: "Socios",
      link: "/members",
      icon: <FaUsers />
    },
  ]

  const inactiveItem = "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200"
  const activeItem = "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white"
  
  return (
    <div className="relative hidden h-screen shadow-lg lg:block w-80">
      <div className="h-full bg-white dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="text-xl font-bold dark:text-white">Biblioteca</p>
        </div>
        <nav className="mt-6">
          <div>
            {menuItems.map(item => (
            <NavLink
              key={item.link}
              className={({isActive}) => isActive ? activeItem:inactiveItem }
              to={item.link}
            >
              <span className="text-left">{item.icon}</span>
              <span className="mx-2 text-sm font-normal">{item.name}</span>
            </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
