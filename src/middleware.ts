/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const AuthPages = ['/auth/login', '/auth/register'];
const PublicPages = ['/', ...AuthPages];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  const { pathname } = req.nextUrl;

  const isAuthPage = AuthPages.includes(pathname);
  const isPublicPage = PublicPages.includes(pathname);

  // ✅ 1. Redirect logged-in user away from login/register pages
  if (token && isAuthPage) {
    const redirectUrl = new URL('/dashboard', req.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  // ✅ 2. Allow access to public pages
  if (isPublicPage) {
    return NextResponse.next();
  }

  // ✅ 3. Redirect unauthenticated users trying to access protected pages
  if (!token && !isPublicPage) {
    const redirectUrl = new URL('/auth/login', req.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  // ✅ 4. Allow access to protected routes if token exists
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/auth/:path*'],
};

































// import React from "react";
// import withAuth from "next-auth/middleware";
// import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// const AuthPages = ["/auth/login", "/auth/register"];
// const PublicPages = ["/", ...AuthPages];

// const authMiddleware = withAuth({
//   callbacks: {
//     authorized: ({ token }) => token != null,
//   },
//   pages: {
//     signIn: "/auth/login",
//     error: "/auth/login",
//   },
// });

// export default async function middleware(req: NextRequest) {
//   const token = await getToken({ req });

//   const publicPathnameRegex = RegExp(
//     `^/(${PublicPages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join(
//       "|"
//     )})/?$`,
//     "i"
//   );

//   const authPathnameRegex = RegExp(
//     `^/(${AuthPages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
//     "i"
//   );

//   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
//   const isAuthPage = authPathnameRegex.test(req.nextUrl.pathname);


//   if (isPublicPage) {
//     if(token && isAuthPage){
//         const redirectUrl = new URL('/dashboard',req.nextUrl.origin)

//         return NextResponse.redirect(redirectUrl)
//     }
//     return NextResponse.next()
//   } else {
//     return (authMiddleware as any)(req); // Apply auth middleware
//   }
// }


// export const config = {
//     matcher:['/((?!api|_next|.*\\..*).*)']
// }