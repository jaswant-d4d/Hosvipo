import type { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface Props<T> {
  table: Table<T>;
}

function DataTablePagination<T>({
  table,
}: Props<T>) {

  const {
    pageIndex,
    pageSize,
  } = table.getState().pagination;

  const totalRows = table.getFilteredRowModel().rows.length;

  const start = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, totalRows);

  return (
    <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-4 md:flex-row md:items-center md:justify-between">

      {/* Left */}
      <p className="text-sm text-slate-500">
        Showing{" "}
        <span className="font-semibold">{start}</span>
        {" - "}
        <span className="font-semibold">{end}</span>
        {" of "}
        <span className="font-semibold">{totalRows}</span>
      </p>

      {/* Right */}
      <div className="flex items-center gap-2">

        <select
          value={pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
        >
          {[10, 20, 50, 100].map((size) => (
            <option
              key={size}
              value={size}
            >
              {size} / page
            </option>
          ))}
        </select>

        <button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
          className="rounded-lg border p-2 disabled:opacity-40"
        >
          <ChevronsLeft size={18} />
        </button>

        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="rounded-lg border p-2 disabled:opacity-40"
        >
          <ChevronLeft size={18} />
        </button>

        <span className="px-3 text-sm font-medium">
          {pageIndex + 1} / {table.getPageCount()}
        </span>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="rounded-lg border p-2 disabled:opacity-40"
        >
          <ChevronRight size={18} />
        </button>

        <button
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
          className="rounded-lg border p-2 disabled:opacity-40"
        >
          <ChevronsRight size={18} />
        </button>

      </div>

    </div>
  );
}

export default DataTablePagination;