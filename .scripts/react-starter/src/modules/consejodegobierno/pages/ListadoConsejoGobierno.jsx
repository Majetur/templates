// import { getLoggerComponent } from "../../../core";
import { ListadoAutomatizado } from "../../../core/list/pages";
import { ColumnasConsejoGobierno } from "../config";
import { useListConsejoGobierno } from "../hooks";

export const ListadoConsejoGobierno = () => {
  // const log = getLoggerComponent(ListadoConsejoGobierno);
  const { cabecera, items } = useListConsejoGobierno();
  return (
    <ListadoAutomatizado cabecera={cabecera} columns={ColumnasConsejoGobierno} data={items} />
  )
}
