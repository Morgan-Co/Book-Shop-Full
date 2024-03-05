'use client'

import { PencilLine } from 'lucide-react'
import Link from 'next/link'

import { useBooks } from '@/hooks/useBooks'

import Card from '../сard/Card'

const Products = ({ category }: { category: string }) => {
	const { data: books, isSuccess } = useBooks(category)

	return (
		<div className={`z-[4]`}>
			<div
				className={`flex flex-wrap justify-between gap-y-[96px] gap-x-[35px] max-w-[924px]`}
			>
				{isSuccess &&
					books.map(book => (
						<Card
							key={book.id}
							{...book}
						/>
					))}
			</div>
			<Link
				href={`/book/create`}
				className={`fixed bottom-5 right-8 w-12 h-12 rounded-full bg-primary-purple/65 flex justify-center items-center text-white text-base hover:bg-[#807bb3]`}
			>
				<PencilLine />
			</Link>
		</div>
	)
}

export default Products
