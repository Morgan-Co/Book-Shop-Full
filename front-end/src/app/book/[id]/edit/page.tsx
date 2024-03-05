'use client'

import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import BookForm from '@/components/book-form/BookForm'
import EditForm from '@/components/edit-form/EditForm'
import { Heading } from '@/components/ui/headings/Heading'

export default function EditBook({
	params: { id }
}: {
	params: { id: string }
}) {
	const { back } = useRouter()

	return (
		<>
			<Heading title='Edit Book' />
			<div
				className={`flex gap-10 border border-primary-purple justify-center relative`}
			>
				<div className={`flex w-[500px] justify-between box-border py-4`}>
					<BookForm
						typeForm='update'
						id={id}
					/>
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
