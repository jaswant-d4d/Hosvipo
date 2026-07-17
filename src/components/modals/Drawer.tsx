import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

type Placement = "left" | "right" | "top" | "bottom";

interface DrawerProps {
    open: boolean;
    onClose: () => void;

    title?: string;

    children: ReactNode;

    footer?: ReactNode;

    width?: string;
    height?: string;

    placement?: Placement;

    showCloseButton?: boolean;
}

export function Drawer({
    open,
    onClose,

    title,

    children,

    footer,

    width = "max-w-xl",
    height = "h-[80vh]",

    placement = "right",

    showCloseButton = true,
}: DrawerProps) {

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    const placementClasses = {
        right: `right-0 top-0 h-full w-full ${width} transition-all duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`,
        left: `left-0 top-0 h-full w-full ${width} transition-all duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`,
        top: `left-0 top-0 w-full ${height} transition-all duration-300 ease-in-out ${open ? "translate-y-0" : "-translate-y-full"}`,
        bottom: ` left-0 bottom-0 w-full ${height} transition-all duration-300 ease-in-out ${open ? "translate-y-0" : "translate-y-full"}`,
    };

    return (
        <div className={`fixed inset-0 z-50 transition-all delay-500 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>

            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300
                    ${open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }
                `}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`fixed bg-white shadow-2xl flex flex-col ${placementClasses[placement]}`}
            >

                {(title || showCloseButton) && (

                    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

                        <h2 className="text-xl font-semibold text-slate-900">
                            {title}
                        </h2>

                        {showCloseButton && (

                            <button
                                onClick={onClose}
                                className="rounded-lg p-2 hover:bg-slate-100"
                            >
                                <X size={20} />
                            </button>

                        )}

                    </div>

                )}

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>

                {/* Footer */}
                {footer && (
                    <div className="border-t border-slate-200 p-5">
                        {footer}
                    </div>
                )}

            </div>

        </div>
    );
}