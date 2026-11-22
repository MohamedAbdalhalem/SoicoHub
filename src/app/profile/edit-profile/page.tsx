import { AppShell } from '@/components/ui/app-shell'
import { ArrowLeft, KeyRound, LockKeyhole } from 'lucide-react'
import Link from 'next/link'

export default function EditProfilePage() {
  return (
    <AppShell activeItem='Profile'>
      <div className='min-h-screen bg-[#f3f5f8] px-4 py-5 pb-24 dark:bg-[#10151f] sm:px-5 lg:px-0 lg:py-6'>
        <div className='mx-auto max-w-190'>
          <Link
            href='/profile'
            className='mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#687386] transition hover:text-[#5b4fe8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5b4fe8] dark:text-[#aeb8ca] dark:hover:text-[#c8c2ff]'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to profile
          </Link>

          <header className='mb-6'>
            <p className='text-sm font-semibold text-[#5b4fe8] dark:text-[#c8c2ff]'>Account settings</p>
            <h1 className='mt-1 text-[30px] font-bold tracking-[-0.04em] text-[#1e2430] dark:text-[#f1f4fb]'>
              Edit profile
            </h1>
            <p className='mt-1 text-sm text-[#737d8d] dark:text-[#aeb8ca]'>
              Manage your account password.
            </p>
          </header>

          <section className='overflow-hidden rounded-[24px] border border-[#e3e7ef] bg-white shadow-[0_16px_45px_rgba(31,41,55,0.06)] dark:border-[#303a4c] dark:bg-[#1b2330]'>
            <div className='border-b border-[#e9ebf1] px-5 py-5 sm:px-7 dark:border-[#303a4c]'>
              <div className='flex items-center gap-3'>
                <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eeecff] text-[#5b4fe8] dark:bg-[#302b59] dark:text-[#c8c2ff]'>
                  <KeyRound className='h-5 w-5' />
                </div>
                <div>
                  <h2 className='text-lg font-semibold text-[#1e2430] dark:text-[#f1f4fb]'>Change password</h2>
                  <p className='mt-0.5 text-sm text-[#737d8d] dark:text-[#aeb8ca]'>
                    Enter your current password and choose a new one.
                  </p>
                </div>
              </div>
            </div>

            <div className='space-y-5 px-5 py-6 sm:px-7 sm:py-7'>
              <div className='space-y-2'>
                <label htmlFor='current-password' className='block text-sm font-medium text-[#303847] dark:text-[#dce3f0]'>
                  Current password
                </label>
                <input
                  id='current-password'
                  name='currentPassword'
                  type='password'
                  autoComplete='current-password'
                  placeholder='Enter your current password'
                  className='h-12 w-full rounded-xl border border-[#d9dfe7] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9aa3af] focus:border-[#7a7ae8] focus:ring-2 focus:ring-[#7a7ae8]/20 dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb] dark:placeholder:text-[#8995aa]'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='new-password' className='block text-sm font-medium text-[#303847] dark:text-[#dce3f0]'>
                  New password
                </label>
                <input
                  id='new-password'
                  name='newPassword'
                  type='password'
                  autoComplete='new-password'
                  placeholder='Enter your new password'
                  className='h-12 w-full rounded-xl border border-[#d9dfe7] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9aa3af] focus:border-[#7a7ae8] focus:ring-2 focus:ring-[#7a7ae8]/20 dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb] dark:placeholder:text-[#8995aa]'
                />
              </div>

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
                <button
                  type='button'
                  className='inline-flex h-11 items-center justify-center rounded-xl bg-[#5b4fe8] px-5 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(91,79,232,0.25)] transition hover:bg-[#4f43d8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fe8]'
                >
                  Update password
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  )
}
