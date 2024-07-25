// hooks/useFetchData.js
import { useQuery } from '@tanstack/react-query';
import { toast } from "sonner"
import { useEffect, useState } from 'react';
import { fetchData } from '../services/fetchData';

export const useFetchData = (pagination) => {
  const [cabecera, setCabecera] = useState({
    title: "",
    btnCabecera: undefined
  });

  const handleClick = () => {
    toast.success("Boton clickado")
    setCabecera(prev => ({ ...prev, title: "Titulo cambiado" }));
  }

  useEffect(() => {
    setCabecera({
      title: "Listado de aplicaciones",
      btnCabecera: {
        lblBoton: "Cambia Título",
        onClickBoton: handleClick
      }
    });
  }, []);

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    placeholderData: { rows: [], rowCount: 0 },
  });


  return { cabecera, dataQuery }
};
