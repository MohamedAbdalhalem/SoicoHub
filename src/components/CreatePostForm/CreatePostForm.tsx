'use client'
import ImagePreviewSection from '../ImagePreviewSection/ImagePreviewSection'
import { AtSign, Hash, ImageIcon, Smile } from 'lucide-react'
import SubmitButton from '../SubmitButton/SubmitButton'
import { useActionState } from 'react'
import { createPostAction } from '@/lib/action'
import AuthErrorAlert from '../AuthErrorAlert/AuthErrorAlert'

export default function CreatePostForm() {
    const [formState, formAction] = useActionState(createPostAction, null)
    return (
        <>
            <form action={formAction} className='mx-auto max-w-180 rounded-[22px] border border-[#e5e8ee] bg-[#f2f4f7] p-3 dark:border-[#303a4c] dark:bg-[#202838] sm:p-4'>
                { formState?.errors.submittedAt && <AuthErrorAlert key={formState.errors.submittedAt} errorMassage={formState.errors.createPostError} />}
                <label htmlFor='post-content' className='sr-only'>Post content</label>
                <textarea
                    name='body'
                    placeholder="What's on your route today? Use @ to mention someone..."
                    className='mt-4 h-30 w-full resize-none border-0 bg-transparent text-lg text-[#2f3745] placeholder:text-[#8892a1] focus:outline-none dark:text-[#e3e9f3] dark:placeholder:text-[#8995aa] sm:text-[18px]'
                />

                <ImagePreviewSection />

                <div className='mt-5 flex items-center justify-between gap-2 border-t border-[#dfe4eb] pt-4 dark:border-[#303a4c] sm:gap-4'>
                    <div className='flex items-center gap-2 text-[#4c586f] sm:gap-3'>
                        <button type='button' aria-label='Image' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white dark:border-[#354154] dark:bg-[#202838]'>
                            <ImageIcon className='h-5 w-5' />
                        </button>
                        <button type='button' aria-label='Mention' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white dark:border-[#354154] dark:bg-[#202838]'>
                            <AtSign className='h-5 w-5' />
                        </button>
                        <button type='button' aria-label='Hashtag' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white dark:border-[#354154] dark:bg-[#202838]'>
                            <Hash className='h-5 w-5' />
                        </button>
                        <button type='button' aria-label='Emoji' className='hidden h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white dark:border-[#354154] dark:bg-[#202838] sm:flex'>
                            <Smile className='h-5 w-5' />
                        </button>
                    </div>
                    <SubmitButton text='Post' classes='hidden h-10 shrink-0 rounded-full bg-[#5b4fe8] px-5 text-sm font-semibold text-white hover:bg-[#4f43d8] sm:inline-flex' />
                </div>
            </form>
        </>
    )
}
