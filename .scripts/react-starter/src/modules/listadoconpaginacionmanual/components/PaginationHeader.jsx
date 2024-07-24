export const PaginationHeader = ({ table }) => {
  return (
    <div className="flex justify-end text-sm opacity-50 bg-slate-50 p-3 gap-3">
      <div>
      <span className="mr-1">Ir a la página:</span>
      <input
        type="number"
        defaultValue={table.getState().pagination.pageIndex + 1}
        onChange={e => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          table.setPageIndex(page);
        }}
        className="border p-1 rounded w-16 h-8"
      />
      </div>
      <div>
      <span className="mr-1">Mostrar:</span>
      <select
        className="bg-transparent border p-1 rounded w-16 h-8"
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
    </div>
  );
};

