import { useMutation, useQueryClient } from '@tanstack/react-query'

import { userBooksService } from '@/services/user-books.service'

export function useDeleteUserBooks() {
	const client = useQueryClient()
	const { mutate: deleteUserBook } = useMutation({
		mutationKey: ['delete-user-books'],
		mutationFn: (id: string) => userBooksService.removeUserBooks(id),
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['user-books']
			})
		}
	})

	return { deleteUserBook }
}
