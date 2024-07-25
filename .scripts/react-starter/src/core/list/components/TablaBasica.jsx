import { flexRender } from '@tanstack/react-table';

export const TablaBasica = ({ table }) => {
  return (
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500"     >
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th
                className="px-6 py-4 font-medium text-gray-900"
                key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
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
        {table.getRowModel().rows.map(row => (
          <tr
            className="hover:bg-gray-50"
            key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td
                className="px-6 py-4"
                key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
