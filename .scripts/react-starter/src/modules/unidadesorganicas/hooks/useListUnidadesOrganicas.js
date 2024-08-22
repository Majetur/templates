import { useEffect, useState } from "react"
import { api } from "../../../core"
import { ENDPOINT_UNIDAD_ORGANICA } from "../../../config/constants";

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

    const fetchItems = async () => setItems((await api.list(ENDPOINT_UNIDAD_ORGANICA)))

    useEffect(() => { fetchItems() }, [])

    return { cabecera, items }
}