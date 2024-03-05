import { useQuery } from '@tanstack/react-query'

import { IBook } from '@/types/book.types'

import { bookService } from '@/services/book.service'

export function useBooks(id: string) {
	return useQuery<IBook[]>({
		queryKey: ['books'],
		queryFn: () => bookService.getBooksWithCategory(id)
	})
}
