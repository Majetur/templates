import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useListItems } from "../../../../src/modules/list";


describe('hook useListItems', () => {
    it('tiene un titulo', () => {
        const useListItemsHook = renderHook(() => useListItems())

        expect(useListItemsHook.result.current.title).toBe("Titulo")
    })

    it('tiene 0 elementos al arrancar', () => {
        const useListItemsHook = renderHook(() => useListItems())

        expect(useListItemsHook.result.current.items).toStrictEqual([])
    })

    it('si ejecutamos handleClick cambia el titulos', async () => {
        const useListItemsHook = renderHook(() => useListItems())

        act(() => {
            useListItemsHook.result.current.handleClick()
        })

        expect(useListItemsHook.result.current.title).toBe("Demo")
    })
})