import { ImageInterface } from '@/types/book.types'

import { axiosClassic } from '@/api/interseptors'

class BookImageService {
	private BASE_URL = '/image'

	async getBookImage(id: string) {
		const response = await axiosClassic.get<ImageInterface[]>(
			`${this.BASE_URL}/${id}`
		)
		return response.data
	}
}

export const bookImageService = new BookImageService()
