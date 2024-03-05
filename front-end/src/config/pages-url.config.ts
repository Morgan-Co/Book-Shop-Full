class SITE {
	private root = '/'

	BOOKS = `${this.root}catalog/books/humor`
	AUDIOBOOKS = `${this.root}audiobooks`
	STATIONARY_GIFTS = `${this.root}stationary_&_gifts`
	BLOG = `${this.root}blog`
}

export const SITE_PAGES = new SITE()
