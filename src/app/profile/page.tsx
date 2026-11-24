import { AppShell } from '@/components/ui/app-shell'
import { Bookmark, CalendarDays, Camera, PencilLine, UsersRound, UserRound } from 'lucide-react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { userType } from '../types'
import Image from 'next/image'
import ProfileTabs from '@/components/ProfileSubPages/ProfileTabs'
import UserBookmarks from '@/components/ProfileSubPages/UserBookmarks'
import UserPosts from '@/components/ProfileSubPages/UserPosts'
import { Suspense } from 'react'
import ProfileLoadingScreen from '@/components/LoadingScreens/ProfileLoadingScreen'
import ProfileImagePreview from '@/components/ProfileSubPages/ProfileImagePreview'
import ProfileImageUploader from '@/components/ProfileSubPages/ProfileImageUploader'
import ProfileHeader from '@/components/ProfileSubPages/ProfileHeader'

async function Profile({ tab,preview }: { tab: string,preview: string }) {


    const cookieStore = await cookies()
    const token = cookieStore.get('tkn')?.value

    const res = await fetch('https://route-posts.routemisr.com/users/profile-data', {
        headers: {
            token: token || ''
        }
    })
    const { data: { user } } = (await res.json()) as { data: { user: userType } }
    const joinedDate = new Date(user.createdAt)
    const joinedLabel = Number.isNaN(joinedDate.getTime())
        ? user.createdAt
        : joinedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    const pronouns = user.gender === 'male' ? 'He/him' : user.gender === 'female' ? 'She/her' : null

    return (
        <div className='h-full overflow-y-auto bg-[#f3f5f8] pb-20 dark:bg-[#10151f] lg:pb-0'>
            <div className='mx-auto max-w-190 px-4 py-4 sm:px-5 lg:px-0 lg:py-6'>
                <div className='mb-4 flex justify-end xl:hidden'>
                    <Link
                        href='/suggestions'
                        className='inline-flex items-center gap-2 rounded-full border border-[#e1e5eb] bg-white px-4 py-2 text-[13px] font-semibold text-[#5b4fe8] shadow-sm transition hover:bg-[#f5f6fb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fe8] dark:border-[#354154] dark:bg-[#202838] dark:text-[#c8c2ff] dark:hover:bg-[#293448]'
                    >
                        <UsersRound className='h-4 w-4' />
                        Find people
                    </Link>
                </div>
                <div className='overflow-hidden rounded-[24px] border border-[#e3e7ef] bg-white shadow-[0_16px_45px_rgba(31,41,55,0.06)] dark:border-[#303a4c] dark:bg-[#1b2330]'>
                    <div className='relative border-b border-[#e6e9ee] bg-[#f4f6fb] dark:border-[#303a4c]'>
                        <div className='relative h-52 w-full overflow-hidden bg-[linear-gradient(115deg,#8b5cf6_0%,#5865e9_52%,#38a3e5_100%)] sm:h-60'>
                            {user.cover && (
                                <Image
                                    src={user.cover}
                                    alt=''
                                    className='object-cover'
                                    fill
                                    priority
                                />
                            )}
                            <div className='absolute inset-0 bg-linear-to-t from-[#171d27]/50 via-transparent to-white/10' />
                            <div className='absolute -left-12 -top-24 h-64 w-64 rounded-full border border-white/20' />
                            <div className='absolute -right-10 top-8 h-44 w-44 rounded-full border border-white/20' />
                        </div>

                       <ProfileHeader src={user.photo} alt={user.name} />
                    </div>

                    <div className='px-5 pb-6 pt-2 sm:px-7 sm:pb-7'>
                        <div className='mb-2 flex items-center justify-between gap-4'>
                            <div>
                                <h1 className='text-[26px] font-bold leading-tight tracking-tight text-[#171d27] sm:text-[30px] dark:text-[#f1f4fb]'>{user.name}</h1>
                                <div className='mt-1 text-[15px] text-[#778092] dark:text-[#aeb8ca]'>{`@${user.username}`}</div>
                            </div>

                            <div className='mb-2 sm:hidden'>
                                <Link href='/profile/edit-profile' className='flex items-center gap-2 rounded-full bg-[#5b4fe8] px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#4f43d8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b4fe8]'>
                                    <PencilLine className='h-3.5 w-3.5' />
                                    Edit Profile
                                </Link>
                            </div>
                        </div>

                        <div className='mt-3 flex flex-wrap items-center gap-2.5'>
                            {pronouns && (
                                <span className='rounded-full bg-[#f0efff] px-3 py-1 text-[13px] font-medium text-[#5b4fe8] dark:bg-[#302b59] dark:text-[#c8c2ff]'>
                                    {pronouns}
                                </span>
                            )}
                            <span className='inline-flex items-center gap-1.5 rounded-full bg-[#f4f6f9] px-3 py-1 text-[13px] text-[#687386] dark:bg-[#252f40] dark:text-[#bdc7d8]'>
                                <CalendarDays className='h-3.5 w-3.5' />
                                Joined {joinedLabel}
                            </span>
                        </div>

                        <div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3'>
                            <div className='rounded-[16px] border border-[#eceef3] bg-[#fafbfc] p-4 dark:border-[#303a4c] dark:bg-[#202838]'>
                                <div className='mb-2 flex items-center gap-2 text-[#788296] dark:text-[#aeb8ca]'>
                                    <UsersRound className='h-4 w-4 text-[#6558e8]' />
                                    <span className='text-[12px] font-medium'>Followers</span>
                                </div>
                                <p className='text-[21px] font-bold leading-none text-[#171d27] dark:text-[#f1f4fb]'>{user.followersCount}</p>
                            </div>
                            <div className='rounded-[16px] border border-[#eceef3] bg-[#fafbfc] p-4 dark:border-[#303a4c] dark:bg-[#202838]'>
                                <div className='mb-2 flex items-center gap-2 text-[#788296] dark:text-[#aeb8ca]'>
                                    <UserRound className='h-4 w-4 text-[#6558e8]' />
                                    <span className='text-[12px] font-medium'>Following</span>
                                </div>
                                <p className='text-[21px] font-bold leading-none text-[#171d27] dark:text-[#f1f4fb]'>{user.followingCount}</p>
                            </div>
                            <div className='col-span-2 rounded-[16px] border border-[#eceef3] bg-[#fafbfc] p-4 sm:col-span-1 dark:border-[#303a4c] dark:bg-[#202838]'>
                                <div className='mb-2 flex items-center gap-2 text-[#788296] dark:text-[#aeb8ca]'>
                                    <Bookmark className='h-4 w-4 text-[#6558e8]' />
                                    <span className='text-[12px] font-medium'>Bookmarks</span>
                                </div>
                                <p className='text-[21px] font-bold leading-none text-[#171d27] dark:text-[#f1f4fb]'>{user.bookmarksCount}</p>
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-[#e9ebf1] bg-[#fafbfc] px-5 pt-2 dark:border-[#303a4c] dark:bg-[#171d29] sm:px-7'>
                        <ProfileTabs />
                        {tab === "bookmarks" ? <UserBookmarks /> : <UserPosts />}
                    </div>
                </div>
            </div>
            {preview === "image" && <ProfileImagePreview src={user.photo} alt={user.name} />}
            {preview === "upload" &&<ProfileImageUploader  />}
        </div>
    )
}

export default async function ProfilePage({ searchParams }: { searchParams: Promise<{ tab: string,preview : string }> }) {

    const tab = (await searchParams).tab
    const preview = (await searchParams).preview
    

    return (
        <AppShell activeItem='Profile' >
            <Suspense fallback={<ProfileLoadingScreen />}>
                <Profile tab={tab} preview={preview} />
            </Suspense>
        </AppShell>
    )
}
