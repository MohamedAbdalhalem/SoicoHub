import Image from 'next/image'
import FollowButton from '../FollowButton/FollowButton'

type SuggestionProps = {
    _id: string
    name: string
    username: string
    photo: string
}

export default function Suggestion({
    _id,
    name,
    username,
    photo,
}: SuggestionProps) {
    const initials = name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase() || '?'

    return (
        <div className='flex items-center justify-between gap-3 rounded-2xl border border-[#e5e8ee] bg-white p-3 dark:border-[#303a4c] dark:bg-[#202838]'>
            <div className='flex min-w-0 items-center gap-3'>
                <div className='relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-[#d9d2ff] to-[#f5d6cf] text-[13px] font-bold text-[#2e2a49]'>
                    {photo ? (
                        <Image src={photo} alt='' fill sizes='48px' className='object-cover' />
                    ) : (
                        initials
                    )}
                </div>
                <div className='min-w-0'>
                    <p className='truncate text-[14px] font-semibold text-[#222937] dark:text-[#e9eef8]'>{name}</p>
                    <p className='truncate text-[12px] text-[#7a8090] dark:text-[#9da9bc]'>@{username}</p>
                    
                </div>
            </div>

            <FollowButton userId={_id} name={name}/>
        </div>
    )
}
