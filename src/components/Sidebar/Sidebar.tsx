import Link from 'next/link'
import {
    Bell,
    Bookmark,
    House,
    Plus,
    Sparkles,
    UserRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '../ui/button'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import type { ActiveNavItem } from '@/components/ui/app-shell'
import SignoutButton from '../SignoutButton/SignoutButton'
import { cookies } from 'next/headers'
import Image from 'next/image'


const navItems: Array<{ label: ActiveNavItem; icon: LucideIcon; href: string; badge?: number }> = [
    { label: 'Home', icon: House, href: '/' },
    { label: 'Notifications', icon: Bell, href: '/notifications', badge: 4 },
    { label: 'Bookmarks', icon: Bookmark, href: '/bookmarks' },
    { label: 'Profile', icon: UserRound, href: '/profile' },
] as const

export default async function Sidebar({ activeItem }: { activeItem: ActiveNavItem }) {
    const myCookies = await cookies()
    const name = myCookies.get('name')?.value
    const username = myCookies.get('username')?.value
    const photo = myCookies.get('photo')?.value
    return (
        <aside className='hidden w-62.5 shrink-0 border-r border-[#e6e9ee] bg-[#f6f7fb] p-5 dark:border-[#293242] dark:bg-[#171d29] lg:flex lg:flex-col fixed h-screen z-20'>
            <div className='mb-8 flex items-center gap-3 pl-1'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#5a4ae9] text-white shadow-[0_8px_18px_rgba(90,74,233,0.35)]'>
                    <Sparkles className='h-4 w-4' />
                </div>
                <span className='text-[17px] font-semibold tracking-tight text-[#2a2f3a] dark:text-[#eef2ff]'>SoicoHub</span>
            </div>

            <nav className='space-y-2'>
                {navItems.map(({ label, icon: Icon, href, badge }) => {
                    const active = activeItem === label

                    return <Link
                        key={label}
                        href={href}
                        aria-current={active ? 'page' : undefined}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] font-medium transition ${active
                            ? 'bg-[#5b4fe8] text-white shadow-[0_8px_18px_rgba(91,79,232,0.22)]'
                            : 'text-[#2f3742] hover:bg-[#eceef9] dark:text-[#d8deeb] dark:hover:bg-[#222b3b]'
                            }`}
                    >
                        <Icon className='h-4 w-4' />
                        <span className='flex-1'>{label}</span>
                        {badge ? (
                            <span className='flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5b4fe8] px-1 text-[11px] font-semibold text-white'>
                                {badge}
                            </span>
                        ) : null}
                    </Link>
                })}
            </nav>

            <div className='mt-6'>
                <Button asChild className='h-11 w-full rounded-xl bg-[#5b4fe8] text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(91,79,232,0.25)] hover:bg-[#4f43d8]'>
                    <Link href='/create-post'>
                        <Plus className='mr-2 h-4 w-4' />
                        Create Post
                    </Link>
                </Button>
            </div>

            <div className='mt-3 space-y-1'>
                <ThemeToggle />
                <form>
                    <SignoutButton />
                </form>
            </div>

            <div className='mt-auto flex items-center gap-3 rounded-xl border border-[#e6e9ee] bg-white/60 p-2.5 dark:border-[#293242] dark:bg-[#202838]'>
                <Image src={photo || ''} alt={name || ''} width={48} height={48} className=' rounded-full' />
                <div className='min-w-0 flex-1'>
                    <p className='truncate text-[14px] font-semibold text-[#1e2330] dark:text-[#eef2ff]'>{name}</p>
                    <p className='truncate text-[12px] text-[#6a7280] dark:text-[#aeb8ca]'>@{username}</p>
                </div>
            </div>
        </aside>
    )
}
