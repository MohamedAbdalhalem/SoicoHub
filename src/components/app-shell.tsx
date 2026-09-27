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
    <main className='min-h-screen bg-[#f3f5f8] dark:bg-[#10151f]'>
      <div className='flex h-screen w-full overflow-hidden bg-[#f3f5f8] dark:bg-[#10151f]'>
        <Sidebar activeItem={activeItem} />

        <section className='flex-1 min-w-0 bg-[#f3f5f8] dark:bg-[#10151f]'>{children}</section>

        <RightSidebar>{rightAside}</RightSidebar>
      </div>

      <BottomNavbar activeItem={activeItem} />
    </main>
  )
}
