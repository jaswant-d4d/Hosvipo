import { User } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps {
    src?: string;
    alt?: string;
    name?: string;
    size?: Size;
    rounded?: boolean;
    online?: boolean;
    className?: string;
    onClick?: () => void;
}

const sizes: Record<Size, string> = {
    xs: "h-8 w-8 text-xs",
    sm: "h-10 w-10 text-sm",
    md: "h-12 w-12 text-base",
    lg: "h-14 w-14 text-lg",
    xl: "h-16 w-16 text-xl",
};

function getInitials(name?: string) {
    if (!name) return "";

    return name
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

export function Avatar({
    src,
    alt,
    name,
    size = "md",
    rounded = true,
    online = false,
    className,
    onClick,
}: AvatarProps) {

    const [imageError, setImageError] = useState(false);

    return (
        <div
            className={clsx(
                "relative inline-flex shrink-0",
                onClick && "cursor-pointer",
                className
            )}
            onClick={onClick}
        >
            {src && !imageError ? (
                <img
                    src={src}
                    alt={alt || name}
                    onError={() => setImageError(true)}
                    className={clsx(
                        sizes[size],
                        rounded ? "rounded-full" : "rounded-lg",
                        "object-cover border border-slate-200"
                    )}
                />
            ) : (
                <div
                    className={clsx(
                        sizes[size],
                        rounded ? "rounded-full" : "rounded-lg",
                        "flex items-center justify-center bg-primary/10 text-primary font-semibold border border-primary/20"
                    )}
                >
                    {name ? (
                        getInitials(name)
                    ) : (
                        <User size={18} />
                    )}
                </div>
            )}

            {online && (
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
            )}
        </div>
    );
}