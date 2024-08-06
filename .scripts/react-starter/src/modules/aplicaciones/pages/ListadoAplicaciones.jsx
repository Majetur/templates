import { useFetchData as useFetchDataAplicaciones } from '../hooks';
import { ColumnasListado as ColumnasListadoAplicaciones} from '../config/ColumnasListado';
import { ListadoConPaginacionManual } from '../../../core/list/pages/ListadoConPaginacionManual';


export const ListadoAplicaciones = () => {
  return (
    <ListadoConPaginacionManual useFetchData={useFetchDataAplicaciones} columnasListado={ColumnasListadoAplicaciones} />
  )
}
