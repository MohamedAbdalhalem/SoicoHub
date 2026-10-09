import { AppShell } from '@/components/ui/app-shell'
import Suggestion from '@/components/Suggestion/Suggestion'
import { Search } from 'lucide-react'

const suggestions = [
  { name: 'Rohan Mehta', handle: '@rohan_m', accent: 'from-[#f4c7b8] to-[#d9b2ff]' },
  { name: 'Zara Okonwo', handle: '@zara_ck', accent: 'from-[#bfe4ff] to-[#cbc4ff]' },
  { name: 'Lukas Werner', handle: '@lukas_w', accent: 'from-[#f9d7a7] to-[#f0b4d5]' },
]



export default function BookmarksPage() {
  const rightAside = (
    <>
      <div className='rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 dark:border-[#303a4c] dark:bg-[#1b2330] '>
        <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b] dark:text-[#eef2ff]'>Who to follow</h3>
        <div className='space-y-3'>
          {suggestions.map(({ name, handle, accent }) => (
            <Suggestion key={handle} name={name} handle={handle} accent={accent} />
          ))}
        </div>
        <button type='button' className='mt-4 text-[13px] font-medium text-[#5b4fe8]'>Show more</button>
      </div>

      <div className='mt-5 rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 dark:border-[#303a4c] dark:bg-[#1b2330]'>
        <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b] dark:text-[#eef2ff]'>Saved for later</h3>
        <p className='text-[14px] leading-6 text-[#687386] dark:text-[#aeb8ca]'>Keep the ideas you love close by saving posts from your feed.</p>
      </div>
    </>
  )

  return (
    <AppShell activeItem='Bookmarks' rightAside={rightAside}>
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

          <div className='mb-5 flex items-center justify-between border-b border-[#e4e8ef] pb-3 dark:border-[#303a4c]'>
            <button type='button' className='flex-1 text-center text-[15px] font-semibold text-[#5a4ae9] underline decoration-[#5a4ae9] decoration-2 underline-offset-12'>All saved</button>
            <button type='button' className='flex-1 text-center text-[15px] font-medium text-[#727c8d]'>Articles</button>
            <button type='button' className='flex-1 text-center text-[15px] font-medium text-[#727c8d]'>Media</button>
          </div>

          
          {/* <div className='space-y-4'>
            {savedPosts.map(({ id, ...post }) => <Post key={id} {...post} />)}
          </div> */}
        </div>
      </div>
    </AppShell>
  )
}