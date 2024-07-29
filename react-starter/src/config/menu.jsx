import { FaList, FaTools, FaUsers } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"

export const tituloMenu = "Plantilla"

export const menu = [
    {
        name: "Dashboard",
        link: "/",
        icon: <MdDashboard />
    },
    {
        name: "Consejo de Gobierno",
        link: "/consejodegobierno",
        icon: <FaUsers />
    },
    {
        name: "Lista de Aplicaciones",
        link: "/listadoaplicaciones",
        icon: <FaList />
    },
    {
        name: "Utilidades",
        link: "/utilidades",
        icon: <FaTools />
    },
]