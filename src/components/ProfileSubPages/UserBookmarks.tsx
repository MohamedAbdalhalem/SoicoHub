import { cookies } from "next/headers";
import { Suspense } from "react";
import PostsLoadingScreen from "../PostsLoadingScreen/PostsLoadingScreen";
import Post from "../Post/Post";
import { postType } from "@/app/types";
export default async function UserBookmarks() {
  const cookieStore = await cookies()
  const token = cookieStore.get('tkn')?.value

  const res = await fetch(`https://route-posts.routemisr.com/users/bookmarks`, {
    headers: {
      token: token || ''
    }
  })
  const data = (await res.json()) as ({ data: { bookmarks: postType[] } })
  return (
    <Suspense fallback={<PostsLoadingScreen />}>
      <div className='space-y-4'>
        {data.data.bookmarks.length === 0 && <p className="py-12 text-center text-sm font-medium text-muted-foreground">
          There are no bookmarks to show.
        </p>}
        {data.data.bookmarks.length !== 0 && data.data.bookmarks.map(post => <Post post={post} />)}
      </div>
    </Suspense>
  )
}
