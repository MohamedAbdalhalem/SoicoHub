import Link from 'next/link'
import { ArrowLeft, Compass, Home, Search, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f3f5f8] px-4 py-8 text-[#1f2530] dark:bg-[#10151f] dark:text-[#f1f4fb] sm:px-6 lg:px-8'>
      <div className='pointer-events-none absolute inset-0 opacity-70 dark:opacity-40'>
        <div className='absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#d9d4ff]/60 blur-3xl dark:bg-[#4338a8]/25' />
        <div className='absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-[#cfe7ff]/70 blur-3xl dark:bg-[#245a8f]/25' />
      </div>

      <div className='relative w-full max-w-190'>
        <div className='mb-8 flex items-center justify-center gap-3 sm:justify-start'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#5a4ae9] text-white shadow-[0_8px_18px_rgba(90,74,233,0.35)]'>
            <Sparkles className='h-4 w-4' />
          </div>
          <span className='text-[17px] font-semibold tracking-tight text-[#2a2f3a] dark:text-[#eef2ff]'>Route Posts</span>
        </div>

        <section className='overflow-hidden rounded-[28px] border border-[#e3e7ee] bg-[#f8f9fb]/90 shadow-[0_24px_70px_rgba(17,24,39,0.08)] backdrop-blur-sm dark:border-[#303a4c] dark:bg-[#1b2330]/90 dark:shadow-[0_24px_70px_rgba(0,0,0,0.24)]'>
          <div className='grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[0.9fr_1.1fr] md:p-12'>
            <div className='relative mx-auto flex aspect-square w-full max-w-65 items-center justify-center rounded-[30px] border border-[#e0e4ec] bg-[#f1f3f8] dark:border-[#354154] dark:bg-[#202838]'>
              <div className='absolute inset-6 rounded-full border border-dashed border-[#cfd5e2] dark:border-[#4a5870]' />
              <div className='absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-[#5b4fe8] shadow-[0_0_0_8px_rgba(91,79,232,0.12)]' />
              <div className='absolute bottom-8 left-8 h-3 w-3 rounded-full bg-[#f0ad7b]' />
              <div className='absolute right-8 top-1/3 h-3 w-3 rounded-full bg-[#83c6df]' />
              <div className='relative flex h-30 w-30 -rotate-12 items-center justify-center rounded-[28px] bg-[#5b4fe8] text-white shadow-[0_18px_28px_rgba(91,79,232,0.28)]'>
                <Compass className='h-15 w-15' strokeWidth={1.5} />
              </div>
              <span className='absolute bottom-5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#5b4fe8] uppercase shadow-sm dark:bg-[#171d29] dark:text-[#aaa4ff]'>Off route</span>
            </div>

            <div className='text-center md:text-left'>
              <p className='text-[13px] font-semibold tracking-[0.2em] text-[#5b4fe8] uppercase dark:text-[#aaa4ff]'>Error 404</p>
              <h1 className='mt-3 text-[42px] font-semibold leading-[0.98] tracking-[-0.07em] text-[#1d2430] dark:text-[#f1f4fb] sm:text-[56px]'>This route is missing.</h1>
              <p className='mt-5 max-w-115 text-[16px] leading-7 text-[#687386] dark:text-[#aeb8ca]'>The page you are looking for may have moved, been renamed, or taken a wrong turn. Let&apos;s get you back to the conversation.</p>

              <div className='mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start'>
                <Button asChild className='h-11 rounded-xl bg-[#5b4fe8] px-5 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(91,79,232,0.24)] hover:bg-[#4f43d8]'>
                  <Link href='/'>
                    <Home className='mr-2 h-4 w-4' />
                    Back to home
                  </Link>
                </Button>
                <Button asChild variant='outline' className='h-11 rounded-xl border-[#dfe3eb] bg-white px-5 text-[15px] font-medium text-[#303847] hover:bg-[#f1f3f8] dark:border-[#354154] dark:bg-[#202838] dark:text-[#e9eef8] dark:hover:bg-[#293447]'>
                  <Link href='/bookmarks'>
                    <Search className='mr-2 h-4 w-4' />
                    Browse bookmarks
                  </Link>
                </Button>
              </div>

              <Link href='/' className='mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-[#727d8e] hover:text-[#5b4fe8] dark:text-[#aeb8ca] dark:hover:text-[#c1bdff]'>
                <ArrowLeft className='h-4 w-4' />
                Return to your feed
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
