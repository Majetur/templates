
import { useModal } from '../../../core/custom_modal';

export const AlertModal = () => {
  const { openModal } = useModal();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => openModal({
          title: "Ejemplo Alert",
          content: "Esto es una ventana de alert"
        })}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Ejemplo de Modal para alerta básico
      </button>
    </div>
  );
}
