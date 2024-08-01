import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, beforeEach, expect, afterEach } from 'vitest';
import { AlertModal, ModalProvider } from '../../../../src/core/custom_modal';

import Modal from 'react-modal';
Modal.setAppElement(document.createElement('div'));

describe('AlertModal', () => {
    beforeEach(() => {
        render(
            <ModalProvider>
                <AlertModal
                    title="Titulo"
                    content="Contenido del Alert Modal"
                    titleButton="Abrir Alert Modal"
                />
            </ModalProvider>
        );
    });

    afterEach(cleanup); // Limpiar el DOM después de cada prueba

    it('debe abrir un alert modal con el contenido conrrecto cuando se pulsa el boton Abrir Alert Modal', async () => {
        fireEvent.click(screen.getByText('Abrir Alert Modal'));
        await screen.findByText("Titulo")
        await screen.findByText("Contenido del Alert Modal")
        await screen.findByText('Cerrar');
    });

    it('debe cerrar el modal cuando se pulsa en Cerrar Modal', async () => {
        fireEvent.click(screen.getByText('Abrir Alert Modal'));
        fireEvent.click(screen.getByText('Cerrar'));

        expect(screen.queryByText('Titulo')).toBeNull();
        expect(screen.queryByText('Contenido del Alert Modal')).toBeNull();
    });

});
