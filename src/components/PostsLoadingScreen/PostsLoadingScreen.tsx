
export default function PostsLoadingScreen() {
    return (
        <div className='space-y-4'>
            <article className='animate-pulse rounded-[20px] border border-[#e5e8ee] bg-[#f7f8fb] p-4 shadow-[0_1px_0_rgba(17,24,39,0.02)] dark:border-[#303a4c] dark:bg-[#1b2330]'>

                {/* Header */}
                <div className='mb-4 flex items-start justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                        {/* Avatar */}
                        <div className='h-11 w-11 shrink-0 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />

                        {/* User info */}
                        <div className='space-y-2'>
                            <div className='h-4 w-28 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />

                            <div className='h-3 w-40 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                        </div>
                    </div>

                    {/* More button */}
                    <div className='h-8 w-8 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                </div>

                {/* Post text */}
                <div className='space-y-2'>
                    <div className='h-4 w-full rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                    <div className='h-4 w-4/5 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                </div>

                {/* Optional image */}
                <div className='mt-4 h-65 w-full rounded-[18px] bg-[#e2e5eb] sm:h-70 md:h-80 dark:bg-[#303a4c]' />

                {/* Actions */}
                <div className='mt-4 flex items-center justify-between pr-1'>
                    <div className='flex items-center gap-5'>

                        {/* Like */}
                        <div className='flex items-center gap-2'>
                            <div className='h-4 w-4 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                            <div className='h-3 w-5 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                        </div>

                        {/* Comments */}
                        <div className='flex items-center gap-2'>
                            <div className='h-4 w-4 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                            <div className='h-3 w-5 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                        </div>

                        {/* Shares */}
                        <div className='flex items-center gap-2'>
                            <div className='h-4 w-4 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                            <div className='h-3 w-5 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                        </div>
                    </div>

                    {/* Bookmark */}
                    <div className='h-4 w-4 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                </div>
            </article>
            <article className='animate-pulse rounded-[20px] border border-[#e5e8ee] bg-[#f7f8fb] p-4 shadow-[0_1px_0_rgba(17,24,39,0.02)] dark:border-[#303a4c] dark:bg-[#1b2330]'>

                {/* Header */}
                <div className='mb-4 flex items-start justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                        {/* Avatar */}
                        <div className='h-11 w-11 shrink-0 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />

                        {/* User info */}
                        <div className='space-y-2'>
                            <div className='h-4 w-28 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />

                            <div className='h-3 w-40 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                        </div>
                    </div>

                    {/* More button */}
                    <div className='h-8 w-8 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                </div>

                {/* Post text */}
                <div className='space-y-2'>
                    <div className='h-4 w-full rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                    <div className='h-4 w-4/5 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                </div>

                {/* Optional image */}
                <div className='mt-4 h-65 w-full rounded-[18px] bg-[#e2e5eb] sm:h-70 md:h-80 dark:bg-[#303a4c]' />

                {/* Actions */}
                <div className='mt-4 flex items-center justify-between pr-1'>
                    <div className='flex items-center gap-5'>

                        {/* Like */}
                        <div className='flex items-center gap-2'>
                            <div className='h-4 w-4 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                            <div className='h-3 w-5 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                        </div>

                        {/* Comments */}
                        <div className='flex items-center gap-2'>
                            <div className='h-4 w-4 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                            <div className='h-3 w-5 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                        </div>

                        {/* Shares */}
                        <div className='flex items-center gap-2'>
                            <div className='h-4 w-4 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                            <div className='h-3 w-5 rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                        </div>
                    </div>

                    {/* Bookmark */}
                    <div className='h-4 w-4 rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
                </div>
            </article>
        </div>
    )
}
