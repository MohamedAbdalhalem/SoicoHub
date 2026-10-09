'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className='flex min-h-screen items-center justify-center bg-[#f3f5f8] px-4 dark:bg-[#10151f]'>
      <section className='w-full max-w-md rounded-[20px] border border-[#e5e8ee] bg-[#f7f8fb] p-6 text-center dark:border-[#303a4c] dark:bg-[#1b2330]'>
        <h1 className='text-lg font-semibold text-[#1d2430] dark:text-[#e9eef8]'>
          This page couldn&apos;t load
        </h1>
        <p className='mt-2 text-sm text-[#7b8393] dark:text-[#9da9bc]'>
          Something went wrong while loading the feed. Please try again.
        </p>
        <button
          type='button'
          onClick={retry}
          className='mt-5 rounded-lg bg-[#5b4fe8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4f43d8]'
        >
          Try again
        </button>
      </section>
    </main>
  )
}
