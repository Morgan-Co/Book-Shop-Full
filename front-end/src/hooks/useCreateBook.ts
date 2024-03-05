import { useMutation, useQueryClient } from '@tanstack/react-query'

// import { IBook } from '@/types/book.types'

import { bookService } from '@/services/book.service'
import { IBook } from '@/types/book.types'

export function useCreateBook() {
	const queryClient = useQueryClient()
	return useMutation({
		mutationKey: ['create-book'],
		mutationFn: (data: IBook) => bookService.createBook(data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['books']
			})
		}
	})
}
