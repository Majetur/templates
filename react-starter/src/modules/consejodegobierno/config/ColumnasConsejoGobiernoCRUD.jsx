import { FaTrashAlt } from "react-icons/fa";
import { openModalDelete, renderNombre } from "../helpers";

export const getColumnasConsejoGobiernoCRUD  = (openModal, navegar) => [
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
      cell: renderNombre
    },
    {
      header: 'Consejeria',
      accessorKey: 'consejeria',
      cell: ({ row }) => (      
        <a href={row.original.consejeriaLink} target="_blank">{row.original.consejeria}</a>
      )
    },
    {
      header: ' ',
      cell: ({ row }) => (
        <button onClick={() => openModalDelete(row.original.persona, openModal, navegar)}>
          <FaTrashAlt size={20} />
        </button>
      ),
    },
  ];

