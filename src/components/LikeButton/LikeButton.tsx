"use client"
import { toggleLikeAction } from "@/lib/action";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { startTransition, useOptimistic } from 'react';


export default function LikeButton(
    { likesCount, postId, likes, user }:
        { likesCount: number, postId: string, likes: string[], user: string }
) {

    const [optimisticLike, setOptimisticLike] = useOptimistic(likes);
    const [optimisticLikeCount, setOptimisticLikeCount] = useOptimistic(likesCount);

    const handleOptimisticLike = async function () {
        startTransition(async () => {
            setOptimisticLike(oldState => {
                if (oldState.includes(user)) {
                    return []
                } else {
                    return [user]
                }
            })
            if (likes.includes(user)) {
                setOptimisticLikeCount(oldState => oldState - 1)
            } else {
                setOptimisticLikeCount(oldState => oldState + 1)
            }
            await toggleLikeAction(postId)
        })
    }
    return (
        <button
            onClick={handleOptimisticLike}
            className='flex items-center gap-2 text-[14px] transition-color '
        >
            {optimisticLike.includes(user) ? <FaHeart className='text-red-500 ' /> : <CiHeart className="text-[23px]" />}
            <span>{optimisticLikeCount}</span>
        </button>
    )
}
