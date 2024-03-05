import { useQuery } from '@tanstack/react-query'

import { ICategory } from '@/types/book.types'

import { categoryService } from '@/services/category.service'

export function useBookCategory(id: string) {
	const { data: category } = useQuery({
		queryKey: ['book-category', id],
		queryFn: () => categoryService.getBookCategory(id)
	})

	return { category }
}
