import { getLoggerComponent, useModal } from '../../../core';
import { useState } from 'react';
import { toast } from 'sonner';

import { useNavigate } from 'react-router-dom';
import { ALTA, CONSEJO_GOBIERNO_CRUD_URL } from '../../../config/constants';
import { FormularioConsejero } from '../components/FormularioConsejero';

export const AltaConsejero = () => {
  const log = getLoggerComponent(AltaConsejero);
  log.info("INICIO");
  const { openModal } = useModal();
  const navegar = useNavigate();

  const [formulario, setFormulario] = useState({ nombre: "" });

  const handleConfirm = async (newdata) => {
    log.info("consejero a dar de alta: ", newdata);
    try {

      alert("Aqui se realizaría la llamada al endpoint para realizar el alta")
      // Aqui se llamaria a la api para crear la nueva entidad con los datos del formulario    
      // const { data } = await api.create(ENDPOINT_CONSEJO_GOBIERNO, newdata);
      // log.info(data);

      navegar(CONSEJO_GOBIERNO_CRUD_URL);
      toast.success(`${newdata.nombre} ha sido dado correctamente de alta como consejero`);
    } catch (error) {
      openModal({ title: "Error", content: "Se ha producido un error en el alta" });
      log.error(error);
    }
  };

  return (
    <FormularioConsejero formulario={formulario} setFormulario={setFormulario} handleConfirm={handleConfirm} accion={ALTA} />
  );
};
