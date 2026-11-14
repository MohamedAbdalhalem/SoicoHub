import { AppShell } from '@/components/ui/app-shell'
import Suggestion from '@/components/Suggestion/Suggestion'
import { Search } from 'lucide-react'

const suggestions = [
  {
    _id: 'rohan-mehta',
    name: 'Rohan Mehta',
    username: 'rohan_m',
    photo: '',
    mutualFollowersCount: 12,
    followersCount: 1840,
    note: 'Popular in UI/UX design',
  },
  {
    _id: 'zara-okonwo',
    name: 'Zara Okonwo',
    username: 'zara_ok',
    photo: '',
    mutualFollowersCount: 8,
    followersCount: 3260,
    note: 'Shared interests: product strategy',
  },
  {
    _id: 'lukas-werner',
    name: 'Lukas Werner',
    username: 'lukas_w',
    photo: '',
    mutualFollowersCount: 3,
    followersCount: 970,
    note: 'Followed by your peers',
  },
  {
    _id: 'maya-patel',
    name: 'Maya Patel',
    username: 'maya_p',
    photo: '',
    mutualFollowersCount: 5,
    followersCount: 5210,
    note: 'Creator of design systems',
  },
  {
    _id: 'ibrahim-saleh',
    name: 'Ibrahim Saleh',
    username: 'ibrahim_s',
    photo: '',
    mutualFollowersCount: 2,
    followersCount: 1480,
    note: 'Trending in developer communities',
  },
]

const tabs = ['For you', 'Design', 'Technology', 'Trending']

export default function SuggestionsPage() {
  return (
    <AppShell activeItem='Home'>
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

          <div className='mb-6 flex flex-wrap gap-2 rounded-full border border-[#e6eaf0] bg-white/70 p-2 dark:border-[#303a4c] dark:bg-[#1b2330]'>
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type='button'
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
                  index === 0
                    ? 'bg-[#5b4fe8] text-white shadow-[0_8px_18px_rgba(91,79,232,0.2)]'
                    : 'text-[#5d6677] hover:bg-[#f0f3f9] dark:text-[#b7c1d1] dark:hover:bg-[#252e3f]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className='space-y-4'>
            {suggestions.map(({ _id, note, ...suggestion }) => (
              <div
                key={_id}
                className='rounded-[22px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.02)] dark:border-[#303a4c] dark:bg-[#1b2330]'
              >
                <Suggestion _id={_id} {...suggestion} />
                <div className='mt-3 flex items-center justify-between gap-3 border-t border-[#edf0f5] pt-3 dark:border-[#2c3649]'>
                  <p className='text-[12px] text-[#72809a] dark:text-[#a4afc8]'>{note}</p>
                  <button type='button' className='text-[12px] font-medium text-[#5b4fe8] hover:underline'>View profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  )
}
