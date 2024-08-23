import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useListConsejoGobierno } from "../../../../../src/modules/consejodegobierno";


describe('hook useListConsejoGobierno', () => {
    it('tiene un titulo', () => {
        const useListConsejoGobiernoHook = renderHook(() => useListConsejoGobierno())

        expect(useListConsejoGobiernoHook.result.current.cabecera.title).toBe("Consejo de Gobierno")
    })

    it('tiene 0 elementos al arrancar', () => {
        const useListConsejoGobiernoHook = renderHook(() => useListConsejoGobierno())

        expect(useListConsejoGobiernoHook.result.current.items).toStrictEqual([])
    })
})