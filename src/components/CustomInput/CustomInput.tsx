import type { InputHTMLAttributes } from 'react'

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
    id: string
    labelClassName?: string
}

export default function CustomInput({ className = '', labelClassName = '', label, id, placeholder, type = 'text', ...props }: CustomInputProps) {
    return (
        <div className='space-y-2'>
            <label htmlFor={id} className={`block text-sm font-medium text-[#1f2937] dark:text-[#dce3f0] ${labelClassName}`}>
                {label}
            </label>
            <input
                {...props}
                id={id}
                type={type}
                placeholder={placeholder}
                className={`flex h-12 w-full rounded-xl border border-[#d9dfe7] bg-white px-3.5 text-base text-[#111827] shadow-sm outline-none transition focus:border-[#7a7ae8] focus:ring-2 focus:ring-[#7a7ae8]/20 placeholder:text-[#9aa3af] dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb] dark:placeholder:text-[#8995aa] ${className}`}
            />
        </div>
    )
}
