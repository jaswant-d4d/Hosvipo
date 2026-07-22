import type { LucideIcon } from "lucide-react"
import { useController, useFormContext } from "react-hook-form"

interface Props {
    name: string
    icon?: LucideIcon
    label?: string
    placeholder?: string
    styleClasses?: string
}

export function Textarea({ name, icon: Icon, label, placeholder, styleClasses }: Props) {

    const classes = `h-28 mt-1 p-3 px-4 ps-12 w-full border border-slate-500 rounded-lg outline-none focus:ring-1 focus:ring-slate-500 ${styleClasses}`;

    const { control } = useFormContext();

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    return (
        <div>
            {label && (
                <label htmlFor={name} className="text-slate-700">{label}</label>
            )}

            <div className="relative">
                {Icon && (
                    <Icon className="text-slate-700 size-5 absolute top-4.5 left-4 " />
                )}
                <textarea  {...field} id={name} name={name} placeholder={placeholder} className={classes} cols={4}>
                </textarea>

            </div>
            {error && (
                <p className="text-sm text-red-500">{error.message}</p>
            )}
        </div>
    )
}

