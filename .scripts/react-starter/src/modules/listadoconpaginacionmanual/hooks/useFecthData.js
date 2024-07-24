// hooks/useFetchData.js
import { useQuery } from '@tanstack/react-query';
import { toast } from "sonner"
import { useState } from 'react';
import { fetchData } from '../services/fetchData';

export const useFetchData = (pagination) => {

  const [title, setTitle] = useState("Listado de aplicaciones")
    
    const handleClick = () => {
        toast.success("Boton clickado")
        setTitle("Demo")
    }

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    placeholderData: { rows: [], rowCount: 0 },
  });


  return {title, handleClick, dataQuery}
};
