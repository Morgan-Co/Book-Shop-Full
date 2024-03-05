import { SITE_PAGES } from '@/config/pages-url.config'


interface INavLink {
	title: string
	href: string
}


export const navLinks: INavLink[] = [
	{
		title: 'books',
		href: SITE_PAGES.BOOKS
	},
	{
		title: 'audiobooks',
		href: SITE_PAGES.AUDIOBOOKS
	},
	{
		title: 'Stationery & gifts',
		href: SITE_PAGES.STATIONARY_GIFTS
	},
	{
		title: 'blog',
		href: SITE_PAGES.BLOG
	}
]
