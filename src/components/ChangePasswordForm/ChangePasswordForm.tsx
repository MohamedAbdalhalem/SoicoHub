"use client"
import CustomInput from '@/components/CustomInput/CustomInput'
import SubmitButton from '@/components/SubmitButton/SubmitButton'
import {  LockKeyhole } from 'lucide-react'
import Link from 'next/link'
import { useActionState } from 'react'
import { changePasswordAction } from '@/lib/action'
import AuthErrorAlert from '../AuthErrorAlert/AuthErrorAlert'

export default function ChangePasswordForm() {
    const [formState,formAction] =  useActionState(changePasswordAction,null)
    return (
        <form action={formAction} className='space-y-5 px-5 py-6 sm:px-7 sm:py-7'>
            {formState?.userExists && <AuthErrorAlert errorMassage={formState.userExists}/>}
            <CustomInput
                label='Current password'
                id='current-passwor'
                name='currentPassword'
                type='password'
                labelClassName='block text-sm font-medium text-[#303847] dark:text-[#dce3f0] mb-2' 
                className='h-12 w-full rounded-xl border border-[#d9dfe7] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9aa3af] focus:border-[#7a7ae8] focus:ring-2 focus:ring-[#7a7ae8]/20 dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb] dark:placeholder:text-[#8995aa]'
                placeholder='Enter your current password'
                defaultValue={formState?.errors ? formState?.savedValues?.currentPassword : '' }
                errorMassage={formState?.errors && formState.errors.currentPasswordError  }
                 />

            <CustomInput
                label=' New password'
                id='new-password'
                name='newPassword'
                type='password'
                labelClassName='block text-sm font-medium text-[#303847] dark:text-[#dce3f0] mb-2' 
                className='h-12 w-full rounded-xl border border-[#d9dfe7] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9aa3af] focus:border-[#7a7ae8] focus:ring-2 focus:ring-[#7a7ae8]/20 dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb] dark:placeholder:text-[#8995aa]'
                placeholder='Enter your new password'
                defaultValue={formState?.errors ? formState?.savedValues?.newPassword : '' }
                errorMassage={formState?.errors && formState.errors.newPasswordError  } />



            <div className='flex items-start gap-2 rounded-xl bg-[#f6f7fb] px-4 py-3 text-sm leading-5 text-[#687386] dark:bg-[#202838] dark:text-[#aeb8ca]'>
                <LockKeyhole className='mt-0.5 h-4 w-4 shrink-0 text-[#5b4fe8] dark:text-[#c8c2ff]' />
                Choose a strong password that you don&apos;t use elsewhere.
            </div>

            <div className='flex flex-col-reverse gap-3 border-t border-[#e9ebf1] pt-5 sm:flex-row sm:justify-end dark:border-[#303a4c]'>
                <Link
                    href='/profile'
                    className='inline-flex h-11 items-center justify-center rounded-xl border border-[#d9dfe7] px-5 text-sm font-semibold text-[#4f5969] transition hover:bg-[#f6f7fb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fe8] dark:border-[#354154] dark:text-[#dce3f0] dark:hover:bg-[#252f40]'
                >
                    Cancel
                </Link>
                <SubmitButton text='Update password' classes='inline-flex h-11 items-center justify-center rounded-xl bg-[#5b4fe8] px-5 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(91,79,232,0.25)] transition hover:bg-[#4f43d8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fe8]' />
            </div>
        </form>
    )
}
