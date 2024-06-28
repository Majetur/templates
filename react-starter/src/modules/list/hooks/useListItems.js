import { useEffect, useState } from "react"
import { api } from "../../../core/api"
import { toast } from "sonner"

export const useListItems = () => {
    const [title, setTitle] = useState("Consejo de Gobierno")
    const [items, setItems] = useState([])
    
    const handleClick = () => {
        toast.success("Boton clickado")
        setTitle("Demo")
    }
    
    const fetchItems = async () => setItems((await api.consejodegobierno()))
    
    useEffect(() => { fetchItems() }, [])

    return {title, items, handleClick}
}