import Link from 'next/link'
import { AppShell } from '@/components/ui/app-shell'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft
} from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import CreatePostForm from '@/components/CreatePostForm/CreatePostForm'


export default async function CreatePostPage() {
  const myCookies = await cookies()
  const name = myCookies.get('name')?.value
  const username = myCookies.get('username')?.value
  const photo = myCookies.get('photo')?.value
  return (
    <AppShell activeItem='Create Post'>
      <div className='h-full overflow-y-auto bg-[#f3f5f8] dark:bg-[#10151f]'>
        <div className='mx-auto w-full max-w-245 px-3 py-4 pb-28 sm:px-5 sm:py-6'>
          <div className='rounded-[28px] border border-[#e8ebf0] bg-[#f8f9fb] p-3 shadow-[0_10px_32px_rgba(17,24,39,0.04)] dark:border-[#303a4c] dark:bg-[#1b2330] sm:p-5'>
            <div className='mb-5 flex items-center gap-2 sm:gap-3'>
              <Link href='/' aria-label='Go back' className='flex h-10 w-10 shrink-0 items-center justify-center text-[#697386] dark:text-[#aeb8ca] sm:hidden'>
                <ArrowLeft className='h-5 w-5' />
              </Link>
              <h1 className='min-w-0 flex-1 text-2xl font-semibold tracking-[-0.06em] text-[#1f2530] dark:text-[#f1f4fb] sm:text-[40px]'>Create Post</h1>
              <Button type='button' className='h-10 shrink-0 rounded-full bg-[#5b4fe8] px-4 text-sm font-semibold text-white hover:bg-[#4f43d8] sm:hidden'>
                Post
              </Button>
            </div>

            <div className='mx-auto mb-3 flex max-w-180 items-center gap-3 px-1'>
              <div>
                <Image src={photo || ''} alt={name || ''} width={48} height={48} className=' rounded-full' />
              </div>
              <div>
                <p className='text-[16px] font-semibold text-[#1d2430] dark:text-[#e9eef8]'>{name}</p>
                <p className='text-[13px] text-[#697386] dark:text-[#aeb8ca]'>@{username}</p>
              </div>
            </div>

            <CreatePostForm />
          </div>
        </div>
      </div>
    </AppShell>
  )
}
