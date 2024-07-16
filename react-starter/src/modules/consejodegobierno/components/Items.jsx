import { useListItems } from "../hooks/useListItems";
import { Table } from "../../../core/list/components/Table";
import { getLoggerComponent } from "../../../core/logger/logger";


const columnasConsejoGobierno = [
  {
    header: '',
    accessorKey: 'imageLink',
    cell: ({ row }) => (      
      <img alt="profile" src={row.original.imageLink} className="mx-auto object-cover rounded-full h-20 w-20 " />
    )
  },
  {
    header: 'Persona',
    accessorKey: 'persona',
    cell: ({ row }) => (      
      <a href={row.original.personaLink} target="_blank">{row.original.persona}</a>
    )
  },
  {
    header: 'Consejeria',
    accessorKey: 'consejeria',
    cell: ({ row }) => (      
      <a href={row.original.consejeriaLink} target="_blank">{row.original.consejeria}</a>
    )
  },

];


export const Items = () => {
  const log = getLoggerComponent(Items);

  // const { title, items, columnasConsejoGobierno, handleClick, isLoading } = useListItems();
  const { title, items, handleClick } = useListItems();

  return (

    <main className="px-8 sm:px-8 lg:px-8 py-1 w-full max-w-9xl mx-auto overflow-y-auto">
      <Table title={title} columns={columnasConsejoGobierno} data={items} handleClick={handleClick} />
    </main>

  )
}
