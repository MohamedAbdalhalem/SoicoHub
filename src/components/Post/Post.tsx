import { postType } from '@/app/types'
import {
    Archive,
    Heart,
    MessageCircle,
    MoreHorizontal,
    Repeat2,
} from 'lucide-react'




export default function Post({post} : {post : postType}) {
    const time = new Date(post.createdAt).toLocaleString('en', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    })

    return (
        <article className='rounded-[20px] border border-[#e5e8ee] bg-[#f7f8fb] p-4 shadow-[0_1px_0_rgba(17,24,39,0.02)] dark:border-[#303a4c] dark:bg-[#1b2330]'>

            {/* Header */}
            <div className='mb-3 flex items-start justify-between gap-3'>
                <div className='flex items-center gap-3'>

                    <img
                        src={post.user.photo}
                        alt={post.user.name}
                        className='h-11 w-11 rounded-full object-cover'
                    />

                    <div className='leading-tight'>
                        <div className='flex flex-wrap items-center gap-2 text-[15px] font-semibold text-[#1d2430] dark:text-[#e9eef8]'>
                            <span>{post.user.name}</span>

                            <span className='font-normal text-[#7b8393] dark:text-[#9da9bc]'>
                                @{post.user.username}
                            </span>

                            <span className='text-[#7b8393] dark:text-[#9da9bc]'>
                                •
                            </span>

                            <span className='font-normal text-[#7b8393] dark:text-[#9da9bc]'>
                                {time}
                            </span>
                        </div>
                    </div>
                </div>

                <button
                    type='button'
                    className='flex h-8 w-8 items-center justify-center rounded-full text-[#7a8190] hover:bg-white dark:text-[#9da9bc] dark:hover:bg-[#293447]'
                >
                    <MoreHorizontal className='h-4 w-4' />
                </button>
            </div>

            {/* Body */}
            <p className='whitespace-pre-line text-[15px] leading-relaxed text-[#2d3746] dark:text-[#d4dce9]'>
                {post.body}
            </p>

            {/* Actions */}
            <div className='mt-4 flex items-center justify-between gap-3 pr-1 text-[#6a7280] dark:text-[#9da9bc]'>

                <div className='flex items-center gap-5'>

                    <button
                        type='button'
                        className='flex items-center gap-2 text-[14px] transition-colors hover:text-red-500'
                    >
                        <Heart className='h-4 w-4' />
                        <span>{post.likesCount}</span>
                    </button>

                    <button
                        type='button'
                        className='flex items-center gap-2 text-[14px] transition-colors hover:text-blue-500'
                    >
                        <MessageCircle className='h-4 w-4' />
                        <span>{post.commentsCount}</span>
                    </button>

                    <button
                        type='button'
                        className='flex items-center gap-2 text-[14px] transition-colors hover:text-green-500'
                    >
                        <Repeat2 className='h-4 w-4' />
                        <span>{post.sharesCount}</span>
                    </button>
                </div>

                <button
                    type='button'
                    className='flex items-center gap-2 text-[14px] transition-colors hover:text-blue-500'
                >
                    <Archive className='h-4 w-4' />
                </button>
            </div>
        </article>
    )
}