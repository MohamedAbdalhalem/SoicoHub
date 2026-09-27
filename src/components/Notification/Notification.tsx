import React from 'react'

export default function Notification() {
    return (
        <div

            className='flex items-center gap-4 border-b border-[#e7ebf0] px-4 py-4 last:border-b-0 dark:border-[#303a4c]'
        >
            <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#dfe9ff] to-[#d9c8ff] text-[12px] font-bold text-[#1c2430]`}>
                C
                <span className='absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#f7f8fb] bg-[#5b4fe8]' />
            </div>

            <div className='flex-1 text-[15px] leading-6 text-[#1d2430] dark:text-[#e9eef8]'>
                <span className='font-semibold'>@carlos_dev</span>
                <span className='text-[#4d5667]'>liked your post</span>
                <div className='mt-1 text-[13px] text-[#7a8190] dark:text-[#9da9bc]'>2m ago</div>
            </div>
        </div>
    )
}
