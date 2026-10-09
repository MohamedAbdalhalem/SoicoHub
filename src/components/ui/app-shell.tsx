import type { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import RightSidebar from '@/components/RightSidebar/RightSidebar'
import BottomNavbar from '@/components/BottomNavbar/BottomNavbar'

export type ActiveNavItem = 'Home' | 'Create Post' | 'Notifications' | 'Bookmarks' | 'Profile'

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
    <main className='min-h-dvh bg-[#f3f5f8] dark:bg-[#10151f]'>
      <div className='flex min-h-dvh w-full bg-[#f3f5f8] dark:bg-[#10151f]'>
        <Sidebar activeItem={activeItem} />

        <section className='min-w-0 flex-1 bg-[#f3f5f8] dark:bg-[#10151f] lg:ml-62.5 xl:mr-72.5'>
          {children}
        </section>

        <RightSidebar>{rightAside}</RightSidebar>
      </div>

      <BottomNavbar activeItem={activeItem} />
    </main>
  )
}
