import { useEffect, useState } from "react"
import { apiPublic as api, useModal } from "../../../core"
import log from "loglevel";
import { getColumnasConsejoGobiernoCRUD } from "../config";
import { CONSEJO_GOBIERNO_ALTA_URL } from "../../../config/constants";
import { useNavigate } from "react-router-dom";

export const useListConsejoGobiernoCRUD = () => {
    const { openModal } = useModal();
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navegar = useNavigate();
    const cabecera = ({
        title: "Consejo de Gobierno",
        btnCabecera: {
            lblBoton: "Alta Consejero",
            onClickBoton: () => navegar(CONSEJO_GOBIERNO_ALTA_URL)
        }
    });

    const ColumnasConsejoGobierno = getColumnasConsejoGobiernoCRUD(openModal, navegar)
    useEffect(() => {
        const fetchItems = async () => {
            try {
                setItems(await api.consejodegobierno());
            } catch (err) {
                log.error("[useListConsejoGobiernoCRUD] Error fetching Consejo de Gobierno:", err);
                setError("Ocurrió un error al cargar el listado de Consejo de Gobierno. Por favor, intentalo de nuevo más tarde.");
            } finally {
                setLoading(false);
            }

        };
        fetchItems();
    }, []);



    return { cabecera, ColumnasConsejoGobierno, items, loading, error }
}