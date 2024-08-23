import { describe, expect, it, vi } from 'vitest';
import { api } from '../../../../src/core/api/api';
import { fetchBackEnd } from '../../../../src/core/api/fetchBackEnd';

vi.mock('../../../../src/core/api/fetchBackEnd');

describe('API Tests', () => {
    const endpoint = '/test-endpoint';
    const id = '123';
    const entidad = { name: 'test' };

    it('Debe llamar a backend con get cuando ejecuta list', async () => {
        fetchBackEnd.mockResolvedValueOnce({
            json: async () => ['item1', 'item2']
        });

        const result = await api.list(endpoint);
        expect(fetchBackEnd).toHaveBeenCalledWith(
            endpoint,
            expect.any(Object)
        );

        expect(result).toEqual(['item1', 'item2']);
    });

    it('Debe llamar a backend con get cuando ejecuta detail', async () => {
        fetchBackEnd.mockResolvedValueOnce({
            json: async () => ({ id, ...entidad })
        });

        const result = await api.detail(endpoint, id);
        expect(fetchBackEnd).toHaveBeenCalledWith(`${endpoint}/${id}`, expect.any(Object));
        expect(result).toEqual({ id, ...entidad });
    });

    it('Debe llamar a backend con post cuando ejecuta  create', async () => {
        fetchBackEnd.mockResolvedValueOnce({
            json: async () => ({ id, ...entidad })
        });

        const result = await api.create(endpoint, entidad);
        expect(fetchBackEnd).toHaveBeenCalledWith(endpoint,
            expect.objectContaining({
                method: 'post',
                body: JSON.stringify(entidad),
                onUnauthorized: expect.any(Function)
            })
        )
        expect(result).toEqual({ id, ...entidad });
    });

    it('Debe llamar a backend con put cuando ejecuta  update', async () => {
        fetchBackEnd.mockResolvedValueOnce({
            json: async () => ({ id, ...entidad })
        });

        const result = await api.update(endpoint, id, entidad);
        expect(fetchBackEnd).toHaveBeenCalledWith(`${endpoint}/${id}`,
            expect.objectContaining({
                method: 'put',
                body: JSON.stringify(entidad),
                onUnauthorized: expect.any(Function)
            }))

        expect(result).toEqual({ id, ...entidad });
    });

    it('Debe llamar a backend con delete cuando ejecuta  delete', async () => {
        fetchBackEnd.mockResolvedValueOnce();

        await api.delete(endpoint, id);
        expect(fetchBackEnd).toHaveBeenCalledWith(`${endpoint}/${id}`,
            expect.objectContaining({
                method: 'delete',
                onUnauthorized: expect.any(Function)
            }))

    });
});