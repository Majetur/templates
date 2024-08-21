import { useEffect, useState } from "react"
import { apiPublic as api } from "../../../core"
import { toast } from "sonner"

export const useListConsejoGobierno = () => {
    const cabecera =({
        title: "Consejo de Gobierno",
            btnCabecera: {
                lblBoton: "Mostrar toast",
                onClickBoton: () => toast.success("Boton clickado")
            }
    });
    const [items, setItems] = useState([])

    const fetchItems = async () => setItems((await api.consejodegobierno()))

    useEffect(() => { fetchItems() }, [])

    return { cabecera, items }
}