import { userType } from '@/app/types'
import { cookies } from 'next/headers'
import Image from 'next/image'
import  { Suspense } from 'react'

function UserCardLoadingComponet() {
    return (
        <div
            role='status'
            aria-label='Loading user profile'
            className='mx-auto mb-3 flex max-w-180 items-center gap-3 px-1'
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
        <div className='mx-auto mb-3 flex max-w-180 items-center gap-3 px-1'>
            <div>
                <Image src={user.photo} alt={user.name || ''} width={48} height={48} className='rounded-full' />
            </div>
            <div>
                <p className='text-[16px] font-semibold text-[#1d2430] dark:text-[#e9eef8]'>{user.name}</p>
                <p className='text-[13px] text-[#697386] dark:text-[#aeb8ca]'>@{user.username}</p>
            </div>
        </div>
    )
}

export default function CreatePostUserCard() {
    return (
        <Suspense fallback={<UserCardLoadingComponet />}>
            <UserCard />
        </Suspense>
    )
}
