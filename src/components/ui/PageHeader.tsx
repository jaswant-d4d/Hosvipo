import type { ReactNode } from "react";
import {
  Breadcrumb,
  type BreadcrumbItem,
} from "./Breadcrumb";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  actions?: ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumb,
  actions,
}: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        {breadcrumb && (
          <Breadcrumb items={breadcrumb} />
        )}

        <h1 className=" text-3xl font-bold text-slate-900">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-1 text-slate-500">
            {subtitle}
          </p>
        )}

      </div>

      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}

    </div>
  );
}