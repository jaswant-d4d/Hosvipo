import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import DataTablePagination from "./DataTablePagination";
import type { ReactNode } from "react";
import { DefaultEmptyState } from "./DefaultEmptyState";
import { DataTableError } from "./DataTableError";
import GlobalLoader from "../GlobalLoader";

interface DataTableProps<TData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  loading?: boolean;
  error?: string;
  emptyComponent?: ReactNode;
  onRetry?: () => void;
}

function DataTable<TData>({
  columns,
  data,
  loading,
  error,
  onRetry,
  emptyComponent
}: DataTableProps<TData>) {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });


  if (loading) {
    return (
      <div className="flex h-full min-h-125 items-center justify-center rounded-xl border border-slate-200 bg-white">
        {loading && <GlobalLoader />}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full min-h-125 items-center justify-center rounded-xl border border-slate-200 bg-white">
        {error && (
          <DataTableError
            message={error}
            onRetry={onRetry}
          />
        )}
      </div>
    );
  }

  if (table.getRowModel().rows.length === 0) {
    return (
      <div className="flex h-full min-h-125 items-center justify-center rounded-xl border border-slate-200 bg-white">
        {emptyComponent ?? <DefaultEmptyState />}
      </div>
    );
  }

  return (
    <div className="flex h min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex-1 overflow-auto">
        <table className="min-w-full relative">
          <thead className="bg-slate-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-5 py-4 text-left text-sm font-semibold text-slate-800"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr
                key={row.id}
                className="border-t border-slate-200 hover:bg-slate-50"
              >
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-5 py-4 text-sm text-slate-700"
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}

          </tbody>
        </table>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}

export default DataTable;