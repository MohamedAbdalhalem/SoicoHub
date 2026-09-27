import { AppShell } from '@/components/app-shell'
import Notification from '@/components/Notification/Notification'
import Suggestion from '@/components/Suggestion/Suggestion'

const suggestions = [
  { name: 'Rohan Me', handle: '@rohan_m', accent: 'from-[#f4c7b8] to-[#d9b2ff]' },
  { name: 'Zara Ok', handle: '@zara_ok', accent: 'from-[#bfe4ff] to-[#cbc4ff]' },
  { name: 'Lukas W', handle: '@lukas_w', accent: 'from-[#f9d7a7] to-[#f0b4d5]' },
]



export default function  Page() {
  const rightAside = (
    <div className='rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 dark:border-[#303a4c] dark:bg-[#1b2330]'>
      <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b] dark:text-[#eef2ff]'>Who to follow</h3>
      <div className='space-y-3'>
        {suggestions.map(({ name, handle, accent }) => (
          <Suggestion key={handle} name={name} handle={handle} accent={accent} />
        ))}
      </div>

      <button type='button' className='mt-4 text-[13px] font-medium text-[#5b4fe8]'>
        Show more
      </button>
    </div>
  )

  return (
    <AppShell activeItem='Notifications' rightAside={rightAside}>
      <div className='overflow-y-auto px-4 py-5 pb-20 sm:px-5 lg:px-0 lg:pb-5'>
        <div className='mx-auto max-w-190'>
          <div className='mb-5 flex items-center justify-between'>
            <h1 className='text-[30px] font-semibold tracking-[-0.06em] text-[#1e2430] dark:text-[#f1f4fb]'>Notifications</h1>
            <button type='button' className='text-[15px] font-medium text-[#5a4ae9] hover:underline'>
              Mark all as read
            </button>
          </div>

          <div className='mb-4 flex items-center justify-between gap-4 border-b border-[#e4e8ef] pb-3'>
            <button type='button' className='flex-1 text-center text-[17px] font-semibold text-[#5a4ae9] underline decoration-[#5a4ae9] decoration-2 underline-offset-12'>
              All
            </button>
            <div className='flex flex-1 items-center justify-center gap-2 text-[17px] font-medium text-[#5d6677] dark:text-[#b7c1d1]'>
              <span>Unread</span>
              <span className='flex h-6 min-w-6 items-center justify-center rounded-full bg-[#5b4fe8] px-1.5 text-[12px] font-semibold text-white'>
                3
              </span>
            </div>
          </div>

          <div className='space-y-5'>
            <div>
              <div className='mb-3 text-[12px] font-semibold tracking-[0.14em] text-[#6d7787] uppercase dark:text-[#9da9bc]'>Today</div>
              <div className='overflow-hidden rounded-[18px] border border-[#e5e8ee] bg-[#f7f8fb] dark:border-[#303a4c] dark:bg-[#1b2330]'>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </AppShell>
  )
}
