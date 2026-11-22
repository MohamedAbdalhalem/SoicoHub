import { AppShell } from '@/components/ui/app-shell'
import Suggestion from '@/components/Suggestion/Suggestion'
import { Search } from 'lucide-react'
import { cookies } from 'next/headers'
import { suggestion } from '../types'
import { Suspense } from 'react'
import SuggestionsLoadingScreen from '../../components/LoadingScreens/SuggestionsLoadingScreen'
import MainPagination from '@/components/MainPagination/MainPagination'


async function Suggestions({page} : {page :string}) {
  const cookieStore = await cookies()
  const token = cookieStore.get('tkn')?.value!;
  let url = `https://route-posts.routemisr.com/users/suggestions?limit=10`
  if(page) url+=`&page=${page}`;
  const response = await fetch(url, {
    headers: {
      token,
    }
  })
  const data = await (response.json()) as { data: { suggestions: suggestion[] }, meta: { pagination: { currentPage : number ,total: number, numberOfPages: number, nextPage: number } } }

  return (
    <div className='min-h-screen overflow-y-auto bg-[#f3f5f8] pb-20 dark:bg-[#10151f] lg:pb-0'>
      <div className='mx-auto max-w-4xl px-4 py-5 sm:px-5 lg:px-0 lg:py-6'>
        <header className='mb-6 flex items-start justify-between gap-4'>
          <div>
            <p className='mb-1 text-[12px] font-semibold tracking-[0.2em] text-[#6d7787] uppercase dark:text-[#a8b4c9]'>Discover</p>
            <h1 className='text-[30px] font-semibold tracking-[-0.06em] text-[#1e2430] dark:text-[#f1f4fb]'>Suggestions</h1>
          </div>

          <button
            type='button'
            aria-label='Search suggestions'
            className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e1e5eb] bg-[#f8f9fb] text-[#667184] transition hover:bg-white dark:border-[#354154] dark:bg-[#202838] dark:text-[#b7c1d1] dark:hover:bg-[#293447]'
          >
            <Search className='h-4 w-4' />
          </button>
        </header>

        <div className='mb-6 flex items-center justify-between rounded-[20px] border border-[#e6eaf0] bg-white/80 px-4 py-3 dark:border-[#303a4c] dark:bg-[#1b2330]'>
          <div>
            <p className='text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7b8597] dark:text-[#9caac0]'>Curated</p>
            <h2 className='mt-1 text-base font-semibold text-[#1e2430] dark:text-[#f1f4fb]'>People you may know</h2>
          </div>
          <div className='rounded-full bg-[#efeefd] px-3 py-1 text-[12px] font-medium text-[#4d46d9] dark:bg-[#2d2a5a] dark:text-[#c7c3ff]'>
            {data.meta.pagination.total} profiles
          </div>
        </div>

        <div className='space-y-4 mb-3'>
          {data.data.suggestions.map(suggestion => (
            <div
              key={suggestion._id}
              className='rounded-[22px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.02)] dark:border-[#303a4c] dark:bg-[#1b2330]'
            >
              <Suggestion  {...suggestion} />
              <div className='mt-3 flex items-center justify-between gap-3 border-t border-[#edf0f5] pt-3 dark:border-[#2c3649]'>
                <p className='text-[12px] text-[#72809a] dark:text-[#a4afc8]'>mutualFollowersCount : {suggestion.mutualFollowersCount}</p>
                <button type='button' className='text-[12px] font-medium text-[#5b4fe8] hover:underline'>View profile</button>
              </div>
            </div>
          ))}
        </div>

        <MainPagination currentPage={data.meta.pagination.currentPage}   numberOfPages={data.meta.pagination.numberOfPages} />
      </div>
      
    </div>
  )
}

export default async function SuggestionsPage({ searchParams }:
  { searchParams: Promise<{ page : string }> }) {
    const page =  (await searchParams).page
  return (
    <AppShell activeItem='Home'>
      <Suspense fallback={<SuggestionsLoadingScreen />}>
        <Suggestions page={page} />
      </Suspense>
    </AppShell>
  )
}
