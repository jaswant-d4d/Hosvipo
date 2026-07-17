
import { useController, useFormContext } from "react-hook-form"

interface Props {
    name: string
    label?: string
}

export function Checkbox({ name, label }: Props) {

    const classes = `peer h-5 w-5 appearance-none rounded border-2 border-slate-300 checked:border-[#68cdd8] checked:bg-[#68cdd8] cursor-pointer`;

    const { control } = useFormContext();

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: false,
    });

    return (
        <div>
            <label className="flex items-center gap-2 cursor-pointer text-slate-700">
                <input
                    type="checkbox"
                    id={name}
                    name={name}
                    ref={field.ref}
                    checked={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    onBlur={field.onBlur}
                    className={classes}
                    style={{ accentColor: "#68cdd8", }}
                />
                <svg
                    className="pointer-events-none absolute hidden h-4.5 w-4.5 text-white peer-checked:block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.42 0l-3.2-3.2a1 1 0 011.42-1.42l2.49 2.49 6.49-6.49a1 1 0 011.42 0z"
                        clipRule="evenodd"
                    />
                </svg>

                {label}
            </label>
            {error && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
            )}
        </div>
    )
}

