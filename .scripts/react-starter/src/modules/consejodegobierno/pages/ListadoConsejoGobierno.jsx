import { getLoggerComponent, Table } from "../../../core";
import { ColumnasConsejoGobierno } from "../components";
import { useListItems } from "../hooks";

export const ListadoConsejoGobierno = () => {
  const log = getLoggerComponent(ListadoConsejoGobierno);

  // const { title, items, columnasConsejoGobierno, handleClick, isLoading } = useListItems();
  const { title, items, handleClick } = useListItems();

  return (

    <main className="px-8 sm:px-8 lg:px-8 py-1 w-full max-w-9xl mx-auto overflow-y-auto">
      <Table title={title} columns={ColumnasConsejoGobierno} data={items} handleClick={handleClick} />
    </main>

  )
}
