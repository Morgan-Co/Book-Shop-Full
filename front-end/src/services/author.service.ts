import type { IAuthor } from '@/types/book.types'

import { axiosClassic } from '@/api/interseptors'

class AuthorService {
	private BASE_URL = '/author'

	async getAll() {
		const response = await axiosClassic.get(this.BASE_URL)
		return response.data as IAuthor[]
	}

	// async getById(id: string) {
	// 	const response = await axiosClassic.get(`${this.BASE_URL}/${id}`)
	// 	return response.data as IAuthor
	// }

	async getById(id: string) {
		const response = await axiosClassic.get(`${this.BASE_URL}/${id}`)
		return response.data
	}
}

export const authorService = new AuthorService()
