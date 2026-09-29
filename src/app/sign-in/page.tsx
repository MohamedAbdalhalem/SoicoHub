import { Button } from '@/components/ui/button'
import {  EyeOff, Sparkles } from 'lucide-react'
import CustomInput from '@/components/CustomInput/CustomInput'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import Image from 'next/image'
import Link from 'next/link'
import siginImage from '@/assests/photo-1516321318423-f06f85e504b3.avif'

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

                        <form className='space-y-5'>
                            <CustomInput id='email' label='Email or username' type='text'   name='email' placeholder='your email please' />

                            <div className='space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <label htmlFor='password' className='block text-sm font-medium text-[#1f2937] dark:text-[#dce3f0]'>
                                        Password
                                    </label>
                                    <button type='button' className='text-sm font-medium text-[#4d62ff] hover:underline'>
                                        Forgot password?
                                    </button>
                                </div>
                                <div className='relative'>
                                    <input
                                        id='password'
                                        type='password'
                                        placeholder='Enter password'
                                        className='flex h-12 w-full rounded-xl border border-[#d9dfe7] bg-white px-3.5 pr-11 text-base text-[#111827] shadow-sm outline-none transition focus:border-[#7a7ae8] focus:ring-2 focus:ring-[#7a7ae8]/20 placeholder:text-[#9aa3af] dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb] dark:placeholder:text-[#8995aa]'
                                    />
                                    <button
                                        type='button'
                                        aria-label='Toggle password visibility'
                                        className='absolute inset-y-0 right-3 flex items-center text-[#6b7280] transition hover:text-[#374151]'
                                    >
                                        <EyeOff className='h-4 w-4' />
                                    </button>
                                </div>
                            </div>

                            <Button type='submit' className='h-12 w-full rounded-xl bg-[#4e3ef0] text-base font-semibold text-white shadow-[0_10px_20px_rgba(78,62,240,0.25)] hover:bg-[#4739db]'>
                                Sign In
                            </Button>

                            <div className='relative my-4'>
                                <div className='absolute inset-0 flex items-center'>
                                    <div className='w-full border-t border-[#dfe4ea]' />
                                </div>
                                <div className='relative flex justify-center'>
                                    <span className='bg-[#f7f7f7] px-4 text-sm text-[#6b7280] dark:bg-[#171d29] dark:text-[#aeb8ca]'>or</span>
                                </div>
                            </div>

                            <Button
                                type='button'
                                variant='outline'
                                className='h-12 w-full rounded-xl border border-[#dfe4ea] bg-white text-base font-medium text-[#1b1d20] hover:bg-[#f3f5f9] dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb] dark:hover:bg-[#293447]'
                            >
                                <span className='mr-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1f2937]'>
                                    G
                                </span>
                                Continue with Google
                            </Button>

                            <p className='mt-6 text-center text-base text-[#39404a] dark:text-[#c3ccda]'>
                                Don&apos;t have an account?{' '}
                                <Link href='/sign-up' className='font-medium text-[#4d62ff] hover:underline'>
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    )
}
