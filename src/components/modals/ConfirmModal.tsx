import { AlertTriangle, CircleAlert, CircleCheck, Info } from "lucide-react";
import { Modal } from "./Modal";
import { Button } from "../ui";
import type { ReactNode } from "react";

type Variant = "danger" | "warning" | "success" | "info";

interface ConfirmModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;

    title: string;
    description?: string;

    confirmText?: string;
    cancelText?: string;

    loading?: boolean;

    variant?: Variant;

    icon?: ReactNode;
}

const variants = {
    danger: {
        icon: AlertTriangle,
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        button: "danger" as const,
    },

    warning: {
        icon: CircleAlert,
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        button: "warning" as const,
    },

    success: {
        icon: CircleCheck,
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        button: "success" as const,
    },

    info: {
        icon: Info,
        iconBg: "bg-sky-100",
        iconColor: "text-sky-600",
        button: "primary" as const,
    },
};

export function ConfirmModal({
    open,
    onClose,
    onConfirm,

    title,
    description,

    confirmText = "Confirm",
    cancelText = "Cancel",

    loading = false,

    variant = "danger",

    icon,
}: ConfirmModalProps) {

    const config = variants[variant];
    const Icon = config.icon;

    return (
        <Modal
            open={open}
            onClose={onClose}
            width="max-w-md"
            showCloseButton={false}
        >
            <div className="text-center">

                <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${config.iconBg}`}
                >
                    {icon ?? (
                        <Icon
                            className={config.iconColor}
                            size={32}
                        />
                    )}
                </div>

                <h2 className="mt-5 text-2xl font-semibold text-slate-900">
                    {title}
                </h2>

                {description && (
                    <p className="mt-2 text-sm text-slate-500">
                        {description}
                    </p>
                )}

                <div className="mt-8 flex gap-3">

                    <Button
                        variant="outline"
                        fullWidth
                        onClick={onClose}
                        disabled={loading}
                    >
                        {cancelText}
                    </Button>

                    <Button
                        fullWidth
                        variant={config.button}
                        onClick={onConfirm}
                        loading={loading}
                    >
                        {confirmText}
                    </Button>

                </div>

            </div>
        </Modal>
    );
}