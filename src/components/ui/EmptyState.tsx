import clsx from "clsx";
import { Button } from "./Button";

interface EmptyStateProps {
    image?: string;
    title: string;
    description?: string;
    buttonText?: string;
    onClick?: () => void;
    className?: string;
}

function EmptyState({ image, title, description, buttonText, onClick, className }: EmptyStateProps) {
    return (
        <div
            className={clsx(
                "flex flex-col items-center justify-center text-center px-6 py-10",
                className
            )}
        >
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-52 md:w-64 lg:w-72 object-contain select-none"
                    draggable={false}
                />
            )}

            <h3 className="mt-6 text-2xl font-semibold text-slate-800">
                {title}
            </h3>

            {description && (
                <p className="mt-3 max-w-md text-slate-500 leading-7">
                    {description}
                </p>
            )}

            {buttonText && (
                <Button
                    onClick={onClick}
                    className="mt-8"
                >
                    {buttonText}
                </Button>
            )}
        </div>
    )
}

export default EmptyState
