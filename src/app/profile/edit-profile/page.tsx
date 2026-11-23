import ChangePasswordForm from '@/components/ChangePasswordForm/ChangePasswordForm'
import { AppShell } from '@/components/ui/app-shell'
import { ArrowLeft, KeyRound, } from 'lucide-react'
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

            <ChangePasswordForm/>
          </section>
        </div>
      </div>
    </AppShell>
  )
}
