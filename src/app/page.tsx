import Link from 'next/link'
import { Bell, Sparkles } from 'lucide-react'
import { AppShell } from '@/components/ui/app-shell'
import CustomInput from '@/components/CustomInput/CustomInput'
import Post from '@/components/Post/Post'

export default function Home() {
  return (
    <AppShell activeItem='Home'>
      <div className='h-full overflow-y-auto bg-[#f3f5f8] pb-20 dark:bg-[#10151f] lg:pb-0'>
        <header className='sticky top-0 z-10 border-b border-[#e5e8ee] bg-[#f6f7fb]/95 px-4 py-3 backdrop-blur dark:border-[#293242] dark:bg-[#171d29]/95 sm:px-5 lg:px-6'>
          <div className='mx-auto flex max-w-180 items-center justify-between gap-4'>
            <div className='flex items-center gap-3'>
              <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b4fe8] text-white lg:hidden'>
                <Sparkles className='h-4 w-4' />
              </div>
              <h1 className='text-[17px] font-semibold text-[#2d323d] dark:text-[#eef2ff]'>Route Posts</h1>
            </div>
            <div className='flex min-w-0 items-center gap-3'>
              <CustomInput
                id='feed-search'
                label='Search posts'
                labelClassName='sr-only'
                type='search'
                placeholder='Search Route Posts'
                className='h-9 max-w-64 text-sm'
                name='search'
              />
              <Link href='/notifications' aria-label='Notifications' className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#5b6472] ring-1 ring-[#e5e7eb] dark:bg-[#202838] dark:text-[#b7c1d1] dark:ring-[#354154]'>
                <Bell className='h-4 w-4' />
              </Link>
            </div>
          </div>
        </header>

        <div className='mx-auto max-w-180 px-3 py-4 sm:px-4 lg:px-0'>
          <div className='mb-4 flex items-center justify-between border-b border-[#e5e8ee] pb-3 dark:border-[#303a4c]'>
            <button type='button' className='flex-1 text-center text-[15px] font-semibold text-[#5b4fe8] underline decoration-[#5b4fe8] decoration-2 underline-offset-12'>For You</button>
            <button type='button' className='flex-1 text-center text-[15px] font-medium text-[#6f7786] dark:text-[#aeb8ca]'>Following</button>
          </div>
          <div className='space-y-4'>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </AppShell>
  )
}