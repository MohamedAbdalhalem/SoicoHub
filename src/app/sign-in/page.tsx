import { Sparkles } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import Image from 'next/image'
import siginImage from '@/assests/photo-1516321318423-f06f85e504b3.avif'
import SignInForm from '@/components/SignInForm/SignInForm'

export default function SignInPage() {
    return (
        <main className='flex min-h-screen items-center justify-center bg-[#f5f5f5] p-4 dark:bg-[#10151f] sm:p-6 lg:p-8'>
            <div className='flex h-215 w-full max-w-340 overflow-hidden rounded-[30px] border border-border bg-white shadow-[0_30px_90px_rgba(17,24,39,0.12)] dark:bg-[#171d29] dark:shadow-[0_30px_90px_rgba(0,0,0,0.3)]'>
                <section className='relative hidden w-[52%] overflow-hidden bg-[#0d2bb8] lg:block'>
                    <div
                        className='absolute inset-0 bg-cover bg-center opacity-90'
                        style={{
                            filter: 'saturate(1.1) contrast(1.05)',
                        }}
                    >
                        <Image src={siginImage} fill alt='sign-in image' />
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
                            <h1 className='max-w-130 text-5xl font-semibold tracking-[-0.06em] text-white xl:text-6xl'>
                                Welcome back.
                            </h1>

                            <div className='flex items-center gap-3 text-base text-white/80'>
                                <span className='text-lg'>✦</span>
                                <p className='text-xl text-white/90'>
                                    Sign in to continue your journey on Route Posts.
                                </p>
                            </div>

                            <div className='max-w-130 text-5xl font-semibold tracking-[-0.06em] text-white/90 xl:text-6xl'>
                                Welcome back.
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex flex-1 items-center justify-center bg-[#f7f7f7] px-5 py-8 dark:bg-[#171d29] sm:px-8 lg:px-10'>
                    <div className='w-full max-w-105'>
                        <div className='mb-8 flex items-start justify-between gap-4'>
                            <div className='space-y-1'>
                                <h2 className='text-4xl font-semibold tracking-tighter text-[#1b1d20] dark:text-[#f1f4fb]'>Sign in</h2>
                                <p className='text-base text-muted-foreground'>Enter your credentials to continue.</p>
                            </div>
                            <ThemeToggle compact />
                        </div>

                        <SignInForm/>
                    </div>
                </section>
            </div>
        </main>
    )
}
