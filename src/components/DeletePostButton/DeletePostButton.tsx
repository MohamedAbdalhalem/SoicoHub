"use client"
import { Trash } from 'lucide-react'
import { startTransition, useActionState } from 'react'
import { Spinner } from '../ui/spinner'
import { deletePostAction } from '@/lib/action'

export default function DeletePostButton({ postId }: { postId: string }) {
    const [_, dispatchAction, isPending] = useActionState(deletePostAction, null)

    const handleDeletePost = function () {
        startTransition(() => {
            dispatchAction(postId)
        });
        
    }
    return (
        <button
            onClick={handleDeletePost}
            type='button'
            aria-label='Delete post'
            title='Delete post'
            className='flex h-9 w-9 items-center justify-center rounded-xl text-[#7a8190] transition-colors hover:bg-red-50 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/50 dark:text-[#9da9bc] dark:hover:bg-red-950/30 dark:hover:text-red-400 cursor-pointer'
        >
            {!isPending && <Trash className='h-4 w-4' strokeWidth={1.8} />}
            {isPending && <Spinner/>}
        </button>
    )
}
