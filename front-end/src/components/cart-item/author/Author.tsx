import { Open_Sans } from 'next/font/google'

import { IAuthor } from '@/types/book.types'

import { useAuthor } from '@/hooks/useAuthor'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

const Author = ({ id }: { id: string }) => {
	const { authors } = useAuthor('byId', id) as {
		authors: IAuthor[]
	}
	return (
		<h6
			className={`${`text-[10px] leading-[14px] text-dark-gray mb-[4px]`} ${
				openSans.className
			}`}
		>
			{authors?.map(author => (
				<span key={author.id}>
					{author.firstName} {author.lastName}
				</span>
			))}
		</h6>
	)
}

export default Author
