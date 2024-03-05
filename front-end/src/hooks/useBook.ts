import { useQuery } from '@tanstack/react-query'

import { IBook } from '@/types/book.types'

import { bookService } from '@/services/book.service'

export function useBook(id: string) {
	return useQuery<IBook>({
		queryKey: ['book'],
		queryFn: () => bookService.getBook(id)
	})
}
