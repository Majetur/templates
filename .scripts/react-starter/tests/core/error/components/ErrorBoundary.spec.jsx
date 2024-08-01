import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ErrorBoundary } from '../../../../src/core';


describe('ErrorBoundary', () => {

    afterEach(cleanup);

    // Prueba para la renderización sin errores
    it('renderiza sin error', () => {
        render(
            <ErrorBoundary>
                <div>Componente hijo</div>
            </ErrorBoundary>
        );
        // Verifica que el texto "Componente hijo" está en el documento
        expect(screen.getByText('Componente hijo')).not.toBeNull();
    });

    // Componente que lanzará un error
    const ProblemChild = ({ shouldThrow }) => {
        if (shouldThrow) {
            throw new Error('Test error');
        }
        return <div>Child Component</div>;
    };

    // Prueba para la captura de errores
    it('captura el error y muestra los mensajes correspondientes', () => {
        render(
            <MemoryRouter>
                <ErrorBoundary>
                    <ProblemChild shouldThrow={true} />
                </ErrorBoundary>
            </MemoryRouter>
        );
        expect(screen.getByText('Se ha producido un error')).not.toBeNull();
        expect(screen.getByText('Intentar de nuevo')).not.toBeNull();
        expect(screen.getByText('Recargar página')).not.toBeNull();
        expect(screen.getByText('Volver a la página de inicio')).not.toBeNull();
    });

    // it('handleRetry resetea el estado del error', () => {
    //     const { rerender } = render(
    //         <MemoryRouter>
    //             <ErrorBoundary>
    //                 <ProblemChild shouldThrow={true} />
    //             </ErrorBoundary>
    //         </MemoryRouter>
    //     );

    //     fireEvent.click(screen.getByText('Intentar de nuevo'));

    //     // Rerender the ErrorBoundary with a component that doesn't throw an error
    //     rerender(
    //         <MemoryRouter>
    //             <ErrorBoundary>
    //                 <ProblemChild shouldThrow={false} />
    //             </ErrorBoundary>
    //         </MemoryRouter>
    //     );

    //     // Verify that the error message is no longer displayed
    //     expect(screen.queryByText('Se ha producido un error')).toBeNull();
    //     expect(screen.getByText('Child Component')).not.toBeNull();
    // });


    it('handleReload recarga la pagina', () => {
        // Simula la función de recarga de la página
        const originalReload = window.location.reload;
        window.location.reload = vi.fn();

        render(
            <MemoryRouter>
                <ErrorBoundary>
                    <ProblemChild />
                </ErrorBoundary>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Recargar página'));
        expect(window.location.reload).toHaveBeenCalled();

        // Restaura la función original
        window.location.reload = originalReload;
    });
});