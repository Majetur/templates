import { api } from "../../../core/api"
export const fetchData = async (pagination) => {
  const { pageIndex, pageSize } = pagination;

  // IMPORTANTE: el pageIndex=0 en el pagination de tanstackTable equivale a (pageIndex+1)
  // para la api ya que en la api la cuenta empieza en 1
  const data = await api.aplicaciones(pageIndex + 1, pageSize)  

  return {
    rows: data.data,       // datos
    rowCount: data.pagination.items,   //Numero total de filas
  };
};
