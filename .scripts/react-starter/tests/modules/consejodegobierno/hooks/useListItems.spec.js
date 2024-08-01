import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useListItems } from "../../../../src/modules/consejodegobierno"


describe('hook useListItems', () => {
    it('tiene un titulo', () => {
        const useListItemsHook = renderHook(() => useListItems())

        expect(useListItemsHook.result.current.cabecera.title).toBe("Consejo de Gobierno")
    })

    it('tiene 0 elementos al arrancar', () => {
        const useListItemsHook = renderHook(() => useListItems())

        expect(useListItemsHook.result.current.items).toStrictEqual([])
    })

    it('si ejecutamos handleClick cambia el titulos', async () => {
        const useListItemsHook = renderHook(() => useListItems())

        act(() => {
            useListItemsHook.result.current.cabecera.btnCabecera.onClickBoton()
        })

        expect(useListItemsHook.result.current.cabecera.title).toBe("Titulo cambiado")
    })
})