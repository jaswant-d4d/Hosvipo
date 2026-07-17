import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({
  items,
  className = "",
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={`mb-5 flex items-center text-sm text-slate-500 ${className}`}
    >
      {items.map((item, index) => {
        const last = index === items.length - 1;

        return (
          <div
            key={item.label}
            className="flex items-center"
          >
            {item.href && !last ? (
              <Link
                to={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  last
                    ? "font-semibold text-slate-800"
                    : ""
                }
              >
                {item.label}
              </span>
            )}

            {!last && (
              <ChevronRight
                size={16}
                className="mx-2 text-slate-400"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}