import { Button } from '../ui/button'

type SuggestionProps = {
    name?: string
    handle?: string
    actionLabel?: string
    accent?: string
}

export default function Suggestion({ name = 'Rohan Mehta', handle = '@rohan_m', actionLabel = 'Follow', accent = 'from-[#f4c7b8] to-[#d9b2ff]' }: SuggestionProps) {
    return (
        <div  className='flex items-center justify-between gap-3'>
            <div className='flex items-center gap-3'>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br ${accent} text-[10px] font-bold text-[#1f2937]`}>
                    {name
                        .split(' ')
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join('')}
                </div>
                <div className='min-w-0'>
                    <p className='truncate text-[14px] font-semibold text-[#222937] dark:text-[#e9eef8]'>{name}</p>
                    <p className='truncate text-[12px] text-[#7a8090] dark:text-[#9da9bc]'>{handle}</p>
                </div>
            </div>

            <Button size='sm' className='h-8 rounded-full bg-[#5b4fe8] px-3 text-[12px] font-medium text-white hover:bg-[#4f43d8]'>
                {actionLabel}
            </Button>
        </div>
    )
}
