import { useMutation, useQueryClient } from '@tanstack/react-query'

import { bookService } from '@/services/book.service'

export function useDeleteBook() {
	const queryClient = useQueryClient()
	return useMutation({
		mutationKey: ['deleteBook'],
		mutationFn: ({
			bookId,
			ids
		}: {
			bookId: string
			ids: { authorId: string; categoryId: string }
		}) => bookService.deleteBook(bookId, ids),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['books']
			})
		}
	})
}
