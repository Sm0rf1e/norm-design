import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    '/favicon.ico',
    '/globals.css',
    '/lg/:path*',
    '/sm/:path*',
    '/block.png',
    '/block-6.jpg',
  ]
}