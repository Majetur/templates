import { api } from '../../../core';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ENDPOINT_UNIDAD_ORGANICA } from '../../../config/constants';


export const DetalleUnidadOrganica = () => {
  const { elementoId } = useParams();
  const [unidadOrganica, setUnidadOrganica] = useState()
  const fetchItem = async () => setUnidadOrganica((await api.getdetail(ENDPOINT_UNIDAD_ORGANICA, elementoId)))

  useEffect(() => {
    fetchItem()
  }, [])

  const navegar = useNavigate();

  return (
    <>
      <main className="px-8 sm:px-8 lg:px-8 py-8 w-full max-w-9xl mx-auto overflow-y-auto">
        <div className="p-4 bg-white">
          <h1 className="text-xl font-semibold">Unidad Orgánica: {elementoId}</h1>
          <hr className="my-4" />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm"
            onClick={() => navegar(-1)}
          >
            Volver
          </button>

          <hr className="my-4" />
          {unidadOrganica && (
            <form className="flex items-center">
              <div className="p-2 bg-white space-y-1 ml-4 flex flex-col">                
                <span>
                  <label className="font-semibold">Dir3:</label>
                  <label className="ml-1">{unidadOrganica.dir3}</label>
                </span>
                <span>
                  <label className="font-semibold">Nombre:</label>
                  <label className="ml-1">{unidadOrganica.name}</label>
                </span>
                <span>
                  <label className="font-semibold">Dir3 padre:</label>
                  <label className="ml-1">{unidadOrganica.dir3_padre}</label>
                </span>
                <span>
                  <label className="font-semibold">CCAA:</label>
                  <label className="ml-1">{unidadOrganica.ccaa}</label>
                </span>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
};


