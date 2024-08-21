import { Link } from 'react-router-dom';
import { DETALLE_UNIDAD_ORGANICA_URL } from '../../../config/constants';

export const ColumnasUnidadesOrganicas = [
  {
    header: 'Nombre',
    accessorKey: 'name',
    cell: ({ row }) => (
      <Link to={`${DETALLE_UNIDAD_ORGANICA_URL}/${row.original.dir3}`} className="text-blue-500 hover:underline mb-4">{row.original.name}</Link>
    )
  },
  {
    header: 'Dir3',
    accessorKey: 'dir3',
  },
  {
    header: 'Dir3 padre',
    accessorKey: 'dir3_padre',
  },
  {
    header: 'C.C.A.A.',
    accessorKey: 'ccaa',
  },
];