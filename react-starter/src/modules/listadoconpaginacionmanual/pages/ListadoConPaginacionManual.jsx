import { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

import { Table, PaginationFooter, PaginationHeader } from '../components';
import { useFetchData } from '../hooks';
import { ColumnasListado } from '../config/ColumnasListado';
export const ListadoConPaginacionManual = () => {
  const columns = useMemo(() => ColumnasListado, []);
  const [pagination, setPagination] = useState({
    pageIndex: 0,   //ojo pageIndex=0 => pageIndex+1 para la api ya que en la api la cuenta empieza en 1
    pageSize: 10,
  });

  const {title, handleClick, dataQuery} = useFetchData(pagination);
  const defaultData = useMemo(() => [], []);

  const table = useReactTable({
    data: dataQuery.data?.rows ?? defaultData,
    columns,
    rowCount: dataQuery.data?.rowCount ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    // debugTable: true,
  });

  return (
    <main className="px-8 sm:px-8 lg:px-8 py-1 w-full max-w-9xl mx-auto ">
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
        <PaginationHeader table={table} isFetching={dataQuery.isFetching} />
        <Table table={table} />
        <PaginationFooter table={table} isFetching={dataQuery.isFetching} />
        {/* <div>
        Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
        {dataQuery.data?.rowCount.toLocaleString()} Rows
      </div>
      <pre>{JSON.stringify(pagination, null, 2)}</pre> */}
      </div>
    </main>
  );
};


