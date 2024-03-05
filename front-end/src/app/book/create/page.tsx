'use client'

import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import BookForm from '@/components/book-form/BookForm'
import { Heading } from '@/components/ui/headings/Heading'

export default function Constructor() {
	const { back } = useRouter()
	return (
		<>
			<Heading title='Constructor' />
			<div
				className={`flex gap-10 border border-primary-purple justify-center relative`}
			>
				<div className={`flex w-[500px] justify-between box-border py-4`}>
					<BookForm typeForm='create' />
				</div>
				<button
					type='button'
					onClick={back}
					className={`flex absolute top-2 left-2 items-center text-[14px] w-[65px] justify-between font-bold text-primary-purple hover:text-primary-purple/70 transition`}
				>
					<Undo2 className={`block w-[20px] h-[20px]`} />
					<div className={`self-end h-fit`}>Back</div>
				</button>
			</div>
		</>
	)
}
