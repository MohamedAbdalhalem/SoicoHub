import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Globe2,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Share2,
} from 'lucide-react'
import { AppShell } from '@/components/ui/app-shell'
import type { postDetailsType } from '../types'
import PostDetailsLoadingScreen from '@/components/LoadingScreens/PostDetailsLoadingScreen'
import { cookies } from 'next/headers'
import { Suspense } from 'react'
async function PostDetail({ postId }: { postId: string }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('tkn')?.value || ''

  const response = await fetch(`https://route-posts.routemisr.com/posts/${postId}`, {
    headers: {
      token,
    },
  })

  if (!response.ok) {
    return (
      <div role='alert' className='rounded-[20px] border border-[#f1caca] bg-white px-6 py-10 text-center dark:border-[#613737] dark:bg-[#1b2330]'>
        <h2 className='font-semibold text-[#252b38] dark:text-[#eef2ff]'>Post unavailable</h2>
        <p className='mt-2 text-sm text-[#7b8393] dark:text-[#9da9bc]'>
          We couldn&apos;t load this post. It may have been removed or you may not have access.
        </p>
      </div>
    )
  }

  const data = (await response.json()) as { data: { post: postDetailsType } }
  const post = data.data.post
  const createdAt = new Date(post.createdAt).toLocaleString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
  const topCommentCreatedAt = post.topComment
    ? new Date(post.topComment.createdAt).toLocaleString('en', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    : null

  return (


    <main className='mx-auto max-w-180 px-3 py-5 sm:px-6 sm:py-7'>
      <article className='overflow-hidden rounded-[24px] border border-[#e5e8ee] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.035)] dark:border-[#303a4c] dark:bg-[#1b2330]'>
        <div className='flex items-center justify-between gap-3 p-5 sm:p-6'>
          <div className='flex min-w-0 items-center gap-3'>
            <div className='relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#eceef5] dark:bg-[#293447]'>
              <Image src={post.user.photo} alt={post.user.name} fill sizes='48px' className='object-cover' />
            </div>
            <div className='min-w-0'>
              <p className='truncate text-[15px] font-semibold text-[#252b38] dark:text-[#eef2ff]'>
                {post.user.name}
              </p>
              <div className='mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#7b8393] dark:text-[#9da9bc]'>
                <span>@{post.user.username}</span>
                <span aria-hidden='true'>·</span>
                <time dateTime={post.createdAt}>{createdAt}</time>
                <span aria-hidden='true'>·</span>
                <Globe2 className='h-3.5 w-3.5' aria-label={post.privacy} />
              </div>
            </div>
          </div>
          <button
            type='button'
            aria-label='More post options'
            className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#7b8393] hover:bg-[#f1f2f7] dark:text-[#9da9bc] dark:hover:bg-[#293447]'
          >
            <MoreHorizontal className='h-5 w-5' />
          </button>
        </div>

        <p className='whitespace-pre-line wrap-break-word px-5 pb-5 text-[16px] leading-7 text-[#303949] dark:text-[#d4dce9] sm:px-6'>
          {post.body}
        </p>

        {post.image && (
          <div className='relative mx-4 mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-[#f3f5f8] dark:bg-[#151c28] sm:mx-6 sm:mb-6 sm:aspect-video'>
            <Image
              src={post.image}
              alt={`Photo shared by ${post.user.name}`}
              fill
              sizes='(max-width: 768px) 100vw, 720px'
              className='object-cover'
              priority
            />
          </div>
        )}

        <div className='flex flex-wrap items-center justify-between gap-3 px-5 pb-4 text-xs text-[#7b8393] dark:text-[#9da9bc] sm:px-6'>
          <span>{post.likesCount} likes</span>
          <span>{post.commentsCount} comments <span className='px-1'>·</span> {post.sharesCount} shares</span>
        </div>

        <div className='mx-5 flex items-center justify-around border-y border-[#e9ebf0] py-1 text-[#697283] dark:border-[#303a4c] dark:text-[#aeb8ca] sm:mx-6'>
          <button type='button' className='flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium hover:bg-[#f5f5fa] dark:hover:bg-[#252f40]'>
            <Heart className='h-4 w-4' />
            Like
          </button>
          <button type='button' className='flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium hover:bg-[#f5f5fa] dark:hover:bg-[#252f40]'>
            <MessageCircle className='h-4 w-4' />
            Comment
          </button>
          <button type='button' className='flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium hover:bg-[#f5f5fa] dark:hover:bg-[#252f40]'>
            <Share2 className='h-4 w-4' />
            Share
          </button>
        </div>

        <section aria-labelledby='comments-heading' className='p-5 sm:p-6'>
          <div className='mb-5 flex items-center justify-between gap-3'>
            <h2 id='comments-heading' className='text-base font-semibold text-[#252b38] dark:text-[#eef2ff]'>
              Comments <span className='text-[#8991a0]'>({post.commentsCount})</span>
            </h2>
            <span className='text-xs font-medium text-[#7b8393] dark:text-[#9da9bc]'>Most relevant</span>
          </div>

          <div className='mb-6 flex items-start gap-3'>
            <div className='relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#eceef5] dark:bg-[#293447]'>
              <Image
                src='https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png'
                alt='Your profile'
                fill
                sizes='44px'
                className='object-cover'
              />
            </div>
            <div className='flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-2xl border border-[#e5e8ee] bg-[#f8f9fb] px-4 dark:border-[#303a4c] dark:bg-[#202838]'>
              <span className='flex-1 text-sm text-[#9aa1ae] dark:text-[#8995a8]'>Write a comment...</span>
              <button type='button' aria-label='Send comment' className='flex h-8 w-8 items-center justify-center rounded-full text-[#5b4fe8] dark:text-[#b7adff]'>
                <Send className='h-4 w-4' />
              </button>
            </div>
          </div>

          <div className='space-y-5'>
            {post.topComment && (
              <article className='flex items-start gap-3'>
                <div className='relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#eceef5] dark:bg-[#293447]'>
                  <Image
                    src={post.topComment.commentCreator.photo}
                    alt={post.topComment.commentCreator.name}
                    fill
                    sizes='44px'
                    className='object-cover'
                  />
                </div>
                <div className='min-w-0 flex-1'>
                  <div className='inline-block max-w-full rounded-2xl bg-[#f3f5f8] px-4 py-3 dark:bg-[#252f40]'>
                    <p className='truncate text-sm font-semibold text-[#303949] dark:text-[#e9eef8]'>
                      {post.topComment.commentCreator.name}
                    </p>
                    <p className='mt-1 whitespace-pre-line wrap-break-word text-sm leading-6 text-[#3d4655] dark:text-[#d4dce9]'>
                      {post.topComment.content}
                    </p>
                  </div>
                  <div className='mt-2 flex flex-wrap items-center gap-4 px-2 text-xs text-[#858d9b] dark:text-[#9da9bc]'>
                    <time dateTime={post.topComment.createdAt}>{topCommentCreatedAt}</time>
                    <span className='font-medium'>Like</span>
                    <span className='font-medium'>Reply</span>
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>
      </article>
    </main>

  )
}


export default async function PostDetailPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params
  return (
    <AppShell
      activeItem='Home'
    >
      <div className='min-h-dvh bg-[#f3f5f8] pb-24 dark:bg-[#10151f] lg:pb-8'>
        <header className='sticky top-0 z-10 border-b border-[#e5e8ee] bg-[#f6f7fb]/95 px-4 py-3 backdrop-blur dark:border-[#293242] dark:bg-[#171d29]/95 sm:px-6'>
          <div className='mx-auto flex max-w-180 items-center gap-3'>
            <Link
              href='/'
              aria-label='Back to feed'
              className='flex h-9 w-9 items-center justify-center rounded-xl text-[#697283] transition-colors hover:bg-[#eceef7] hover:text-[#5b4fe8] dark:text-[#aeb8ca] dark:hover:bg-[#252f40] dark:hover:text-[#b7adff]'
            >
              <ArrowLeft className='h-5 w-5' />
            </Link>
            <div>
              <h1 className='text-base font-semibold text-[#252b38] dark:text-[#eef2ff]'>Post</h1>
              <p className='text-xs text-[#7b8393] dark:text-[#9da9bc]'>Post details and comments</p>
            </div>
          </div>
        </header>
        <Suspense fallback={<PostDetailsLoadingScreen />}>
          <PostDetail postId={postId} />
        </Suspense>
      </div>
    </AppShell>
  )
}
