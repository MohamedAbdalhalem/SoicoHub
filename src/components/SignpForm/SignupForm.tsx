'use client'
import CustomInput from '../CustomInput/CustomInput'
import { Button } from '../ui/button'
import Link from 'next/link'
import { signupAction } from '@/lib/action'
import { useActionState } from 'react'

export default function SignupForm() {
    const  [actionState , formAction] =  useActionState(signupAction, {errors : null})
    return (
        <form action={formAction} className='w-full space-y-4 pb-2'>
            <div className='grid gap-4 sm:grid-cols-2'>
                <CustomInput id='name' label='Name' placeholder='Your Name' type='text' name='Name' />
                <CustomInput id='userName' label='User Name' placeholder='User Name' type='text' name='userName' />
            </div>

            <CustomInput id='email' label='Email' type='email' placeholder='name@example.com' name='email' />

            <div className='grid gap-4 sm:grid-cols-2'>
                <CustomInput id='Date' label='Date Of Birth' placeholder='your birth' type='date' name='date' />
                <div className='space-y-0.5'>
                    <label htmlFor='gender' className='block text-sm font-medium text-[#1f2937] dark:text-[#dce3f0]'>
                        Gender
                    </label>
                    <select
                        name='gender'
                        id='gender'
                        className='flex h-10 w-full appearance-none rounded-xl border border-[#d9dfe7] bg-white px-3.5 pr-10 text-base text-[#111827] shadow-sm outline-none transition focus:border-[#7a7ae8] focus:ring-2 focus:ring-[#7a7ae8]/20 dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb]'
                    >
                        <option value='male' className='text-[#111827] dark:text-[#f1f4fb]'>Male</option>
                        <option value='female' className='text-[#111827] dark:text-[#f1f4fb]'>Female</option>
                    </select>
                </div>
            </div>

            <div className='space-y-2'>
                <CustomInput id='password' label='Password' type='password' placeholder='your password' name='password' />
                <CustomInput id='repassword' label='Confirm Password' type='password' placeholder='confirm your password' name='repassword' />
            </div>

            <Button
                type='submit'
                className='h-12 w-full rounded-xl bg-[#4e3ef0] text-base font-semibold text-white shadow-[0_10px_20px_rgba(78,62,240,0.25)] hover:bg-[#4739db]'
            >
                Create account
            </Button>

            <div className='relative my-3'>
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
                Already have an account?{' '}
                <Link href='/sign-in' className='font-medium text-[#4d62ff] hover:underline'>
                    Sign In
                </Link>
            </p>
        </form>
    )
}
