import { useEffect, useState } from "react"
import { api } from "../../../core"
import { toast } from "sonner"

export const useListItems = () => {
    const [cabecera, setCabecera] = useState({
        title: "",
        btnCabecera: undefined
    });
    const [items, setItems] = useState([])

    const handleClick = () => {
        toast.success("Boton clickado")
        setCabecera(prev => ({ ...prev, title: "Titulo cambiado" }));
    }

    useEffect(() => {
        setCabecera({
            title: "Consejo de Gobierno",
            btnCabecera: {
                lblBoton: "Cambia Título",
                onClickBoton: handleClick
            }
        });
    }, []);

    const fetchItems = async () => setItems((await api.consejodegobierno()))

    useEffect(() => { fetchItems() }, [])

    return { cabecera, items }
}