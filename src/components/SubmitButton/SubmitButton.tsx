"use client"
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button
            type='submit'
            disabled={pending}
            className='h-12 w-full rounded-xl bg-[#4e3ef0] text-base font-semibold text-white shadow-[0_10px_20px_rgba(78,62,240,0.25)] hover:bg-[#4739db]'
        >
            {pending ? 'Creating...' : 'Create account'}
        </Button>
    )
}
