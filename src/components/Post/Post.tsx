import { postType } from '@/app/types'
import {
    Archive,
    MessageCircle,
    Repeat2,
    Wrench,
} from 'lucide-react'
import LikeButton from '../LikeButton/LikeButton'
import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'
import Image from 'next/image'
import DeletePostButton from '../DeletePostButton/DeletePostButton'

export default async function Post({ post }: { post: postType }) {
    const createdAt = new Date(post.createdAt)
    const time = createdAt.toLocaleString('en', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    })
    const cookieStore = await cookies()
    const token = cookieStore.get('tkn')?.value
    const { user } = jwtDecode<{ user: string }>(token || '')
   
    return (
        <article className='group rounded-[24px] border border-[#e5e8ee] bg-white p-4 shadow-[0_8px_24px_rgba(17,24,39,0.035)] transition-shadow duration-200 hover:shadow-[0_12px_30px_rgba(17,24,39,0.08)] sm:p-5 dark:border-[#303a4c] dark:bg-[#1b2330] dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]'>
            {/* Header */}
            <div className='mb-4 flex items-start justify-between gap-3'>
                <div className='flex min-w-0 items-center gap-3'>
                    <div className='relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-sm dark:ring-[#293447]'>
                        <Image
                            src={post.user.photo}
                            alt={post.user.name}
                            fill
                            sizes='48px'
                            className='object-cover'
                        />
                    </div>

                    <div className='min-w-0'>
                        <div className='flex flex-wrap items-baseline gap-x-2 gap-y-0.5'>
                            <span className='max-w-full truncate text-[15px] font-semibold text-[#1d2430] dark:text-[#e9eef8]'>
                                {post.user.name}
                            </span>
                            <span className='truncate text-[13px] text-[#7b8393] dark:text-[#9da9bc]'>
                                @{post.user.username}
                            </span>
                        </div>
                        <div className='mt-1 text-xs text-[#7b8393] dark:text-[#9da9bc]'>
                            <time dateTime={post.createdAt}>{time}</time>
                        </div>
                    </div>
                </div>

                {post.user._id === user && <div className='flex shrink-0 items-center gap-1'>
                    <button
                        type='button'
                        aria-label='Edit post'
                        title='Edit post'
                        className='flex h-9 w-9 items-center justify-center rounded-xl text-[#7a8190] transition-colors hover:bg-white hover:text-[#5b4fe8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8]/50 dark:text-[#9da9bc] dark:hover:bg-[#293447] dark:hover:text-[#b7adff] cursor-pointer'
                    >
                        <Wrench className='h-4 w-4' strokeWidth={1.8} />
                    </button>
                    <DeletePostButton postId={post._id}/>
                </div>}
            </div>

            {/* Body */}
            <p className='whitespace-pre-line break-words text-[15px] leading-7 text-[#2d3746] dark:text-[#d4dce9]'>
                {post.body}
            </p>

            {post.image && (
                <div className='relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl '>
                    <Image
                        src={post.image}
                        alt={`Image shared by ${post.user.name}`}
                        fill
                        sizes='(max-width: 768px) 100vw, 768px'
                        className='object-contain p-1'
                    />
                </div>
            )}

            {/* Actions */}
            <div className='mt-5 flex items-center justify-between gap-2 border-t border-[#e5e8ee] pt-3 text-[#6a7280] dark:border-[#303a4c] dark:text-[#9da9bc]'>
                <div className='flex min-w-0 items-center gap-1 sm:gap-2'>
                    <LikeButton likesCount={post.likesCount} postId={post._id} likes={post.likes} user={user} />

                    <button
                        type='button'
                        aria-label={`${post.commentsCount} comments`}
                        className='flex h-9 items-center gap-2 rounded-xl px-3 text-[13px] transition-colors hover:bg-[#eef0f7] hover:text-[#5b4fe8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8]/50 sm:text-sm dark:hover:bg-[#252f40] dark:hover:text-[#b7adff]'
                    >
                        <MessageCircle className='h-4 w-4' strokeWidth={1.8} />
                        <span>{post.commentsCount}</span>
                    </button>

                    <button
                        type='button'
                        aria-label={`${post.sharesCount} shares`}
                        className='flex h-9 items-center gap-2 rounded-xl px-3 text-[13px] transition-colors hover:bg-[#eef0f7] hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8]/50 sm:text-sm dark:hover:bg-[#252f40] dark:hover:text-emerald-400'
                    >
                        <Repeat2 className='h-4 w-4' strokeWidth={1.8} />
                        <span>{post.sharesCount}</span>
                    </button>
                </div>

                <button
                    type='button'
                    aria-label='Save post'
                    title='Save post'
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors hover:bg-[#eef0f7] hover:text-[#5b4fe8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8]/50 dark:hover:bg-[#252f40] dark:hover:text-[#b7adff]'
                >
                    <Archive className='h-4 w-4' strokeWidth={1.8} />
                </button>
            </div>
        </article>
    )
}
