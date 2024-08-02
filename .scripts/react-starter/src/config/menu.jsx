import { FaList, FaTools, FaUsers } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"
import { APLICACIONES_URL, CONSEJO_GOBIERNO_URL, RAIZ_URL, UNIDAD_ORGANICA_URL, UTILIDADES_URL } from "./constants"

export const tituloMenu = "Plantilla"

export const menu = [
    {
        name: "Dashboard",
        link: RAIZ_URL,
        icon: <MdDashboard />
    },
    {
        name: "Consejo de Gobierno",
        link: CONSEJO_GOBIERNO_URL,
        icon: <FaUsers />
    },
    {
        name: "Aplicaciones",
        link: APLICACIONES_URL,
        icon: <FaList />
    },
    {
        name: "Utilidades",
        link: UTILIDADES_URL,
        icon: <FaTools />
    },
    {
        name: "Unidades organicas",
        link: UNIDAD_ORGANICA_URL,
        icon: <FaList />
    },

]