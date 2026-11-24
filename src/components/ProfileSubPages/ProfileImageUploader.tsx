"use client"
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useActionState, useState } from 'react'
import SubmitButton from '../SubmitButton/SubmitButton'
import { uploadProfilePhotoAction } from '@/lib/action'

export default function ProfileImageUploader() {
    const [image,setImage] = useState<null | string>(null)
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')
    const router = useRouter()

    const closeModal = function () {
        router.push(`/profile?tab=${tab}`)
        setImage(null)
    }

    const handleUploadimage = function(e : ChangeEvent<HTMLInputElement, HTMLInputElement>){
        const file = e.target.files?.[0]

        if (!file) return
        const imageUrl = URL.createObjectURL(file)
        setImage(imageUrl)
    }

    const [formState,formAction,isPending] = useActionState(uploadProfilePhotoAction,null)
    return (
        <div
            id='profile-photo-update-modal'
            role='dialog'
            aria-modal='true'
            aria-labelledby='profile-photo-update-title'
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'
        >
            <div className='w-full max-w-md rounded-[24px] border border-[#e3e7ef] bg-white p-5 shadow-2xl dark:border-[#303a4c] dark:bg-[#1b2330]'>
                <h2 id='profile-photo-update-title' className='mb-4 text-lg font-semibold text-[#171d27] dark:text-[#f1f4fb]'>
                    Update profile photo
                </h2>
                <form action={formAction} id='profile-photo-update-form' className='space-y-4'>
                    <div className='relative mx-auto h-40 w-40 overflow-hidden rounded-full bg-[#f3f5f8] dark:bg-[#202838]'>
                        {image && <Image src={image} alt='upload your new image' className='object-cover' fill />}
                    </div>
                    <label htmlFor='profile-photo-file' className='block text-sm font-medium text-[#687386] dark:text-[#aeb8ca]'>
                        Choose a photo
                    </label>
                    <input type='hidden' name='tab' value={tab!}/>
                    <input
                        id='profile-photo-file'
                        name='photo'
                        type='file'
                        accept='image/*'
                        onChange={handleUploadimage}
                        className='block w-full text-sm text-[#687386] file:mr-4 file:rounded-full file:border-0 file:bg-[#eeecff] file:px-4 file:py-2 file:font-semibold file:text-[#5b4fe8] hover:file:bg-[#e4e1ff] dark:text-[#aeb8ca] dark:file:bg-[#302b59] dark:file:text-[#c8c2ff]'
                    />
                    {formState?.noPhotoError && <p className='text-xs text-red-500'>{formState.noPhotoError}</p>}
                    <div className='flex justify-end gap-3'>
                        <button
                        disabled={isPending}
                            onClick={closeModal}
                            type='button'
                            className='rounded-full border border-[#dde1eb] px-5 py-2.5 text-sm font-semibold text-[#687386] transition hover:bg-[#f5f6fb] dark:border-[#354154] dark:text-[#aeb8ca] dark:hover:bg-[#293448]'
                        >
                            Cancel
                        </button>
                        
                        <SubmitButton text='Save photo' classes='rounded-full bg-[#5b4fe8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4f43d8] h-full'/>
                    </div>
                </form>
            </div>
        </div>
    )
}
