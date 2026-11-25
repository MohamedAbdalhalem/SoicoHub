"use client"
import { startTransition, useActionState } from 'react'
import { Button } from '../ui/button'
import { toggleFollowAction } from '@/lib/action'
import { toast } from 'sonner'
import { CheckCheck, CircleX } from 'lucide-react'

export default function FollowButton({ userId,name }: { userId: string,name : string }) {
    const reducerAction = function () {
        startTransition(async () => {
            const data = await toggleFollowAction(userId)
            const icon = data ? <CheckCheck /> : <CircleX />
            const massage = data ? `You started following ${name}` : `Failed to follow ${name}. Please try again.`
            toast(massage, { position: 'top-right', icon })
        });
    }
    const [_, action, isPending] = useActionState(reducerAction, null)
    return (
        <Button
            onClick={action}
            disabled={isPending}
            size='sm'
            className='h-8 rounded-full bg-[#5b4fe8] px-3 text-[12px] font-medium text-white hover:bg-[#4f43d8] cursor-pointer'
        >
            {isPending ? 'Following' : "Follow"}
        </Button>
    )
}
