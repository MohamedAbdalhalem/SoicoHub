"use client"
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SubmitButton({text,classes} : {text : string,classes? : string}) {
    const { pending } = useFormStatus()
    const className = classes ? classes : 'h-12 w-full rounded-xl bg-[#4e3ef0] text-base font-semibold text-white shadow-[0_10px_20px_rgba(78,62,240,0.25)] hover:bg-[#4739db]'
    return (
        <Button
            type='submit'
            disabled={pending}
            className={className}
        >
            {pending ? 'Loading...' : text}
        </Button>
    )
}
