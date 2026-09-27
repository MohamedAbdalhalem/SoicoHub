import { Archive, Heart, MessageCircle, MoreHorizontal, Repeat2 } from 'lucide-react'

type PostProps = {
    author?: string
    handle?: string
    time?: string
    text?: string
    image?: string
    avatar?: string
    accent?: string
    likes?: number
    comments?: number
    reposts?: number
}

export default function Post({
    author = 'Aria Chen',
    handle = '@aria_chen',
    time = '2h',
    text = 'Just shipped a massive update to our design system ✨ The new component library is looking incredible. Huge shoutout to @maya_design and @carlos_dev for the late nights!',
    image = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    avatar = 'AC',
    accent = 'from-[#f0d5ba] to-[#b7d7ff]',
    likes = 128,
    comments = 34,
    reposts = 12,
}: PostProps) {
    return (
        <article className='rounded-[20px] border border-[#e5e8ee] bg-[#f7f8fb] p-4 shadow-[0_1px_0_rgba(17,24,39,0.02)] dark:border-[#303a4c] dark:bg-[#1b2330]'>
            <div className='mb-3 flex items-start justify-between gap-3'>
                <div className='flex items-center gap-3'>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br ${accent} text-[11px] font-bold text-[#1f2937]`}>
                        {avatar}
                    </div>
                    <div className='leading-tight'>
                        <div className='flex flex-wrap items-center gap-2 text-[15px] font-semibold text-[#1d2430] dark:text-[#e9eef8]'>
                            <span>{author}</span>
                            <span className='text-[#7b8393] dark:text-[#9da9bc]'>{handle}</span>
                            <span className='text-[#7b8393] dark:text-[#9da9bc]'>•</span>
                            <span className='text-[#7b8393] dark:text-[#9da9bc]'>{time}</span>
                        </div>
                    </div>
                </div>

                <button type='button' className='flex h-8 w-8 items-center justify-center rounded-full text-[#7a8190] hover:bg-white dark:text-[#9da9bc] dark:hover:bg-[#293447]'>
                    <MoreHorizontal className='h-4 w-4' />
                </button>
            </div>

            <p className='whitespace-pre-line text-[15px] leading-relaxed text-[#2d3746] dark:text-[#d4dce9]'>
                {text}
            </p>


            <div className='mt-4 overflow-hidden rounded-[18px] border border-[#e5e8ee] bg-white dark:border-[#303a4c] dark:bg-[#202838]'>
                {image ? <img src={image} alt={`${author} post`} className='h-65 w-full object-cover sm:h-70 md:h-80' /> : null}
            </div>


            <div className='mt-4 flex items-center justify-between gap-3 pr-1 text-[#6a7280]'>
                <div className='flex items-center gap-5'>
                    <button type='button' className='flex items-center gap-2 text-[14px]'>
                        <Heart className='h-4 w-4' />
                        <span>{likes}</span>
                    </button>
                    <button type='button' className='flex items-center gap-2 text-[14px]'>
                        <MessageCircle className='h-4 w-4' />
                        <span>{comments}</span>
                    </button>
                    <button type='button' className='flex items-center gap-2 text-[14px]'>
                        <Repeat2 className='h-4 w-4' />
                        <span>{reposts}</span>
                    </button>
                </div>

                <button type='button' className='flex items-center gap-2 text-[14px]'>
                    <Archive className='h-4 w-4' />
                    <span>47</span>
                </button>
            </div>
        </article>
    )
}
