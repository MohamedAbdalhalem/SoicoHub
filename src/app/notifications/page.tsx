import { AppShell } from '@/components/ui/app-shell'
import Notification from '@/components/Notification/Notification'

export default function  Page() {
  

  return (
    <AppShell activeItem='Notifications' >
      <div className='min-h-dvh overflow-y-auto px-4 py-5 pb-24 sm:px-5 lg:px-0 lg:pb-5'>
        <div className='mx-auto max-w-190'>
          <div className='mb-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <h1 className='text-2xl font-semibold tracking-[-0.06em] text-[#1e2430] dark:text-[#f1f4fb] sm:text-[30px]'>Notifications</h1>
            <button type='button' className='text-sm font-medium text-[#5a4ae9] hover:underline sm:text-[15px]'>
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
