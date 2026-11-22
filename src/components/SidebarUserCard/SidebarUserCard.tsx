import { userType } from '@/app/types'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

function UserCardLoadingComponet() {
    return (
        <div
            role='status'
            aria-label='Loading user profile'
            className='mt-auto flex items-center gap-3 rounded-xl border border-[#e6e9ee] bg-white/60 p-2.5 dark:border-[#293242] dark:bg-[#202838]'
        >
            <span className='sr-only'>Loading user profile...</span>
            <div aria-hidden='true' className='h-12 w-12 shrink-0 animate-pulse rounded-full bg-[#e2e5eb] dark:bg-[#303a4c]' />
            <div aria-hidden='true' className='min-w-0 flex-1 space-y-2'>
                <div className='h-3.5 w-24 animate-pulse rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
                <div className='h-3 w-16 animate-pulse rounded-md bg-[#e2e5eb] dark:bg-[#303a4c]' />
            </div>
        </div>
    )
}

async function UserCard() {
    const cookieStore = await cookies()
    const token = cookieStore.get('tkn')?.value

    const res = await fetch('https://route-posts.routemisr.com/users/profile-data', {
        headers: {
            token: token || ''
        }
    })
    const { data: { user } } = (await res.json()) as { data: { user: userType } }
    return (
        <Link href='/profile' className='mt-auto flex items-center gap-3 rounded-xl border border-[#e6e9ee] bg-white/60 p-2.5 dark:border-[#293242] dark:bg-[#202838]'>
            <Image src={user.photo} alt={user.name || ''} width={48} height={48} className='rounded-full' />
            <div className='min-w-0 flex-1'>
                <p className='truncate text-[14px] font-semibold text-[#1e2330] dark:text-[#eef2ff]'>{user.name}</p>
                <p className='truncate text-[12px] text-[#6a7280] dark:text-[#aeb8ca]'>@{user.username}</p>
            </div>
        </Link>
    )
}

export default function SidebarUserCard() {
    return (
        <Suspense fallback={<UserCardLoadingComponet />}>
            <UserCard />
        </Suspense>
    )
}
