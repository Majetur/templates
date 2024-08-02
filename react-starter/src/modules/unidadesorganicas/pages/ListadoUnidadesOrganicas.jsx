import { ListadoAutomatizado } from '../../../core/list/pages';
import { ColumnasUnidadesOrganicas } from '../components/ColumnasUnidadesOrganicas';
import { useListUnidadesOrganicas } from '../hooks/useListUnidadesOrganicas';


export const ListadoUnidadesOrganicas = () => {
  const { cabecera, items } = useListUnidadesOrganicas();
  return (
    <ListadoAutomatizado cabecera={cabecera} columns={ColumnasUnidadesOrganicas} data={items} />
  )
}