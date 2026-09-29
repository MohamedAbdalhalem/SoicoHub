import Link from 'next/link'
import {
  Bell,
  Bookmark,
  House,
  PlusSquare,
  UserRound,
} from 'lucide-react'
import type { ActiveNavItem } from '@/components/ui/app-shell'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import SettingsMenu from './SettingsMenu'

const items = [
  { label: 'Home', shortLabel: 'Home', href: '/', icon: House },
  { label: 'Create Post', shortLabel: 'Create', href: '/create-post', icon: PlusSquare },
  { label: 'Notifications', shortLabel: 'Alerts', href: '/notifications', icon: Bell },
  { label: 'Bookmarks', shortLabel: 'Saved', href: '/bookmarks', icon: Bookmark },
  { label: 'Profile', shortLabel: 'Profile', href: '/profile', icon: UserRound },
] as const

export default function BottomNavbar({ activeItem }: { activeItem: ActiveNavItem }) {
  return (
    <nav
      aria-label='Mobile navigation'
      className='fixed inset-x-0 bottom-0 z-20 border-t border-[#dfe4eb] bg-[#f6f7fb]/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_18px_rgba(15,23,42,0.06)] backdrop-blur dark:border-[#293242] dark:bg-[#171d29]/95 lg:hidden'
    >
      <div className='mx-auto grid max-w-105 grid-cols-7'>
        {items.map(({ label, shortLabel, href, icon: Icon }) => {
          const isActive = activeItem === label

          return (
            <Link
              key={label}
              href={href}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg text-[10px] font-medium ${isActive ? 'text-[#5b4fe8] dark:text-[#b7adff]' : 'text-[#6d7788] dark:text-[#aeb8ca]'}`}
            >
              <Icon className='h-5 w-5' />
              <span>{shortLabel}</span>
            </Link>
          )
        })}
        <div className='flex min-h-12 flex-col items-center justify-center gap-1 text-[10px] font-medium text-[#6d7788] dark:text-[#aeb8ca]'>
          <ThemeToggle compact />
          <span >Theme</span>
        </div>
        <SettingsMenu />
      </div>
    </nav>
  )
}