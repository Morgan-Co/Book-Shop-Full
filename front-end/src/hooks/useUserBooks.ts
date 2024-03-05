import { useQuery } from '@tanstack/react-query'

import { userBooksService } from '@/services/user-books.service'

export function useUserBooks() {
	const { data: userBooks } = useQuery({
		queryKey: ['user-books'],
		queryFn: () => userBooksService.getUserBooks()
	})

	return { userBooks }
}
