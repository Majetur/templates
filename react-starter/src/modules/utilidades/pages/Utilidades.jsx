import { AlertModal } from "../../../core/custom_modal/components/AlertModal";
import { ConfirmModal } from "../../../core/custom_modal/components/ConfirmModal";

import { toast } from "sonner"

export const Utilidades = () => {

  const handleConfirm = () => {
    toast.success("Confirmacion recibida")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <AlertModal title="Ejemplo Alert" content="Esto es una ventana de alert" titleButton="Ejemplo de Modal para alerta básico" />
      <ConfirmModal title="Confirmación" content="¿Estás seguro de que deseas continuar?" titleButton="Ejemplo de Modal para alerta con confirmación" handleConfirm={handleConfirm} />
    </div>
  );
}