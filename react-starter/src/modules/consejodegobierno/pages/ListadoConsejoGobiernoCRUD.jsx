// import { getLoggerComponent } from "../../../core";
import { ListadoAutomatizado } from "../../../core";
import { useListConsejoGobiernoCRUD } from "../hooks";

export const ListadoConsejoGobiernoCRUD = () => {
  // const log = getLoggerComponent(ListadoConsejoGobierno);
  const {  error, loading, cabecera, ColumnasConsejoGobierno, items } = useListConsejoGobiernoCRUD();

  if (error) {
    return <div>Se ha producido un error, intentelo de nuevo más tarde</div>;
  }
  
  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    items && (
    <ListadoAutomatizado cabecera={cabecera} columns={ColumnasConsejoGobierno} data={items} />
    )
  )
}

