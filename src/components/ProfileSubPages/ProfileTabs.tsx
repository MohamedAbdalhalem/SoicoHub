"use client"
import { Bookmark } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function ProfileTabs() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const tab = searchParams.get('tab')

    const handleChangeToBookmarksTab = () => {
        router.push(pathname + '?tab=bookmarks')

    }
    const handleChangeToPostsTab = () => {
        router.push(pathname + '?tab=posts')
    }

    const activeTabClass =
        "relative flex items-center gap-2 py-4 text-[14px] font-semibold text-[#5a4ae9] after:absolute after:inset-x-0 after:bottom-0 after:h-0.75 after:rounded-full after:bg-[#5a4ae9]";

    const inactiveTabClass =
        "flex items-center gap-2 py-4 text-[14px] font-medium text-[#778092] transition hover:text-[#343b4a] dark:text-[#aeb8ca] dark:hover:text-white";
        
    return (
        <div role='tablist' aria-label='Profile content' className='flex gap-8'>
            <button onClick={handleChangeToPostsTab} type='button' role='tab' aria-selected='true' className={tab !== 'bookmarks' ? activeTabClass : inactiveTabClass} >
                Posts
            </button>
            <button onClick={handleChangeToBookmarksTab} type='button' role='tab' aria-selected='false' className={tab === 'bookmarks' ? activeTabClass : inactiveTabClass}>
                <Bookmark className='h-4 w-4' />
                Bookmarks
            </button>
        </div>
    )
}
