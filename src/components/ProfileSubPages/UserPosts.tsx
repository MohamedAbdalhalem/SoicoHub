import { postType } from "@/app/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { Suspense } from "react";
import PostsLoadingScreen from "../PostsLoadingScreen/PostsLoadingScreen";
import Post from "../Post/Post";


export default async function UserPosts() {
  const cookieStore = await cookies()
  const token = cookieStore.get('tkn')?.value
  const { user } = jwtDecode<{ user: string }>(token || '');

  const res = await fetch(`https://route-posts.routemisr.com/users/${user}/posts`, {
    headers: {
      token: token || ''
    }
  })
  const data = (await res.json()) as ({ data: { posts: postType[] } })

  return (
    <Suspense fallback={<PostsLoadingScreen />}>
      <div className='space-y-4'>
        {data.data.posts.length === 0 && <p className="py-12 text-center text-sm font-medium text-muted-foreground">
          There are no posts to show.
        </p>}
        {data.data.posts.length !== 0 && data.data.posts.map(post => <Post post={post} />)}
      </div>
    </Suspense>
  )
}
