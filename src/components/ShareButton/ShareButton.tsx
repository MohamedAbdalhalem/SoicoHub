'use client'
import { sharePostAction } from '@/lib/action'
import { CheckCheck, CircleX, Repeat2, TruckElectric } from 'lucide-react'
import { toast } from 'sonner'


export default function ShareButton({sharesCount,postId} : {sharesCount : number,postId : string}) {
    const handleSharePost = async function(){
        const {message} =  await sharePostAction(postId)
        const icon = message === 'post shared successfully' ? <CheckCheck /> : <CircleX />
        toast(message,{position : 'top-right',icon})
    }
    return (
        <button
            onClick={handleSharePost}
            type='button'
            aria-label={`${sharesCount} shares`}
            className='flex h-9 items-center gap-2 rounded-xl px-3 text-[13px] transition-colors hover:bg-[#eef0f7] hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8]/50 sm:text-sm dark:hover:bg-[#252f40] dark:hover:text-emerald-400'
        >
            <Repeat2 className='h-4 w-4' strokeWidth={1.8} />
            <span>{sharesCount}</span>
        </button>
    )
}
