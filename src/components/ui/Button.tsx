import type React from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "success" | "danger" | "warning" | "outline" | "outlinePrimary" | "ghost" | "gradient" | "dark";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

type Radius = "none" | "sm" | "md" | "lg" | "xl" | "full";

interface Props {
    children: React.ReactNode
    variant?: Variant
    size?: Size
    loading?: boolean
    disabled?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    fullWidth?: boolean
    rounded?: Radius
    className?: string,
    onClick: () => void
}
export function Button({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    rounded = "lg",
    className = "",
    onClick,
    ...props
}: Props) {

    const variants: Record<Variant, string> = {
        primary:
            "bg-primary hover:bg-primary text-white shadow-md",

        secondary:
            "bg-slate-100 hover:bg-slate-200 text-slate-800",

        success:
            "bg-emerald-600 hover:bg-emerald-700 text-white",

        danger:
            "bg-red-600 hover:bg-red-700 text-white",

        warning:
            "bg-amber-500 hover:bg-amber-600 text-white",

        outlinePrimary:
            "border border-primary text-primary hover:bg-blue-50",

        outline:
            "border border-secondary text-secondary hover:bg-slate-50",

        ghost:
            "hover:bg-slate-100 text-slate-700",

        gradient:
            "bg-gradient-to-r from-primary to-primary2 text-white hover:opacity-95",

        dark:
            "bg-slate-900 text-white hover:bg-slate-800",
    };

    const sizes: Record<Size, string> = {
        xs: "px-2 py-1 text-xs",
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-6 py-3 text-base",
        xl: "px-8 py-4 text-lg",
    };

    const radius: Record<Radius, string> = {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
    };

    return (
        <button
            disabled={disabled || loading}
            className={clsx(
                "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
                "disabled:opacity-60 disabled:cursor-not-allowed",
                variants[variant],
                sizes[size],
                radius[rounded],
                fullWidth && "w-full",
                className
            )}
            {...props}
            onClick={onClick}
        >
            {loading ? (
                <Loader2 className="animate-spin h-4 w-4" />
            ) : leftIcon}

            <span>{children}</span>

            {!loading && rightIcon}
        </button>
    );
}