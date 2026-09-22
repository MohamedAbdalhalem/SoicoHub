import type { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Bell,
  Bookmark,
  Home as HomeIcon,
  Search,
  Sparkles,
  User,
  Plus,
  House,
  SquarePen,
  CircleUser,
} from 'lucide-react'

export type ActiveNavItem = 'Home' | 'Search' | 'Notifications' | 'Bookmarks' | 'Profile'

const navItems: Array<{
  label: ActiveNavItem
  icon: typeof HomeIcon
  href: string
  badge?: number
}> = [
  { label: 'Home', icon: HomeIcon, href: '/' },
  { label: 'Search', icon: Search, href: '/search' },
  { label: 'Notifications', icon: Bell, href: '/notifications', badge: 4 },
  { label: 'Bookmarks', icon: Bookmark, href: '/bookmarks' },
  { label: 'Profile', icon: User, href: '/profile' },
]

export function AppShell({
  children,
  rightAside,
  activeItem,
}: {
  children: ReactNode
  rightAside?: ReactNode
  activeItem: ActiveNavItem
}) {
  return (
    <main className='min-h-screen bg-[#f3f5f8] dark:bg-[#10151f]'>
      <div className='flex h-screen w-full overflow-hidden bg-[#f3f5f8] dark:bg-[#10151f]'>
        <aside className='hidden w-62.5 shrink-0 border-r border-[#e6e9ee] bg-[#f6f7fb] p-5 dark:border-[#293242] dark:bg-[#171d29] lg:flex lg:flex-col'>
          <div className='mb-8 flex items-center gap-3 pl-1'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#5a4ae9] text-white shadow-[0_8px_18px_rgba(90,74,233,0.35)]'>
              <Sparkles className='h-4 w-4' />
            </div>
            <span className='text-[17px] font-semibold tracking-tight text-[#2a2f3a] dark:text-[#eef2ff]'>Route Posts</span>
          </div>

          <nav className='space-y-2'>
            {navItems.map(({ label, icon: Icon, href, badge }) => {
              const isActive = activeItem === label

              return (
                <Link
                  key={label}
                  href={href}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] font-medium transition ${
                    isActive
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
              )
            })}
          </nav>

          <div className='mt-6'>
            <Button className='h-11 w-full rounded-xl bg-[#5b4fe8] text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(91,79,232,0.25)] hover:bg-[#4f43d8]'>
              <Plus className='mr-2 h-4 w-4' />
              Create Post
            </Button>
          </div>

          <div className='mt-auto flex items-center gap-3 rounded-xl border border-[#e6e9ee] bg-white/60 p-2.5 dark:border-[#293242] dark:bg-[#202838]'>
            <div className='flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#d9d2ff] to-[#f5d6cf] text-[11px] font-bold text-[#2e2a49]'>
              AC
            </div>
            <div className='min-w-0 flex-1'>
              <p className='truncate text-[14px] font-semibold text-[#1e2330] dark:text-[#eef2ff]'>Aria Chen</p>
              <p className='truncate text-[12px] text-[#6a7280] dark:text-[#aeb8ca]'>@aria_chen</p>
            </div>
          </div>
        </aside>

        <section className='flex-1 min-w-0 bg-[#f3f5f8] dark:bg-[#10151f]'>{children}</section>

        {rightAside ? (
          <aside className='hidden w-72.5 shrink-0 border-l border-[#e5e8ee] bg-[#f6f7fb] p-4 dark:border-[#293242] dark:bg-[#171d29] xl:block'>
            {rightAside}
          </aside>
        ) : null}
      </div>

      <div className='fixed inset-x-0 bottom-0 z-20 border-t border-[#dfe4eb] bg-[#f6f7fb] px-4 py-2 shadow-[0_-8px_18px_rgba(15,23,42,0.06)] dark:border-[#293242] dark:bg-[#171d29] lg:hidden'>
        <div className='mx-auto flex max-w-105 items-center justify-between'>
          {navItems.map(({ label, icon: Icon, href, badge }) => {
            const isActive = activeItem === label

            return (
              <Link
                key={label}
                href={href}
                className={`relative flex h-11 w-11 items-center justify-center rounded-xl ${
                  isActive ? 'bg-[#5b4fe8] text-white' : 'text-[#6d7788] dark:text-[#aeb8ca]'
                }`}
              >
                <Icon className='h-5 w-5' />
                {badge && label === 'Notifications' ? (
                  <span className='absolute right-2 top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#5b4fe8] px-1 text-[9px] font-semibold text-white'>
                    {badge}
                  </span>
                ) : null}
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
