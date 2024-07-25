export const PaginationFooter = ({ table }) => {
  return (
    <div className="flex flex-col flex-wrap items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
      <div className="flex flex-row">
        <div className="flex flex-row items-center">
          {" "}
          <button
            onClick={() => table.setPageIndex(0)}
            className={`${!table.getCanPreviousPage() && "opacity-40"}
             w-full p-4 text-xs text-gray-600 bg-white border-t border-b border-r border-l rounded-l-xl hover:bg-gray-100`}
            type="button"
            disabled={!table.getCanPreviousPage()}
          >
            {'Primera'}
          </button>
          <button
            className={`${!table.getCanPreviousPage() && "opacity-40"
              } w-full p-4 text-xs text-gray-600 bg-white border-t border-b border-r  hover:bg-gray-100`}
            type="button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>

          <div className="text-xs mx-8  opacity-50 pb-3 text-center">
            Página {parseInt(table.getState().pagination.pageIndex) + 1} de {' '}
            {table.getPageCount().toLocaleString()}
          </div>


          <button
            className={`${!table.getCanNextPage() && "opacity-40"}
             w-full p-4 text-xs text-gray-600 bg-white border-t border-b border-l hover:bg-gray-100`}
            type="button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className={`${!table.getCanNextPage() && "opacity-40"}
             w-full p-4 text-xs text-gray-600 bg-white border-t border-b border-r border-l rounded-r-xl hover:bg-gray-100`}
            type="button"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'Última'}
          </button>
        </div>
      </div>
    </div>

  );
};

