import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ModalProvider, useModal } from '../../../../src/core/custom_modal';

import Modal from 'react-modal';
Modal.setAppElement(document.createElement('div'));


// Componente de prueba para usar el hook useModal
const TestComponent = () => {
  const { openModal, closeModal } = useModal();
  return (
    <>
      <button onClick={() => openModal({ title: 'Titulo', content: 'Contenido' })}>
        Abrir Modal
      </button>
      <button onClick={closeModal}>Cerrar Modal</button>
    </>
  );
};

describe('ModalProvider', () => {
  beforeEach(() => {
    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );
  });

  afterEach(cleanup); // Limpiar el DOM después de cada prueba

  it('debe abrir el modal con el contenido correcto cuando se llama a openModal', async () => {
    fireEvent.click(screen.getByText('Abrir Modal'));
    await screen.findByText("Titulo")
    await screen.findByText("Contenido")
  });

  it('debe cerrar el modal cuando se pulsa en Cerrar Modal', async () => {
    fireEvent.click(screen.getByText('Abrir Modal'));
    fireEvent.click(screen.getByText('Cerrar Modal'));

    expect(screen.queryByText('Titulo')).toBeNull();
    expect(screen.queryByText('Contenido')).toBeNull();
  });
});
