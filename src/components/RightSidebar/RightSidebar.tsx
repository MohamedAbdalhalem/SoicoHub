import { Suspense, type ReactNode } from 'react'
import Suggestion from "../Suggestion/Suggestion";
import Link from 'next/link';
import { cookies } from 'next/headers'
import { suggestion } from '@/app/types';


async function Suggestions() {
  const cookieStore = await cookies()
  const token = cookieStore.get('tkn')?.value!
  const response = await fetch('https://route-posts.routemisr.com/users/suggestions?limit=3', {
    headers: {
      token,
    }
  })
  const data = await (response.json()) as {data : {suggestions : suggestion[]}}

  return (
    <div className='space-y-3'>
      {data.data.suggestions.map((suggestion) => <Suggestion key={suggestion._id} {...suggestion} />)}
    </div>
  )
}

function Loading() {
  return (<div className='space-y-3'>
    <div className='h-8 w-full rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
    <div className='h-8 w-full rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
    <div className='h-8 w-full rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
  </div>)
}

export default function RightSidebar({ children }: { children?: ReactNode }) {
  return (
    <aside className='hidden h-screen w-72.5 shrink-0 border-l border-[#e5e8ee] bg-[#f6f7fb] p-4 dark:border-[#293242] dark:bg-[#171d29] xl:block fixed  right-0 z-10'>
      {children ?? (
        <div className='rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 dark:border-[#303a4c] dark:bg-[#1b2330]'>
          <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b] dark:text-[#eef2ff]'>Who to follow</h3>
          <Suspense fallback={<Loading/>}>
            <Suggestions />
          </Suspense>
          <Link href='/suggestions' className='mt-4 text-[13px] font-medium text-[#5b4fe8]'>Show more</Link>
        </div>
      )}
    </aside>
  )
}
