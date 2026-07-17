import { Eye, EyeOff, LockKeyhole } from "lucide-react"
import { useState } from "react"
import { useController, useFormContext } from "react-hook-form"

interface Props {
    name: string
    label: string
    placeholder: string
}
export function PasswordInput({ name, label, placeholder }: Props) {
    const classes = "mt-1 p-3 px-4 ps-12 w-full border border-slate-500 rounded-lg outline-none focus:ring-1 focus:ring-slate-500";

    const [showPassword, setShowPassword] = useState(false);
    const { control } = useFormContext();

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    return (
        <div className="">
            <label htmlFor={name} className="text-slate-700">{label}</label>
            <div className="relative">
                <LockKeyhole className="text-slate-700 size-5 absolute top-4.5 left-4 " />

                <input {...field} type={showPassword ? "text" : "password"} id={name} name={name} placeholder={placeholder} className={classes} />

                <button type="button" className="absolute top-4 right-4" onClick={() => setShowPassword((prev) => !prev)} >
                    {
                        showPassword
                            ? <Eye className="text-slate-700 size-5" />
                            : <EyeOff className="text-slate-700 size-5" />
                    }
                </button>
            </div>
            {error && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
            )}
        </div>
    )
}


