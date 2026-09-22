
import { Button } from '@/components/ui/button'
import {
  Bell,
  Bookmark,
  Home as HomeIcon,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  User,
  House,
  SquarePen,
  Heart,
  Repeat2,
  Archive,
  CircleUser,
} from 'lucide-react'

const navItems = [
  { label: 'Home', icon: HomeIcon, active: true },
  { label: 'Explore', icon: Search },
  { label: 'Notifications', icon: Bell, badge: 4 },
  { label: 'Bookmarks', icon: Bookmark },
  { label: 'Profile', icon: User },
]

const suggestions = [
  { name: 'Rohan Mehta', handle: '@rohan_m', accent: 'from-[#f4c7b8] to-[#d9b2ff]' },
  { name: 'Zara Okonwo', handle: '@zara_ck', accent: 'from-[#bfe4ff] to-[#cbc4ff]' },
  { name: 'Lukas Werner', handle: '@lukas_w', accent: 'from-[#f9d7a7] to-[#f0b4d5]' },
]

const trends = [
  { tag: '#DesignSystem', posts: '2.4K posts' },
  { tag: '#ReactJS', posts: '1.8K posts' },
  { tag: '#OpenSource', posts: '3.1K posts' },
  { tag: '#UIDesign', posts: '990 posts' },
]

const posts = [
  {
    author: 'Aria Chen',
    handle: '@aria_chen',
    time: '2h',
    text: 'Just shipped a massive update to our design system ✨ The new component library is looking incredible. Huge shoutout to @maya_design and @carlos_dev for the late nights!',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    likes: 128,
    comments: 34,
    reposts: 12,
    saves: 47,
    avatar: 'AC',
    accent: 'from-[#f0d5ba] to-[#b7d7ff]',
  },
  {
    author: 'Carlos Rivera',
    handle: '@carlos_dev',
    time: '4h',
    text: 'Hot take: the best code review is the one that ships. Stop bikeshedding on naming conventions and get it out the door.',
    likes: 214,
    comments: 67,
    reposts: 31,
    saves: 88,
    avatar: 'CR',
    accent: 'from-[#d9c2ff] to-[#a5d8ff]',
  },
  {
    author: 'Maya Patel',
    handle: '@maya_design',
    time: '6h',
    text: 'Morning ritual: coffee ☕ + Figma + good music. Drop your best onboarding examples below',
    image:
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
    likes: 89,
    comments: 23,
    reposts: 7,
    saves: 33,
    avatar: 'MP',
    accent: 'from-[#d3d6ff] to-[#ffc9c9]',
  },
]

