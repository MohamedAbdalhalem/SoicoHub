"use client"
import { Camera, PencilLine } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
export default function ProfileHeader({ src, alt }: { src: string, alt: string }) {
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')
    const router = useRouter()
    const openImagePreview = function () {
        router.push(`/profile?tab=${tab}&preview=image`)
    }
    const openImageUploader = function () {
        router.push(`/profile?tab=${tab}&preview=upload`)
    }
    return (
        <div className='relative -mt-14.5 flex items-end justify-between gap-3 px-5 pb-4 sm:-mt-16 sm:px-7'>
            <div className='flex min-w-0 items-end gap-3 sm:gap-4'>
                <div
                    onClick={openImagePreview}
                    className='relative h-26 w-26 shrink-0 overflow-hidden rounded-full border-[5px] border-white bg-[#e9eaf8] shadow-[0_12px_28px_rgba(23,30,44,0.2)] sm:h-32 sm:w-32 dark:border-[#1b2330] dark:bg-[#202838]'>
                    <Image
                        src={src}
                        alt={alt}
                        className='h-full w-full object-cover'
                        fill
                    />
                </div>

                <div className='mb-3 hidden sm:block'>
                    <button
                        onClick={openImageUploader}
                        type='button'
                        aria-label='Change profile photo'
                        className='flex h-11 w-11 items-center justify-center rounded-full border border-[#dde1eb] bg-white text-[#2b2f3b] shadow-sm transition hover:bg-[#f5f6fb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fe8] dark:border-[#354154] dark:bg-[#202838] dark:text-[#e9eef8] dark:hover:bg-[#293448]'>
                        <Camera className='h-4 w-4' />
                    </button>
                </div>
            </div>

            <Link href='/profile/edit-profile' className='mb-2 hidden items-center gap-2 rounded-full bg-[#5b4fe8] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_6px_16px_rgba(91,79,232,0.25)] transition hover:bg-[#4f43d8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fe8] sm:flex'>
                <PencilLine className='h-4 w-4' />
                Edit Profile
            </Link>
        </div>
    )
}
