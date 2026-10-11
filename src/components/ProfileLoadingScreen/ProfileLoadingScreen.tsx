import { AppShell } from '@/components/ui/app-shell'

function SkeletonBlock({ className }: { className: string }) {
    return <div aria-hidden='true' className={`rounded-md bg-[#e2e5eb] dark:bg-[#303a4c] ${className}`} />
}

function FollowSuggestionsSkeleton() {
    return (
        <div aria-hidden='true' className='animate-pulse rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 dark:border-[#303a4c] dark:bg-[#1b2330]'>
            <SkeletonBlock className='mb-5 h-5 w-32' />
            <div className='space-y-4'>
                {[0, 1, 2].map((item) => (
                    <div key={item} className='flex items-center gap-3'>
                        <SkeletonBlock className='h-10 w-10 shrink-0 rounded-full' />
                        <div className='flex-1 space-y-2'>
                            <SkeletonBlock className='h-3.5 w-28' />
                            <SkeletonBlock className='h-3 w-20' />
                        </div>
                        <SkeletonBlock className='h-8 w-16 rounded-full' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function ProfileLoadingScreen() {
    return (
        <AppShell activeItem='Profile' rightAside={<FollowSuggestionsSkeleton />}>
            <div role='status' aria-label='Loading profile' className='h-full overflow-y-auto bg-[#f3f5f8] pb-20 dark:bg-[#10151f] lg:pb-0'>
                <span className='sr-only'>Loading profile...</span>
                <div className='mx-auto max-w-190 px-4 py-4 sm:px-5 lg:px-0 lg:py-6'>
                    <div aria-hidden='true' className='animate-pulse overflow-hidden rounded-[24px] border border-[#e3e7ef] bg-white shadow-[0_16px_45px_rgba(31,41,55,0.06)] dark:border-[#303a4c] dark:bg-[#1b2330]'>
                        <div className='h-52 bg-[linear-gradient(115deg,#e7e3fb_0%,#e2e7f8_52%,#dcecf6_100%)] sm:h-60 dark:bg-[#252f40]' />
                        <div className='px-5 pb-6 sm:px-7 sm:pb-7'>
                            <div className='-mt-14 flex items-end justify-between sm:-mt-16'>
                                <SkeletonBlock className='h-26 w-26 rounded-full border-[5px] border-white sm:h-32 sm:w-32 dark:border-[#1b2330]' />
                                <SkeletonBlock className='mb-2 hidden h-10 w-32 rounded-full sm:block' />
                            </div>
                            <div className='mt-4 space-y-2'>
                                <SkeletonBlock className='h-7 w-48 sm:h-8' />
                                <SkeletonBlock className='h-4 w-32' />
                            </div>
                            <div className='mt-4 flex gap-2'>
                                <SkeletonBlock className='h-7 w-20 rounded-full' />
                                <SkeletonBlock className='h-7 w-36 rounded-full' />
                            </div>
                            <div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3'>
                                {[0, 1, 2].map((item) => (
                                    <div key={item} className='rounded-[16px] border border-[#eceef3] bg-[#fafbfc] p-4 dark:border-[#303a4c] dark:bg-[#202838]'>
                                        <SkeletonBlock className='mb-3 h-3.5 w-20' />
                                        <SkeletonBlock className='h-5 w-12' />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex gap-8 border-t border-[#e9ebf1] bg-[#fafbfc] px-5 dark:border-[#303a4c] dark:bg-[#171d29] sm:px-7'>
                            <SkeletonBlock className='my-4 h-4 w-12' />
                            <SkeletonBlock className='my-4 h-4 w-20' />
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    )
}
