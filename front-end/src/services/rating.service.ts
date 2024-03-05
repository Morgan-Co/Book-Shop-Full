import { IRating } from '@/types/book.types'

import { axiosClassic, axiosWithAuth } from '@/api/interseptors'

class RatingService {
	private BASE_URL = '/rating'

	async createRating(data: IRating) {
		const response = await axiosWithAuth.post<IRating>(this.BASE_URL, data)
		return response.data
	} 

	async getRating(id: string) {
		const response = await axiosClassic.get<IRating[]>(`${this.BASE_URL}/${id}`)
		return response.data
	}
}

export const ratingService = new RatingService()
