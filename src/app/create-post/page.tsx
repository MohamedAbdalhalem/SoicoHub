'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AppShell } from '@/components/app-shell'
import { Button } from '@/components/ui/button'
import {
  AtSign,
  ArrowLeft,
  Camera,
  Hash,
  Image as ImageIcon,
  Smile,
  X,
} from 'lucide-react'

const suggestions = [
  { name: 'Maya Patel', handle: '@maya_design', accent: 'from-[#f5d2d2] to-[#d9d4ff]' },
  { name: 'Carlos Rivera', handle: '@carlos_dev', accent: 'from-[#cfe7ff] to-[#d5d0ff]' },
  { name: 'Rohan Mehta', handle: '@rohan_m', accent: 'from-[#f9d6a5] to-[#d7c7ff]' },
]

const previewImage =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80'

export default function CreatePostPage() {
  const [text, setText] = useState('')
  const [selectedImage, setSelectedImage] = useState(previewImage)

  const charCount = text.length

  return (
    <AppShell activeItem='Home'>
      <div className='h-full overflow-y-auto bg-[#f3f5f8] dark:bg-[#10151f]'>
        <div className='mx-auto hidden max-w-245 px-4 py-6 lg:block'>
          <div className='rounded-[28px] border border-[#e8ebf0] bg-[#f8f9fb] p-5 shadow-[0_10px_32px_rgba(17,24,39,0.04)] dark:border-[#303a4c] dark:bg-[#1b2330]'>
            <h1 className='mb-5 pl-1 text-[40px] font-semibold tracking-[-0.06em] text-[#1f2530] dark:text-[#f1f4fb]'>Create Post</h1>

            <div className='mx-auto max-w-180 rounded-[22px] border border-[#e5e8ee] bg-[#f2f4f7] p-4 dark:border-[#303a4c] dark:bg-[#202838]'>
              <div className='flex items-center gap-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#f0d9d0] to-[#d9d4ff] text-[13px] font-bold text-[#1e2431]'>
                  AC
                </div>
                <div>
                  <p className='text-[16px] font-semibold text-[#1d2430] dark:text-[#e9eef8]'>Aria Chen</p>
                  <p className='text-[13px] text-[#697386] dark:text-[#aeb8ca]'>@aria_chen</p>
                </div>
              </div>

              <textarea
                aria-label='Create post'
                value={text}
                onChange={(event) => setText(event.target.value.slice(0, 280))}
                placeholder="What's on your route today? Use @ to mention someone..."
                className='mt-4 h-30 w-full resize-none border-0 bg-transparent text-[18px] text-[#2f3745] placeholder:text-[#8892a1] focus:outline-none dark:text-[#e3e9f3] dark:placeholder:text-[#8995aa]'
              />

              <div className='mt-4 rounded-[18px] border border-[#e2e5eb] bg-white/60 p-3 dark:border-[#354154] dark:bg-[#171d29]/70'>
                <div className='mb-2 text-[11px] font-medium tracking-[0.18em] text-[#7d8594] uppercase'>Suggestions</div>

                <div className='space-y-3'>
                  {suggestions.map(({ name, handle, accent }) => (
                    <div key={name} className='flex items-center justify-between gap-3 rounded-xl px-2 py-1.5'>
                      <div className='flex items-center gap-3'>
                        <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br ${accent} text-[10px] font-bold text-[#1f2937]`}>
                          {name
                            .split(' ')
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join('')}
                        </div>
                        <div>
                          <p className='text-[15px] font-semibold text-[#1d2430] dark:text-[#e9eef8]'>{name}</p>
                          <p className='text-[12px] text-[#7a8392] dark:text-[#9da9bc]'>{handle}</p>
                        </div>
                      </div>

                      <button type='button' className='rounded-full bg-[#5b4fe8] px-2.5 py-1 text-[10px] font-medium text-white'>
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {selectedImage ? (
                <div className='relative mt-4 overflow-hidden rounded-[20px] border border-[#e5e8ee] dark:border-[#354154]'>
                  <img src={selectedImage} alt='Selected post media' className='h-55 w-full object-cover' />
                  <button
                    type='button'
                    onClick={() => setSelectedImage('')}
                    className='absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#171b22] text-white shadow-lg'
                  >
                    <X className='h-4 w-4' />
                  </button>
                </div>
              ) : null}

              <div className='mt-5 flex items-center justify-between gap-4'>
                <div className='flex items-center gap-4 text-[#667084]'>
                  <button type='button' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white text-[#5a6475] dark:border-[#354154] dark:bg-[#202838] dark:text-[#b7c1d1]'>
                    <ImageIcon className='h-4 w-4' />
                  </button>
                  <button type='button' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white text-[#5a6475] dark:border-[#354154] dark:bg-[#202838] dark:text-[#b7c1d1]'>
                    <AtSign className='h-4 w-4' />
                  </button>
                  <button type='button' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white text-[#5a6475] dark:border-[#354154] dark:bg-[#202838] dark:text-[#b7c1d1]'>
                    <Hash className='h-4 w-4' />
                  </button>
                  <button type='button' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white text-[#5a6475] dark:border-[#354154] dark:bg-[#202838] dark:text-[#b7c1d1]'>
                    <Smile className='h-4 w-4' />
                  </button>
                </div>

                <div className='flex items-center gap-3'>
                  <span className='text-[15px] font-medium text-[#7a8593] dark:text-[#aeb8ca]'>{charCount} / 280</span>
                  <Button className='h-11 rounded-full bg-[#5b4fe8] px-6 text-[15px] font-semibold text-white hover:bg-[#4f43d8]'>
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-auto block max-w-140 px-4 pb-24 pt-3 lg:hidden'>
          <div className='mb-4 flex items-center justify-between'>
            <Link href='/' aria-label='Go back' className='flex h-10 w-10 items-center justify-center rounded-full text-[#1f2430] dark:text-[#e9eef8]'>
              <ArrowLeft className='h-6 w-6' />
            </Link>
            <h1 className='text-[28px] font-semibold tracking-[-0.04em] text-[#1f2430] dark:text-[#f1f4fb]'>New Post</h1>
            <Button className='h-11 rounded-full bg-[#5b4fe8] px-5 text-[15px] font-semibold text-white hover:bg-[#4f43d8]'>
              Post
            </Button>
          </div>

          <div className='flex items-start gap-3'>
            <div className='mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#f0d9d0] to-[#d9d4ff] text-[13px] font-bold text-[#1e2431]'>
              AC
            </div>
            <div className='flex-1'>
              <div className='text-[18px] font-semibold text-[#1d2430] dark:text-[#e9eef8]'>Aria Chen</div>
              <textarea
                aria-label='Create post'
                value={text}
                onChange={(event) => setText(event.target.value.slice(0, 280))}
                placeholder="What's on your route today?"
                className='mt-3 h-30 w-full resize-none border-0 bg-transparent text-[26px] font-light leading-tight text-[#2f3745] placeholder:text-[#8d93a0] focus:outline-none dark:text-[#e3e9f3] dark:placeholder:text-[#8995aa]'
              />
            </div>
          </div>

          <div className='mt-5 flex items-center justify-end text-[18px] font-medium text-[#7a8593]'>
            {charCount} / 280
          </div>

          <div className='mt-4 rounded-[20px] border-2 border-dashed border-[#d8dde6] bg-[#f6f7fb] p-6 dark:border-[#3a465a] dark:bg-[#1b2330]'>
            {selectedImage ? (
              <div className='relative overflow-hidden rounded-[18px]'>
                <img src={selectedImage} alt='Post preview' className='h-55 w-full rounded-[18px] object-cover' />
                <button
                  type='button'
                  onClick={() => setSelectedImage('')}
                  className='absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#171b22] text-white shadow-lg'
                >
                  <X className='h-4 w-4' />
                </button>
              </div>
            ) : (
              <div className='flex min-h-50 flex-col items-center justify-center text-center text-[#7a8392] dark:text-[#aeb8ca]'>
                <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#dfe3eb] bg-white text-[#6a7688] dark:border-[#354154] dark:bg-[#202838] dark:text-[#b7c1d1]'>
                  <Camera className='h-7 w-7' />
                </div>
                <div className='text-[22px] font-medium text-[#2f3745] dark:text-[#dce3f0]'>Tap to add a photo or video</div>
              </div>
            )}
          </div>

          <div className='mt-6 flex items-center justify-between border-t border-[#dfe4eb] pt-4 dark:border-[#303a4c]'>
            <div className='flex items-center gap-5 text-[#4c586f]'>
              <button type='button' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white dark:border-[#354154] dark:bg-[#202838]'>
                <ImageIcon className='h-5 w-5' />
              </button>
              <button type='button' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white dark:border-[#354154] dark:bg-[#202838]'>
                <AtSign className='h-5 w-5' />
              </button>
              <button type='button' className='flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe3eb] bg-white dark:border-[#354154] dark:bg-[#202838]'>
                <Hash className='h-5 w-5' />
              </button>
            </div>
            <div className='text-[18px] font-medium text-[#7a8593]'>{charCount} / 280</div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
