import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const token = request.cookies.get('tkn')?.value
  const pathname = request.nextUrl.pathname

  const isAuth =
    pathname.startsWith('/sign-in') ||
    pathname.startsWith('/sign-up')

  const isUnAuth =
    pathname === '/' ||
     pathname.startsWith('/profile') ||
    pathname.startsWith('/bookmarks') ||
    pathname.startsWith('/create-post') ||
    pathname.startsWith('/notifications') 

  if (isAuth && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (isUnAuth && !token) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return NextResponse.next()
}
