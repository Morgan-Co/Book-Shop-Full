import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Header from '@/components/header/Header'

import { SITE_NAME } from '@/constants/seo.constants'

import './globals.scss'
import { Providers } from './providers'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--main-font',
	style: ['normal']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Kaban'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${montserrat.className} container`}>
				<Providers>
				<Header />
				<main>{children}</main>
				</Providers>
			</body>
		</html>
	)
}
