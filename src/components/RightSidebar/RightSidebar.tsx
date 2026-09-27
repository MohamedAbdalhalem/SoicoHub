import type { ReactNode } from 'react'
import Suggestion from "../Suggestion/Suggestion";


const suggestions = [
    { name: 'Rohan Mehta', handle: '@rohan_m' },
    { name: 'Zara Okonwo', handle: '@zara_ok' },
    { name: 'Lukas Werner', handle: '@lukas_w' },
]

export default function RightSidebar({ children }: { children?: ReactNode }) {
    return (
         <aside className='hidden w-72.5 shrink-0 border-l border-[#e5e8ee] bg-[#f6f7fb] p-4 dark:border-[#293242] dark:bg-[#171d29] xl:block'>
          {children ?? (
            <div className='rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 dark:border-[#303a4c] dark:bg-[#1b2330]'>
              <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b] dark:text-[#eef2ff]'>Who to follow</h3>
              <div className='space-y-3'>
                {suggestions.map((suggestion) => <Suggestion key={suggestion.handle} {...suggestion} />)}
              </div>
              <button type='button' className='mt-4 text-[13px] font-medium text-[#5b4fe8]'>Show more</button>
            </div>
          )}
        </aside>
    )
}
