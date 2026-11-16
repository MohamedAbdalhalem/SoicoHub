"use client"
import { toggleBookmarkAction } from '@/lib/action'
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { startTransition, useOptimistic } from 'react';


export default function BookmarkButton({ postId, isBookmark }: { postId: string, isBookmark: boolean }) {
    const [optimisticBookmark, setOptimisticBookmark] = useOptimistic(isBookmark);

    const handleToggleBookmark = async function () {
        startTransition(async () => {
            setOptimisticBookmark(!isBookmark);
            await toggleBookmarkAction(postId)
        });

    }
    let className = 'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors  cursor-pointer '
    if (optimisticBookmark) {
        className += 'text-[#5b4fe8] dark:text-[#b7adff]'
    }
    return (
        <button
            onClick={handleToggleBookmark}
            type='button'
            aria-label='Save post'
            title='Save post'
            className={className}
        >
            {optimisticBookmark ? <FaBookmark className='h-4 w-4' /> :
                <CiBookmark className='h-4.5 w-4.5' />}
        </button>
    )
}
