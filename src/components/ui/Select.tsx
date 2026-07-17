import type { LucideIcon } from "lucide-react"
import { useController, useFormContext } from "react-hook-form"

type SelectType = { label: string, value: string };

interface Props {
    name: string
    icon?: LucideIcon
    label?: string
    options: SelectType[]
}

export function Select({ name, icon: Icon, label, options }: Props) {

    const classes = "mt-1 p-3 px-4 ps-12 w-full border border-slate-500 rounded-lg outline-none focus:ring-1 focus:ring-slate-500";

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

                <select {...field} id={name} name={name} className={classes}>

                    {options?.map(({ label, value }: SelectType) => (
                        <option value={value}>{label}</option>
                    ))}

                </select>

            </div>
            {error && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
            )}
        </div>
    )
}

