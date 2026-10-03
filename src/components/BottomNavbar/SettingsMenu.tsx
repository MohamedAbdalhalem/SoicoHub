'use client'
import { useEffect, useRef, useState } from 'react'
import { LogOut, Settings } from 'lucide-react'
import { signoutAction } from '@/lib/action'
export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!isOpen) return

    const dismissMenu = (event: PointerEvent) => {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', dismissMenu)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', dismissMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div ref={menuRef} className='relative flex min-h-12 flex-col items-center justify-center gap-1 text-[10px] font-medium text-[#6d7788] dark:text-[#aeb8ca]'>
      <button
        type='button'
        aria-label='Settings'
        aria-haspopup='menu'
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className='flex min-h-12 w-full flex-col items-center justify-center gap-1 rounded-lg transition hover:bg-[#eceef9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8] dark:hover:bg-[#222b3b]'
      >
        <Settings className='h-5 w-5' />
        <span>Settings</span>
      </button>

      {isOpen ? (
        <form
          role='menu'
          aria-label='Settings menu'
          className='absolute bottom-[calc(100%+0.5rem)] right-0 z-30 w-44 overflow-hidden rounded-lg border border-[#dfe4eb] bg-white p-1 shadow-[0_8px_24px_rgba(15,23,42,0.16)] dark:border-[#354154] dark:bg-[#202838]'
        >
          <button
            role='menuitem'
            formAction={signoutAction}
            className='flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm text-[#2f3742] hover:bg-[#eceef9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#5b4fe8] dark:text-[#d8deeb] dark:hover:bg-[#293447]'
          >
            <LogOut className='h-4 w-4' />
            Sign out
          </button>
        </form>
      ) : null}
    </div>
  )
}