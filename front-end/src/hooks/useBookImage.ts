import { useQuery } from '@tanstack/react-query'

import { bookImageService } from '@/services/book-image.service'

export function useBookImage(id: string) {
	return useQuery({
		queryKey: ['book-image'],
		queryFn: () => bookImageService.getBookImage(id)
		
	})
}
