import clsx from "clsx";
import type { ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "gray"
  | "outline";

type Size = "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  rounded?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary/10 text-primary border border-primary/20",

  secondary:
    "bg-secondary/10 text-secondary border border-secondary/20",

  success:
    "bg-emerald-100 text-emerald-700 border border-emerald-200",

  warning:
    "bg-amber-100 text-amber-700 border border-amber-200",

  danger:
    "bg-red-100 text-red-700 border border-red-200",

  info:
    "bg-sky-100 text-sky-700 border border-sky-200",

  gray:
    "bg-slate-100 text-slate-700 border border-slate-200",

  outline:
    "bg-transparent border border-slate-300 text-slate-700",
};

const sizes: Record<Size, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center text-nowrap font-medium",
        rounded ? "rounded-full" : "rounded-md",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}