"use client"
import useSwitchMode from '@/hooks/useSwitchMode'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
const {darkMode,switchMode} =  useSwitchMode()
  return (
    <button
      onClick={switchMode}
      type='button'
      aria-label='Dark mode'
      className={`flex items-center gap-3 rounded-xl text-left text-[14px] font-medium text-[#2f3742] transition hover:bg-[#eceef9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8] dark:text-[#d8deeb] dark:hover:bg-[#222b3b] ${compact ? 'h-5 w-5 justify-center' : 'w-full px-3 py-2.5'}`}
    >
      {darkMode == 'darkMode' && <Moon className='h-4 w-4 shrink-0' />}
      {darkMode == 'lightMode' && <Sun className='h-4 w-4 shrink-0' />}
      {!compact ? <span>{darkMode == 'darkMode' ? 'Dark' : 'Light'} mode</span> : null}
    </button>
  )
}