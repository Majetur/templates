import { useEffect, useState } from "react"
import { api } from "../../../core"

export const useListUnidadesOrganicas = () => {
    const [cabecera, setCabecera] = useState({
        title: "",
        btnCabecera: undefined
    });
    const [items, setItems] = useState([])


    useEffect(() => {
        setCabecera({
            title: "Unidades Orgánicas",
        });
    }, []);

    const fetchItems = async () => setItems((await api.unidadesorganicas()))

    useEffect(() => { fetchItems() }, [])

    return { cabecera, items }
}