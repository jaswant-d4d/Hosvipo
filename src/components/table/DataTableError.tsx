import { AlertTriangle } from "lucide-react";
import { Button } from "../ui";

interface Props {
  message?: string;
  onRetry?: () => void;
}

export function DataTableError({
  message,
  onRetry,
}: Props) {
  return (
    <div className="flex flex-col items-center">

      <AlertTriangle
        size={60}
        className="text-red-500"
      />

      <h3 className="mt-5 text-xl font-semibold">
        Something went wrong
      </h3>

      <p className="mt-2 text-slate-500">
        {message ?? "Unable to load records."}
      </p>

      {onRetry && (
        <Button
          className="mt-6"
          onClick={onRetry}
        >
          Retry
        </Button>
      )}

    </div>
  );
}