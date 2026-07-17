export function DefaultEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <img
        src="/empty/no-data.png"
        className="h-48"
        alt="No data"
      />

      <h3 className="mt-4 text-xl font-semibold">
        No Data Found
      </h3>

      <p className="mt-2 text-slate-500">
        There are no records available.
      </p>
    </div>
  );
}
