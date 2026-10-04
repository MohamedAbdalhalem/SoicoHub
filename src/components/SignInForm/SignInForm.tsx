"use client"
import { Button } from '../ui/button'
import CustomInput from '../CustomInput/CustomInput'
import Link from 'next/link'
import { useActionState } from 'react'
import { signinAction } from '@/lib/action'
import AuthErrorAlert from '../AuthErrorAlert/AuthErrorAlert'

export default function SignInForm() {
    const [actionState, formAction] = useActionState(signinAction, { errors: null })
    return (
        <form action={formAction} className='space-y-6'>
            {actionState.signErrors && <AuthErrorAlert errorMassage={actionState.signErrors} />}
            <CustomInput id='email' label='Email or username' type='text' name='email' placeholder='your email please'
                errorMassage={actionState.errors && actionState.errors.emailError}
                defaultValue={actionState.savedValues?.email} />

            <CustomInput id='password' label='Password' type='password' name='password' placeholder='your password please'
                errorMassage={actionState.errors && actionState.errors.passwordErorr}
                defaultValue={actionState.savedValues?.password} />


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
    )
}
