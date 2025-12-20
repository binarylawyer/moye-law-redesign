import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    // BUILD SAFETY: Check for keys
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        // If keys are missing (e.g. during build or before setup), just allow the request
        // This prevents build failures.
        return response;
    }

    // Create Supabase Server Client
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    response = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // ROUTE PROTECTION
    const path = request.nextUrl.pathname;

    // 1. Protect /admin routes (Main Dashboard)
    if (path.startsWith('/admin') && !user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // 2. Protect /cms routes (Payload Admin) is handled by Payload itself usually, 
    // but we can add a layer here if we want strictly Supabase users only. 
    // For now, we let Payload handle its own auth via the 'users' collection 
    // unless we unify them later.

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - api/ (API routes, except needed ones)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
