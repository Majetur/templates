import { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

import { Cabecera, PaginationFooter, PaginationHeader, Tabla } from '../components';

export const ListadoConPaginacionManual = ({ columnasListado, useFetchData }) => {
  const columns = useMemo(() => columnasListado, []);
  const [pagination, setPagination] = useState({
    pageIndex: 0,   //ojo pageIndex=0 => pageIndex+1 para la api ya que en la api la cuenta empieza en 1
    pageSize: 10,
  });

  const { cabecera, dataQuery } = useFetchData(pagination);
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
    enableSorting: false, //Debe deshabilitarse dado que no se implementa la ordenacion en este tipo de listado
    // debugTable: true,
  });

  return (
    <main className="px-8 sm:px-8 lg:px-8 py-1 w-full max-w-9xl mx-auto ">
      <div className="rounded-lg border border-gray-200 shadow-md">
        <Cabecera cabecera={cabecera} />
        <PaginationHeader table={table} />
        <Tabla table={table} />
        <PaginationFooter table={table} />
        {/* <div>
          Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
          {dataQuery.data?.rowCount.toLocaleString()} Rows
        </div>
        <pre>{JSON.stringify(pagination, null, 2)}</pre> */}
      </div>
    </main>
  );
};


