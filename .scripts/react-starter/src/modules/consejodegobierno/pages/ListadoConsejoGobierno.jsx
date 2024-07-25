import { getLoggerComponent } from "../../../core";
import { ListadoAutomatizado } from "../../../core/list/pages";
import { ColumnasConsejoGobierno } from "../components";
import { useListItems } from "../hooks";

export const ListadoConsejoGobierno = () => {
  const log = getLoggerComponent(ListadoConsejoGobierno);
  // const { title, items, handleClick } = useListItems();
  const { cabecera, items } = useListItems();
  return (
    // <ListadoAutomatizado title={title} columns={ColumnasConsejoGobierno} data={items} handleClick={handleClick}/>
    <ListadoAutomatizado cabecera={cabecera} columns={ColumnasConsejoGobierno} data={items} />
  )
}
