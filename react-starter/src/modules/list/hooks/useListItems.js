import { useEffect, useState } from "react"
import { api } from "../../../core/api"
import { toast } from "sonner"

export const useListItems = () => {
    const [title, setTitle] = useState("Titulo")
    const [items, setItems] = useState([])
    
    const handleClick = () => {
        toast.success("Boton clickado")
        setTitle("Demo")
    }
    
    const fetchItems = async () => setItems((await api.personajes()).results)
    
    useEffect(() => { fetchItems() }, [])

    return {title, items, handleClick}
}