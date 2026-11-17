import { AppShell } from '@/components/ui/app-shell'
import { Bookmark, Search } from 'lucide-react'
import { cookies } from 'next/headers'
import { postType } from '../types'
import Post from '@/components/Post/Post'
import MainPagination from '@/components/MainPagination/MainPagination'
import { Suspense } from 'react'
import PostsLoadingScreen from '@/components/LoadingScreens/PostsLoadingScreen'
import Link from 'next/link'

async function Bookmarks() {
  const cookieStore = await cookies()
  const token = cookieStore.get('tkn')?.value!

  const res = await fetch('https://route-posts.routemisr.com/users/bookmarks?limit=10', {
    headers: {
      token,
    }
  })
  const data = (await res.json()) as { data: { bookmarks: postType[] }, meta: { pagination: { currentPage: number; total: number; numberOfPages: number } } }

  if (!res.ok) {
    throw new Error("couldn't fetch the data")
  }

  if(data.data.bookmarks.length === 0){
    return (
      <section className='rounded-3xl border border-[#e3e7ef] bg-white px-6 py-14 text-center shadow-[0_12px_36px_rgba(31,41,55,0.05)] dark:border-[#303a4c] dark:bg-[#1b2330]'>
        <div className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eeecff] text-[#5a4ae9] dark:bg-[#302b51] dark:text-[#c8c2ff]'>
          <Bookmark aria-hidden='true' className='h-6 w-6' />
        </div>
        <h2 className='text-lg font-semibold text-[#1e2430] dark:text-[#f1f4fb]'>No bookmarks yet</h2>
        <p className='mx-auto mt-2 max-w-sm text-sm leading-6 text-[#737d8d] dark:text-[#aeb8ca]'>
          Save posts you want to revisit, and they&apos;ll be waiting for you here.
        </p>
        <Link
          href='/'
          className='mt-6 inline-flex items-center justify-center rounded-full bg-[#5a4ae9] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4c3ed3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a4ae9]'
        >
          Explore posts
        </Link>
      </section>
    )
  }
  return (
    <>
      <div className='mb-5 flex items-center justify-between border-b border-[#e4e8ef] pb-3 dark:border-[#303a4c]'>
        <h2 className='text-[15px] font-semibold text-[#1e2430] dark:text-[#f1f4fb]'>Saved posts</h2>
        <span className='rounded-full bg-[#eeecff] px-2.5 py-1 text-[13px] font-semibold text-[#5a4ae9] dark:bg-[#302b51] dark:text-[#c8c2ff]'>
          {data.meta.pagination.total}
        </span>
      </div>


      <div className='space-y-4 mb-3'>
        {data.data.bookmarks.map(post => <Post key={post._id} post={post} />)}
      </div>

      <MainPagination currentPage={data.meta.pagination.currentPage} numberOfPages={data.meta.pagination.numberOfPages} />
    </>
  )
}

export default function BookmarksPage() {


  return (
    <AppShell activeItem='Bookmarks' >
      <div className='min-h-screen overflow-y-auto bg-[#f3f5f8] pb-20 dark:bg-[#10151f] lg:pb-0'>
        <div className='mx-auto max-w-190 px-4 py-5 sm:px-5 lg:px-0 lg:py-6'>
          <div className='mb-5 flex items-start justify-between gap-4'>
            <div>
              <h1 className='text-[30px] font-semibold tracking-[-0.06em] text-[#1e2430] dark:text-[#f1f4fb]'>Bookmarks</h1>
              <p className='mt-1 text-[14px] text-[#737d8d] dark:text-[#aeb8ca]'>Posts you saved for the right moment.</p>
            </div>
            <button type='button' aria-label='Search bookmarks' className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e1e5eb] bg-[#f8f9fb] text-[#667184] hover:bg-white dark:border-[#354154] dark:bg-[#202838] dark:text-[#b7c1d1] dark:hover:bg-[#293447]'>
              <Search className='h-4 w-4' />
            </button>
          </div>

          <Suspense fallback={<PostsLoadingScreen />}>
            <Bookmarks />
          </Suspense>

        </div>
      </div>
    </AppShell>
  )
}