import { signoutAction } from '@/lib/action'
import { LogOut } from 'lucide-react'


export default async function SignoutButton() {
    
    return (

        <button formAction={signoutAction} className='flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-[#2f3742] transition hover:bg-[#eceef9] dark:text-[#d8deeb] dark:hover:bg-[#222b3b] cursor-pointer w-full'>
            <LogOut className='h-4 w-4' />
            Sign out
        </button>
    )
}
