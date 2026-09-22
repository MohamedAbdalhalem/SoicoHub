import { AppShell } from '@/components/app-shell'
import { Button } from '@/components/ui/button'

const suggestions = [
  { name: 'Rohan Me', handle: '@rohan_m', accent: 'from-[#f4c7b8] to-[#d9b2ff]' },
  { name: 'Zara Ok', handle: '@zara_ok', accent: 'from-[#bfe4ff] to-[#cbc4ff]' },
  { name: 'Lukas W', handle: '@lukas_w', accent: 'from-[#f9d7a7] to-[#f0b4d5]' },
]

const notifications = [
  { name: '@carlos_dev', text: ' liked your post', time: '2m ago', avatar: 'C', accent: 'from-[#dfe9ff] to-[#d9c8ff]', unread: true },
  { name: '@maya_design', text: ' replied to your comment', time: '15m ago', avatar: 'M', accent: 'from-[#f9d5bb] to-[#cfe5ff]', unread: true },
  { name: '@rohan_m', text: ' started following you', time: '1h ago', avatar: 'R', accent: 'from-[#dcd4ff] to-[#c6ecff]', unread: true },
  { name: '@zara_ok', text: ' bookmarked your post', time: '2h ago', avatar: 'Z', accent: 'from-[#cfe9d7] to-[#d7d7ff]', unread: false },
  { name: '@lukas_w', text: ' liked your post', time: '1d ago', avatar: 'L', accent: 'from-[#d3d7ff] to-[#ffe2bb]', unread: false },
]

export default function  Page() {
  const rightAside = (
    <div className='rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 dark:border-[#303a4c] dark:bg-[#1b2330]'>
      <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b] dark:text-[#eef2ff]'>Who to follow</h3>
      <div className='space-y-3'>
        {suggestions.map(({ name, handle, accent }) => (
          <div key={name} className='flex items-center justify-between gap-3'>
            <div className='flex items-center gap-3'>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br ${accent} text-[10px] font-bold text-[#1f2937]`}>
                {name
                  .split(' ')
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div className='min-w-0'>
                <p className='truncate text-[14px] font-semibold text-[#222937] dark:text-[#e9eef8]'>{name}</p>
                <p className='truncate text-[12px] text-[#7a8090] dark:text-[#9da9bc]'>{handle}</p>
              </div>
            </div>

            <Button size='sm' className='h-8 rounded-full bg-[#5b4fe8] px-3 text-[12px] font-medium text-white hover:bg-[#4f43d8]'>
              Follow
            </Button>
          </div>
        ))}
      </div>

      <button type='button' className='mt-4 text-[13px] font-medium text-[#5b4fe8]'>
        Show more
      </button>
    </div>
  )

  return (
    <AppShell activeItem='Notifications' rightAside={rightAside}>
      <div className='overflow-y-auto px-4 py-5 sm:px-5 lg:px-0'>
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
                {notifications.slice(0, 4).map((item) => (
                  <div
                    key={item.name}
                    className='flex items-center gap-4 border-b border-[#e7ebf0] px-4 py-4 last:border-b-0 dark:border-[#303a4c]'
                  >
                    <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${item.accent} text-[12px] font-bold text-[#1c2430]`}>
                      {item.avatar}
                      {item.unread ? (
                        <span className='absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#f7f8fb] bg-[#5b4fe8]' />
                      ) : null}
                    </div>

                    <div className='flex-1 text-[15px] leading-6 text-[#1d2430] dark:text-[#e9eef8]'>
                      <span className='font-semibold'>{item.name}</span>
                      <span className='text-[#4d5667]'>{item.text}</span>
                      <div className='mt-1 text-[13px] text-[#7a8190] dark:text-[#9da9bc]'>{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className='mb-3 text-[12px] font-semibold tracking-[0.14em] text-[#6d7787] uppercase dark:text-[#9da9bc]'>Yesterday</div>
              <div className='overflow-hidden rounded-[18px] border border-[#e5e8ee] bg-[#f7f8fb] dark:border-[#303a4c] dark:bg-[#1b2330]'>
                {notifications.slice(4).map((item) => (
                  <div
                    key={item.name}
                    className='flex items-center gap-4 border-b border-[#e7ebf0] px-4 py-4 last:border-b-0 dark:border-[#303a4c]'
                  >
                    <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${item.accent} text-[12px] font-bold text-[#1c2430]`}>
                      {item.avatar}
                      {item.unread ? (
                        <span className='absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#f7f8fb] bg-[#5b4fe8]' />
                      ) : null}
                    </div>

                    <div className='flex-1 text-[15px] leading-6 text-[#1d2430] dark:text-[#e9eef8]'>
                      <span className='font-semibold'>{item.name}</span>
                      <span className='text-[#4d5667]'>{item.text}</span>
                      <div className='mt-1 text-[13px] text-[#7a8190] dark:text-[#9da9bc]'>{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
