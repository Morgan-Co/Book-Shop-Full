import { useQuery } from '@tanstack/react-query'

import { ratingService } from '@/services/rating.service'

export function useRating(id: string) {
	const { data: rating } = useQuery({
		queryKey: ['rating', id],
		queryFn: () => ratingService.getRating(id)
	})

	return { rating }
}
