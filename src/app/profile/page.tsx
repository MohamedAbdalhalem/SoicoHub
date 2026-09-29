import { AppShell } from '@/components/ui/app-shell'
import Suggestion from '@/components/Suggestion/Suggestion'
import { Camera, PencilLine, MapPin, CalendarDays } from 'lucide-react'

const suggestions = [
    { name: 'Rohan Mehta', handle: '@rohan_m', accent: 'from-[#f4c7b8] to-[#d9b2ff]' },
    { name: 'Zara Okonwo', handle: '@zara_ok', accent: 'from-[#bfe4ff] to-[#cbc4ff]' },
    { name: 'Lukas Werner', handle: '@lukas_w', accent: 'from-[#f9d7a7] to-[#f0b4d5]' },
]

const postImages = [
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
]

export default function ProfilePage() {
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
        <AppShell activeItem='Profile' rightAside={rightAside}>
            <div className='h-full overflow-y-auto bg-[#f3f5f8] pb-20 dark:bg-[#10151f] lg:pb-0'>
                <div className='mx-auto max-w-190 px-4 py-4 sm:px-5 lg:px-0 lg:py-6'>
                    <div className='overflow-hidden rounded-[22px] border border-[#e6e9ee] bg-[#f7f8fb] dark:border-[#303a4c] dark:bg-[#1b2330]'>
                        <div className='relative border-b border-[#e6e9ee] bg-[#f4f6fb] p-0'>
                                    <div className='relative h-60 w-full overflow-hidden bg-[linear-gradient(90deg,#b34cf8_0%,#5f63f0_50%,#4a8bff_100%)] dark:brightness-75'>
                                <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.20),transparent_25%),radial-gradient(circle_at_80%_32%,rgba(255,255,255,0.18),transparent_22%)]' />
                            </div>

                            <div className='relative -mt-14.5 flex items-end justify-between px-5 pb-3 sm:px-6'>
                                <div className='flex items-end gap-4'>
                                    <div className='relative h-30 w-30 overflow-hidden rounded-full border-4 border-[#f3f5f8] bg-white shadow-[0_16px_26px_rgba(23,30,44,0.12)] dark:border-[#10151f] dark:bg-[#202838]'>
                                        <img
                                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'
                                            alt='Aria Chen'
                                            className='h-full w-full object-cover'
                                        />
                                    </div>

                                    <div className='mb-3 hidden sm:block'>
                                        <button type='button' className='flex h-11 w-11 items-center justify-center rounded-full border border-[#dde1eb] bg-white text-[#2b2f3b] shadow-sm dark:border-[#354154] dark:bg-[#202838] dark:text-[#e9eef8]'>
                                            <Camera className='h-4 w-4' />
                                        </button>
                                    </div>
                                </div>

                                <div className='mb-2 hidden items-center gap-3 sm:flex'>
                                    <button type='button' className='flex items-center gap-2 rounded-full border border-[#dfe3eb] bg-white px-4 py-2.5 text-[15px] font-medium text-[#1f2430] dark:border-[#354154] dark:bg-[#202838] dark:text-[#e9eef8]'>
                                        <PencilLine className='h-4 w-4' />
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pb-5 sm:px-6'>
                            <div className='mb-2 flex items-center justify-between gap-4'>
                                <div>
                                    <h2 className='text-[28px] font-semibold leading-none tracking-tighter text-[#171d27] dark:text-[#f1f4fb]'>Aria Chen</h2>
                                    <div className='mt-2 text-[16px] text-[#6a7280] dark:text-[#aeb8ca]'>@aria_chen</div>
                                </div>

                                <div className='mb-2 sm:hidden'>
                                    <button type='button' className='rounded-full border border-[#dfe3eb] bg-white px-4 py-2 text-[14px] font-medium text-[#1f2430] dark:border-[#354154] dark:bg-[#202838] dark:text-[#e9eef8]'>
                                        Edit Profile
                                    </button>
                                </div>
                            </div>

                            <p className='max-w-190 text-[20px] leading-8 text-[#2d3542] dark:text-[#d4dce9]'>
                                Product designer & frontend dev. Building design systems that don&apos;t suck. She/her
                            </p>

                            <div className='mt-4 flex flex-wrap items-center gap-5 text-[14px] text-[#5d6878] dark:text-[#aeb8ca]'>
                                <div className='flex items-center gap-2'>
                                    <MapPin className='h-4 w-4' />
                                    <span>San Francisco, CA</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <CalendarDays className='h-4 w-4' />
                                    <span>Joined March 2021</span>
                                </div>
                            </div>

                            <div className='mt-6 flex flex-wrap items-center gap-8'>
                                <div>
                                    <span className='text-[18px] font-semibold text-[#171d27] dark:text-[#f1f4fb]'>247</span>
                                    <span className='ml-1 text-[15px] text-[#697486] dark:text-[#aeb8ca]'>Posts</span>
                                </div>
                                <div>
                                    <span className='text-[18px] font-semibold text-[#171d27] dark:text-[#f1f4fb]'>14.2K</span>
                                    <span className='ml-1 text-[15px] text-[#697486] dark:text-[#aeb8ca]'>Followers</span>
                                </div>
                                <div>
                                    <span className='text-[18px] font-semibold text-[#171d27] dark:text-[#f1f4fb]'>832</span>
                                    <span className='ml-1 text-[15px] text-[#697486] dark:text-[#aeb8ca]'>Following</span>
                                </div>
                            </div>
                        </div>

                        <div className='border-t border-[#e5e8ee] bg-[#f6f7fb] px-5 py-4 dark:border-[#303a4c] dark:bg-[#171d29] sm:px-6'>
                            <div className='flex items-center justify-between border-b border-[#e5e8ee] pb-2 dark:border-[#303a4c]'>
                                <button type='button' className='flex-1 text-center text-[18px] font-semibold text-[#5a4ae9] underline decoration-[#5a4ae9] decoration-[3px] underline-offset-14'>
                                    Posts
                                </button>
                                <button type='button' className='flex-1 text-center text-[18px] font-medium text-[#677183] dark:text-[#aeb8ca]'>
                                    Bookmarks
                                </button>
                            </div>

                            <div className='mt-4 grid grid-cols-2 gap-3 sm:gap-4'>
                                {postImages.map((src, index) => (
                                    <div key={src} className='overflow-hidden rounded-[18px] border border-[#e5e8ee] bg-white dark:border-[#303a4c] dark:bg-[#202838]'>
                                        <img src={src} alt={`Post ${index + 1}`} className='h-45 w-full object-cover sm:h-52.5' />
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
