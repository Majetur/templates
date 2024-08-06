import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menu, tituloMenu } from "../../config/menu";

// Componentes SVG para las flechas que expanden y contraen para el caso de submenus
const DownArrowIcon = ({ className }) => (
  <svg className={`w-3 h-3 shrink-0 fill-current ${className}`} viewBox="0 0 12 12">
    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
  </svg>
);

const UpArrowIcon = ({ className }) => (
  <svg className={`w-3 h-3 shrink-0 fill-current ${className} rotate-180`} viewBox="0 0 12 12">
    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
  </svg>
);

export const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleSubMenu = (itemName) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [itemName]: !prevState[itemName]
    }));
  };

  const inactiveItem = "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200";
  const activeItem = "flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white";
  const staticItem = "flex items-center justify-between w-full p-2 pl-6 my-2 text-gray-600 cursor-pointer"; // Clase CSS para items sin link
  const subItem = "flex items-center justify-start w-full p-2 pl-10 my-2 text-gray-800 transition-colors duration-200"; // Clase CSS para subitems

  return (
    <div className={`relative ${!sidebarOpen && 'hidden'} h-screen shadow-lg lg:block w-80`}>
      <div className="h-full bg-white dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          {sidebarOpen && (
            <button
              className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
          )}
          <p className="text-xl font-bold dark:text-white">{tituloMenu}</p>
        </div>
        <nav className="mt-6">
          <div>
            {menu.map(item => (
              <div key={item.name}>
                {item.link ? (
                  <NavLink
                    className={({ isActive }) => isActive ? activeItem : inactiveItem}
                    to={item.link}
                    onClick={() => setSidebarOpen(false)} // Cerrar el sidebar en pantallas pequeñas
                  >
                    <span className="text-left">{item.icon}</span>
                    <span className="mx-2 text-sm font-normal">{item.name}</span>
                  </NavLink>
                ) : (
                  <div className={staticItem} onClick={() => toggleSubMenu(item.name)}>
                    <div className="flex items-center flex-grow">
                      <span className="text-left">{item.icon}</span>
                      <span className="mx-2 text-sm font-normal">{item.name}</span>
                    </div>
                    <span className="ml-2">
                      {expandedItems[item.name] ? <UpArrowIcon className="text-slate-400" /> : <DownArrowIcon className="text-slate-400" />}
                    </span>
                  </div>
                )}
                {item.submenu && expandedItems[item.name] && item.submenu.map(subitem => (
                  <NavLink
                    key={subitem.link}
                    className={({ isActive }) => isActive ? `${activeItem} ${subItem}` : subItem}
                    to={subitem.link}
                    onClick={() => setSidebarOpen(false)} // Cerrar el sidebar en pantallas pequeñas
                  >
                    <span className="text-left">{subitem.icon}</span>
                    <span className="mx-2 text-sm font-normal">{subitem.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};
