
import { useModal } from '..';

export const ConfirmModal = ({ title, content, titleButton, handleConfirm }) => {
  const { openModal } = useModal();
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <button
        onClick={() => openModal({
          title, content,
          onConfirm: handleConfirm
        }, 'confirm')}
        className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
      >
        {titleButton}
      </button>
    </div>
  );
}
