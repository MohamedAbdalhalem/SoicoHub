"use client"
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'


export default function ProfileImagePreview({ src, alt }: { src: string, alt: string }) {
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')
    const router = useRouter()
    const closeModal = function () {
        router.push(`/profile?tab=${tab}`)
    }
    return (
        <div
            id='profile-photo-preview-modal'
            role='dialog'
            aria-modal='true'
            aria-labelledby='profile-photo-preview-title'
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'
        >
            <div className='w-full max-w-md rounded-[24px] border border-[#e3e7ef] bg-white p-5 shadow-2xl dark:border-[#303a4c] dark:bg-[#1b2330]'>
                <h2 id='profile-photo-preview-title' className='mb-4 text-lg font-semibold text-[#171d27] dark:text-[#f1f4fb]'>
                    Profile photo
                </h2>
                <div className='relative mx-auto aspect-square w-full max-w-80 overflow-hidden rounded-2xl bg-[#f3f5f8] dark:bg-[#202838]'>
                    <Image src={src} alt={alt} className='object-cover' fill />
                </div>
                <div className='mt-4 flex justify-end'>
                    <button
                        onClick={closeModal}
                        type='button'
                        className='rounded-full border border-[#dde1eb] px-5 py-2.5 text-sm font-semibold text-[#687386] transition hover:bg-[#f5f6fb] dark:border-[#354154] dark:text-[#aeb8ca] dark:hover:bg-[#293448]'
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
