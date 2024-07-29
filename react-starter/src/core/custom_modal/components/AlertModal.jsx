
import { useModal } from '..';

export const AlertModal = ({ title, content, titleButton }) => {
  const { openModal } = useModal();
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <button
        onClick={() => openModal({ title, content })}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
      >
        {titleButton}
      </button>
    </div>
  );
}
