import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { IAuthor, IBook, ICategory } from '@/types/book.types'

import { SITE_PAGES } from '@/config/pages-url.config'

import { useAuthor } from '@/hooks/useAuthor'
import { useBookCategory } from '@/hooks/useBookCategory'
import { useCategory } from '@/hooks/useCategory'
import { useDeleteBook } from '@/hooks/useDeleteBook'

import { Button } from '../ui/buttons/Button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../ui/dialog/Dialog'

const DeleteDialog = ({ book }: { book: IBook }) => {
	const { mutate: deleteBook } = useDeleteBook()
	const { push } = useRouter()
	const { category } = useBookCategory(book.id!) as { category: ICategory[] }
	const { authors } = useAuthor('byId', book.id) as { authors: IAuthor[] }
	console.log(category)

	return (
		<Dialog>
			<DialogTrigger>
				<Trash2 className={`text-red hover:text-red/60`} />
			</DialogTrigger>
			<DialogContent className={`h-[200px]`}>
				<DialogHeader>
					<DialogTitle className={`mb-[5px]`}>You are sure?</DialogTitle>
					<DialogDescription className={`text-red`}>
						You definitely want to delete this book. The data will be lost
					</DialogDescription>
				</DialogHeader>
				<div className={`flex justify-between items-end`}>
					<DialogClose asChild>
						<Button>Cancel</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button
							variant={'delete'}
							onClick={() => {
								deleteBook({
									bookId: book.id!,
									ids: { authorId: authors[0].id, categoryId: category[0].id! }
								})
								push(SITE_PAGES.BOOKS)
							}}
						>
							Delete
						</Button>
					</DialogClose>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default DeleteDialog
