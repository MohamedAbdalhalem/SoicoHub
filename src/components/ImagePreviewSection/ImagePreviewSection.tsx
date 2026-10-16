'use client'

import { ImageIcon, X } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent, useState, useRef } from 'react'

export default function ImagePreviewSection() {
    const [image, setImage] = useState<string | undefined>(undefined)
    const imageInputRef = useRef<HTMLInputElement>(null)
    const selectPhoto = function (e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]

        if (!file) return
        const imageUrl = URL.createObjectURL(file)
        setImage(imageUrl)
    }


    const removePhoto = function () {
        setImage(undefined)
        if (imageInputRef.current) imageInputRef.current.value = '';
    }

    return (
        <div className="mt-4 rounded-[20px] border-2 border-dashed border-[#d8dde6] bg-[#f6f7fb] p-3 dark:border-[#3a465a] dark:bg-[#1b2330] sm:p-5">

            {/* Section heading */}
            <div className="mb-3 flex items-center gap-2 text-[#5a6475] dark:text-[#b7c1d1]">
                <ImageIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                />

                <p className="text-sm font-medium">
                    Add an image to your post
                </p>
            </div>

            {/* File input */}
            <input
                ref={imageInputRef}
                id="post-image"
                type="file"
                name="image"
                accept="image/*"
                onChange={selectPhoto}
                className="flex h-auto w-full cursor-pointer rounded-xl border border-dashed border-[#d9dfe7] bg-white px-3.5 py-2 text-base text-[#111827] shadow-sm outline-none transition focus:border-[#7a7ae8] focus:ring-2 focus:ring-[#7a7ae8]/20 file:mr-3 file:rounded-full file:border-0 file:bg-[#5b4fe8] file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white dark:border-[#354154] dark:bg-[#202838] dark:text-[#f1f4fb]"
            />

            <p className="mt-2 text-xs text-[#7a8593] dark:text-[#aeb8ca]">
                Image files only
            </p>

            {/* Image preview */}
            <div className="relative mt-4 flex min-h-48 items-center justify-center overflow-hidden rounded-[18px] border border-[#e5e8ee] bg-white text-[#7a8593] dark:border-[#354154] dark:bg-[#202838] dark:text-[#aeb8ca] sm:min-h-64">

                {image ? (
                    <>
                        <Image
                            src={image}
                            alt="Selected post preview"
                            className="max-h-100 w-full object-contain"
                            fill
                        />

                        {/* Remove image button */}
                        <button
                            type="button"
                            onClick={removePhoto}
                            aria-label="Remove selected image"
                            className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <ImageIcon
                            className="h-8 w-8"
                            aria-hidden="true"
                        />

                        <span className="text-sm font-medium">
                            Image preview
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}