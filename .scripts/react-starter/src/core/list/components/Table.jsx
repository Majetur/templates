import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";


import { useState } from "react";
import { getLoggerComponent } from "../../logger/logger";

export const Table = ({ title, columns = [], data, handleClick }) => {
  const log = getLoggerComponent(Table);
  log.info("colums", columns)

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
  const { getTableProps } = table;

  return (
    <>
      <input
        value={globalFilter}
        onChange={e => setGlobalFilter(e.target.value)}
        placeholder="Búsqueda global..."
        className="flex-1 appearance-none border border-gray-300 w-full mb-10 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />

      {/* <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md"> */}
      <div className="rounded-lg border border-gray-200 shadow-md">
        <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
          <h2 className="text-2xl leading-tight">
            {title}
          </h2>
          <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <button
                onClick={handleClick}
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="button"
              >
                Cambiar Titulo
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-end text-sm opacity-50 bg-slate-50 p-3 gap-3">
          Mostrar:{"  "}
          <select
            className="bg-transparent"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[10, 20, 30, 40, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <table
          {...getTableProps}
          className="w-full border-collapse bg-white text-left text-sm text-gray-500"
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="px-6 py-4 font-medium text-gray-900"
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {table.getRowModel().rows.map((row) => (
              <tr className="hover:bg-gray-50" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="px-6 py-4" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col flex-wrap items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
          <div className="flex flex-row">
            <div className="flex flex-row items-center">
              {" "}
              <button
                onClick={() => table.setPageIndex(0)}
                className={`${!table.getCanPreviousPage() && "opacity-40"
                  } w-full p-4 text-xs text-gray-600 bg-white border-t border-b border-r border-l rounded-l-xl hover:bg-gray-100`}
                type="button"
                disabled={!table.getCanPreviousPage()}
              >
                Primera
              </button>
              <button
                className={`${!table.getCanPreviousPage() && "opacity-40"
                  } w-full p-4 text-xs text-gray-600 bg-white border-t border-b border-r  hover:bg-gray-100`}
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {"<"}
              </button>
              <div className="text-xs mx-8  opacity-50 pb-3 text-center">
                Página {table.getState().pagination.pageIndex + 1} de{" "}
                {table.getPageCount()}
              </div>
              <button
                className={`${!table.getCanNextPage() && "opacity-40"
                  } w-full p-4 text-xs text-gray-600 bg-white border-t border-b border-l  hover:bg-gray-100`}
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {">"}
              </button>
              <button
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                className={`${!table.getCanNextPage() && "opacity-40"
                  } w-full p-4 text-xs text-gray-600 bg-white border-t border-b border-r border-l rounded-r-xl hover:bg-gray-100`}
                type="button"
                disabled={!table.getCanNextPage()}
              >
                Última
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};