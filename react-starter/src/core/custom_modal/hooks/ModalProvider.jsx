import { useState } from 'react';
import Modal from 'react-modal';

import { ModalContext } from './ModalContext'; // Importa el contexto

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('alert');
  const [content, setContent] = useState({ title: "", content: "" });

  const openModal = (modalContent, type = 'alert') => {
    setContent(modalContent);
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent({ title: "", content: "", onConfirm: null });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={{
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '2rem',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            width: '90%',
            maxWidth: '400px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
          <p>{content.content}</p>
          <div className="flex justify-center mt-8">
            {modalType === 'confirm' && (
              <button
                onClick={() => {
                  if (content.onConfirm) content.onConfirm();
                  closeModal();
                }}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Confirmar
              </button>
            )}
            <button onClick={closeModal} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
              {modalType === 'confirm' ? 'Cancelar' : 'Cerrar'}
            </button>
          </div>
        </div>
      </Modal>
    </ModalContext.Provider>
  );
};
