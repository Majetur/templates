import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ALTA, MODIFICACION } from "../../../config/constants";
import { getLoggerComponent } from "../../../core";

// Definir esquema de validación con Yup
const schema = yup.object().shape({
    nombre: yup.string().required("El nombre es obligatorio").min(3, "El nombre debe tener al menos 3 caracteres")
});


export const FormularioConsejero = ({ formulario, setFormulario, handleConfirm, accion = ALTA }) => {
    const log = getLoggerComponent(FormularioConsejero);
    log.info("formulario", formulario);
    const navegar = useNavigate();

    // Inicializar el formulario usando react-hook-form y yup
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: formulario, // Inicializa con los valores del formulario
    });

    const onSubmit = (data) => {
        setFormulario(data); // Actualiza el estado del formulario
        handleConfirm(data);     // Llama a la función de confirmación
    };

    return (
        <>
            <main className="px-8 sm:px-8 lg:px-8 py-8 w-full max-w-9xl mx-auto overflow-y-auto">
                <div className="p-4 bg-white">
                    <h1 className="text-xl font-semibold">{accion === MODIFICACION ? "Modificar Colaborador" : "Alta Colaborador"}</h1>
                    <hr className="my-4" />
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm"
                        onClick={() => navegar(-1)}
                    >
                        Volver
                    </button>
                    <hr className="my-4" />
                    <form className="flex items-center" onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-2 bg-white space-y-1 ml-4 flex flex-col">
                            {/* {accion === MODIFICACION && formulario?.id && (
                                <span>
                                    <label className="font-semibold">Id:</label>
                                    <label className="ml-1">{formulario.id}</label>
                                </span>
                            )} */}
                            <span>
                                <label className="font-semibold">Nombre:</label>
                                <input
                                    type="text"
                                    {...register("nombre")}
                                    className={`input-primary ${errors.nombre ? 'border-red-500' : ''}`}
                                    placeholder="Nombre del Colaborador"
                                />
                                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
                            </span>
                            <button
                                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
                                type="submit"                            >
                                {accion === MODIFICACION ? "Guardar" : "Dar de Alta"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};
