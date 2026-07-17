import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    width?: string;
    showCloseButton?: boolean;
}

export function Modal({
    open,
    onClose,
    title,
    children,
    width = "max-w-lg",
    showCloseButton = true,
}: ModalProps) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className={`relative w-full ${width} rounded-2xl bg-white shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
            >
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between text-slate-900 border-b border-slate-400 px-6 py-4">
                        <h2 className="text-lg font-semibold">{title}</h2>

                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className="rounded-lg p-2 hover:bg-gray-100 transition"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                )}

                <div className="p-6">{children}</div>
            </div>
        </div>
    );
}