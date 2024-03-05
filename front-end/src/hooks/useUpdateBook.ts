import { useMutation, useQueryClient } from '@tanstack/react-query'

import { IBook } from '@/types/book.types'

import { bookService } from '@/services/book.service'

export function useUpdateBook() {
	const queryClient = useQueryClient()
	return useMutation<IBook, Error, { id: string; data: IBook }>({
		mutationKey: ['updateBook'],
		mutationFn: ({ id, data }) => bookService.updateBook(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['books']
			})
		}
	})
}
