import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, beforeEach, expect, afterEach, vi } from 'vitest';
import { ModalProvider, ConfirmModal } from '../../../../../src/core/custom_modal';

import Modal from 'react-modal';
Modal.setAppElement(document.createElement('div'));

describe('ConfirmModal', () => {
    let confirmMock;

    beforeEach(() => {
        confirmMock = vi.fn();  // Crear un mock function
        render(
            <ModalProvider>
                <ConfirmModal
                    title="Confirmación"
                    content="¿Estás seguro de que deseas continuar?"
                    titleButton="Abrir Modal de Confirmación"
                    handleConfirm={confirmMock} />
            </ModalProvider>
        );
    });

    afterEach(cleanup); // Limpiar el DOM después de cada prueba

    it('debe abrir el modal de confirmacion con el contenido correcto cuando se pulsa el boton Abrir Modal de Confirmacion', async () => {
        fireEvent.click(screen.getByText('Abrir Modal de Confirmación'));
        await screen.findByText("Confirmación")
        await screen.findByText("¿Estás seguro de que deseas continuar?")
        await screen.findByText('Confirmar');
        await screen.findByText('Cancelar');
    });

    it('debe cerrar el modal cuando se pulsa en Cancelar', async () => {
        fireEvent.click(screen.getByText('Abrir Modal de Confirmación'));
        fireEvent.click(screen.getByText('Cancelar'));

        expect(screen.queryByText('Confirmación')).toBeNull();
        expect(screen.queryByText('¿Estás seguro de que deseas continuar?')).toBeNull();
    });

    it('debe ejecutar la funciona asociada cuando se pulsa en Confirmar', async () => {
        fireEvent.click(screen.getByText('Abrir Modal de Confirmación'));
        fireEvent.click(screen.getByText('Confirmar'));

        expect(confirmMock).toHaveBeenCalled();  // Verificar que el mock function fue llamada
    });

});













