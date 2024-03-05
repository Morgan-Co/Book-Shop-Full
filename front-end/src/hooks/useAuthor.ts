import { useQuery } from '@tanstack/react-query'

import { IAuthor } from '@/types/book.types'

import { authorService } from '@/services/author.service'

export function useAuthor(state: 'all' | 'byId', id?: string) {
	const { data: authors } = useQuery({
		queryKey: ['author', state],
		queryFn: async () => {
			if (state === 'all') {
				return await authorService.getAll()
			}
			return await authorService.getById(id!)
		}
	})

	return { authors }
}
