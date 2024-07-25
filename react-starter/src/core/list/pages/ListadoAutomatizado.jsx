import { useMemo, useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";

import { PaginationFooter, PaginationHeader, TablaBasica } from '../components';
import { Cabecera } from '../components/Cabecera';

// export const ListadoAutomatizado = ({ title="", columns = [], data, handleClick }) => {
export const ListadoAutomatizado = ({ cabecera, columns = [], data }) => {

    const memoColumns = useMemo(() => columns, [columns]);
    const memoData = useMemo(() => data, [data]);

    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('')

    const table = useReactTable({
        columns: memoColumns,
        data: memoData,
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            globalFilter
        },
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        // debugTable: true
    });

    return (
        <main className="px-8 sm:px-8 lg:px-8 py-1 w-full max-w-9xl mx-auto ">
            <div className="rounded-lg border border-gray-200 shadow-md">
                <input
                    value={globalFilter}
                    onChange={e => setGlobalFilter(e.target.value)}
                    placeholder="Búsqueda global..."
                    className="flex-1 appearance-none border border-gray-300 w-full mb-10 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />

                <Cabecera cabecera={cabecera} />
                <PaginationHeader table={table} />
                <TablaBasica table={table} />
                <PaginationFooter table={table} />
            </div>
        </main>
    );
};