export default function Home() {
  return (
    <main className='min-h-screen bg-[#f3f5f8]'>
      <div className='flex h-screen w-full overflow-hidden bg-[#f3f5f8]'>
        <aside className='hidden w-62.5 shrink-0 border-r border-[#e6e9ee] bg-[#f6f7fb] p-5 lg:flex lg:flex-col'>
          <div className='mb-8 flex items-center gap-3 pl-1'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#5a4ae9] text-white shadow-[0_8px_18px_rgba(90,74,233,0.35)]'>
              <Sparkles className='h-4 w-4' />
            </div>
            <span className='text-[17px] font-semibold tracking-tight text-[#2a2f3a]'>Route Posts</span>
          </div>

          <nav className='space-y-2'>
            {navItems.map(({ label, icon: Icon, active, badge }) => (
              <button
                key={label}
                type='button'
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] font-medium transition ${active
                    ? 'bg-[#5b4fe8] text-white shadow-[0_8px_18px_rgba(91,79,232,0.22)]'
                    : 'text-[#2f3742] hover:bg-[#eceef9]'
                  }`}
              >
                <Icon className='h-4 w-4' />
                <span className='flex-1'>{label}</span>
                {badge ? (
                  <span className='flex h-5 min-w-5 items-center justify-center rounded-full bg-[#5b4fe8] px-1 text-[11px] font-semibold text-white'>
                    {badge}
                  </span>
                ) : null}
              </button>
            ))}
          </nav>

          <div className='mt-6'>
            <Button className='h-11 w-full rounded-xl bg-[#5b4fe8] text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(91,79,232,0.25)] hover:bg-[#4f43d8]'>
              <Plus className='mr-2 h-4 w-4' />
              Create Post
            </Button>
          </div>

          <div className='mt-auto flex items-center gap-3 rounded-xl border border-[#e6e9ee] bg-white/60 p-2.5'>
            <div className='flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#d9d2ff] to-[#f5d6cf] text-[11px] font-bold text-[#2e2a49]'>
              AC
            </div>
            <div className='min-w-0 flex-1'>
              <p className='truncate text-[14px] font-semibold text-[#1e2330]'>Aria Chen</p>
              <p className='truncate text-[12px] text-[#6a7280]'>@aria_chen</p>
            </div>
          </div>
        </aside>

        <section className='flex-1 min-w-0 overflow-y-auto bg-[#f3f5f8]'>
          <div className='border-b border-[#e5e8ee] bg-[#f6f7fb] px-3 py-3 sm:px-5 lg:px-6'>
            <div className='flex items-center justify-between gap-3'>
              <div className='flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b4fe8] text-white shadow-[0_8px_18px_rgba(91,79,232,0.22)] lg:hidden'>
                  <Sparkles className='h-4 w-4' />
                </div>
                <div className='text-[17px] font-semibold tracking-tight text-[#2d323d]'>Route Posts</div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='hidden h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-[#e5e7eb] sm:flex'>
                  <Search className='h-4 w-4 text-[#5b6472]' />
                </div>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-[#e5e7eb]'>
                  <Bell className='h-4 w-4 text-[#5b6472]' />
                </div>
              </div>
            </div>
          </div>

          <div className='mx-auto max-w-180 px-3 py-4 sm:px-4 lg:px-0'>
            <div className='mb-4 flex items-center justify-between border-b border-[#e5e8ee] pb-3'>
              <button type='button' className='flex-1 text-center text-[15px] font-semibold text-[#5b4fe8] underline decoration-[#5b4fe8] decoration-2 underline-offset-12'>
                For You
              </button>
              <button type='button' className='flex-1 text-center text-[15px] font-medium text-[#6f7786]'>
                Following
              </button>
            </div>

            <div className='space-y-4'>
              {posts.map((post) => (
                <article key={post.author} className='rounded-[20px] border border-[#e5e8ee] bg-[#f7f8fb] p-4 shadow-[0_1px_0_rgba(17,24,39,0.02)]'>
                  <div className='mb-3 flex items-start justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br ${post.accent} text-[11px] font-bold text-[#1f2937]`}>
                        {post.avatar}
                      </div>
                      <div className='leading-tight'>
                        <div className='flex flex-wrap items-center gap-2 text-[15px] font-semibold text-[#1d2430]'>
                          <span>{post.author}</span>
                          <span className='text-[#7b8393]'>{post.handle}</span>
                          <span className='text-[#7b8393]'>•</span>
                          <span className='text-[#7b8393]'>{post.time}</span>
                        </div>
                      </div>
                    </div>

                    <button type='button' className='flex h-8 w-8 items-center justify-center rounded-full text-[#7a8190] hover:bg-white'>
                      <MoreHorizontal className='h-4 w-4' />
                    </button>
                  </div>

                  <p className='whitespace-pre-line text-[15px] leading-relaxed text-[#2d3746]'>
                    {post.text}
                  </p>

                  {post.image ? (
                    <div className='mt-4 overflow-hidden rounded-[18px] border border-[#e5e8ee] bg-white'>
                      <img src={post.image} alt={`${post.author} post`} className='h-65 w-full object-cover sm:h-70 md:h-80' />
                    </div>
                  ) : null}

                  <div className='mt-4 flex items-center justify-between gap-3 pr-1 text-[#6a7280]'>
                    <div className='flex items-center gap-5'>
                      <button type='button' className='flex items-center gap-2 text-[14px]'>
                        <Heart className='h-4 w-4' />
                        <span>{post.likes}</span>
                      </button>
                      <button type='button' className='flex items-center gap-2 text-[14px]'>
                        <MessageCircle className='h-4 w-4' />
                        <span>{post.comments}</span>
                      </button>
                      <button type='button' className='flex items-center gap-2 text-[14px]'>
                        <Repeat2 className='h-4 w-4' />
                        <span>{post.reposts}</span>
                      </button>
                    </div>

                    <button type='button' className='flex items-center gap-2 text-[14px]'>
                      <Archive className='h-4 w-4' />
                      <span>{post.saves}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside className='hidden w-72.5 shrink-0 border-l border-[#e5e8ee] bg-[#f6f7fb] p-4 xl:block'>
          <div className='rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4'>
            <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b]'>Who to follow</h3>
            <div className='space-y-3'>
              {suggestions.map(({ name, handle, accent }) => (
                <div key={name} className='flex items-center justify-between gap-3'>
                  <div className='flex items-center gap-3'>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br ${accent} text-[10px] font-bold text-[#1f2937]`}>
                      {name
                        .split(' ')
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div className='min-w-0'>
                      <p className='truncate text-[14px] font-semibold text-[#222937]'>{name}</p>
                      <p className='truncate text-[12px] text-[#7a8090]'>{handle}</p>
                    </div>
                  </div>

                  <Button size='sm' className='h-8 rounded-full bg-[#5b4fe8] px-3 text-[12px] font-medium text-white hover:bg-[#4f43d8]'>
                    Follow
                  </Button>
                </div>
              ))}
            </div>

            <button type='button' className='mt-4 text-[13px] font-medium text-[#5b4fe8]'>
              Show more
            </button>
          </div>

          <div className='mt-5 rounded-[20px] border border-[#e5e8ee] bg-[#f8f9fb] p-4'>
            <h3 className='mb-4 text-[16px] font-semibold text-[#2b2f3b]'>Trending topics</h3>
            <div className='space-y-3'>
              {trends.map(({ tag, posts }) => (
                <div key={tag} className='flex items-center justify-between gap-3'>
                  <div className='text-[14px] font-medium text-[#2b2f3b]'>{tag}</div>
                  <div className='text-[12px] text-[#798090]'>{posts}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className='fixed inset-x-0 bottom-0 z-20 border-t border-[#dfe4eb] bg-[#f6f7fb] px-4 py-2 shadow-[0_-8px_18px_rgba(15,23,42,0.06)] lg:hidden'>
        <div className='mx-auto flex max-w-105 items-center justify-between'>
          <button type='button' className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#5b4fe8] text-white'>
            <House className='h-5 w-5' />
          </button>
          <button type='button' className='flex h-11 w-11 items-center justify-center rounded-xl text-[#6d7788]'>
            <Search className='h-5 w-5' />
          </button>
          <button type='button' className='flex h-11 w-11 items-center justify-center rounded-xl text-[#6d7788]'>
            <SquarePen className='h-5 w-5' />
          </button>
          <button type='button' className='relative flex h-11 w-11 items-center justify-center rounded-xl text-[#6d7788]'>
            <Bell className='h-5 w-5' />
            <span className='absolute right-2 top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#5b4fe8] px-1 text-[9px] font-semibold text-white'>
              4
            </span>
          </button>
          <button type='button' className='flex h-11 w-11 items-center justify-center rounded-xl text-[#6d7788]'>
            <CircleUser className='h-5 w-5' />
          </button>
        </div>
      </div>
    </main>
  )
}
