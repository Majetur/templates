import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import log from 'loglevel';

import { CONSEJO_GOBIERNO_CRUD_URL, CONSEJO_GOBIERNO_MODIFICACION_URL } from '../../../config/constants';

export const deleteById = async (id, openModal, navegar) => {
    try {
        await openModal(
            {
                title: "Info",
                content: "En este punto se realizaria el borrado"
            }
        );
        // En este punto se llamaría por ejemplo  al endpoint que realice el borrado
        //             const respuesta = await api.delete(ENDPOINT_CONSEJO_GOBIERNO, id)
        //             log.info("[colaboradoresHelper::deleteById] respuesta: ", respuesta);

        //navegar igual no es necesario porque ya estamos ahi, habria que comprobar que detecte y vuelva a renderizar el listado
        navegar(CONSEJO_GOBIERNO_CRUD_URL)

        toast.success(`el registro para ${id} ha sido eliminado correctamente`)

    }
    catch (error) {
        log.error("[consejoGobiernoHelper::deleteById] ", error)
        await openModal(
            {
                title: "Error",
                content: "Se ha producido un error en el borrado"
            }
        );
    }
};

export const openModalDelete = async (id, openModal, navegar) => {
    const confirmed = await new Promise((resolve) => {
        openModal(
            {
                title: "Confirmación de Borrado",
                content: "¿Está seguro de que desea borrar este colaborador?",
                onConfirm: () => resolve(true),
                onCancel: () => resolve(false)
            },
            'confirm'
        );
    });

    if (confirmed) {
        await deleteById(id, openModal, navegar);
    }
};

export const renderNombre = ({ row }) => (
    <Link to={`${CONSEJO_GOBIERNO_MODIFICACION_URL}/${row.original.persona}`} className="text-blue-500 hover:underline mb-4">
        {row.original.persona}
    </Link>
);