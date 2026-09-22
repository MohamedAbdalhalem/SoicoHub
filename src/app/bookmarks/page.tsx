'use client'

import { useState } from 'react'
import { AppShell } from '@/components/app-shell'
import { Button } from '@/components/ui/button'
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Search,
} from 'lucide-react'

const suggestions = [
  { name: 'Rohan Mehta', handle: '@rohan_m', accent: 'from-[#f4c7b8] to-[#d9b2ff]' },
  { name: 'Zara Okonwo', handle: '@zara_ck', accent: 'from-[#bfe4ff] to-[#cbc4ff]' },
  { name: 'Lukas Werner', handle: '@lukas_w', accent: 'from-[#f9d7a7] to-[#f0b4d5]' },
]

const savedPosts = [
  {
    id: 'design-systems',
    author: 'Maya Patel',
    handle: '@maya_design',
    time: 'Yesterday',
    text: 'A good design system gives teams a shared language, not a cage. Here are five small changes that made ours easier to use every day.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80',
    likes: 324,
    comments: 48,
    reposts: 29,
    avatar: 'MP',
    accent: 'from-[#f5d2d2] to-[#d9d4ff]',
  },
  {
    id: 'deep-work',
    author: 'Carlos Rivera',
    handle: '@carlos_dev',
    time: '3 days ago',
    text: 'The most underrated productivity feature is protecting an uninterrupted hour. Fewer tabs, fewer meetings, better work.',
    likes: 186,
    comments: 31,
    reposts: 17,
    avatar: 'CR',
    accent: 'from-[#d9c2ff] to-[#a5d8ff]',
  },
  {
    id: 'creative-routine',
    author: 'Rohan Mehta',
    handle: '@rohan_m',
    time: '1 week ago',
    text: 'Collecting the tiny rituals that make creative work feel lighter. What is one habit you keep coming back to?',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    likes: 97,
    comments: 22,
    reposts: 8,
    avatar: 'RM',
    accent: 'from-[#f9d6a5] to-[#d7c7ff]',
  },
]

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState(savedPosts)

  const rightAside = (
    <>
      <div className='rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 dark:border-[#303a4c] dark:bg-[#1b2330]'>
        <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b] dark:text-[#eef2ff]'>Who to follow</h3>
        <div className='space-y-3'>
          {suggestions.map(({ name, handle, accent }) => (
            <div key={name} className='flex items-center justify-between gap-3'>
              <div className='flex items-center gap-3'>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br ${accent} text-[10px] font-bold text-[#1f2937]`}>
                  {name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
                </div>
                <div className='min-w-0'>
                  <p className='truncate text-[14px] font-semibold text-[#222937] dark:text-[#e9eef8]'>{name}</p>
                  <p className='truncate text-[12px] text-[#7a8090] dark:text-[#9da9bc]'>{handle}</p>
                </div>
              </div>
              <Button size='sm' className='h-8 rounded-full bg-[#5b4fe8] px-3 text-[12px] font-medium text-white hover:bg-[#4f43d8]'>
                Follow
              </Button>
            </div>
          ))}
        </div>
        <button type='button' className='mt-4 text-[13px] font-medium text-[#5b4fe8]'>Show more</button>
      </div>

      <div className='mt-5 rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4 dark:border-[#303a4c] dark:bg-[#1b2330]'>
        <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b] dark:text-[#eef2ff]'>Saved for later</h3>
        <p className='text-[14px] leading-6 text-[#687386] dark:text-[#aeb8ca]'>Keep the ideas you love close by saving posts from your feed.</p>
      </div>
    </>
  )

  return (
    <AppShell activeItem='Bookmarks' rightAside={rightAside}>
      <div className='h-full overflow-y-auto bg-[#f3f5f8] dark:bg-[#10151f]'>
        <div className='mx-auto max-w-190 px-4 py-5 sm:px-5 lg:px-0 lg:py-6'>
          <div className='mb-5 flex items-start justify-between gap-4'>
            <div>
              <h1 className='text-[30px] font-semibold tracking-[-0.06em] text-[#1e2430] dark:text-[#f1f4fb]'>Bookmarks</h1>
              <p className='mt-1 text-[14px] text-[#737d8d] dark:text-[#aeb8ca]'>Posts you saved for the right moment.</p>
            </div>
            <button type='button' aria-label='Search bookmarks' className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e1e5eb] bg-[#f8f9fb] text-[#667184] hover:bg-white dark:border-[#354154] dark:bg-[#202838] dark:text-[#b7c1d1] dark:hover:bg-[#293447]'>
              <Search className='h-4 w-4' />
            </button>
          </div>

          <div className='mb-5 flex items-center justify-between border-b border-[#e4e8ef] pb-3 dark:border-[#303a4c]'>
            <button type='button' className='flex-1 text-center text-[15px] font-semibold text-[#5a4ae9] underline decoration-[#5a4ae9] decoration-2 underline-offset-12'>All saved</button>
            <button type='button' className='flex-1 text-center text-[15px] font-medium text-[#727c8d]'>Articles</button>
            <button type='button' className='flex-1 text-center text-[15px] font-medium text-[#727c8d]'>Media</button>
          </div>

          {bookmarks.length ? (
            <div className='space-y-4'>
              {bookmarks.map((post) => (
                <article key={post.id} className='rounded-[20px] border border-[#e5e8ee] bg-[#f7f8fb] p-4 shadow-[0_1px_0_rgba(17,24,39,0.02)] dark:border-[#303a4c] dark:bg-[#1b2330]'>
                  <div className='mb-3 flex items-start justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br ${post.accent} text-[11px] font-bold text-[#1f2937]`}>{post.avatar}</div>
                      <div className='leading-tight'>
                        <div className='flex flex-wrap items-center gap-2 text-[15px] font-semibold text-[#1d2430] dark:text-[#e9eef8]'>
                          <span>{post.author}</span><span className='text-[#7b8393] dark:text-[#9da9bc]'>{post.handle}</span><span className='text-[#7b8393] dark:text-[#9da9bc]'>•</span><span className='text-[#7b8393] dark:text-[#9da9bc]'>{post.time}</span>
                        </div>
                      </div>
                    </div>
                    <button type='button' aria-label={`More options for ${post.author}`} className='flex h-8 w-8 items-center justify-center rounded-full text-[#7a8190] hover:bg-white dark:text-[#9da9bc] dark:hover:bg-[#293447]'>
                      <MoreHorizontal className='h-4 w-4' />
                    </button>
                  </div>

                  <p className='text-[15px] leading-relaxed text-[#2d3746] dark:text-[#d4dce9]'>{post.text}</p>
                  {post.image ? <div className='mt-4 overflow-hidden rounded-[18px] border border-[#e5e8ee] bg-white dark:border-[#303a4c] dark:bg-[#202838]'><img src={post.image} alt={`${post.author} post`} className='h-60 w-full object-cover sm:h-72' /></div> : null}

                  <div className='mt-4 flex items-center justify-between gap-3 pr-1 text-[#6a7280]'>
                    <div className='flex items-center gap-5'>
                      <button type='button' className='flex items-center gap-2 text-[14px]'><Heart className='h-4 w-4' /><span>{post.likes}</span></button>
                      <button type='button' className='flex items-center gap-2 text-[14px]'><MessageCircle className='h-4 w-4' /><span>{post.comments}</span></button>
                      <button type='button' className='flex items-center gap-2 text-[14px]'><Repeat2 className='h-4 w-4' /><span>{post.reposts}</span></button>
                    </div>
                    <button type='button' onClick={() => setBookmarks((current) => current.filter((item) => item.id !== post.id))} aria-label={`Remove ${post.author}'s post from bookmarks`} className='flex items-center gap-2 text-[14px] text-[#5b4fe8] hover:text-[#4438c9]'>
                      <Bookmark className='h-4 w-4 fill-current' /><span>Saved</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className='rounded-[20px] border border-dashed border-[#d9dee7] bg-[#f7f8fb] px-6 py-16 text-center dark:border-[#3a465a] dark:bg-[#1b2330]'>
              <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8e7ff] text-[#5b4fe8] dark:bg-[#302c63]'><Bookmark className='h-6 w-6' /></div>
              <h2 className='mt-4 text-[20px] font-semibold text-[#252b37] dark:text-[#f1f4fb]'>Your bookmarks are clear</h2>
              <p className='mx-auto mt-2 max-w-sm text-[14px] leading-6 text-[#737d8d] dark:text-[#aeb8ca]'>Save posts from your feed and they will show up here when you are ready to revisit them.</p>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  )
}