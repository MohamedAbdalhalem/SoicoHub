import { Sparkles } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import Image from 'next/image'
import signUpImage from '@/assests/photo-1516321318423-f06f85e504b3.avif'
import SignupForm from '@/components/SignpForm/SignupForm'

export default function SignUpPage() {
    return (
        <main className='flex min-h-screen items-center justify-center bg-[#f5f5f5] p-3 dark:bg-[#10151f] sm:p-6 lg:p-8'>
            <div className='flex h-auto min-h-[calc(100dvh-1.5rem)] w-full max-w-310 overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_30px_90px_rgba(17,24,39,0.12)] dark:bg-[#171d29] dark:shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:rounded-[30px] lg:h-190 lg:min-h-0'>
                <section className='relative hidden w-[52%] overflow-hidden bg-[#0d2bb8] lg:block'>
                    <div
                        className='absolute inset-0 bg-cover bg-center opacity-90'
                        style={{
                            filter: 'saturate(1.1) contrast(1.05)',
                        }}
                    >
                        <Image src={signUpImage} fill alt='sign-up image' />
                    </div>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_35%),linear-gradient(135deg,rgba(18,43,202,0.9),rgba(39,90,255,0.75),rgba(10,23,89,0.92))]' />
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_22%),radial-gradient(circle_at_80%_55%,rgba(255,255,255,0.16),transparent_25%)]' />

                    <div className='absolute inset-x-[-8%] bottom-[-10%] h-[45%] rounded-[56%] border border-white/10 bg-white/6 backdrop-blur-[3px]' />
                    <div className='absolute inset-x-[8%] bottom-[-18%] h-[38%] rounded-[60%] bg-white/10 blur-2xl' />

                    <div className='relative z-10 flex h-full flex-col justify-between p-10 xl:p-12'>
                        <div className='flex items-center gap-3 text-white/90'>
                            <div className='flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm'>
                                <Sparkles className='h-4 w-4' />
                            </div>
                            <span className='text-2xl font-semibold tracking-tight'>Route Posts</span>
                        </div>

                        <div className='space-y-6'>
                            <h1 className='max-w-105 text-5xl font-semibold tracking-[-0.06em] text-white xl:text-6xl'>
                                Share your route.
                                <span className='mt-2 block'>Connect the world.</span>
                            </h1>

                            <p className='max-w-112.5 text-base leading-7 text-white/80'>
                                Join millions of travelers sharing stories, routes, and discovery every day.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='flex flex-1 items-center justify-center bg-[#f7f7f7] px-4 py-6 dark:bg-[#171d29] sm:px-8 sm:py-8 lg:px-10'>
                    <div className='w-full max-w-110'>
                        <div className='mb-5 flex items-start justify-between gap-3 sm:mb-7 sm:gap-4'>
                            <h2 className='text-2xl leading-tight font-semibold tracking-tighter text-[#1b1d20] dark:text-[#f1f4fb] sm:text-4xl'>Create your account</h2>
                            <ThemeToggle compact />
                        </div>

                        <SignupForm />
                    </div>
                </section>
            </div>
        </main>
    )
}
