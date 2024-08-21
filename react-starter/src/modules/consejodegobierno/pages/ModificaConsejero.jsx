import { getLoggerComponent, useModal } from '../../../core';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { CONSEJO_GOBIERNO_CRUD_URL, MODIFICACION } from '../../../config/constants';
import { FormularioConsejero } from '../components/FormularioConsejero';

export const ModificaConsejero = () => {
  const log = getLoggerComponent(ModificaConsejero);
  log.info("INICIO");
  const { elementoId } = useParams(); //En este ejemplo corresponde al nombre del consejero
  const { openModal } = useModal();
  const [consejero, setConsejero] = useState(null);
  const navegar = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        // Aqui se llamaria a la api para cargar los datos de la ficha desde el enpoint
        // const { data } = await api.getdetail(ENDPOINT_CONSEJO_GOBIERNO, elementoId);
        // setConsejero(data);

        // Como para este ejemplo no existe endpoint mostramos lo que nos viene por parametro
        setConsejero({ nombre: elementoId })

      } catch (error) {
        openModal({ title: "Error", content: "Se ha producido un error al cargar los datos" });
        log.error(error);
      }
    };
    fetchItem();
  }, [elementoId]);

  const handleConfirm = async (newdata) => {
    log.info("consejero a modificar: ", newdata.nombre);
    try {
      // Aqui se llamaria a la api para realizar la actualizacion con lo que se haya modificado en el formulario      
      // const { data } = await api.update(ENDPOINT_CONSEJO_GOBIERNO, consejero.id, newdata);
      // log.info("consejero, data", newdata, data);

      alert("Aqui se realizaría la llamada al endpoint para hacer efectivo los cambios")

      navegar(CONSEJO_GOBIERNO_CRUD_URL);
      toast.success(`La ficha para ha sido modificado correctamente como ${newdata.nombre} `);
    } catch (error) {
      openModal({ title: "Error", content: "Se ha producido un error en la modificación" });
      log.error(error);
    }
  };

  return consejero ? (
    <FormularioConsejero formulario={consejero} setFormulario={setConsejero} handleConfirm={handleConfirm} accion={MODIFICACION} />
  ) : "Cargando...";
};
