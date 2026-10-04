"use client"
import { useEffect, useState } from 'react'

export default function AuthErrorAlert({ errorMassage }: { errorMassage: string }) {
    const [isDisplay, setIsDisplay] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDisplay(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {isDisplay && <div
                role='alert'
                className='mb-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-200'
            >
                <span aria-hidden='true' className='mt-0.5 font-semibold'>!</span>
                <p>{errorMassage}</p>
            </div>}
        </>
    )
}
