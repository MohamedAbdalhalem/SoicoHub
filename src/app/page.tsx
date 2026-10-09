import Link from 'next/link'
import { Bell, Sparkles } from 'lucide-react'
import { AppShell } from '@/components/ui/app-shell'
import CustomInput from '@/components/CustomInput/CustomInput'
import { cookies } from 'next/headers'
import Post from '@/components/Post/Post'
import PostsLoadingScreen from '@/components/PostsLoadingScreen/PostsLoadingScreen'
import { postType } from './types'
import { Suspense } from 'react'
import MainPagination from '@/components/MainPagination/MainPagination'


async function Posts() {
  const cookieStore = await cookies()
  const token = cookieStore.get('tkn')?.value
  const page = cookieStore.get('page')?.value
  const response = await fetch(`https://route-posts.routemisr.com/posts?limit=10&page=${page}`, {
    headers: {
      token: token || '',
    },
  })
  const data = (await response.json()) as { data: { posts: postType[] }, meta: { pagination: { currentPage: number, numberOfPages: number, nextPage: number } } }


  if (!response.ok) {
    return (
      <div className='flex flex-col items-center justify-center rounded-[20px] border border-[#e5e8ee] bg-[#f7f8fb] px-6 py-12 text-center dark:border-[#303a4c] dark:bg-[#1b2330]'>
        <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 dark:bg-red-950/30'>
          <span className='text-xl font-semibold'>!</span>
        </div>

        <h3 className='font-semibold text-[#1d2430] dark:text-[#e9eef8]'>
          Something went wrong
        </h3>

        <p className='mt-1 max-w-xs text-sm text-[#7b8393] dark:text-[#9da9bc]'>
          We couldn't load the posts at the moment.
        </p>
      </div>
    )
  }

  return (
    <div className='space-y-4'>
      {data.data.posts.map(post => <Post key={post._id} post={post} />)}

      <MainPagination numberOfPages={data.meta.pagination.numberOfPages} currentPage={data.meta.pagination.currentPage} nextPage={data.meta.pagination.nextPage} />
    </div>
  )
}

export default async function Home() {
  const cookieStore = await cookies()
  const page = cookieStore.get('page')?.value
  return (
    <AppShell activeItem='Home'>
      <div className=' overflow-y-auto bg-[#f3f5f8] pb-20 dark:bg-[#10151f] lg:pb-0'>
        <header className='fixed inset-x-0 top-0 z-10 border-b border-[#e5e8ee] bg-[#f6f7fb]/95 px-4 py-3 backdrop-blur dark:border-[#293242] dark:bg-[#171d29]/95 sm:px-5 lg:left-62.5 lg:px-6 xl:right-72.5'>
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
          <div className='mb-4 flex items-center justify-between border-b border-[#e5e8ee] pb-3 dark:border-[#303a4c] mt-18'>
            <button type='button' className='flex-1 text-center text-[15px] font-semibold text-[#5b4fe8] underline decoration-[#5b4fe8] decoration-2 underline-offset-12'>For You</button>
            <button type='button' className='flex-1 text-center text-[15px] font-medium text-[#6f7786] dark:text-[#aeb8ca]'>Following</button>
          </div>
          <Suspense fallback={<PostsLoadingScreen />} key={page} > <Posts /> </Suspense>

        </div>
      </div>
    </AppShell>
  )
}