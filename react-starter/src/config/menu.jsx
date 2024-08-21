import { FaList, FaTools, FaUsers, FaAppStore } from "react-icons/fa"
import { GiOrganigram } from "react-icons/gi";
import { MdDashboard } from "react-icons/md"
import { APLICACIONES_URL, CONSEJO_GOBIERNO_CRUD_URL, CONSEJO_GOBIERNO_URL, RAIZ_URL, UNIDAD_ORGANICA_URL, UTILIDADES_URL } from "./constants"

export const tituloMenu = "Plantilla"

export const menu = [
    {
        name: "Dashboard",
        link: RAIZ_URL,
        icon: <MdDashboard />
    },
    {
        //Los elementos con hijos no deben llevar enlace y deben tener una propiedad submenu conn
        //los elementos que se quiere. (Si se desea otro comportamiento se deberan implementarlo)
        name: "Listados",
        icon: <FaList />,
        submenu: [
            {
                name: "Consejo de Gobierno",
                link: CONSEJO_GOBIERNO_URL,
                icon: <FaUsers />
            },
            {
                name: "Consejo de Gobierno (crud)",
                link: CONSEJO_GOBIERNO_CRUD_URL,
                icon: <FaUsers />
            },
            {
                name: "Aplicaciones",
                link: APLICACIONES_URL,
                icon: <FaAppStore />
            },
            {
                name: "Unidades Orgánicas",
                link: UNIDAD_ORGANICA_URL,
                icon: <GiOrganigram />
            },
        ]
    },

    {
        name: "Utilidades",
        link: UTILIDADES_URL,
        icon: <FaTools />
    },


]