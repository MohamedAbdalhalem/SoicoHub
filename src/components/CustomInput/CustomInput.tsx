
type CustomInputProps = {
    className?: string,
    labelClassName?: string,
    label: string,
    id: string,
    type: string,
    placeholder : string,
    name : string,
    defaultValue? : string,
    errorMassage? : undefined | string
}

export default function CustomInput(
    { className = '', labelClassName = '',errorMassage = undefined, label, id, ...props }: 
        CustomInputProps
    ) {
    return (
        <div className='space-y-0.5'>
            <label htmlFor={id} className={`block text-sm font-medium text-[#1f2937] dark:text-[#dce3f0] ${labelClassName}`}>
                {label}
            </label>
            <input
                {...props}
                id={id}
                className={`flex h-10 w-full rounded-xl border border-[#d9dfe7] bg-white px-3.5 text-base text-[#111827] shadow-sm outline-none transition focus:border-[#7a7ae8] focus:ring-2 focus:ring-[#7a7ae8]/20 placeholder:text-[#9aa3af] dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb] dark:placeholder:text-[#8995aa] ${className}`}
            />
            {errorMassage && <p className="text-red-700 text-xs">{errorMassage}</p>}
        </div>
    )
}
