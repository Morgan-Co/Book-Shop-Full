import { useQuery } from '@tanstack/react-query'

import { ICategory } from '@/types/book.types'

import { categoryService } from '@/services/category.service'

export function useCategory() {
	const { data: categories } = useQuery<ICategory[]>({
		queryKey: ['all-category'],
		queryFn: () => categoryService.getAll()
	})

	return { categories }
}
