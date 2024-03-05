import { NextRequest, NextResponse } from 'next/server'

import { SITE_PAGES } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request
	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const isAuthPage = url.includes('/auth')
	const isProfilePage = url.includes('/profile')
	const isCreatePage = url.includes('/book')
	const isCartPage = url.includes('/cart')
	const isEditPage = url.includes('/book/:id/edit')

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(SITE_PAGES.BOOKS, url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (
		!refreshToken &&
		(isProfilePage || isCartPage || isCreatePage || isEditPage)
	) {
		return NextResponse.redirect(new URL('/auth', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/auth', '/book/create', '/book/:id/edit', '/profile', '/cart']
}
